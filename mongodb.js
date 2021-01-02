// const MongoClient = require("mongodb").MongoClient;

//note jika mongo db belum di beri auth
// const connectionString = "mongodb://localhost:27017"; // tanpa authentication
// const connectionString =
//   "mongodb://ExtraSuperUser:Dausganteng12@localhost:27017?authSource=admin";

//uji coba login ke mongo db
// MongoClient.connect(
//   connectionString,
//   { useUnifiedTopology: true },
//uji coba penggunaan callback untuk menghubungkan mongo db dengan exxpress js
// MongoClient.connect(connectionString, { useUnifiedTopology: true }, callback);
//   (error, client) => {                               <----------|
//     if (error) return console.console.error(error);  <----------|
//     console.log("Server database Connect!");         <----------|
//   }
// );

//uji coba connection dengan menggunakan metode promise dan berhasil
// MongoClient.connect(connectionString, { useUnifiedTopology: true })
//   .then((client) => {
//     console.log("Server database connect!");
//   })
//   .catch((error) => console.error(error));

//uji coba connection dengan menggunakan metode async / await dan berhasil tanpa respon error
// (async () => {
//   try {
//     const client = await MongoClient.connect(connectionString, {
//       useUnifiedTopology: true,
//     });
//   } catch (error) {
//     console.error(error);
//   }
// })();

//uji coba menampilkan data dengan connection menggunakan metode async / await dan berhasil tanpa respon error dan berhasil
//client.db('') <--- lock database
// (async () => {
//   try {
//     const client = await MongoClient.connect(connectionString, {
//       useUnifiedTopology: true,
//     });
//     const db = client.db("latihan"); //<------lock database
//     //kode collection quotes
//     const quotes = await db.collection("quotes").find().toArray();
//     console.log(quotes);
//   } catch (error) {
//     console.error(error);
//   }
// })();

//uji coba menampilkan data menggunakan findOne()
//dengan connection menggunakan metode async / await
//dan berhasil tanpa respon error dan berhasil
// (async () => {
//   try {
//     const client = await MongoClient.connect(connectionString, {
//       useUnifiedTopology: true,
//     });
//     const db = client.db("latihan"); //<------lock database
//     //kode collection quotes
//     const quotes = await db.collection("quotes").findOne(); //<--------bagian ini kita ubah jadi findOne()
//     console.log(quotes);
//   } catch (error) {
//     console.error(error);
//   }
// })();

//uji coba menampilkan data menggunakan find()
//dengan connection menggunakan metode async / await
//dan berhasil tanpa respon error dan berhasil
// (async () => {
//   try {
//     const client = await MongoClient.connect(connectionString, {
//       useUnifiedTopology: true,
//     });
//     const db = client.db("latihan"); //<------lock database
//     //kode collection quotes
//     const quotes = await db
//       .collection("quotes")
//       .find({
//         word: "ora eat labora", //<--------bagian ini kita apa kriteria yang kita cari
//       })
//       .toArray();
//     console.log(quotes);
//   } catch (error) {
//     console.error(error);
//   }
// })();

//uji coba menampilkan data menggunakan find() dengan metode regular expression
//dengan connection menggunakan metode async / await
//dan berhasil tanpa respon error dan berhasil
// (async () => {
//   try {
//     const client = await MongoClient.connect(connectionString, {
//       useUnifiedTopology: true,
//     });
//     const db = client.db("latihan"); //<------lock database
//     //kode collection quotes
//     const quotes = await db
//       .collection("quotes")
//       .find({
//         word: /gitu/, //<--------bagian ini Menggunakan regular expression
//       })
//       .toArray();
//     console.log(quotes);
//   } catch (error) {
//     console.error(error);
//   }
// })();
