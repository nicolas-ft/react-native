import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
	contentContainer: {
		flexGrow: 1, 
		justifyContent: 'center', 
		alignItems: 'center', 
	},
	centeredView: {
		padding: 20,
		borderRadius: 10,
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#25292e',
	},
	input: {
		height: 40,
		padding: 5,
		borderRadius: 6,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#25292e',
	}
});

export default function Form() {

	const [text, setText] = useState('');

	return (

		<ScrollView contentContainerStyle={styles.contentContainer}>
			<View style={styles.centeredView}>
				<Text style={styles.text}>{text}</Text>

				<TextInput style={styles.input}
					placeholder="Type here"
					onChangeText={newText => setText(newText)}
					defaultValue={text}
				/>
			</View>
		</ScrollView>
	);
}