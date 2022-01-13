export default function PrimaryButton(props){
    const doNothingFunction = () => {
        // Does Noting
    }
    return (
        <div className="block">
            <button 
                className={props.class ? `${props.class}` : "w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg"}
                onClick={ props.onClickCallback ? props.onClickCallback : () => {}}
            >
                { props.text ? props.text : "Submit"}
            </button>
        </div>
    )
}