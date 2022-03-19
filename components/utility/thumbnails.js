export const SquareThumbnail = ({index, src, removeUploadedFile}) => {
    if(removeUploadedFile){
        return(
            <div className="w-6/12 sm:w-4/12 px-4 py-2">
                <img src={src} onClick={() => {
                    removeUploadedFile(index)
                }} />
            </div>
        )
    }
    return(
        <div className="w-6/12 sm:w-4/12 px-4 py-2">
            <img src={src} />
        </div>
    )
    
} 