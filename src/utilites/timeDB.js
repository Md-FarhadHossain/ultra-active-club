const addToDB = (id) => {
  let timeADD = {};

  const storeTime = localStorage.getItem("break-time");
  if (storeTime) {
    timeADD = JSON.parse(storeTime);
  }
  const quantity = timeADD[id];

  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    timeADD[id] = newQuantity;
    // localStorage.setItem(id, newQuantity)
  } else {
    timeADD[id] = 1;

    // localStorage.setItem(id, 1)
  }

  localStorage.setItem("break-time", JSON.stringify(timeADD));
};


const getStoredTime = () => {
    let timeADD = {};

  const storeTime = localStorage.getItem("break-time");
  if (storeTime) {
    // timeADD = JSON.parse(storeTime);
  }

  return timeADD
}

export { addToDB, getStoredTime};
