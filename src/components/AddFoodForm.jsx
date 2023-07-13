import { useState } from "react";

function AddFoodForm(props) {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handleCalories = (e) => setCalories(e.target.value);
  const handleServings = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFood = {
      image,
      name,
      calories,
      servings,
    };

    props.addFoods(newFood);

    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };

  return (
    <form className="add-food-form" onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleName}
      />
      <input
        name="image"
        type="text"
        placeholder="Image"
        value={image}
        onChange={handleImage}
      />
      <input
        name="calories"
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={handleCalories}
      />
      <input
        name="servings"
        type="number"
        placeholder="Servings"
        value={servings}
        onChange={handleServings}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
