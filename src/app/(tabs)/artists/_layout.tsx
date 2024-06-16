import { defaultStyles, StackScreenWithSearchBar } from '@/app/styles'
import { View } from 'react-native'
import { Stack } from 'expo-router'

const ArtistsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Artists' }}
				/>
			</Stack>
		</View>
	)
}

export default ArtistsScreenLayout
