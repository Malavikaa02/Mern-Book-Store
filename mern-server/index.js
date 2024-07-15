const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// MongoDB configuration
const uri = "mongodb+srv://mern-book-store:83oGiH901qcpBpIU@cluster0.8ywyc5q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    // Create a collection of documents
    const bookCollections = client.db("BookInventory").collection("books");

    // Insert a book to the db: POST method
    app.post("/upload-book", async (req, res) => {
      const data = req.body;
      try {
        const result = await bookCollections.insertOne(data);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Update a book data: PATCH method
    app.patch("/book/:id", async (req, res) => {
      const id = req.params.id;

      // Validate ObjectId
      if (!ObjectId.isValid(id)) {
        return res.status(400).send({ error: "Invalid ID format" });
      }

      const updateBookData = req.body;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };

      const updateDoc = {
        $set: {
          ...updateBookData
        }
      };

      try {
        const result = await bookCollections.updateOne(filter, updateDoc, options);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Delete a book data: DELETE method
    app.delete("/book/:id", async (req, res) => {
      const id = req.params.id;

      // Validate ObjectId
      if (!ObjectId.isValid(id)) {
        return res.status(400).send({ error: "Invalid ID format" });
      }

      const filter = { _id: new ObjectId(id) };

      try {
        const result = await bookCollections.deleteOne(filter);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Find by category: GET method
    app.get("/all-books", async (req, res) => {
      let query = {};
      if (req.query?.category) {
        query = { category: req.query.category };
      }

      try {
        const result = await bookCollections.find(query).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Get single book data: GET method
    app.get("/book/:id", async (req, res) => {
      const id = req.params.id;

      // Validate ObjectId
      if (!ObjectId.isValid(id)) {
        return res.status(400).send({ error: "Invalid ID format" });
      }

      const filter = { _id: new ObjectId(id) };

      try {
        const result = await bookCollections.findOne(filter);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
