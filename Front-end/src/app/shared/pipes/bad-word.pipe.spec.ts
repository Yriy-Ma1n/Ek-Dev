import { BadWordPipe } from './bad-word.pipe';

describe('BadWordPipe', () => {
  it('create an instance', () => {
    const pipe = new BadWordPipe();
    expect(pipe).toBeTruthy();
  });
});
