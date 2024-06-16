import { defaultStyles, StackScreenWithSearchBar } from '@/app/styles'
import { View } from 'react-native'
import { Stack } from 'expo-router'

const SongsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{ ...StackScreenWithSearchBar, headerTitle: 'Songs' }}
				/>
			</Stack>
		</View>
	)
}

export default SongsScreenLayout
