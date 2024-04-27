var num=document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        working(this.innerHTML);
        animate(this.innerHTML);
    });
}


// document.addEventListener("keypress",function(event){
//     var keys=event.key;
//     working(keys);
//     animate(keys);
// });

function working(letter){
    switch (letter) {
        case "a":
            var audio=new Audio('./sounds/Skyfall.mp3');
            audio.play();
            break;
    
        case "b":
            var audio=new Audio('./sounds/Cupid.mp3');
            audio.play();
            break;
    
        case "c":
            var audio=new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
    
        case "d":
            var audio=new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
    
        case "e":
            var audio=new Audio('./sounds/crash.mp3');
            audio.play();
            break;
    
        case "f":
            var audio=new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
    
        case "g":
            var audio=new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case "h":
            var audio=new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
    
        case "i":
            var audio=new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
    
        case "j":
            var audio=new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
    
        case "k":
            var audio=new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
    
        case "l":
            var audio=new Audio('./sounds/crash.mp3');
            audio.play();
            break;
    
        case "m":
            var audio=new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
    
        case "n":
            var audio=new Audio('./sounds/snare.mp3');
            audio.play();
            break;

        case "o":
            var audio=new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
    
        case "p":
            var audio=new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
    
        case "q":
            var audio=new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
    
        case "r":
            var audio=new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
    
        case "s":
            var audio=new Audio('./sounds/crash.mp3');
            audio.play();
            break;
    
        case "t":
            var audio=new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
    
        case "u":
            var audio=new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        default:
            alert("Error....");
            break;
    }
    // var audio=new Audio('./sounds/tom-1.mp3');
    //         audio.play();
}
function animate(keys){
    var pressed=document.querySelector("."+keys);
    pressed.classList.add("pressed");
    setTimeout(function(){
        pressed.classList.remove("pressed");
    },100);
}