const express = require("express");
const cors = require("cors");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

app.use(cors());
app.use(express.json());

let db;

// Connect to MongoDB
MongoClient.connect(mongoUri)
  .then(client => {
    db = client.db(dbName);
    console.log("✅ Connected to MongoDB");

    // Start the server
    module.exports = async (req, res) => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    }
    
    // app.listen(port, () => {
    //   console.log(`🚀 Server running at http://localhost:${port}`);
    // });
  })
  .catch(err => console.error("MongoDB connection error:", err));

   app.post("/products", async (req, res) => {
  try {
    const product = req.body;

    const result = await db.collection("products").insertOne(product);
    res.status(201).json({ message: "Product inserted", insertedId: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: "Failed to insert product" });
  }
});

  app.get("/products", async (req, res) => {
  const product = await db.collection("products").find().toArray();
  res.json(product);
});
// GET single product by ID

 app.get('/products/:id', async (req, res) => {
  const id = req.params.id;
  const product = await db.collection("products").findOne({ _id: new ObjectId(id) });
  res.json(product);
});
