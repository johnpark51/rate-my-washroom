import LocationCard from "../LocationCard/LocationCard";
import "./LocationList.scss"

function LocationList({locations}) {
    return (
        <div>
            {locations.map((location) => {
					return (
						<LocationCard location={location}/>
					);
				})}
        </div>
    )
}
export default LocationList;