const mongoose = require("mongoose")
require("dotenv").config()

async function main(){
  try {
    mongoose.set("strictQuery",true);
    await mongoose.connect(
      `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.ljkhof0.mongodb.net/`
    );
    console.log("Conectado ao banco")
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main