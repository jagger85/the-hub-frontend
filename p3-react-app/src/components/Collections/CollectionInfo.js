import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Collection from "../Organisms/Collection";
import { apiCalls } from "../../scripts/apicalls";

function CollectionInfo(props) {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    const getCollection = async () => {
      const data = await apiCalls.getCollectionById(id);
      setCollection(data.rows[0]);
    };
    getCollection();
  }, []);

  return (
    <div>
      CollectionPage
      {collection != null && <Collection collection={collection} />}
    </div>
  );
}

export default CollectionInfo;
