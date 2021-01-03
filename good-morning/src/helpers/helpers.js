const compass = (val) => {
  var direction = "";
  console.log(val);
  if (val > 0 && val < 22.5) {
    direction = "North";
  } else if (val > 22.5 && val < 67.5) {
    direction = "North East";
  } else if (val > 67.5 && val < 112.5) {
    direction = "East";
  } else if (val > 112.5 && val < 157.5) {
    direction = "South East";
  } else if (val > 157.5 && val < 202.5) {
    direction = "South";
  } else if (val > 202.5 && val < 247.5) {
    direction = "South West";
  } else if (val > 247.5 && val < 292.5) {
    direction = "West";
  } else if (val > 292.5 && val < 337.5) {
    direction = "North West";
  } else if (val > 337.5) {
    direction = "North";
  }
  return direction;
};

const displayTemp = (temp, val) => {
  if (temp) {
    return (val - 273).toFixed(0);
  } else {
    return ((val - 273) * (9 / 5) + 32).toFixed(0);
  }
};

export { compass, displayTemp };
