import { IApi, ICard, IOptions } from './types';

export class Api implements IApi {
  options: IOptions;

  url: string;

  isDownloaded: boolean;

  cards: ICard [];

  constructor(url: string) {
    this.options = {
      page: 1,
      pageSize: 12,
      contains: 'imageUrl',
    };
    this.url = url;
    this.isDownloaded = false;
    this.cards = [];
  }

  setOptions(options: IOptions): void {
    this.options = { ...this.options, ...options };
  }

  setStatus(status: boolean): void {
    this.isDownloaded = status;
  }

  async downolad(): Promise<void> {
    try {
      const reqUrl = `${this.url}?${this.optionsToString()}`;
      const req = await fetch(reqUrl);
      if (req.ok) {
        const res = await req.json();
        this.setStatus(true);
        this.cards = res.cards;
      }
      else if (req.status === 500) {
        this.downolad();
      }
    } catch (err) {
      console.log(`We have a problem with - ${err}`);
    }
  }

  optionsToString(): string {
    let str = '';
    const keys = Object.entries(this.options);
    keys.forEach((arr, index) => {
      const [key, value] = arr;
      str += `${key}=${value}`;
      if ((index + 1) < keys.length) str += '&';
    });
    return str;
  }
}

export const api = new Api('https://api.magicthegathering.io/v1/cards');
