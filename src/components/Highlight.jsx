import { Link } from "react-router-dom";

export default function Highlight(props) {
    return (
        <Link to={"/post?id=" + props.id} className="w-full flex rounded-xl cursor-pointer sm:h-80">
            <div className="w-2/5 rounded-bl-xl rounded-tl-xl flex items-center justify-center overflow-hidden">
                <img src={props.thumbImage} alt={props.thumbImageAltText} className="shrink-0 min-h-full min-w-full" />
            </div>
            <div className="p-2 rounded-br-xl rounded-tr-xl flex gap-3 flex-col justify-between text-white bg-stone-900 flex-1 sm:p-4">
                <h1 className="font-bold text-xl line-clamp-2 sm:text-3xl sm:line-clamp-3">{props.title}</h1>
                <p className="line-clamp-3 sm:text-xl">{props.description}</p>
                <span className="text-right font-extralight text-xs sm:text-base">
                    {props.profileName} - {props.postDate}
                </span>
            </div>
        </Link>
    );
}
