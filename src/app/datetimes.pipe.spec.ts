import { DatetimesPipe } from './datetimes.pipe';

describe('DatetimesPipe', () => {
  it('create an instance', () => {
    const pipe = new DatetimesPipe();
    expect(pipe).toBeTruthy();
  });
});
