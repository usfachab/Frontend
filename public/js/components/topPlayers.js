import { stylesheet } from "./theme/topPlayersTheme.js";

export default class TopPlayers extends HTMLElement
{
    constructor()
    {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.adoptedStyleSheets = [stylesheet];
        console.log("what the hell");
    }
    
    // connectedCallback()
    // {

        
    //     this.shadowRoot.appendChild( button );
    // }
}
customElements.define('top-players-comp', TopPlayers);



// window.addEventListener("topPlayersLoaded", () => 
        // {
        //     console.log("event catched");
        // })