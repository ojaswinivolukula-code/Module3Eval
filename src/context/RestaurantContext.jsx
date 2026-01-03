import { createContext, useEffect, useState } from "react";


export const RestaurantContext=createContext()
export const RestaurantProvider=({children})=>{
    const [restaurants,setRestaurants]=useState([])
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("evalData")) || [];
        setRestaurants(data)
    },[])
    const syncStorage=(data)=>{
        localStorage.setItem("evalData",JSON.stringify(data))
        setRestaurants(data)
    }
    const addRestaurant=(restaurant)=>{
        syncStorage([...restaurants,restaurant])
    }
    const deleteRestaurant=(id)=>{
        syncStorage(restaurants.filter(r=>r.restaurantID !== id))
    }
    const updateRestaurant=(updated)=>{
        syncStorage(
            restaurants.map(r=>r.restaurantID===updateRestaurantID ? updated:r)
        )
    }
    return(
        <RestaurantContext.Provider 
        value={{restaurants,addRestaurant,deleteRestaurant,updateRestaurant}}>
            {children}
        </RestaurantContext.Provider>
    )
}