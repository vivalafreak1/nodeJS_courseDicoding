/**
 * @TODO
 * Buatlah tiga buah buffer sebagai berikut:
 * 1. Bernama `unsafeBuffer` dan buatlah dengan cara unsafe dengan alokasi memori 100000 bytes.
 * 2. Bernama `safeBuffer` dan buatlah dengan cara safe dengan alokasi memori 100000 bytes.
 * 3. Bernama `stringBuffer` dan buatlah dari nilai string "Dicoding".
 */

// Buat tiga buffer seperti yang diminta
const unsafeBuffer = Buffer.allocUnsafe(100000); // Buat buffer tidak aman
const safeBuffer = Buffer.alloc(100000); // Buat buffer aman
const stringBuffer = Buffer.from("Dicoding"); // Buat buffer dari string "Dicoding"

// Cetak informasi tentang buffer yang telah dibuat
console.log("Unsafe Buffer:", unsafeBuffer);
console.log("Safe Buffer:", safeBuffer);
console.log("String Buffer:", stringBuffer);
