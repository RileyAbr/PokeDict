import React from "react";

class Detail extends React.Component {
  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <button onClick={this.goBack}>Go Back</button>
        Detail Loaded
      </div>
    );
  }
}

export default Detail;
