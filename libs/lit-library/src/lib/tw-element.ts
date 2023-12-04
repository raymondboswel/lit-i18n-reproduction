import { LitElement } from 'lit';

type Constructor<T = object> = new (...args: any[]) => T;

export const TwElement = <T extends Constructor<LitElement>>(superClass: T) => {
  class TwElementClass extends superClass {
    static styles = [];
  }
  return TwElementClass as T;
};
