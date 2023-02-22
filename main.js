let column_1 = [];
let column_2 = [];
let column_3 = [];
let column_4 = [];

for (let i=0; i<30; i++) {
	column_1.push(Math.floor(Math.random()*10)+1)
	column_2.push(Math.floor(Math.random()*10)+1)
}

for (let i=0; i<30; i++) {
	column_3.push(Math.floor(Math.random()*61+40))
	column_4.push(Math.floor(Math.random()*61+40))
}

const sum_1 = column_1.reduce((a, b) => a + b, 0);
const sum_2 = column_2.reduce((a, b) => a + b, 0);
const sum_3 = column_3.reduce((a, b) => a + b, 0);
const sum_4 = column_4.reduce((a, b) => a + b, 0);

let sums = [sum_1, sum_2, sum_3, sum_4];
let total_score = sum_1+sum_2+sum_3+sum_4;
const results = {
	column_1,
	column_2,
	column_3,
	column_4,
	sums,
	total_score,
}

console.log(results)
