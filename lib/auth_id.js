import jsonwebtoken from "jsonwebtoken";

export default async function auth_id(req){
    let user_id;
    if(req?.cookies?.auth){
        const decoded = await jsonwebtoken.verify(req.cookies.auth, process.env.JWT_SECRET);
        user_id = decoded.sub
    }
    else{
        const decoded = await jsonwebtoken.verify(req.cookies.authorization, process.env.JWT_SECRET);
        user_id = decoded.sub
    }

    return user_id;
}