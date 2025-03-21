declare interface Document {
  getElementById(elementId: string): HTMLElement | null;
  getElementsByClassName(classNames: string): HTMLCollectionOf<HTMLElement>;
}

export interface IUserInfo {
  userId: string;
  userName: string;
}

export interface IMenuItem {
  id: string | number;
  name: string;
  path?: string;
  link?: string;
  target?: '_blank' | '_self';
  iconImg?: string;
  iconImgActive?: string;
  parentId: null | number | string;
  defaultPage?: string;
  metaTitle?: string;
  children: TGlobalMenuItem[];
}

export interface IWindowGlobal {
  user: IUserInfo;
  menus: IMenuItem[];
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';

declare global {
  interface Window {
    GLOBAL: IWindowGlobal;
  }
}

declare const SENTRY_DNS: string;
declare const RELEASE_VERSION: string;
