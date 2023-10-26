export function filterData(searchText, restaurants){
    const filterData = restaurants.filter((restaurant) => 
    restaurant?.data?.name?.toLowerCase().includes(searchText)
    );
    return filterData;
    
   };