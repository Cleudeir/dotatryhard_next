export const unixToHMS = function(unix) {
  const a = new Date(unix * 1000);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate() < 10 ? '0' + String(a.getDate()) : a.getDate();
  const hour = a.getHours() < 10 ? '0' + String(a.getHours()) : a.getHours();
  const min = a.getMinutes() < 10 ? '0' + String(a.getMinutes()) : a.getMinutes();
  const sec = a.getSeconds() < 10 ? '0' + String(a.getSeconds()) : a.getSeconds();
  const time = date + ' ' + month + ' ' + year + ' - ' + hour + ':' + min + ':' + sec;
  return time;
};
