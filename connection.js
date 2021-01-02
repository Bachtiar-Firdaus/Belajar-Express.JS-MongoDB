//import file wajib
const MongoClient = require("mongodb").MongoClient;

//untuk codding
const connectionString =
  "mongodb://ExtraSuperUser:Dausganteng12@localhost:27017?authSource=admin";

const client = new MongoClient(connectionString, {
  useUnifiedTopology: true,
});

//penggunaan wajib ASNC
(async () => {
  try {
    await client.connect();
  } catch (error) {
    console.error(error);
  }
})();

module.exports = client;

// uji coba sebelum digunakan async connect mongo db
// (async () => {
//   try {
//     await client.connect();
//     if (client.isConnected()) {
//       const db = client.db("latihan");
//       const products = await db.collection("products").findOne();
//       console.log(products);
//     } else {
//       console.log("koneksi database gagal");
//     }
//   } catch (error) {
//     console.error(error);
//   }
// })();

// untuk menjalankan aplikasi
// module.exports = client;
