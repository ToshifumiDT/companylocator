import { fetchCompanies } from './api/api';
import { useState, useEffect } from 'react';
import CompanyDetailModal from './components/CompanyDetailModal';
import CompanyList from './components/CompanyList';
import ErrorMessage from './components/ErrorMessage';
import FavoriteButton from './components/FavoriteButton';
import MunicipalitySelect from './components/MunicipalitySelect';
import './App.css';

function App() {
  const [selectedMunicipality, setSelectedMunicipality] = useState(null);
  const [companyList, setCompanyList] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (selectedMunicipality) {
      // API呼び出しで企業リストを取得
      fetchCompanies(selectedMunicipality)
        .then(setCompanyList)
        .catch((err) => setError("企業情報の取得に失敗しました"));
    }
  }, [selectedMunicipality]);

  function handleMunicipalitySelect(municipality) {
    setSelectedMunicipality(municipality);
  }

  function handleCompanyClick(company) {
    setSelectedCompany(company);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  function handleToggleFavorite(company) {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(company)
        ? prevFavorites.filter((fav) => fav !== company)
        : [...prevFavorites, company]
    );
  }

  return (
    <>
      <MunicipalitySelect onSelect={handleMunicipalitySelect} />
      {error && <ErrorMessage message={error} />}
      <CompanyList companies={companyList} onCompanyClick={handleCompanyClick} />
      <CompanyDetailModal company={selectedCompany} isOpen={isModalOpen} onClose={handleCloseModal} />
      <FavoriteButton company={selectedCompany} isFavorited={favorites.includes(selectedCompany)} onToggleFavorite={handleToggleFavorite} />
    </>
  );
}

export default App;
