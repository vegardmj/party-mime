class Card extends HTMLElement {
    constructor(...args) {
        super();
        console.log("...args", args)
    }

    get contents() {
      return this.contents.getAttribute('contents');
    }
  
    set derp(val) {
        this.setAttribute('derp', val);
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