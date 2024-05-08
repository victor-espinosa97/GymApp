const jwt = require('jsonwebtoken');

const generateJWT = (id = '', key_token = '', time = '2d') =>{

    return new Promise((resolve, reject)=>{
        const payload = {id};

        jwt.sign(payload, key_token, {
            expiresIn: time
        },(err,token)=>{
            if(err){
                console.log(err);
                reject('No se pudo generar el JWT');
            }else{
                resolve(token);
            }
        });
    });

}

const checkJWT = async ( token = '' ) =>{
    try {
        
        const { id } = jwt.verify(token, 'Clave.token' );
        
        return { ok:true, id }
    } catch (error) {
        if (error.name !== 'TokenExpiredError') console.log(error);
        return { ok:false };
    }
}

module.exports = {
    generateJWT,
    checkJWT,
}