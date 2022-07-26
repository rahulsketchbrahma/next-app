import React from "react";
import { ButtonWrappper } from "./style";

function Buttons(props) {
  return (
    <ButtonWrappper>
      <button>{props.title}</button>
      <imageWrapper>
        <img src="https://www.atherenergy.com/images/450x-new/breeze-streets/Icon-arrow.svg" />
      </imageWrapper>
    </ButtonWrappper>
  );
}

export default Buttons;
