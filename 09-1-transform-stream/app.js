const { Transform } = require("stream");

function createBase64TransformStream() {
  return new Transform({
    transform(chunk, encoding, callback) {
      // Konversi data yang masuk menjadi base64
      const base64Data = chunk.toString("base64");
      // Kirim data yang sudah dikonversi
      callback(null, base64Data);
    },
  });
}

// Contoh penggunaan:
const base64TransformStream = createBase64TransformStream();

// Mengonversi string "Hello, World!" menjadi base64
base64TransformStream.write("Hello, World!");
base64TransformStream.end();

// Menangkap hasilnya
base64TransformStream.on("data", (data) => {
  console.log(data.toString()); // Output: SGVsbG8sIFdvcmxkIQ==
});
