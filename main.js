var money = 0;
var scrap = 0;
var science = 0;
var scrappers = 0;
var carts = 0;
var grinders = 0;
var flask = 0;
var exchangerate = 1;
var nextScrapperCost = 10;
var nextGrinderCost = 50;
var nextCartCost = 25;
var nextWageCost = 50;
var nextFlaskCost = 25
var moneystate = 0;
var wages = 1
var tab = 0;
var deletedsave = 0;
var production;
var sciProd;
const tabs = document.getElementsByName("table");

function incrimentScrap(number){
	scrap = scrap + number
	document.getElementById('Scrap').innerHTML = scrap;
};

function incrimentResearch(production){
	science = science + production
	document.getElementById("science").innerHTML = science
}

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
		money = money + (1 * exchangerate);
		scrap = scrap - 1;
		document.getElementById('Money').innerHTML = money;
		document.getElementById('Scrap').innerHTML = scrap
	}
};

function buyScrapper(){
	var scrapperCost = Math.floor(10 * Math.pow(1.3,scrappers));
	if (money >= scrapperCost){
		scrappers = scrappers + 1;
		money = money - scrapperCost;
		document.getElementById('Scrappers').innerHTML = scrappers;
		document.getElementById('Money').innerHTML = money
		};
	nextScrapperCost = Math.floor(10 * Math.pow(1.3, scrappers));
	document.getElementById("ScrapperCost").innerHTML = nextScrapperCost;
};

function buyCart(){
	var cartCost = Math.floor(25 * Math.pow(1.4,carts));
	if (money >= cartCost){
		carts = carts + 1;
		money = money - cartCost;
		document.getElementById('Shopping').innerHTML = carts;
		document.getElementById('Money').innerHTML = money
		};
	nextCartCost = Math.floor(25 * Math.pow(1.4, carts));
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
	var grinderCost = Math.floor(50 * Math.pow(1.5, grinders))
	if(money >= grinderCost){
		grinders = grinders + 1;
		money = money - grinderCost;
		document.getElementById("Grinders").innerHTML = grinders;
		document.getElementById("Money").innerHTML = money;
	};
	nextGrinderCost = Math.floor(50 * Math.pow(1.5, grinders));
	document.getElementById("GrinderCost").innerHTML = nextGrinderCost
}

function buyFlasks(){
	var flaskCost = Math.floor(25 * Math.pow(2, flask))
	if(money >= flaskCost){
		flask = flask + 1;
		money = money - flaskCost;
		document.getElementById("flasks").innerHTML = flask;
		document.getElementById("Money").innerHTML = money;
	};
	nextFlaskCost = Math.floor(25 * Math.pow(2, flask))
	document.getElementById("flaskcost").innerHTML = nextFlaskCost
}

function upgradeWages(){
	var wagecost = Math.floor(50 * Math.pow(2, wages))
		if(science >= wagecost){
			wages = wages + 0.25;
			science = science - wagecost;
			document.getElementById("wages").innerHTML = wages;
			document.getElementById("science").innerHTML = science
		}
	nextWageCost = Math.floor(50 * Math.pow(2, wages));
	document.getElementById("wagecost").innerHTML = nextWageCost
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
		sci: science,
		scrappers: scrappers,
		carts: carts,
		grinders: grinders,
		sCost: nextScrapperCost,
		scCost: nextCartCost,
		gCost: nextGrinderCost,
		rate: exchangerate,
		mState: moneystate,
		flasks: flask,
		fCost: nextFlaskCost,
		wages: wages
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
		if(typeof savegame.wages !== "undefined"){
			wages = savegame.wages;
		}
		if(typeof savegame.flasks !== "undefined"){
			flask = savegame.flasks;
		}
		if(typeof savegame.fCost !== "undefined"){
			nextFlaskCost = savegame.fCost;
		}
		if(typeof savegame.sci !== "undefined"){
			science = savegame.sci;
		}
		console.log("Save Loaded")
		console.log(savegame)
}
		catch{console.log("So no save?")}
		try{for(let item in savegame){
			if(savegame.hasOwnProperty(item)){
			console.log(savegame[item])
			}
		}
		}
		catch{console.log("fuck")}
}

function deleteSave(){
	localStorage.removeItem("save")
	deletedsave = 1
}

//Main Loop
window.setInterval(function(){
	production = (scrappers * wages) + (grinders*5)
	sciProd = (flask * 0.25)
	incrimentScrap(production)
	incrimentMoney(carts)
	incrimentResearch(sciProd)
	state(money)
	grinderReveal()
}, 1000);

//Autosave
window.setInterval(function(){
	savegame()
	console.log("autosaved")
}, 900000)

//Saves on page exit
window.onbeforeunload = function(){
	if(deletedsave == 0){
	savegame()
	}
}
