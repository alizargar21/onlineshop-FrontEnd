import { BsCheck } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  calculateTotalItem,
  calculateTotalAmountPayable,
  calculateTotalOriginalPrice,
  calculateTotalDiscount,
} from "../../utils/Calculate";

const TableCheckout = ({ cartCheckHandler}) => {
  const { cart, total } = useSelector((state) => state.cart);
  const totalCartItems = calculateTotalItem(cart);
  const totalAmountPayable = calculateTotalAmountPayable(cart);
  const totalPrice = calculateTotalOriginalPrice(cart);
  const totalDiscount = calculateTotalDiscount(cart);
  return (
    <section className="w-[90%] sm:w-full mx-auto min-h-screen ">
      <table className="w-full sm:w-full    md:text-[12px]  mx-auto mt-10 min-w-[360px]  border-[1px] border-gray-700">
        <thead className=" m-2 border-b-[1px] sm:text-[10px] md:text-[12px] border-gray-600 bg-rose-600 text-gray-200 font-Oswald ">
          <tr className="">
            <th className="px-2">#</th>
            <th className=" py-2  sm:py-[5px]  sm:px-[3px]  ">Products Name</th>
            <th className=" py-2  sm:py-[5px]  sm:px-[4px] px-2 ">Brand</th>
            <th className=" py-2  sm:py-[5px]  sm:px-[4px] px-2 ">Color</th>
            <th className=" py-2  sm:py-[5px]  sm:px-[4px] px-2 ">Quantity</th>
            <th className=" py-2  sm:py-[5px]  sm:px-[4px] px-2  ">Price</th>
            <th className=" py-2  sm:py-[5px]  sm:px-[4px] px-2 ">Discount</th>
            <th className=" py-2  sm:py-[5px]  sm:px-[4px] px-2 ">
              Amount
            </th>
            <th className=" py-2  sm:py-[5px]  sm:px-[4px] px-2 ">
              Amount payable
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-800 font-Roboto italic sm:text-[10px]">
          {cart.map((item, index) => (
            <tr
              className="border-b-[1px] border-gray-700 even:bg-white odd:bg-gray-200 text-center dark:text-gray-200 dark:even:bg-black/20 dark:bg-slate-900"
              key={index}
            >
              <td className="pl-3">{index + 1}.</td>
              <td className="   py-3   ">{item.name}</td>
              <td className="   py-3   ">{item.brand}</td>
              <td className="   py-3   ">{Object.keys(item.selectedColor)}</td>
              <td className="   py-3   ">x{item.quantity}</td>
              <td className="   py-3   ">${item.price}</td>
              <td className="   py-3   ">
                {item.discount === 0 ? "-" : `%${item.discount}`}
              </td>
              <td className="   py-3   border-r-[1px] border-gray-700">
                $ {item.price - (item.price * item.discount) / 100}
              </td>
              <td className="   py-3   ">
                $
                {(item.price - (item.price * item.discount) / 100) *
                  item.quantity}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="sm:text-[10px] md:text-[12px] italic">
          <tr className="dark:bg-black/20 dark:text-gray-200 bg-gray-100">
         
            <td className="   border-b-[1px]   border-r-[1px] border-gray-700 py-1 text-center">
              Total Items
            </td>
            <td
              colSpan={2}
              className="   border-b-[1px]  border-r-[1px] border-gray-700 py-1 text-center"
            >
              Total Price
            </td>
            <td
              colSpan={2}
              className="   border-b-[1px]  border-r-[1px] border-gray-700 py-1 text-center"
            >
              Sum Discount
            </td>
            <td
              colSpan={4}
              className="   border-b-[1px]  border-gray-700 py-1 text-center"
            >
              Total Amount Payable
            </td>
          </tr>
          <tr className="  text-center dark:bg-black/20 dark:text-gray-200">
          
            <td className=" py-2  border-r-[1px] border-gray-700 ">
              {totalCartItems}
            </td>
            <td colSpan={2} className="  py-2 border-r-[1px] border-gray-700 ">
              $ {totalPrice}
            </td>
            <td colSpan={2} className=" py-2 border-r-[1px] border-gray-700 ">
              $ {totalDiscount.toFixed(1)}
            </td>
            <td colSpan={4} className="  py-2  ">
              $ {totalAmountPayable.toFixed(1)}
            </td>
          </tr>
        </tfoot>
      </table>
      <div className=" w-full my-3 text-gray-200 center justify-between">
        <button type="" className="py-1 px-2  bg-yellow-500 rounded-lg center "><Link to={"/cart"} >Return to Cart</Link></button>
            <button type="button" 
            className="py-1 px-2  bg-green-600 rounded-lg center"
            onClick={()=>{
              cartCheckHandler()
            }}> <BsCheck  fontSize={26}/></button>
        
      </div>
    </section>
  );
};

export default TableCheckout;
