import { useContext, useEffect, useState } from "react";
import DataContextsApi from "../Contexts/ContextsApi";
import DoneCard from "./DoneCard";
import ProgressCard from "./ProgressCard";
import TodoCard from "./TodoCard";
import ReviseCard from "./Revise";

export default function ProjectContent() {
	const apiData = useContext(DataContextsApi);
	const [ProgressCount, setProgressCount] = useState(0);
	const [ToDoCount, setToDoCount] = useState(0);
	const [DoneCardCount, setDoneCardCount] = useState(0);
	const [ReviseCardCount, setReviseCardCount] = useState(0);
	const [CheckSort, setCheckSort] = useState(false);
	const [CheckSortOne, setCheckSortOne] = useState(false);
	const [CheckSortTwo, setCheckSortTwo] = useState(false);
	const [CheckSortThree, setCheckSortThree] = useState(false);
	useEffect(() => {
		const progressCounter = apiData.Data.filter(
			(e) => e.Type === "On-Progress"
		).length;
		setProgressCount(progressCounter);
	}, [apiData.Data]);
	useEffect(() => {
		const ToDoCounter = apiData.Data.filter((e) => e.Type === "to-do").length;
		setToDoCount(ToDoCounter);
	}, [apiData.Data]);
	useEffect(() => {
		const DoneCardCounter = apiData.Data.filter(
			(e) => e.Type === "DoneData"
		).length;
		setDoneCardCount(DoneCardCounter);
	}, [apiData.Data]);
	useEffect(() => {
		const ReviseCardCounter = apiData.Data.filter(
			(e) => e.Type === "Revise"
		).length;
		setReviseCardCount(ReviseCardCounter);
	}, [apiData.Data]);
	function sortOn() {
		setCheckSort(CheckSort === false ? true : false);
	}
	function sortOnOne() {
		setCheckSortOne(CheckSortOne === false ? true : false);
	}
	function sortOnTwo() {
		setCheckSortTwo(CheckSortTwo === false ? true : false);
	}
	function sortOnThree() {
		setCheckSortThree(CheckSortThree === false ? true : false);
	}
	return (
		<>
			{/* <!-- Project Content --> */}
			<div className="mx-auto max-w-7xl p-6">
				<div className="mb-6 flex items-center justify-between">
					<h2 className="text-2xl font-bold">Projectify</h2>
					<div className="flex space-x-2">
						<button
							onClick={apiData.handelToggleBtn}
							className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="mr-2"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
								<path d="M15 12h-6" />
								<path d="M12 9v6" />
							</svg>
							Add
						</button>
					</div>
				</div>

				<div className="-mx-2 mb-6 flex flex-wrap">
					{/* <!-- Todo --> */}
					<div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
						<div className="rounded-lg bg-indigo-600 p-4">
							<div className="mb-2 flex items-center justify-between">
								<h3 className="text-lg font-semibold">
									To-Do {`( ${ToDoCount} )`}
								</h3>
								<a onClick={sortOn}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M4 6l9 0" />
										<path d="M4 12l7 0" />
										<path d="M4 18l7 0" />
										<path d="M15 15l3 3l3 -3" />
										<path d="M18 6l0 12" />
									</svg>
								</a>
							</div>
							<div>
								{/* {date start} */}

								<TodoCard CheckSort={CheckSort} />
							</div>

							{/* <!-- Add more task cards here --> */}
						</div>
					</div>

					{/* <!-- On Progress --> */}
					<div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
						<div className="rounded-lg bg-yellow-500 p-4">
							<div className="mb-2 flex items-center justify-between">
								<h3 className="text-lg font-semibold">
									On Progress {`( ${ProgressCount} )`}
								</h3>
								<a onClick={sortOnOne}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M4 6l9 0" />
										<path d="M4 12l7 0" />
										<path d="M4 18l7 0" />
										<path d="M15 15l3 3l3 -3" />
										<path d="M18 6l0 12" />
									</svg>
								</a>
							</div>

							<ProgressCard
								CheckSortOne={CheckSortOne}
								ProgressCount={ProgressCount}
							/>

							{/* <!-- Add more task cards here --> */}
						</div>
					</div>

					{/* <!-- Done --> */}
					<div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
						<div className="rounded-lg bg-teal-500 p-4">
							<div className="mb-2 flex items-center justify-between">
								<h3 className="text-lg font-semibold">
									Done {`( ${DoneCardCount} )`}
								</h3>
								<a onClick={sortOnTwo}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M4 6l9 0" />
										<path d="M4 12l7 0" />
										<path d="M4 18l7 0" />
										<path d="M15 15l3 3l3 -3" />
										<path d="M18 6l0 12" />
									</svg>
								</a>
							</div>

							<DoneCard CheckSortTwo={CheckSortTwo} />

							{/* <!-- Add more task cards here --> */}
						</div>
					</div>

					{/* <!-- Revised --> */}
					<div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
						<div className="rounded-lg bg-rose-500 p-4">
							<div className="mb-2 flex items-center justify-between">
								<h3 className="text-lg font-semibold">
									Revise {`( ${ReviseCardCount} )`}
								</h3>
								<a onClick={sortOnThree}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="18"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<path d="M4 6l9 0" />
										<path d="M4 12l7 0" />
										<path d="M4 18l7 0" />
										<path d="M15 15l3 3l3 -3" />
										<path d="M18 6l0 12" />
									</svg>
								</a>
							</div>
							<ReviseCard CheckSortThree={CheckSortThree} />

							{/* <!-- Add more task cards here --> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
