const stylesheet = new CSSStyleSheet();
stylesheet.replaceSync(`
:host
  {
    width: 20%;
    height: 20%;
    position: relative;
    border-radius: 20px;
  }
  
`);

export { stylesheet };