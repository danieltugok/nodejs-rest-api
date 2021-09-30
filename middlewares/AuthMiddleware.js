class AuthMiddleware {

    static async Auth( req, res, next ){
        const AuthToken = req.headers.authorization;
        
        try { 
            if (!AuthToken) throw "Autorization não informado.";

            const [ bearer , token ] = AuthToken.split(' ');

            if( !token ) throw 'Não foi informado Token.';
            if( token != '123456' ) throw 'Token inválido.';

            req.body['user'] = 'Daniel';

            next();

        } catch (error) {
            console.log('ERROR:', error);
            res.status(500).json({ error });            
        }
    }

}

module.exports = AuthMiddleware;