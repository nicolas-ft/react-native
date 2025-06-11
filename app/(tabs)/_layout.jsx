import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#25292e',
				sceneStyle: {
          backgroundColor: '#25292e',
        },
				// headerShadowVisible: false,
				headerTintColor: '#25292e',
				tabBarStyle: {
					backgroundColor: 'white',
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
					),
				}}
			/>
			
			<Tabs.Screen
				name="map"
				
				options={{
					title: 'Map',
					// headerTitle: 'Back',
					headerLeft: () => (
						<Pressable onPress={() => router.back()}>
							<AntDesign name="left" size={24} color="#25292e" />
						</Pressable>
					),
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? 'map' : 'map-outline'} color={color} size={24}/>
					),
				}}
			/>
			
			<Tabs.Screen
				name="location"
				
				options={{
					title: 'Location',
					// headerTitle: 'Back',
					headerLeft: () => (
						<Pressable onPress={() => router.back()}>
							<AntDesign name="left" size={24} color="#25292e" />
						</Pressable>
					),
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? 'location' : 'location-outline'} color={color} size={24}/>
					),
				}}
			/>
			
			<Tabs.Screen
				name="three"
				options={{
					title: 'Three',
					// headerTitle: 'Back',
					headerLeft: () => (
						<Pressable onPress={() => router.back()}>
							<Ionicons name="chevron-back-outline" color="#25292e" size={24}/>
						</Pressable>
					),
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? 'cube' : 'cube-outline'} color={color} size={24}/>
					),
				}}
			/>

			<Tabs.Screen
				name="photos"
				options={{
					title: 'Photo',
					//headerTitle: 'Back',
					headerLeft: () => (
						<Pressable onPress={() => router.back()}>
							<Ionicons name="chevron-back-outline" color="#25292e" size={24}/>
						</Pressable>
					),
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? 'image' : 'image-outline'} color={color} size={24}/>
					),
				}}
			/>

			<Tabs.Screen
				name="form"
				options={{
					title: 'Forms',
					//headerTitle: 'Back',
					headerLeft: () => (
						<Pressable onPress={() => router.back()}>
							<Ionicons name="chevron-back-outline" color="#25292e" size={24}/>
						</Pressable>
					),
					tabBarIcon: ({ color, focused }) => (
						<Ionicons name={focused ? 'checkbox' : 'checkbox-outline'} color={color} size={24}/>
					),
				}}
			/>



		</Tabs>
	);
}
