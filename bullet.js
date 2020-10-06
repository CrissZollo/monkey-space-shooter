let player;
let bullets = [];
let bulletSpeed = 10;


document.querySelector("#gameDiv").appendChild(app.view);
document.querySelector("#gameDiv").addEventListener("pointerdown", fireBullet);
                
                
app.ticker.add(gameLoop);

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