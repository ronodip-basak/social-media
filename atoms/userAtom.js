import { atom } from "recoil";

const getCurrentUser = async () => {

}

export const currentUser = atom({
    key: 'currentUser',
    default: null
});