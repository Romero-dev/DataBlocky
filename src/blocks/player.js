/**
 * DataBlocky
 * Copyright 2026 Romero-dev
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

const tp = {
  type: 'teleport',
  message0: 'tp %1 %2',
  args0: [
    {
      type: 'input_value',
      name: 'TARGET',
    },
    {
      type: 'input_value',
      name: 'DESTINATION',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  style: 'player_blocks',
};

const give = {
  type: 'give',
  message0: 'give %1 %2 %3',
  args0: [
    {
      type: 'input_value',
      name: 'ENTITY',
    },
    {
      type: 'input_value',
      name: 'ITEM',
    },
    {
      type: 'input_value',
      name: 'COUNT',
    },
  ],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  style: 'player_blocks',
};

Blockly.Blocks['advancements'] = {
  init: function() {
    this.appendDummyInput('HEADER')
      .appendField('advancement')
      .appendField(
        new Blockly.FieldDropdown([
          ['grant', 'grant'],
          ['revoke', 'revoke']
        ]),
        'TYPE_1'
      );

    this.appendValueInput('PLAYER');

    this.appendDummyInput('MODE')
      .appendField(
        new Blockly.FieldDropdown(
          [
            ['everything', 'everything'],
            ['from', 'from'],
            ['only', 'only'],
            ['through', 'through'],
            ['until', 'until']
          ],
          (newValue) => {
            this.updateShape_(newValue);
            return newValue;
          }
        ),
        'TYPE_2'
      );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setStyle('player_blocks');
    this.setInputsInline(true);

    this.updateShape_();
  },

  updateShape_: function(newValue) {
    const mode = newValue ?? this.getFieldValue('TYPE_2');
    const needsAdvancement = mode !== 'everything';
    
    // TODO: add a check for the "only" item
    // TODO: and add a second field_search_dropdown with advancements for "only" item
    
    const inputName = 'ADVANCEMENT_INPUT';

    if (needsAdvancement && !this.getInput(inputName)) {
      const searchDropdown = Blockly.fieldRegistry.fromJson({
        type: 'field_search_dropdown',
        catalog: 'advancements'
      });

      this.appendDummyInput(inputName)
        .appendField(searchDropdown, 'ADVANCEMENT');

    } else if ( !needsAdvancement && this.getInput(inputName) ) {
      this.removeInput(inputName);
    }
  }
};

export const blocks =
  Blockly.common.createBlockDefinitionsFromJsonArray([
    tp, give,
  ]);
