import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";

const Products = ({ itemArr, addToCart }) => (
  <section className="products">
    {itemArr.map((item) => (
      <ProductCard
        key={item.id}
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        description={item.description}
        category={item.category}
        rating={item.rating.rate}
        count={item.rating.count}
        addToCart={addToCart}
      />
    ))}
  </section>
);

export default Products;
