"use client";

import { useState, useEffect } from "react";
import { start } from "repl";


console.log("vzz");

export default function Home() {
	const [startstate, setStartState] = useState("");
	const [todos, setTodos] = useState<string[]>([]);

	const [active, setActive] = useState(99);
	const [edited, setEdited] = useState("");


	const [completed, setCompleted] = useState(0);


	useEffect(() => {
		console.log("SOMETHING CHANGED");
		console.log(todos);
	}, [startstate, todos]);

	return (
		<div className="h-screen w-full flex flex-col justify-center items-center gap-4 bg-green-900">
			<h1 className="">To do List</h1>

			<div>
				<input
					type="text"
					className="bg-amber-100 text-black mr-[10px]"
					// zmienia startstate na to co jest w inpucie
					// za kazdym razem re-ender
					onChange={(e) => setStartState(e.target.value)}
				/>

				<button
					className="bg-amber-400 h-[20px] w-[40px]"
					// na przycisk bierze liste i dodaje do niej zmieniony startstate
					onClick={() => {
						setTodos([...todos, startstate]);
					}}>
					Add
				</button>
			</div>

			<p>Task List</p>

			{/* TURN ON AI LATER   */}
			{/* JS IN {}! */}

			<ul className="w-[60%]">
				{/* val kazda wartosc w tablicy, index to kazdy index tej tablicy */}
				{/* renderuje kazdy element z osobna! */}
				{todos.map((val, index) => (
					<li
						key={index}
						className=" border border-solid border-white p-2 flex justify-between w-auto m-[10px] flex-wrap  ">
						<div className="right">
							<input
								type="checkbox"
								className="mr-[10px]"
									onChange={(e) => {
								if (e.target.checked) {
									// jak nacisniemy to stan 0+1 i zapamietuje completed jako 1
									// natomiast wydrukuje stan poprzedni czyli w konsoli pojawi sie 0
									
									setCompleted(completed + 1);
									console.log(completed);
								} else {
									// jak drugi raz to juz sobie odejmujemy to 1 i jest 0 czyli wraca 
									// zmieniamy stan ale reender stanie sie jak zakonczy sie onchange czyli tutaj pyknie 1
									setCompleted(completed - 1);
									console.log(completed);
								}
								}}
								
							/>

							{/* JESLI KLIKNELISMY 1 RAZ NASTEPUJE RE-ENDER Z WARTOSCIA ACTIVE KTORA JEST ROWNA INDEXOWI I WTEDY DAJE NAM INPUTA */}

							{active === index ? (
								<input
									type="text"
									value={edited}
									className="border border-solid border-b-cyan-800"
									// gdy uz pisze w polu edycji, edited zmienia sie na biezaco
									onChange={(e) => setEdited(e.target.value)}
								/>
							) : (
								val + " bzz"
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
									// jesli klikamy drugi raz w ten sam element
									// USTAWIENIE WARTOSCI I WYJSCIE Z TRYBU EDYCJI
									if (active === index) {
										// tworzy kopie todos
										let newTodos = [...todos];

										// podmieniamy element na edited czyli nowy tekst
										newTodos[index] = edited;

										// aktualizujemy stan naszych todosow
										setTodos(newTodos);

										{
											console.log(todos);
										}

										//konczy tryb edycji
										setActive(NaN);
									} else {
										// KLIKNIECIE 1 RAZ POWODUJE RE-ENDER WTEDY RENDERUJE NAM Z INPUTEM KTORY MOZEMY SOBIE ZMIENIC!
										// WEJSCIE DO TRYBU EDYCJI

										// jesli nie edytujemy jeszcze zadania to ustawiamy edited na tekst zadania
										setEdited(val);
										// zapamietujemy ktory element jest w trybie edycji
										setActive(index);
									}

									console.log(edited);
								}}>
								Edit
							</button>
						</div>
					</li>
				))}
			</ul>

			<div className="border border-solid border-blue-500 w-[30%]"></div>

			<p>
				{" "}
				Completed:{completed} | Uncompleted:{todos.length - completed}
			</p>
		</div>
	);
}



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