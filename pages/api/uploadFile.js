import path from 'path'
import fs from 'fs'
import { Blob } from 'buffer';
import asyncBusboy from 'async-busboy'
import formidable from "formidable";

export const config = {
    api: {
      bodyParser: false,
    },
};
  


export default async function handler(req, res) {
    try{
        

        // res.status(200).json({success: true})
    }
    catch(error){
        return res.status(500).json({success: false, error: error, message: error.message, line: error.log})
    }    
    
}