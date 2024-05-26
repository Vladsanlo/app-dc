import { LitElement, css, html } from 'lit'

export class SuperMan extends LitElement {
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
    this.title = 'Superman '
    this.paragraph = 'Superman es uno de los superhéroes más emblemáticos del universo de DC Comics, creado por el escritor Jerry Siegel y el artista Joe Shuster. Hizo su primera aparición en "Action Comics #1" en 1938 y desde entonces ha sido un símbolo de verdad, justicia y el estilo de vida americano.  '

    this.title1 = 'Origenes'
    this.paragraph1 = 'Los orígenes de Superman se remontan al planeta Krypton, donde nació como Kal-El, hijo del científico Jor-El y su esposa Lara Lor-Van. Antes de que Krypton fuera destruido debido a una catástrofe natural, Jor-El envió a su hijo recién nacido a la Tierra en una cápsula espacial, con la esperanza de que tuviera una vida mejor. Aterrizó en el campo de Smallville, Kansas, donde fue encontrado y criado por Jonathan y Martha Kent, quienes lo nombraron Clark Kent. A medida que creció, Clark Kent descubrió que tenía habilidades sobrehumanas debido a la radiación solar amarilla de la Tierra, que le otorgaba fuerza, velocidad, vuelo, visión de rayos X, visión de calor y una invulnerabilidad casi completa. Decidió usar sus poderes para ayudar a la humanidad y adoptó la identidad de Superman. '

    this.title2 = 'Caracteristicas'
    this.paragraph2 = 'Superman es conocido por su sentido del deber y su moral inquebrantable. A pesar de ser un ser casi omnipotente, elige actuar con compasión y empatía, siempre buscando hacer el bien y proteger a los inocentes. Su alter ego, Clark Kent, es un reportero del Daily Planet, donde trabaja junto a su interés amoroso, la periodista Lois Lane, y su colega, el fotógrafo Jimmy Olsen. A lo largo de los años, Superman ha enfrentado una variedad de villanos y desafíos, incluidos Lex Luthor, Brainiac, Doomsday y Darkseid, entre otros. Además de sus habilidades físicas, Superman es conocido por su inteligencia y capacidad estratégica, lo que lo convierte en uno de los héroes más formidables del universo DC. El personaje de Superman ha sido adaptado a diferentes formas de medios, incluidos cómics, películas, programas de televisión, dibujos animados y más, convirtiéndolo en un ícono cultural reconocido en todo el mundo. Su legado perdura como un símbolo de esperanza y heroísmo.  '

    this.imageURL = 'https://www.cinemascomics.com/wp-content/uploads/2021/06/Superman.jpg  '

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

window.customElements.define('super-man', SuperMan)
