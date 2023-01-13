
import Icon from "./Icon";

export default function Main(props) {

    return (
        <main>
            <img src={props.imageUrl} />
            <div className="description">
                <div className="nav-element">
                    <Icon style="ubication" />
                    <h3>{props.location}</h3>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </main>
    )
}