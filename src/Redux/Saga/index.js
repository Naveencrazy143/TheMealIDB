import { takeLatest, put, call } from 'redux-saga/effects';
import Api from '../Api'
import { FETCH_FOOD_LIST,FETCH_SEARCH_MEALS,FETCH_SELECTED_MEAL_INGREDIENTS } from '../ActionType';
import { fetchFoodListSuccess, fetchFoodListFailure,fetchMealIngredientsSuccess,fetchMealIngredientsFailure, fetchSearchMealSuccess, fetchSearchMealFailure ,setLoader} from '../Action';

function* fetchFoodListSaga(action) { 
    
    try {
        const response = yield call(Api.fetchMealsDataApi, action.payload);
        yield put(fetchFoodListSuccess(response));
        
    } catch (error) {
        yield put(fetchFoodListFailure(error));
       
    }
}


function* fetchMealIngredientsSaga(action) { 
   
    try {
        const response = yield call(Api.fetchMealIngredientsApi, action.payload);
        yield put(fetchMealIngredientsSuccess(response));
      
    } catch (error) {
        yield put(fetchMealIngredientsFailure(error));
       
    }
}


function* fetchSearchMealSaga(action) { 
   
    try {
        const response = yield call(Api.filterMealApi, action.payload);
        yield put(fetchSearchMealSuccess(response));
       
    } catch (error) {
        yield put(fetchSearchMealFailure(error));
      
    }
}


function* mySaga() {
    yield takeLatest(FETCH_FOOD_LIST, fetchFoodListSaga);
    yield takeLatest(FETCH_SELECTED_MEAL_INGREDIENTS, fetchMealIngredientsSaga);
    yield takeLatest(FETCH_SEARCH_MEALS, fetchSearchMealSaga);
}

export default mySaga;



