import React, { useEffect, useState } from 'react'
import ItemsCard from './ItemsCard';
import axios from 'axios';

const Order = () => {
    const [foodItem , setFoodItem ] = useState([]);
    const [foodCategory , setFoodCategory] = useState([]);

    const init = async () => {
      const response = await axios.get(`http://localhost:3000/api/foodData`)
      setFoodItem(response.data.food);
      setFoodCategory(response.data.category);   
  }

  useEffect(() => {
      init();
  }, []);

    return (
      <div>
      {
        foodCategory !== [] ? 
          foodCategory.map(data => {
            return (<div> 
              
              <div key={data._id}>
                {data.CategoryName}
              </div>
              
              <hr />
              
              { foodItem !== [] ? foodItem.filter(item => item.CategoryName === item.CategoryName)
              .map(filteredItem => {
                return (
                  <div key={filteredItem._id}>
                    <ItemsCard 
                        foodName={filteredItem.name}
                        options={filteredItem.options[0]}
                        imgSrc = {filteredItem.img}
                    />
                  </div>
                )
              }) 
              : (
                <div>No Foods Available</div>
              )} 
            
            </div>)
          }) : <div><h2>No Foods Available</h2></div>
      }

    </div>
    )
}

export default Order