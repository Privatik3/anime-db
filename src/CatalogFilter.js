import React from 'react';
import CatalogItemGrid from "./CatalogItem";
import CatalogItemTable from "./CatalogItemTable";

function CatalogFilter({title, type, variants}) {
    return (
        <div className={`border border-primary w-[250px] rounded-sm flex p-2.5 justify-between flex-col gap-1`}>
        <span className={`text-primary mx-auto decoration-1 underline font-semibold text-xl`}>{title}</span>
            {
                variants.map((item, index) => {
                    return <div key={index} className={`flex gap-2.5 items-center label`}>
                        <input className={`hidden`} type="checkbox" id={`${type + index}`}></input>
                        <span className={`h-5 w-5 relative rounded-sm p-3p border-2 border-primary`}></span>
                        <label className={`text-primary`} htmlFor={`${type + index}`}>{item}</label>
                        </div>
                })
            }
    </div>
    );
}

export default CatalogFilter;