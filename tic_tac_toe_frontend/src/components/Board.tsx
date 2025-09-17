import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Cell } from './Cell';
import { Board as BoardType } from '../utils/game';
import { Colors } from '../theme/colors';

type Props = {
  board: BoardType;
  onMove: (index: number) => void;
  disabled?: boolean;
  winningLine?: number[] | null;
};

export const Board: React.FC<Props> = ({ board, onMove, disabled, winningLine }) => {
  const isHighlighted = (index: number) => winningLine?.includes(index);

  return (
    <View style={styles.wrapper}>
      <View style={styles.grid}>
        {board.map((val, idx) => (
          <Cell
            key={idx}
            value={val}
            onPress={() => onMove(idx)}
            highlight={!!isHighlighted(idx)}
            disabled={disabled}
            style={[
              // Remove duplicate borders for inner lines to make a clean grid
              (idx % 3 !== 0) && styles.leftBorderHidden,
              (idx < 6) && styles.bottomBorderHidden,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  grid: {
    width: '100%',
    aspectRatio: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  leftBorderHidden: {
    borderLeftWidth: 0,
  },
  bottomBorderHidden: {
    borderBottomWidth: 0,
  },
});

export default Board;
