import { Router } from 'express';
import { getAll, getAllTracksSmart, getTrack } from '../controllers/pistaController.js';

// Creem un router
const router = Router();

// I configurem tres rutes de tipus Get, les quals fan 
// ús dels diferents controladors definits en pistaController 
// (getAllTrackSmart, getTrack i getAll)

// Ruta per obtenir un llistat simple de pistes
router.get('/simple', getAllTracksSmart);

// Ruta per obtenir informació completa d'una pista
router.get('/track/:id', getTrack);

// Ruta per obtenir informació completa de totes les pistes
router.get('/', getAll);

// fem visible des de fora el router
export default router;