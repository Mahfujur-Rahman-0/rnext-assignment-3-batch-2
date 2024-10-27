import { useContext } from "react";
import DataContextsApi from "../Contexts/ContextsApi";
import Card from "./Card";

export default function ProgressCard({ CheckSortOne }) {
	const apiData = useContext(DataContextsApi);
	function handelDelete(index) {
		apiData.setData(
			apiData.Data.filter((_, deleteindex) => deleteindex !== index)
		);
	}

	return (
		<>
			{apiData.Data.sort((a, b) =>
				CheckSortOne
					? new Date(a.Date) - new Date(b.Date)
					: new Date(b.Date) - new Date(a.Date)
			).map(
				(e, index) =>
					e.Type === "On-Progress" && (
						<Card
							handelEditbtn={() => apiData.handelEditOpener(index)}
							handelDeletebtn={() => handelDelete(index)}
							textColor={"text-yellow-500"}
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
