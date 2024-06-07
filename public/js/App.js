import { Router } from './router.js';
import { routes } from "./routes.js";
import ProxiedStore from "./store.js";
import { loadTopPlayers } from "./services/loadPlayers.js";
 
window.global = {};

const App = () => {
  global.store = ProxiedStore;
  global.router = new Router("root");

  try {
    global.router.addRoutes(routes);
    global.router.init();
    loadTopPlayers();
  } catch (err) {
    console.log(err);
  }
};

export default App;