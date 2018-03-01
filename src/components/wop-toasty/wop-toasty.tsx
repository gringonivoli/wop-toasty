import { Component, Prop, Method, Element } from '@stencil/core';

@Component({
  tag: 'wop-toasty',
  styleUrl: 'wop-toasty.css',
  shadow: true
})
export class Toasty {

  @Prop() img: string = 'assets/toasty.png';
  @Prop() sound: string = 'assets/toasty.mp3';

  @Element() el: HTMLElement;

  @Method()
  show() {
    const el = this.el.shadowRoot;
    const toastyAudio: HTMLAudioElement = el.querySelector('#toasty-audio');
    const toasty = el.querySelector('#toasty-guy-dan');
    toastyAudio.play();
    toasty.setAttribute('class', 'show-dan');
    window.setTimeout(() => toasty.setAttribute('class', ''), 1000);
  }

  render() {
    return (
      <div id="toasty-guy-dan">
        <img src={this.img} alt="toasty" />
        <audio id="toasty-audio">
          <source src={this.sound} type="audio/mpeg"></source>
        </audio>
      </div>
    );
  }
}
