import React from 'react'

type Filter = any;
export const Filters: React.FC<Filter> = ({filters, setFilters}) => {
    return (
        <div className="filterContainer">
            <div onClick={() => setFilters({...filters, is_branch: false})}>Юридические лица</div>
            <div onClick={() => setFilters({...filters, is_branch: true})}>Филиалы</div>
            <div onClick={() => setFilters({...filters, inactive: false})}>Действующие</div>
            <div onClick={() => setFilters({...filters, inactive: true})}>Недействующие</div>
            <div onClick={() => setFilters({...filters, company_size: "large"})}>Крупные предприятия</div> 
            <div onClick={() => setFilters({...filters, company_size: "medium"})}>Среднее </div>
            <div onClick={() => setFilters({...filters, company_size: "small"})}>Малые </div> 
        </div>
    )
}