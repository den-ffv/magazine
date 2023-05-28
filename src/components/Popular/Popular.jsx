import React from "react";
import "./Popular.scss";
import { Link } from "react-router-dom";

function Popular() {
  return (
    <Link to={""}>
      <div className='popular'>
        <div className='popular__content'>
          <p className='popular__title popular__number'>01</p>
          <div>
            <h3 className='popular__title'>Street art festival</h3>
            <div className='text-content__information-post'>
              <p>
                <span>Text</span>Jakob Gronberg
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Popular;
