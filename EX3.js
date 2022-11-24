const raq = document.querySelector("#raquette");
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

// document.body.addEventListener("keydown",(e)=>{
//     moveraquette(e);
// })