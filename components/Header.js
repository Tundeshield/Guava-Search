import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "../components/HeaderOptions";

function Header() {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;
		if (!term) {
			return;
		}
		router.push(`/search?term=${term}`);
	};
	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center">
				<Image
					src="/gua.png"
					height={70}
					width={170}
					className="cursor-pointer"
					onClick={() => router.push("/")}
				/>
				<form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
					<input
						type="text"
						ref={searchInputRef}
						className="flex-grow w-full focus:outline-none"
					/>
					<XIcon
						className="h-7 text-gray-500 cusror-pointer transition duration-100 transform hover:scale-125
                sm:mr-3"
						onClick={() => (searchInputRef.current.value = "")}
					/>
					<MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text--blue-500 border-l2pl-4 border-gray-300" />
					<SearchIcon className="text-blue-500 h-6 hidden sm:inline-flex " />
					<button hidden type="submit" onClick={search}>
						Search
					</button>
				</form>
				<Avatar
					url="https://pbs.twimg.com/profile_images/1343628888132513794/q7v96H4v_400x400.jpg"
					className="ml-auto"
				/>
			</div>
			{/*HeaderOptions*/}
			<HeaderOptions />
		</header>
	);
}

export default Header;
