import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { IMAGE_POSTER_URL } from '../../secures/config';
import { GET } from '../../Services/API';
import Loader from '../Loader/Loader';

const TrendingPeople = (props) => {

    const [loading,setLoading] = useState(true);
    const [people,setPeople] = useState([]);

    useEffect(()=>{
        setLoading(true);
        const getPeople = async () =>{
            const data = GET('/tranding/person/week');
            console.log("tranding data : ",data);
            setPeople(data.results);
            setLoading(false);
        }
        getPeople();

    },[])

    return (
       <View>
           {
               loading ? (
                   <Loader />
               ) : (
                   <View>
                       <Text style={{fontSize:19, color:'#F4C10F', margin:10}}>
                            {props.title}
                       </Text>
                       <FlatList 
                             horizontal
                             showsHorizontalScrollIndicator={false}
                           keyExtractor={item => item.id}
                           data = {people}
                           renderItem={displayPeople}
                          
                       />
                   </View>
               )

           }

       </View>
    );
}

const displayPeople = ({item}) => {
    return (

        <View style={{margin:10}}>
            <Image 
                source = {{ uri: `${IMAGE_POSTER_URL}${item.profile_path}`}}
                style ={{ height: 70,
                    width: 70,
                    borderRadius: 500,}}
            />
            <Text style={{
                 width: 60,
                 color: '#fff',
                 fontSize: 12,
                 textAlign: 'center',
                 marginTop: 10,
            }}>{item.name}</Text>
        </View>
    );
}

export default TrendingPeople;