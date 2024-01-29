import './Header.css'
import { useState } from 'react';
import App from '../App';
import { Link } from 'react-router-dom';
import Catalog from '../pages/catalog/catalog';
export default function Header () {
    const [display, setDisplay] = useState('none');

  const toggleDisplay = () => {
    setDisplay((prevDisplay) => (prevDisplay === 'none' ? 'block' : 'none'));
  };
    return(
        <div className='navbar'>
            <div className='head'>
                <div className='divider'>
                    <a href='/'>
                        <h1 className='logo'>LuxeLooms</h1>
                    </a>
                </div>
                <div className='nav'>
                    <div className='nn'>
                        <h1>ENG</h1>
                        <div className='wrapper'></div>
                        <svg xmlns="http://www.w3.org/2000/svg" className='resp' width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <mask id="mask0_104_4757" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_104_4757)">
                            <path d="M12 22C10.6333 22 9.34167 21.7375 8.125 21.2125C6.90833 20.6875 5.84583 19.9708 4.9375 19.0625C4.02917 18.1542 3.3125 17.0917 2.7875 15.875C2.2625 14.6583 2 13.3667 2 12C2 10.6167 2.2625 9.32083 2.7875 8.1125C3.3125 6.90417 4.02917 5.84583 4.9375 4.9375C5.84583 4.02917 6.90833 3.3125 8.125 2.7875C9.34167 2.2625 10.6333 2 12 2C13.3833 2 14.6792 2.2625 15.8875 2.7875C17.0958 3.3125 18.1542 4.02917 19.0625 4.9375C19.9708 5.84583 20.6875 6.90417 21.2125 8.1125C21.7375 9.32083 22 10.6167 22 12C22 13.3667 21.7375 14.6583 21.2125 15.875C20.6875 17.0917 19.9708 18.1542 19.0625 19.0625C18.1542 19.9708 17.0958 20.6875 15.8875 21.2125C14.6792 21.7375 13.3833 22 12 22ZM12 19.95C12.4333 19.35 12.8083 18.725 13.125 18.075C13.4417 17.425 13.7 16.7333 13.9 16H10.1C10.3 16.7333 10.5583 17.425 10.875 18.075C11.1917 18.725 11.5667 19.35 12 19.95ZM9.4 19.55C9.1 19 8.8375 18.4292 8.6125 17.8375C8.3875 17.2458 8.2 16.6333 8.05 16H5.1C5.58333 16.8333 6.1875 17.5583 6.9125 18.175C7.6375 18.7917 8.46667 19.25 9.4 19.55ZM14.6 19.55C15.5333 19.25 16.3625 18.7917 17.0875 18.175C17.8125 17.5583 18.4167 16.8333 18.9 16H15.95C15.8 16.6333 15.6125 17.2458 15.3875 17.8375C15.1625 18.4292 14.9 19 14.6 19.55ZM4.25 14H7.65C7.6 13.6667 7.5625 13.3375 7.5375 13.0125C7.5125 12.6875 7.5 12.35 7.5 12C7.5 11.65 7.5125 11.3125 7.5375 10.9875C7.5625 10.6625 7.6 10.3333 7.65 10H4.25C4.16667 10.3333 4.10417 10.6625 4.0625 10.9875C4.02083 11.3125 4 11.65 4 12C4 12.35 4.02083 12.6875 4.0625 13.0125C4.10417 13.3375 4.16667 13.6667 4.25 14ZM9.65 14H14.35C14.4 13.6667 14.4375 13.3375 14.4625 13.0125C14.4875 12.6875 14.5 12.35 14.5 12C14.5 11.65 14.4875 11.3125 14.4625 10.9875C14.4375 10.6625 14.4 10.3333 14.35 10H9.65C9.6 10.3333 9.5625 10.6625 9.5375 10.9875C9.5125 11.3125 9.5 11.65 9.5 12C9.5 12.35 9.5125 12.6875 9.5375 13.0125C9.5625 13.3375 9.6 13.6667 9.65 14ZM16.35 14H19.75C19.8333 13.6667 19.8958 13.3375 19.9375 13.0125C19.9792 12.6875 20 12.35 20 12C20 11.65 19.9792 11.3125 19.9375 10.9875C19.8958 10.6625 19.8333 10.3333 19.75 10H16.35C16.4 10.3333 16.4375 10.6625 16.4625 10.9875C16.4875 11.3125 16.5 11.65 16.5 12C16.5 12.35 16.4875 12.6875 16.4625 13.0125C16.4375 13.3375 16.4 13.6667 16.35 14ZM15.95 8H18.9C18.4167 7.16667 17.8125 6.44167 17.0875 5.825C16.3625 5.20833 15.5333 4.75 14.6 4.45C14.9 5 15.1625 5.57083 15.3875 6.1625C15.6125 6.75417 15.8 7.36667 15.95 8ZM10.1 8H13.9C13.7 7.26667 13.4417 6.575 13.125 5.925C12.8083 5.275 12.4333 4.65 12 4.05C11.5667 4.65 11.1917 5.275 10.875 5.925C10.5583 6.575 10.3 7.26667 10.1 8ZM5.1 8H8.05C8.2 7.36667 8.3875 6.75417 8.6125 6.1625C8.8375 5.57083 9.1 5 9.4 4.45C8.46667 4.75 7.6375 5.20833 6.9125 5.825C6.1875 6.44167 5.58333 7.16667 5.1 8Z" fill="white"/>
                            </g>
                        </svg>
                    </div>
                    <div className='svgs'>
                        <a href='/cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <mask id="mask0_104_4761" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_104_4761)">
                                <path d="M12 21L10.55 19.7C8.86667 18.1834 7.475 16.875 6.375 15.775C5.275 14.675 4.4 13.6875 3.75 12.8125C3.1 11.9375 2.64583 11.1334 2.3875 10.4C2.12917 9.66669 2 8.91669 2 8.15002C2 6.58336 2.525 5.27502 3.575 4.22502C4.625 3.17502 5.93333 2.65002 7.5 2.65002C8.36667 2.65002 9.19167 2.83336 9.975 3.20002C10.7583 3.56669 11.4333 4.08336 12 4.75002C12.5667 4.08336 13.2417 3.56669 14.025 3.20002C14.8083 2.83336 15.6333 2.65002 16.5 2.65002C18.0667 2.65002 19.375 3.17502 20.425 4.22502C21.475 5.27502 22 6.58336 22 8.15002C22 8.91669 21.8708 9.66669 21.6125 10.4C21.3542 11.1334 20.9 11.9375 20.25 12.8125C19.6 13.6875 18.725 14.675 17.625 15.775C16.525 16.875 15.1333 18.1834 13.45 19.7L12 21ZM12 18.3C13.6 16.8667 14.9167 15.6375 15.95 14.6125C16.9833 13.5875 17.8 12.6959 18.4 11.9375C19 11.1792 19.4167 10.5042 19.65 9.91252C19.8833 9.32086 20 8.73336 20 8.15002C20 7.15002 19.6667 6.31669 19 5.65002C18.3333 4.98336 17.5 4.65002 16.5 4.65002C15.7167 4.65002 14.9917 4.87086 14.325 5.31252C13.6583 5.75419 13.2 6.31669 12.95 7.00002H11.05C10.8 6.31669 10.3417 5.75419 9.675 5.31252C9.00833 4.87086 8.28333 4.65002 7.5 4.65002C6.5 4.65002 5.66667 4.98336 5 5.65002C4.33333 6.31669 4 7.15002 4 8.15002C4 8.73336 4.11667 9.32086 4.35 9.91252C4.58333 10.5042 5 11.1792 5.6 11.9375C6.2 12.6959 7.01667 13.5875 8.05 14.6125C9.08333 15.6375 10.4 16.8667 12 18.3Z" fill="white"/>
                                </g>
                            </svg>
                        </a>
                        <a href='/cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <mask id="mask0_104_4762" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                    <rect width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_104_4762)">
                                    <path d="M4 17V19H20V17H4ZM4 6H6.2C6.11667 5.85 6.0625 5.69167 6.0375 5.525C6.0125 5.35833 6 5.18333 6 5C6 4.16667 6.29167 3.45833 6.875 2.875C7.45833 2.29167 8.16667 2 9 2C9.5 2 9.9625 2.12917 10.3875 2.3875C10.8125 2.64583 11.1833 2.96667 11.5 3.35L12 4L12.5 3.35C12.8 2.95 13.1667 2.625 13.6 2.375C14.0333 2.125 14.5 2 15 2C15.8333 2 16.5417 2.29167 17.125 2.875C17.7083 3.45833 18 4.16667 18 5C18 5.18333 17.9875 5.35833 17.9625 5.525C17.9375 5.69167 17.8833 5.85 17.8 6H20C20.55 6 21.0208 6.19583 21.4125 6.5875C21.8042 6.97917 22 7.45 22 8V19C22 19.55 21.8042 20.0208 21.4125 20.4125C21.0208 20.8042 20.55 21 20 21H4C3.45 21 2.97917 20.8042 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V8C2 7.45 2.19583 6.97917 2.5875 6.5875C2.97917 6.19583 3.45 6 4 6ZM4 14H20V8H14.9L17 10.85L15.4 12L12 7.4L8.6 12L7 10.85L9.05 8H4V14ZM9 6C9.28333 6 9.52083 5.90417 9.7125 5.7125C9.90417 5.52083 10 5.28333 10 5C10 4.71667 9.90417 4.47917 9.7125 4.2875C9.52083 4.09583 9.28333 4 9 4C8.71667 4 8.47917 4.09583 8.2875 4.2875C8.09583 4.47917 8 4.71667 8 5C8 5.28333 8.09583 5.52083 8.2875 5.7125C8.47917 5.90417 8.71667 6 9 6ZM15 6C15.2833 6 15.5208 5.90417 15.7125 5.7125C15.9042 5.52083 16 5.28333 16 5C16 4.71667 15.9042 4.47917 15.7125 4.2875C15.5208 4.09583 15.2833 4 15 4C14.7167 4 14.4792 4.09583 14.2875 4.2875C14.0958 4.47917 14 4.71667 14 5C14 5.28333 14.0958 5.52083 14.2875 5.7125C14.4792 5.90417 14.7167 6 15 6Z" fill="white"/>
                                </g>
                            </svg>
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <mask id="mask0_104_4763" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_104_4763)">
                                <path d="M5.85 17.1C6.7 16.45 7.65 15.9375 8.7 15.5625C9.75 15.1875 10.85 15 12 15C13.15 15 14.25 15.1875 15.3 15.5625C16.35 15.9375 17.3 16.45 18.15 17.1C18.7333 16.4167 19.1875 15.6417 19.5125 14.775C19.8375 13.9083 20 12.9833 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 12.9833 4.1625 13.9083 4.4875 14.775C4.8125 15.6417 5.26667 16.4167 5.85 17.1ZM12 13C11.0167 13 10.1875 12.6625 9.5125 11.9875C8.8375 11.3125 8.5 10.4833 8.5 9.5C8.5 8.51667 8.8375 7.6875 9.5125 7.0125C10.1875 6.3375 11.0167 6 12 6C12.9833 6 13.8125 6.3375 14.4875 7.0125C15.1625 7.6875 15.5 8.51667 15.5 9.5C15.5 10.4833 15.1625 11.3125 14.4875 11.9875C13.8125 12.6625 12.9833 13 12 13ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C12.8833 20 13.7167 19.8708 14.5 19.6125C15.2833 19.3542 16 18.9833 16.65 18.5C16 18.0167 15.2833 17.6458 14.5 17.3875C13.7167 17.1292 12.8833 17 12 17C11.1167 17 10.2833 17.1292 9.5 17.3875C8.71667 17.6458 8 18.0167 7.35 18.5C8 18.9833 8.71667 19.3542 9.5 19.6125C10.2833 19.8708 11.1167 20 12 20ZM12 11C12.4333 11 12.7917 10.8583 13.075 10.575C13.3583 10.2917 13.5 9.93333 13.5 9.5C13.5 9.06667 13.3583 8.70833 13.075 8.425C12.7917 8.14167 12.4333 8 12 8C11.5667 8 11.2083 8.14167 10.925 8.425C10.6417 8.70833 10.5 9.06667 10.5 9.5C10.5 9.93333 10.6417 10.2917 10.925 10.575C11.2083 10.8583 11.5667 11 12 11Z" fill="white"/>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='dividerwrapper'></div>
            <div className='secondd'>
                <div className='child' onClick={toggleDisplay}>                     
                    <h1 onClick={toggleDisplay}>Clothing</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <mask id="mask0_104_4785" style={{maskType: 'alpha', width: '24px', height: '24px'}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                            <rect x="0.333252" y="0.5" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_104_4785)">
                            <path d="M12.3333 15.875L6.33325 9.87498L7.73325 8.47498L12.3333 13.075L16.9333 8.47498L18.3333 9.87498L12.3333 15.875Z" fill="white"/>
                        </g>
                    </svg>
                </div>
                <div className='child'onClick={toggleDisplay}>
                    <h1>New arrivals</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <mask id="mask0_104_4785" style={{maskType: 'alpha', width: '24px', height: '24px'}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                            <rect x="0.333252" y="0.5" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_104_4785)">
                            <path d="M12.3333 15.875L6.33325 9.87498L7.73325 8.47498L12.3333 13.075L16.9333 8.47498L18.3333 9.87498L12.3333 15.875Z" fill="white"/>
                        </g>
                    </svg>
                </div>
                <div className='child' onClick={toggleDisplay}>
                    <h1>Brands</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <mask id="mask0_104_4785" style={{maskType: 'alpha', width: '24px', height: '24px'}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                            <rect x="0.333252" y="0.5" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_104_4785)">
                            <path d="M12.3333 15.875L6.33325 9.87498L7.73325 8.47498L12.3333 13.075L16.9333 8.47498L18.3333 9.87498L12.3333 15.875Z" fill="white"/>
                        </g>
                    </svg>
                </div>
                <div className='child' onClick={toggleDisplay}>
                    <h1>Shoes</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <mask id="mask0_104_4785" style={{maskType: 'alpha', width: '24px', height: '24px'}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                            <rect x="0.333252" y="0.5" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_104_4785)">
                            <path d="M12.3333 15.875L6.33325 9.87498L7.73325 8.47498L12.3333 13.075L16.9333 8.47498L18.3333 9.87498L12.3333 15.875Z" fill="white"/>
                        </g>
                    </svg>
                </div>
                <div className='child' onClick={toggleDisplay}>
                    <h1>Bags</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <mask id="mask0_104_4785" style={{maskType: 'alpha', width: '24px', height: '24px'}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                            <rect x="0.333252" y="0.5" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_104_4785)">
                            <path d="M12.3333 15.875L6.33325 9.87498L7.73325 8.47498L12.3333 13.075L16.9333 8.47498L18.3333 9.87498L12.3333 15.875Z" fill="white"/>
                        </g>
                    </svg>
                </div>
                <div className='child' onClick={toggleDisplay}>
                    <h1>Accecories</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <mask id="mask0_104_4785" style={{maskType: 'alpha', width: '24px', height: '24px'}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                            <rect x="0.333252" y="0.5" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_104_4785)">
                            <path d="M12.3333 15.875L6.33325 9.87498L7.73325 8.47498L12.3333 13.075L16.9333 8.47498L18.3333 9.87498L12.3333 15.875Z" fill="white"/>
                        </g>
                    </svg>
                </div>
                <div className='child' onClick={toggleDisplay}>
                    <h1>Sale</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <mask id="mask0_104_4785" style={{maskType: 'alpha', width: '24px', height: '24px'}} maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
                            <rect x="0.333252" y="0.5" width="24" height="24" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_104_4785)">
                            <path d="M12.3333 15.875L6.33325 9.87498L7.73325 8.47498L12.3333 13.075L16.9333 8.47498L18.3333 9.87498L12.3333 15.875Z" fill="white"/>
                        </g>
                    </svg>
                </div>
            </div>
            <div className='hidden' style={{display: display}}>
                <div className="clothes">
                    <div className="lists">
                        <ul className='firstul'>
                            <li><a href="/products"> Tops </a></li> 
                            <li><a href="/products">Beachwear</a></li>
                            <li><a href="/products">Coats</a></li>
                            <li><a href="/products">Denim</a></li>
                            <li><a href="/products">Jackets</a></li>
                            <li><a href="/products">Knitwear</a></li>
                            <li><a href="/products">Lingerie</a></li>
                            <li><a href="/products">Skirts</a></li>
                            <li><a href="/products">Tops</a></li>
                            <li><a href="/products">Trousers</a></li>
                        </ul>
                        <ul className='secondul'>
                            <li><a href="/products">Dresses</a></li>
                            <li><a href="/products">Beachwear</a></li>
                            <li><a href="/products">Coats</a></li>
                            <li><a href="/products">Denim</a></li>
                            <li><a href="/products">Jackets</a></li>
                            <li><a href="/products">Lingeri</a></li>
                        </ul>
                        <ul className='secondul'>
                            <li><a href="/products">Dresses</a></li>
                            <li><a href="/products">Beachwear</a></li>
                            <li><a href="/products">Coats</a></li>
                            <li><a href="/products">Denim</a></li>
                            <li><a href="/products">Jackets</a></li>
                            <li><a href="/products">Lingerie</a></li>
                        </ul>
                    </div>
                    <div className="imagedivider"></div>
                </div>
            </div>
        </div>
    )
}