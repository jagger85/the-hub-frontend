export async function unzip(url) {
    const JSZip = require("jszip");
  
 return fetch(url)
      .then(function (response) {
        if (response.status === 200 || response.status === 0) {
          return Promise.resolve(response.blob());
        } else {
          return Promise.reject(new Error(response.statusText));
        }
      })
      .then(JSZip.loadAsync)
      .then((zip) => zip.file("manifest.json").async("string"))
      .then((r) => {
          return JSON.parse(r)
      
      })
  }
