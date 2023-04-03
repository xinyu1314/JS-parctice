function sendAjax(url) {
  return new Promise((resolve, reject) => {
    const xhr = XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.state >= 200 && xhr.state < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.state);
        }
      }
    };
  });
}
sendAjax("https://api.apiopen.top/getJoke").then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
