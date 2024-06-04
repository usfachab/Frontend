import { stylesheet } from "../theme/homeTheme.js";

export class Home extends HTMLElement
{
	constructor()
	{
	  super();
	  this.attachShadow({ mode: 'open' });
	  this.shadowRoot.adoptedStyleSheets = [stylesheet];
	}
    
	connectedCallback()
	{
        const template = document.getElementById("home-page");
        const templateContent = template.content.cloneNode(true);
        this.shadowRoot.appendChild(templateContent);

        const links = this.shadowRoot.querySelectorAll("a");
        links.forEach( link => {
            link.addEventListener( "click", (e) => {
                e.preventDefault();
                this.render();
            });
        }); 
    }
    render()
    {
        const loginPage = document.createElement("login-page");
        document.appendChild( loginPage );

    }
}
  
customElements.define('home-page', Home);