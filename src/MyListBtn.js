import React from 'react';

function MyListBtn({icon, title}) {
    return (
        <div className={`flex p-10p border border-2p border-primary w-1/3 items-center`}>
            <div className={`flex gap-10p mx-auto`}>
                <img src={icon} alt={title} />
                <div className={`flex flex-col items-center`}>
                    <span>{title}</span>
                    <div className={`border border-primary w-full`}></div>
                </div>
            </div>
        </div>
    );
}

export default MyListBtn;
