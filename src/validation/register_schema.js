import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("student", "admin", "teacher").required(),
});

export const loginSchema = Joi.object({
  username: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("student", "admin", "teacher").required(),
});

export const resetSchema = Joi.object({
  username: Joi.string().email().required(),
  role: Joi.string().valid("student", "admin", "teacher").required(),
});
