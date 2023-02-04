import {CardValue, _} from "@package/core";
import type {Card} from "@package/core";
import type {Combination} from "./types";
import {SpecialCard, PheonixReplaceableCards} from "@package/core";
import {isValidCombination, determineCombination} from "./check-combination";

// prettier-ignore
export const CalculateRank: {[K in Combination]: (cards: Card[]) => number} = {
  leaf: (cards) => _.first(cards.map((card) => CardValue[card]), 0),
  pair: (cards) => _.first(cards.map((card) => CardValue[card]), 0),
  consecutivePairs: (cards) => _.last(cards.map((card) => CardValue[card]), 0),
  triple:  (cards) => _.first(cards.map((card) => CardValue[card]), 0),
  fullHouse: (cards) => ((values) => _.isSplittedGroupSame(values, 3) ? _.first(values, 0) : _.last(values, 0))(cards.map((card) => CardValue[card]).sort((a, b) => a - b)),
  straight: (cards) => _.last(cards.map((card) => CardValue[card]).sort((a, b) => a - b), 0),
  squareBomb: (cards) => _.first(cards.map((card) => CardValue[card]), 0) * 100,
  straightBomb: (cards) => _.last(cards.map((card) => CardValue[card]).sort((a, b) => a - b), 0) * 100,
};

export const activatePheonix = (cards: Card[]): Card[] => {
  const withoutPheonixCard = cards.filter((card) => card !== SpecialCard.Pheonix);

  if (cards.includes(SpecialCard.Pheonix) === false) {
    return cards;
  }

  return _.last(
    PheonixReplaceableCards.map((card) => [...withoutPheonixCard, card])
      .filter((cards) => isValidCombination(cards, true))
      .map((cards) => ({cards, combination: determineCombination(cards, true)}))
      .map(({cards, combination}) => ({cards, combination, rank: CalculateRank[combination](cards)}))
      .sort(({rank: a}, {rank: b}) => a - b)
      .map(({cards}) => cards),
    cards,
  );
};
