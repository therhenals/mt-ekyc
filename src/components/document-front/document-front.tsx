import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'document-front',
  styleUrl: 'document-front.css',
  shadow: true,
})
export class DocumentFront {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
