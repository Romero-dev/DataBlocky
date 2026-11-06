import * as Blockly from 'blockly/core';

const blockStyles = {
  player_blocks: {
    colourPrimary: '#4280D7',
    colourSecondary: '#4C97FF',
    colourTertiary: '#3373CC',
  },
  entity_blocks: {
    colourPrimary: '#855CD6',
    colourSecondary: '#9966FF',
    colourTertiary: '#774DCB',
  },
  world_blocks: {
    colourPrimary: '#46B946',
    colourSecondary: '#59C059',
    colourTertiary: '#389438',
  },
  chat_blocks: {
    colourPrimary: '#47A8D1',
    colourSecondary: '#5CB1D6',
    colourTertiary: '#2E8EB8',
  },
  item_blocks: {
    colourPrimary: '#EC9C13',
    colourSecondary: '#FFAB19',
    colourTertiary: '#CF8B17',
  },
  function_blocks: {
    colourPrimary: '#FF4D6A',
    colourSecondary: '#FF6680',
    colourTertiary: '#FF3355',
  },
  value_blocks: {
    colourPrimary: '#0DA57A',
    colourSecondary: '#0FBD8C',
    colourTertiary: '#0B8E69',
  },
  nbt_blocks: {
    colourPrimary: '#C94FC9',
    colourSecondary: '#CF63CF',
    colourTertiary: '#BD42BD',
  },
};

const categoryStyles = {
  player_category: {
    colour: '#4280D7',
  },
  entity_category: {
    colour: '#855CD6',
  },
  world_category: {
    colour: '#46B946',
  },
  chat_category: {
    colour: '#47A8D1',
  },
  item_category: {
    colour: '#EC9C13',
  },
  function_category: {
    colour: '#FF4D6A',
  },
  value_category: {
    colour: '#0DA57A',
  },
  nbt_category: {
    colour: '#C94FC9',
  },
};

const componentStyles = {
  toolboxForegroundColour: '#575E75',
};

export const dataBlockyTheme = Blockly.Theme.defineTheme('dataBlocky_theme', {
  base: Blockly.Themes.Classic,
  blockStyles,
  categoryStyles,
  componentStyles,
});
