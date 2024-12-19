class AccUeil extends HTMLElement{
    connectedCallback(){
      this.render();
    }

    render(){
        this.innerHTML = `<div id="accueil">
        <h1 id="title">La fonctionnalité <strong>@starting-styles</strong> en css</h1>
        <hr width="20%" size="6" color="#FF0044" />
        <span>Déc. 2024</span>
         <baseline-status featureid="starting-style"></baseline-status>
      </div>`
    }
}

customElements.define("acc-ueil", AccUeil);