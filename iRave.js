var List = [];
var alarmList = [];
var alarms = [];
var friends = [];
var track = [];
var check = [];
var friendsList = ["Diogo Sousa", "12345", "Diogo", "Francisco Pinto", "87654", "Francisco", "Xico", "87655", "Xico"];
var date = new Date();
var h = date.getHours() + ":" + date.getMinutes();

function doubleClick () {
    window.location.href = "Irave.html";
}

function Click () {
    window.location.href = "block.html";
}

function saveList() {
    localStorage.setItem("List", JSON.stringify(List));
    localStorage.setItem("alarmsList", JSON.stringify(alarmList));
    localStorage.setItem("Alarms", JSON.stringify(alarms));
    localStorage.setItem("Friends", JSON.stringify(friends));
    localStorage.setItem("Track", JSON.stringify(track));
    localStorage.setItem("Check", JSON.stringify(check));
    
}

function checkTime(i) {
    if (i < 10) {i = "0" + i; }  // add zero in front of numbers < 10
    return i;
}

function getToday() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var d = date.getDate();
    var mon = date.getUTCMonth();
    var alarmList = JSON.parse(localStorage.getItem("alarmsList"));
    var alarms = JSON.parse(localStorage.getItem("Alarms"));
    m = checkTime(m);
    d = checkTime(d);
    mon = checkTime(mon + 1);
    document.getElementById("hour").innerHTML = h + ":" + m;
    document.getElementById("date").innerHTML = d + "/" + mon;
    if(alarms.length != 0){
        for(let i = 1; i <alarmList.length; i+= 2 ){
            if((h + ":" + m) === alarmList[i]){
                message1();
            }
        }
    }
    var t = setTimeout(getToday, 500);
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById("txt").innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
}


function loadAllData(concertdata) {
    localStorage.setItem("AllConcertData", JSON.stringify(concertdata));
}

function getConcertTime(bandName) {
    var concertData = JSON.parse(localStorage.getItem("AllConcertData"));
   for(let i = 0; i < concertData.length; i++ ) {
        if (concertData[i].bandname == bandName){
            return concertData[i].start;
        }
    }
}


function selectConcert(bandName) {
    var List = JSON.parse(localStorage.getItem("List"));
    List.push(bandName);
    localStorage.setItem("List", JSON.stringify(List));
    var newalarm = document.createElement("a");
    var text = document.createTextNode(bandName);
    newalarm.appendChild(text);
    window.location.href = "personalize.html";
}

function timeOut(num) {
        setTimeout(message, 800, num);
}

function message(num) {
    if (num === 1) {
       var x = document.getElementById("alertsuccess");
        if (x.style.display != "block") {
            x.style.display = "block";
            timeOut(1);
        } else {
            x.style.display = "none";
        }
    }
    else if (num === 0) {
        var y = document.getElementById("alertinsuccess");
        if (y.style.display != "block") {
            y.style.display = "block";
            timeOut(0);
     } else {
         y.style.display = "none";
     } 
    }
    else if(num === 5){
        var y = document.getElementById("invalidRequest");
        if (y.style.display != "block") {
            y.style.display = "block";
            timeOut(5);
        } else {
            y.style.display = "none";
        }
    }
    
    else if(num === 4){
        var y = document.getElementById("invalidRequest1");
        if (y.style.display != "block") {
            y.style.display = "block";
            timeOut(4);
        } else {
            y.style.display = "none";
        }
    }
    else if(num === 15){
        var y = document.getElementById("alertinsuccess2");
        if (y.style.display != "block") {
            y.style.display = "block";
            timeOut(15);
        } else {
            y.style.display = "none";
        }
    }
    
     else if(num === 6){
        var y = document.getElementById("invalidRequest2");
        if (y.style.display != "block") {
            y.style.display = "block";
            timeOut(6);
        } else {
            y.style.display = "none";
        }
    }
    
    else {
        var x = document.getElementById("appl");
        if (x.style.display != "block") {
            x.style.display = "block";
            timeOut(3);
        } else {
            x.style.display = "none";
        }
    }
}

function myfunction(button) {
    var x =  document.getElementById("input").innerHTML;
    if(x.length < 5){
        document.getElementById("input").innerHTML += button;
    }
}

function deleteLast() {
    var x = document.getElementById("input").innerHTML;
    document.getElementById("input").innerHTML = x.substr(0,x.length -1);
}

function name(num){
    for(let i=1; i < friendsList.length; i += 3){
        if(num === friendsList[i]){
            return friendsList[i-1];
        }
    }
}
function sendRequest(){
    var x = document.getElementById("input").innerHTML;
    if(x.length === 5){
        if(name(x) != null){
        document.getElementById("request").innerHTML = name(x);
        document.getElementById("Request").style.display = "block";
        }
        else{
            document.getElementById("input").innerHTML = null;
            message(4);
        }
    }
    else{
        document.getElementById("input").innerHTML = null;
        message(5);
    }
}


function apply() {
    message(3);    
}

function message1() {
    var x = document.getElementById("alertconcert");
    if (x.style.display != "block") {
        x.style.display = "block";
    }

}

function fList() {
    var friends = JSON.parse(localStorage.getItem("Friends"));
    var j = 0;
    for(let i = 0; i < friends.length; i ++){
        if (friends[i] === document.getElementById("request").innerHTML){
            j++;
            closeRequest();
            message(6);
        }    
    }
    if( j === 0){
        friends.push(document.getElementById("request").innerHTML);
        closeRequest();
        localStorage.setItem("Friends", JSON.stringify(friends));
    }
}

function closeRequest() {
    document.getElementById("input").innerHTML = null;
    document.getElementById("Request").style.display = "none";
}

function showAlarm() {
    var alarms = JSON.parse(localStorage.getItem("Alarms"));
    var alarmList = JSON.parse(localStorage.getItem("alarmsList"));
    for (let i = 0; i < alarms.length; i++) {
        var alert = alarms[i];
        var you = document.createElement("p");
        you.innerHTML = alert;
        you.id = i;
        var but = document.createElement("span");
        but.innerHTML = " x";
        but.className = "closebtn";
        but.onclick = function(){var node = document.getElementById(i); node.parentNode.removeChild(node); alarms.splice(i,1); alarmList.splice(i,1); alarmList.splice(i,1); localStorage.setItem("Alarms", JSON.stringify(alarms)); localStorage.setItem("alarmsList", JSON.stringify(alarmList)); document.getElementById("alertconcert").style.display = "none"; return false;};
        you.appendChild(but);
        document.getElementById("alertconcert").appendChild(you);
    }
}

function alarmButton(){
    var alarmList = JSON.parse(localStorage.getItem("alarmsList"));
    if( alarmList.length === 0) {
        document.getElementById("alarmBut").style.opacity = 0;
    }
}

function alarm() {
    var alarmList = JSON.parse(localStorage.getItem("alarmsList"));
    var alarms = JSON.parse(localStorage.getItem("Alarms"));
    for (let i = 0; i < alarmList.length; i+= 2) {
        if (alarmList[i+1] > h) {
            var you = document.createElement("p");
            you.id = i;
            you.innerHTML = alarmList[i] + " " + alarmList[i+1] + " ";
            var but = document.createElement("span");
            but.innerHTML = "x";
            but.className = "closebtn";
            but.onclick = function(){var node = document.getElementById(i);node.parentNode.removeChild(node); alarmList.splice(i,1); alarmList.splice(i,1); alarms.splice(i/2,1); window.location.href ="alarms.html"; localStorage.setItem("Alarms", JSON.stringify(alarms)); localStorage.setItem("alarmsList", JSON.stringify(alarmList)); return false;};
            you.appendChild(but);
            document.getElementById("alarmList").appendChild(you);
        }
        else {
            alarmList.splice(i,1);
            alarmList.splice(i,1);
            alarms.splice(i/2,1);
            localStorage.setItem("Alarms", JSON.stringify(alarms));
            localStorage.setItem("alarmsList", JSON.stringify(alarmList));   
        }
    }
    
}

function friend() {
    var friends = JSON.parse(localStorage.getItem("Friends"));
    for (let i = 0; i < friends.length; i++) {
        var you = document.createElement("a");
        var text = document.createTextNode(friends[i]);
        you.id = i;
        you.appendChild(text);
        you.style.textAlign = "center";
        var check = document.createElement("input");
        check.type = "checkbox";
        check.id = "check";
        you.appendChild(check);
        document.getElementById("alarmList1").appendChild(you);
    } 
}

function friend2() {
    var friends = JSON.parse(localStorage.getItem("Friends"));
    for (let i = 0; i < friends.length; i++) {
        var you = document.createElement("a");
        var text = document.createTextNode(friends[i]);
        you.id = i;
        you.appendChild(text);
        you.style.textAlign = "center";
        var but = document.createElement("span");
        but.innerHTML = "x";
        but.className = "closebtn";
        but.onclick = function(){var node = document.getElementById(i);node.parentNode.removeChild(node); friends.splice(i,1); window.location.href ="friends.html"; localStorage.setItem("Friends", JSON.stringify(friends)); return false;};
        you.appendChild(but);
        document.getElementById("alarmList1").appendChild(you);
    } 
}

function reset() {
	var check = [];
	localStorage.setItem("Check", JSON.stringify(check));
}

function notCheck(name) {
	var check = JSON.parse(localStorage.getItem("Check"));
	for(let i = 0; i < check.length; i++){
		if (check[i] === name){
			localStorage.setItem("Check", JSON.stringify(check));
			return false;
		}
	}
	localStorage.setItem("Check", JSON.stringify(check));
	return true;
}

function tracks() {
    var x = document.getElementById("alarmList1").childNodes;
    var check = JSON.parse(localStorage.getItem("Check"));
    var track = JSON.parse(localStorage.getItem("Track"));
    for(let i = 0; i < x.length; i++){
        var node = document.getElementById(i);
        if(node.childNodes[1].checked){
            var y = node.childNodes[0].nodeValue;
            track.push(y);
            if(check.length === 0)
            	check.push(y);
            else if(check.length > 0 && notCheck(y))
            	check.push(y);
        }
        else{
        	for(let j = 0; j < check.length; j++){
        		if(node.childNodes[0].nodeValue === check[j])
        			check.splice(j,1);
        	}
        }
        localStorage.setItem("Track", JSON.stringify(track));
        localStorage.setItem("Check", JSON.stringify(check));
    }
    window.location.href="track.html"; 
}

function checks() {
	var check = JSON.parse(localStorage.getItem("Check"));
	var x = document.getElementById("alarmList1").childNodes;
	for(let i = 0; i < check.length; i++){
		for(let j = 0; j < x.length; j++){
			var node = document.getElementById(j);
			if(check[i] === node.childNodes[0].nodeValue){
				node.childNodes[1].checked = true;
			}

		}
	}
}


function showFriends() {
	var track = JSON.parse(localStorage.getItem("Track"));
	for(let i = 0; i < track.length; i++){
		for(let j = 0; j < friendsList.length; j += 3){
			if(track[i] == friendsList[j]){
				document.getElementById(friendsList[j+2]).style.display = "block";
				track.splice(i,1);
				i = 0;
			}
		}
	}
	localStorage.setItem("Track", JSON.stringify(track));
}

function popFriend(name) {
	var track = JSON.parse(localStorage.getItem("Track"));
	for(let i = 0; track.length; i++){
		if(name === track[i])
			track.splice(i,1);
	}
	localStorage.setItem("Track", JSON.stringify(track));

}

function listPop(){
	var List = JSON.parse(localStorage.getItem("List"));
	List.pop();
	localStorage.setItem("List", JSON.stringify(List));
}


function appendAlarm() {
    var List = JSON.parse(localStorage.getItem("List"));
    var band = List[0];
    var alarmList = JSON.parse(localStorage.getItem("alarmsList"));
    var alarms = JSON.parse(localStorage.getItem("Alarms"));
    var num = document.getElementById("number").value;
    console.log(num);
    var time = getConcertTime(band);
    if (time < num || num < h){
        message(0);
    }
    else {
    	if(alarmList.length === 0){
    		alarmList.push(band);
        	alarmList.push(num);
        	alarms.push(band + " concert is about to start");
        	localStorage.setItem("alarmsList", JSON.stringify(alarmList));
        	localStorage.setItem("List", JSON.stringify(List));
        	localStorage.setItem("Alarms", JSON.stringify(alarms));
        	message(1);
    	}
    	else{
    		var j = 0;
    		for(let i = 0; i < alarmList.length; i+=2){
    			if(band === alarmList[i] && num === alarmList[i+1]){
    				j = 1; 
    				message(15);
    			}
    		}
    		if(j === 0){
    			alarmList.push(band);
        		alarmList.push(num);
        		alarms.push(band + " concert is about to start");
        		localStorage.setItem("alarmsList", JSON.stringify(alarmList));
        		localStorage.setItem("List", JSON.stringify(List));
        		localStorage.setItem("Alarms", JSON.stringify(alarms));
        		message(1);
        	}
    	}
    } 
}

function goBack() {
    window.history.back();
}

function closeAlert(num) {
    var div1 = document.getElementById(num);
    setTimeout(function(){ div1.style.display = "none"; }, 600);
    var alarmList = JSON.parse(localStorage.getItem("alarmsList"));
    alarmList.pop();
    alarmList.pop();
    localStorage.setItem("alarmsList", JSON.stringify(alarmList));
    
}


function zoomin() {
    var myImg = document.getElementById("map");
    var img1 = document.getElementById("Diogo");
    var img2 = document.getElementById("Francisco");
    var mine = document.getElementById("mine");
    var mineTop = mine.getBoundingClientRect().top;
    var mineLeft = mine.getBoundingClientRect().left;
    var img1Top =  img1.getBoundingClientRect().top - mineTop;
  	var img1left = img1.getBoundingClientRect().left - mineLeft;
    var img2Top =  img2.getBoundingClientRect().top - mineTop;
    var img2Left = img2.getBoundingClientRect().left - mineLeft;
    var currWidth = myImg.clientWidth;
    var img1Width = img1.clientWidth;
    var img2Width = img2.clientWidth;
    if(currWidth >= 650) return false;
    else{
    	myImg.style.width = (currWidth + 25) + "px";
    	myImg.style.height = (currWidth + 25) + "px";
    	img1.style.width = (img1Width + 3) + "px";
    	img1.style.height = (img1Width + 3) + "px";
    	img2.style.width = (img2Width + 3) + "px";
    	img2.style.height = (img2Width + 3) + "px";
    	img1.style.top = (img1Top + 3) + "px";
    	img1.style.left = (img1left + 5) + "px";
    	img2.style.top = (img2Top + 3) + "px";
    	img2.style.left = (img2Left + 5) + "px";
    }
}

function zoomout() {
    var myImg = document.getElementById("map");
    var currWidth = myImg.clientWidth;
    var currheight = myImg.clientHeight;
    var img1 = document.getElementById("Diogo");
    var img2 = document.getElementById("Francisco");
    var mine = document.getElementById("mine");
    var img1Width = img1.clientWidth;
    var img2Width = img2.clientWidth;
    var mineTop = mine.getBoundingClientRect().top;
    var mineLeft = mine.getBoundingClientRect().left;
   	var img1Top =  img1.getBoundingClientRect().top - mineTop;
  	var img1left = img1.getBoundingClientRect().left - mineLeft;
    var img2Top =  img2.getBoundingClientRect().top - mineTop;
    var img2Left = img2.getBoundingClientRect().left - mineLeft;
    if (currWidth == 100 || currheight ==100) return false;
    else {
        myImg.style.width = (currWidth - 25) + "px";
        myImg.style.height = (currWidth - 25) + "px";
        img1.style.width = (img1Width - 3) + "px";
    	img1.style.height = (img1Width - 3) + "px";
    	img2.style.width = (img2Width - 3) + "px";
    	img2.style.height = (img2Width - 3) + "px";
        img1.style.top = (img1Top - 3) + "px";
   		img1.style.left = (img1left - 5) + "px";
    	img2.style.top = (img2Top - 3) + "px";
    	img2.style.left = (img2Left - 5) + "px";
  }
}

function zoomin1() {
    var myImg = document.getElementById("map");
    var currWidth = myImg.clientWidth;
    if(currWidth >= 650) return false;
    else{
    	myImg.style.width = (currWidth + 25) + "px";
    	myImg.style.height = (currWidth + 25) + "px";
    }
}

function zoomout1() {
    var myImg = document.getElementById("map");
    var currWidth = myImg.clientWidth;
    var currheight = myImg.clientHeight;
    if (currWidth == 100 || currheight ==100) return false;
    else {
        myImg.style.width = (currWidth - 25) + "px";
        myImg.style.height = (currWidth - 25) + "px";
  }
}

