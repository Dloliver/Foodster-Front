import Foods from './Delete.js'

const Showfoods = props => {
  const {foods, setFoods} = props;

  return (
    <section>
    <h2>Pickups available</h2>
    {foods.map(foods =>{
      return(
        <Foods key={foods._id} foods={foods} setFoods={setFoods} />
      );
    })}
    </section
  );
};

export default Showfoods;
