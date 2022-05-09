import React from 'react';

function Comment({comment}) {
    return (
        <div className={`flex flex-col border border-2 border-primary rounded-2p p-10p gap-[5px]`}>
            <div className={`flex justify-between border-b border-primary`}>
                <div className={`flex gap-10p`}>
                    <div className={`flex items-end text-[20px]`}>{comment.nick}</div>
                    <div className={`flex items-center gap-[5px]`}>
                        {
                            (new Array(5).fill(1)).map((item, index)=>{
                                return (
                                    <div key={index}>
                                        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_63_5)">
                                                <path d="M26.2849 2.486L31.6919 13.442C32.0679 14.204 32.7949 14.732 33.6359 14.854L45.7269 16.611C47.8449 16.919 48.6899 19.521 47.1579 21.014L38.4089 29.542C37.8009 30.135 37.5229 30.99 37.6669 31.827L39.7319 43.869C40.0939 45.978 37.8799 47.586 35.9859 46.591L25.1719 40.906C24.4199 40.511 23.5209 40.511 22.7689 40.906L11.9549 46.591C10.0609 47.587 7.84688 45.978 8.20888 43.869L10.2739 31.827C10.4179 30.99 10.1399 30.135 9.53188 29.542L0.782879 21.014C-0.749121 19.52 0.0958788 16.918 2.21388 16.611L14.3049 14.854C15.1459 14.732 15.8729 14.204 16.2489 13.442L21.6559 2.486C22.6019 0.567003 25.3379 0.567003 26.2849 2.486Z" stroke={`#FA6166`} fill={`${index < comment.rating ? "#FCE77E" : "#FFF"}`}/>
                                            </g>
                                        </svg>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={`flex items-end`}>{comment.date}</div>
            </div>
            <div>{comment.body}</div>
        </div>
    );
}

export default Comment;
