//声明全局变量
var index = 0,
    timer = null,
    lis = document.getElementsByTagName("span"),
    img = document.getElementsByTagName("img"),
    tab = document.getElementsByClassName("nav")[0],
    pics = byId("pics"),
    len = img.length,
    list1 = byId("list1"),
    list2 = byId("list2"),
    list3 = byId("list3"),
    list4 = byId("list4"),
    img1 = byId("img1"),
    img2 = byId("img2"),
    img3 = byId("img3"),
    img4 = byId("img4");
//封装getElementById()函数
function byId(id){
    return typeof(id) ==="string" ? document.getElementById(id):id;
}

//返回默认状态
clearAll=function() {
    img1.className="hidden",
    img2.className="hidden",
    img3.className="hidden",
    img4.className="hidden";
    list1.className="title",
    list2.className="title",
    list3.className="title",
    list4.className="title";
}

//封装通用事件绑定方法
function addHandler(element,type,handler) {
    //针对非IE浏览器
    if(element.addEventListener){
        element.addEventListener(type,handler,true);
    } else if(element.attachEvent){
        //IE浏览器
        element.attachEvent("on"+type,handler);
    } else{
        //低版本IE浏览器
        element["on"+type] = handler;
    }
}

//绑定导航栏点击事件
addHandler(list1,"click",function(){
    clearAll();
    img1.className="show";
    list1.className="title bg";
})
addHandler(list2,"click",function(){
    clearAll();
    img2.className="show";
    list2.className="title bg";
})
addHandler(list3,"click",function(){
    clearAll();
    img3.className="show";
    list3.className="title bg";
})
addHandler(list4,"click",function(){
    clearAll();
    img4.className="show";
    list4.className="title bg";
})

//鼠标悬停tab
addHandler(tab,"mouseover",stopAutoPlay);

//鼠标离开tab
addHandler(tab,"mouseout",startAutoPlay);

//鼠标悬停停止自动轮播
addHandler(pics,"mouseover",stopAutoPlay);

//鼠标离开开始轮播
addHandler(pics,"mouseout",startAutoPlay);

//自动轮播函数changeImg()
changeImg=function(){
    clearAll();
    lis[index].className="title bg";
    img[index].className="show";
}

//设定定时器
function startAutoPlay() {
    timer=setInterval(function() {
        index++;
        if(index>=4){
            index=0;
        }
        changeImg();
    }, 1500);
}

//清除定时器
function stopAutoPlay(){
    if(timer){
        clearInterval(timer);
    }
}

startAutoPlay();
