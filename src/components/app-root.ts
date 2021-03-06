import {LitElement, html, customElement, property, css} from 'lit-element';

@customElement('app-root')
export class AppRoot extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px seagreen;
      padding: 16px;
      max-width: 800px;
    }
  `;

  @property()
  name = 'World';

  @property({type: Number})
  count = 0;

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `;
  }

  private _onClick() {
    this.count++;
  }

  foo(): string {
    return 'foo';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot;
  }
}
