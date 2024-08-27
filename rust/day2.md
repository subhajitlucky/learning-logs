
# Variables and Data Types in Rust

## Introduction

Rust emphasizes safety, performance, and concurrency. This guide covers the basics of variables and data types in Rust.

## Variables in Rust

- **Immutable Variables**: Default; cannot change value once assigned.
```rust
let x = 5;
```

- **Mutable Variables**: Use `mut` keyword to allow changes.
```rust
let mut y = 10;
y = 20;
```

- **Shadowing**: Allows reuse of variable names and changing types.
```rust
let z = 30;
let z = z * 2;
```

## Data Types in Rust

Rust's type system includes scalar and compound types.

### Scalar Types

- **Integers**: Signed (`i8`, `i32`) and unsigned (`u8`, `u32`) integers.
- **Floating-Point Numbers**: `f32`, `f64`.
- **Boolean**: `true`, `false`.
- **Character**: Represents a single character (`char`).

### Compound Types

- **Tuples**: Fixed-size group of different types.
```rust
let tuple: (i32, f64) = (500, 6.4);
```

- **Arrays**: Fixed-size collection of elements of the same type.
```rust
let array: [i32; 4] = [1, 2, 3, 4];
```

## Conclusion

Understanding variables and data types is fundamental in Rust programming, providing safety and predictability.
