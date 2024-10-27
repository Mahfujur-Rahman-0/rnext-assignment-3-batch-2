import { useContext } from "react";
import DataContextsApi from "../Contexts/ContextsApi";

export default function ModalForm() {
	const apiData = useContext(DataContextsApi);

	function handelSubmit() {
		if (apiData.TitleForm.length === 0) {
			alert("Submit Task Name!!");
		} else if (apiData.TextForm.length === 0) {
			alert("Submit Description !!");
		} else if (apiData.date.length === 0) {
			alert("Submit Date !!");
		} else {
			apiData.setData([
				...apiData.Data,
				{
					Title: apiData.TitleForm,
					Text: apiData.TextForm,
					Date: apiData.date,
					Type: apiData.Type,
				},
			]);
			apiData.setTitleForm("");
			apiData.setTextForm("");
			apiData.setDate("");
			apiData.setType("to-do");
			apiData.handelToggleBtn();
		}
	}

	return (
		<>
			<div className="flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white">
				<div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
					<div className="p-6">
						<h2 className="mb-6 text-2xl font-bold text-green-400">
							Create Task
						</h2>
						<form onSubmit={(e) => e.preventDefault()}>
							<div className="mb-4">
								<label
									htmlFor="taskName"
									className="mb-1 block text-sm font-medium text-gray-300"
								>
									Task Name
								</label>
								<input
									value={apiData.TitleForm}
									onChange={(e) => apiData.setTitleForm(e.target.value)}
									type="text"
									id="taskName"
									name="taskName"
									required
									className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
								/>
							</div>
							<div className="mb-4">
								<label
									htmlFor="description"
									className="mb-1 block text-sm font-medium text-gray-300"
								>
									Description
								</label>
								<textarea
									value={apiData.TextForm}
									onChange={(e) => apiData.setTextForm(e.target.value)}
									id="description"
									name="description"
									rows="3"
									className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
								></textarea>
							</div>
							<div className="mb-4">
								<label
									htmlFor="dueDate"
									className="mb-1 block text-sm font-medium text-gray-300"
								>
									Due Date
								</label>

								<input
									value={apiData.date}
									onChange={(e) => apiData.setDate(e.target.value)}
									type="date"
									id="dueDate"
									name="dueDate"
									className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
								/>
							</div>

							<div className="mb-4">
								<label
									htmlFor="category"
									className="mb-1 block text-sm font-medium text-gray-300"
								>
									Category
								</label>
								<select
									id="category"
									value={apiData.Type}
									onChange={(e) => apiData.setType(e.target.value)}
									name="category"
									className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
								>
									<option value="to-do">To-Do</option>
									<option value="On-Progress">On Progress</option>
									<option value="DoneData">Done</option>
									<option value="Revise">Revised</option>
								</select>
							</div>

							<div className="flex justify-end space-x-3">
								<button
									onClick={apiData.handelToggleBtn}
									type="button"
									className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									Cancel
								</button>
								<button
									onClick={
										apiData.edit.CheckNum === true
											? handelSubmit
											: apiData.handelEdit
									}
									type="submit"
									className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
								>
									Create Task
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}
