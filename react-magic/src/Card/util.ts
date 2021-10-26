import { ICard } from '../types';

export function OnlyCardWithImage(arr: ICard[]): ICard [] {
  return arr.filter((card) => !!card.imageUrl);
}
