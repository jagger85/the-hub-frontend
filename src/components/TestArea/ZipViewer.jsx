import React, { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';
import JSZip from 'jszip';

const ZipViewer = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleDownload = () => {
  
    const remoteAddress = 'https://s3.us-east-1.wasabisys.com/ultraio-uniq-prod/b25d4553d54a3be50991cad5c58eafcf76789022607262c561940d87f3173554.zip';

    axios
      .get(remoteAddress, { responseType: 'arraybuffer' })
      .then((response) => {
        const zip = new JSZip();
        return zip.loadAsync(response.data);
      })
      .then((zip) => {
        const file = zip.files[Object.keys(zip.files)[0]];
        return file.async('base64');
      })
      .then((content) => {
        const imageDataUrl = `data:image/jpeg;base64,${content}`;
        setImageUrl(imageDataUrl);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <Button variant="contained" onClick={handleDownload}>
        Download ZIP
      </Button>
      {imageUrl && <img src={imageUrl} alt="Downloaded Image" />}
    </div>
  );
};

export default ZipViewer;