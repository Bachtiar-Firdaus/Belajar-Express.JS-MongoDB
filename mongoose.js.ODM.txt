const mongoose = require("mongoose");
//catatan untuk lock collection  berada di link jika tidak di deklarasikan lari ke default test
mongoose.connect(
  "mongodb://ExtraSuperUser:Dausganteng12@localhost:27017/latihan?authSource=admin",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const productSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^\S+@\S+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid Email!!!`,
    },
  },
  password: { type: String },
  name: {
    type: String,
    required: [true, "Field Nama harus ada"],
    minlength: 3,
    maxlength: 50,
    enum: ["ega", "dayat", "daus", "elfin"],
  },
  price: {
    type: Number,
    required: [true, "Field Price harus ada"],
    min: 1000,
    max: 1000000,
  },
  stock: Number,
  status: { type: Boolean, default: true },
});
const Product = mongoose.model("Product", productSchema);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", async () => {
  //<-------------
  //<-------------
  // menampilkan dengan method find()
  // await Product.find().exec((err, result) => {
  //   console.log(result);
  // });
  //<-------------
  //<-------------
  //menampilkan dengan methode async/await
  // const products = await Product.find();
  // console.log(products);
  //<-------------
  //<-------------
  //menampilkan semua data dengan kriteria
  // const products = await Product.find({
  //   _id: "5fed90e6d49ebe122ce00cf9",
  // });
  // console.log(products);
  //<-------------
  //<-------------
  //menampilkan satu data dengan kriteria yang terpenuhi
  // const product = await Product.findOne({
  //   _id: "5fed90e6d49ebe122ce00cf9",
  // });
  // console.log(product);
  //<-------------
  //<-------------
  //menampilkan satu data dengan id
  // const product = await Product.findById("5fed90e6d49ebe122ce00cf9");
  // console.log(product);
  //<-------------
  //<-------------
  //{<--darisini
  //menambahakan data baru
  // const newProduct = await Product.create({
  //   name: "gajah",
  //   price: 50000,
  //   stock: 20,
  //   status: true,
  // });
  //<-------------
  //<-------------
  //untuk menyimpan data ke databases
  // newProduct.save((error, newProduct) => {
  //   if (error) return console.error(error);
  //   console.log(newProduct);
  // });
  //}<---sampaisini
  //<-------------
  //<-------------
  //menambahakan data dengan cara yang berbeda
  // const newProduct = new Product();
  // newProduct.name = "Meja";
  // newProduct.price = 2313564;
  // newProduct.stock = 10;
  // newProduct.status = true;
  // const insert = await newProduct.save();
  // console.log(insert);
  //<-------------
  //<-------------
  //update data product
  // await Product.updateOne(
  //   { _id: "5feded98c7e46a06685dbe15" },
  //   { name: "Meja doyok" }
  // );
  //<-------------
  //<-------------
  //cara lain untuk mengupdate data product
  // const updateProduct = await Product.findById("5feded98c7e46a06685dbe15");
  // updateProduct.name = "mental bangkek";
  // const update = await updateProduct.save();
  // console.log(update);
  //<-------------
  //<-------------
  //Menghapus suatu data
  // await Product.deleteOne({
  //   _id: "5feded98c7e46a06685dbe15",
  // });
  try {
    // const newProduct = await Product.create({
    //   username: "ega",
    //   email: "ega@gmail.com",
    //   password: "12345678",
    //   name: "daus",
    //   price: 1000,
    // });
    // console.log(newProduct);
    //<-------------
    //<-------------{
    // const query = Product.find();
    // //<-------------
    // //<-------------
    // // query.where({
    // //   nama: "daus",
    // // });
    // //<-------------
    // //<-------------
    // //select name dipisahkan dengan sepasi
    // query.select("username password stock");
    // //membatasi penarikan data
    // query.limit(3);
    // //menshortir secara desc
    // query.sort({ stock: -1 });
    // //pelengkap
    // const list_product = await query.exec();
    // console.log(list_product);///}
    // //<-------------
    // //<-------------
    //untuk penggunaan yang lebih singkat
    // const list_product = await Product.find()
    //   .select("name stock")
    //   .where({
    //     stock: {
    //       $gte: 5,
    //     },
    //   })
    //   .limit(3)
    //   .sort({
    //     stock: -1,
    //   })
    //   .exec();
    // console.log(list_product);
  } catch (error) {
    console.log(error.message);
    // const error_name = error.errors["name"] && error.errors["name"].message;
    // if (error_name) console.log(error_name);
  }
});
