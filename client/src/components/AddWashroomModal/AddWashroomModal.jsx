import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";

const AddWashroomModal = ({
	isOpen,
	closeModal,
	locationId,
	addNewWashroom,
}) => {
	const [newWashroom, setNewWashroom] = useState({
		id: null,
		address: "",
		type: "Public restroom",
		location: "",
		hours: "",
		public_access: false,
		wheelchair_accessible: false,
		cleanliness: 1,
		location_id: locationId,
		likes: 0,
		gender_neutral: false,
		family_friendly: false,
		lat: "",
		lng: "",
	});

	const handleInputChange = (event) => {
		const { name, value, type, checked } = event.target;
		setNewWashroom((prevState) => ({
			...prevState,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = async () => {
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_URL}/api/washrooms`,
				newWashroom
			);
			addNewWashroom(response.data); // Assuming addNewWashroom function updates state with the new washroom
			closeModal();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={closeModal}
			contentLabel="Add Washroom Modal"
			className="modal"
            ariaHideApp={false}
			overlayClassName="modal-overlay">
			<h2>Add New Washroom</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Address:
					<input
						type="text"
						name="address"
						value={newWashroom.address}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Location:
					<input
						type="text"
						name="location"
						value={newWashroom.location}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Hours:
					<input
						type="text"
						name="hours"
						value={newWashroom.hours}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Public Access:
					<input
						type="checkbox"
						name="public_access"
						checked={newWashroom.public_access}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Wheelchair Accessible:
					<input
						type="checkbox"
						name="wheelchair_accessible"
						checked={newWashroom.wheelchair_accessible}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Gender Neutral:
					<input
						type="checkbox"
						name="gender_neutral"
						checked={newWashroom.gender_neutral}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Family Friendly:
					<input
						type="checkbox"
						name="family_friendly"
						checked={newWashroom.family_friendly}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Latitude:
					<input
						type="text"
						name="lat"
						value={newWashroom.lat}
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Longitude:
					<input
						type="text"
						name="lng"
						value={newWashroom.lng}
						onChange={handleInputChange}
					/>
				</label>
				<button type="submit">Add Washroom</button>
			</form>
		</Modal>
	);
};

export default AddWashroomModal;
