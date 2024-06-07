const Store = {
    players: null
}

const ProxiedStore = new Proxy( Store, {
    set(target, prop, value)
    {
        target[prop] = value;
        if ( prop === "players" )
            {
                window.dispatchEvent( new Event("topPlayersLoaded") );
                console.log( "player changed event dispatched" );
            }
        return true;
    },
});

export default ProxiedStore;