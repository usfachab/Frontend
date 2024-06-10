import Api from "../services/api.js";
import ProxiedPlayers from "../prox/players.js";

import Sidebar from "../components/Sidebar.js";
import StartGame from "../components/StartGame.js";
import TopPlayers from "../components/topPlayers.js";

import { stylesheet } from "../theme/platformTheme.js";

export default class Platform extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const style = document.createElement("style");
    const template = document.getElementById("platform-page");
    const templateContent = template.content.cloneNode(true);

    style.textContent = stylesheet;
    this.appendChild(style);
    this.setAttribute("id", "platform");
    this.appendChild(templateContent);

    
    customElements.define("side-bar-comp", Sidebar);
    customElements.define('start-game-comp', StartGame);

    const pathname = window.location.pathname;
    if ( "/platform" == pathname )
      this.render(pathname, "");

  }
  
  render() {
    const contentSection = this.querySelector("#middle");
    console.log(contentSection);
    customElements.define("player-rank-component", TopPlayers);
  }
}
customElements.define("platform-page", Platform);

// window.addEventListener("playersListLoaded", () => {
//   this.render();
// });
// window.addEventListener("playersListLoaded", () => {
//   this.render();
// });
// render() {
//   const rankedPlayersParentDiv = this.querySelector(".component-hold");
//   if (ProxiedPlayers.playersList) {
//     ProxiedPlayers.playersList.forEach((element) => {
//       const rankedPlayersComponentDiv = document.createElement("player-rank-component");
//       rankedPlayersParentDiv.appendChild(rankedPlayersComponentDiv);

//       const name = rankedPlayersComponentDiv.shadowRoot.querySelector(".name");
//       name.textContent = element.username;
//       const points = rankedPlayersComponentDiv.shadowRoot.querySelector(".points");
//       points.textContent = element.address.zipcode + " pts";
//     });
//   }
// }
// Api.fetchPlayers().then((result) => {
//   ProxiedPlayers.playersList = result;
// });
