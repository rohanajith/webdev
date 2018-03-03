var squareNos=6;
var h1=document.querySelector("h1");
var colors=generateRandomColor(6);
var disp=document.querySelector("#ye");
var display=document.querySelector("#message");
var picked=random();
disp.textContent=picked;
var reset=document.querySelector("#man");
var square=document.querySelectorAll(".square");
var easyBtn=document.querySelector("#easybtn");
var hardBtn=document.querySelector("#hardbtn");

easyBtn.addEventListener("click",function(){
  
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  squareNos=3;
  colors=generateRandomColor(squareNos);
  picked=random();
  disp.textContent=picked;
  for(var i=0;i<square.length;i++){
  	if(colors[i]){
  		square[i].style.backgroundColor=colors[i];
  	}
  	else{
  		square[i].style.display="none";
  	}
  }

});
hardBtn.addEventListener("click",function(){
  
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  squareNos=6;
  colors=generateRandomColor(squareNos);
  picked=random();
  disp.textContent=picked;
  for(var i=0;i<square.length;i++){
  		square[i].style.backgroundColor=colors[i];
  		square[i].style.display="block";
  }
  
});

reset.addEventListener("click",function(){
  
  colors=generateRandomColor(6);
  picked=random();
  display.textContent="";
  disp.textContent=picked;
  reset.textContent="New Colors";
  for(var i=0;i<square.length;i++){
  	square[i].style.backgroundColor=colors[i];
  }
  h1.style.backgroundColor="steelblue";

});
for(var i= 0; i < square.length; i++){
   square[i].style.backgroundColor=colors[i];
	square[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor == picked)
        {
     	    display.textContent="Correct!";
     	    reset.textContent="Play Again?";
     	    changeColor(clickedColor);
     	    h1.style.backgroundColor=clickedColor;
     	    
        }
        else
        {
        	this.style.backgroundColor="#232323";
        	display.textContent="Try Again";
        }
	});
}
function changeColor(color){
	for(var i=0; i< square.length;i++){
      
     square[i].style.backgroundColor=color;
	}
}
function random(){
	var ran=Math.floor(Math.random() * colors.length);
	return colors[ran];
}
function generateRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());

	}
	return arr;
}
function randomColor()
{
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}