const mongoose = require("mongoose");
async function main() {
  // mongoose.connect("mongod://localhost:27017/todolistDb", {
  //   useNewUrlParser: true,
  // });
  await mongoose.connect(
   " mongodb+srv://muskan:<password>@blogwebsite.jue2qrr.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
  mongoose.connect("mongodb://127.0.0.1:27017/blogWorld") //for local DB
}
main();

const postSchema = new mongoose.Schema({
    author: String,
    title: String,
    content: String,
    thumbnail:String,
    date:Number,
    like:Number,
    likedby:[String]
    });
    

const PosT = mongoose.model("post", postSchema);
module.exports = PosT
