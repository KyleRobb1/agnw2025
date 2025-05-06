import { MongoClient } from 'mongodb';

const clientPromise = new MongoClient(process.env.MONGODB_URI || '', {
  serverSelectionTimeoutMS: 5000,
  maxPoolSize: 10,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default clientPromise;
