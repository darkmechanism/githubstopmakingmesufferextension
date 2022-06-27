var q = document.getElementsByClassName("js-upload-progress")[0];
if (q != undefined) {
   setInterval(function() {
      if (q.hidden) {
        document.querySelector("#repo-content-pjax-container > div > form > button").disabled = false;
      }
      else {
        document.querySelector("#repo-content-pjax-container > div > form > button").disabled = true;
      }
   }, 200);
}