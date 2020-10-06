let bullets = [];
let bulletSpeed = 10;
let movementSpeed = 20;
let velocity = 10;
let value = 0;
let isKeyUp = true;
let isKeyDown = false;


window.onload = function()
{
    app = new PIXI.Application({resizeTo:window, backgroundColor: 0xAAAAAA});
    document.body.appendChild(app.view);

    
    //Player object
    
    player = new PIXI.Sprite.from("images/monkey-1b.png");
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height - 75;
    app.stage.addChild(player);
    
    
    app.stage.interactive = true;
    
    document.querySelector("#gameDiv").appendChild(app.view);
    document.querySelector("#gameDiv").addEventListener("pointerdown", fireBullet);
    
    // Pointer Movement
    //app.stage.on("pointermove", movePlayer);
    
    
    // Keyboard Movement
    window.addEventListener('keydown', keysDown);
    window.addEventListener('keyup', keysUp);
                    
    app.ticker.add(gameLoop);
}



            
// Movement   
function keysUp(e)
{
    console.log(e.keyCode);

    if (e.keyCode == 68) 
    {

        value = 0;

    }
    if (e.keyCode == 65) 
    {
        value = 0;
    }
}

function keysDown(e)
{
    console.log(e.keyCode);
    if (e.keyCode == 68) 
    {
        if (value < 1) 
        {
            value += (0.01 * velocity);
        }
        player.x += movementSpeed * value;
    }
    if (e.keyCode == 65) 
    {
        if (value < 1) 
        {
            value += (0.01 * velocity);
        }
        player.x -= movementSpeed * value;
    }
}

/*
function movePlayer(e)
{
    let pos = e.data.global;

    player.x = pos.x;
    player.y = pos.y;
}
*/



function fireBullet(e){
    console.log("FIRE!")
    let bullet = createBullet();
    bullets.push(bullet);
}

function createBullet(){
    let bullet = new PIXI.Sprite.from("images/banan.png");
    bullet.anchor.set(0.5);
    bullet.x = player.x + 23;
    bullet.y = player.y - 28;
    bullet.speed = bulletSpeed;
    app.stage.addChild(bullet);

    return bullet;
}

function updateBullets(delta){
    for (let i = 0; i < bullets.length; i++){
        bullets[i].position.y -= bullets[i].speed;

        if(bullets[i].position.y < 0){
            bullets[i].dead = true;
        }
    }

    for (let i = 0; i < bullets.length; i++){

        if(bullets[i].dead){
            app.stage.removeChild(bullets[i]);
            bullets.splice(i,1);
        }
    }
}

function gameLoop(delta){
    updateBullets(delta);
}