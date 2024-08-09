const { Joi, celebrate } = require('celebrate');
const validator = require('validator');

const validateURL = (value, helpers) => {
  if (!validator.isURL(value)) {
    return helpers.error('any.invalid');
  }
  return value;
};

// Validation for creating a user
const validateCreateUser = celebrate({
  body:Joi.object().keys({
    name: Joi.string().min(2).max(30).messages({
      "string.min": 'The minimum length of the "name" field is 2',
      "string.max": 'The maximum length of the "name" field is 30',
    }),
    email: Joi.string().required().email().messages({
      "string.empty": 'The "email" field must be filled in',
      "string.email": 'The "email" field must be a valid email address',
    }),
    password: Joi.string().required().messages({
      "string.empty": 'The "password" field must be filled in',
    }),
  })
})

// Validation for user login
const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      "string.empty": 'The "email" field must be filled in',
      "string.email": 'The "email" field must be a valid email address',
    }),
    password: Joi.string().required().messages({
      "string.empty": 'The "password" field must be filled in',
    }),
  })
});
//{ , , , date, source, link, image }
//Validation sawe article
const validateSaweArticle = celebrate({
  body:Joi.object().keys({
    keyword: Joi.string().required().message({
      "string.empty": 'The "keyword" can`t be empty',
    }),
    title: Joi.string().required().message({
      "string.empty": 'The "keyword" can`t be empty',
    }),
    text: Joi.string().required().message({
      "string.empty": 'The "keyword" can`t be empty',
    }),
    date: Joi.string().required().date().message({
      "string.empty": 'The "keyword" can`t be empty',
    }),
    source: Joi.string().required().message({
      "string.empty": 'The "keyword" can`t be empty',
    }),
    link: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "link" field must be filled in',
      "string.uri": 'The "link" field must be a valid URL',
    }),
    image: Joi.string().required().custom(validateURL).messages({
      "string.empty": 'The "image" field must be filled in',
      "string.uri": 'The "image" field must be a valid URL',
    }),
  })
})

// Validation for IDs (user and article item)
const validateId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().length(24).hex().required().messages({
      "string.length": 'The "id" field must be 24 characters long',
      "string.hex": 'The "id" field must be a valid hexadecimal',
      "string.empty": 'The "id" field must be filled in',
    }),
  }),
});

module.exports = {
  validateSaweArticle,
  validateCreateUser,
  validateLogin,
  validateId
};