import Foods from './Delete.js'

const Showfoods = props => {
  const {foodster, setFoodster} = props;

  return (
    <section>
    <h2>Pickups available</h2>
    {foodster.map(foods =>{
      return(
        <Foods key={foods._id} foods={foodster} setFoods={setFoodster} />
      );
    })}
    </section>
  );
};

export default Showfoods;
