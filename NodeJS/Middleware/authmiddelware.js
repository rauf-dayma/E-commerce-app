import Joi from 'joi'

export const registrationValidation = (req, res, next) =>{
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(15).required()
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({message: "bad request", error})
    }
    next();
} 


export const loginValidation = (req, res, next) =>{
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(15).required()
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({message: "bad request", error})
    }
    next();
} 