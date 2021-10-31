import React from 'react'

type Props = any;
export const Companies: React.FC<Props> = ({data}) => {
        
    if(data.length < 1)
    {
        return <h1 className="empty_data">Нету соответствующих данных(((</h1>
    }
    return (
        <div className="companies">
            {
            data.map((company: any, index: Number | any) => {
                return <div key={index}>
                    <div className="company">{company.name}</div>
                </div>
            })
            }
        </div>
    )
}
