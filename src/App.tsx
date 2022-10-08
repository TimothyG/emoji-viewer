import React, { useEffect, useState } from 'react';
import './App.css';
import { Cell } from './components/Cell';
import { EMOJIS } from './constants/emojilist';
import { getCategories, getFilteredEmojis } from './lib/emojis';
import { Navigation } from './components/Navigation';
import { Section } from './components/Section';
import { ListItem as NavigationItem } from './components/NavigationItem';
import { Filter } from './components/Filter';
import { loadEmojiStateFromStorage, saveSelectedEmojisToLocalStorage } from './lib/localStorage';

function App() {

  const [emojis, setEmojis] = useState(EMOJIS);
  const [selectedEmojis, setSelectedEmojis] = useState(loadEmojiStateFromStorage());

  const getCategoryCount = (category: string) => {
    const emojis = getEmojisForCategory(category);
    return emojis.length;
  };

  const getCategoryLabel = (category: string) => {
    const count = getCategoryCount(category);
    return count > 0 ? count.toString() : undefined;
  }

  const getEmojisForCategory = (category: string) => {
    return emojis.filter(emoji => emoji.category === category);
  };

  const onFilterChange = (value: string) => {
    if (value !== "") {
      setEmojis(getFilteredEmojis(value));
    } else {
      setEmojis(EMOJIS);
    }
  };

  const onSelectEmoji = (emoji: string) => {
    setSelectedEmojis(items => [...items, emoji]);
  };

  const onDeselectEmoji = (emoji: string) => {
    setSelectedEmojis(items => items.filter(e => e !== emoji));
  };

  useEffect(() => {
    saveSelectedEmojisToLocalStorage(selectedEmojis);
  }, [selectedEmojis]);

  const isSelected = (emoji: string) => {
    return selectedEmojis.indexOf(emoji) !== -1;
  };

  return (
    <div className="h-full min-h-screen dark:bg-slate-800 p-3">
      <div className="md:grid md:grid-cols-6">
        <div className="md:col-span-1">
          <div className="sticky top-5">
            <Filter onFilterChange={onFilterChange} />      
            <Navigation>
              {getCategories().map((category, index) => (
                <NavigationItem 
                  key={category} 
                  label={category} 
                  index={index}
                  badgeText={getCategoryLabel(category)} 
                />))}
            </Navigation>
          </div>
        </div>
        <div className="md:col-span-5">
          {getCategories().map((category, index) => (
            <Section key={index} title={category} itemCount={getCategoryCount(category)} index={index}>
              {getEmojisForCategory(category).map((emoji) => (
                <Cell 
                  key={emoji.description} 
                  emoji={emoji.emoji} 
                  title={emoji.description}
                  onSelect={onSelectEmoji}
                  onDeselect={onDeselectEmoji}
                  isSelected={isSelected(emoji.emoji)}
                />
              ))}
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
