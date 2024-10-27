import { useContext } from "react"; //there was a use state
import DataContextsApi from "../Contexts/ContextsApi";
import Card from "./Card";

export default function TodoCard({ CheckSort }) {
	const apiData = useContext(DataContextsApi);

	function handelDelete(index) {
		apiData.setData(
			apiData.Data.filter((_, deleteindex) => deleteindex !== index)
		);
	}

	return (
		<>
			{apiData.Data.sort((a, b) =>
				CheckSort
					? new Date(a.Date) - new Date(b.Date)
					: new Date(b.Date) - new Date(a.Date)
			).map(
				(e, index) =>
					e.Type === "to-do" && (
						<Card
							handelEditbtn={() => apiData.handelEditOpener(index)}
							handelDeletebtn={() => handelDelete(index)}
							textColor={"text-indigo-500"}
							Text={e.Text}
							Title={e.Title}
							Date={e.Date}
							key={index}
						/>
					)
			)}
		</>
	);
}
