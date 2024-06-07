import Sidebar from "../components/Sidebar.js";
import StartGame from "../components/StartGame.js";
import TopPlayers from "../components/topPlayers.js";

import { stylesheet } from "../theme/platformTheme.js";

export default class Platform extends HTMLElement {
  constructor()
  {
    super();
  }

  connectedCallback()
  {
    const style = document.createElement("style");
    const template = document.getElementById("platform-page");
    const templateContent = template.content.cloneNode(true);
    
    style.textContent = stylesheet;
    this.appendChild(style);
    this.setAttribute("id", "platform");
    this.appendChild(templateContent);
    this.render();
  }
  render()
  {
    const players = document.createElement("top-players-comp");
    const playersDiv = document.getElementById("top-players");
    console.log(window.global.store.players);
    playersDiv.appendChild(players);
  }
}

customElements.define("platform-page", Platform);