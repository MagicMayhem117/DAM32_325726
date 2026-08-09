import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing, Image, PixelRatio } from 'react-native';

const SCALE = PixelRatio.get();
const DISPLAY_SIZE = 400;
const ASSET_SIZE = DISPLAY_SIZE * SCALE;

const FRAME_WIDTH = DISPLAY_SIZE;
const FRAME_HEIGHT = DISPLAY_SIZE;
const COLS = 8;
const COLS_SURPRISE = 9;
const ROWS = 10;
const FONDO = require('./assets/default.png');
const COIN_SPRITE = require('./assets/cara4.png');
const COIN_SURPRISE_SPRITE = require('./assets/cara4_sorpresa.png');

const SPRITE_SHEETS = [
  { source: COIN_SPRITE, columns: COLS, rows: ROWS, label: 'Cara' },
  { source: COIN_SPRITE, columns: COLS, rows: ROWS, label: 'Cruz' },
  { source: COIN_SPRITE, columns: COLS, rows: ROWS, label: '' },
  { source: COIN_SURPRISE_SPRITE, columns: COLS_SURPRISE, rows: ROWS, label: 'Sorpresa' },
];

export default function App() {
  const [isFlipping, setIsFlipping] = useState(false);
  const [resultText, setResultText] = useState('Toca la moneda');
  const [frameIndex, setFrameIndex] = useState(0);
  const [currentSprite, setCurrentSprite] = useState(SPRITE_SHEETS[0]);

  const progress = useRef(new Animated.Value(0)).current;

  const pickResult = () => Math.floor(Math.random() * 4);

  useEffect(() => {
    const listener = progress.addListener(({ value }) => {
      const total = currentSprite.columns * currentSprite.rows;
      setFrameIndex(Math.floor(value * (total - 1)));
    });

    return () => progress.removeListener(listener);
  }, [progress, currentSprite]);

  const handlePress = () => {
    if (isFlipping) return;

    const idx = pickResult();
    const selectedSprite = SPRITE_SHEETS[idx];
    setCurrentSprite(selectedSprite);
    setFrameIndex(0);
    setIsFlipping(true);
    setResultText('...');

    progress.setValue(0);

    Animated.timing(progress, {
      toValue: 1,
      duration: 2500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        setFrameIndex((selectedSprite.columns * 10)-1);
        setIsFlipping(false);
        setResultText(selectedSprite.label);
      }
    });
  };

  const col = frameIndex % currentSprite.columns;
  const row = Math.floor(frameIndex / currentSprite.columns);
  const translateX = -col * FRAME_WIDTH;
  const translateY = -row * FRAME_HEIGHT;

  const animatedStyle = {
    transform: [{ translateX }, { translateY }],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} activeOpacity={1} disabled={isFlipping}>
        <View style={styles.coinContainer}>
          <Animated.View style={[styles.spriteWrapper, animatedStyle, {
            width: FRAME_WIDTH * currentSprite.columns,
            height: FRAME_HEIGHT * currentSprite.rows,
          }]}> 
            <Image source={currentSprite.source} style={[styles.coinImage, {
              width: FRAME_WIDTH * currentSprite.columns,
              height: FRAME_HEIGHT * currentSprite.rows,
            }]}/>
          </Animated.View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinContainer: {
    width: FRAME_WIDTH,
    height: FRAME_HEIGHT,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#fffffe00',
  },
  spriteWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  coinImage: {
    resizeMode: 'cover',
  },
  resultText: {
    marginTop: 50,
    fontSize: 28,
    fontWeight: '700',
    color: '#f0e6d3',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    overflow: 'hidden',
  },
});