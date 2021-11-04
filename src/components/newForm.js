import {useState} from 'react'
import axios from 'axios';

const NewForm = (props) => {
const {setFoods} = props

const [newName, setName] = useState('')
const [newLocation, setLocation] = useState('')
const [newUnsoldGoods, setUnsoldGoods] = useState('')
const [newImage, setImage] = useState('')
const [newPrice, setPrice] = useState('')
const [newCurbsidePickup, setCurbsidePickup] = useState(false)

const handleNewNameChange = (event) => {
  setNewName(event.target.value);
}
const handleNewLocation = (event) => {
  setLocation(event.target.value)
}
const handleNewUnsoldGoods = (event) => {
  setUnsoldGoods(event.target.value)
}
const handleNewImage = (event) => {
  setImage(event.target.value)
}
const handleNewPrice = (event) => {
  setPrice(event.target.value)
}
const handleNewCurbsidePickup = (event) => {
  setCurbsidePickup(event.target.checked)
}

const handleNewFoodsterFormSubmit = (event) => {
  event.preventDefault();

  axios.post(
    'http://localhost:3000/foodster',
    {
      name: newName,
      location: newLocation,
      unsoldgoods: newUnsoldGoods,
      image: newImage,
      price: newPrice,
      curbsidepickup: newCurbsidePickup,
    }).then(()=> {
      axios
        .get('http://localhost:3000/foodster')
        .then((response)=> {
          setFoods(response.data);
        })
    })
}

return (
  <section>
  <h2> Add Food</h2>
  <form onSubmit={handleNewFoodsterFormSubmit}>
  name: <input type="text" onChange={handleNewNameChange}/>
  <br/>
  location: <input type="text" onChange={handleNewLocation}/>
  <br/>
  Unsold Goods: <input type="text" onChange={handleNewUnsoldGoods}/>
  <br/>
  image: <input type="text" onChange={handleNewImage}/>
  <br/>
  Price: <input type="text" onChange={handleNewPrice}/>
  <br/>
  Curbside Pickup: <input type="checkbox" onChange={handleNewCurbsidePickup}/>
  <br/>
  <input type="submit" value="Log New Order"/>
  </section>
)

}



export default NewForm
