function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for (let i = 0; arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}
	const avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) { //               насадка суммирования элементов;
	return arr.reduce((acc, number) => acc + number, 0);
}

function differenceMaxMinWorker(...arr) { //       насадка вычисления разницы максимального и минимального элементов;
	return arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) { //      насадка вычисления разницы сумм чётных и нечётных элементов;
	const sumEvenElement = arr.filter(item => item % 2 === 0).reduce((acc, number) => acc + number, 0);
	const sumOddElement = arr.filter(item => item % 2 !== 0).reduce((acc, number) => acc + number, 0);

	return arr.length === 0 ? 0 : sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) { //    насадка вычисления среднего значения чётных элементов
	return arr
		.filter(item => item % 2 === 0)
		.reduce((acc, number, index, filteredArray) => acc + number / filteredArray.length, 0);
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	let result = 0;
	for (let i = 0; i < arrOfArr.length; i++) {
		result = func(...arrOfArr[i]);

		if (result > maxWorkerResult)
			maxWorkerResult = result;
	}
	return maxWorkerResult
}