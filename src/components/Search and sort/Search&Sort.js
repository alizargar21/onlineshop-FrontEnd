import '../../container/Pages/products/ProductList/productList.css'
const SearchSort = () => {
    return ( 
        <section className="sortContainer">
        <div className="searchDiv">
            <label htmlFor='search'>Search</label>
            <input type="text" name="" value="s" id='search'  className="searchInput"/>
        </div>
        <div>
            <select className="selectCategory">
                <option className="option" value="">select a category</option>
                <option value="laptop">Laptop</option>
                <option value="mobiles">Mobiles</option>
            </select>
        </div>
        <div>
            <select className="selectCategory">
                <option value="newest">Sort By Newest</option>
                <option value="expensive">Sort By Expensive</option>
                <option value="inexpensive">Sort By Inexpensive</option>
                
            </select>
        </div>
      </section>
     );
}
 
export default SearchSort;