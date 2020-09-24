import React, {useState} from 'react';

const CityList = ({city}) => {
  return (
    <div className="col-sm-11 offset-sm-1" style={styles.placeBox} >
      <p className="align-text-bottom">{city}</p>
    </div>
  )
}

const styles = {
  placeBox: {
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "solid",
    height: 75,
    textAlign: "center",
    backgroundColor: "#FFECAE"
  }
}

export default CityList;
