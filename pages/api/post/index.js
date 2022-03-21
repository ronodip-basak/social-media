import auth_id from "../../../lib/auth_id";
import auth from "../../../middleware/auth";
import { postSchema } from "../../../validation/postValidation";
import validate from "../../../lib/validate";
import { PrismaClient } from "@prisma/client";

export default auth(async function handler(req, res){
    if(req.method == "POST"){
        const currentUserId = await auth_id(req);
        const data = await validate(req.body, postSchema);
        if(!data.success){
            return res.status(400).json(data.error)
        }

        

        const post = data.data;
        post.user_id = currentUserId;

        try{
            const prisma = new PrismaClient();
            const savedPost = await prisma.post.create({
                data: post
            });

            await prisma.$disconnect()
    
            return res.status(200).json(savedPost)
        }
        catch(error){
            return res.status(500).json(error)
        }    
    }
})