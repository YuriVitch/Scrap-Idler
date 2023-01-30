var money = 0;
var scrap = 0;
var scrappers = 0;
var exchangerate = 1;
var nextcost = 10

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
}

function buyScrapper(){
	var scrapperCost = Math.floor(10 * Math.pow(1.2,scrappers));
	if (money >= scrapperCost){
		scrappers = scrappers + 1;
		money = money - scrapperCost;
		document.getElementById('Scrappers').innerHTML = scrappers;
		document.getElementById('Money').innerHTML = money
		};
	nextCost = Math.floor(10 * Math.pow(1.2, scrappers));
	document.getElementById("Cost").innerHTML = nextCost;
};

function save() {
	var save = {
		money: money,
		scrappers: scrappers,
		sCost: nextCost,
		scrap: scrap,
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
				if(typeof savegame.printers !== "undefined"){
			printers = savegame.printers;
			document.getElementById('Printers').innerHTML = printers;
	}
		if(typeof savegame.scrap !== "undefined"){
			scrap = savegame.scrap;
			document.getElementById('Scrap').innerHTML = scrap
		}
		if(typeof savegame.rate !== "undefined"){
			rate = savegame.rate;
		}
}
		catch{console.log("So no save?")}
}
function deleteSave(){
	localStorage.removeItem("save")
}

window.setInterval(function(){
	incrimentScrap(scrappers)
}, 1000);