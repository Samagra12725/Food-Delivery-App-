
import Nav from "../components/Nav";
import { categories } from "../Category";
import { food_items } from "../food";
import Card from "../components/Card";
import { dataContext } from "../context/UserContext";
import { ImCross } from "react-icons/im";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useContext } from "react";

function Home() {
  let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);
  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category,
      );
      setCate(newList);
    }
  }

  let items = useSelector((state) => state.cart);

  let subtotal = items.reduce((total,item)=>total+item.qty*item.price,0)
 let deliveryFee=20
 let taxes = subtotal*0.5/100
 let total = Math.floor(subtotal+deliveryFee+taxes)

  return (
    <div className=" w-full min-h-[100vh] bg-slate-200">
      <Nav />
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%] ">
          {categories.map((item) => {
            return (
              <div
                className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 text-[20px] font-semibold text-grey-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200"
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8">
        {cate.length>1? cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        )):<div className="text-center font-semibold text-green-600 justify-center text-2xl pt-10">No dish found</div>}
       
      </div>

      <div
        className={`overflow-auto w-[100%] md:w-[40vw] h-[100%] fixed right-0 top-0 bg-white shadow-xl p-6 ${showCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 items-center flex flex-col`}
      >
        <header className="w-[100%] flex justify-between items-center ">
          <span className="text-green-400 text-[18px] font-semibold">
            Order Items
          </span>
          <ImCross
            className="w-[20px] h-[20px] cursor-pointer  text-green-400 text-[18px] font-semibold hover:text-gray-600"
            onClick={() => setShowCart(false)}
          />
        </header>
        {items.length>0?<>
        <div className=" w-full mt-9 flex flex-col gap-8 ">
          {items.map((item) => (
            <Card2
              key={item.id}
              name={item.name}
              price={item.price}
              image={item.image}
              id={item.id}
              qty={item.qty}
            />
          ))}
        </div>
            <div className="w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8">
               <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">Subtotal</span>
                <span className="text-green-400 font-semibold text-lg">Rs {subtotal}/-</span>
               </div>
                <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">Delivery Fee</span>
                <span className="text-green-400 font-semibold text-lg">Rs {deliveryFee}/-</span>
               </div>
               <div className="w-full flex justify-between items-center">
                <span className="text-xl text-gray-600 font-semibold">Taxes & Charges</span>
                <span className="text-green-400 font-semibold text-lg">Rs {taxes}/-</span>
               </div>
            </div>
             <div className="w-full flex justify-between items-center p-9">
                <span className="text-2xl text-gray-600 font-semibold">Amount to pay</span>
                <span className="text-green-400 font-semibold text-2xl">Rs {total}/-</span>
              </div>
              <button className="w-[80%] p-3 bg-green-300 rounded-lg text-grey-700 hover:bg-green-400 transition-all duration-200" onClick={()=>{toast.success("Order Placed...")}}>Place Order</button> 
              </>:
              <div className="text-center font-semibold text-green-600 justify-center text-2xl pt-10">Empty Cart</div>}
      
      

      </div>
    </div>
  );
}

export default Home;
