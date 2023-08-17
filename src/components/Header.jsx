import { Link } from "react-router-dom";
import { BiBell, BiSolidBell } from "react-icons/bi";
import { useState } from "react";

export default function Header() {
    const [bell, setBell] = useState(false);

    return (
        <nav className="w-full sticky top-0 bg-red-600 p-2 sm:p-0 sm:h-24">
            <ul className="flex items-center justify-between h-[inherit] gap-3 sm:gap-0 sm:max-w-4xl sm:mx-auto">
                <li className="text-3xl text-white flex items-center sm:w-1/4">
                    <button onClick={() => setBell(!bell)}>{bell ? <BiSolidBell /> : <BiBell />}</button>
                </li>
                <li className="text-center font-bold text-3xl text-white sm:text-5xl sm:w-1/4">
                    <Link to="/">Blogui</Link>
                </li>
                <li className="sm:w-1/4">
                    <form action="/search">
                        <input
                            type="text"
                            name="query"
                            placeholder="Pesquise aqui..."
                            className="w-full p-1 rounded-md"
                        />
                    </form>
                </li>
            </ul>
        </nav>
    );
}
