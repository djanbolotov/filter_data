import React from 'react'

type Filter = any;
export const Filters: React.FC<Filter> = ({ setFilters}) => {
    return (
        <div className="filterContainer">
            <div onClick={() => setFilters((prev: any) => ({...prev, is_branch: false}))}>Юридические лица</div>
            <div onClick={() => setFilters((prev: any) => ({...prev, is_branch: true}))}>Филиалы</div>
            <div onClick={() => setFilters((prev: any) => ({...prev, inactive: false}))}>Действующие</div>
            <div onClick={() => setFilters((prev: any) => ({...prev, inactive: true}))}>Недействующие</div>
            <div onClick={() => setFilters((prev: any) => ({...prev, company_size: "large"}))}>Крупные предприятия</div> 
            <div onClick={() => setFilters((prev: any) => ({...prev, company_size: "medium"}))}>Среднее </div>
            <div onClick={() => setFilters((prev: any) => ({...prev, company_size: "small"}))}>Малые </div> 
        </div>
    )
}