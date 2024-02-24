// reducer.js
import { FETCH_FOOD_LIST, FETCH_FOOD_LIST_SUCCESS,FETCH_FOOD_LIST_FAILURE,SELECTED_MEAL_DETAILS,FETCH_SELECTED_MEAL_INGREDIENTS_SUCCESS,FETCH_SELECTED_MEAL_INGREDIENTS_FAILURE,FETCH_SELECTED_MEAL_INGREDIENTS, SHIPPING_INFORMATION_DETAILS,  FETCH_SEARCH_MEALS, FETCH_SEARCH_MEALS_SUCCESS, FETCH_SEARCH_MEALS_FAILURE } from '../ActionType';


const initialState = {
  foodMealsList:undefined,
  mealIngredientsList:undefined,
  selectedMealId:undefined,
  shippingInformations:undefined,
  filterMeals:undefined
};

const  AuthReducers = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_FOOD_LIST:
    state={...state,foodMealsList:undefined}
      break;
      case FETCH_FOOD_LIST_SUCCESS:
        state={...state,foodMealsList:action.payload}
        break;
        case FETCH_FOOD_LIST_FAILURE:
            state={...state,foodMealsList:undefined}
break;
case FETCH_SELECTED_MEAL_INGREDIENTS:
  state={...state,mealIngredientsList:undefined}
    break;
    case FETCH_SELECTED_MEAL_INGREDIENTS_SUCCESS:
      state={...state,mealIngredientsList:action.payload}
      break;
      case FETCH_SELECTED_MEAL_INGREDIENTS_FAILURE:
          state={...state,mealIngredientsList:undefined}
          break;
          //==>
          case SELECTED_MEAL_DETAILS:
            state={...state,selectedMealId:action.payload}
            break;
            case SHIPPING_INFORMATION_DETAILS:
              state={...state,shippingInformations:action.payload}
              break;

              case FETCH_SEARCH_MEALS:
            state={...state,filterMeals:undefined}
            break;
            case FETCH_SEARCH_MEALS_SUCCESS:
              state={...state,filterMeals:action.payload}
              break;

              case FETCH_SEARCH_MEALS_FAILURE:
              state={...state, filterMeals:undefined}
              break;
  
  

            default:
                state=state
                break;
  
  }
  return state
};

export default AuthReducers