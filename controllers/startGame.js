/** @format */

export const startGame = async (req, res, _) => {
	const { status } = req.body;

	if (status.toLowerCase() === 'false') {
		global.randomNumber = 0;
		res.status(201).json({
			status: false,
			text: 'Game over',
		});
	} else {
		global.randomNumber = Math.floor(Math.random() * 100);
		res.status(201).json({
			status: true,
			text: 'Game run',
		});
	}
};
