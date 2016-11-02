$(function(){
	//添加删除list
	function addlist(obj1){
	var add=$(".add",obj1);
	var ul=$("ul",obj1);	
	var input=$("input",obj1);
	var tody=$(".tody",obj1);
	var neirong=$(".neirong",obj1);
	var todos=[];
	var todos1=[];
	var todos2=[];
	var todos3=[];
    var starpos;
    tody.on("touchend",".jianiu",function(){
    	neirong.show();
 
    })
     ul.on('touchstart','li',function(e){
         	// 获取开始触摸的位置
           starpos=e.originalEvent.changedTouches[0].clientX;
         })
     ul.on('touchend','li',function(e){
          	// 获取结束触摸的位置
         	var n=e.originalEvent.changedTouches[0].clientX;
         	 if(n-starpos>50){
         	 	if(ul.attr("data")==0){
         	  todos[$(this).index()].state=1;
             $(this).addClass("done");  
         	 	}else if(ul.attr("data")==1){
         	  todos1[$(this).index()].state=1;
             $(this).addClass("done");  
         	 	}else if(ul.attr("data")==2){
         	 	 todos2[$(this).index()].state=1;
                $(this).addClass("done");  	
         	 	}else if(ul.attr("data")==3){
         	 	 todos3[$(this).index()].state=1;
                 $(this).addClass("done");  		
         	 	}
          	
           }
           if(n-starpos<-50){
            	if(ul.attr("data")==0){
         	  todos[$(this).index()].state=1;
             $(this).addClass("done");  
         	 	}else if(ul.attr("data")==1){
         	  todos1[$(this).index()].state=1;
             $(this).addClass("done");  
         	 	}else if(ul.attr("data")==2){
         	 	 todos2[$(this).index()].state=1;
                $(this).addClass("done");  	
         	 	}else if(ul.attr("data")==3){
         	 	 todos3[$(this).index()].state=1;
                 $(this).addClass("done");  		
         	 	}
           }
             localStorage.todos=JSON.stringify(todos);
             localStorage.todos1=JSON.stringify(todos1);
             localStorage.todos2=JSON.stringify(todos2);
             localStorage.todos3=JSON.stringify(todos3);
         })
if(localStorage.todos){
	todos=JSON.parse(localStorage.todos);                       
	render();
}
if(localStorage.todos1){
	todos1=JSON.parse(localStorage.todos1);                       
	render();
}
if(localStorage.todos2){
	todos2=JSON.parse(localStorage.todos2);                       
	render();
}
if(localStorage.todos3){
	todos3=JSON.parse(localStorage.todos3);                       
	render();
}
add.on('touchstart',function(){
	neirong.hide();
	var v=$.trim(input.val());
	if(!v){
	 return;
	}
    var todo={
    name:v,
    state:0,
    }

    if(ul.attr("data")==0){
         	   todos.push(todo);
    localStorage.todos=JSON.stringify(todos);
         	 	}else if(ul.attr("data")==1){
         	   todos1.push(todo);
    localStorage.todos1=JSON.stringify(todos1);
         	 	}else if(ul.attr("data")==2){
         	 	   todos2.push(todo);
    localStorage.todos2=JSON.stringify(todos2);
         	 	}else if(ul.attr("data")==3){
         	 	   todos3.push(todo);
    localStorage.todos3=JSON.stringify(todos3);
         	 	}
    render();
    input.val("");
})
 ul.on("touchstart",'.delete',function(){
 	 if(ul.attr("data")==0){
         	 	todos.splice($(this).closest('li').index(),1);
 	localStorage.todos=JSON.stringify(todos);
         	 	}else if(ul.attr("data")==1){
         	  	todos1.splice($(this).closest('li').index(),1);
 	localStorage.todos1=JSON.stringify(todos1);
         	 	}else if(ul.attr("data")==2){
         	 	 	todos2.splice($(this).closest('li').index(),1);
 	localStorage.todos2=JSON.stringify(todos2);
         	 	}else if(ul.attr("data")==3){
         	 	  	todos3.splice($(this).closest('li').index(),1);
 	localStorage.todos3=JSON.stringify(todos3);
         	 	}
 	$(this).closest('li').addClass("dong");
 	$(this).closest('li').delay(800).queue(function(){
 		$(this).remove().dequeue();
 	})
 })
 function render(){
     ul.empty();
      if(ul.attr("data")==0){
         	 	for(var i=0;i<todos.length;i++){
	 var c=(todos[i].state) ? "done":"";
	 $('<li class="'+c+'"><div class="content">'+todos[i].name+'</div><div class="delete"><img src="./img/xx_03.png" alt="" /></div></li>').appendTo(ul)
	}
         	 	}else if(ul.attr("data")==1){
         	  	for(var i=0;i<todos1.length;i++){
	 var c=(todos1[i].state) ? "done":"";
	 $('<li class="'+c+'"><div class="content">'+todos1[i].name+'</div><div class="delete"><img src="./img/xx_03.png" alt="" /></div></li>').appendTo(ul)
	}
         	 	}else if(ul.attr("data")==2){
         	 	 	for(var i=0;i<todos2.length;i++){
	 var c=(todos2[i].state) ? "done":"";
	 $('<li class="'+c+'"><div class="content">'+todos2[i].name+'</div><div class="delete"><img src="./img/xx_03.png" alt="" /></div></li>').appendTo(ul)
	}
         	 	}else if(ul.attr("data")==3){
         	 	  	for(var i=0;i<todos3.length;i++){
	 var c=(todos3[i].state) ? "done":"";
	 $('<li class="'+c+'"><div class="content">'+todos3[i].name+'</div><div class="delete"><img src="./img/xx_03.png" alt="" /></div></li>').appendTo(ul)
	}
         	 	}  
 }
}
addlist($(".list").eq(0));
addlist($(".list").eq(1));	
addlist($(".list").eq(2));
addlist($(".list").eq(3));	
// var clearall=$(".clearall");
// clearall.on("touchstart",function(){
// 	ul.find(".done").each(function(i){
//  $(this).delay(i*80).queue(function(){
//  	$(this).addClass("dong").dequeue();
//  }).delay(800).queue(function(){
//  	$(this).remove().dequeue(); 
//  })
//})
// 	var arr=[];
// 	for(var i in todos){
// 		if(todos[i].state==0){
// 			arr.push(todos[i])
// 		}
// 	}
// 	todos=arr;
//  localStorage.todos=JSON.stringify(todos);
// })
// $(".box div").on("touchstart",function(){
// 	$(".box div").removeClass();
// 	$(this).addClass("active");
// 	ul.find("li").show();
// 	if($(this).attr("data-orl")=="complete"){
// 		ul.find("li:not('.done')").hide();
// 	}
//  if($(this).attr("data-orl")=="remin"){
// 		ul.find("li.done").hide();
// 	}
// })
//主页出现
$(".menu").on("touchend",function(){
	$(".zhuye").removeAttr("id");
	$(".all").removeAttr("id");
	$(".zhuye").show();
	$(".zhuye").attr("id","yiru");                                                         
})
//主页切换所有任务
$(".zhuti li:eq(0)").on("touchend",function(){
	$(".zhuye").hide();
	$(".zhuye").removeAttr("id");
	$(".all").removeAttr("id");
	$(".all").attr("id","yichu");
})
})