import Test from "@/components/test";

export default async function Component() {
	let fetched = await fetch("http://localhost:3000/user.json");

	let posts = await fetched.json();
	console.log(posts);

	return (
		<div className="first_class h-screen w-full flex flex-col justify-center items-center bg-blue-600 ">
			<h1>Show smth jakarta</h1>

			{posts?.map((val: any, index: number) => (
				<div key={index}>
					<div>{val.username}</div>
				</div>
			))}

			{/* przekazujemy do komponentu dane ogarniete z serwera */}
			<Test data={posts} />

			<button>Show Json Data</button>
		</div>
	);
}
