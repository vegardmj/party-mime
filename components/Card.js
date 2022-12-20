class Card extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <Card>
          <nav>
            <div><p>Kort</p></div>
          </nav>
        </Card>
      `;
    }
  }
  
  customElements.define('card-component', Card);