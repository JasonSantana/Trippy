"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import { Lemon } from "next/font/google";
import "../globals.css";

const Navbar = () => {
	const [input, setInput] = useState("");
	const router = useRouter();

	const searchMovie = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`?movie=${input}`);
		setInput("");
	};
	return (
		<div className="bg-primary py-4 px-4 md:px-0 rounded">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/">
					<h1 className="text-[30px] font-medium">Trippy</h1>
				</Link>

				<form onSubmit={searchMovie}>
					<div className="space-x-4 ">
						<input
							className="bg-secondary px-4 py-2 outline-none placeholder:text-textColor rounded
							"
							value={input}
							placeholder="Search Movie..."
							onChange={(e) => setInput(e.target.value)}
						></input>
						<button
							type="submit"
							className="bg-secondary text-textColor py-2 px-4 hover:bg-textColor hover:text-black rounded"
						>
							Search
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Navbar;
