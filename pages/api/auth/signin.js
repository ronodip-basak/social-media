import { PrismaClient } from ".prisma/client";
import { verifyPassword } from "../../../lib/hash";
import validate from "../../../lib/validate";
import { SigninSchemaBackEnd } from "../../../validation/authValidation";
import cookie from 'cookie'
import jsonwebtoken from "jsonwebtoken";

export default async function signin(req, res){

    const validatedData = await validate(req.body, SigninSchemaBackEnd);

    if(!validatedData.success){
        res.status(400).json(validatedData.error)
    }

    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
        where: {
            email: req.body.email
        }
    })

    if(await verifyPassword(req.body.password, user.password)){
        const claims = { sub: user.id }
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
        return res.status(200).json({message: "Log In successful"})
    }
    

    return res.status(400).json({message: "Invalid Credentials"});
}