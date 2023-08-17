import { Link } from "react-router-dom";

export default function Post(props) {
    return (
        <Link to={"/post?id=" + props.id} className="h-48 flex rounded-xl border-2 overflow-hidden cursor-pointer sm:h-52">
            <div className="p-2 flex flex-col justify-between flex-1 sm:p-4">
                <h1 className="font-bold text-xl line-clamp-2">{props.title}</h1>
                <span className="font-extralight">{props.postDate}</span>
                <p className="line-clamp-3">{props.description}</p>
            </div>
            <div className="w-2/5 flex items-center justify-center overflow-hidden">
                <img src={props.thumbImage} alt={props.thumbImageAltText} className="shrink-0 min-h-full min-w-full" />
            </div>
        </Link>
    );
}
