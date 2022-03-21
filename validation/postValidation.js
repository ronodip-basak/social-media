import * as Yup from 'yup';
export const postSchema = Yup.object({
    content: Yup.string().required().max(180)
})