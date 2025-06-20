import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const color = '#25292e'


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
		color: color,
	},
	input: {
		minWidth: 200,
		height: 40,
		padding: 5,
		borderRadius: 6,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: color,
		color: color,
	}
});

export default function Form() {

	const [text, setText] = useState('');

	return (

		<ScrollView bounces={false} contentContainerStyle={styles.contentContainer}>
			<View style={styles.centeredView}>
				<Text style={styles.text}>{text}</Text>

				<TextInput 
					style={styles.input}
					placeholderTextColor={color}
					placeholder="Type here"
					onChangeText={newText => setText(newText)}
					defaultValue={text}
				/>
			</View>
		</ScrollView>
	);
}