import { mixin } from "../src/mixin";

import { A, B, C, D } from "./utils/classes";

describe("Mixin", function() {
  const a = new A();
  const b = new B();
  const c = new C();
  const d = new D();

  describe("1 class (should be used with just extends though)", function() {
    class MixedClass extends mixin(A) {}
    const Mixed = mixin(A);

    [new MixedClass(), new Mixed()].forEach(mixed =>
      it("should be mixed together", function() {
        match1Class(mixed, a);
      })
    );
  });

  describe("2 classess", function() {
    class MixedClass extends mixin(A, B) {}
    const Mixed = mixin(A, B);

    [new MixedClass(), new Mixed()].forEach(mixed =>
      it("should be mixed together", function() {
        match2Classes(mixed, b);
      })
    );
  });

  describe("3 classess", function() {
    class MixedClass extends mixin(A, B, C) {}
    const Mixed = mixin(A, B, C);

    [new MixedClass(), new Mixed()].forEach(mixed =>
      it("should be mixed together", function() {
        match3Classes(mixed, c);
      })
    );
  });

  describe("4 classess", function() {
    class MixedClass extends mixin(A, B, C, D) {}
    const Mixed = mixin(A, B, C, D);

    [new MixedClass(), new Mixed()].forEach(mixed =>
      it("should be mixed together", function() {
        match4Classes(mixed, d);
      })
    );
  });

  it("Should be able to add own properties", function() {
    const value = 1;
    class MixedClass extends mixin(A, B) {
      public test: number = value;
    }
    const mixed = new MixedClass();

    expect(mixed.test).toBe(value);
  });

  it("Should be able to add own methods", function() {
    const value = 1;
    class MixedClass extends mixin(A, B) {
      public test(): number {
        return value;
      }
    }
    const mixed = new MixedClass();

    expect(mixed.test()).toBe(value);
  });

  it("Should be able to overwrite properties", function() {
    const value = "test";
    class MixedClass extends mixin(A, B) {
      public overwrittenProp: string = value;
    }
    const mixed = new MixedClass();

    expect(mixed.overwrittenProp).toBe(value);
    expect(mixed.overwrittenPropGetter()).toBe(value);
  });

  it("Should be able to overwrite methods", function() {
    const value = "test";
    class MixedClass extends mixin(A, B) {
      public overwrittenMethod(): string {
        return value;
      }
    }
    const mixed = new MixedClass();

    expect(mixed.overwrittenMethod()).toBe(value);
    expect(mixed.overwrittenMethodCaller()).toBe(value);
  });

  function match4Classes(mixed: A & B & C & D, finalClass: { overwrittenProp: string; overwrittenMethod(): string }) {
    match3Classes(mixed, finalClass);
    expect(mixed.d).toBe(d.d);
    expect(mixed.getD()).toBe(d.getD());
  }

  function match3Classes(mixed: A & B & C, finalClass: { overwrittenProp: string; overwrittenMethod(): string }) {
    match2Classes(mixed, finalClass);
    expect(mixed.c).toBe(c.c);
    expect(mixed.getC()).toBe(c.getC());
  }

  function match2Classes(mixed: A & B, finalClass: { overwrittenProp: string; overwrittenMethod(): string }) {
    expect(mixed.a).toBe(a.a);
    expect(mixed.b).toBe(b.b);
    expect(mixed.getA()).toBe(a.getA());
    expect(mixed.getB()).toBe(b.getB());
    expect(mixed.overwrittenMethod()).toBe(finalClass.overwrittenMethod());
    expect(mixed.overwrittenPropGetter()).toBe(finalClass.overwrittenProp);
    expect(mixed.overwrittenMethodCaller()).toBe(finalClass.overwrittenMethod());
  }

  function match1Class(mixed: A, finalClass: { overwrittenProp: string; overwrittenMethod(): string }) {
    expect(mixed.a).toBe(a.a);
    expect(mixed.getA()).toBe(a.getA());
    expect(mixed.overwrittenMethod()).toBe(finalClass.overwrittenMethod());
    expect(mixed.overwrittenPropGetter()).toBe(finalClass.overwrittenProp);
    expect(mixed.overwrittenMethodCaller()).toBe(finalClass.overwrittenMethod());
  }
});
