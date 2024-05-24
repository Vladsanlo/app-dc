import { LitElement, css, html } from 'lit'

export class BatGirl extends LitElement {
  static get properties() {
    return {

      title: { type: String },
      paragraph: { type: String },

      title1: { type: String },
      paragraph1: { type: String },

      title2: { type: String },
      paragraph2: { type: String },

      imageURL: { type: String },

    }
  }

  constructor() {
    super()
    this.title = 'Batgirl'
    this.paragraph = 'Barbara Gordon, hija del Comisionado de Policía James Gordon, asumió el manto de Batgirl en la década de 1960. Su debut fue en "Detective Comics #359" en 1967. Barbara es una joven brillante, con una maestría en biblioteconomía y ciencias de la información, así como habilidades en artes marciales y un genio intelectual comparable al de su mentor, Batman. '

    this.title1 = 'Origenes'
    this.paragraph1 = 'Los orígenes de Batgirl varían según la versión. En la historia clásica, Barbara se convierte en Batgirl después de presenciar un crimen y decidir usar su inteligencia y habilidades físicas para luchar contra la injusticia en Gotham City. En la versión más icónica, fue inspirada por Batman y Robin después de salvarlos de un villano llamado Killer Moth en una fiesta. '

    this.title2 = 'Caracteristicas'
    this.paragraph2 = 'Una de las características más destacadas de Batgirl, especialmente en la representación de Barbara Gordon, es su inteligencia y habilidad para resolver problemas. Además de sus habilidades físicas, es una experta en tecnología y computación. También es conocida por su tenacidad y determinación para enfrentarse a los criminales más peligrosos de Gotham. A lo largo de los años, Batgirl ha evolucionado como personaje, enfrentando desafíos personales y profesionales. En una de las historias más influyentes, "The Killing Joke", Barbara Gordon fue brutalmente herida por el Joker, lo que la dejó paralítica. Después de este evento, adoptó la identidad de Oracle, convirtiéndose en una hacker y estratega experta que proporciona inteligencia y apoyo logístico a otros héroes. Posteriormente, en el cómic "The New 52", DC Comics reintrodujo a Barbara Gordon como Batgirl, utilizando una historia en la que recupera la movilidad de sus piernas gracias a una cirugía experimental. Esta versión de Batgirl es una mezcla de la ingeniosa detective de la Edad de Plata con la tenacidad y determinación de la Barbara Gordon post-"The Killing Joke".  '

    this.imageURL = 'https://naldzgraphics.net/wp-content/uploads/2012/06/26-batgirl.jpg'

  }

  render() {
    return html`
     <div id="main">

     <h1>${this.title}</h1>
     <p>${this.paragraph}</p>

     <h1>${this.title1}</h1>
     <p>${this.paragraph1}</p>

     <h1>${this.title2}</h1>
     <p>${this.paragraph2}</p>

     <div class="dc-img-container">
      <img class="personaje-img" src="${this.imageURL}">
     </div>
  </div>

   `
  }



  static get styles() {
    return css`
    #main{
      background-color:#6c3e9f
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

window.customElements.define('bat-girl', BatGirl)
