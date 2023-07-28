import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Burger',
    description: 'veggies burger',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Briyani',
    description: 'Hyderbad Briyani!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Fired Rice',
    description: 'Egg Fried rice with spicy',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Pizza',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
