class Card extends HTMLElement {
    constructor() {
        super();
    }
  
    set derp(val) {
        this.setAttribute('derp', val);
    }
  
    connectedCallback() {
        let text = 'I am Card';
        console.log('this.derp', this.derp);
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