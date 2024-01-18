const Basket = (props) => {
  const newBasket = [...props.basket];
  const changeQuantity = (sign, index) => {
    if (sign === "-") {
      console.log("clicked");
      newBasket[index][1]--;
      props.setBasket(newBasket);
    }
  };
  return (
    <>
      <button>Valider mon panier</button>
      {props.basket.map((order, index) => {
        const total = order[1] * order[2];
        return (
          order[1] > 0 && (
            <div className="basketItem" key={index}>
              <div>
                <div
                  className="add"
                  onClick={() => {
                    changeQuantity("-", index);
                  }}
                >
                  -
                </div>
                <div>{order[1]}</div>
                <div className="add">+</div>
              </div>
              <div>{order[0]}</div>
              <div>{total.toString().replace(".", ",")}€</div>
            </div>
          )
        );
      })}
    </>
  );
};
export default Basket;
