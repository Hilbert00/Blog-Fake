import { useSearchParams, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

export default function PostView() {
    const [data, setData] = useState([]);
    const [queryParameters] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (!queryParameters.get("id")) return navigate("/");

        fetch(`https://api-rest-post-diegocandido.herokuapp.com/postagem/${queryParameters.get("id")}`)
            .then((res) => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then((json) => setData(json))
            .catch(() => navigate("/"));
    }, [queryParameters, navigate]);

    return (
        <main className="pt-5 pb-20 flex flex-col gap-5 px-2 sm:pb-5 sm:gap-8 sm:px-0 sm:min-h-[calc(100vh-9.5rem)] sm:max-w-4xl sm:mx-auto">
            <div className="flex gap-5 flex-col sm:flex-row">
                <h1 className="font-bold text-3xl flex-1 sm:text-4xl">{data.title}</h1>

                <div className="flex gap-3 items-center justify-end flex-row-reverse sm:justify-start sm:flex-row sm:self-start">
                    <div className="flex flex-col justify-center sm:text-right">
                        <span>{data.profileName}</span>
                        <span className="font-extralight">{data.postDate}</span>
                    </div>
                    <div className="rounded-full overflow-hidden h-14 w-14">
                        <img src={data.profileThumbImage} alt="Usuário" />
                    </div>
                </div>
            </div>

            <div className="flex gap-5 flex-col-reverse sm:flex-row">
                <p className="flex-1 text-xl">{data.description}</p>

                <div className="max-h-80 rounded-xl flex items-center justify-center overflow-hidden sm:w-2/5">
                    <img
                        src={data.thumbImage}
                        alt={data.thumbImageAltText}
                        className="shrink-0 min-h-full min-w-full"
                    />
                </div>
            </div>
        </main>
    );
}
