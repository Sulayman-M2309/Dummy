

const Singleproduct = ({product,handleCart}) => {
    return (
        <div
        className="w-full max-w-sm bg-white border hover:shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
    
      >
        <a href="#">
          <img className="p-8 rounded-t-lg" src={product.thumbnail} />
        </a>
        <p className="text-xl font-bold ml-4 mb-4 items-center text-orange-700"> {product.title}</p>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.description.slice(0,55)}
            </h5>
          </a>

          <div className="flex items-center justify-between mt-4">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
           onClick={(e)=>handleCart(product)} >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    );
};

export default Singleproduct;