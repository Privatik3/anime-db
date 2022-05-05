import React from 'react';
import anime from "./resources/Anime.png";

function CatalogItem({item}) {
    return (
        <div className={`border-2 border-primary w-[270px] rounded-sm p-2 gap-2.5 flex flex-col pb-4`}>
            <div className={`flex gap-3`}>
                <div className={`flex shrink-0`}>
                    <img src={anime} alt="anime"/>
                </div>
                <div className={`flex flex-col grow gap-0.5 flex-col`}>
                                <span className={`text-[10px] text-primary font-semibold tracking-wider`}>
                                    {item.title}
                                    <hr className={`border-primary`}/>
                                </span>
                    <div className={`flex flex-col font-semibold text-primary text-primary text-8p`}>
                                    <span className={`text-[10px] tracking-wider`}>
                                        {item.arriveDate}
                                    </span>
                        <div className={`flex gap-1.5`}>
                            <div className={`flex flex-col`}>
                                {
                                    item.features.map((item, index)=> {
                                        return <span key={index}>{item.name}:</span>;
                                    })
                                }
                            </div>
                            <div className={`flex flex-col`}>
                                {
                                    item.features.map((item, index)=> {
                                        return <span key={index}>{item.value}</span>;
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <hr className={`border-primary`}/>
                    <div className={`flex flex-wrap gap-1 mt-1`}>

                        {
                            item.tags.map((item, index)=> {
                                return <button key={index} className={`text-8p bg-primary text-second pt-px pb-px px-0.5 rounded-sm`}>{item}</button>
                            })
                        }

                    </div>
                </div>
            </div>
            <hr className={`border-primary`}/>
            <span className={`text-8p text-primary font-semibold tracking-wider`}>
                                {item.description}
                                </span>

        </div>
    );
}

export default CatalogItem;
