import { LitElement, html, css } from 'lit-element';
import { getThemeByCedulaDigit } from '../styles/themes.js';


export class CareerSelector extends LitElement {
  static styles = css`
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      cursor: pointer;
      padding: 10px;
      border-bottom: 1px solid #ccc;
      transition: background 0.3s;
    }
    li:hover {
      background-color: #f0f0f0;
    }
  `;

  static properties = {
    carreras: { type: Array }
  };

  constructor() {
    super();
    this.carreras = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.cargarCarreras();
  }

  async cargarCarreras() {
    try {
      const response = await fetch('/carreras.json');
      const data = await response.json();
      this.carreras = data;
    } catch (error) {
      console.error('Error al cargar el archivo de carreras:', error);
    }
  }

  seleccionarCarrera(carrera) {
    this.dispatchEvent(new CustomEvent('career-selected', {
      detail: carrera,
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <ul>
        ${this.carreras.map(c => {
          const digit = c.id % 10; // Usa el ID como último dígito
          const theme = getThemeByCedulaDigit(digit);
          return html`
            <li @click=${() => this.seleccionarCarrera(c)} style="display: flex; align-items: center;">
              <div style="
                width: 12px;
                height: 12px;
                background-color: ${theme.background};
                border-radius: 50%;
                margin-right: 8px;">
              </div>
              ${c.nombre}
            </li>
          `;
        })}
      </ul>
    `;
  }
}

customElements.define('career-selector', CareerSelector);
