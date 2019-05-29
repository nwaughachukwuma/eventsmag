import React, {Component} from 'react';
import { View, Text } from 'react-native'

export class TextScreen extends Component {

    constructor(props) {
        super(props)
    }

    static get options() {
        return {
            topBar: {
                title: {
                    text: 'TextScreen',
                },
                visible: true,
                drawBehind: false
            }
        };
    }

    render() {
        const {text} = this.props
        return (
            <View>
                <Text>
                    {text}
                </Text>
            </View>
        );
    }
    
}

export default TextScreen;