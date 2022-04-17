let moneyTotal = 500
let yourBet = 0

document.getElementById('minimum').addEventListener('click', betTen)
document.getElementById('maximum').addEventListener('click', betFifty)
document.getElementById('play').addEventListener('click', spin)

function betTen(){
	if (moneyTotal >= 10){
		yourBet += 10
		moneyTotal -= 10
	} else {
		return
	}

	let bet = document.getElementById('bet')
	bet.innerText = yourBet
	let bank = document.getElementById('bank')
	bank.innerText = moneyTotal
}

function betFifty(){
	if (moneyTotal >= 50){
		yourBet += 50
		moneyTotal -= 50
	} else {
		return
	}

	let bet = document.getElementById('bet')
	bet.innerText = yourBet
	let bank = document.getElementById('bank')
	bank.innerText = moneyTotal
}

function spinRandomFruit(){
	let randomNumber = Math.random()
	let fruit="lemon"
	if(randomNumber<.20){
		fruit="cherry"
	} else if(randomNumber<.40){
		fruit="orange"
	} else if(randomNumber<.60){
		fruit="plum"
	} else if(randomNumber<.80){
		fruit="seven"	
	}
	return fruit
}

function spin(){
	let winLoss = document.getElementById('winLoss')
	if (yourBet === 0 && moneyTotal === 0){
		winLoss.innerText = 'Pack it up, sucker!'
		return
	} else {
	let leftSlot = spinRandomFruit()
	let middleSlot = spinRandomFruit()
	let rightSlot = spinRandomFruit()

	let winLoss = document.getElementById('winLoss')

	if (leftSlot === middleSlot && middleSlot === rightSlot){
		if (leftSlot === 'lemon'){
			winLoss.innerText = 'You lucky son-of-a!'
			bank =  moneyTotal + (yourBet * 10)
		} else if (leftSlot === 'cherry'){
			winLoss.innerText = 'You lucky son-of-a!'
			bank = moneyTotal + (yourBet * 10)
		} else if (leftSlot === 'orange'){
			winLoss.innerText = 'You lucky son-of-a!'
			bank = moneyTotal + (yourBet * 15)
		} else if (leftSlot === 'plum'){
			winLoss.innerText = 'You lucky son-of-a!'
			bank = moneyTotal + (yourBet * 20)
		} else if (leftSlot === 'seven'){
			winLoss.innerText = 'You lucky son-of-a!'
			bank = moneyTotal + (yourBet * 50)
		}
	} else {
		winLoss.innerText = 'Hahaha, better luck next time!'	
	}

	yourBet = 0

	let leftSlotRoll = document.getElementById('left')
	leftSlotRoll.innerText = leftSlot
	let middleSlotRoll = document.getElementById('middle')
	middleSlotRoll.innerText = middleSlot
	let rightSlotRoll = document.getElementById('right')
	rightSlotRoll.innerText = rightSlot
	}
	let bank = document.getElementById('bank')
	bank.innerText = moneyTotal
	let bet = document.getElementById('bet')
	bet.innerText = yourBet
}