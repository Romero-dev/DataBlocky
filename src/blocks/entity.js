/**
 * DataBlocky
 * Copyright 2026 Romero-dev
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

const summon = {
  type: 'summon',
  message0: 'summon %1 %2 nbt',
  args0: [
    {
      type: 'input_value',
      name: 'ENTITY',
    },
    {
      type: 'input_value',
      name: 'COORDINATES',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  style: 'entity_blocks',
};

export const blocks =
  Blockly.common.createBlockDefinitionsFromJsonArray([
    summon,
]);