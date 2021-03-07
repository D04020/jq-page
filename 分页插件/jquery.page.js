;(function($){
    $.fn.page=function(options){
        var defaults={
            pageNo:1,  //当前页码
            totalPage:16, //总页码
            totalSize:300  //总浏览数 
        }
        var seetings = $.extend({},defaults,options)
        var That = this
       
        function createHTML(){
            var html =''
            html = "<a class='firstPage'>首页</a><a class='prevPage'>上一页</a>"
            if(seetings.totalPage>6){
                // 当前选中页码小于5
               if(seetings.pageNo<5){
                    for(var i=1;i<=5;i++){
                        if(i==seetings.pageNo){
                            html+="<a class='active'>"+i+"</a>"
                        }else{
                            html+="<a>"+i+"</a>"
                        }
                    }
                    html+='...'
                    html+="<a>"+seetings.totalPage+"</a>"
               }else{
                   if(seetings.pageNo<seetings.totalPage-3){
                        for(var i=seetings.pageNo-2;i<=seetings.pageNo+2;i++){
                            if(i==seetings.pageNo){
                                html+="<a class='active'>"+i+"</a>"
                            }else{
                                html+="<a>"+i+"</a>"
                            }
                        }
                        html+='...'
                        html+="<a>"+seetings.totalPage+"</a>"
                   }else{
                       html+='<a>1</a>'
                       html+='...'
                       for(var i=seetings.totalPage-4;i<=seetings.totalPage;i++){
                            if(i==seetings.pageNo){
                                html+="<a class='active'>"+i+"</a>"
                            }else{
                                html+="<a>"+i+"</a>"
                            }
                       }
                   }
                   

                  
               }
            }else{
                for(var i=1;i<=seetings.totalPage;i++){
                    if(i==seetings.pageNo){
                        html+="<a class='active'>"+i+"</a>"
                    }else{
                        html+="<a>"+i+"</a>"
                    }
                }
            }
          
            html+="<a class='nextPage'>下一页</a><a class='lastPage'>尾页</a>"
            html+='<span>共 <span>'+seetings.totalPage+'</span> 页</span><span>共 <span>'+seetings.totalSize+'</span> 条记录</span>'
            That.html(html)   
           
        }
        function bindMouse(){
            That.on('click','a',function(){
               var attr = $(this).attr('class')
               var txt = $(this).text()
               if(attr=='nextPage'){
                    seetings.pageNo+=1
                    if(seetings.pageNo>seetings.totalPage){
                        seetings.pageNo=seetings.totalPage
                    }
               }else if(attr=='prevPage'){
                    seetings.pageNo-=1
                    if(seetings.pageNo<1){
                        seetings.pageNo=1
                    }
               }else if(attr=='firstPage'){
                   seetings.pageNo=1
               }else if(attr=='lastPage'){
                    seetings.pageNo=seetings.totalPage
               }else{
                    seetings.pageNo=parseInt(txt)
               }
               console.log( seetings.pageNo)
               createHTML()

            })
        }
        bindMouse()
        createHTML()
    }
   

})(jQuery)