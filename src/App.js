import './App.css';
import React, {useState, useEffect} from 'react';
import {animePage} from './static_data'

function App() {
    const [animeData, setAnimeData] = useState({});

    useEffect(() => {
        setAnimeData(animePage);
    }, []);

    return (
        <div>
            <div>{animeData.img}</div>
            <div>{animeData.title}</div>
            <div>{animeData.description}</div>
        </div>
    );
}

export default App;
