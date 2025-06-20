import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const lat = '35.69628586699673'
const lon = '139.60121795361565'

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.001;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function MapContainer() {
	const [markers, setMarkers] = useState([
		{
			coordinate: {
				latitude: lat,
				longitude: lon,
			},
			title: "test",
			description: "test",
			id: 1
		},
	]);

	const handleMapPress = (event) => {
		const newCoordinate = event.nativeEvent.coordinate;
		console.log(newCoordinate)
		setMarkers((prevMarkers) => [...prevMarkers, { coordinate: newCoordinate }]);
	};


	return (
		<View style={styles.container}>
			<MapView 
				style={styles.map} 
				initialRegion={{
					latitude: lat,
					longitude: lon,
					latitudeDelta: LATITUDE_DELTA,
					longitudeDelta: LONGITUDE_DELTA,
				}}
				onPress={handleMapPress}
			/>
			<Marker 
				coordinate={{
					latitude: lat,
					longitude: lon,
				}}
			/>
			{markers.map((marker, index) => (
				<Marker 
					key={index} 
					coordinate={marker.coordinate} 
					title={`Marker ${index + 1}`}
				/>
			))}
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