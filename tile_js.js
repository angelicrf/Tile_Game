class Level{
 
    constructor(){
        this.tilesize= 20;
        this.map =[
            [1,0],
            [0,1]
        ];
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
          
          ctx.fillRect = (x_num,y_num,this.tilesize,this.tilesize);
              
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
new Container();
 

