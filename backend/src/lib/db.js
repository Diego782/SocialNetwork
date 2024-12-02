import mongoose from "mongoose";
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo var.env
dotenv.config({ path: '../var.env' });

// Verificar que las variables de entorno se carguen correctamente
console.log("MONGODB_URI:", process.env.MONGODB_URI);

export const connectDB = async () => {
  try {
    // Conectar a MongoDB usando la URI de la variable de entorno
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};