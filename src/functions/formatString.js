function formatString(str) {
	
	const sqrDigs = str.match(/&radic\d+/g);
	let digits = str.match(/(?<=&radic)\d+/g);
    digits = digits.map(dig => Math.sqrt(dig));
	for (let i = 0; i < digits.length; i++) {
		str = str.replace(sqrDigs[i], digits[i]);
    }
	return str;
}

export default formatString;