import React from 'react';

function Search({title}) {
    return (
        <div className={`flex h-10 items-center justify-between items-end bg-primary px-1.5`}>
                <span className={`text-xl text-second`}>
                    {title}
                </span>

            <form className={`flex`}>
                <input className={`border-second border-2 border-r-0 rounded-l-sm h-7 w-64`} type="search" name="q"/>
                <button className={`border-second border-2 bg-primary h-7 w-7`}>
                    <svg className={`mx-auto`} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.85231 0.738852C3.59977 1.47452 2.70372 2.66258 2.32942 4.08388C1.95504 5.50519 2.14724 6.98983 2.87034 8.26415C3.83481 9.9636 5.63316 11.0194 7.56378 11.0194C8.17337 11.0194 8.77822 10.9126 9.35162 10.7078L11.7874 15L13.5241 13.9798L11.0888 9.68832C11.9114 8.97223 12.5037 8.02249 12.79 6.93548C13.1643 5.51417 12.9721 4.02961 12.249 2.75521C11.2846 1.05576 9.48615 0 7.5556 0C6.60998 0 5.67519 0.255452 4.85231 0.738852ZM10.5122 3.77538C10.9676 4.57773 11.0885 5.51254 10.8528 6.40743C10.6172 7.30233 10.053 8.05032 9.26435 8.51356C8.74597 8.81807 8.15789 8.97901 7.56378 8.97901C6.34743 8.97901 5.21449 8.31418 4.60716 7.24398C4.15183 6.44163 4.03086 5.5069 4.26663 4.61193C4.50231 3.71703 5.06649 2.96904 5.85512 2.50571C6.37342 2.20129 6.9615 2.04035 7.5556 2.04035C8.77204 2.04035 9.90489 2.70518 10.5122 3.77538Z" fill="#FCE77E"/>
                    </svg>
                </button>
            </form>


        </div>
    );
}

export default Search;
