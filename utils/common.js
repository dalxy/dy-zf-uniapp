const baseUrl = "http://152.136.150.189:3000";
const timer =
  Date.now ||
  function () {
    //此时此刻的时间
    return new Date().getTimer();
  };
  
export default {
	baseUrl,
	timer
}