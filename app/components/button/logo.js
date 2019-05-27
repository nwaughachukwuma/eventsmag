import React, {Component} from 'react';
import { 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    Image
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { IconButton } from 'react-native-paper'
import {icons} from 'utils';

const styles = StyleSheet.create({

  image: {
    width: 40,
    height: 40
  },
  button: {
    width: 60,
    maxWidth: 60,
    borderWidth: 0.5,
    borderColor: 'transparent',
    borderRadius: 40,
    padding: 10,
    elevation: 1
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
});

export class LogoButton extends Component {
  name = 'LogoButton';
  render() {
    const { style, icon, size, color, textStyle, ...restProps } = this.props;
    const themeColor = color? {primary: color}: {};
    const btnColor = color? color: '#008080';
    const iconSize = size || 20;
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.button, style]}
            {...restProps}
        >
            <Image 
                resizeMode="contain"
                style={[styles.image]}
                source={icons[icon]} 
            />
        </TouchableOpacity>
    );
  }
}

export default LogoButton;