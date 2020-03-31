const { celebrate, Segments, Joi } = require('celebrate');

const create = celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
});

const ready = celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),
});

const deleteI = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    }),
});

module.exports = {
    create,
    ready,
    deleteI,
};