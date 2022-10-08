const selectedEmojisKey = 'selectedEmojis';

export const saveSelectedEmojisToLocalStorage = (selectedEmojis: string[]) => {
    localStorage.setItem(selectedEmojisKey, JSON.stringify(selectedEmojis));
}

export const loadEmojiStateFromStorage = () => {
    const state = localStorage.getItem(selectedEmojisKey);
    return state ? (JSON.parse(state) as string[]) : [];
}