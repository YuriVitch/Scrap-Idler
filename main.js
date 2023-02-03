var money = 0;
var scrap = 0;
var scrappers = 0;
var carts = 0
var grinders = 0;
var exchangerate = 1;
var nextScrapperCost = 10;
var nextGrinderCost = 50;
var nextCartCost = 25
var moneystate = 0
var tab = 0
var production
const tabs = document.getElementsByName("table")

function incrimentScrap(number){
	scrap = scrap + number
	document.getElementById('Scrap').innerHTML = scrap;
};
function incrimentMoney(number){
	let maxsell = scrap
	let maxsellers = number
	while(number){
			if(scrap){
				scrap = scrap - 1
				money = money + exchangerate
			}
			else{
			return	
			}
		document.getElementById('Money').innerHTML = money;
		document.getElementById('Scrap').innerHTML = scrap
		number--
	}
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

function buyCart(){
	var cartCost = Math.floor(25 * Math.pow(1.2,carts));
	if (money >= cartCost){
		carts = carts + 1;
		money = money - cartCost;
		document.getElementById('Shopping').innerHTML = carts;
		document.getElementById('Money').innerHTML = money
		};
	nextCartCost = Math.floor(25 * Math.pow(1.2, carts));
	document.getElementById("CartCost").innerHTML = nextCartCost;
}

function grinderReveal() {
	if(moneystate == 0){
		document.getElementById("grinderreveal").style.display = "none";
	} else if(moneystate > 0){
		document.getElementById("grinderreveal").style.display = "table-row-group"
	}
}

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

function state(value){
	if(value > 25 && moneystate < 1){
		moneystate = 1
	}
}
	
function switchtab(number){
	tabs[tab].style.display = "none"
	tab = tab + number
	if(tab < 0){
		tab = tabs.length - 1
	}
	else if(tab > (tabs.length - 1)){
		tab = 0
	}	
	tabs[tab].style.display = "block"
}
	
	
function savegame() {
	var save = {
		money: money,
		scrap: scrap,
		scrappers: scrappers,
		carts: carts,
		grinders: grinders,
		sCost: nextScrapperCost,
		scCost: nextCartCost,
		gCost: nextGrinderCost,
		rate: exchangerate,
		mState: moneystate
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
		if(typeof savegame.sCost !== "undefined"){
			nextScrapperCost = savegame.sCost;
			document.getElementById('ScrapperCost').innerHTML = nextScrapperCost
		}
		if(typeof savegame.carts !== "undefined"){
			carts = savegame.carts;
			document.getElementById('Shopping').innerHTML = carts;
		}
		if(typeof savegame.scCost !== "undefined"){
			nextCartCost = savegame.scCost;
			document.getElementById('CartCost').innerHTML = nextCartCost
		}
		if(typeof savegame.grinders !== "undefined"){
			grinders = savegame.grinders;
			document.getElementById('Grinders').innerHTML = grinders;
		}
		if(typeof savegame.gCost !== "undefined"){
			nextGrinderCost = savegame.gCost;
			document.getElementById('GrinderCost').innerHTML = nextGrinderCost
		}
		if(typeof savegame.scrap !== "undefined"){
			scrap = savegame.scrap;
			document.getElementById('Scrap').innerHTML = scrap
		}
		if(typeof savegame.rate !== "undefined"){
			rate = savegame.rate;
		}
		if(typeof savegame.mState !== "undefined"){
			moneystate = savegame.mState;
		}
		console.log("Save Loaded")
}
		catch{console.log("So no save?")}
}
function deleteSave(){
	localStorage.removeItem("save")
}

window.setInterval(function(){
	production = scrappers + (grinders*5)
	incrimentScrap(production)
	incrimentMoney(carts)
	state(money)
	grinderReveal()
}, 1000);
window.setInterval(function(){
	savegame()
}
), 900000)