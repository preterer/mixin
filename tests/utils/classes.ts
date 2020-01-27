export class A {
  public a: string = "a";

  public overwrittenProp: string = "a";

  public getA(): string {
    return this.a;
  }

  public overwrittenMethod(): string {
    return "a";
  }

  public overwrittenPropGetter(): string {
    return this.overwrittenProp;
  }

  public overwrittenMethodCaller(): string {
    return this.overwrittenMethod();
  }
}

export class B {
  public b: string = "b";

  public overwrittenProp: string = "b";

  public getB(): string {
    return this.b;
  }

  public overwrittenMethod(): string {
    return "b";
  }
}

export class C {
  public c: string = "c";

  public overwrittenProp: string = "c";

  public getC(): string {
    return this.c;
  }

  public overwrittenMethod(): string {
    return "c";
  }
}

export class D {
  public d: string = "d";

  public overwrittenProp: string = "d";

  public getD(): string {
    return this.d;
  }

  public overwrittenMethod(): string {
    return "d";
  }
}
