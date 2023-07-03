import express from "express";

// import {
//   getUser,
// } from "../controller/UserController.js";
import { getUser, register } from "../controller/UserController.js";

import {
  getAllNegara,
  getNegaraById,
  createNegara,
  updateNegaraById,
  deleteNegaraById,
} from "../controller/NegaraController.js";

import {
  getAllRumahProduksi,
  getRumahProduksiById,
  createRumahProduksi,
  updateRumahProduksiById,
  deleteRumahProduksiById,
} from "../controller/RumahProduksiController.js";

import {
  getAllArtis,
  getArtisById,
  createArtis,
  updateArtisById,
  deleteArtisById,
} from "../controller/ArtisController.js";

import {
  getAllFilm,
  getFilmById,
  createFilm,
  updateFilmById,
  deleteFilmById,
} from "../controller/FilmController.js";

const router = express.Router();

router.get("/user", getUser);
router.post("/user", register);

router.get("/negara", getAllNegara);
router.get("/negara/:id", getNegaraById);
router.post("/negara", createNegara);
router.put("/negara/:id", updateNegaraById);
router.delete("/negara/:id", deleteNegaraById);

router.get("/rumahproduksi", getAllRumahProduksi);
router.get("/rumahproduksi/:id", getRumahProduksiById);
router.post("/rumahproduksi", createRumahProduksi);
router.put("/rumahproduksi/:id", updateRumahProduksiById);
router.delete("/rumahproduksi/:id", deleteRumahProduksiById);

router.get("/artis", getAllArtis);
router.get("/artis/:id", getArtisById);
router.post("/artis", createArtis);
router.put("/artis/:id", updateArtisById);
router.delete("/artis/:id", deleteArtisById);

router.get("/film", getAllFilm);
router.get("/film/:id", getFilmById);
router.post("/film", createFilm);
router.put("/film/:id", updateFilmById);
router.delete("/film/:id", deleteFilmById);

export default router;
