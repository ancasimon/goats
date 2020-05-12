import React from 'react';

import './Goat.scss';

class Goat extends React.Component {
  useGoatEvent = (e) => {
    const { goat, useAGoat } = this.props;
    e.preventDefault();
    useAGoat(goat.id);
  }

  freeGoatEvent = (e) => {
    e.preventDefault();
    const { goat, freeAGoat } = this.props;
    freeAGoat(goat.id);
  }

  render() {
    // everywhere in this render method, where you see th word goat, then that is this.props.goat
    const { goat } = this.props;
    return (
      <div className="Goat col-3">
        <div className="card">
          <img src={goat.imgUrl} className="card-img-top" alt="Goat card"/>
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">Beard Length: {goat.beardLength}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-dark" onClick={this.useGoatEvent}>Use the goat</button>
            <button className="btn btn-primary" onClick={this.freeGoatEvent}>Free the goat</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
