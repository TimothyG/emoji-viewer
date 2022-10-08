import { EMOJIS } from "../constants/emojilist"

export const getCategories = () => {
    const allCategories = EMOJIS.map(emoji => emoji.category);
    const categories = Array.from(new Set(allCategories));
    return categories;
}

export const getFilteredEmojis = (searchText: string) => {
    var lowercaseSearchText = searchText.toLowerCase();
    return EMOJIS.filter(emoji => 
        emoji.description.toLowerCase().indexOf(lowercaseSearchText) !== -1);
}