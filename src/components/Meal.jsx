import Popular from "../assets/images/popular.jpg";

const Meal = (props) => {
  const addToBasket = (meal) => {
    const newBasket = [...props.basket];
    let alreadyInBasket = false;
    let indexMeal = 0;
    console.log(meal.title);
    for (let i = 0; i < props.basket.length; i++) {
      if (props.basket[i][0] === meal.title) {
        if (props.basket[i][1] > 0) {
          alreadyInBasket = true;
          indexMeal = i;
          break;
        }
      }
    }
    if (!alreadyInBasket) {
      newBasket.push([meal.title, 1]);
      props.setBasket(newBasket);
    } else if (alreadyInBasket) {
      newBasket[indexMeal][1]++;
      props.setBasket(newBasket);
    }
  };
  return (
    <>
      {props.categories.map((category, index) => {
        return (
          <div key={index}>
            <h2>{category.name}</h2>
            <div className="mealsContainer">
              {category.meals.map((meal, index) => {
                return (
                  <div key={index}>
                    <div
                      onClick={() => {
                        addToBasket(meal);
                      }}
                    >
                      <h3>{meal.title}</h3>
                      <p className="mealDescription">{meal.description}</p>
                      <div>
                        <p className="price">{meal.price} €</p>
                        {meal.popular && (
                          <img
                            src={Popular}
                            alt="populaire"
                            className="popular"
                          />
                        )}
                      </div>
                    </div>
                    <div>
                      {meal.picture && (
                        <img
                          src={meal.picture}
                          alt="photo du repas"
                          className="mealPicture"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Meal;
