const stylesheet = new CSSStyleSheet();
stylesheet.replaceSync(`
:host{
    width: 100%;
    height:100%;
    background-color: red !important;
}
.container
{
    width: 100%;
    height:100%;
    background-color: red !important;
}
`);

export { stylesheet };