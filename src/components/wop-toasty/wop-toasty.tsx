import { Component, Prop, Method, Element } from '@stencil/core';

@Component({
  tag: 'wop-toasty',
  styleUrl: 'wop-toasty.css',
  shadow: true
})
export class Toasty {

  @Prop() img: string;
  @Prop() sound: string;

  @Element() el: HTMLElement;

  componentWillLoad() {
    this.setDefaultValues();
  }

  @Method()
  show() {
    const el = this.el.shadowRoot;
    const toastyAudio: HTMLAudioElement = el.querySelector('#toasty-audio');
    const toasty = el.querySelector('#toasty-guy-dan');
    toastyAudio.play();
    toasty.setAttribute('class', 'show-dan');
    window.setTimeout(() => toasty.setAttribute('class', ''), 1000);
  }

  private setDefaultValues() {
    this.img = this.img || 'components/wop-toasty-assets/toasty.png';
    this.sound = this.sound || 'components/wop-toasty-assets/toasty.mp3';
  }

  render() {
    return (
      <div id="toasty-guy-dan">
        <img src="components/wop-toasty-assets/toasty.png" alt="toasty" />
        <audio id="toasty-audio">
          <source src="components/wop-toasty-assets/toasty.mp3" type="audio/mpeg"></source>
        </audio>
      </div>
    );
  }
}
