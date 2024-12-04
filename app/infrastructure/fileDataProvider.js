import { parseFile } from 'music-metadata';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { readdir } from 'fs/promises';
import { statSync } from 'fs';

// Obté el directori actual de manera compatible amb ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

// Ruta al directori d'àudio
const audioDir = join(__dirname, '../../public/audio');
console.log(audioDir);

class FileDataProvider {
  // Retorna una llist adels fitxers mp3 o flac que hi ha al directori d'audios
  async listAudioFiles() {
    try {
      const files = await readdir(audioDir);
      return files
        .filter((file) => file.endsWith('.mp3') || file.endsWith('.flac'))
        .map((file) => join(audioDir, file));
    } catch (err) {
      console.error(`Error llegint el directori ${audioDir}:`, err.message);
      throw new Error('No s\'han pogut obtenir els fitxers d\'àudio');
    }
  }

  // Obté les metadades d'un fitxer d'àudio.
  // Rep la ruta completa del fitxer, i retorna una promesa amb
  // les metadades completes del fitxer.
  async getFileMetadata(filePath) {
    try {
      // OBtenim les metadades amb la llbreria music-metadata
      const metadata = await parseFile(filePath);
      return metadata;
    } catch (err) {
      console.error(`Error obtenint les metadades de ${filePath}:`, err.message);
      throw new Error('No s\'han pogut obtenir les metadades del fitxer');
    }
  }
}

// I exportem la classe
export default new FileDataProvider();