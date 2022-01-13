import Image from 'next/image'
import Link from 'next/link'
import AddPost from '../components/Post/AddPost'
import Post from '../components/Post/Post'
import styles from '../styles/Home.module.scss'

export default function Home() {
    const post = {
        content: "Hello World",
        attachment: {
            type: "image",
            src: "https://random.imagecdn.app/500/150"
        },
        user: {
            name: "Ronodip Basak"
        },
        
    }
    return (
        <section className="w-full py-4 bg-gray-100 grid grid-cols-12 gap-4">
            <div className="bg-black h-52 hidden lg:block lg:col-span-3"></div>
            <div className="col-span-12 md:col-span-9 lg:col-span-6">
                <AddPost />
                <Post post={post} />  
            </div>
            <div className="bg-red-800 h-52 hidden md:block md:col-span-3"></div>
        </section>
    )
}
