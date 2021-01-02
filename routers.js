//import file wajib
const express = require("express");
const { updateLocale } = require("moment");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");
const routers = express.Router();
// untuk import file tambahan
const client = require("./connection");

//untuk codding
//uji coba menampilkan data
// routers.get("/products", async (req, res) => {
//   //   console.log(client);
//   if (client.isConnected()) {
//     const db = client.db("latihan");
//     // const products = await db.collection("products").find().toArray();<--- menampilakn seluruh collection
//     // const products = await db.collection("products").findOne();<---- menampilakan salah satu data dari dalamm colection
//     //uji coba menampilkan dengan kriteria id
//     // const products = await db.collection("products").find({_id: ObjectID("5feca61e36125894c7989a50"),}).toArray();
//     console.log(products);
//     res.send(products);
//   } else {
//     res.send("Koneksi database gagal");
//   }
// });

//ujicoba update
// routers.put("/products/:id", async (req, res) => {
//   const { id } = req.params;
//   // const payload = req.body;
//   // console.log(payload);
//   if (client.isConnected()) {
//     const db = client.db("latihan");
//     //coding update datanya
//     const productsUpdate = await db.collection("products").updateOne(
//       { _id: id },
//       {
//         $set: { name: "daus" },
//       }
//     );
//     // console.log(productsUpdate);
//     res.send(productsUpdate);
//   } else {
//     res.send("koneksi database gagal");
//   }
// });

//uji coba menampilkan dat  dengan lebih friendly dan kompleks dan berhasil
// routers.get("/products", async (req, res) => {
//   if (client.isConnected()) {
//     const db = client.db("latihan");
//     const products = await db.collection("products").find().toArray();
//     if (products.length > 0) {
//       res.send({
//         status: "succses",
//         message: "list product",
//         data: products,
//       });
//     } else {
//       res.send({
//         status: "succses",
//         message: "list product tidak ditemukan",
//         data: products,
//       });
//     }
//   } else {
//     res.send({
//       status: " error",
//       message: "koneksi database gagal",
//     });
//   }
// });

//uji coba menampilkan singgle products dengan lebih friendly dan kompleks dan berhasil
// routers.get("/product/:id", async (req, res) => {
//   if (client.isConnected()) {
//     const db = client.db("latihan");
//     const { id } = req.params;
//     console.log(id);
//     const product = await db.collection("products").findOne({
//       _id: ObjectID(id),
//     });

//     res.send({
//       status: "success",
//       message: "singgle products",
//       data: product,
//     });
//   } else {
//     res.send({
//       status: "error",
//       message: "koneksi database gagal",
//     });
//   }
// });

//jika ingin menambahkandata menggunakan form data
//menambahkan data product mengguna insertOne() dan req body
//routers.post('/product', multer().none(), async (req, res) => {
// routers.post("/products", async (req, res) => {
//   if (client.isConnected()) {
//     const { name, price, stock, status } = req.body;
//     const db = client.db("latihan");

//     const result = await db.collection("products").insertOne({
//       name: name,
//       price: price,
//       stock: stock,
//       status: status,
//     });
//     console.log(result);
//     if (result.insertedCount == 1) {
//       res.send({
//         status: "success",
//         message: "tambah product success",
//       });
//     } else {
//       res.send({
//         status: "warning",
//         message: "tambah product gagal",
//       });
//     }
//   } else {
//     res.send({
//       status: "error",
//       message: "koneksi database gagal",
//     });
//   }
// });

// mengedit data products dan berhasil
// routers.put("/product/:id", async (req, res) => {
//   if (client.isConnected()) {
//     const { id } = req.params;
//     const { name, price, stock, status } = req.body;
//     const db = client.db("latihan");
//     const result = await db.collection("products").updateOne(
//       { _id: ObjectID(id) },
//       {
//         $set: {
//           name: name,
//           price: price,
//           stock: stock,
//           status: status,
//         },
//       }
//     );
//     if (result.matchedCount == 1) {
//       res.send({
//         status: "success",
//         message: "update product success",
//       });
//     } else {
//       res.send({
//         status: "error",
//         message: "koneksi database gagal",
//       });
//     }
//   }
// });

//menghapus data product dan berhasil
// routers.delete("/product/:id", async (req, res) => {
//   if (client.isConnected()) {
//     const db = client.db("latihan");
//     const { id } = req.params;
//     const result = await db.collection("products").deleteOne({
//       _id: ObjectID(id),
//     });
//     if (result.deletedCount == 1) {
//       res.send({
//         status: "success",
//         message: "delete product success",
//       });
//     } else {
//       res.send({
//         status: "warning",
//         message: "delete product gagal",
//       });
//     }
//   } else {
//     res.send({
//       status: "error",
//       message: "koneksi database gagal",
//     });
//   }
// });

// routers.delete("/products/");
//untuk menjalankan aplikasi
module.exports = routers;
