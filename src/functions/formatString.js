function formatString(str) {
	
	const sqrDigs = str.match(/\u221A\d+/g);
	let digits = str.match(/(?<=\u221A)\d+/g);
    digits = digits.map(dig => Math.sqrt(dig));
	for (let i = 0; i < digits.length; i++) {
		str = str.replace(sqrDigs[i], digits[i]);
    }
	return str;
}

export default formatString;