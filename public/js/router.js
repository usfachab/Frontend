export class Router
{
    constructor(containerId)
    {
        this.routes = [];
        this.container = document.getElementById(containerId);
    }
    addRoutes(arrayOfRoutes)
    {
        if (!Array.isArray(arrayOfRoutes)) throw new TypeError("Routes must be provided as an array");
        arrayOfRoutes.forEach((route) => {
            if (!route.path || !route.view) throw new Error("Invalid route object");
            if (typeof route.path !== "string") throw new TypeError("Path must be a string");
            if (typeof route.view !== "function") throw new TypeError("view must be a function");

            this.routes.push(route);
    });
    }
    navigateTo(path, addToHistory = true) 
    {
        if (addToHistory) history.pushState({ path }, null, path);
        const route = this.routes.find((route) => route.path === location.pathname) ||  this.routes.find((route) => route.path === "*");
        this.container.innerHTML = "";
		this.container.appendChild( route.view() );
        window.scrollX = 0;
        window.scrollY = 0;
    }
    init()
    {
        const links = document.querySelectorAll("a[data-link]");
        links.forEach((link) => {
            link.addEventListener("click", (event) => {
            event.preventDefault();
            const url = event.target.getAttribute("href");
            this.navigateTo(url);
            });
        });

        window.addEventListener("popstate", (e) => {
            this.navigateTo(e.state.path, false);
        });

        this.navigateTo(location.pathname);
    }
}
