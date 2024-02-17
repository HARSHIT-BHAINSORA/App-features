import Card from "./Card";
import "./Body.css";

const obj = [
  {
    id: 1,
    Product: "Shoes",
    price: 999,
    city: "Dehradun",
  },
  {
    id: 2,
    Product: "Jeans",
    price: 599,
    city: "Punjab",
  },
  {
    id: 3,
    Product: "Shirt",
    price: 499,
    city: "Delhi",
  },
];

const Body = () => {
  return (
    <div className="body-card">
      {obj.map((it) => (
        <Card key={it.id} {...it} />
      ))}
    </div>
  );
};

export default Body;
