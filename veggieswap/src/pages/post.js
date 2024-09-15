import './post.css'
import {useState} from 'react'
import axios from 'axios'

export default function Post() {
    const[post, setPost] = useState({
        name:'',
        item:'',
        item_description:'',
        location:''
    })

    const handleInput = (event) => {
        setPost({...post, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(post)
        axios.post('http://localhost:8000/api/', {post})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }

    return(
        <div className="card">
            <div>
            <form className="post-form" onSubmit={handleSubmit}>
                <label for="item-input">item</label>
                <input type="text" 
                    name="item-input"
                    onChange={handleInput}
                    placeholder="ex. tomatoes">
                </input> <br/>
                <label>item description</label><br/>
                <textarea 
                    onChange={handleInput}
                    placeholder="ex. i have 200000 tomatoes up for grabs"/><br/>
                <label>email</label>
                <input 
                    onChange={handleInput}
                    type="text" placeholder="ex. johndoe@gmail.com"></input> <br/>
                <label>location</label>
                <input 
                    onChange={handleInput}
                    type="text" placeholder="ex. blacksburg"></input><br/>
                <input type="submit"/>

            </form>
            </div>
        </div>
    );
}

/*const [item, item_desc, email, location] = useState("");

    function handleChange = event => {
        this.setState({ 
            item: event.target.value,
            item_desc: event.target.value,
        });
    }

    const handleSubmit = (event) => {
        axios.post('http://localhost:8000/api/', {
            item: this.item, 
            item_desc: this.desc, 
            date_posted: this.date_posted, 
            location: this.location,
          })
          .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
          });
    }*/