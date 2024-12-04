import express, { json } from 'express';
import pistaRoutes from './app/routes/pistaRoutes.js';
import pistaService from './app/services/pistaService.js';
//import { verify } from 'jsonwebtoken'; // De moment no farem ús d'autenticació
import { join } from 'path';
import { fileURLToPath } from 'url';


// Obté el directori actual de manera compatible amb ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const app = express();
const PORT = 3000;


// Middleware per processar JSON (de moment no s'usa)
//app.use(json());

// Middleware per servir fitxers estàtics amb autenticació
// Amb JWT app.use('/public', authenticateJWT, express.static(join(__dirname, 'public')));
console.log("public folder in: "+join(__dirname, 'public'));

// Middleware Static, per servir fitxers estàtics
app.use('/public', express.static(join(__dirname, 'public')));

// Rutes per gestionar pistes
app.use('/pistes', pistaRoutes);

// Middleware d'autenticació amb JWT
/* Per a quan incloguem JWT
function authenticateJWT(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).send('Accés denegat. Token no trobat.');
  }
  try {
    const decoded = verify(token, 'clau_secreta');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).send('Token invàlid.');
  }
}*/


// Inicialització del servidor
(async () => {
  await pistaService.initializeTracks(); // Carrega les pistes en iniciar el servidor
  app.listen(PORT, () => {
    console.log(`Servidor en funcionament a http://localhost:${PORT}`);
  });
})();
