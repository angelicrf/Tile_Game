
var display =document.querySelector("#display");
var output = document.querySelector("#output");

var map=[[1,1,0,1,1,0,1,1],
         [1,1,0,2,1,0,1,1],
         [1,1,0,0,1,1,0,1],
         [0,1,1,0,0,1,0,0],
         [0,1,1,2,0,1,1,1],
         [1,0,0,1,0,1,1,1],
         [1,1,0,1,0,0,1,1],
         [3,1,0,1,1,0,1,1]
    
    
];

var land =1;
var water=0;
var mice =2;
var home =3;
var cell_dim =80;
render();

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
        
        
        switch(map[i][j])
        {
            case water:
                imag.src ="../Iland_Adv_Game/images/water.png";
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
        imag.style.top = cell_dim * i +"px";
        imag.style.left = cell_dim *j +"px";
    
        
    }
  
}
    
    
}

 