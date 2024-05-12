setTimeout(() => {
  // Cetak uptime dari process
  console.log(process.uptime());

  // Import modul os
  const os = require("os");

  // Cetak uptime dari sistem operasi
  console.log(os.uptime());

  // Cetak total memori yang tersedia di sistem operasi
  console.log(os.totalmem());

  // Cetak total heap memori
  console.log(process.memoryUsage().heapTotal);
}, 1000);
