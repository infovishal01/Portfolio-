import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI!;

// Check ENV
if (!MONGODB_URI) {

  throw new Error(
    "Please define MONGODB_URI in .env.local"
  );
}

// Global Cache
let cached =
  (global as any).mongoose;

if (!cached) {

  cached =
    (global as any).mongoose = {

      conn: null,

      promise: null,
    };
}

// Connect Function
export async function connectDB() {

  // Already Connected
  if (cached.conn) {

    console.log(
      "MongoDB already connected"
    );

    return cached.conn;
  }

  // Create Connection
  if (!cached.promise) {

    const options = {

      bufferCommands: false,
    };

    cached.promise =
      mongoose
        .connect(
          MONGODB_URI,
          options
        )
        .then((mongoose) => {

          console.log(
            "MongoDB Connected Successfully"
          );

          return mongoose;
        });
  }

  try {

    cached.conn =
      await cached.promise;

  } catch (error) {

    cached.promise = null;

    console.log(
      "MongoDB Connection Error:",
      error
    );

    throw error;
  }

  return cached.conn;
}