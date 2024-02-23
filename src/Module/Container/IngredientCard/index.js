import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../../../Component';

function IngredientCard({ onClick }) {
  const { mealIngredientsList } = useSelector((state) => state.AuthReducers);

  return (
    <>
      {mealIngredientsList ? (
        <div className='px-lg-3'>
          {mealIngredientsList.map((element) => {
            return (
              <div key={element.idMeal} >
                <div className='row'>

                  <div className="col-lg-5  col-md-5" onClick={onClick}>
                    <div className='h4 pt-4 pb-5' style={{ color: 'white' }}>{element?.strMeal}</div>
                    <div className="card" style={{ backgroundColor: "#2d2013" }}>
                      <img className="card-img-top" src={element.strMealThumb} alt="Card image cap" />
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6' style={{ color: 'white' }}>
                    <div className='h4 pt-4 pb-5' style={{ color: 'white' }}>Ingredients</div>
                    <div>
                      <ul className="list-unstyled d-flex flex-wrap">
                        {Object.keys(element)
                          .filter(key => key.startsWith('strIngredient') && element[key])
                          .map((ingredientKey, index) => {
                            const measureKey = `strMeasure${ingredientKey.slice(13)}`;
                            return (
                              <div key={ingredientKey} className="col-lg-4 col-md-6 mb-3">
                                <li>
                                  {element[ingredientKey]}: {element[measureKey]}
                                </li>
                              </div>
                            );
                          })}
                      </ul>
                    </div>
                  </div>

                </div>

                <div className='text-center pt-5 pb-3' style={{ color: 'white' }}>
                  <div>
                    <h3>Instructions</h3>
                    {element.strInstructions}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export { IngredientCard };
