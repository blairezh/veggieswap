import React from "react";
import './public.css'
//import 'tomato.jpg' from "../public/statc";
import axios from 'axios';


//function Listing({poster, item, item_description, is_request, is_open, date_posted, location}) {
function Listing({item, item_description, date_posted, location}) {
    return (
        <div className="listingContainer">
            <div className="listing">
                <h4 className="title">{item}</h4>
                <p>{item_description}</p>
                <p>{location} , {date_posted}</p>
                <a href="google.com">see more...</a>
                <i class="messageIcon"></i>
            </div>
        </div>
    );
}

// export default function PublicBoard() {
//     return(
//         <div name="board">
//             <div className="listings">
//                 <Listing/>
//                 <Listing/>
//                 <Listing/>
//                 <Listing/>
//                 <Listing/>
//                 <Listing/>
//             </div>
//         </div>
//     );
// }

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
                                    item = {output.item}
                                    item_description = {output.item_description}
                                    date_posted = {output.date_posted}
                                    location = {output.location}
                                    />
                                </div>
                        ))}
                </div>
            </div>
            <button href="/post">post listing</button>
            </>
        );
    }
}