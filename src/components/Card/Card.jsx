import { useEffect, useState } from "react";
import Singleproduct from "../Singleproduct/Singleproduct";

const Card = () => {
  const [allproducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // const [total,setTotal]=useState([])
  const handleCart = (p) => {
    const isExists = cart.find((product) => product.id == p.id);
    if (!isExists) {
      setCart([...cart, p]);
    } else {
      alert("alredy Exist");
    }
  };
  const handleRemove = (id) => {
    const removeItem = cart.filter((item) => item.id != id);
    setCart(removeItem);
  };
  // let total=0;



  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setAllProducts(data.products));
  }, []);


  console.log(allproducts);
  return (
    <div className="flex gap-10">
      <div className="w-2/3 mt-5">
        <h1 className="text-4xl text-orange-400 font-bold shadow-lg hover:bg-green-400 p-4 rounded-lg">
          This Is Our All Products :
        </h1>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 shadow-lg mt-6 ">
          {allproducts.map((product) => (
            <Singleproduct
              handleCart={handleCart}
              key={product.id}
              product={product}
            ></Singleproduct>
          ))}
        </div>
      </div>
      <div className="w-1/3">
        <h2 className="text-4xl w-full mt-5 text-orange-400 font-bold shadow-lg hover:bg-green-400 p-4 rounded-lg">
          Total Products:
          {allproducts.length}
        </h2>
        <div className="flex justify-between text-black bg-slate-400 font-bold text-xl p-3 rounded-lg">
          <h2>Name</h2>
          <h2>Price</h2>
          <h2>Item Remove</h2>
        </div>
        <div className="">
          {cart.map((item,index) => (
            <div
              key={item.id}
              className="flex justify-between mt-4 p-2 text-green-600 font-semibold text-lg"
            >
              <p>{index+1}</p>
              <h5>{item.title.slice(0, 10)}</h5>
              <h5>${item.price}</h5>
              <button
                className="btn btn-accent"
                onClick={(e) => handleRemove(item.id)}
              >
                remove
              </button>
            </div>
          ))}
        </div>
        <h1 className="text-2xl font-bold text-rose-300 ml-7">Total Ammount :  </h1>
      </div>
    </div>
  );
};

export default Card;
