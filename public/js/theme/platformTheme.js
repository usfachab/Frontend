const stylesheet = `
#platform
{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#sidebar
{
    flex-grow: 0.5;
    background-color: red;
}

#middle
{
    flex-grow: 4;
    background-color: green;
    display: flex;
    flex-direction: column;
    row-gap: 8rem;
    align-items: center;
}

#chat
{
    flex-grow: 2;
    background-color: yellow;
}

#top-players
{
    width: 90%;
    height: 20%;
    background-color: aqua;
    border-radius: 20px;
}
`;

export { stylesheet };