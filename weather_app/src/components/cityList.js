import React, {useState} from 'react';

const CityList = ({city}) => {

  return (
    <div className=""  >
      <button type="button" className="col-sm-11 offset-sm-1 align-text-bottom" style={styles.placeBox}>{city}</button>
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
