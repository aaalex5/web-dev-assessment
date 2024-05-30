import React from 'react';
import { useSelector } from 'react-redux';

const AssetList = () => {
  const assets = useSelector((state) => state.assets.assets);

  return (
    <div>
      {assets.map((asset) => (
        <div key={asset.id}>
          <h2>{asset.name}</h2>
          <img src={asset.image} alt={asset.name} />
        </div>
      ))}
    </div>
  );
};

export default AssetList;