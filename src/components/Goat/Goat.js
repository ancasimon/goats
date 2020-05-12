import React from 'react';

import './Goat.scss';

class Goat extends React.Component {
  render() {
    // everywhere in this render method, where you see th word goat, then that is this.props.goat
    const { goat } = this.props;
    return (
      <div className="Goat col-3">
        <div class="card">
          <img src={goat.imgUrl} class="card-img-top" alt="Goat card"/>
          <div class="card-body">
            <h5 class="card-title">{goat.name}</h5>
            <p class="card-text">Beard Length: {goat.beardLength}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
