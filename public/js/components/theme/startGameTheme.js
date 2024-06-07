const stylesheet = new CSSStyleSheet();
stylesheet.replaceSync(`
:root {
    --header-height: 3rem;
    --nav-width: 77px;
    --first-color: #1d203e;
    --first-color-light: #afa5d9;
    --white-color: #f7f6fb;
    --body-font: "Press Start 2P", sans-serif !important;
    --normal-font-size: 1rem;
    --z-fixed: 100;
  }
  
:host
  {
    width: 90%;
    height: 25%;
    position: relative;
    border-radius: 20px;
  }
  
  img{
    width: 100%;
    height: 100%;
    border-radius: 20px;
    margin-top: 30px;
    background-color: black;
  }
  a
  {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`);

export { stylesheet };
