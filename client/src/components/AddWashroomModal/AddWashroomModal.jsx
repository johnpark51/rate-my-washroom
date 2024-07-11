import { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./AddWashroomModal.scss";

const AddWashroomModal = ({
	isOpen,
	closeModal,
	locationId,
	addNewWashroom,
}) => {
	const [newWashroom, setNewWashroom] = useState({
		id: null,
		address: "",
		type: "",
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
			<form onSubmit={handleSubmit} className={`modal__form ${isOpen ? 'slide-up-enter' : 'slide-up-leave'}`}>
				<h2>Add a New Washroom</h2>
				<div className="modal__left">
					<div className="modal__label-input">
						<label className="modal__label">Address:</label>
						<input
                            placeholder="ex: 65 Front St W, Toronto, ON"
							className="modal__input"
							type="text"
							name="address"
							value={newWashroom.address}
							onChange={handleInputChange}
						/>
					</div>
					<div className="modal__label-input">
						<label className="modal__label">Location:</label>
						<input
                            placeholder="ex: South Side entrance to York GO Station"
							className="modal__input"
							type="text"
							name="location"
							value={newWashroom.location}
							onChange={handleInputChange}
						/>
					</div>
					<div className="modal__label-input">
						<label className="modal__label">Type:</label>
						<input
                            placeholder="ex: Public restroom"
							className="modal__input"
							type="text"
							name="type"
							value={newWashroom.type}
							onChange={handleInputChange}
						/>
					</div>
					<div className="modal__label-input">
						<label className="modal__label">Hours:</label>
						<input
                            placeholder="ex: 8am - 5pm"
							className="modal__input"
							type="text"
							name="hours"
							value={newWashroom.hours}
							onChange={handleInputChange}
						/>
					</div>
					<div className="modal__label-input">
						<label className="modal__label">Latitude:</label>
						<input
                            placeholder="43.646830"
							className="modal__input"
							type="text"
							name="lat"
							value={newWashroom.lat}
							onChange={handleInputChange}
						/>
					</div>
					<div className="modal__label-input">
						<label className="modal__label">Longitude:</label>
						<input
                            placeholder="-79.378520"
							className="modal__input"
							type="text"
							name="lng"
							value={newWashroom.lng}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="modal__booleans">
					<div className="modal__label-input">
						<label className="modal__label">Public Access:</label>
						<input
                            placeholder="Please input correct value"
							// className="modal__input"
							type="checkbox"
							name="public_access"
							checked={newWashroom.public_access}
							onChange={handleInputChange}
						/>
					</div>
					<div className="modal__label-input">
						<label className="modal__label">Wheelchair Accessible:</label>
						<input
                            placeholder="Please input correct value"
							// className="modal__input"
							type="checkbox"
							name="wheelchair_accessible"
							checked={newWashroom.wheelchair_accessible}
							onChange={handleInputChange}
						/>
					</div>
					<div className="modal__label-input">
						<label className="modal__label">Gender Neutral:</label>
						<input
                            placeholder="Please input correct value"
							// className="modal__input"
							type="checkbox"
							name="gender_neutral"
							checked={newWashroom.gender_neutral}
							onChange={handleInputChange}
						/>
					</div>
					<div className="modal__label-input">
						<label className="modal__label">Family Friendly:</label>
						<input
                            placeholder="Please input correct value"
							// className="modal__input"
							type="checkbox"
							name="family_friendly"
							checked={newWashroom.family_friendly}
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="modal__buttons">
					<button
						className="button modal__button"
						onClick={() => {
							closeModal();
						}}>
						Cancel
					</button>
					<button className="button modal__button" type="submit">
						Add Washroom
					</button>
				</div>
			</form>
		</Modal>
	);
};

export default AddWashroomModal;
