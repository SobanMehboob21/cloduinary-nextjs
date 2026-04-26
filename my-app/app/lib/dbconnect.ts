import mongoose, { ConnectOptions } from "mongoose";

// const MONGODB_URI = "mongodb+srv://nextpractice:next321practice@cluster0.bhzmk9z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const MONGODB_URI =
  "mongodb+srv://dbuser:clodinary123@cluster0.odibl9a.mongodb.net";

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define MONGODB_URI in .env.local");
}

// Global cache to avoi d multiple connections during hot reload in dev
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  
  if (!cached.promise) {
    const opts: ConnectOptions = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("✅ MongoDB connected");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
