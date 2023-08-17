import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Post from "../components/Post";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [queryParameters] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!queryParameters.get("query")) return navigate("/");

        fetch("https://api-rest-post-diegocandido.herokuapp.com/postagens")
            .then((res) => res.json())
            .then((json) => setPosts(json));
    }, [queryParameters, navigate]);

    if (!posts.length)
        return (
            <main className="pt-5 pb-20 flex flex-col gap-5 px-2 sm:pb-5 sm:gap-8 sm:px-0 sm:min-h-[calc(100vh-9.5rem)] sm:max-w-4xl sm:mx-auto"></main>
        );

    return (
        <main className="pt-5 pb-20 flex flex-col gap-5 px-2 sm:pb-5 sm:gap-8 sm:px-0 sm:min-h-[calc(100vh-9.5rem)] sm:max-w-4xl sm:mx-auto">
            <div className="flex gap-5 items-center">
                <h2 className="font-semibold text-xl sm:text-3xl">Resultados para "{queryParameters.get("query")}"</h2>
                <hr className="flex-1" />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
                {posts.map((e, i) => {
                    const searchParam = queryParameters.get("query").toLowerCase();
                    const title = e.title.toLowerCase();
                    const description = e.description.toLowerCase();

                    return title.includes(searchParam) || description.includes(searchParam) ? (
                        <Post
                            key={i}
                            id={i}
                            title={e.title}
                            description={e.description}
                            postDate={e.postDate}
                            thumbImage={e.thumbImage}
                            thumbImageAltText={e.thumbImageAltText}
                        ></Post>
                    ) : null;
                })}
            </div>
        </main>
    );
}
