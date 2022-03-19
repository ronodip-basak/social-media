import { SquareThumbnail } from "./thumbnails"

export default function ImagePreview({images, removeUploadedFile}) {
    const renderedImages = images.map( (image, index) => {
        if(typeof(image) === "string"){
            return <SquareThumbnail key={index} index={index} src={image} removeUploadedFile={removeUploadedFile} />
        }

        else{
            if(image instanceof File){
                return <SquareThumbnail key={index} index={index} src={URL.createObjectURL(image)} removeUploadedFile={removeUploadedFile} />
            }
            else{
                return <SquareThumbnail key={index} index={index} removeUploadedFile={removeUploadedFile} src="#" />
            }
        }
    })


    return (
        <div className="flex flex-wrap justify-center">
            {renderedImages}
        </div>
    );
}