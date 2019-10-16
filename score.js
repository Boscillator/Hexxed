function score_calc(expected, actual, diffuculty, miliseconds) {
	var percentage_off = ((Math.abs(expected[0])+Math.abs(expected[1])+Math.abs(expected[2]))-(Math.abs(actual[0])+Math.abs(actual[1])+Math.abs(actual[2]))/255)*100;
	var score = ((15-diffuculty-percentage_off)/(15-diffuculty))*(1500-miliseconds);
	return score;
}
