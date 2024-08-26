/** @format */

export const checkNumber = async (req, res) => {
	const { number } = req.body;

	if (parseInt(number, 10) === global.randomNumber) {
		res.status(201).json({
			status: false,
			text: 'You guessed it! Game over',
		});
	} else if (parseInt(number, 10) > global.randomNumber) {
		res.status(201).json({
			status: true,
			text: 'Your value is greater!',
		});
	} else {
		res.status(201).json({
			status: true,
			text: 'Your value is less!',
		});
	}
};
