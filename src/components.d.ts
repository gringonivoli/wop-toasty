/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface WopToasty {
      'img': string;
      'show': () => void;
      'sound': string;
    }
  }

  interface HTMLWopToastyElement extends StencilComponents.WopToasty, HTMLStencilElement {}

  var HTMLWopToastyElement: {
    prototype: HTMLWopToastyElement;
    new (): HTMLWopToastyElement;
  };
  interface HTMLElementTagNameMap {
    'wop-toasty': HTMLWopToastyElement;
  }
  interface ElementTagNameMap {
    'wop-toasty': HTMLWopToastyElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wop-toasty': JSXElements.WopToastyAttributes;
    }
  }
  namespace JSXElements {
    export interface WopToastyAttributes extends HTMLAttributes {
      'img'?: string;
      'sound'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;