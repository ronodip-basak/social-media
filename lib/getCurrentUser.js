import { PrismaClient } from ".prisma/client";
import jsonwebtoken from "jsonwebtoken";
import checkLogin from "./checkLogin";

export default async function getCurrentUser(req, res){
    if(await checkLogin(req, res)){
        try {
            let user_id;
            if(req?.cookies?.auth){
                const decoded = await jsonwebtoken.verify(req.cookies.auth, process.env.JWT_SECRET);
                user_id = decoded.sub
            }
            else{
                const decoded = await jsonwebtoken.verify(req.cookies.authorization, process.env.JWT_SECRET);
                user_id = decoded.sub
            }

            const prisma = new PrismaClient();
            const user = await prisma.user.findFirst({
                where: {
                    id: parseInt(user_id)
                }
            });
            user.password = null;
            user.createdAt = null;
            user.updatedAt = null;
            return res.status(200).json({success: user});
        } catch (error) {
            return res.status(401).json({ message: "Unauthenticated" })
        }
        
    }

    return res.status(401).json({message: "Unauthenticated!"});
}