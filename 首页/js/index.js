$(function(){

console.log(document.documentElement.clientWidth)
// 顶部下拉框
var more=$(".more");
console.dir(more);
var baitu=$(".baitu");
var cp66=$(".cp66");
var cpxl=$(".cpxl");
console.log(cp66)
for(var i=0;i<cp66.length;i++){
	cp66[i].index=i;
cp66[i].onmouseover=function(){
	
	for (var i = 0; i < cpxl.length; i++) {
		cpxl[this.index].style.display="block"
	};

}
cp66[i].onmouseout=function(){
	for (var i = 0; i < cpxl.length; i++) {
		cpxl[this.index].style.display="none"
	};
}


}


for(var i=0;i<more.length;i++){
	more[i].index=i;
more[i].onmouseover=function(){
	
	for (var i = 0; i < baitu.length; i++) {
		baitu[this.index].style.opacity="0.2"
	};

}
more[i].onmouseout=function(){
	for (var i = 0; i < baitu.length; i++) {
		baitu[this.index].style.opacity="0.1"
	};
}


}

// 轮播

var images=$("a",$(".box")[0]);
	var lis=$("li",$(".window")[0]);
	var win=$(".window")[0];
	var left=$(".Left")[0];
    var right=$(".Right")[0];
    var ul=$("ul",$(".window")[0])
    var gdyx=$(".gdyx")[0];
    /*获取图片宽度*/
    var widths=parseInt(getStyle(win,"width"));
    /*初始化状态*/
    lis[0].style.background="#fff";
	for (var i = 0; i < images.length; i++) {
		if (i==0) {
			continue;
		}
		images[i].style.left=widths+"px";
	}
	var index=0;
	var next=0;
	var flag=true;
	var t=setInterval(moveR,1800);
	function moveL(){
		// 更新next
		next--;
		// 判断边界
		if (next<0) {
			next=images.length-1;
		};
		lis[index].style.background="";
		lis[next].style.background="#fff";


		// 让下一张图片就位
		images[next].style.left=-widths+"px";
		// 做动画，让下一张图片left：-widths；当前图片的left：0
		animate(images[index],{left:widths},Tween.Quad.easeIn,function(){flag=true;});
		animate(images[next],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		// 更新index
		index=next;
	}
	function moveR(){
		// 更新next
		next++;
		// 判断边界
		if (next==images.length) {
			next=0;
		};
		lis[index].style.background="";
		lis[next].style.background="#fff";
		// 让下一张图片就位
		images[next].style.left=widths+"px";
		// 做动画，让下一张图片left：-widths；当前图片的left：0
		animate(images[index],{left:-widths},Tween.Quad.easeIn,function(){flag=true;});
		animate(images[next],{left:0},Tween.Quad.easeIn,function(){flag=true;});
        
		// 更新index
		index=next;
	}
	win.onmouseover=function(){
		clearInterval(t);
		// animate(left,{opacity:1})
		// animate(right,{opacity:1})
		animate(lis,{opacity:1})

	}
	win.onmouseout=function(){ 
		t=setInterval(moveR,1800);
		// animate(left,{opacity:0})
		// animate(right,{opacity:0})
		animate(lis,{opacity:0})
	}
	left.onmouseover=function(){ 
		
		left.style.opacity="0.3"
		right.style.opacity="0.3"
	
	}
	left.onmouseout=function(){ 
		
		left.style.opacity="0.1"
		right.style.opacity="0.1"
	
	}
	right.onmouseover=function(){ 
		
		left.style.opacity="0.3"
		right.style.opacity="0.3"
	
	}
	right.onmouseout=function(){ 
		
		left.style.opacity="0.1"
		right.style.opacity="0.1"
	
	}
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onclick=function(){
			if (index==this.index) {return};
			if (this.index>index) {
                images[this.index].style.left=widths+"px";
		        animate(images[index],{left:-widths},Tween.Quad.easeIn,function(){flag=true;});
		        animate(images[this.index],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		        lis[index].style.background="";
		        lis[this.index].style.background="#fff";
			}else if(this.index<index){
				images[this.index].style.left=-widths+"px";
		        animate(images[index],{left:widths},Tween.Quad.easeIn,function(){flag=true;});
		        animate(images[this.index],{left:0},Tween.Quad.easeIn,function(){flag=true;});
		        lis[index].style.background="";
		        lis[this.index].style.background="#fff";
			}
		    
		    next=this.index;
		    index=this.index;   
	    }
	}
	right.onclick=function(){
		if (flag) {
			flag=false;
			moveR();
		}
				
	}
	left.onclick=function(){
		if (flag) {
			flag=false;
			moveL();
		}
				
	}

	// 中部四张图片动画
        var stp=$(".stp")[0];
        var stp2=$(".stp2")[0];
	    console.log(stp2);
		console.log(stp.offsetTop);	
		var arr=[];
		arr.push(stp.offsetTop);
		console.log(arr)
		var ycflag=true;
        var ycdw3=$(".ycdw3")[0];

	window.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
        var scrollTop=obj.scrollTop;
        
		if(scrollTop>=arr[0]-520){
			animate(stp2,{top:0,opacity:1});
			
		}

if(scrollTop>="100"){
		 	console.log('222')
      	

        if(ycflag){
           ycflag=false;
          animate(ycdw3,{display:'block'})
          
          
      }
        
      }else {
        if(!ycflag){
            ycflag=true;   
          animate(ycdw3,{display:'none'})
         
          
          
        }
        
      }

      ycdw3.onclick=function(){
	animate(obj,{scrollTop:0})
      	
      }

	}




















})