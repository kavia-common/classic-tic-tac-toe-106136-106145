import React, { useMemo, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import Board from '../components/Board';
import Footer from '../components/Footer';
import { AppStyles } from '../theme/layout';
import { Colors } from '../theme/colors';
import {
  Board as BoardType,
  Player,
  GameStatus,
  initialBoard,
  getWinner,
} from '../utils/game';

export const GameScreen: React.FC = () => {
  const [board, setBoard] = useState<BoardType>(initialBoard());
  const [nextPlayer, setNextPlayer] = useState<Player>('X');
  const [scores, setScores] = useState({ X: 0, O: 0, D: 0 });

  const winnerInfo = useMemo(() => getWinner(board), [board]);
  const isBoardFull = useMemo(() => board.every((c) => c !== null), [board]);

  const status: GameStatus = useMemo(() => {
    if (winnerInfo) {
      return { type: 'win', winner: winnerInfo.winner, line: winnerInfo.line };
    }
    if (isBoardFull) {
      return { type: 'draw' };
    }
    return { type: 'in_progress', next: nextPlayer };
  }, [winnerInfo, isBoardFull, nextPlayer]);

  const statusText = useMemo(() => {
    switch (status.type) {
      case 'in_progress':
        return `Next Move: ${status.next}`;
      case 'win':
        return `Winner: ${status.winner}!`;
      case 'draw':
        return 'It’s a draw!';
      default:
        return '';
    }
  }, [status]);

  function handleMove(index: number) {
    if (board[index] || status.type !== 'in_progress') return;

    const newBoard = [...board];
    newBoard[index] = nextPlayer;

    const newWinner = getWinner(newBoard);
    const boardFull = newBoard.every((c) => c !== null);

    setBoard(newBoard);

    if (newWinner) {
      setScores((prev) => ({
        ...prev,
        [newWinner.winner]: prev[newWinner.winner] + 1,
      }));
    } else if (boardFull) {
      setScores((prev) => ({ ...prev, D: prev.D + 1 }));
    } else {
      setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
    }
  }

  function restartRound() {
    setBoard(initialBoard());
    // Alternate starting player for fairness across rounds
    setNextPlayer((p) => (p === 'X' ? 'O' : 'X'));
  }

  const caption =
    status.type === 'in_progress'
      ? 'Tap an empty cell to place your mark'
      : 'Tap Restart to play another round';

  return (
    <View style={[AppStyles.screen]}>
      <Header statusText={statusText} xScore={scores.X} oScore={scores.O} draws={scores.D} />
      <View style={styles.content}>
        <View style={styles.boardContainer}>
          <Board
            board={board}
            onMove={handleMove}
            disabled={status.type !== 'in_progress'}
            winningLine={status.type === 'win' ? status.line : undefined}
          />
        </View>
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: Colors.primary }]} />
            <Text style={styles.legendText}>X</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.dot, { backgroundColor: Colors.secondary }]} />
            <Text style={styles.legendText}>O</Text>
          </View>
        </View>
      </View>
      <Footer onRestart={restartRound} caption={caption} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
    gap: 16,
  },
  boardContainer: {
    flex: 0,
    width: '100%',
    aspectRatio: 1,
    alignSelf: 'center',
  },
  legend: {
    flexDirection: 'row',
    gap: 16,
    alignSelf: 'center',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  legendText: {
    color: Colors.mutedText,
    fontWeight: '600',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 999,
  },
});

export default GameScreen;
