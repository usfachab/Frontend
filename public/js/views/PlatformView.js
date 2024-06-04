import { stylesheet } from "../theme/platformTheme.js";

export default class Home extends HTMLElement {
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
    this.appendChild(templateContent);
  }
}

customElements.define("home-page", Home);