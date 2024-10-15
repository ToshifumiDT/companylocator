import { useState } from 'react';
import CompanyDetailModal from './components/CompanyDetailModal';
import CompanyList from './components/CompanyList';
import ErrorMessage from './components/ErrorMessage';
import FavoriteButton from './components/FavoriteButton';
import MunicipalitySelect from './components/MunicipalitySelect';
import './App.css';

function App() {
  return (
    <>
      <CompanyDetailModal />
      <MunicipalitySelect />
      <ErrorMessage />
      <FavoriteButton />
      <CompanyList />
    </>
  );
}

export default App;