import React from "react";
import './public.css'
//import 'tomato.jpg' from "../public/statc";
import axios from 'axios';


//function Listing({poster, item, item_description, is_request, is_open, date_posted, location}) {
function Listing({user, item, item_description, date_posted, location}) {
    return (
        <div className="listingContainer">
            <div className="listing">
                <h4 className="title">{item}</h4>
                <p>{item_description}</p>
                <p>Location: {location}</p>
                <p>Contact {user} if you'd like to start bartering!</p>
                <i class="messageIcon"></i>
            </div>
        </div>
    );
}

export default class PublicBooard extends React.Component {
    state = {deails: [], }
    componentDidMount() {
        let data;
        axios.get('http://localhost:8000/api/')
            .then(res => {
                data = res.data;
                this.setState({details:data});
            })
            .catch(err=>{})
    }

    render() {
        return(
            <>
            <div name="board">
                <div className="listings">
                        {this.state.details?.map(
                            (output, id) => (
                                <div key={id}>
                                    <Listing
                                    user = {output.name}
                                    item = {output.item}
                                    item_description = {output.item_description}
                                    location = {output.location}
                                    />
                                </div>
                        ))}
                </div>
            </div>
            </>
        );
    }
}