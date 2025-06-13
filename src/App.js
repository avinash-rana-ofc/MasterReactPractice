import "./App.css";
import Products from "./components/Product";

function App() {
  const products = [
    {
      name: "Apple",
      img: "/apple.png",
      code: "0001",
      price: 12,
      isActive: true,
    },
    {
      id: "2",
      name: "Orange",
      img: "/orange.png",
      code: "0002",
      price: 20,
      isActive: false,
    },
    {
      name: "Mango",
      img: "/mango.png",
      code: "0003",
      price: 5,
      isActive: true,
    },
  ];
  return (
    <>
      <h1> Products </h1>
      <div className="product-list">
        {products.map((product) => (
          <Products product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
