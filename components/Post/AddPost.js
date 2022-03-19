import { useState } from "react";
import ImageUpload from "../ImageUpload";
import Modal from "../utility/Modal";
import PrimaryButton from "../utility/PrimaryButton";

export default function AddPost(){

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);

    const [postBody, setPostBody] = useState("");

    const [loading, setLoading] = useState(false)

    const submitPost = async (e) => {
        e.preventDefault();
        setLoading(true)


    }

    const uploadFilesToServer = async (e) => {
        e.preventDefault()
        
        for (const x in uploadedFiles) {
            if (Object.hasOwnProperty.call(uploadedFiles, x)) {
                const data = new FormData();
                const file = uploadedFiles[x];
                data.append('file', file)
                fetch(`/api/uploadFile`, {
                    method: "POST",
                    body: data
                })
                .then((res) => res.json())
                .then(res => {
                    console.log(res)
                })
            }
        }
    }

    const removeFileFromIndex = (index) => {
        const newFilesList = uploadedFiles.filter((file, i) => {
            return i != index
        })

        setUploadedFiles(newFilesList)
    }

    return (
        <>
            <div className="p-3 bg-white shadow-md rounded-xl" onFocus={() => { setModalOpen(!modalOpen) }}>
                <textarea
                    className="
                        form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 
                        focus:bg-white 
                        focus:border-blue-300 
                        focus:outline-none
                        rounded-lg
                    "
                    id="exampleFormControlTextarea1"
                    rows="1"
                    placeholder="What's on your mind?"
                    onChange={(e) => {
                        setPostBody(e.target.value)
                    }}
                >

                </textarea>

            </div>
              

            {modalOpen && 
                <Modal 
                    closeModal={() => {setModalOpen(false)}}
                    title="Create Post"
                >
                    <form onSubmit={submitPost}>
                        <textarea
                            className="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 
                                focus:bg-white 
                                focus:border-blue-300 
                                focus:outline-none
                                rounded-lg
                                mb-4
                            "
                            name="content"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="What's on your mind?"
                            onChange={(e) => {
                                setPostBody(e.target.value)
                            }}
                            onKeyUp={(e) => {
                                setPostBody(e.target.value)
                            }}
                        >

                        </textarea>
                        <ImageUpload uploadedFiles={uploadedFiles} removeUploadedFile={removeFileFromIndex} setUploadedFiles={setUploadedFiles} />
                        
                        <PrimaryButton loading={loading} text={uploadedFiles.length < 1 && postBody == "" ? "Test" : "Post"} />
                        
                        
                    </form>
                </Modal>
            }
            

            
        </>
    );
}