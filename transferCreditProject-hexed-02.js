function score_calc(expected, actual, diffuculty, miliseconds) {
	var percentage_off = ((Math.abs(expected[0]-actual[0])/255)*100+(Math.abs(expected[1]-actual[1])/255)*100+(Math.abs(expected[2]-actual[2])/255)*100)/3;
	console.log(percentage_off);
	var score = ((15-diffuculty-percentage_off)/(15-diffuculty))*(15000-Math.min(15000, miliseconds));
	return score;
}
