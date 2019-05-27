import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

export const Loading = (props) => {
  const size = props.size ? props.size : 'large';
  const color = props.color ? props.color : '#e20fa7';
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...props.style,
      }}
    >
      <ActivityIndicator size={size} color={color} />
      {props.children && (
        props.children
      )}
    </View>
  );
};

Loading.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default React.memo(Loading);
