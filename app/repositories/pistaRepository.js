import FileDataProvider from '../infrastructure/fileDataProvider.js';

class PistaRepository {
  constructor() {
    // Generem una instància de FileDataProvider, 
    // que serà el nostre proveïdor de dades a 
    // partir de la informació dels fitxers.
    this.fileProvider = FileDataProvider;
  }

  // Obté totes les pistes en format cru (només noms i metadades).
  // Com que la informació l'obtenim amb Promeses (semblant als Future
  // de Dart), hem de fer ús d'async/await.
  async getAllRawPistas() {
    const files = await this.fileProvider.listAudioFiles();
    const metadataPromises = files.map(async (filePath) => {
      const metadata = await this.fileProvider.getFileMetadata(filePath);
      console.log(metadata);
      return { filePath, metadata };
    });
    return Promise.all(metadataPromises);
  }

}

// Exposem el repositori
export default new PistaRepository();
