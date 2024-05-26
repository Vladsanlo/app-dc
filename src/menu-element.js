import { LitElement, css, html } from 'lit'

export class Menu extends LitElement {
  static get properties() {
    return {

      title: { type: String },
      paragraph: { type: String },

      listElement1:{type:String},
      listElement2:{type:String},
      listElement3:{type:String},
      listElement4:{type:String},
      listElement5:{type:String},
      listElement6:{type:String},

      imageURL:{type:String},

    }
  }

  constructor() {
    super()
    this.title = 'Indice '
    this.paragraph = 'A continuacion se enlistan personajes que se pueden encontrar en esta app    '

    this.listElement1='1.Batman'
    this.listElement2='2.RedHood'
    this.listElement3='3.NightWing'
    this.listElement4='4.BatGirl'
    this.listElement5='5.Superman'
    this.listElement6='6.Supergirl'

    this.imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF8q6Wxca3jEngOjCUpvmulqC0cY48ER-d7ijDjo5eubJV9rWpBfdToVoYKbRLG_Jv1ns&usqp=CAU   '

  }

  render() {
    return html`
     <div id="main">

     <h1>${this.title}</h1>
     <p>${this.paragraph}</p>

     <ul>
          <li><i>${this.listElement1}</i></li>
          <li><i>${this.listElement2}</i></li>
          <li><i>${this.listElement3}</i></li>
          <li><i>${this.listElement4}</i></li>
          <li><i>${this.listElement5}</i></li>
          <li><i>${this.listElement6}</i></li>
     </ul>

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

window.customElements.define('menu-element', Menu)
