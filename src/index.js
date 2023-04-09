import { blur_dashboard, blur_edit, blur_withdraw } from './popup_function';
import { UpdateBalance, UpdateName, UpdateWithdraw } from './data_update';
const options = document.querySelectorAll('.s_option');
options[0].addEventListener('click', blur_dashboard);
options[1].addEventListener('click', blur_withdraw);
options[2].addEventListener('click', blur_edit);
const depositBtn = document.getElementById('deposit_button');
const withdrawBtn = document.getElementById('withdraw_button');
const editBtn = document.getElementById('edit_button');
depositBtn.addEventListener('click', () => {
  blur_dashboard();
  UpdateBalance();
});
withdrawBtn.addEventListener('click', () => {
  blur_withdraw();
  UpdateWithdraw();
});
editBtn.addEventListener('click', () => {
  blur_edit();
  UpdateName();
});
let time_date = () => {
  // DATE
  let date = new Date();
  let d = date.getDate();
  let m = date.getMonth();
  let year = date.getFullYear();

  let newMonth = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'August',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  let month = newMonth[m];
  if (d == 1 || d == 21 || d == 31) {
    let showDate = `${d}st ${month}, ${year} `;
    document.getElementById('date').innerHTML = showDate;
  } else if (d == 2 || d == 22) {
    let showDate = `${d}nd ${month}, ${year} `;
    document.getElementById('date').innerHTML = showDate;
  } else if (d == 3 || d == 23) {
    let showDate = `${d}rd ${month}, ${year} `;
    document.getElementById('date').innerHTML = showDate;
  } else {
    let showDate = `${d}th ${month}, ${year} `;
    document.getElementById('date').innerHTML = showDate;
  }

  // TIME
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let session = 'AM';

  if (hour == 0) {
    hour = 12;
  } else if (hour > 12) {
    hour = hour - 12;
    session = 'PM';
  }

  Number.prototype.pad = function (digits) {
    for (var n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  };

  let timeWrite = `${hour.pad(2)}:${minute.pad(2)} ${session}`;
  document.getElementById('time').innerHTML = timeWrite;
};

setInterval(time_date, 300);
