class Card extends HTMLElement {
    constructor(...args) {
        this.contents = args;
      super();
    }

    contents;
  
    connectedCallback() {
        let innerHTML = `
            <div class="card">`;
        for(let content of this.contents){
            innerHTML += `<p>` + content + `</p>`
        }
        innerHTML += `</div>`;
      this.innerHTML = innerHTML;
    }
  }
  
  customElements.define('card-component', Card);