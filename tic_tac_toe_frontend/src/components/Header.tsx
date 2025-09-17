import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../theme/colors';

type Props = {
  statusText: string;
  xScore: number;
  oScore: number;
  draws: number;
};

export const Header: React.FC<Props> = ({ statusText, xScore, oScore, draws }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      <Text style={styles.status}>{statusText}</Text>

      <View style={styles.scoreRow}>
        <View style={[styles.scoreCard, styles.xCard]}>
          <Text style={styles.scoreLabel}>X</Text>
          <Text style={styles.scoreValue}>{xScore}</Text>
        </View>
        <View style={[styles.scoreCard, styles.drawCard]}>
          <Text style={styles.scoreLabel}>Draws</Text>
          <Text style={styles.scoreValue}>{draws}</Text>
        </View>
        <View style={[styles.scoreCard, styles.oCard]}>
          <Text style={styles.scoreLabel}>O</Text>
          <Text style={styles.scoreValue}>{oScore}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: Colors.surface,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 24,
    color: Colors.primary,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  status: {
    marginTop: 4,
    fontSize: 14,
    color: Colors.mutedText,
  },
  scoreRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 12,
  },
  scoreCard: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.surface,
  },
  xCard: {
    borderColor: Colors.primary,
  },
  oCard: {
    borderColor: Colors.secondary,
  },
  drawCard: {
    borderColor: Colors.border,
  },
  scoreLabel: {
    fontSize: 12,
    color: Colors.mutedText,
  },
  scoreValue: {
    marginTop: 4,
    fontSize: 18,
    color: Colors.text,
    fontWeight: '700',
  },
});

export default Header;
