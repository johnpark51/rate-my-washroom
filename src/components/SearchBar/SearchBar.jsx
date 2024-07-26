/* STYLES */
import "./SearchBar.scss";

/* FUNCTIONALITY */
import { useState } from "react";
import axios from "axios";

/* ICONS */
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ setResults }) {
	const [input, setInput] = useState("");
	const baseURL = import.meta.env.VITE_API_URL;

	const getWashrooms = async (value) => {
		try {
			const response = await axios.get(`${baseURL}/api/washrooms`);
			const results = response.data.filter((washroom) => {
				return (
					value &&
					washroom &&
					washroom.address &&
					washroom.address.toLowerCase().includes(value)
				);
			});
			setResults(results);
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (value) => {
		setInput(value);
		getWashrooms(value);
	};

	return (
		<section className="input-wrapper">
			<div className="search-icon">
				<FaSearch />
			</div>
			<input
				className="input-search"
				placeholder="Search for a washroom address"
				value={input}
				onChange={(e) => handleChange(e.target.value)}
			/>
		</section>
	);
}
