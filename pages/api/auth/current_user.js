import getCurrentUser from "../../../lib/getCurrentUser";

export default async function currentUser(req, res){
    return await getCurrentUser(req, res);
}