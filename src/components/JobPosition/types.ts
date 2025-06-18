export interface Position {
	id: number;
	company: string;
	logo: string;
	new: boolean;
	featured: boolean;
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: string[];
	tools: string[];
}

export interface JobPositionProps {
	position: Position;
	onFilterClick: (filter: string, isSelected: boolean) => void;
}
