import "./LocationCard.scss"

function LocationCard({location}) {
    return (
        <div>
            <h1>{location.name}</h1>
        </div>
    )
}
export default LocationCard;