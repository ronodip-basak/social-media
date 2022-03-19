export default function PrimaryButton(props){
    
    return (
        <div className="block">
            <button 
                className={props.class ? `${props.class}` : "w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg"}
                onClick={ props.onClickCallback ? props.onClickCallback : () => {}}
                type={props.type ? props.type : "submit"}
            >
                {props.loading &&
                    <div className="flex justify-around">
                        <div style={{borderTopColor: 'transparent', textAlign: 'center'}}
                            className="w-6 h-6 border-4 border-blue-400 border-solid rounded-full animate-spin">

                        </div>
                    </div>
                }

                {!props.loading && 
                    (props.text ? props.text : "Submit")
                }
                
            </button>
        </div>
    )
}