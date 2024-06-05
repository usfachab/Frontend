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
        width: 85%;
        height: 100%;
      box-sizing: border-box;
      background-color: red;
      justify-content: center;
      padding: 0;
      margin: 0;
  }
  
  .container {
    width: 75%;
    height: 75%;
  }
  
//   .background img{
//       width: 100%;
//       height: 100%;
//   }
`);

export { stylesheet };