const viewCallback = ( page ) => {
    if ( !page.length )
        page = "home";
    return ( document.createElement(`${page}-page`) );
}

export const routes = [
    { path: '/', view: viewCallback },
    { path: '/login', view: viewCallback },
    { path: '/platform', view: viewCallback }
]