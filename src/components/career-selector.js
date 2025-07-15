// src/components/career-selector.js
import { LitElement, html, css } from 'lit-element';

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
      const response = await fetch('./src/data/carreras.json');
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
        ${this.carreras.map(c => html`
          <li @click=${() => this.seleccionarCarrera(c)}>
            ${c.nombre}
          </li>
        `)}
      </ul>
    `;
  }
}

customElements.define('career-selector', CareerSelector);
