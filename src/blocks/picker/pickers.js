/**
 * DataBlocky
 * Copyright 2026 Romero-dev
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

const itemPicker = {
  type: 'item_grid_picker',
  message0: 'Item %1',
  args0: [
    {
      type: 'field_gridpicker',
      name: 'ITEM',
      catalog: 'items',
      value: ' ',
    },
  ],
  output: null,
  style: 'item_blocks',
  tooltip: 'Choose a Minecraft item',
};

const blockPicker = {
  type: 'block_grid_picker',
  message0: 'Block %1',
  args0: [
    {
      type: 'field_gridpicker',
      name: 'BLOCK',
      catalog: 'blocks',
      value: ' ',
    },
  ],
  output: null,
  style: 'item_blocks',
  tooltip: 'Choose a Minecraft blocks',
};

const entityPicker = {
  type: 'entity_grid_picker',
  message0: 'Entity %1',
  args0: [
    {
      type: 'field_gridpicker',
      name: 'ENTITY',
      catalog: 'entities',
      value: ' ',
    },
  ],
  output: null,
  style: 'entity_blocks',
  tooltip: 'Choose a Minecraft Entity',
};

const effectsPicker = {
  type: 'effect_grid_picker',
  message0: 'Effect %1',
  args0: [
    {
      type: 'field_gridpicker',
      name: 'EFFECT',
      catalog: 'effects',
      value: ' ',
    },
  ],
  output: null,
  style: 'entity_blocks',
  tooltip: 'Choose a Mob Effect',
};

export const blocks =
  Blockly.common.createBlockDefinitionsFromJsonArray([
    itemPicker, blockPicker, entityPicker, effectsPicker,
]);