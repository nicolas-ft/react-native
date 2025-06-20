import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, Button } from 'react-native';

export default function SwipeDownModal({ isVisible, onClose }) {
	return (
    <Modal
      animationType={'slide'}
			// transparent={true}
      visible={isVisible}
      presentationStyle={'pageSheet'}
      onRequestClose={onClose}
			style={styles.modalContent}
    >
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Text style={styles.modalText}>Hello from the Modal!</Text>
					<Button title="Close Modal" onPress={onClose} />
				</View>
			</View>
    </Modal>
	);
}

const styles = StyleSheet.create({
	modalContent: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 0,
		backgroundColor: 'rgba(0,0,0,0)'
	},
 centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)', // Semi-transparent background
  },
  modalView: {
    margin: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4 4 0 0,
    elevation: 10,
    // Set custom height here
    // height: '50%', // Example: 50% of the screen height
    width: '100%',  // Example: 80% of the screen width
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});