import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Child } from './child';
import './child';
import { TwElement } from './tw-element';

export enum LitExampleComponentEvents {
  ParagraphClicked = 'example-paragraph-clicked',
  ComponentRendered = 'example-component-rendered',
}

@customElement('lit-example')
export class LitExample extends TwElement(LitElement) {
  @query('#child')
  private _childElement!: Child;

  private _handleClick() {
    this._childElement.parentWasClicked();
  }

  private _handleClickMethod() {
    this._childElement.parentWasClickedMethod();
  }

  override render() {
    return html`
      <section class="">
        <p class="">
          I'm a Lit component!
          <button @click=${() => this._handleClick()}>Click me</button>
          <button @click=${() => this._handleClickMethod()}>
            Click me - (Method version)
          </button>
        </p>
        <lit-child id="child"></lit-child>
      </section>
    `;
  }
}
