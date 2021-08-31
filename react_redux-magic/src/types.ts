export interface ICard {
  name: string;
  imageUrl: string;
  id: string;
}

export interface ICardContext {
  cards: ICard[];
  setCards: React.Dispatch<React.SetStateAction<IState>>;
}

export enum Actions {
  CARDS_UPDATE = 'CARDS_UPDATE',
  DOWNLOAD_START = 'DOWNLOAD_START',
  DOWNLOAD_SUCCES = 'DOWNLOAD_SUCCES',
  DOWNLOAD_FAIL = 'DOWNLOAD_FAIL',
}

export interface UpdateAction {
  type: Actions.CARDS_UPDATE;
}

export interface DownloadStartAction {
  type: Actions.DOWNLOAD_START;
}

export interface DownloadSuccesAction {
  type: Actions.DOWNLOAD_SUCCES;
}

export interface DownloadFailAction {
  type: Actions.DOWNLOAD_FAIL;
}

export type Action = UpdateAction | DownloadStartAction | DownloadSuccesAction | DownloadFailAction;

export interface IStateContext {
  state: IState;
  dispacth: React.Dispatch<Action>;
}

export interface IState {
  cards: ICard [];
  isDownload: boolean;
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
  downolad: () => void;
  setOptions: (options: IOptions) => void;
}

export interface ICardInfo {
  name?: string;
  id?: string;
  artist?: string;
  manaCost?: string;
  type?: string;
  rarity?: string;
  text?: string;
  setName?: string;
  imageUrl?: string;
}
