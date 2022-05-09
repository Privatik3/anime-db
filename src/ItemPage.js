import React from 'react';
import Search from "./Search";
import {animeItem} from "./static_data";
import titleImg from "./resources/titleImg.jpg";
import Stats from "./Stats";
import MyListBtn from "./MyListBtn";
import heartIcon from "./resources/heart-icon.svg";
import watchIcon from "./resources/watch-icon.svg";
import dropIcon from "./resources/drop-icon.svg";


function ItemPage(props) {
    return (
        <div className={`flex flex-col mx-auto w-[1150px] h-[2000px] font-mont text-primary text-[14px] font-semibold gap-10p`}>
            <Search title={`Anime: ${animeItem.title}`} />
            <div className={`flex gap-10p mx-10p`}>
                {/*<img src={animeItem.titleImgUrl} alt={animeItem.title}/>*/}
                <img className={`w-[400px]`} src={titleImg} alt={animeItem.title}/>
                <div className={`flex flex-col border border-4 border-primary w-full p-10p gap-10p`}>

                    <div className={`flex flex-col gap-10p`}>
                        {
                            animeItem.features.map((item, index)=>{
                                return (
                                    <div key={index} className={`flex h-fit w-full border-2 border-primary rounded-2p`}>
                                        <div className={`basis-[140px] shrink-0 bg-primary text-second pl-10p font-bold text-[16px] flex items-center`} >
                                            {item.name}
                                        </div>
                                        <div className={`pl-10p flex items-center`}>{item.value}</div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={`flex flex-col`}>
                        <span className={`text-[16px] font-bold`}>Statistics</span>
                        <div className={`border border-2p border-primary w-full`}></div>
                    </div>

                    <Stats stats={animeItem.stats} />

                    <div className={`flex gap-10p`}>
                        <MyListBtn icon={heartIcon} title={`Add to favorites`}/>
                        <MyListBtn icon={watchIcon} title={`Watch Later`}/>
                        <MyListBtn icon={dropIcon} title={`Dropped`}/>
                    </div>

                </div>
            </div>

            {/* Hr */}
            <div className={`border border-2 border-primary mx-10p`}></div>

            {/* Description */}
            <div className={`border border-4 border-primary mx-10p p-10p rounded-2p`}>
                {animeItem.description}
            </div>

            {/* Image Gallery */}
            <div className={`flex flex-col border border-4 border-primary mx-10p p-10p rounded-2p gap-10p`}>
                <div className={`flex flex-col items-center`}>
                    <span className={`text-[20px]`}>Image Gallery</span>
                    <div className={`border border-primary w-full`}></div>
                </div>
                <div className={`flex gap-10p`}>
                    <div className={`border border-primary w-1/4`}></div>
                </div>
            </div>
        </div>
    );
}

export default ItemPage;
