import JSZip from "jszip";
import axios from "axios";

export async function unzip(url) {
  
  return axios
  .get(url, { responseType: 'arraybuffer' })
  .then((response) => {
    const zip = new JSZip();
    return zip.loadAsync(response.data);
  })
  .then((zip) => {
    const file = zip.files[Object.keys(zip.files)[2]];
    return file.async('base64');
  })
  .then((content) => {
    const imageDataUrl = `data:image/jpeg;base64,${content}`;

    return imageDataUrl
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

