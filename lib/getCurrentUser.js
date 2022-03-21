import { PrismaClient } from ".prisma/client";
import jsonwebtoken from "jsonwebtoken";
import checkLogin from "./checkLogin";
import auth_id from "./auth_id.js"

export default async function getCurrentUser(req, res){
    if(await checkLogin(req, res)){
        try {
            const user_id = await auth_id(req);
            

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