"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;

	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		arr = [-b / (2 * a)];
	} else if (d > 0) {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = percent / 100 / 12;
	let creditBody = amount - contribution;
	let payment = creditBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
	let totalAmount = payment * countMonths;

	return parseFloat(totalAmount.toFixed(2));
}
let result = Number(calculateTotalMortgage(10, 0, 20000, 24));