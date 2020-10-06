window.onload = function()
{

    // Pointer Movement
    app.stage.interactive = true;
    app.stage.on("pointermove", movePlayer);
    

    // Keyboard Movement
    window.addEventListener('keydown', keysDown);
    window.addEventListener('keyup', keysUp);
}
            
// Movement   
function keysUp(e)
{
    
    console.log(e.keyCode);
    

}

function keysDown(e)
{
    console.log(e.keyCode);

}


function movePlayer(e)
{
    let pos = e.data.global;

    player.x = pos.x;
    player.y = pos.y;
}