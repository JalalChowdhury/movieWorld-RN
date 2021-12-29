import React from 'react';

import { Dimensions, StyleSheet, Text,View } from 'react-native';
import DiscoverMovies from '../../components/DiscoverMovies/DiscoverMovies';

import TrendingPeople from '../../components/TrendingPeople/TrendingPeople';

const deviceHeight = Dimensions.get('window').height ;


function HomeSc() {
    return (
        <View style={styles.homeBg}>
            <DiscoverMovies />
            <TrendingPeople
                title='Trending Movies'
                url='/movie/top_rated'
            
            />
        </View>
    );
}

const styles = StyleSheet.create({
    homeBg:{
        backgroundColor:'#151C26',
        height: deviceHeight,
    }
})

export default HomeSc;