import { useState } from "react";
import ImagePreview from "./utility/ImagePreview";
import { SquareThumbnail } from "./utility/thumbnails";

export default function ImageUpload({ uploadedFiles, setUploadedFiles, removeUploadedFile}) {
    


    const addImage = (ev) => {
        const files = ev.target.files;
        const newUploadedFiles = [];
        if(uploadedFiles.length > 0){
            for (const x in uploadedFiles) {
                if (Object.hasOwnProperty.call(uploadedFiles, x)) {
                    const element = uploadedFiles[x];
                    newUploadedFiles.push(element)                    
                }
            }
        }
        
        for (const x in files) {
            if (Object.hasOwnProperty.call(files, x)) {
                newUploadedFiles.push(files[x]);                
            }
        }
        setUploadedFiles(newUploadedFiles);
    }


    const uploadFiles = async (ev) => {
        const file = ev.target.files[0];
        const data = new FormData();
        data.append('file[]', file);
        const promise = await fetch(`${uploadURI}`, {
            method: "POST",
            body: data
        })

        const res = await promise.json()
    }

    return (
        <>
            <label
                className="
                text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900
                    w-full h-10 
                    inline-flex items-center
                    
                    mb-4 
                    
                    justify-around 
                    flex-col 
                    align-middle 
                    cursor-pointer 
                    text-2lg 
                " 
            >
                <input 
                    type="file" 
                    onChange={addImage} 
                    multiple 
                    className="hidden"
                />

                    Upload Files

            </label>
            <ImagePreview images={uploadedFiles} removeUploadedFile={removeUploadedFile} />
           
            
        
        </>
    )
}

