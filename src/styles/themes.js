// src/styles/themes.js
export const themes = {
  azul: {
    borderColor: '#003C71',
    headerBg: '#FFD700',
    textColor: '#000'
  },
  verde: {
    borderColor: '#2E7D32',
    headerBg: '#A5D6A7',
    textColor: '#1B5E20'
  },
  rojo: {
    borderColor: '#C62828',
    headerBg: '#FFCDD2',
    textColor: '#B71C1C'
  },
  gris: {
    borderColor: '#424242',
    headerBg: '#BDBDBD',
    textColor: '#212121'
  },
  naranja: {
    borderColor: '#EF6C00',
    headerBg: '#FFE0B2',
    textColor: '#E65100'
  }
};

// Mapea el último dígito con el tema
export function getThemeByIdDigit(digit) {
  const map = {
    0: 'azul', 1: 'azul',
    2: 'verde', 3: 'verde',
    4: 'rojo', 5: 'rojo',
    6: 'gris', 7: 'gris',
    8: 'naranja', 9: 'naranja'
  };
  return themes[map[digit]] || themes.azul;
}