// LIBS
import React, { useState } from 'react'
import './HomePage.css'
// Components
import FormCar from '../components/form/FormCar';
import FormCarCreate from '../components/form/FormCarCreate';


const HomePage = () => {
    // State
    const [content, setContent] = useState(<FormCar />);

    // Handlers
    const handleContent = (content_type) => {
        switch (content_type) {
            case 'create':
                setContent(<FormCarCreate />)
                break;
            case 'search':
                setContent(<FormCar />)
                break;
            default:
                break;
        }
    }

    return (
        <div className="section-hero">
            <div className="blank-space"></div>
            <ul className="navbar">
                <li className="navbar-item" onClick={() => handleContent('create')}>Create</li>
                <li className="navbar-item" onClick={() => handleContent('search')}>Search</li>
            </ul>

            <div className="content">
                <div className="content-form">
                    {content}
                </div>
                <div className="content-info">
                    <h1>Cars</h1>
                    <div className="line"></div>
                    <p>A car for every purse and purpose</p>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage