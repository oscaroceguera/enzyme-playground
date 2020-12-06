/** @format */

import moxios from 'moxios';

import { getSecretWord } from './hookActions';

describe('moxios test', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('Calls the geetsecretWord callback on axios response', async () => {
    const secretWord = 'party';

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    // create mock foor callback arg
    const mockSecretWord = jest.fn();

    await getSecretWord(mockSecretWord);

    // see whether mock was run with th ecorrect argument
    expect(mockSecretWord).toHaveBeenCalledWith(secretWord);
  });
});
