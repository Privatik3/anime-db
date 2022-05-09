import React from 'react';

function Stats({stats}) {
    return (
        <div className={`flex gap-10p`}>
            <div className={`flex flex-col gap-10p p-10p border border-2p border-primary w-1/3`}>
                <div className={`flex flex-col w-full text-center`}>
                    <span>Score/Rank By</span>
                    <div className={`border border-primary w-full`}></div>
                </div>
                <div className={`flex flex-col`}>
                    <div className={`flex justify-between`}>
                        <span className={`text-[12px]`}>Rating</span>
                        <span className={`text-[12px] font-normal`}>{stats.score.rating}</span>
                    </div>
                    <div className={`flex justify-between gap-[5px]`}>
                        <span className={`text-[12px]`}>Popularity</span>
                        <span className={`text-[12px] font-normal`}>{stats.score.popularity}</span>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col gap-10p p-10p border border-2p border-primary w-1/3`}>
                <div className={`flex flex-col w-full text-center`}>
                    <span>Favourites/Rec.</span>
                    <div className={`border border-primary w-full`}></div>
                </div>
                <div className={`flex flex-col`}>
                    <div className={`flex justify-between`}>
                        <span className={`text-[12px]`}>Favourites</span>
                        <span className={`text-[12px] font-normal`}>{stats.favorites.favorites}</span>
                    </div>
                    <div className={`flex justify-between gap-[5px]`}>
                        <span className={`text-[12px]`}>Recommended</span>
                        <span className={`text-[12px] font-normal`}>{stats.favorites.recommended}</span>
                    </div>
                </div>
            </div>

            <div className={`flex flex-col gap-10p p-10p border border-2p border-primary w-1/3`}>
                <div className={`flex flex-col w-full text-center`}>
                    <span>Running Time</span>
                    <div className={`border border-primary w-full`}></div>
                </div>
                <div className={`flex flex-col text-center`}>
                    <span className={`text-[12px] font-normal`}>{stats.running}</span>
                </div>
            </div>
        </div>
    );
}

export default Stats;
