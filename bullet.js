            let app;
            let player;
            let bullets = [];
            let bulletSpeed = 10;

            window.onload = function()
            {
                document.querySelector("#gameDiv").appendChild(app.view);
                document.querySelector("#gameDiv").addEventListener("pointerdown", fireBullet);
                app.stage.interactive = true;
            

        //Player object

        player = new PIXI.Sprite.from("images/monkey-1b.png");
        player.anchor.set(0.5);
        player.x = app.view.width / 2;
        player.y = app.view.height / 2;

        
        
        app.stage.addChild(player);
        
        // Movement
        
        // Pointer Movement
        app.stage.on("pointermove", movePlayer);
        

            function movePlayer(e)
            {
                let pos = e.data.global;

                player.x = pos.x;
                player.y = pos.y;
            }
/*
            // Keyboard Movement
            window.addEventListener('keydown', keysDown);
            window.addEventListener('keyup', keysUp);
                

            function keysUp(e)
            {
                console.log(e.keyCode);
                
            
            }

            function keysDown(e)
            {
                console.log(e.keyCode);

            }

*/
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