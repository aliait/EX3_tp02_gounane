const zone = document.querySelector("#zone");
const ball = document.querySelector("#ball");
const score = document.querySelector("#score");
const raq = document.querySelector("#raquette");

const b = {x:50,y:30,w:40,h:40,dx:1,dy:1,speed:2,ani:{}}

var x = 10;
function moveraquette (e){
    //adroit
     if(e.which == 39 ){
        raq.style.left =  raq.offsetLeft + 10 ;
        
     }else if(e.which == 37){
        raq.style.left = raq.offsetLeft - 10 ;
     }

}

document.body.onkeydown= (e)=> {
    moveraquette(e)
}

b.ani = requestAnimationFrame(play);
function play (){
      let pl = setInterval(() => {
       if(b.x>600 - b.w || b.x<0){
            b.dx*=-1;
       }
       if(b.y>400-b.h || b.y < 0 ){
        b.dy *= -1;
        }
        b.x += b.dx * b.speed;
        b.y += b.dy * b.speed;
        ball.style.left = `${b.x}px`;
        ball.style.top = `${b.y}px`;
        b.ani = requestAnimationFrame(play);
      }, 100); 
}