import useFetch from "../../../hooks/useFetch";

const Loading = () => {
   const {data , loading ,error }=useFetch("/Products")
    return ( <div>
        {loading && <p>Loading ............................</p>}
        {error && <p>{error}</p>}
        {data && <p>{data.map(item=> <li>
           { item.category}
        </li>)}</p>}
    </div> );
}
 
export default Loading;