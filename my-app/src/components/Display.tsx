import React from 'react';
import css from './Display.module.css'

type DisplayType = {
  count: number
}

const Display = (props: DisplayType) => {

  return (
    <div className={css.main}>
      <p className={props.count === 5 ? css.isMax : ''}> {props.count} </p>
    </div>
  );
}

export default Display;