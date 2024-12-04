import  PistaService from '../services/pistaService.js';

// Classe controlador que gestiona les peticions relacionades amb pistes
// Aqueust fa ús del servei PistaService.

class PistaController {
  // Controlador que retorna totes les pistes disponibles
  getAll(req, res) {
    const pistes = PistaService.getAllTracks();
    res.json({tracks: pistes });
  }

  // Controlador que retorna totes les pistes disponibles
  // en un format senzill.
  getAllTracksSmart(req, res){
    const pistes = PistaService.getAllTracksSmart();
    res.json({tracks: pistes });
  }

  // Controlador que retorna la informació completa
  // sobre una pista.
  getTrack(req, res){
    // Passem l'id dels paràmetres
    const id=decodeURIComponent(req.params['id']);
    const pista=PistaService.getTrack(id);
    res.json({trackinfo: pista});
  }

  // Mètode que afegiria una pista. De moment, 
  // no l'utilitzem
  add(req, res) {
    const { id, title, author, cover } = req.body;
    if (!id || !title || !author || !cover) {
      return res.status(400).send('Falten camps al cos de la petició.');
    }
    addPista({ id, title, author, cover });
    res.status(201).send('Pista afegida correctament.');
  }
}

// Exposem els diferents controladors
const pistaController = new PistaController();
export const add = pistaController.add.bind(pistaController);
export const getAll = pistaController.getAll.bind(pistaController);
export const getAllTracksSmart = pistaController.getAllTracksSmart.bind(pistaController);
export const getTrack = pistaController.getTrack.bind(pistaController);