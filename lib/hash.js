export function passwordHash(password){
    const bcrypt = require('bcrypt');
    return bcrypt.hashSync(password, parseInt(process.env.BCRYPT_SALT_ROUND));
}

export async function verifyPassword(password, hashedPassword){
    const bcrypt = require('bcrypt');
    return await bcrypt.compare(password, hashedPassword);
}