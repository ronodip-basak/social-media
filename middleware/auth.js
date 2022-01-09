import checkLogin from "../lib/checkLogin";


const auth = (fn) => async (
    req,
    res
) => {
    if(! await checkLogin(req, res)){
        return res.status(401).json({
            message: "Unauthenticated"
        });
    }

    return await fn(req, res);   
}


export default auth;