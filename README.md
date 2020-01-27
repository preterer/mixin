# mixin

Extendable typescript mixin approach. Currently supports up to 6 mixed classes.

## Usage

```typescript
class A {
    public a: string = "a";

    public getA(): string {
        return this.a;
    }

    public overwritten(): string {
        return "a";
    }
}

class B {
    public b: string = "b";

    public getB(): string {
        return this.b;
    }

    public overwritten(): string {
        return "b":
    }
}

class C extends mixin(A, B) {
    public c: string = "c";

    public getC(): string {
        return this.c;
    }

    public overwritten(): string {
        return "c";
    }
}

const c = new C();

c.a; // "a"
c.b; // "b"
c.c; // "c"
c.getA(); // "a"
c.getB(); // "b"
c.getC(); // "c"
c.overwritten(); // "c"

const MixedClass = mixin(A, B);
const mixed = new MixedClass();

mixed.a; // "a"
mixed.b; // "b"
mixed.getA(); // "a"
mixed.getB(); // "b"
mixed.overwritten(); // "b"
```

## Project setup

```
npm install
```

### Tests

```
npm run test
```

### Build

```
npm run build
```
