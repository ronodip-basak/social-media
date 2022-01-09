import { PrismaClient } from ".prisma/client";
import { passwordHash } from "../../../lib/hash";
import validate from "../../../lib/validate";
import { SignupSchemaBackEnd } from "../../../validation/authValidation";

export default async function signup(req, res){


    const data = await validate(req.body, SignupSchemaBackEnd);
    if(!data.success){
        return res.status(400).json(data.error)
    }

    
    
    const user = data.data;
    

    delete user.passwordConfirmation;

    user.password = passwordHash(user.password);


    const prisma = new PrismaClient();

    try{
        const savedUser = await prisma.user.create({
            data: user
        });
        savedUser.password = null;

        prisma.$disconnect()

        return res.status(200).json(savedUser)
    }
    catch(error){
        return res.status(500).json(error)
    }    
}