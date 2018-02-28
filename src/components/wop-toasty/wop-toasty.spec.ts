import { flush, render } from '@stencil/core/testing';
import { Toasty } from './wop-toasty';

describe('wop-toasty', () => {
  it('should build', () => {
    expect(new Toasty()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [Toasty],
        html: '<wop-toasty></wop-toasty>'
      });
    });
  });
});
