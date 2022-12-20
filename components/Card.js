class Card extends HTMLElement {
    constructor(...args) {
        super();
        console.log("...args", args)
        this.contents = args;
    }
  
    connectedCallback() {
        let text = 'I am Card';
        let innerHTML = `
            <div class="card">`;
        //for(let content of this.contents){
            innerHTML += `<p>` + text + `</p>`
        //}
        innerHTML += `</div>`;
      this.innerHTML = innerHTML;
    }
  }
  
  customElements.define('card-component', Card);