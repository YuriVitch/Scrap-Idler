var money = 0;
var scrap = 0;
var scrappers = 0;
var grinders = 0;
var exchangerate = 1;
var nextScrapperCost = 10;
var nextGrinderCost = 50;

function incrimentScrap(number){
	scrap = scrap + number
	document.getElementById('Scrap').innerHTML = scrap;
};
function sellScrap(){
	if(scrap > 0){
		money = money + (scrap * exchangerate);
		scrap = 0;
		document.getElementById('Money').innerHTML = money;
		document.getElementById('Scrap').innerHTML = scrap
	}
};

function buyScrapper(){
	var scrapperCost = Math.floor(10 * Math.pow(1.2,scrappers));
	if (money >= scrapperCost){
		scrappers = scrappers + 1;
		money = money - scrapperCost;
		document.getElementById('Scrappers').innerHTML = scrappers;
		document.getElementById('Money').innerHTML = money
		};
	nextScrapperCost = Math.floor(10 * Math.pow(1.2, scrappers));
	document.getElementById("ScrapperCost").innerHTML = nextScrapperCost;
};

function buyGrinder(){
	var grinderCost = Math.floor(50 * Math.pow(1.2,grinders))
	if(money >= grinderCost){
		grinders = grinders + 1;
		money = money - grinderCost
		document.getElementById("Grinders").innerHTML = grinders
		document.getElementById("Money").innerHTML = money
	};
	nextGrinderCost = Math.floor(50 * Math.pow(1.2, grinders))
	document.getElementById("GrinderCost").innerHTML = nextGrinderCost
}
	
function save() {
	var save = {
		money: money,
		scrap: scrap,
		scrappers: scrappers,
		grinders: grinders,
		sCost: nextScrapperCost,
		rate: exchangerate
	};
	localStorage.setItem("save", JSON.stringify(save));
};
function load() {
	try{var savegame = JSON.parse(localStorage.getItem("save"));
		if(typeof savegame.money !== "undefined"){
			money = savegame.money;
			document.getElementById('Money').innerHTML = money
		}
				if(typeof savegame.scrappers !== "undefined"){
			scrappers = savegame.scrappers;
			document.getElementById('Scrappers').innerHTML = scrappers;
	}
			if(typeof savegame.grinders !== "undefined"){
			grinders = savegame.grinders;
			document.getElementById('Grinders').innerHTML = grinders;
		}
		if(typeof savegame.scrap !== "undefined"){
			scrap = savegame.scrap;
			document.getElementById('Scrap').innerHTML = scrap
		}
		if(typeof savegame.rate !== "undefined"){
			rate = savegame.rate;
		}
		console.log("Save Loaded")
}
		catch{console.log("So no save?")}
}
function deleteSave(){
	localStorage.removeItem("save")
}

window.setInterval(function(){
	incrimentScrap(scrappers)
	incrimentScrap(grinders * 5)
}, 1000);