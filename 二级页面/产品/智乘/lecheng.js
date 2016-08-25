$(function(){
console.log(888888)

   var box=$(".box")[0];

   var images=$("img",box);
   var btnl=$(".btnl")[0];
   var btnr=$(".btnr")[0];
   console.log(btnl)
   var t=setInterval(bb,888);
   var flag=true;
box.onmouseover=function(){
	clearInterval(t);
}
box.onmouseout=function(){
	t=setInterval(aa,888);
}

btnl.onclick=function(){
	console.log(333)
	clearInterval(t);
	    if(flag)
    {    
	    flag=false;
	    aa();
    }
	

	
}

btnr.onclick=function(){
	clearInterval(t);

	if(flag)
		{
			flag=false;
			bb();
		}
}
btnl.onmouseout=function(){
   t=setInterval(aa,888);

}
btnr.onmouseout=function(){
   t=setInterval(bb,888);
   
}
  
   function aa(){
      animate(box,{left:-191},function(){
      	box.style.left=0;

   	   var first=firstChild(box);
	   box.appendChild(first);
         flag=true;

      })


      

   }
 
      function bb(){
      	
   	   var first=firstChild(box);
        
      	var last=lastChild(box);
	    insertBefore(last,first);

	    box.style.left=-191+"px"
      animate(box,{left:0},function(){flag=true})
      
     
   }

})