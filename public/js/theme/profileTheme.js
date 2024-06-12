export const stylesheet = `
    #profile-page
    {
        border: solid 1px green;
        width: 90%;
        height: 35%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .common
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: end;
    }
    .win
    {
        background-color: red;
        flex-grow: 2;
    }
    .avatar
    {
        background-color: green;
        flex-grow: 4;
    }
    .loss
    {
        background-color: aqua;
        flex-grow: 2;
    }
`;