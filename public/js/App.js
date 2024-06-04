import { Router } from './router.js';
import { routes } from "./routes.js";

window.global = {};

const App = () => {
  // Initialize the router
  global.router = new Router("root");
  try {
    global.router.addRoutes(routes);
    global.router.init();
  } catch (err) {
    console.log(err);
  }
};

export default App;