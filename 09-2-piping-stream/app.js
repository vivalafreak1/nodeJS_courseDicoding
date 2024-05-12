const { createReadable, createWritable } = require("./utils");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// 1. Buatlah sebuah readable stream dengan nama `readable` menggunakan fungsi `createReadable`
const readable = createReadable(alphabet);

// 2. Buatlah sebuah writable stream dengan nama `writable` menggunakan fungsi `createWritable`.
const writable = createWritable();

// 3. Pipe `readable` ke `writable`.
readable.pipe(writable);
