function updateTime() {
  time.innerHTML = luxon.DateTime.local().toLocaleString(luxon.DateTime.DATETIME_FULL);
}

setInterval(updateTime, 1000);

export default updateTime;