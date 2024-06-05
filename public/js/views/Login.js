import { stylesheet } from "../theme/loginTheme.js";

export default class Login extends HTMLElement
{
    constructor()
    {
        super();
    }
    
    connectedCallback()
    {
        const styleElem = document.createElement("style");
        const template = document.getElementById("login-page");
        const activate = template.content.cloneNode(true);
        
        styleElem.textContent = stylesheet;
        this.appendChild( styleElem );
        this.appendChild( activate );
    }
}

customElements.define('login-page', Login);