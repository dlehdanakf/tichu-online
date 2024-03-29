import type {Card} from "./types";
import {SpecialCard} from "./special-cards";

export const CardValue: {[K in Card]: number} = {
  "♠2": 2,
  "♠3": 3,
  "♠4": 4,
  "♠5": 5,
  "♠6": 6,
  "♠7": 7,
  "♠8": 8,
  "♠9": 9,
  "♠10": 10,
  "♠J": 11,
  "♠Q": 12,
  "♠K": 13,
  "♠A": 14,
  "♥2": 2,
  "♥3": 3,
  "♥4": 4,
  "♥5": 5,
  "♥6": 6,
  "♥7": 7,
  "♥8": 8,
  "♥9": 9,
  "♥10": 10,
  "♥J": 11,
  "♥Q": 12,
  "♥K": 13,
  "♥A": 14,
  "♦2": 2,
  "♦3": 3,
  "♦4": 4,
  "♦5": 5,
  "♦6": 6,
  "♦7": 7,
  "♦8": 8,
  "♦9": 9,
  "♦10": 10,
  "♦J": 11,
  "♦Q": 12,
  "♦K": 13,
  "♦A": 14,
  "♣2": 2,
  "♣3": 3,
  "♣4": 4,
  "♣5": 5,
  "♣6": 6,
  "♣7": 7,
  "♣8": 8,
  "♣9": 9,
  "♣10": 10,
  "♣J": 11,
  "♣Q": 12,
  "♣K": 13,
  "♣A": 14,
  [SpecialCard.Wish]: 1,
  [SpecialCard.Hound]: 0,
  [SpecialCard.Pheonix]: NaN,
  [SpecialCard.Dragon]: Infinity,
};
