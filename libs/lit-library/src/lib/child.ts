import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
// COMMENT OUT TO GET TESTS WORKING
import { translate as t } from 'lit-i18n';
// UNCOMMENT TO GET TESTS WORKING
// import { translate as t } from 'lit-i18n-temp';

export enum LitExampleComponentEvents {
  ParagraphClicked = 'example-paragraph-clicked',
  ComponentRendered = 'example-component-rendered',
}

@customElement('lit-child')
export class Child extends LitElement {
  //j k extends TwElement() {
  @state()
  private _parentClicked = false;

  parentWasClicked() {
    this._parentClicked = true;
  }

  parentWasClickedMethod() {
    this._parentClicked = true;
  }

  override render() {
    return html`
      <section>
        <p>${t('project')}</p>
        <p>My parent was clicked: ${this._parentClicked}</p>
      </section>
    `;
  }
}
