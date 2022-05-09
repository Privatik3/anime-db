import React, {useState, useEffect} from 'react';
import {animePage, catalogItems} from "./static_data";
import logo from "./resources/Logo.png";
import anime from "./resources/Anime.png";
import CatalogItemGrid from "./CatalogItem";
import CatalogItemTable from "./CatalogItemTable";
import CatalogFilter from "./CatalogFilter";
import escapeClassName from "tailwindcss/lib/util/escapeClassName";
import Search from "./Search";

function Page(props) {
    const [animeData, setAnimeData] = useState({});
    const [catalogItemsData, setCatalogItemsData] = useState([]);
    const [isDisplayGrid, setDisplayGrid] = useState(true);
    const [isLogoClicked, setLogoClicked] = useState(false);

    useEffect(() => {
        setAnimeData(animePage);
        setCatalogItemsData(catalogItems);
    }, []);

    return (

        <div className={`flex flex-col w-[1150px] mx-auto font-mont gap-4`}>

            <div className={`flex justify-between items-end`}>
                <div className="logo flex text-5xl font-bold gap-5 text-primary items-end">
                    <button onClick={()=>setLogoClicked(true)} className={`absolute w-1 h-1 top-0`}></button>
                    <img src={logo} alt="logo"/>
                    <span className={`flex items-end leading-9`}>Anime<span className={`${isLogoClicked ? `text-second` : ``}`}>Db</span></span>
                </div>
                <div className={`gap-5 flex`}>
                    <button className="login border-4 border-primary w-32 h-10 text-xl font-semibold text-primary rounded-sm">Login</button>
                    <button className="registration border-4 bg-primary border-primary w-32 h-10 text-xl text-second rounded-sm">Sing Up</button>
                </div>
            </div>

            <Search title={`Anime list`} />
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

                        {

                            ["All", "0-9", "A", "B", "C", "D", "E", "F", "G", "H"].map((item, index) => {
                                // <div className={`cursor-pointer text-sm bg-primary text-second border-primary border-2 h-30p w-30p items-center flex justify-center`}>A</div>
                                // <div className={`cursor-pointer text-sm bg-second text-primary decoration-1 underline font-semibold border-primary border-2 h-30p w-30p items-center flex justify-center`}>B</div>
                                return <div className={`cursor-pointer text-sm bg-primary text-second border-primary border-2 h-30p w-30p items-center flex justify-center`}>{item}</div>
                            })
                        }
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
                            <div onClick={()=>setCatalogItemsData([])} className={`leading-3 cursor-pointer text-sm bg-primary text-second border-primary border-2 items-center flex justify-center py-1.5 px-2.5`}>
                                <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5606 2.60524L6.64752 10.5178C6.06154 11.1039 5.11099 11.1039 4.52446 10.5178L0.439649 6.43271C-0.14655 5.84662 -0.14655 4.89596 0.439649 4.30976C1.02596 3.72345 1.97643 3.72345 2.56248 4.30954L5.5863 7.3334L12.4375 0.482184C13.0238 -0.104126 13.9743 -0.103682 14.5604 0.482184C15.1465 1.06838 15.1465 2.01871 14.5606 2.60524Z" fill="#FCE77E"/>
                                </svg>
                                &#160;Apply Filter
                            </div>
                            <div onClick={()=>setCatalogItemsData(catalogItems)} className={`leading-3 cursor-pointer text-sm bg-primary text-second border-primary border-2 items-center flex justify-center py-1.5 px-2.5`}>
                                <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.85355 0.146453C3.04882 0.341713 3.04882 0.658292 2.85355 0.853552L1.70711 2H7C9.4853 2 11.5 4.01472 11.5 6.5C11.5 8.9853 9.4853 11 7 11H3C2.72386 11 2.5 10.7761 2.5 10.5C2.5 10.2239 2.72386 10 3 10H7C8.933 10 10.5 8.433 10.5 6.5C10.5 4.567 8.933 3 7 3H1.70711L2.85355 4.14645C3.04882 4.34171 3.04882 4.65829 2.85355 4.85355C2.65829 5.04882 2.34171 5.04882 2.14645 4.85355L0.146453 2.85355C-0.0488175 2.65829 -0.0488175 2.34171 0.146453 2.14645L2.14645 0.146453C2.34171 -0.0488175 2.65829 -0.0488175 2.85355 0.146453Z" fill="#FCE77E"/>
                                </svg>
                                &#160;Reset
                            </div>
                        </div>

                        <span className="text-primary">Filter
                            <hr className="border-primary"></hr>
                        </span>
                        <CatalogFilter title={"Airing Status"} type={"airing"} variants={["ignore", "still airing", "finished"]} />
                        <CatalogFilter title={"Anime Type"} type={"anime"} variants={["Movie", "OVA", "TV Series", "TV Special", "Web"]} />
                        <CatalogFilter title={"Origin"} type={"origin"} variants={["China", "Japan", "South Korea"]} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Page;
