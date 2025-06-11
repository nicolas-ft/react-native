import { ScrollView, StyleSheet, Text, View } from "react-native"
import React, { useState, useEffect } from 'react'
import * as ExpoLocation from 'expo-location';

export default function Location() {
	const [address, setAddress] = useState('loading...')
	const [longitude, setLongitude] = useState();
	const [latitude, setLatitude] = useState();


	const getCurrentLocation = async () => {
		const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return ;
    }
		let location = await ExpoLocation.getCurrentPositionAsync({accuracy : ExpoLocation.Accuracy.Highest});
		setLongitude(location.coords.longitude)
		setLatitude(location.coords.latitude)
    console.log(location);


		fetch(`https://nominatim.openstreetmap.org/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&format=json&zoom=18`, {
			headers: {
				'accept-language': 'ja-JP',
			}
		}).then(res => res.json())
			.then(res => {
				console.log(res)
				console.log(res.address)

				setAddress(res.display_name)
		})



	}


	useEffect( () => {
		getCurrentLocation()
	}, [])




	// useEffect(() => {
	// 	function setPosition({ coords: { latitude, longitude }}) {
	// 		setLongitude(longitude)
	// 		setLatitude(latitude)
	// 		fetch(`${URL}${latitude},${longitude}&key=${API_KEY}`)
	// 			.then(resp => resp.json(), e => console.error(e))
	// 			.then(results => {
	// 				console.log(results)
	// 			})
	// 		// 	// .then(({ results: [{ formatted_address }] }) => {
	// 		// 	// 	setAddress(formatted_address)
	// 		// 	// })
	// 	}
	

	// 	navigator.geolocation.getCurrentPosition(setPosition)

	// 	// let watcher = navigator.geolocation.watchPosition(
	// 	// 	setPosition,
	// 	// 	err => console.error(err),
	// 	// 	{ enableHighAccuracy: true}
	// 	// )

	// 	// return () => {
	// 	// 	navigator.geolocation.clearWatch(watcher)
	// 	// }
	// }, )

	return (
		<ScrollView contentContainerStyle={styles.contentContainer}>
			<View style={styles.centeredView}>
				<Text style={styles.text}>{address}</Text>
				<Text style={styles.text}>Latitude: {latitude}</Text>
				<Text style={styles.text}>Longitude: {longitude}</Text>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	centeredView: {

	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#fff',
		marginTop: 10,
		marginBottom: 10,
	},
})