import "./SearchBar.scss";

import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

export default function SearchBar({setResults}) {
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
		<div className="input-wrapper">
			<FaSearch id="search-icon" />
			<input
				placeholder="Search for a washroom"
				value={input}
				onChange={(e) => handleChange(e.target.value)}></input>
		</div>
	);
}
