# CommonJS i mòduls ES

En Node.js, els mòduls són una forma de dividir el codi en peces més menudes, el que permet una millor organització i reutilització del codi. Node.js, per defecte, ha utilitzat el sistema de mòduls anomenat CommonJS, però des de la versió 12 de Node.js, s'ha introduït el sistema de mòduls ES Modules (ECMAScript Modules), que és l'estàndard de JavaScript.

## CommonJS vs ES Modules

CommonJS és el sistema de mòduls tradicional en Node.js. S'utilitza `require()` per importar mòduls i `module.exports` o `exports` per exportar-los. Aquest sistema és àmpliament utilitzat en molts exemples de la documentació, especialment en projectes més antics.

*Exemple de CommonJS*:

```javascript
const express = require('express'); // Importar el mòdul
module.exports = someFunction; // Exportar una funció
```

**ES Modules**, o **ESM**, és el sistema de mòduls que està estandaritzat en JavaScript i que es pot veure tant en navegadors com en altres entorns moderns. S'utilitza `import` i `export` per gestionar la importació i exportació de mòduls. En Node.js, els mòduls ES es poden activar quan el fitxer té l'extensió `.mjs`, o quan al fitxer `package.json` s'inclou `"type": "module"`.

*Exemple d'ES Modules*:

```javascript
import express from 'express'; // Importar el mòdul
export default someFunction; // Exportar una funció
```

## Per què utilitzar ES Modules?*

- **Estàndard modern**: Els ES Modules estan més alineats amb l'estàndard modern de JavaScript. Això significa que els desenvolupadors poden escriure codi que funcione tant en el navegador com en Node.js sense necessitat d'eines de transpilació com Babel.
- **Compatibilitat futura**: A mesura que més entorns adopten els ES Modules, aprendre aquest sistema et prepara per treballar amb projectes en JavaScript modern, tant del costat del client com del servidor.
- **Sintaxi més clara i flexible**: La sintaxi de `import` i `export` és més clara i ofereix millors característiques com la importació selectiva de mòduls o el suport de mòduls asíncrons.

## Com utilitzar ES Modules en el teu projecte

En aquest projecte, utilitzem ES Modules gràcies a la configuració que hem establert al `package.json`, que conté la propietat `"type": "module"`. Això permet que els fitxers `.js` siguin tractats com a mòduls ES, puguen utilitzar `import` i `export` en lloc de `require` i `module.exports`.