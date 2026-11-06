/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Modified by Romero-dev in 2026 year.
 */

import * as Blockly from 'blockly';

// Custom Theme
import { dataBlockyTheme } from './theme.js';

// Custom pickers
import './utils/GridPicker/GridPickerField';
import {blocks as pickerBlocks} from './blocks/picker/pickers';

// Search Field
import './utils/SearchDropdown/SearchDropdownField';

import {blocks as valueBlocks} from './blocks/values';
import {blocks as chatCommands} from './blocks/chat';
import {blocks as playerCommands} from './blocks/player';
import {blocks as entityCommands} from './blocks/entity';



import {mcGenerator} from './generators/mcfunction';
import {save, load} from './serialization';
import {toolbox} from './toolbox';
import './index.css';

// registry blocks
Blockly.common.defineBlocks(valueBlocks);
Blockly.common.defineBlocks(chatCommands);
Blockly.common.defineBlocks(playerCommands);
Blockly.common.defineBlocks(entityCommands);
Blockly.common.defineBlocks(pickerBlocks);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode');

const blocklyDiv = document.getElementById('blocklyDiv');

// WORKSPACE
const ws = Blockly.inject(blocklyDiv, {
  toolbox,
  renderer:'zelos',
  theme: dataBlockyTheme,
  zoom: {
    controls: true,
    wheel: true,
    startScale: 1,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
    pinch: true,
  },
  });

  // Toolbox resize fix
  Blockly.VerticalFlyout.prototype.getFlyoutScale = function() { return 0.85 };

const runCode = () => {
  const code = mcGenerator.workspaceToCode(ws);
  
  if (codeDiv) {
    codeDiv.innerText = code || '';
  }
};

// Loading a saved state and initial launch
load(ws);
runCode();

// Saving during changes
ws.addChangeListener((e) => {
  if (e.isUiEvent) return;
  save(ws);
});

// Live code updates in the panel
ws.addChangeListener((e) => {
  if (
    e.isUiEvent ||
    e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) {
    return;
  }
  runCode();
});
