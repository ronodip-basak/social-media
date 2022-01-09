export default async function validate(data, schema){
    try{
        const validatedData = await schema.validate(data, {
            stripUnknown: true,
            abortEarly: false
        })
        return {
            success: true,
            data: validatedData,
            error: null
        };
    }
    catch(error){
        return {
            success: false,
            data: null,
            error: error
        }
    }
}