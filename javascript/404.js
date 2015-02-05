//v1
//     var secs =5; //倒计时的秒数
//     var URL ;
//     function doUpdate(secs){ //更新时间函数
//         var jumpTo=document.getElementById("bground2");
//         jumpTo.innerHTML=secs;
//     }
//     function timer(secs){ //每秒更新一次
//         for (var i=secs;i>0;i--)
//         {
//             window.setTimeout('doUpdate('+ i +')', (secs-i) * 1000);
//         }
//     }
//     setTimeout('delayload()',5000);//5秒后更换背景图片，苦逼的限制真多，参数只能是数字
//     function delayload(){
// //        document.body.write("<img class='log' src='http://i42.tinypic.com/kxh6e.png' alt='Page Not Found'/>"); //没出来 = =
//         document.body.style.backgroundImage="Url(http://i42.tinypic.com/kxh6e.png)";//添加背景图片
//         document.body.style.backgroundRepeat="no-repeat";
//         document.body.style.backgroundAttachment="fixed";
//         document.body.style.backgroundSize="cover";
//         document.body.style.backgroundPosition="center top";
//         document.getElementById("bground").style.color="white";//更改文字颜色
//         document.getElementById("bground2").style.color="white";
//         document.getElementById("bground2").innerHTML="GO!";
//         window.setTimeout(changeFontColorA(),750);
//     }
//     function changeFontColorA(){
//         document.getElementById("bground").style.color="red";//更改文字颜色
// //        document.getElementById("bground2").style.color="red";
//         window.setTimeout(changeFontColorB,750)
//     }
//     function changeFontColorB(){
//         document.getElementById("bground").style.color="yellow";//更改文字颜色
// //        document.getElementById("bground2").style.color="yellow";
//         window.setTimeout(changeFontColorA,750)
//     }

//v2 时间方式 https://mindgrader.com/tutorials/1-how-to-create-a-simple-javascript-countdown-timer
// set the date we're counting down to
var target_date = new Date().getTime() + 6000;

// variables for time units
var days, hours, minutes, seconds;

// get tag element
var countdown = document.getElementById("bground2");

// update the tag with id "countdown" every 1 second

var intervalHandle = setInterval(function count() { //如此高级的嵌套源自https://mindgrader.com/tutorials/1-how-to-create-a-simple-javascript-countdown-timer，未能掌握

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = Math.abs((target_date - current_date) / 1000);

    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;

    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;

    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // format countdown string + set tag value
    // countdown.innerHTML = days + "d, " + hours + "h, "
    // + minutes + "m, " + seconds + "s";  
    countdown.innerHTML = seconds;
    if (seconds == 0) {
        countdown.innerHTML = "GO!";
        window.clearInterval(intervalHandle);
    }
}, 1000);


// //v3 数组方式
// var secs=6//倒计时数目从0开始，6即是0-5
// var numberArray=[];
// // var numberArray=[5,4,3,2,1,0];
// var jumpTo=document.getElementById("bground2");
// numberArray[secs-1]=secs;
// for (var i = 0; i <numberArray.length; i++) {//生成倒计时数组
// 	numberArray[i]=i;
// 	console.log(numberArray[i]);
// };
// // console.log(numberArray[0],numberArray[1],numberArray[2],numberArray[3],numberArray[4]);

// numberArray.reverse();//数组反转，为什么放在changeName中不可以啊

// var numberIndex=0;
// var text;
// function changeNumber(){
// 	jumpTo.innerHTML=numberArray[numberIndex];
// 	// console.log(numberArray[numberIndex]);
// 	if (numberIndex==secs-1) {//经典错误= == ===的区分 哈哈
// 		jumpTo.innerHTML="GO!";
// 		window.clearInterval(intervalHandle);
// 	};
// 	numberIndex++;
// }
// var intervalHandle=setInterval(changeNumber,1000);

function delayload() {
    // document.body.write("<img class='log' src='http://i42.tinypic.com/kxh6e.png' alt='Page Not Found'/>"); //没出来 = =
    document.body.style.backgroundImage = "Url(http://i42.tinypic.com/kxh6e.png)";//添加背景图片
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center top";
    document.getElementById("bground").style.color = "white";//更改文字颜色
    document.getElementById("bground2").style.color = "white";
    document.getElementById("bground2").innerHTML = "GO!";
    window.setTimeout(changeFontColorA, 750);
}
function changeFontColorA() {
    document.getElementById("bground").style.color = "red";//更改文字颜色
//        document.getElementById("bground2").style.color="red";
    window.setTimeout(changeFontColorB, 750)
}
function changeFontColorB() {
    document.getElementById("bground").style.color = "yellow";//更改文字颜色
//        document.getElementById("bground2").style.color="yellow";
    window.setTimeout(changeFontColorA, 750)
}
setTimeout("delayload()", 5000);//5秒后更换背景图片，苦逼的限制真多，参数只能是数字
//清空计数失败
// var timeoutHandle=setTimeout("delayload()",5000);
// setTimeout(function stop(){
// 	window.clearTimeout(timeoutHandle)
// },10000);