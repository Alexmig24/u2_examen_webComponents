// src/components/career-card.js
import { LitElement, html, css } from 'lit-element';
import { getThemeByIdDigit } from '../styles/themes.js';

export class CareerCard extends LitElement {
  static properties = {
    career: { type: Object },
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
      const theme = getThemeByIdDigit(this.cedulaLastDigit);
      this.style.setProperty('--border-color', theme.borderColor);
      this.style.setProperty('--header-bg', theme.headerBg);
      this.style.setProperty('--text-color', theme.textColor);
    }
  }

  render() {
    if (!this.career) {
      return html`<div class="card"><div class="content">Seleccione una carrera</div></div>`;
    }

    return html`
      <div class="card">
        <div class="header">${this.career.nombre}</div>
        <img src="${this.career.imagen}" alt="Imagen de ${this.career.nombre}" />
        <div class="content">
          <strong>Facultad:</strong> ${this.career.facultad}<br />
          <p>${this.career.descripcion}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('career-card', CareerCard);
