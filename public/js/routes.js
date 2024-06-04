const homeView = () => {
    let home = document.createElement("home-page");
    return home;
}

// const unfound = () => {
//     let page = document.createElement("unfound-page");
//     return page;
// }

export const routes = [
    { path: '/', view: homeView },
    // { path: '*', view: unfound },
]