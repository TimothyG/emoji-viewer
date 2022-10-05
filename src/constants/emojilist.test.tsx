import { EMOJIS } from './emojilist';

describe('emojilist', () => {
    test('emoji symbols are unique', () => {
        const emojiSymbols = EMOJIS.map(emoji => emoji.emoji);
        const uniqueEmojis = Array.from(new Set(emojiSymbols));
        
        expect(uniqueEmojis.length).toEqual(EMOJIS.length);
    });
});