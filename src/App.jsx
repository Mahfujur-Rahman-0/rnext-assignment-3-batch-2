import { useState } from "react";
import "./App.css";
import MainContent from "./Components/MainContent";
import SideBar from "./Components/SideBar";
import DataContextsApi from "./Contexts/ContextsApi";
import ModalForm from "./Components/ModalForm";

function App() {
	const apiData = [
		{
			Title: "Content Writer ",
			Text: "Prepare proctor for client meeting",
			Date: "2025-02-20",
			Type: "to-do",
		},
		{
			Title: "Develop API",
			Text: "Prepare proctor for client meeting",
			Date: "2024-10-30",
			Type: "to-do",
		},
		{
			Title: "Deploy to VPS",
			Text: "Prepare proctor for client meeting",
			Date: "2026-10-10",
			Type: "to-do",
		},
		{
			Title: "Content Writer ",
			Text: "Prepare proctor for client meeting",
			Date: "2024-10-30",
			Type: "On-Progress",
		},

		{
			Title: "Develop API ",
			Text: "Prepare proctor for client meeting",
			Date: "2024-10-30",
			Type: "DoneData",
		},
		{
			Title: "Content Writer ",
			Text: "Prepare proctor for client meeting",
			Date: "2024-10-30",
			Type: "DoneData",
		},
		{
			Title: "Content Writer ",
			Text: "Prepare proctor for client meeting",
			Date: "2024-10-30",
			Type: "Revise",
		},
	];
	const [Data, setData] = useState(apiData);
	const [toggol, setToggol] = useState(true);
	const [TitleForm, setTitleForm] = useState("");
	const [TextForm, setTextForm] = useState("");
	const [date, setDate] = useState("");
	const [Type, setType] = useState("to-do");
	const [edit, setEdit] = useState({ CheckNum: true, indexNum: 0 });
	//Editor functions
	const handelToggleBtn = () => {
		setToggol(toggol === true ? false : true);
		if (edit.CheckNum === false) {
			setEdit((prevEdit) => ({
				...prevEdit,
				CheckNum: true,
			}));
		}
	};

	function handelEditOpener(index) {
		//exesting Data start

		const existingData = Data[index];

		setTitleForm(existingData.Title);
		setTextForm(existingData.Text);
		setDate(existingData.Date);
		setType(existingData.Type);

		//esesting data end
		setToggol(toggol === true ? false : true);
		setEdit({
			CheckNum: false,
			indexNum: index,
		});
	}
	function handelEdit() {
		//reset the form start
		setData([
			...Data,
			{
				Title: TitleForm,
				Text: TextForm,
				Date: date,
				Type: Type,
			},
		]);
		setTitleForm("");
		setTextForm("");
		setDate("");
		setType("to-do");
		handelToggleBtn();
		//reset the form end
		const updatedData = {
			Title: TitleForm,
			Text: TextForm,
			Date: date,
			Type: Type,
		};
		if (edit.CheckNum === false) {
			setEdit((prevEdit) => ({
				...prevEdit,
				CheckNum: true,
			}));

			console.log(edit.CheckNum);
		}
		setData(
			Data.map((item, i) =>
				i === edit.indexNum ? { ...item, ...updatedData } : item
			)
		);
	}

	return (
		<DataContextsApi.Provider
			value={{
				edit,
				setEdit,
				handelEdit,
				handelEditOpener,
				Data,
				setData,
				handelToggleBtn,
				setTitleForm,
				TitleForm,
				TextForm,
				date,
				setTextForm,
				setDate,
				Type,
				setType,
			}}
		>
			<div className={`${toggol ? "block" : "hidden"}`}>
				<div className="flex h-screen">
					{/* <!-- Sidebar --> */}
					<SideBar />
					{/* <!-- Main Content --> */}
					<MainContent />
				</div>
			</div>
			<div className={`${toggol ? "hidden" : "block"}`}>
				<ModalForm />
			</div>
		</DataContextsApi.Provider>
	);
}

export default App;
