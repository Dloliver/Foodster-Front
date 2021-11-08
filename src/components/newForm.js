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

  setName(event.target.value);

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
      unsoldGoods: newUnsoldGoods,
      image: newImage,
      price: newPrice,
      curbsidePickup: newCurbsidePickup,
    }).then(()=> {
      axios
        .get('http://localhost:3000/foodster')
        .then((response)=> {
          setFoods(response.data);
        })
    })
}

return (
  <section id="addfoodform" class="myForm">
  <h2 > Add Food</h2>
  <form onSubmit={handleNewFoodsterFormSubmit}>
  NAME: <input type="text" onChange={handleNewNameChange}/>
  <br/>
  LOCATION: <input type="text" onChange={handleNewLocation}/>
  <br/>
  UNSOLD GOODS: <input type="text" onChange={handleNewUnsoldGoods}/>
  <br/>
  IMAGE: <input type="text" onChange={handleNewImage}/>
  <br/>
  PRICE: <input type="text" onChange={handleNewPrice}/>
  <br/>
  CURBSIDE PICKUP: <input type="checkbox" onChange={handleNewCurbsidePickup}/>
  <br/>
  <input type="submit" value="Log New Order"/>
  </form>
  </section>
)

}



export default NewForm
