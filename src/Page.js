import React, {useState, useEffect} from 'react';
import {animePage, catalogItems} from "./static_data";
import logo from "./resources/Logo.png";
import anime from "./resources/Anime.png";
import CatalogItemGrid from "./CatalogItem";
import CatalogItemTable from "./CatalogItemTable";

function Page(props) {
    const [animeData, setAnimeData] = useState({});
    const [catalogItemsData, setCatalogItemsData] = useState([]);
    const [isDisplayGrid, setDisplayGrid] = useState(true);

    useEffect(() => {
        setAnimeData(animePage);
        setCatalogItemsData(catalogItems);
    }, []);

    return (

        <div className={`flex flex-col w-[1150px] mx-auto font-mont gap-4`}>

            <div className={`flex justify-between items-end`}>
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className={`gap-5 flex`}>
                    <button className="login border-4 border-primary w-32 h-10 text-xl font-semibold text-primary rounded-sm">Login</button>
                    <button className="registration border-4 bg-primary border-primary w-32 h-10 text-xl text-second rounded-sm">Sing Up</button>
                </div>
            </div>

            <div className={`flex h-10 items-center justify-between items-end bg-primary px-1.5`}>
                <span className={`text-xl text-second`}>
                    Anime list
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

            <div className={`flex h-30p items-center justify-between items-end`}>

                <button className="flex justify-center h-30p items-center border-4 bg-primary border-primary w-28 h-10 text-second rounded-sm">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.7053 6.87506V8.12506H4.68758L6.71413 10.1516L5.83027 11.0355L2.29474 7.5L5.83027
                    3.96446L6.71413 4.84834L4.68743 6.87506H12.7053Z" fill="#FCE77E"/>
                    </svg>
                    &#160;Previous</button>
                <div className={`flex gap-5`}>
                    <div className={`flex gap-2.5`}>
                        <div onClick={()=>setDisplayGrid(true)}
                             className={`${isDisplayGrid ? `bg-second border-primary` : `bg-primary border-second`} cursor-pointer border-2 h-30p w-30p items-center flex justify-center`}>
                            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path fill={isDisplayGrid ? "#FA6166" : "#FCE77E"} d="M6.34091 9.81818C7.35761 9.81818 8.18182 10.6424 8.18182 11.6591V16.1591C8.18182 17.1758 7.35761 18 6.34091 18H1.84091C0.824203 18 0 17.1758 0 16.1591V11.6591C0 10.6424 0.824203 9.81818 1.84091 9.81818H6.34091ZM16.1591 9.81818C17.1758 9.81818 18 10.6424 18 11.6591V16.1591C18 17.1758 17.1758 18 16.1591 18H11.6591C10.6424 18 9.81818 17.1758 9.81818 16.1591V11.6591C9.81818 10.6424 10.6424 9.81818 11.6591 9.81818H16.1591ZM6.34091 0C7.35761 0 8.18182 0.824203 8.18182 1.84091V6.34091C8.18182 7.35761 7.35761 8.18182 6.34091 8.18182H1.84091C0.824203 8.18182 0 7.35761 0 6.34091V1.84091C0 0.824203 0.824203 0 1.84091 0H6.34091ZM16.1591 0C17.1758 0 18 0.824203 18 1.84091V6.34091C18 7.35761 17.1758 8.18182 16.1591 8.18182H11.6591C10.6424 8.18182 9.81818 7.35761 9.81818 6.34091V1.84091C9.81818 0.824203 10.6424 0 11.6591 0H16.1591Z"/>
                            </svg>
                        </div>
                        <div onClick={()=>setDisplayGrid(false)} className={`cursor-pointer text-sm bg-primary text-second border-primary border-2 h-30p w-30p items-center flex justify-center`}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3H20V5H0V3ZM0 7H20V9H0V7ZM0 11H20V13H0V11ZM0 15H20V17H0V15Z" fill="#FCE77E"/>
                            </svg>
                        </div>
                    </div>
                    <div className={`flex gap-2.5`}>
                        <div className={`cursor-pointer text-sm bg-primary text-second border-primary border-2 h-30p w-30p items-center flex justify-center`}>All</div>
                        <div className={`cursor-pointer text-sm bg-primary text-second border-primary border-2 h-30p w-30p items-center flex justify-center`}>0-9</div>
                        <div className={`cursor-pointer text-sm bg-primary text-second border-primary border-2 h-30p w-30p items-center flex justify-center`}>A</div>
                        <div className={`cursor-pointer text-sm bg-second text-primary decoration-1 underline font-semibold border-primary border-2 h-30p w-30p items-center flex justify-center`}>B</div>
                        <div className={`cursor-pointer text-sm bg-primary text-second border-primary border-2 h-30p w-30p items-center flex justify-center`}>C</div>
                        <div className={`cursor-pointer text-sm bg-primary text-second border-primary border-2 h-30p w-30p items-center flex justify-center`}>D</div>
                        <div className={`cursor-pointer text-sm bg-second text-primary decoration-1 underline font-semibold border-primary border-2 h-30p w-30p items-center flex justify-center`}>E</div>
                        <div className={`cursor-pointer text-sm bg-primary text-second border-primary border-2 h-30p w-30p items-center flex justify-center`}>F</div>
                        <div className={`cursor-pointer text-sm bg-primary text-second border-primary border-2 h-30p w-30p items-center flex justify-center`}>G</div>
                        <div className={`cursor-pointer text-sm bg-primary text-second border-primary border-2 h-30p w-30p items-center flex justify-center`}>H</div>
                        <div className={`cursor-pointer text-sm bg-primary text-second border-primary border-2 h-30p w-[60px] items-center flex justify-center`}>Other</div>
                    </div>
                </div>
                <button className="flex justify-center h-30p items-center border-4 bg-primary border-primary w-28 h-10 text-second rounded-sm">
                    Next&#160;
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.2948 8.12494V6.87494L10.3125 6.87494L8.28593 4.84837L9.16979 3.9645L12.7053 7.5L9.16979
                    11.0355L8.28593 10.1517L10.3126 8.12494H2.2948Z" fill="#FCE77E"/></svg>
                </button>

            </div>

            <div className={`flex`}>
                <div className={`w-3/4 flex gap-5 flex-wrap`}>
                    {
                        catalogItemsData.map((item, index) => {
                            if (isDisplayGrid)
                                return <CatalogItemGrid key={index} item={item} />;
                            else
                                return <CatalogItemTable key={index} item={item} />;
                        })
                    }
                </div>


                <div className={`w-1/4`}>
                    <div className={`border-2 border-primary w-[270px] rounded-sm p-2 gap-2.5 flex flex-col ml-auto`}>
                        <div className={`border border-primary w-[250px] rounded-sm flex py-2.5 px-4 justify-between `}>
                            <div className={`leading-3 cursor-pointer text-sm bg-primary text-second border-primary border-2 items-center flex justify-center py-1.5 px-2.5`}>
                                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5606 2.60524L6.64752 10.5178C6.06154 11.1039 5.11099 11.1039 4.52446 10.5178L0.439649 6.43271C-0.14655 5.84662 -0.14655 4.89596 0.439649 4.30976C1.02596 3.72345 1.97643 3.72345 2.56248 4.30954L5.5863 7.3334L12.4375 0.482184C13.0238 -0.104126 13.9743 -0.103682 14.5604 0.482184C15.1465 1.06838 15.1465 2.01871 14.5606 2.60524Z" fill="#FCE77E"/>
                                </svg>
                                &#160;Apply Filter
                            </div>
                            <div className={`leading-3 cursor-pointer text-sm bg-primary text-second border-primary border-2 items-center flex justify-center py-1.5 px-2.5`}>
                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.85355 0.146453C3.04882 0.341713 3.04882 0.658292 2.85355 0.853552L1.70711 2H7C9.4853 2 11.5 4.01472 11.5 6.5C11.5 8.9853 9.4853 11 7 11H3C2.72386 11 2.5 10.7761 2.5 10.5C2.5 10.2239 2.72386 10 3 10H7C8.933 10 10.5 8.433 10.5 6.5C10.5 4.567 8.933 3 7 3H1.70711L2.85355 4.14645C3.04882 4.34171 3.04882 4.65829 2.85355 4.85355C2.65829 5.04882 2.34171 5.04882 2.14645 4.85355L0.146453 2.85355C-0.0488175 2.65829 -0.0488175 2.34171 0.146453 2.14645L2.14645 0.146453C2.34171 -0.0488175 2.65829 -0.0488175 2.85355 0.146453Z" fill="#FCE77E"/>
                                </svg>
                                &#160;Reset
                            </div>
                        </div>

                        <span className="text-primary">Filter
                            <hr className="border-primary"></hr>
                        </span>

                        <div className={`border border-primary w-[250px] rounded-sm flex p-2.5 justify-between flex-col gap-1`}>
                            <span className={`text-primary mx-auto decoration-1 underline font-semibold text-xl`}>Airing Status</span>
                            <div className={`flex gap-2.5 items-center label`}>
                                <input className={`hidden`} type="checkbox" id="filter0"></input>
                                <span className={`h-5 w-5 relative rounded-sm p-[3px] border-2 border-primary`}></span>
                                <label className={`text-primary`} htmlFor="filter0">ignore</label>
                            </div>
                            <div className={`flex gap-2.5 items-center label`}>
                                <input className={`hidden`} type="checkbox" id="filter1"></input>
                                <span className={`h-5 w-5 relative rounded-sm p-[3px] border-2 border-primary`}></span>
                                <label className={`text-primary`} htmlFor="filter1">still airing</label>
                            </div>
                            <div className={`flex gap-2.5 items-center label`}>
                                <input className={`hidden`} type="checkbox" id="filter2"></input>
                                <span className={`h-5 w-5 relative rounded-sm p-[3px] border-2 border-primary`}></span>
                                <label className={`text-primary`} htmlFor="filter2">finished</label>
                            </div>
                        </div>
                        <div
                            className={`border border-primary w-[250px] rounded-sm flex p-2.5 justify-between flex-col gap-1`}>
                            <span className={`text-primary mx-auto decoration-1 underline font-semibold text-xl`}>Anime Type</span>
                            <div className={`flex gap-2.5 items-center label`}>
                                <input className={`hidden`} type="checkbox" id="filter3"></input>
                                <span
                                    className={`h-5 w-5 relative rounded-sm p-[3px] border-2 border-primary`}></span>
                                <label className={`text-primary`} htmlFor="filter3">Movie</label>
                            </div>
                            <div className={`flex gap-2.5 items-center label`}>
                                <input className={`hidden`} type="checkbox" id="filter4"></input>
                                <span
                                    className={`h-5 w-5 relative rounded-sm p-[3px] border-2 border-primary`}></span>
                                <label className={`text-primary`} htmlFor="filter4">OVA</label>
                            </div>
                            <div className={`flex gap-2.5 items-center label`}>
                                <input className={`hidden`} type="checkbox" id="filter5"></input>
                                <span
                                    className={`h-5 w-5 relative rounded-sm p-[3px] border-2 border-primary`}></span>
                                <label className={`text-primary`} htmlFor="filter5">TV Series</label>
                            </div>
                            <div className={`flex gap-2.5 items-center label`}>
                                <input className={`hidden`} type="checkbox" id="filter6"></input>
                                <span
                                    className={`h-5 w-5 relative rounded-sm p-[3px] border-2 border-primary`}></span>
                                <label className={`text-primary`} htmlFor="filter6">TV Special</label>
                            </div>
                            <div className={`flex gap-2.5 items-center label`}>
                                <input className={`hidden`} type="checkbox" id="filter7"></input>
                                <span
                                    className={`h-5 w-5 relative rounded-sm p-[3px] border-2 border-primary`}></span>
                                <label className={`text-primary`} htmlFor="filter7">Web</label>
                            </div>
                        </div>
                        <div
                            className={`border border-primary w-[250px] rounded-sm flex p-2.5 justify-between flex-col gap-1`}>
                            <span className={`text-primary mx-auto decoration-1 underline font-semibold text-xl`}>Origin</span>
                            <div className={`flex gap-2.5 items-center label`}>
                                <input className={`hidden`} type="checkbox" id="filter8"></input>
                                <span
                                    className={`h-5 w-5 relative rounded-sm p-[3px] border-2 border-primary`}></span>
                                <label className={`text-primary`} htmlFor="filter8">China</label>
                            </div>
                            <div className={`flex gap-2.5 items-center label`}>
                                <input className={`hidden`} type="checkbox" id="filter9"></input>
                                <span
                                    className={`h-5 w-5 relative rounded-sm p-[3px] border-2 border-primary`}></span>
                                <label className={`text-primary`} htmlFor="filter9">Japan</label>
                            </div>
                            <div className={`flex gap-2.5 items-center label`}>
                                <input className={`hidden`} type="checkbox" id="filter10"></input>
                                <span
                                    className={`h-5 w-5 relative rounded-sm p-[3px] border-2 border-primary`}></span>
                                <label className={`text-primary`} htmlFor="filter10">South Korea</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Page;
