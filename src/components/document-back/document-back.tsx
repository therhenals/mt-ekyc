import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'document-back',
  styleUrl: 'document-back.css',
  shadow: true,
})
export class DocumentBack {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
