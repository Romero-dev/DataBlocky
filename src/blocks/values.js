/**
 * DataBlocky
 * Copyright 2026 Romero-dev
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

const tildeCoords = {
  "type": "tilde_three_coords",
  "message0": "~ %1 ~ %2 ~ %3",
  "args0": [
    { "type": "field_number", "name": "x", "text": "" },
    { "type": "field_number", "name": "y", "text": "" },
    { "type": "field_number", "name": "z", "text": "" },
  ],
  output: null,
  style: 'value_blocks',
};

const xyz_coords = {
  "type": "three_coords",
  "message0": "X: %1 Y: %2 Z: %3",
  "args0": [
    { "type": "field_number", "name": "x", "text": "" },
    { "type": "field_number", "name": "y", "text": "" },
    { "type": "field_number", "name": "z", "text": "" },
  ],
  output: null,
  style: 'value_blocks',
};

//===== Text input =====//
const text = {
  type: 'minecraft_text',
  message0: '%1',
  args0: [
    {
      type: 'field_input',
      name: 'TEXT',
      text: '',
    },
  ],
  output: null,
  style: 'value_blocks',
};

//===== Target =====//
const target = {
  type: 'target_selector',
  message0: '%1',
  args0: [
    {
      type: 'field_dropdown',
      name: 'SELECTOR',
      options: [
        ['@a', 'allPlayers'],
        ['@e', 'allEntity'],
        ['@n', 'nearestEntity'],
        ['@p', 'nearestPlayer'],
        ['@r', 'randomPlayer'],
        ['@s', 'entityExecCom'],
      ]
    },
  ],
  output: null,
  style: 'value_blocks',
};

const connector = {
  "type": "connector",
  "message0": "%1 %2",
  "args0": [
    {
      "type": "input_value",
      "name": "INPUT_1",
    },
    {
      "type": "input_value",
      "name": "INPUT_2",
    }
  ],
  output: null,
  style: 'value_blocks',
  inputsInline: true
}
                    

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray([
  tildeCoords, xyz_coords, text, target, connector,
]);
