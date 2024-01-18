import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Header from "./components/Header";
import Title from "./components/Title";
import Meal from "./components/Meal";
import Basket from "./components/Basket";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo--dzk9mdcz57cb.code.run/"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <Header />
      <main>
        <Title
          name={data.restaurant.name}
          description={data.restaurant.description}
          img={data.restaurant.picture}
        />
        <div className="mainContainer">
          <div>
            <Meal
              categories={data.categories}
              basket={basket}
              setBasket={setBasket}
            />
          </div>
          <div>
            <Basket basket={basket} setBasket={setBasket} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
