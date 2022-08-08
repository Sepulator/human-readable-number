module.exports = function toReadable (number) {

	let ones = ['zero','one','two','three','four','five','six','seven','eight',
	            'nine','ten','eleven','twelve','thirteen','fourteen','fifteen',
							'sixteen','seventeen','eighteen','nineteen'];

  let tens = ['twenty','thirty','forty','fifty','sixty','seventy','eighty', 'ninety'];

	if ( (0 <= number) && (number < 20)) {
		return ones[number]
	}

	if ( number % 100 === 0) {
		return `${ones[number / 100]} hundred`
	}

	if ( (number < 100) && (number % 10 === 0)) {
		return tens[number / 10 - 2]
	}

	if ( (11 <= number) && (number <= 99)) {
		return `${tens[Math.trunc(number / 10 - 2)]} ${ones[number % 10]}`
	}

	if ( (11 <= number) && (number <= 99)) {
		return `${tens[Math.trunc(number / 10)]} ${ones[number % 10]}`
	}

	if (number % 100 < 20) {
		return `${ones[Math.trunc(number / 100)]} hundred ${ones[number % 100]}`
	}

	if ( (number > 100) && (number % 10 === 0)) {
		return `${ones[Math.trunc(number / 100)]} hundred ${tens[(number % 100 - number % 10)/10 - 2]}`
	}

	if (Math.trunc(number / 10) % 10 === 0) {
		return `${ones[Math.trunc(number / 100)]} hundred ${ones[number % 10]}`
	} else {
		return `${ones[Math.trunc(number / 100)]} hundred ${tens[(number % 100 - number % 10)/10 - 2]} ${ones[number % 10]}`
	}

}
