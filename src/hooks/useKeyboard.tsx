import { useEffect, useState } from "react";

const KEYS = [
  // ALPHABET
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "å",
  "ä",
  "ö",
  // WHITE SPACE KEYS
  "Enter",
  " ", // SPACE BAR
  "Tab",
  // NAVIGATION
  "ArrowDown",
  "ArrowUp",
  "ArrowLeft",
  "ArrowRight",
  "End",
  "Home",
  "PageDown",
  "PageUp",
  // MODIFIERS
  "Alt",
  "AltGraph",
  "CapsLock",
  "Control",
  "Fn",
  "FnLock",
  "NumLock",
  "Shift",
  // EDITING KEYS
  "Backspace",
  "Clear",
  "Delete",
  "Insert",
  "Copy",
  "Cut",
  "Redo",
  "Undo",
  // UI KEYS
  "Escape",
  // FUNCTION KEYS
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  // MORE KEYS TO ADD IF NEEDED
] as const;
type Key = (typeof KEYS)[number];

interface UseKeyboardConfig {
  targetKeys: Key | Key[];
  onKeyDown?: (key: Key) => void;
  onKeyUp?: (key: Key) => void;
}

const isTargetKeysPressed = (key: string, targetKeys: Key | Key[]): boolean => {
  if (Array.isArray(targetKeys)) {
    return targetKeys.includes(key as Key);
  }
  return key === targetKeys;
};

const useKeyboard = ({
  targetKeys,
  onKeyDown,
  onKeyUp,
}: UseKeyboardConfig): boolean => {
  const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false);

  const onKeyDownHandler = ({ key }: KeyboardEvent): void => {
    if (isTargetKeysPressed(key, targetKeys)) {
      onKeyDown?.(key as Key);
      setIsKeyPressed(() => true);
    }
  };

  const onKeyUpHandler = ({ key }: KeyboardEvent): void => {
    if (isTargetKeysPressed(key, targetKeys)) {
      onKeyUp?.(key as Key);
      setIsKeyPressed(() => false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDownHandler);
    window.addEventListener("keyup", onKeyUpHandler);
    return () => {
      window.removeEventListener("keydown", onKeyDownHandler);
      window.removeEventListener("keyup", onKeyUpHandler);
    };
  }, [targetKeys, onKeyDown, onKeyUp]);

  return isKeyPressed;
};

export default useKeyboard;
