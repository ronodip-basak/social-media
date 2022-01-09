import { PrismaClient } from '.prisma/client';
import * as Yup from 'yup';
export const SignupSchema = Yup.object({
    name: Yup.string().required().min(3, 'Name should be at least 3 charecters'),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    passwordConfirmation: Yup.string().required().oneOf([Yup.ref('password')], 'Password does not match')
})

export const SignupSchemaBackEnd = SignupSchema.concat(Yup.object({
    email: Yup.string().email().required().test('email-already-exists', 'Given Email already exist!', async function(value){
        const prisma = new PrismaClient();

        const existingUser = await prisma.user.findFirst({
            where: {
                email: value
            }
        })
        prisma.$disconnect();
        if(existingUser){
            return false;
        }

        return true;
    })
}))


export const SigninSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required()
})

export const SigninSchemaBackEnd = SigninSchema.concat(Yup.object({
    email: Yup.string().email().required()
        .test('email-does-not-exists', 'Given Email is not registered', async (value) => {
            const prisma = new PrismaClient();

            const existingUser = await prisma.user.findFirst({
                where: {
                    email: value
                }
            })
            prisma.$disconnect();
            if(existingUser){
                return true;
            }

            return false;
    })
}))