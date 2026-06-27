import {useState} from "react";
import "./Modal.css"
import MarkLocation from "./MarkLocation";

export default function Modal({postalOrder}) {

    const [modal, setModal] = useState(false);

    function toggle() {
        setModal(!modal)
    }

    return (
        <>
            <button className = "open-modal-button" onClick = {toggle}>
                {postalOrder.sender}
            </button>

            {modal && (
                <div onClick = {toggle} className = "modal-overlay">
                    <div onClick = {(e) => e.stopPropagation()} className = "window">
                        <div  className = "modal-map">
                            <MarkLocation key = {postalOrder.id} lat = {postalOrder.location_coordinate_latitude} long = {postalOrder.location_coordinate_longitude}/>
                        </div>
                        <div className = "information">
                            <p>Sender: {postalOrder.sender}</p>
                            <p>Parcel ID: {postalOrder.parcel_id}</p>
                            <p>Status: {postalOrder.status}</p>
                            <p>Estimated time of arrival: {postalOrder.eta.split("T")[0]}</p>
                            <p>Location: {postalOrder.location_name}</p>
                            <p>Last updated: {postalOrder.last_updated.split("T")[0]}</p>
                            <button className = "modal-close-button" onClick = {toggle}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}