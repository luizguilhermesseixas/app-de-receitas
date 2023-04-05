import React, { useContext, useEffect } from 'react';
import Itens from '../components/Itens';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { apiSearch } from '../services/API_SEARCH';
import AppContext from '../context/AppContext';

export default function Meals() {
  const { setApi } = useContext(AppContext);

  useEffect(() => {
    async function fetchData() {
      const response = await apiSearch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const magicNumber = 12;
      setApi(response.meals.slice(0, magicNumber));
    }
    fetchData();
  }, [setApi]);

  return (
    <>
      <Header />
      <Itens />
      <Footer />
    </>
  );
}
