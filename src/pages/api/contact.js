import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const { name, address, phone } = req.body;

  // Replace the following connection string with your own MongoDB connection string
  const uri =
    'mongodb+srv://aasha:aasha@cluster0.nyriqzn.mongodb.net/?retryWrites=true&w=majority';

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const database = client.db('my-database');
    const collection = database.collection('contacts');
    const result = await collection.insertOne({ name, address, phone });
    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while saving your contact.' });
  } finally {
    await client.close();
  }
}
