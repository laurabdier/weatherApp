import React, {useState} from 'react';

const ForecastBox = ({text, temperature}) => {
  console.log("forecastbox temp:", temperature)
  return (
    <div className="col-sm-3 offset-sm-1" style={styles.forecastBox}>
      <p> {text} {temperature} </p>
    </div>
  )
}

const styles = {
  forecastBox: {
    textAlign: "center",
    backgroundColor: "#FFECAE",
    height: 75
  }
}

export default ForecastBox;
