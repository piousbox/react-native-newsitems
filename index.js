// @flow
import * as React from "react"
import { Text, View } from 'native-base'

class NewsitemReport extends React.Component<Props, State> {
	render () {
		return (
			<View style={{ backgroundColor: 'green' }}>
        <Text>{this.props.item.name}</Text>
      </View>
		)
	}
}

export { NewsitemReport }
