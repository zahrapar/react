import React, { useEffect, useState } from 'react';

const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        if (newMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
        setIsDarkMode(newMode);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsDarkMode(true);
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

    return (
        <div  className="btn-toggle-switch">
            <span className="label">Dark mode</span>
            <label htmlFor="darkmode-switch" className="toggle-switch">
                <input
                    id="darkmode-switch"
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                />
                <span className="slider round"></span>
            </label>
        </div>
    );


    // return (
    //     <div id="darkmode-toggle-switch" className="btn-toggle-switch">
    //         <span className="label">Dark mode</span>
    //         <label htmlFor="darkmode-switch" className="toggle-switch">
    //             <input
    //                 id="darkmode-switch"
    //                 type="checkbox"
    //                 checked={isDarkMode}
    //                 onChange={toggleDarkMode}
    //             />
    //             <span className="slider round"></span>
    //         </label>
    //     </div>
    // );
};


export default DarkModeSwitch;

