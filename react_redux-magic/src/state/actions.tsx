import {
  Actions, DownloadFailAction, DownloadStartAction, DownloadSuccesAction, UpdateAction,
} from '../types';

export function UpdateCard(): UpdateAction {
  return {
    type: Actions.CARDS_UPDATE,
  };
}

export function StartDownload(): DownloadStartAction {
  return {
    type: Actions.DOWNLOAD_START,
  };
}

export function SuccesDownload(): DownloadSuccesAction {
  return {
    type: Actions.DOWNLOAD_SUCCES,
  };
}

export function FailDownload(): DownloadFailAction {
  return {
    type: Actions.DOWNLOAD_FAIL,
  };
}
