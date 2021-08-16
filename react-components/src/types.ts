export interface IOrder {
  name: string;
  date: string;
  office: string;
  pack: boolean;
  id?: number;
}

export interface IBook{
  name: string;
  author: string;
  img: string;
  likes: number;
  comments: number;
  price: number;
}

export type DetailType = 'price' | 'comments' | 'likes';
