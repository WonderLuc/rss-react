export interface ICard {
  name: string;
  imageUrl: string;
  id: number;
}

export interface ICardContext {
  cards: ICard[];
  setCards: React.Dispatch<React.SetStateAction<ICard[]>>;
}

export enum Actions {
  CARDS_UPDATE = 'CARDS_UPDATE',
}
export interface UpdateAction {
  type: Actions.CARDS_UPDATE;
  data: ICard[];
}

export type Action = UpdateAction;

export interface IState {
  state: ICard [];
  dispacth: React.Dispatch<UpdateAction>;
}

export interface IOptions {
  page?: number;
  pageSize?: number;
  name?: string;
  contains?: string;
  colors?: string;
  random?: boolean;
  cmc?: number;
}

export interface IApi {
  url: string;
  options: IOptions;
  isDownloaded: boolean;
  downolad: () => void;
  setOptions: (options: IOptions) => void;
  setStatus: (status: boolean) => void;
}
