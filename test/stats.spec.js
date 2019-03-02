import {checkIfIsFile} from '../src/md-links/utils/stats.js'
describe('checkIfIsFile', () => {
    it('Debería ser una función', () => {
      expect(typeof checkIfIsFile).toBe('function');
    });
    it('Debería retornar true si la ruta es un archivo', () => {
      expect(checkIfIsFile('C:\\Users\\Laboratoria\\Documents\\Markdown-Links\\LIM008-fe-md-links\\src\\md-links\\index.js')).toBe(true);
    })
  });