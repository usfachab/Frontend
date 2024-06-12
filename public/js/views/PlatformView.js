import Sidebar from "../components/Sidebar.js"

import { loadStartGameAndPlayerRankComponents } from "../assets/startGameAndPlayerRank.js"
import { loadUserProfileView } from "../assets/loadUserProfileView.js";

import { stylesheet } from "../theme/platformTheme.js"

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

    const middleSection = this.querySelector("#middle");
    
    customElements.define("side-bar-comp", Sidebar);
    
    switch (window.location.pathname)
    {
      case "/platform":
        loadStartGameAndPlayerRankComponents(middleSection);
      case "/profile":
        loadUserProfileView(middleSection);
    }
  }
}
customElements.define("platform-page", Platform);
