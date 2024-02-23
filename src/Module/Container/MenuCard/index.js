import React from 'react';

function MenuCard({ src, text ,onClick}) {
  return (
      <div className="col-lg-3 my-lg-2 col-md-4" onClick={onClick}>
        <div className="card" style={{backgroundColor:"#2d2013"}}>
          <img className="card-img-top" src={src} alt="Card image cap" />
          <div className="card-body ">
            <p className="card-text text-center " style={{color:"#ffcb69"}}>
             {text}
            </p>
          </div>
        </div>
      </div>

  );
}

export { MenuCard};
