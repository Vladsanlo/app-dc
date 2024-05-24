import { LitElement, css, html } from 'lit'

export class BatGirl extends LitElement {
  static get properties() {
    return {

      title:{type:String},
      paragraph:{type:String,},

      title1:{type:String},
      paragraph1:{type:String},

      title2:{type:String},
      paragraph2:{type:String},

      imageURL:{type:String},

    }
  }

  constructor() {
    super()
    



  }

  render() {
    return html`
     <div id="main">




    `
  }



  static get styles() {
    return css`
    #main{
      background-color:rgb(0, 29, 122)
    }

    #main{
      color:rgb(105, 104, 103)
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
