export const themes = {
  azul: {
    border: '#003C71',
    background: '#003C71',
    text: 'white'
  },
  verde: {
    border: '#2E7D32',
    background: '#66BB6A',
    text: 'white'
  },
  rojo: {
    border: '#C62828',
    background: '#EF5350',
    text: 'white'
  },
  gris: {
    border: '#424242',
    background: '#BDBDBD',
    text: '#212121'
  },
  naranja: {
    border: '#EF6C00',
    background: '#FFB74D',
    text: 'black'
  }
};

export function getThemeByCedulaDigit(digit) {
  const number = parseInt(digit);
  if ([0, 1].includes(number)) return themes.azul;
  if ([2, 3].includes(number)) return themes.verde;
  if ([4, 5].includes(number)) return themes.rojo;
  if ([6, 7].includes(number)) return themes.gris;
  return themes.naranja;
}