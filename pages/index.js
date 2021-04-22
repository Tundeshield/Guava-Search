import { useRef } from "react";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import Avatar from "../components/Avatar";
import {
	MicrophoneIcon,
	SearchIcon,
	ViewGridIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Home() {
	const searchInputRef = useRef(null);
	const router = useRouter();
	const search = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;

		if (!term) return;
		router.push(`/search?term=${term}`);
	};
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Head>
				<title>Guava Search </title>
				<link rel="icon" href="/favico.ico" />
			</Head>

			<header className="flex w-full p-5 justify-between text-sm text-gray-700">
				{/*Left Header*/}
				<div className="flex space-x-4 items-center">
					<p className="link">About</p>
					<p className="link">Store</p>
				</div>

				{/*Right Header*/}
				<div className="flex space-x-4 items-center">
					<p className="link">Gmail</p>
					<p className="link">Images</p>

					<ViewGridIcon className="w-10 h-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
					<Avatar url="https://pbs.twimg.com/profile_images/1343628888132513794/q7v96H4v_400x400.jpg" />
				</div>
			</header>

			<form className="flex flex-col items-center mt-40 flex-grow w-4/5">
				<Image src="/guava.png" height={150} width={250} />
				<div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full  border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
					<SearchIcon className="h-5 mr-3 text-gray-500" />
					<input
						ref={searchInputRef}
						type="text"
						className="focus:outline-none flex-grow"
					/>
					<MicrophoneIcon className="h-5 ml-3 text-gray-500" />
				</div>
				<div className="flex flex-column w-1/2 space-y-2 justify-center mt-4 sm:space-y-0 sm:flex-row sm:space-x-4">
					<button onClick={search} className="btn">
						Guava Search
					</button>
					<button onClick={search} className="btn">
						Lucky Seeds
					</button>
				</div>
			</form>
			<Footer />
		</div>
	);
}
