/**
 * DataBlocky
 * Copyright 2026 Romero-dev
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

const say = {
  type: 'say',
  message0: 'say %1',
  args0: [
    {
      type: 'input_value',
      name: 'MESSAGE',
    },
  ],
  //inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  style: 'chat_blocks',
};

export const blocks =
  Blockly.common.createBlockDefinitionsFromJsonArray([
    say,
]);
