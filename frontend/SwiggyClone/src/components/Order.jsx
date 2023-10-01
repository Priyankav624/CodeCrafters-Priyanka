import React, { useEffect, useState } from 'react';
import ItemsCard from './ItemsCard';
import axios from 'axios';
import '../Order.css';

const Order = () => {
  const [foodItem, setFoodItem] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);

  const init = async () => {
    const response = await axios.get(`http://localhost:3000/api/foodData`);
    setFoodItem(response.data.food);
    setFoodCategory(response.data.category);
  };
  
  useEffect(() => {
    init();
  }, []);

  return (
    <div className='grid-container ' style={{margin:"100px", marginTop: " 160px" }}>
      {foodCategory.length !== 0 ? (
        foodCategory.map((category) => (
          <div key={category._id} className="category-container">
            <h3>{category.CategoryName}</h3>
            <hr />
            <div className="card-grid" >
              {foodItem.length !== 0 ? (
                foodItem
                  .filter((item) => item.CategoryName === category.CategoryName)
                  .map((filteredItem) => (
                    <div key={filteredItem._id} className="card">
                      <ItemsCard
                        foodName={filteredItem.name}
                        options={filteredItem.options[0]}
                        img={filteredItem.img}
                        desc={filteredItem.description}
                        price={filteredItem.price}
                      />
                    </div>
                  ))
              ) : (
                <div>No Foods Available</div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div>
          <h2>No Foods Available</h2>
        </div>
      )}
    </div>
    
  );
};

export default Order;
