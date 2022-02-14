import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

setInterval(updateTime, 1000);

function updateTime() {
  time.innerHTML = Date();
}

export default updateTime;