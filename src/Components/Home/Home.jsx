
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchcategory() {
      try {
        const response = await axios.get("http://localhost:5000/api/categoryFetch")
        console.log(response)
        setCategory(response.data);
      } catch (error) {
        console.log("Error: ",error);
      }
    }
    fetchcategory();
  },[]);

  return (
    <div>
      <div className="flex justify-around p-3">
        <div className="flex gap-3">
          <h1>Logo</h1>
        </div>
        <div className="flex justify-evenly gap-9">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Products</a>
          <a href="">Cart</a>
        </div>
      </div>

      <div className="flex gap-4">
      {category.map((data,index)=>{
        return(
          <div key={index}> 
           <h1>{data.categoryName}</h1>
           <img src={data.categoryImage} alt="" className="w-[20vw]"/>
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default Home;
