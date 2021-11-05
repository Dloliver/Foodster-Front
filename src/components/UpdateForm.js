import axios from 'axios';
import {useState} from 'react';

const UpdateForm = props => {
  const {food, setFoods} = props;
  const [newName, setName] = useState('');
  const [newLocation, setLocation] = useState('');
  const [newUnsoldGoods, setUnsoldGoods] = useState('');
  const [newImage, setImage] = useState('');
  const [newPrice, setPrice] = useState('');
  const [newCurbsidePickup, setCurbsidePickup] = useState(false);

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
    axios.put(`http://localhost:3000/foodster/${food._id}`,
    {
      name: newName || food.name,
      location: newLocation || food.location,
      unsoldGoods: newUnsoldGoods || food.location,
      image: newImage || food.image,
      price: newPrice || food.price,
      curbsidePickup: newCurbsidePickup || food.newCurbsidePickup
    }
  )
  .then(() => {
    axios.get('http://localhost:3000/foodster')
    .then(response => {
      setFoods(response.data);
      toggleDisplay(event.target.id);
      for (let i = 0; i < 6; i++) {
        event.target[i].value = '';

      }
    });
  });
};

const toggleDisplay = id => {
  const form = document.getElementById(id);
  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
};

return (
  <div>
  <button onClick={()=>{toggleDisplay(`editForm${food._id}`)}}>Edit</button>
  <form id={`editForm${food._id}`} style={{display: 'none'}} onSubmit={handleNewFoodsterFormSubmit}>
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
  <input type="submit" />
  </form>
  </div>
);
};

export default UpdateForm;
