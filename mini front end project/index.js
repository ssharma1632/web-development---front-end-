var c=document.querySelectorAll(".drum").length;
for (var i=0;i<c;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var inner=this.innerHTML;
     makesound(inner)
     buttonAnimation(inner);
     switch(inner){
          case "w":
               var p=new Audio("sounds/crash.mp3");
               p.play();
          break;

          case "a":
               var a=new Audio("sounds/kick-bass.mp3");
               a.play();
          break;

           case "s":
               var s=new Audio("sounds/snare.mp3");
               s.play();
          break;

           case "d":
               var s=new Audio("sounds/tom-1.mp3");
               s.play();
          break;

           case "j":
               var j=new Audio("sounds/tom-2.mp3");
               j.play();
          break;

           case "k":
               var k=new Audio("sounds/tom-3.mp3");
               k.play();
          break;

           case "l":
               var l=new Audio("sounds/tom-4.mp3");
               l.play();
          break;

     } 
});
};

 document.addEventListener("keydown",function(event){
     makesound(event.key);
     buttonAnimation(event.key);});

     function makesound(key){
     switch(key){
          case "w":
               var p=new Audio("sounds/crash.mp3");
               p.play();
          break;

          case "a":
               var a=new Audio("sounds/kick-bass.mp3");
               a.play();
          break;

           case "s":
               var s=new Audio("sounds/snare.mp3");
               s.play();
          break;

           case "d":
               var s=new Audio("sounds/tom-1.mp3");
               s.play();
          break;

           case "j":
               var j=new Audio("sounds/tom-2.mp3");
               j.play();
          break;

           case "k":
               var k=new Audio("sounds/tom-3.mp3");
               k.play();
          break;

           case "l":
               var l=new Audio("sounds/tom-4.mp3");
               l.play();
          break;
     }
}

function buttonAnimation(inner){
     var active=document.querySelector("."+inner);
     active.classList.add("pressed");   
     setTimeout(function(){
          active.classList.remove("pressed")
     },300)
}