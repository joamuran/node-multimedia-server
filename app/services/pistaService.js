import PistaRepository from '../repositories/pistaRepository.js';

// Classe PistaService. Ofereix un servei per obtenir les pistes
// a partir del repositori.

class PistaService {
  constructor() {
    // Creem una referència al repositori
    this.repository = PistaRepository;
    // En el constructor definim la llista de pistes buida
    this.pistes = [];
  }

  
   // Inicialitza les pistes processant la informació del repositori.
  async initializeTracks() {
    try {
      const rawPistas = await this.repository.getAllRawPistas();

      this.pistes = rawPistas.map(({ filePath, metadata }) => ({
        id: filePath.split('/').pop(), // Nom del fitxer com a ID
        title: metadata.common.title || 'Sense Títol',
        artist: metadata.common.artist || 'Autor Desconegut',
        album: metadata.common.album || 'Àlbum Desconegut',
        duration: metadata.format.duration || 0,
        format: metadata.format.codec || 'Format desconegut',
        genre: metadata.common.genre || 'Gènere desconegut',
        cover: metadata.common.picture || null
      }));
    } catch (err) {
      console.error('Error inicialitzant les pistes:', err.message);
      throw new Error('No s\'han pogut inicialitzar les pistes');
    }
  }

  // Retorna totes les pistes processades.
  getAllTracks() {
    return this.pistes;
  }

  // retorna les pistes processades en format curt
  getAllTracksSmart() {
    return this.pistes.map(({ id, title, artist, duration }) => ({
      id,
      title,
      artist,
      duration
    }));
  }

  // Retorna tota la informació sobre una pista concreta
  getTrack(id){
    // Fem ús del mètode find
    return this.pistes.find(track => track.id === id) || null;
  }
}

// Exportem la classe completa
export default new PistaService();