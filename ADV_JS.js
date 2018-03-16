
Img_display = document.querySelector("#background");
restart_button =document.querySelector("#restart");
restart_button.style.visibility ='hidden';
document.body.style.backgroundColor ="#7bb2a0";


(function(){
  var tl_1 = new TimelineMax();
    
    tl_1.from('#sprite',5,{left:-300,opacity:0,ease: Bounce.easeOut})
    .from('#main',2.5,{scale:2,opacity:0, ease: Elastic.easeOut})
    .from('#myButton',2.5,{scale:2,opacity:0});
   
}());


 document.getElementById('myButton').addEventListener("click", function show_image(){
            
            console.log("Are you in show_image? ");
            hide_button =document.querySelector("#myButton");
            hide_button.style.visibility = "hidden";
            hide_text=document.querySelector("#main");
            hide_text.style.visibility ="hidden";
            Img_display.style.visibility ='hidden';
            restart_button.style.visibility = 'visible';
            hide_sprite =document.querySelector("#sprite");
            hide_sprite.style.visibility ='hidden';
           
           document.body.style.backgroundColor ="#2f6c57";
     

var display =document.querySelector("#display");
var output = document.querySelector("#output");

var map=[[1,1,1,1,1,0,1,1],
         [1,1,0,2,1,1,2,1],
         [2,1,1,1,1,1,0,1],
         [0,1,1,0,1,1,1,1],
         [1,1,1,1,1,1,1,2],
         [1,0,1,2,0,1,1,1],
         [1,1,1,1,1,1,1,1],
         [3,1,1,1,1,0,1,1]
    
    
];

var mouvement =[[0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,4,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0]
];

const land =1;
const water=0;
const mice =2;
const home =3;
const cheese =4;
const cell_dim =80;

var point =5;
var attempt =0;
var coins =5;
var messageGame = "Use the arrow key to find the way back home."

var cheese_vert;
var cheese_hor;
window.addEventListener("keydown",mouvedirection,false);

var up = 38;
var down = 40;
var right = 39;
var left = 37;

for(var i=0; i<map.length;i++)
{
    for(var j =0; j<map[0].length;j++)
    {
        if(mouvement[i][j]=== cheese)
            {
                cheese_hor =i;
                cheese_vert =j;
            }    
     }
    
}

render();

function mouvedirection(event)
{
//     console.log("in the switch mouvment");
    switch(event.keyCode){
          
        case up:
            
            if(cheese_hor>0)
            {    
               mouvement[cheese_hor][cheese_vert] = 0; 
               cheese_hor--;
               mouvement[cheese_hor][cheese_vert] =cheese; 
                
            }
            break;
            
        case down:
            
            if(cheese_hor < (map.length -1))
            {   
                mouvement[cheese_hor][cheese_vert] = 0;
                cheese_hor++;
                mouvement[cheese_hor][cheese_vert]= cheese;        
            }
            break;
         
        case right:
            if(cheese_vert< (map[0].length -1))
                {
                mouvement[cheese_hor][cheese_vert] = 0;
                cheese_vert++;
                mouvement[cheese_hor][cheese_vert] = cheese;
              
                }
            break;
            
        case left:
            
            if(cheese_vert>0)
                {
                mouvement[cheese_hor][cheese_vert] =0;
                cheese_vert--;
                mouvement[cheese_hor][cheese_vert]= cheese;  
                    
                }
            break;
  
           }
    
    switch(map[cheese_hor][cheese_vert])
        {
    case water:
        console.log("water");
            get_prize();
        break;
    case land:
        console.log("land");
        messageGame = "Move forward to find your home."
        break;
    case home:
        console.log("home");
            finish_game();
        break;
    case mice:
        console.log("Mice");
            take_over();
        break;
        }
            
        point --;
            
            if(coins <=0 || point <=0)
                {
                    finish_game();
                }             
    render();
    
}

function get_prize()
{
    var total_points = coins +attempt;
    var value = Math.ceil(Math.random()* total_points);
    
    if (coins> value)
        {
            point += total_points;
            coins -= value;
            attempt += 3
            messageGame ="You bought: " + total_points+ " nuts "+ "<br> By " +coins +" coins spending.";    
        }
    
    else
    { 
       attempt +=1;
        messageGame ="<br>Sorry, you don't have enogh coins to buy goodies."    
    }
  
}

function take_over()
{
    let cheese_ability =Math.ceil((coins + point)/2);
    let mice_ability = Math.ceil(Math.random()* cheese_ability *2);
    
    if(mice_ability > cheese_ability)
        {
          let spent = Math.ceil(Math.random(mice_ability/2));
          coins -= spent;
          attempt +=1
          messageGame ="You fought and lost: " + spent +" of coins" +"<br>Mouse points are:  "+ mice_ability+"<br>Cheese points are: "+ cheese_ability;
        
        }
    
    
    else
    {
         let cheese_points= Math.ceil(Math.random(mice_ability/2));
         coins += cheese_points;
         attempt +=2;
         messageGame = "You fought and won" +cheese_points +" of coins" +" Mouse points are:  "+ mice_ability+" Cheese points are: "+ cheese_ability;
        
        
    }
    
    
}

function finish_game()
{
    
 if(map[cheese_hor][cheese_vert] === home)
 {
     var total_points = coins + attempt + point;
     messageGame ="You arrived at Home. The final points you earned is: "+total_points; 
 }
else
 {
    if(coins <=0)
        {   
          messageGame +="<br>You lost all your coins and nothing left." ;      
        }
    else
        {
          messageGame +="<br>There is no points left to continue."
        }
         
         messageGame +="<br>Battle's ended and finally could concquere the land."
  
 }
    window.removeEventListener("keydown", mouvedirection,false);
  
}

function render(){
    
    if(display.hasChildNodes())
        {
           console.log("in render()"); 
        for (var i =0; i< (map.length * map[0].length); i++)
           display.removeChild(display.firstChild);
            
        }


    
for (var i =0; i<map.length; i++){
    for (var j =0; j<map[0].length; j++){
        var imag = document.createElement("img");
        imag.setAttribute("class","tile");
         display.appendChild(imag);
        
      
        
        $(document).ready(function(){

             $("#restart").click(function (){
//                 imag.attributes.appendTo('#display');
//                 
                   location.reload();
                   
                   
               
            });
            
        });
        
        
        
        switch(map[i][j])
        {
                
            case water:
                imag.src ="../Iland_Adv_Game/images/water_puzzle.jpg";
                break;
            case land:
                imag.src ="../Iland_Adv_Game/images/green-lawn.jpg";
                break;
            case mice:
                imag.src ="../Iland_Adv_Game/images/Poison-blue-icon.png";
                break;
            case home:
                imag.src ="../Iland_Adv_Game/images/home-icon.png";
                break;
             
                        
        }
        switch(mouvement[i][j])
                {
                
            case cheese:
                console.log("Reading the cheese?");
                imag.src="../Iland_Adv_Game/images/cat_cheese.jpg";
                break;
                
        }
        imag.style.top = cell_dim * i +"px";
        imag.style.left = cell_dim *j +"px";
    
        
    }
  
}
    output.innerHTML = messageGame;
    output.innerHTML += "<br><br>Points earned: " +point
    +"<br>Coins availble: "+coins+ "<br>The numbers of attempt are: "+attempt;
    
}
  });
 