"use client";

import { Search, X } from "lucide-react";
import { useDebounce } from "@/lib/hooks/use-debounce";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
	onSearch: (query: string) => void;
	placeholder?: string;
}

export function SearchBar({
	onSearch,
	placeholder = "Search posts...",
}: SearchBarProps) {
	const [query, setQuery] = useState("");

	const debouncedSearch = useDebounce((value: string) => {
		onSearch(value);
	}, 300);

	useEffect(() => {
		debouncedSearch(query);
	}, [query, debouncedSearch]);

	return (
		<div className="relative">
			<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
			<Input
				type="text"
				placeholder={placeholder}
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="pl-10 pr-10"
			/>
			{query && (
				<button
					onClick={() => {
						setQuery("");
						onSearch("");
					}}
					className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground hover:bg-muted transition-colors"
					aria-label="Clear search"
				>
					<X className="h-4 w-4" />
				</button>
			)}
		</div>
	);
}
