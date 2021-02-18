import React from 'react';


type ButtonType = {
  isDisabled : boolean 
  title: string 
  func: () => void
}

const Button = (props: ButtonType) => {

  const callBackFn = () => {
    props.func()
  };

  return (
    <div>
      <button disabled={props.isDisabled} onClick={callBackFn} >
        {props.title}
      </button>
    </div>
  );
}

export default Button;