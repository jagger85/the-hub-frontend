export function unzip(url){
    
    let data = null

    fetch(url) 
      .then(function (response) {
        if (response.status === 200 || response.status === 0) {
          return Promise.resolve(response.blob());
        } else {
          return Promise.reject(new Error(response.statusText));
        }
      })
      .then(JSZip.loadAsync) 
      .then(function (zip) {
        console.log(zip.files)
        manifest = zip.file('manifest.json').async('string')
        console.log(manifest)
        manifest.then(r => data = JSON.parse(r))

        return data;
    })
}