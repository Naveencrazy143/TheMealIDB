
import { FETCH_FOOD_LIST, FETCH_FOOD_LIST_SUCCESS ,FETCH_FOOD_LIST_FAILURE,FETCH_SELECTED_MEAL_INGREDIENTS,FETCH_SELECTED_MEAL_INGREDIENTS_SUCCESS,FETCH_SELECTED_MEAL_INGREDIENTS_FAILURE,SELECTED_MEAL_DETAILS
,SHIPPING_INFORMATION_DETAILS,

FETCH_SEARCH_MEALS,
FETCH_SEARCH_MEALS_SUCCESS,
FETCH_SEARCH_MEALS_FAILURE} from '../ActionType';

export const fetchFoodList = (params) => {

  return {
    type: FETCH_FOOD_LIST,
    payload:params
  }
};

export const fetchFoodListSuccess = (response) => {

 return {

  type: FETCH_FOOD_LIST_SUCCESS,
  payload:response.meals
}
};

export const fetchFoodListFailure = (error) => {
  return{
  type: FETCH_FOOD_LIST_FAILURE,
  payload:error
}
}

export const selectedMeal = (params) => {
  return {
    type: SELECTED_MEAL_DETAILS,
    payload:params
  }
};


export const fetchMealIngredients = (params) => {

  return {
    type: FETCH_SELECTED_MEAL_INGREDIENTS,
    payload:params
  }
};


export const fetchMealIngredientsSuccess = (response) => {

 return {

  type: FETCH_SELECTED_MEAL_INGREDIENTS_SUCCESS,
  payload:response.meals
}
};

export const fetchMealIngredientsFailure = (error) => {
  return{
  type: FETCH_SELECTED_MEAL_INGREDIENTS_FAILURE,
  payload:error
}
}

export const shippingInformation = (params) => {

  return {
    type: SHIPPING_INFORMATION_DETAILS,
    payload:params
  }
};


export const fetchSearchMeal = (params) => {

  return {
    type: FETCH_SEARCH_MEALS,
    payload:params
  }
};
export const fetchSearchMealSuccess = (response) => {

 return {

  type: FETCH_SEARCH_MEALS_SUCCESS,
  payload:response?.meals
}
};
export const fetchSearchMealFailure = (error) => {
  return{
  type: FETCH_SEARCH_MEALS_FAILURE,
  payload:error
}
}





