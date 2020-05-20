import React from "react";

function Detail(props) {
  let goBack = () => {
    props.history.goBack();
  };

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      Detail Loaded
    </div>
  );
}

export default Detail;
