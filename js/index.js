$(function(){
	var add=$("button");
	var ul=$("ul");	
	var input=$(".header input");
	var todos=[];
    var starpos;
     ul.on('touchstart','li',function(e){
         	// 获取开始触摸的位置
           starpos=e.originalEvent.changedTouches[0].clientX;
         })
     ul.on('touchend','li',function(e){
          	// 获取结束触摸的位置
         	var n=e.originalEvent.changedTouches[0].clientX;
         	 if(n-starpos>50){
          	 todos[$(this).index()].state=1;
             $(this).addClass("done");  
           }
           if(n-starpos<-50){
              todos[$(this).index()].state=0;
              $(this).removeClass("done");
           }
             localStorage.todos=JSON.stringify(todos);
         })
if(localStorage.todos){
	todos=JSON.parse(localStorage.todos);
	render();
}
add.on('touchstart',function(){
	var v=$.trim(input.val());
	if(!v){
	 return;
	}
    var todo={
    name:v,
    state:0,
    }
    todos.push(todo);
    localStorage.todos=JSON.stringify(todos);
    render();
    input.val("");
})
 ul.on("touchstart",'.delete',function(){
 	todos.splice($(this).closest('li').index(),1);
 	localStorage.todos=JSON.stringify(todos);
 	$(this).closest('li').addClass("dong");
 	$(this).closest('li').delay(800).queue(function(){
 		$(this).remove().dequeue();
 	})
 })
 var clearall=$(".clearall");
 clearall.on("touchstart",function(){
 	ul.find(".done").each(function(i){
    $(this).delay(i*80).queue(function(){
    	$(this).addClass("dong").dequeue();
    }).delay(800).queue(function(){
    	$(this).remove().dequeue();
    })
  })
 	var arr=[];
 	for(var i in todos){
 		if(todos[i].state==0){
 			arr.push(todos[i])
 		}
 	}
 	todos=arr;
    localStorage.todos=JSON.stringify(todos);
 })
 $(".box div").on("touchstart",function(){
 	$(".box div").removeClass();
 	$(this).addClass("active");
 	ul.find("li").show();
 	if($(this).attr("data-orl")=="complete"){
 		ul.find("li:not('.done')").hide();
 	}
    if($(this).attr("data-orl")=="remin"){
 		ul.find("li.done").hide();
 	}
 })
function render(){
     ul.empty();
	for(var i=0;i<todos.length;i++){
	 var c=(todos[i].state) ? "done":"";
	 $('<li class="'+c+'"><div class="content">'+todos[i].name+'</div><div class="delete">×</div></li>').appendTo(ul)
	}
}

})