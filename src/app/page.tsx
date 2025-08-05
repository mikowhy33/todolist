"use client";

import { useState, useEffect } from "react";
import { start } from "repl";

export default function Home() {
	const [startstate, setStartState] = useState("");
	const [todos, setTodos] = useState<string[]>([]);

	const [active, setActive] = useState(99);
	const [edited, setEdited] = useState("");

	useEffect(() => {
		console.log("SOMETHING CHANGED");
		console.log(todos);
	}, [startstate, todos]);

	return (
		<div className="h-screen w-full flex flex-col justify-center items-center gap-4">
			<h1 className="">To do List</h1>

			<div>
				<input
					type="text"
					className="bg-amber-100 text-black mr-[10px]"
					onChange={(e) => setStartState(e.target.value)}
				/>

				<button
					className="bg-amber-400 h-[20px] w-[40px]"
					onClick={() => {
						setTodos([...todos, startstate]);
					}}>
					Add
				</button>
			</div>

			<p>Task List</p>

			{/* TURN ON AI LATER   */}
			{/* JS IN {}! */}

			<ul className="w-[25%]">
				{todos.map((val, index) => (
					<li
						key={index}
						className=" border border-solid border-white p-2 flex justify-between w-auto m-[10px] flex-wrap  ">
						<div className="right">
							<input type="checkbox" className="mr-[10px]" />
							{active === index ? (
								<input
									type="text"
									value={edited}
									onChange={(e) => setEdited(e.target.value)}
								/>
							) : (
								val
							)}
						</div>

						<div className="left mr-[10px] ">
							<button
								className="text-red-500 mr-[10px]"
								onClick={() => {
									// delete the todo item on that index

									let newTodos = [...todos];

									newTodos.splice(index, 1);

									setTodos(newTodos);
								}}>
								Delete
							</button>

							<button
								className="text-red-500"
								onClick={() => {
									if (active === index) {
										let newTodos = [...todos];

										newTodos[index] = edited;

										setTodos(newTodos);
										setActive(NaN);
									} else {
										setEdited(val);
										setActive(index);
									}

									console.log(edited);
								}}>
								Edit
							</button>
						</div>
					</li>
				))}

				{/* <li className=" border border-solid border-white p-2 flex justify-between w-auto m-[10px] flex-wrap  ">
					<div className="right">
						<input type="checkbox" className="mr-[10px]" />
						wash dishes
					</div>

					<div className="left mr-[10px] ">
						<button className="text-red-500 mr-[10px]">Delete</button>

						<button className="text-red-500">Edit</button>
					</div>
				</li>

				<li className=" border border-solid border-white p-2 flex justify-between w-auto m-[10px]  flex-wrap ">
					<div className="right">
						<input type="checkbox" className="mr-[10px]" />
						edit resume
					</div>

					<div className="left mr-[10px] ">
						<button className="text-red-500 mr-[10px]">Delete</button>

						<button className="text-red-500">Edit</button>
					</div>
				</li>

				<li className=" border border-solid border-white p-2 flex justify-between w-auto  m-[10px]  flex-wrap ">
					<div className="right">
						<input type="checkbox" className="mr-[10px]" />
						finish Codex course
					</div>

					<div className="left mr-[10px] ">
						<button className="text-red-500 mr-[10px]">Delete</button>

						<button className="text-red-500">Edit</button>
					</div>
				</li> */}
			</ul>

			<div className="border border-solid border-blue-500 w-[30%]"></div>

			<p> Completed:1 | Uncompleted:2</p>
		</div>
	);
}
