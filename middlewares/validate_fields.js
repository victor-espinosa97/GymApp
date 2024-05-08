const { response } = require('express');
const { validationResult } = require('express-validator');


const validateFields = (req , res = response, next) =>{
    const errorsValidation =validationResult(req);
    
    if(!errorsValidation.isEmpty()){
        return res.status(400).json({
            ok:false,
            errors:errorsValidation.mapped()
        });
    } 

    next();
}

module.exports = {
    validateFields,
}