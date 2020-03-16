import React from "react";
import propTypes from "prop-types"

function Food({name, picture, rating}){
  
  return(
    <div>
      <h1>I like {name}</h1>
      <h4> {rating}/5.0 </h4>
      <img src={picture}/>
    </div>
  )
}

Food.propTypes={
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired
};

const foodIlike=[
  {
    id: 1,
    rating:5,
    name: "Kimchi" ,
    image: "https://i.ytimg.com/vi/eTucCw1w6Ak/maxresdefault.jpg"
  },
  {
    id: 2,
    rating: 3.4,
    name: "Jjajangmyeon",
    image: "http://ojsfile.ohmynews.com/STD_IMG_FILE/2016/1214/IE002069160_STD.jpg"
  },
  {
    id: 3,
    rating: 2,
    name: "Donkkasu",
    image: "https://3.bp.blogspot.com/-p6dqNoGpUbw/WqVJzZSo8yI/AAAAAAAEWks/PIw6MJZYT1IRb_gsPNv0PERajdf7_VeOACLcBGAs/w1200-h630-p-k-no-nu/2018-03-10%2B17.52.42.jpg"
  }
]

function renderFood(dish){
  console.log(dish);
  return <Food 
    key={dish.id} 
    name={dish.name} 
    picture={dish.image} 
    rating={dish.rating}  
  />

}

function App() {
  return    <div>
     {foodIlike.map(renderFood)}
     </div>;
}

export default App;
