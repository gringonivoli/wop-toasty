import { Component, Prop, Method, Element } from '@stencil/core';

@Component({
  tag: 'wop-toasty',
  styleUrl: 'wop-toasty.css',
  shadow: true
})
export class Toasty {

  @Prop() img: string = 'https://images2.imgbox.com/21/5a/eGjEhHhf_o.png';
  @Prop() sound: string = 'https://drive.google.com/uc?export=open&id=1lwv5xwrCDlWu1oipOmsKTDFB63Lm_-Xh';

  @Element() el: HTMLElement;

  @Method()
  show() {
    const el = this.el.shadowRoot;
    const toastyAudio: HTMLAudioElement = el.querySelector('audio');
    const toasty = el.querySelector('div');
    toastyAudio.play();
    toasty.setAttribute('class', 'show-dan');
    window.setTimeout(() => toasty.setAttribute('class', ''), 1000);
  }

  render() {
    return (
      <div>
        <img src={this.img} alt="toasty" />
        <audio>
          <source src={this.sound} type="audio/mpeg"></source>
        </audio>
      </div>
    );
  }
}
