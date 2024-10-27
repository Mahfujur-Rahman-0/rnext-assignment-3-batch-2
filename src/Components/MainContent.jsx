import ProjectContent from "./ProjectContent";
import TopBar from "./TopBar";

export default function MainContent() {
	return (
		<>
			<main className="flex-1 overflow-y-auto overflow-x-hidden">
				<TopBar />
				<ProjectContent />
			</main>
		</>
	);
}
