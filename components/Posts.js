import React from 'react'
import Post from './Post'
const newPost = [
    {
        key: "1",
        name: 'sirine gaddour',
        message: "Salut ",
        email: "syrinagaddour11@gmail.com",
        timestamp: "21/09/2022 2:57",
        image: "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png",
        PostImage: "https://cdn.scribbr.com/wp-content/uploads/2020/01/la-femme-qui-pleure.jpg"
    },
    {
        key: "2",
        name: 'sirine gaddour',
        message: "Salut ",
        email: "syrinagaddour11@gmail.com",
        timestamp: "21/09/2022 2:57",
        image: "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png",
        PostImage: "http://links.papareact.com/f0p"
    },
    {
        key: "3",
        name: 'sirine gaddour',
        message: "Salut ",
        email: "syrinagaddour11@gmail.com",
        timestamp: "21/09/2022 2:57",
        image: "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png",
        PostImage: "https://images.ctfassets.net/hrltx12pl8hq/3j5RylRv1ZdswxcBaMi0y7/b84fa97296bd2350db6ea194c0dce7db/Music_Icon.jpg"
    },
    {
        key: "4",
        name: 'sirine gaddour',
        message: "Hello ",
        email: "syrinagaddour11@gmail.com",
        timestamp: "21/09/2022 2:57",
        image: "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png",
        PostImage: "http://links.papareact.com/f0p"
    },
    {
        key: "5",
        name: 'sirine gaddour',
        message: "Hi ",
        email: "syrinagaddour11@gmail.com",
        timestamp: "21/09/2022 2:57",
        image: "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png",
        PostImage: "https://image.shutterstock.com/image-vector/hello-diffrent-languages-vector-art-260nw-2088655750.jpg"
    },{
        key: "6",
        name: 'sirine gaddour',
        message: "Hi ",
        email: "syrinagaddour11@gmail.com",
        timestamp: "21/09/2022 2:57",
        image: "https://cdn.pixabay.com/photo/2021/02/12/07/03/icon-6007530_640.png",
        PostImage: "https://image.shutterstock.com/image-vector/hello-diffrent-languages-vector-art-260nw-2088655750.jpg"
    },
]
function Posts() {
    return (
        <div>
            {newPost.map((post) => (
                <Post key={post.key} name={post.name} message={post.message} email={post.email} timestamp={post.timestamp} image={post.image} PostImage={post.PostImage} />
            ))}

        </div>
    )
}

export default Posts
