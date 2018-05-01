const toUppr = (str) => str.toUpperCase();

const Simbol = {
    1: "1 А И С Ъ A J S",
    2: "2 Б Й Т Ы B K T",
    3: "3 В К У Ь C L U",
    4: "4 Г Л Ф Э D M V",
    5: "5 Д М Х Ю E N W",
    6: "6 Е Н Ц Я F O X",
    7: "7 Ё О Ч G P Y",
    8: "8 Ж П Ш H Q Z",
    9: "9 З Р Щ I R"
}


const Checker = (sim) => {

	if(sim === " " || sim === "") {
		return 0;
	}

	if (sim.length > 1) {
		return false;
	}

	sim = toUppr(sim);

	for(let i=1; i <= Object.keys(Simbol).length; i++) {

		if(Simbol[i].includes(sim)) {
			return i;
		}

	}

	return 0;

}

module.exports.SankiApp = (str) => {

	if(str === "") {
		return 0;
	}

	let resault = 0;


	for(let i=0; i < str.length; i++) {

		resault += Checker(str[i]);

	}

	return NumSum(Number(resault));

}

const NumSum = (num) => {

	let strNum = num.toString();

	if (strNum.length === 1){
		return num;
	}

	let prepared = Number(strNum.substr(1, strNum.length));

	return NumSum(Number(strNum[0]) + prepared);

}