import React from 'react'

export const NavBar: React.FC = () => {
    return (
    <div className="navBar">
      <a className="logo" target="#" href="!#">Djan<span>bolotov</span></a>
      <div className="menu">
        <a className="menuLink" target="#" href="https://github.com/djanbolotov16">Проекты</a>
        <a className="menuLink" target="#" href="https://t.me/djanbolotov16">Мой телеграм</a>
      </div>
    </div>
    )
}