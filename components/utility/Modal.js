export default function Modal(props) {
    return (
        <>
            <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" >
                <div className="absolute bg-black opacity-80 inset-0 z-0" onClick={ props.closeModal ? props.closeModal : () => {}}></div>
                <div style={{maxHeight: '90vh', overflowY: 'scroll', scrollPadding: '3rem', scrollbarWidth: 'none'}} className="w-full  max-w-lg relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                    <div className="flex justify-between px-5 pt-3 pb-1">
                        <h5 className="text-lg font-bold w-full text-center">{props.title? props.title : "Pass title as prop to set title"}</h5>
                        <button className="float-right" onClick={ props.closeModal ? props.closeModal : () => {}}>X</button>
                    </div>
                    <div className="pt-1 bg-slate-400 w-full">

                    </div>
                    <div className="px-5 py-3 w-full">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    )
}