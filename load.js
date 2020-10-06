<<<<<<< HEAD
let player;

window.onload = function()
{
    app = new PIXI.Application({resizeTo:window, backgroundColor: 0xAAAAAA});
    document.body.appendChild(app.view);


    //Player object
    
    player = new PIXI.Sprite.from("images/monkey-1b.png");
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height / 1.6;
    app.stage.addChild(player);

}
=======
>>>>>>> f13198c1b84b2f1e5ccce82c73416b3eb69eda5f
