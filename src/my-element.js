import { LitElement, css, html } from 'lit'
import './batman-element.js'
import './red-hood.js'
import './night-wing.js'
import'./bat-girl.js'

export class MyElement extends LitElement {
  static get properties() {
    return {


      position: { type: Number },
    }
  }

  constructor() {
    super()


    this.position = 0
  }

  setPrevious(e) {
    if (this.position === 0) {
      this.position = 3
    }
    else {
      this.position--
    }
  }

  setNext(e) {
    if (this.position == 3) {
      this.position = 0
    }
    else {
      this.position++
    }
  }


  render() {
    return html`
     <div>
      <button @click="${this.setPrevious}">Anterior</button>
      <button @click="${this.setNext}">Siguiente</button>
      <h1>${this.position}</h1>
      ${this.position===0 ? html `<batman-element></batman-element>` : ''}
      ${this.position===1 ? html `<red-hood></red-hood>` : ''}
      ${this.position===2 ? html `<night-wing></night-wing>`:''}
      ${this.position===3 ? html `<bat-girl></bat-girl>`:''}
    </div>




    `
  }


  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }


      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
