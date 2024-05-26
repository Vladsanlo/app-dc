import { LitElement, css, html } from 'lit'

export class SuperGirl extends LitElement {
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
    this.title = 'Supergirl '
    this.paragraph = 'Supergirl es un personaje ficticio del universo de DC Comics, que comparte muchas similitudes con Superman. La versión más conocida de Supergirl es Kara Zor-El, prima de Superman, aunque han existido otras encarnaciones del personaje a lo largo de los años.   '

    this.title1 = 'Origenes'
    this.paragraph1 = 'Los orígenes de Supergirl varían según la versión del cómic, pero en la historia clásica, Kara Zor-El también es originaria del planeta Krypton. Es la prima de Superman, hija de Zor-El (hermano de Jor-El) y Alura In-Ze. Al igual que Superman, Kara fue enviada a la Tierra para escapar de la destrucción de Krypton. Sin embargo, debido a un incidente en el espacio, su cápsula de escape llegó a la Tierra años después de la llegada de Superman, lo que la convierte en una adolescente cuando finalmente aterriza en nuestro planeta. Kara Zor-El adopta la identidad de Supergirl para seguir los pasos de su primo y utilizar sus poderes para proteger a la humanidad. Al igual que Superman, Supergirl posee fuerza sobrehumana, velocidad, vuelo, visión de rayos X, visión de calor y una invulnerabilidad casi completa. A medida que se adapta a su nueva vida en la Tierra, Kara lucha por encontrar su lugar en el mundo mientras equilibra su identidad secreta con su vida cotidiana.  '

    this.title2 = 'Caracteristicas'
    this.paragraph2 = 'En cuanto a sus características, Supergirl es a menudo representada como una heroína valiente, optimista y compasiva, aunque a veces puede ser impulsiva debido a su juventud y falta de experiencia. A lo largo de sus diversas encarnaciones en cómics, programas de televisión y otras formas de medios, su personalidad y características han evolucionado, pero su dedicación para proteger a los inocentes y hacer el bien sigue siendo una constante. Supergirl ha sido un miembro importante del Universo DC, participando en numerosas historias y eventos junto a otros héroes como Superman, la Liga de la Justicia y los Jóvenes Titanes. Su legado como una de las heroínas más icónicas de DC Comics continúa siendo relevante en la cultura popular.  '

    this.imageURL = 'https://static.tvtropes.org/pmwiki/pub/images/kara_zor_el_003.jpg  '

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
      background-color:#3b59b4
    }

    #main{
      color:#6d0000
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

window.customElements.define('super-girl', SuperGirl)
