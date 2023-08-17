import { useEffect, useState } from "react";

import Highlight from "../components/Highlight";
import Post from "../components/Post";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://api-rest-post-diegocandido.herokuapp.com/postagens")
            .then((res) => res.json())
            .then((json) => setPosts(json));
    }, []);

    if (!posts.length)
        return (
            <main className="pt-5 pb-20 flex flex-col gap-5 px-2 sm:pb-5 sm:gap-8 sm:px-0 sm:min-h-[calc(100vh-9.5rem)] sm:max-w-4xl sm:mx-auto"></main>
        );

    return (
        <main className="pt-5 pb-20 flex flex-col gap-5 px-2 sm:pb-5 sm:gap-8 sm:px-0 sm:min-h-[calc(100vh-9.5rem)] sm:max-w-4xl sm:mx-auto">
            <Highlight
                id={0}
                title={posts[0].title}
                description={posts[0].description}
                postDate={posts[0].postDate}
                profileName={posts[0].profileName}
                thumbImage={posts[0].thumbImage}
                thumbImageAltText={posts[0].thumbImageAltText}
            />

            <div className="flex gap-5 items-center">
                <h2 className="font-semibold text-3xl">Recentes</h2>
                <hr className="flex-1" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                {posts.map((e, i) =>
                    i === 0 ? null : (
                        <Post
                            key={i}
                            id={i}
                            title={e.title}
                            description={e.description}
                            postDate={e.postDate}
                            thumbImage={e.thumbImage}
                            thumbImageAltText={e.thumbImageAltText}
                        ></Post>
                    )
                )}
            </div>
        </main>
    );
}
