export function mixin<ClassA>(ctorA: { new (...args: any[]): ClassA }): { new (...args: any[]): ClassA };

export function mixin<ClassA, ClassB>(
  ctorA: { new (...args: any[]): ClassA },
  ctorB: { new (...args: any[]): ClassB }
): { new (...args: any[]): ClassA & ClassB };

export function mixin<ClassA, ClassB, ClassC>(
  ctorA: { new (...args: any[]): ClassA },
  ctorB: { new (...args: any[]): ClassB },
  ctorC: { new (...args: any[]): ClassC }
): { new (...args: any[]): ClassA & ClassB & ClassC };

export function mixin<ClassA, ClassB, ClassC, ClassD>(
  ctorA: { new (...args: any[]): ClassA },
  ctorB: { new (...args: any[]): ClassB },
  ctorC: { new (...args: any[]): ClassC },
  ctorD: { new (...args: any[]): ClassD }
): { new (...args: any[]): ClassA & ClassB & ClassC & ClassD };

export function mixin<ClassA, ClassB, ClassC, ClassD, ClassE>(
  ctorA: { new (...args: any[]): ClassA },
  ctorB: { new (...args: any[]): ClassB },
  ctorC: { new (...args: any[]): ClassC },
  ctorD: { new (...args: any[]): ClassD },
  ctorE: { new (...args: any[]): ClassE }
): { new (...args: any[]): ClassA & ClassB & ClassC & ClassD & ClassE };

export function mixin<ClassA, ClassB, ClassC, ClassD, ClassE, ClassF>(
  ctorA: { new (...args: any[]): ClassA },
  ctorB: { new (...args: any[]): ClassB },
  ctorC: { new (...args: any[]): ClassC },
  ctorD: { new (...args: any[]): ClassD },
  ctorE: { new (...args: any[]): ClassE },
  ctorF: { new (...args: any[]): ClassF }
): { new (...args: any[]): ClassA & ClassB & ClassC & ClassD & ClassE & ClassF };

export function mixin(...constructors: Array<{ new (...args: any[]): any }>): { new (...args: any[]): any } {
  class Mixed {
    constructor() {
      constructors.forEach(baseCtor => {
        const baseObject = new baseCtor();
        Object.getOwnPropertyNames(baseObject).forEach(name =>
          Object.defineProperty(this, name, Object.getOwnPropertyDescriptor(baseObject, name) as PropertyDescriptor)
        );
      });
    }
  }

  constructors.forEach(baseCtor =>
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name =>
      Object.defineProperty(
        Mixed.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) as PropertyDescriptor
      )
    )
  );

  return Mixed as any;
}
