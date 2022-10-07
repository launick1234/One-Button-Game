title = "My Gabage Game";

description = `Match the color\n
[Left Click] to change color!!!
`;

characters = [
  `
rr
rr
rr
rr
rr
rr
  `,` 
gg
gg
gg
gg
gg
gg
`,`
 rr r
rr r r
rrrrrr
rrrrrr
rr  rr
`
];

/** @type {Player} */
let player;

/**
 * @type { Enemy [] }
 */
let enemies;

/**
 * @type { Enemy2 [] }
 */
 let enemies2;

let flag = 0;
let box_speed = -0.5;
let chg_color = 0;
let num1;
let num2;


options = {
  viewSize: { x: 200, y: 80 }
};

function update() {
  if (!ticks) {
    player = {
      pos: vec(10,67)
    }
    enemies = [];
    enemies2 = [];
  }
  color("black");
  rect(0, 70, 200, 9);

  if(input.isJustPressed){
    if(flag == 0){
      flag = 1;
    }else{
      flag = 0;
    }
  }

  if(flag == 0){
    color("red");
    char("c",player.pos);
  }else{
    color("green");
    char("c",player.pos);
  }

  num1 = rndi(50,200 )
  num2 = rndi(50,200 )
  while(Math.abs(num1 - num2) < 10 ){
    num1 = rndi(50,200 )
    num2 = rndi(50,200 )
  }

  if(enemies.length === 0){
    for(let i = 0; i < 20; i++){
      const posX = num1;
      const posY = 67;
      enemies.push({pos:vec(posX,posY)});
    }
  }

  if(enemies2.length === 0){
    for(let i = 0; i < 20; i++){
      const posX = num2;
      const posY = 67;
      enemies2.push({pos:vec(posX,posY)});
    }
  }

  

    remove(enemies, (e) =>{
      e.pos.x += box_speed;
      color("red");
      const isCollidingwithplayer = char("a",e.pos).isColliding.char.c;
      if(isCollidingwithplayer && flag != 0){
        end();
      }else if(isCollidingwithplayer){
        addScore(.01);
      }
      return (e.pos.x < -100);
    })
  
    remove(enemies2, (e) =>{
      e.pos.x += box_speed;
      color("green");
      const isCollidingwithplayer = char("b",e.pos).isColliding.char.c;
      if(isCollidingwithplayer && flag != 1){
        end();
      }else if(isCollidingwithplayer){
        addScore(.01);
      }
      return (e.pos.x < -1);
    })
  
  
  

  

}

addEventListener("load", onLoad);