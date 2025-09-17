import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../theme/colors';

type Props = {
  onRestart: () => void;
  disabled?: boolean;
  caption?: string;
};

export const Footer: React.FC<Props> = ({ onRestart, disabled, caption }) => {
  return (
    <View style={styles.container}>
      {!!caption && <Text style={styles.caption}>{caption}</Text>}
      <Pressable
        onPress={onRestart}
        disabled={disabled}
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      >
        <Text style={styles.buttonText}>Restart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  caption: {
    textAlign: 'center',
    marginBottom: 8,
    color: Colors.mutedText,
  },
  button: {
    alignSelf: 'center',
    minWidth: 180,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },
  buttonPressed: {
    backgroundColor: '#1d4ed8',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 0.3,
  },
});

export default Footer;
