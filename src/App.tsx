import React, { useEffect, useState } from 'react';

import {Filters} from './components/Filters';
import { NavBar } from './components/Navbar';
import { Companies } from './components/Companies';
import { Input } from './components/Input';
import Data from "./DATA/companies.json";

type Filter = {
  inactive: boolean,
  is_branch: boolean,
  company_size: string,
};

export default function App() {
  const [companies, setCompanies] = useState(Data);
  const [filteredData, setFiltered] = useState(companies);
  const [word, setWord] = useState("");
  const [filters, setFilters]= useState<Filter>({
    inactive: false,
    is_branch: false,
    company_size: "small"
  });
  
  function changeCompanies(filters: Filter)
  {
    setFiltered(() => {
      return (
        companies.filter(company => company.inactive === filters.inactive 
          && company.is_branch === filters.is_branch 
          && company.company_size === filters.company_size)
      )
    })
  }

  function changeFilter(word: string)
  {
    let re = new RegExp(word, 'gi')
    setCompanies((word) => {
      return (
        Data.filter(company => company.name.match(re))
      )
    }) 
  }

  useEffect(() => {
    changeCompanies(filters);
    if(word !== ""){changeFilter(word)}
  }, [filters, word])
  return (
    <div className="container">
      <NavBar/>
      <div className="filterAndCompany">
        <Filters filters={filters} setFilters={setFilters}/>
        <div>
          <Input setWord={setWord}/>
          <Companies data={filteredData}/>
        </div>
      </div>
    </div>
  )
}