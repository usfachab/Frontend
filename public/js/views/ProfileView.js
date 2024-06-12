import { stylesheet } from "../theme/profileTheme.js";

export default class Profile extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    const style = document.createElement("style");
    const template = document.getElementById("profile-page-template");
    const templateContent = template.content.cloneNode(true);
    
    style.textContent = stylesheet;
    this.appendChild(style);
    this.setAttribute("id", "profile-page");
    this.appendChild(templateContent);
  }
}
