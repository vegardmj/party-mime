class Card extends HTMLElement {
    constructor(derp) {
        super();
        console.log("...args", derp)
        this.derp = derp;
    }
  
    connectedCallback() {
        let text = 'I am Card';
        let innerHTML = `
            <div class="card centered">`;
        //for(let content of this.contents){
            innerHTML += `<p>` + text + `</p>`
        //}
        innerHTML += `</div>`;
      this.innerHTML = innerHTML;
    }
  }
  
  customElements.define('card-component', Card);