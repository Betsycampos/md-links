import {validateLinks} from '../src/md-links/utils/validate.js';
const path = require('path');
const arrObjta = [ 
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file:
 path.resolve('./prueba/readme.md') },
  { href: 'https://nodejs.org/',
    text: 'Node.js',
    file:
 path.resolve('./prueba/readme.md') },
  { href: 'https://nodejsorg/',
    text: 'Node.js',
    file:
 path.resolve('./prueba/readme.md') },
];

const arrObjt = [ 
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',   
    file: path.resolve('./prueba/readme.md'),
    code: 200,
    statusText: 'OK' },
  { href: 'https://nodejs.org/',
    text: 'Node.js',
    file: path.resolve('./prueba/readme.md'),
    code: 200,
    statusText: 'OK' },
  { href: 'https://nodejsorg/',
    text: 'Node.js',
    file: path.resolve('./prueba/readme.md'),
    code: 'No es una URL válida',
    statusText: 'FAIL' }
];

const error = [{code: 404, href: 'https://developer.mozilla.org/es/docs/W', statusText: 'FAIL'}];
const rep = [ {code: 404, href: 'https://developer.mozilla.org/es/docs/W', statusText: 'FAIL'}];
 
describe('validateLinks', () => {
  it('Debería ser una función', () => {
    expect(typeof validateLinks).toBe('function');
  });
  it('debería retornar un array de objetos con las propiedades href, text, file, status, statusText', (done) => {
    validateLinks(arrObjta).then((resolve) => {
      expect(resolve).toEqual(arrObjt);
      done();
    });
  });
  it('Debería retornar FAIL si la URL no es válida', (done) => {
    validateLinks(error).then((resolve) => {
      expect(resolve).toEqual(rep);
      done();
    });
  }); 
});