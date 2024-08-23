Day 1: Learning Rust Basics

Mutable and Immutable References: In Rust, you can have multiple immutable references or one mutable reference to a variable, but not both at the same time. This ensures data safety and prevents data races.

Code Snippet


 fn main() {
    let mut s = String::from("hello");

    // Immutable reference
    let r1 = &s;
    let r2 = &s;
    println!("Immutable references: {}, {}", r1, r2);

    // Mutable reference
    let r3 = &mut s;
    r3.push_str(", world");
    println!("Mutable reference: {}", r3);
  }


Explanation:
Immutable References (r1, r2): You can create multiple immutable references to a variable, which means you can read the data but cannot modify it.
Mutable Reference (r3): You can create one mutable reference that allows you to modify the data. However, when a mutable reference exists, no other references (mutable or immutable) can exist to prevent data races.

