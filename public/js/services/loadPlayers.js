import Api from "./api.js"

export async function loadTopPlayers()
{
   global.store.players = await Api.fetchPlayers();
}