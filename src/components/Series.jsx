import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Series = () => {


    const [series, setSeries] = useState([]);





    useEffect(() => {
        axios.get('https://fly.sportsdata.io/nascar/v2/json/series?key=5251db7df8ec450dbbed05941bd4f0cf')
            .then(response => setSeries(response.data))
            .catch(err => console.log(err))
    }, [])






    return (
        <div
            class="bg_image"
            style={{
                backgroundImage: 'url("https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_325,q_75,w_900/https://assets.simpleviewinc.com/simpleview/image/upload/v1/clients/daytonabeach/Daytona_International_Speedway_Daytona_500_Fisheye_900x325_d895a701-f357-4a14-98ff-1f6cc2ad8aeb.jpg")',
                backgroundSize: "cover",
                height:'1500px'

            }}
        >
            <h1 style={{ display: 'flex', justifyContent: 'center'}}>
                <a href="/series/1" style={{ margin:'50px', marginTop: '650px', color: 'black'}}>Monster Energy NASCAR Cup</a>
                <a href="/series/2" style={{ margin:'50px', marginTop: '700px', color: 'black'}}>Monster Energy NASCAR Cup</a>
                <a href="/series/3" style={{ margin:'50px', marginTop: '750px', color: 'black'}}>Monster Energy NASCAR Cup</a>
            </h1>
        </div>
    )




}

export default Series;