import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, SetRestaurantList] = useState([]); //useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    //console.log(jsonData);
    SetRestaurantList(jsonData.data.cards);
  };
  if (restaurantList.length === 0) {
    return <Shimmer />;
  }
  //console.log(restaurantList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //filter logic
            const filteredList = resList.filter(
              (res) => res?.data?.starRating > 3
            );
            SetRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((cardList) =>
          cardList?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
            (restaurant) => (
              //console.log(restaurant);
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
            )
          )
        )}
        {/* {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant?.data.id} resData={restaurant} />
        ))} */}
      </div>
    </div>
  );
};

export default Body;
