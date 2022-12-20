class Card extends HTMLElement {
    constructor(...args) {
        super();
        this.contents = args;
    }

    contents;
  
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