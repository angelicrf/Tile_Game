     var button =document.getElementById("#sendIt");  
        var current_position=0;
        var cols =8;
          
            var sprite = document.createElement("img");
    sprite.setAttribute("src", "../Tile_game/images/sprite.png");
    sprite.setAttribute("class","sprite");
    document.body.appendChild(sprite);
        class Level{
 
    constructor(){
        this.tilesize= 60;
        this.map =[
            [1,0,3,0,3,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1],
            [1,0,1,0,1,0,1,0],
            [0,1,0,1,0,1,0,1]
        ];
  
      
//    
//    ctx.drawImage(sprite,192,0,64,64,128,320,64,64);
    }
 draw(ctx){
      
       this.map.forEach((row,y) => {
           
          row.forEach((id,x) => {
             
          let x_num = x * this.tilesize;
              
          let y_num = y * this.tilesize;
              
         
          ctx.save();
              
          ctx.beginPath();
             
          ctx.strokeRect = (x_num,y_num,this.tilesize,this.tilesize); 
             
          ctx.fillStyle = id ? "red" : "blue";
              let level = new Level();
              var tile =level.map[0,2];
              if ( level.map[0,2]){
          ctx.drawImage(sprite,3 * this.tilesize, 0, this.tilesize, this.tilesize, x * this.tilesize, 
           y * this.tilesize, this.tilesize, this.tilesize);
              }
          ctx.fillRect(x_num,y_num,this.tilesize,this.tilesize);
              
          ctx.stroke();
             
          ctx.restore();
              
          });
          
       });
      
   }

}
class Container {
     
   constructor(){
      
       let canvas = document.createElement("canvas");
        
       let level = new Level();
       canvas.width = level.tilesize * level.map[0].length;
       console.log("What is the length?"+level.map.length);
       canvas.height =level.tilesize * level.map.length;
       
       var parent = document.getElementById("mytile")
       parent.appendChild(canvas);
       
      let ctx = canvas.getContext("2d");
      
       
      level.draw(ctx);
      
       
   } 
      
}
var gameRun = new Container();
function clicked(){
    console.log("You clicked");
    let level = new Level();
    current_position=level.map[7,4]
    
//    var img = new Image();
//    img.src ="../Tile_game/images/sprite.png";
//    img.addEventListener("load", function() {
//     ctx.drawImage(img,60,60);
//});

}        
    
