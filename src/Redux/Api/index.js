import axios from 'axios';

const fetchMealsDataApi = async () => {

  try {
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');

    if (response.status !== 200) {
      throw new Error('Failed to fetch meals data');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching meals d:', error.message);
    throw error;
  }
};


const fetchMealIngredientsApi = async (mealId) => {

  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);

    if (response.status !== 200) {
      throw new Error('Failed to fetch meals data');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching meals d:', error.message);
    throw error;
  }
};



const filterMealApi = async (meal) => {
  try {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);

    if (response.status !== 200) {
      throw new Error('Failed to fetch meals data');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching meals d:', error.message);
    throw error;
  }
};


export default {fetchMealsDataApi,fetchMealIngredientsApi,filterMealApi};
