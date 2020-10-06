            let app;
            let player;
            let bullets = [];
            let bulletSpeed = 10;

            window.onload = function(){
                app = new PIXI.Application({resizeTo:window, backgroundColor: 0xffffff});
                document.querySelector("#gameDiv").appendChild(app.view);
                app.stage.interactive = true;
                document.querySelector("#gameDiv").addEventListener("pointerdown", fireBullet);
            

        //Player object

        player = new PIXI.Sprite.from("images/monkey-1b.png");
        player.anchor.set(0.5);
        player.x = app.view.width / 2;
        player.y = app.view.width / 1.5;


        app.stage.addChild(player);

        app.ticker.add(gameLoop);
    }

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