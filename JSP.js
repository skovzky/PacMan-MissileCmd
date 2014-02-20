var DIR_LEFT  = 0
var DIR_RIGHT = 1
var DIR_UP    = 2
var DIR_DOWN  = 3
var SPEED     = 4
enchant();

window.onload = function(){
    var game = new Core(164, 212);
    game.fps = 12;
    game.preload("PC_SPRITE_3.png", "PC_MAP.png");
	game.onload = function(){
		var bg = new Sprite(164 , 212);
		bg.image = game.assets["PC_MAP.png"];
		bg.x = 0;
		bg.y = 0;
		bg.frame = 0;
		game.rootScene.addChild(bg);
        var pc = new Sprite(16, 16);
        pc.image = game.assets["PC_SPRITE_3.png"];
        pc.x = 4;
        pc.y = 3;
        pc.frame = 4;
		pc.anim = [
			1, 2,  //Left
			4, 2,  //Right
			7, 2,  //Up
			10, 2, //Down
			];
        game.rootScene.addChild(pc);
		pc.addEventListener("enterframe", function(){
		pc.frame = pc.anim[pc.dir *2 + (pc.age % 2)];
			if(game.input.up){
				pc.dir = DIR_UP;
				pc.y -= SPEED;
			}
			else if (game.input.down) {
				pc.dir = DIR_DOWN;
				pc.y += SPEED;
			}
			else if (game.input.left) {
				pc.dir = DIR_LEFT;
				pc.x -= SPEED;
			}
			else if (game.input.right) {
				pc.dir = DIR_RIGHT
				pc.x += SPEED;
			}
		});
	}
	game.start();
}