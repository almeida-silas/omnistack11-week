const { celebrate, Segments, Joi } = require('celebrate');

const profile = celebrate({

    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
});

const session = celebrate({

    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required(),
    }),
});

module.exports = {
    profile,
    session,
};