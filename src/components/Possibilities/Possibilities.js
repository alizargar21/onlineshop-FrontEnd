const Possibilities = () => {
    return ( <section className=" w-[80%] mx-auto my-8">
        <div className="grid grid-cols-4 md:grid-cols-2 justify-items-center">
            <div className="w-auto flex my-5 flex-col items-center md:text-sm ">
                <img className="w-16 mb-3 sm:w-10 md:w-12" src="/images/poss/cash-on-delivery.png" alt="cash-on-delivery"/>
                <p className="text-center dark:text-gray-200">Payment On The Spot</p>
            </div>
            <div className="w-auto flex my-5 flex-col items-center md:text-sm ">
                <img className="w-16 mb-3 sm:w-10 md:w-12" src="/images/poss/best seller.png" alt="best-Seller"/>
                <p className="text-center dark:text-gray-200">Guarantee The Originality</p>
            </div>
            <div className="w-auto flex my-5 flex-col items-center md:text-sm ">
                <img className="w-16 mb-3 sm:w-10 md:w-12" src="/images/poss/247.png" alt="24/7"/>
                <p className="text-center dark:text-gray-200">Supports</p>
            </div>
            <div className="w-auto flex my-5 flex-col items-center md:text-sm ">
                <img className="w-16 mb-3 sm:w-10 md:w-12" src="/images/poss/delivery-truck.png" alt="delivery-truck"/>
                <p className="text-center dark:text-gray-200">Express Delivery</p>
            </div>
           
            
        </div>
    </section> );
}
 
export default Possibilities;