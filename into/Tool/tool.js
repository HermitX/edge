//*********脚本加载*********//

var JsFileLoadedArray=new Array();
var LoadJsTime1=new Date().getTime();

$.JsFileLoad=function(url){
    if(JsFileLoadedArray.indexOf(url)>-1)
   return;
    $("head").append('<script src="'+url+'"><\/script>');
    JsFileLoadedArray.push(url);
   /* // 测试
   if(location.href.indexOf("test")>-1){
        $("body").prepend('<div>'+url+"---"+(new Date()).getMinutes()+":"+(new Date()).getSeconds()+"</div>");
        $("title").html(new Date().getTime()-LoadJsTime1);
    } 
     */ 
}

$.JsFileLoad2=function(url){
    if(sFileLoadedArray.indexOf(url)>-1)
    return;
    $.ajax({
        async:false,
        url:url,
        dataType:"script",
        success:function(){
            JsFileLoadedArray.push(url);
            return;
        }
    });
}
/*加载Css样式插件*/
$.CssFileLoad=function(url){
    if(JsFileLoadedArray.indexOf(url)>-1)
    return;
    $("head").append('<link href="'+url+'" rel="stylesheet">');
    JsFileLoadedArray.push(url);
   /*
   //测试
    if(location.href.indexOf("test")>-1){
        //$("body").prepend('<div>'+url+"---"+(new Date()).getMinutes()+":"+(new Date()).getSeconds()+"</div>");
        $("title").html(new Date().getTime()-LoadJsTime1);
    } 
    */
}

function request(strName){
    var strHref = window.document.location.href;
    var intPos = strHref.indexOf("?");
    var strRight = strHref.substr(intPos+1);
    
    var arrTmp = strRight.split("&");
    for(var i = 0; i < arrTmp.length; i++){
        var arrTmp = arrTmp[i].split("=");
        if(arrTmp[0].toUpperCase() == strName.toUpperCase()) return arrTmp[1];
    } 
    return "";
}

$.CssFileLoad('/edge/into/Tool/css/bootstrap.css');
$.JsFileLoad('/edge/into/Tool/js/bootstrap.min.js');
    //$.CssFileLoad('/Tool/css/bootstrap-table.min.css');
    //$.JsFileLoad('/Tool/js/bootstrap-table.min.js');
 
