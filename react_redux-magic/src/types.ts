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
  DOWNLOAD_CHANGE = 'DOWNLOAD_CHANGE',
}

export interface UpdateAction {
  type: Actions.CARDS_UPDATE;
  data: ICard[];
}

export interface DownloadUpdateAction {
  type: Actions.DOWNLOAD_CHANGE;
  data: boolean;
}

export type Action = UpdateAction | DownloadUpdateAction;

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
  isDownloaded: boolean;
  downolad: () => void;
  setOptions: (options: IOptions) => void;
  setStatus: (status: boolean) => void;
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
