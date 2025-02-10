import React from "react";

const Spinner = ({ visible }) => {
  return (
    <div class={`c__spinner-wrapper--viewport ${visible ? `` : `d-none`}`}>
      <div class="c__spinner-parent">
        <svg class="c__spinner" viewBox="0 0 50 50">
          <circle
            class="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke-width="5"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Spinner;
