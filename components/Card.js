class Card extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <div><p>Kort</p></div>
      `;
    }
  }
  
  customElements.define('card-component', Card);