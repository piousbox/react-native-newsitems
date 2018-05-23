// @flow
import * as React from "react"
import { Text, View } from 'native-base'

class NewsitemReport extends React.Component<Props, State> {
	render () {
		return (
			<View style={{ backgroundColor: 'yellow' }}>
        <Text>from npm: {this.props.item.name}</Text>
      </View>
		)
	}
}

export { NewsitemReport }
