function formatString(str) {
	
	const sqrDigs = str.match(/\u221A\d+/g);
	let digits = sqrDigs.map(str => str.replace(/\u221A/, ''));
    digits = digits.map(dig => Math.sqrt(dig));
	for (let i = 0; i < digits.length; i++) {
		str = str.replace(sqrDigs[i], digits[i]);
	}
	return str;
}

export default formatString;