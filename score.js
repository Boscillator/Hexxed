function score_calc(expected, actual, diffuculty, miliseconds) {
	var percentage_off = ((Math.abs(expected[0]-actual[1])+Math.abs(expected[1]-actual[1])+Math.abs(expected[2]-actual[2])/3)/255)*100;
	var score = ((15-diffuculty-percentage_off)/(15-diffuculty))*(1500-miliseconds);
	return score;
}
