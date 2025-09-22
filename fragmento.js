class LaLigaDeLaJusticia extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
            <p>La Liga de la Justicia</p>
        `;
    }
}

customElements.define('laliga-de-la-justicia', LaLigaDeLaJusticia);