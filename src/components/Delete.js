import UpdateForm from './UpdateForm';
import axios from 'axios'

const Foods = props => {
  const {foods, setFoods} = props;

  const handleDelete = () => {
    axios.delete(`https://ancient-badlands-03329.herokuapp.com/foodster/${foods._id}`)
      .then(response => {
        axios.get('https://ancient-badlands-03329.herokuapp.com/foodster')
        .then(response => {
          setFoods(response.data);
        });
      });
  };

  return (
    <div>
    <h3>{foods.name}</h3>
    {foods.location && <p>{foods.location}</p>}
    {foods.unsoldGoods && <p>{foods.unsoldgoods}</p>}
    {foods.image && <img src={foods.image}/>}
    {foods.price && <p>{foods.price}</p>}
    {foods.curbsidePickup && <p>{foods.curbsidepickup}</p>}
    <button onClick={handleDelete}>Delete</button>
    <UpdateForm food={foods} setFoods={setFoods} />
    </div>
  );
};

export default Foods;
