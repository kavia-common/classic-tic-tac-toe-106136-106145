import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors } from '../theme/colors';

type Props = {
  value: 'X' | 'O' | null;
  onPress: () => void;
  highlight?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
};

export const Cell: React.FC<Props> = ({ value, onPress, highlight, disabled, style }) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || !!value}
      style={({ pressed }) => [
        styles.cell,
        style,
        pressed && styles.pressed,
        highlight && styles.highlight,
      ]}
    >
      <Text style={[styles.symbol, value === 'X' ? styles.x : value === 'O' ? styles.o : null]}>
        {value ?? ''}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    minHeight: 92,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  pressed: {
    backgroundColor: '#f3f4f6',
  },
  highlight: {
    backgroundColor: '#ecfeff',
    borderColor: Colors.primary,
  },
  symbol: {
    fontSize: 42,
    fontWeight: '800',
  },
  x: {
    color: Colors.primary,
  },
  o: {
    color: Colors.secondary,
  },
});

export default Cell;
