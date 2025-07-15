import { LitElement, html, css } from 'lit-element';
import { getThemeByCedulaDigit } from '../styles/themes.js';


export class CareerCard extends LitElement {
  static properties = {
    carrera: { type: Object },
    cedulaLastDigit: { type: Number }
  };

  constructor() {
    super();
    this.career = null;
    this.cedulaLastDigit = 0;
  }

  static styles = css`
    .card {
      border: 3px solid var(--border-color);
      border-radius: 12px;
      overflow: hidden;
      width: 300px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
    .header {
      background-color: var(--header-bg);
      padding: 12px;
      font-weight: bold;
      text-align: center;
    }
    .content {
      padding: 10px;
      color: var(--text-color);
    }
    img {
      width: 100%;
      height: auto;
    }
  `;

  updated() {
    if (this.career && this.cedulaLastDigit !== null) {
      const theme = getThemeByCedulaDigit(this.cedulaLastDigit);
      this.style.setProperty('--border-color', theme.border);
      this.style.setProperty('--header-bg', theme.background);
      this.style.setProperty('--text-color', theme.text);

    }
  }

  render() {
    if (!this.carrera) {
      return html`<div class="card"><div class="content">Seleccione una carrera</div></div>`;
    }

    return html`
      <div class="card">
        <div class="header">${this.carrera.nombre}</div>
        <img src="${this.carrera.imagen}" alt="Imagen de ${this.carrera.nombre}" />
        <div class="content">
          <strong>Facultad:</strong> ${this.carrera.facultad}<br />
          <p>${this.carrera.descripcion}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('career-card', CareerCard);
