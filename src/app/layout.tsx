import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lemon } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lemon = Lemon({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
	title: "Trippy",
	description: "Trippy Movie Generator",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<h1 className={lemon.className}>
					<Navbar />
				</h1>
				<Home />
			</body>
		</html>
	);
}
