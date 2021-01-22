import React from 'react'
import classNames from 'classnames';

export default React.memo(

    function Dropdown({ languages, isLanguageSelected }) {

        React.useEffect(() => {
            document.addEventListener('click', handleOutsideClick)
        }, [])

        const [dropdown, setDropDown] = React.useState(false)

        const [activeLanguage, setActiveLanguage] = React.useState('Язык')

        const menuRef = React.useRef();


        const toggleDropdownMenu = () => {
            setDropDown(!dropdown)
        }

        const handleOutsideClick = (event) => {
            if (!event.path.includes(menuRef.current)) {
                setDropDown(false)
            }
        }

        function selectLanguage(lang) {
            isLanguageSelected(true)
            setActiveLanguage(lang)
            setDropDown(false)
        }

        return (
            <div ref={menuRef} className="input-wrapper">
                <p className="input-title">Язык</p>
                <div className={classNames("dropdown", {
                    "dropdown-active": dropdown
                })}>
                    <div className={classNames("dropdown-placeholder", {
                        'unactive-language': activeLanguage === "Язык",
                        'active-language': activeLanguage === true,

                    })}>{activeLanguage}</div>
                    <div onClick={toggleDropdownMenu} className={"dropdown-btn"}>
                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8 6.58579L14.2929 0.292893C14.6834 
                            -0.0976311 15.3166 -0.0976311 15.7071
                            0.292893C16.0976 0.683418 16.0976
                            1.31658 15.7071 1.70711L8.70711 
                            8.70711C8.31658 9.09763 7.68342 
                            9.09763 7.29289 8.70711L0.292893 
                            1.70711C-0.0976311 1.31658 -0.0976311
                            0.683418 0.292893 0.292893C0.683418 
                            -0.0976311 1.31658 -0.0976311 1.70711
                            0.292893L8 6.58579Z"
                                fill="#0880AE" />
                        </svg>
                    </div>
                </div>
                {
                    dropdown &&
                    <div className="dropdown__list">
                        <ul className="dropdown__list-inner">
                            {
                                languages.map((lang, index) => {
                                    return (
                                        <li
                                            onClick={() => selectLanguage(lang)}
                                            className="dropdown__item"
                                            key={`${lang}__${index}`}
                                            id={index}
                                        >
                                            {lang}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
        )
    }


)




