import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    async function fetchcategory() {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/categoryFetch",
        );
        console.log(response);
        setCategory(response.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    fetchcategory();
  }, []);

  return (
    <div>
      <div>
        <h1>Shop by Category</h1>
      </div>
      <div className="flex gap-4">
        {category.map((data, index) => {
          return (
            <div key={index}>
              <img src={data.categoryImage} alt="" className="w-[20vw]" />
              <h1>{data.categoryName}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
