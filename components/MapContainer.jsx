import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as ExpoLocation from 'expo-location';
import CustomMarker from '@/components/CustomMarker';


const lat = '35.69642046706202'
const lon = '139.6007016127125'

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function getNewPosition(lat, lon){

const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
	return {
    latitude: lat, 
    longitude: lon,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
	}
}

  const initialRegion = {
    latitude: lat, 
    longitude: lon,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };


export default function MapContainer() {

	const [markers, setMarkers] = useState([]);
	const mapRef = useRef(null);

	// const [userLocation, setUserLocation] = useState(null);

	const handleMapPress = (event) => {
		event.stopPropagation();
		const newCoordinate = event.nativeEvent.coordinate;
		setMarkers([...markers, newCoordinate])
	};


  // const handleMapReady = async () => {

	// 	// let location = await ExpoLocation.getCurrentPositionAsync({accuracy : ExpoLocation.Accuracy.Highest});


  //   if (mapRef.current && userLocation) {
  //     mapRef.current.animateToRegion(userLocation, 1000); // Animate over 1 second
  //   }
  // };


	const getCurrentLocation = async () => {
		const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			console.log('Permission to access location was denied');
			return ;
		}
		let location = await ExpoLocation.getCurrentPositionAsync({accuracy : ExpoLocation.Accuracy.Highest});

		const userLocation = {
			latitude: location.coords.latitude,
			longitude: location.coords.longitude,
			latitudeDelta: LATITUDE_DELTA,
			longitudeDelta: LONGITUDE_DELTA,
		};

    mapRef.current.animateToRegion(userLocation, 1000); // Animate over 1 second



		// mapRef.current.animateToRegion({
		// 	latitude: location.coords.latitude,
		// 	longitude: location.coords.longitude,
		// 	latitudeDelta: LATITUDE_DELTA,
		// 	longitudeDelta: LONGITUDE_DELTA,
		// }, 1000);
	}




	useEffect( () => {
		getCurrentLocation()
	}, [])



	return (
		<View style={styles.container}>
			<MapView 

				showsUserLocation={true}
				folowUserLocation
				ref={mapRef}
				style={styles.map} 
				mapType={'hybrid'}
				zoomTapEnabled={false}
				scrollEnabled={true}
				showsPointsOfInterest={false}
      	// initialRegion={userLocation}
				// initialRegion={{
				// 	latitude: lat,
				// 	longitude: lon,
				// 	latitudeDelta: LATITUDE_DELTA,
				// 	longitudeDelta: LONGITUDE_DELTA,
				// }}
				onMapReady={getCurrentLocation}
				// onPress={(e) => setMarkers([...markers, e.nativeEvent.coordinate])}
				onPress={handleMapPress}
			>
				{markers.map((marker, index) => (
					<Marker 
						key={`marker_${index}`}
						coordinate={marker}
						// title={`Marker ${index + 1}`}
						// description={`Lat: ${marker.latitude}, Lng: ${marker.longitude}`}
						onPress={(e) => {
							e.stopPropagation()
						}}
					/>
				))}


			</MapView>
		</View>
	);
}




const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: '100%',
		height: '100%',
		border: 'none',
	},
});