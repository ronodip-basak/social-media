import { useState } from "react";
import Modal from "../utility/Modal";
import PrimaryButton from "../utility/PrimaryButton";

export default function AddPost(){

    const [modalOpen, setModalOpen] = useState(false);

    const [files, setFiles] = useState([]);

    const addFile = (event) => {
        event.preventDefault();
        console.log(event)
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
                >

                </textarea>

            </div>
              

            {modalOpen && 
                <Modal 
                    closeModal={() => {setModalOpen(false)}}
                    title="Create Post"
                >
                    <form>
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
                        >

                        </textarea>
                        <div 
                            className="w-full h-44 bg-slate-200 rounded-md mb-4"
                            onDrop={(ev) => {
                                ev.preventDefault();
                                alert('Done')
                            }}
                        >

                        </div>
                        <PrimaryButton text="Post" />
                    </form>
                </Modal>
            }
            

            
        </>
    );
}