import Image from "../Image";
import Avatar from "../Avatar";

export default function Post({post}){
    return (
        <>
            <div className="container shadow-xl shadow-slate-900 mt-4 bg-white" style={{ padding: '1rem', borderRadius: '1rem'}}>
                
                <div style={{display: 'flex'}}>
                    <Avatar 
                        avatar="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        dimension={'2.5rem'}
                    />
                    <p style={{ marginLeft: '0.5rem' }}><b>{post?.user?.name}</b></p></div>
                <div>{post.content}</div>
                {post.attachment &&
                    <Image src={post.attachment.src} />
                }
            </div>
        </>
    )
}