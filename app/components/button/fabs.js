import React from 'react'
import { 
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
 
const styles = StyleSheet.create({
    blueButton: {
        marginHorizontal: 16,
        marginVertical: 8,
        height: 48,
        backgroundColor: '#0675ce',
        borderRadius: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      fab: {
        width: 50,
        height: 50,
        borderRadius: 29,
        backgroundColor: '#0675ce',
        display: 'flex',
        paddingBottom: 8,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        right: 10,
        zIndex: 12,
        padding: 5,
        elevation: 3,
    },
    plusText: {
        color: '#FFF',
        fontSize: 25,
        // paddingBottom: 4,
        fontFamily: 'Roboto-Medium',
    }
});

  
export const Fab = props => {
    
    const sampleFunction = () => {
        if (props.onPress) return props.onPress();
        return alert("Add an onPress handler");
    }
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={styles.fab}
            onPress={sampleFunction}
        >
            <Text
                style={styles.plusText}
            >
                +
            </Text>
        </TouchableOpacity>
    );
}
  
Fab.propTypes = {
    // authenticated: PropTypes.bool.isRequired,
    // navigationUrl: PropTypes.string,
    onPress: PropTypes.func.isRequired,
};

export default Fab;