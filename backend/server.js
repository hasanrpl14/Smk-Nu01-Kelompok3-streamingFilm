import express from "express";
import sequelize from "./database.js";
import dotenv from "dotenv";
import router from "./routes/index.js";
dotenv.config();

const app = express();
// Middleware untuk mengizinkan parsing body dalam format JSON
app.use(express.json());

app.use(router);

// Sinkronisasi model dengan database dan jalankan server
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully");
    // Sync database models
    // return sequelize.sync();
  })
  .then(() => {
    app.listen(4000, () => {
      console.log("Server berjalan pada port 4000");
    });
  })
  .catch((error) => {
    console.error(
      "Terjadi kesalahan saat sinkronisasi dengan database:",
      error
    );
  });

