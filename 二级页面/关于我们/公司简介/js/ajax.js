function ajax(obj){
	// 参数初始化
	// 初始化
	var obj=obj||{};
	// 判断url是否存在
	if(!obj.url){
		return;
	}
	// 初始化type类型
	var type=obj.type?obj.type:"GET";
	// 初始化datatype类型
	var datatype=obj.datatype?obj.datatype:"json";
	// 初始化异步
	var asynch=obj.asynch?obj.asynch:true;
	// 初始化数据
	var data="";
	if(typeof obj.data=="string"){
		data=obj.data;
	}else if(obj.data instanceof Object){
		for(var i in obj.data){
			// {name:zhangsan,age:18}
			data+=(i+"="+obj.data[i]+"&");
		}
		data=data.slice(0,-1);
	}
	// 创建ajax对象
	var xml=XMLHttpRequest?new XMLHttpRequest():new ActiveXObjict("Microsoft.XMLHTTP");
	// 打开请求、发送请求
	if(type=="GET"){
		xml.open(type,obj.url+"?"+data,asynch);
		xml.send();
	}else if(type=="POST"){
		xml.open(type,obj.url,asynch);
		xml.setRequestHeader("Content-Type","application/xwww-form-urlencoded");
		xml.send(data);
	}
	// 建立异步监听函数
	xml.onreadystatechange=function(){
		if(xml.readyState==4){
			if(xml.status==200){
				if(datatype=="text"){
					obj.success(xml.responseText);
				}else if(datatype=="json"){
					obj.success(eval("("+xml.responseText+")"))
				}else if(datatype=="xml"){
					obj.success(xml.responseXML)
				}
			}
		}
	}
}