import { LitElement, css, html } from 'lit'

export class RedHood extends LitElement {
  static get properties() {
    return {

      title: { type: String },

      paragraph1: { type: String },

      title2: { type: String },

      paragraph2: { type: String },

      title3: { type: String },

      paragraph3: { type: String },

      imageURL: { type: String },

    }
  }

  constructor() {
    super()
    this.title = 'Red Hood'
    this.paragraph1 = 'Red Hood es un alias que han portado varios personajes de la editorial DC Comics. El más conocido de todos es Jason Todd, quien asume la identidad de Red Hood en la continuidad principal del Universo DC. Otro famoso portador del alias fue el Joker, quien lo utilizó durante sus inicios en el mundo delictivo.  '

    this.title2 = 'Orígenes'
    this.paragraph2 = 'Red Hood es un personaje del universo de DC Comics que ha tenido varias encarnaciones a lo largo de los años. El más conocido es Jason Todd, quien originalmente fue el segundo Robin, el compañero de Batman después de Dick Grayson. Los orígenes de Red Hood están profundamente conectados con la tragedia y la resurrección. Jason Todd fue un huérfano que fue adoptado por Batman después de que lo atrapara robando las llantas del Batimóvil. Después de entrenar bajo la tutela de Batman, se convirtió en el segundo Robin, pero su carrera como héroe fue corta y tumultuosa. Durante una misión, Jason fue capturado y brutalmente golpeado por el Joker, quien luego lo dejó moribundo en un edificio lleno de explosivos. Batman llegó demasiado tarde para salvarlo, y Jason fue aparentemente asesinado en la explosión. Sin embargo, años más tarde, Jason resucitó de entre los muertos gracias a la intervención de una fuerza desconocida. Después de su regreso, adoptó la identidad de Red Hood, tomando el nombre de un antiguo alias del Joker antes de convertirse en el villano que es conocido. Bajo esta nueva identidad, Red Hood adoptó métodos más violentos y extremos para luchar contra el crimen, a menudo enfrentándose tanto a los criminales como a Batman.  '

    this.title3 = 'Características   '
    this.paragraph3 = 'Las características distintivas de Red Hood incluyen su traje rojo y negro, que a menudo incluye una capucha roja y una máscara que cubre su rostro, y su uso de armas de fuego y tácticas más agresivas en comparación con Batman. A menudo es representado como un antihéroe moralmente complejo, cuyas acciones están impulsadas por su dolor, ira y deseo de venganza. Aunque su relación con Batman es complicada, Red Hood sigue siendo un personaje fascinante en el universo de DC Comics.  '

    this.imageURL = 'https://i.pinimg.com/474x/33/49/75/3349753dfafca8ef8c8aba201ee42b69.jpg'

  }

  render() {
    return html`
     <div id="main">

    <h1>${this.title}</h1> 
    <p>${this.paragraph1}</p>
          
    <h1>${this.title2}</h1> 
    <p>${this.paragraph2}</p>

    <h1>${this.title3}</h1> 
    <p>${this.paragraph3}</p>
          
    <div class="dc-img-container">
      <img class="personaje-img" src="${this.imageURL}">
    </div> 

    `
  }



  static get styles() {
    return css`
    #main{
      background-color:rgb(156, 8, 8)
    }

    #main{
      color:black
    }
      
      
    .personaje-img{
      width: 20vw;
  }
  
  .dc-img-container{
    text-align:center;
  }

    `
  }
}

window.customElements.define('red-hood', RedHood)
