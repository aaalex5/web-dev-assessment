import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAssets } from '../redux/assetsSlice';
import assetsData from '../assets/stackline_frontend_assessment_data_2021.json';

const AssetLoader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAssets(assetsData));
  }, [dispatch]);

  return null;
};

export default AssetLoader;