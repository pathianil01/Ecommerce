import { fetchProducts } from "../Slice/ProductSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../Slice/ProductSlice";
import { add } from "../Slice/Cart";
import {useRef} from 'react'
import {useNavigate,Link} from 'react-router-dom'
function HomeComponent() {
  const prod = useSelector((state) => {
    return state;
  });
 
  
 const inputRef=useRef() 
 const Nav=useNavigate()
  
const filterData=prod.productsfsf.products.filter((data)=>{
  if(data.title.toLowerCase().includes(prod.productsfsf.searchText.toLowerCase()))
  {
    return data
  }
})
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const OnAdd = (data) => {
    if(prod.user.login){
    dispatch(add(data));
    }
    else{
      window.alert("Please login to proceed")
    }
  };
// const goToProductDetails=(event)=>{
//   // 
//   event.preventDefault()
//   window.alert("hello")
// }
  return (
    <div className="container-fluid mt-5 bg">
      {filterData && filterData.length &&prod.productsfsf.status=='Fullfilled' ? (
      
        filterData.map((product) => (
          <div className="row border-bottom " key={product.id}>
            <div className="col-sm-12  col-lg-3">
              <Link to='/productDetails' state={product}>
              <img  ref={inputRef}style={{marginTop:'10px'}}src={product.thumbnail} width="200px" title={product.description}></img></Link>
            </div>
            <div className="col-sm-12 col-lg-6">
              <h2>{product.title}</h2>
              <h6>Rating:{product.rating}</h6>
              <p>{product.description}</p>
              <h5 className="text-danger">
                Hurry Up!! Only {product.stock} left
              </h5>
              <h2></h2>
            </div>
            <div className="col-sm-12 col-lg-3">
              <h2>Rs. {product.price}</h2>
              {product.stock > 0 ? (
                <button
                  className=" btn btn-success"
                  onClick={() => OnAdd(product)}
                >
                  Add to Cart
                </button>
              ) : (
                <button className=" btn btn-danger">out of stock</button>
              )}
            </div>
          </div>
        ))
      ) : (
        <div>
          <h1>{prod.productsfsf.status}</h1>
        </div>
      )}
    </div>
  );
}
export default HomeComponent;
