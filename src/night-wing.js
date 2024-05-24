import { LitElement, css, html } from 'lit'

export class NightWing extends LitElement {
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
    this.title = 'Nightwing'
    this.paragraph1 = 'Richard John "Dick" Grayson, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por DC Comics, comúnmente en asociación con Batman.  '

    this.title2 = 'Orígenes'
    this.paragraph2 = 'Nightwing es uno de los superhéroes más reconocidos del universo de DC Comics. Su identidad secreta es Dick Grayson, quien originalmente fue el primer Robin, el compañero de Batman en su lucha contra el crimen en Ciudad Gótica. Los orígenes de Nightwing están estrechamente ligados a su tiempo como Robin y su evolución como héroe independiente. Dick Grayson era un acróbata en el circo junto con sus padres, conocidos como "Los Graysons Voladores". Trágicamente, sus padres fueron asesinados por un gánster durante una actuación, dejando a Dick huérfano. Bruce Wayne, secretamente Batman, sintió empatía por el joven huérfano y lo adoptó como su pupilo, entrenándolo para convertirse en el primer Robin y compañero de Batman. Después de años de servir como Robin, Dick Grayson eventualmente decidió dejar de ser el compañero de Batman y forjar su propio camino como héroe. Adoptó la identidad de Nightwing, inspirada en una historia de la continuidad de Batman que contaba la leyenda de un héroe nocturno llamado "Nightwing". Bajo esta nueva identidad, Nightwing se mudó a la ciudad de Blüdhaven y continuó luchando contra el crimen, ahora como un héroe independiente.  '

    this.title3 = 'Características   '
    this.paragraph3 = 'Las características distintivas de Nightwing incluyen su traje azul y negro con un emblema de ala en el pecho, así como su agilidad y habilidades de lucha superiores, desarrolladas a través de su entrenamiento con Batman y su experiencia como acróbata de circo. Nightwing también es conocido por su carisma, ingenio y liderazgo, lo que lo convierte en un líder efectivo tanto dentro como fuera del campo de batalla. A lo largo de los años, Nightwing ha sido un personaje central en numerosas historias de DC Comics y ha sido miembro destacado de equipos como los Jóvenes Titanes y los Forasteros. Su relación con Batman, así como su desarrollo como héroe independiente, lo han convertido en uno de los personajes más queridos y respetados del universo de DC.  '

    this.imageURL = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1e1d8073-1062-4182-9afa-27b02f67e240/dgefj64-6064d6a3-9806-4cc0-9b35-46b1cd404d99.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFlMWQ4MDczLTEwNjItNDE4Mi05YWZhLTI3YjAyZjY3ZTI0MFwvZGdlZmo2NC02MDY0ZDZhMy05ODA2LTRjYzAtOWIzNS00NmIxY2Q0MDRkOTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pFuo9DvarSny11pmORCTSFKHvLfGmyewLt4t5CzE2XQ'

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
     </div>
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

window.customElements.define('night-wing', NightWing)
