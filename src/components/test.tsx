"use client";
import { useState, useEffect } from "react";
type TestProps = {
	data: any[]; // Replace 'any' with a more specific type if possible
};

// dostalismy dane z serwera i nimi manipulujemy
export default function Test({ data }: TestProps) {
	const [posts, setPosts] = useState([...data]);
	const [index, setIndex] = useState(0);
	return (
		<div>
			<button onClick={() => setIndex(index - 1)}>Prev</button>
			<h1>{posts[index]?.username}</h1>
			<button onClick={() => setIndex(index + 1)}>Next</button>
		</div>
	);
}
