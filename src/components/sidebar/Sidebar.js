import React, { useState } from 'react';
import "./sidebar.css"
/* ./表示当前路径下的文件，而../表示返回上一级目录*/
import NavLogo from "../../pics/nav_logo.png"

const Sidebar = () => {
    return (
        /* aside标签使内容独立于整体的一部分而不会受整体影响 a标签用来实现超链接*/
        <aside className='aside'>
            <a href="#home" className="nav__logo">
                <img src={ NavLogo } alt="" />
            </a>
            <nav className='nav'>
                <div className='nav__menu'>
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <div className="wrapper">
                                    <div className="rgb-split" data-text="标题">
                                        标题
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <div className="wrapper">
                                    <div className="rgb-split" data-text="离谱">
                                        离谱
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <div className="wrapper">
                                    <div className="rgb-split" data-text="离谱">
                                        离谱
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <div className="wrapper">
                                    <div className="rgb-split" data-text="离谱">
                                        离谱
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#home" className="nav__link">
                                <div className="wrapper">
                                    <div className="rgb-split" data-text="离谱">
                                        离谱
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

        </aside>
        )
}
export default Sidebar;