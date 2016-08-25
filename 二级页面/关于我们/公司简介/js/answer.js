$(function(){

console.log(document.documentElement.clientWidth)
// 顶部下拉框
var more=$(".more");
// console.dir(more);
var baitu=$(".baitu");
var cp66=$(".cp66");
var cpxl=$(".cpxl");
// console.log(cp66)
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



	




















})