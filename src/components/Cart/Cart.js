import "./Cart.css";

const Cart = ({ cart }) => {
  return cart.map((item) => {
    console.log(item);
    if (item.quantity > 0) {
      return (
        <div>
          {item.title} {item.quantity} -
        </div>
      );
    } else {
      return <></>;
    }
  });
};

export default Cart;
