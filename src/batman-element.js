import { LitElement, css, html } from 'lit'

export class Batman extends LitElement {
  static get properties() {
    return {

      title1: { type: String },

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
    this.title = 'Batman'
    this.paragraph1 = 'Batman es un superhéroe ficticio de cómic creado por los estadounidenses Bob Kane y Bill Finger, ​ y propiedad de DC Comics. Apareció por primera vez en la historia titulada «El caso del sindicato químico» de la revista Detective Comics N.º 27, lanzada por la editorial National Publications el 30 de marzo de 1939. '

    this.title2 = 'Orígenes'
    this.paragraph2 = 'Batman es uno de los superhéroes más icónicos de DC Comics. Su identidad secreta es Bruce Wayne, un multimillonario empresario y filántropo de Ciudad Gótica (Gotham City). Los orígenes de Batman se remontan a un trágico evento de su infancia: presenció el asesinato de sus padres, Thomas y Martha Wayne, durante un robo en las calles de Ciudad Gótica. Este evento traumático marcó su vida y lo impulsó a buscar justicia y venganza contra el crimen. El alter ego de Batman es un vigilante enmascarado que lucha contra el crimen utilizando sus habilidades físicas, intelecto brillante, y una variedad de gadgets y tecnología avanzada. A diferencia de otros superhéroes, Batman no tiene superpoderes sobrenaturales, sino que se basa en su entrenamiento físico y mental intensivo para enfrentarse a sus enemigos.  '

    this.title3 = 'Características   '
    this.paragraph3 = 'Algunas características distintivas de Batman incluyen su traje negro con capa de murciélago, el Batimóvil (su vehículo altamente tecnológico), la Bati-señal (un dispositivo utilizado por la policía para llamarlo en momentos de crisis), y su estricto código moral que lo lleva a evitar matar a sus enemigos, aunque esté dispuesto a utilizar la fuerza necesaria para detenerlos. El enfoque oscuro y sombrío de Batman, así como su lucha contra sus propios demonios internos, han sido temas recurrentes en las historias del personaje a lo largo de los años, convirtiéndolo en uno de los héroes más complejos y fascinantes del mundo del cómic.  '

    this.imageURL = 'https://static.tvtropes.org/pmwiki/pub/images/batman_41.png'

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
      background-color:#1d4e8d 
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

window.customElements.define('batman-element', Batman)
