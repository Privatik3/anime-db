import React from 'react';
import Search from "./Search";
import {animeItem} from "./static_data";
import titleImg from "./resources/titleImg.jpg";
import Stats from "./Stats";
import MyListBtn from "./MyListBtn";
import heartIcon from "./resources/heart-icon.svg";
import watchIcon from "./resources/watch-icon.svg";
import dropIcon from "./resources/drop-icon.svg";

import gal1 from "./resources/gal_1.jpg";
import gal2 from "./resources/gal_2.jpg";
import gal3 from "./resources/gal_3.jpg";
import gal4 from "./resources/gal_4.jpg";
import Comment from "./Comment";

function ItemPage(props) {
    const galleryImgs = [gal1, gal2, gal3, gal4];
    return (
        <div
            className={`flex flex-col mx-auto w-[1150px] h-[2000px] font-mont text-primary text-[14px] font-semibold gap-10p`}>
            <Search title={`Anime: ${animeItem.title}`}/>
            <div className={`flex gap-10p mx-10p`}>
                {/*<img src={animeItem.titleImgUrl} alt={animeItem.title}/>*/}
                <img className={`w-[400px]`} src={titleImg} alt={animeItem.title}/>
                <div className={`flex flex-col border border-4 border-primary w-full p-10p gap-10p`}>

                    <div className={`flex flex-col gap-10p`}>
                        {
                            animeItem.features.map((item, index) => {
                                return (
                                    <div key={index} className={`flex h-fit w-full border-2 border-primary rounded-2p`}>
                                        <div
                                            className={`basis-[140px] shrink-0 bg-primary text-second pl-10p font-bold text-[16px] flex items-center`}>
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

                    <Stats stats={animeItem.stats}/>

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
                    {
                        galleryImgs.map((item, index) => {
                            return (
                                <div key={index} className={`border border-primary w-1/4`}>
                                    <img src={item} alt={`gal_${index}`}/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

            {/* Reviews */}
            <div className={`flex flex-col border border-4 border-primary mx-10p p-10p rounded-2p gap-10p`}>
                <div className={`flex flex-col gap-10p`}>

                    <div className={`flex flex-col`}>
                        <span className={`text-[20px] text-center`}>Reviews</span>
                        <div className={`flex flex-col gap-10p`}>
                            {
                                animeItem.comments.map((item, index)=>{
                                    return ( <Comment key={index} comment={item} /> )
                                })
                            }
                        </div>
                    </div>

                    {/* Give feedback */}
                    <div className={`flex flex-col`}>
                        <span className={`text-[20px] text-center`}>Give feedback</span>
                        <div className={`flex flex-col border border-2 border-primary rounded-2p`}>
                            <div contentEditable className={`flex w-full min-h-[150px] focus:border-none overflow-auto`}></div>
                            <div className={`flex flex-row-reverse gap-10p p-10p`}>
                                <div className={`flex px-[20px] py-[5px] rounded-2p bg-primary text-second text-[20px] cursor-pointer`}>Sing Up</div>
                                <div className={`flex items-end gap-[5px]`}>
                                    {
                                        (new Array(5).fill(1)).map((item, index)=>{
                                            return (
                                                <div key={index} className={`cursor-pointer`}>
                                                    <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_63_5)">
                                                            <path d="M26.2849 2.486L31.6919 13.442C32.0679 14.204 32.7949 14.732 33.6359 14.854L45.7269 16.611C47.8449 16.919 48.6899 19.521 47.1579 21.014L38.4089 29.542C37.8009 30.135 37.5229 30.99 37.6669 31.827L39.7319 43.869C40.0939 45.978 37.8799 47.586 35.9859 46.591L25.1719 40.906C24.4199 40.511 23.5209 40.511 22.7689 40.906L11.9549 46.591C10.0609 47.587 7.84688 45.978 8.20888 43.869L10.2739 31.827C10.4179 30.99 10.1399 30.135 9.53188 29.542L0.782879 21.014C-0.749121 19.52 0.0958788 16.918 2.21388 16.611L14.3049 14.854C15.1459 14.732 15.8729 14.204 16.2489 13.442L21.6559 2.486C22.6019 0.567003 25.3379 0.567003 26.2849 2.486Z" stroke={`#FA6166`} fill={`#FFF`}/>
                                                        </g>
                                                    </svg>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemPage;
