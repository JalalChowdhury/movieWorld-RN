import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import {GET} from '../../Services/API';
import { SliderBox } from "react-native-image-slider-box";
import { IMAGE_POSTER_URL } from '../../secures/config';


function DiscoverMovies() {
    
    const [movies , setMovies] = useState([]);
    const [images,setImages] = useState([]);

    useEffect(()=>{
        const getMovies = async () => {
            const response = await GET('/discover/movie');
            // console.log(response);
            setMovies(response.results);
            const image = response.results.map((data) => `${IMAGE_POSTER_URL}${data.backdrop_path}`
            );

            let backImages =[];
            for(let i=0; i<10 ; ++i){
                backImages = [...backImages,image[i]];
                // console.log("images link 21: ", image[i]);

            }
            setImages(backImages);
            
        };
        getMovies();

    },[]);

    return (
        <View>
            <SliderBox images ={images} dotColor='#F4C10F'/>
        </View>
    );
}

export default DiscoverMovies;