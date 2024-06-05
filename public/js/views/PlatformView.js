import Sidebar from "../components/Sidebar.js";
import StartGame from "../components/StartGame.js";

// import { stylesheet } from "../theme/platformTheme.js";
export default class Platform extends HTMLElement {
  constructor()
  {
    super();
  }

  connectedCallback()
  {
    // const style = document.createElement("style");
    const template = document.getElementById("platform-page");
    const templateContent = template.content.cloneNode(true);

    // style.textContent = stylesheet;
    // this.appendChild(style);
    this.appendChild(templateContent);
  }
}

customElements.define("platform-page", Platform);