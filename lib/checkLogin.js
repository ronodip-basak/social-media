import jsonwebtoken from "jsonwebtoken";
import jwt from "jsonwebtoken"
import cookie from 'cookie'

export default async function checkLogin(req, res){
    if(req?.cookies?.auth){
        return await checkCookieLogin(req, res);
    }

    return await checkHeaderLogin(req);
}

const checkCookieLogin = async (req, res) => {
    
    try{
        const decoded = jwt.verify(req.cookies.auth, process.env.JWT_SECRET);
        const claims = { sub: decoded.sub }
        const token = jsonwebtoken.sign(claims, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })
        res.setHeader('Set-Cookie', cookie.serialize('auth', token, {
            secure: process.env.NODE_ENV !== "development",
            httpOnly: true,
            sameSite: true,
            maxAge: 3600,
            path: '/'
        }));
        return true;
    }   
    catch(error){
        return false;
    }
}


const checkHeaderLogin = async (req) => {
    try{
        const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        console.log(decoded)
        return true;
    }   
    catch(error){
        return false;
    }
}