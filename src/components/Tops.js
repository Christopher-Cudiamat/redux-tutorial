import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

//Actions
import {
  toggleDisplay,
} from '../store/displaySplice';

import { selectDisplay } from '../store/displaySplice';


export function Tops() {

    const displayValue = useSelector(selectDisplay);
    const dispatch = useDispatch();

    console.log("displayValue",displayValue)

    return (
      <div>
        {
          displayValue ?

          <div style={{
            background: "yellow",
            height: "50px",
            width: "50px",
            padding: "50px",
            marginTop: "30px",
          }}>
            BOX
          </div>

          :

          null
        }
      
        <button
          onClick={() => dispatch(toggleDisplay())}>
          CLick to hide box
        </button>
      </div>
    );
}
