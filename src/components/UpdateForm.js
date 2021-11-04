import axios from 'axios';
import {useState} from 'react';

const UpdateForm = props => {
  const {foods, setFoods} = props;
  const [newName, setName] = useState('');
  const [newLocation, setLocation] = useState('');
  const [newUnsoldGoods, setUnsoldGoods] = useState('');
  const [newImage, setImage] = useState('');
  const [newPrice, setPrice] = useState('');
  const [newCurbsidePickup, setCurbsidePickup] = useState(false);

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
    axios.put(`http://localhost:3000/foodster/${foods._id}`,
    {
      name: newName || foods.name,
      location: newLocation || foods.location,
      unsoldGoods: newUnsoldGoods || foods.location,
      image: newImage || foods.image,
      price: newPrice || foods.price,
      curbsidePickup: newCurbsidePickup || foods.newCurbsidePickup
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
  if (form.style.disply === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
};

return (
  <div>
  <button onClick={()=>{toggleDisplay(`editForms${foods._id}`)}}>Edit</button>
  <form id={`editForm${foods._id}`}style={{display: 'none'}} onSubmit={handleUpdateSubmit}>
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
