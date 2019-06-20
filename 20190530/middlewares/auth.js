function isLogged(req, res, next){
    if(req.session.email){
        next();
    }else{
        res.status(403).send('NO tienes permisos')
    }
}

module.exports = {
    isLogged
}