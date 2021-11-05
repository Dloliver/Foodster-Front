import UpdateForm from './UpdateForm';
import axios from 'axios'

const Foods = props => {
  const {food, setFoods} = props;

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/foodster/${food._id}`)
      .then(response => {
        axios.get('http://localshost:3000/foodster')
        .then(response => {
          setFoods(response.data);
        });
      });
  };

  return (
    <div>
    <h3>{food.name}</h3>
    {food.location && <p>{food.location}</p>}
    {food.unsoldGoods && <p>{food.unsoldgoods}</p>}
    {food.image && <p>{food.image}</p>}
    {food.price && <p>{food.price}</p>}
    {food.curbsidePickup && <p>{food.curbsidepickup}</p>}
    <button onCLick={handleDelete}>Delete</button>
    <UpdateForm food={food} setFoods={setFoods} />
    </div>
  );
};

export default Foods;
