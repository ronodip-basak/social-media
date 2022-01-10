const Avatar = ({ avatar, dimension }) => {
    return (
        <>
            <div style={{width: dimension, height: dimension, backgroundImage: `url('${avatar}')`,borderRadius: '50%' , backgroundPosition: 'center', backgroundSize: 'contain' }} >

            </div>
        </>
    );
}

export default Avatar;