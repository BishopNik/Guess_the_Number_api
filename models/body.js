/** @format */

import Joi from 'joi';

export const statusGameSchema = Joi.object({
	status: Joi.boolean().required(),
});

export const userNumberSchema = Joi.object({
	number: Joi.number().required(),
});
