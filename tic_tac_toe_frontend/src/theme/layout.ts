import { StyleSheet } from 'react-native';
import { Colors, Elevation } from './colors';

export const AppStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  surface: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Elevation.card,
  },
  containerPadding: {
    paddingHorizontal: 16,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientBackdrop: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
