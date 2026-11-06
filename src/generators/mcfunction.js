/**
 * DataBlocky
 * Copyright 2026 Romero-dev
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

class MinecraftGenerator extends Blockly.CodeGenerator {

  constructor(name = 'Minecraft') {
    super(name);

    this.ORDER_ATOMIC = 0;
    this.ORDER_NONE = 99;
  }


  scrub_(block, code, thisOnly) {

    const nextBlock =
      block.nextConnection &&
      block.nextConnection.targetBlock();

    let nextCode = '';

    if (nextBlock && !thisOnly) {
      nextCode = this.blockToCode(nextBlock);
    }

    return code + nextCode;
  }
}

export const mcGenerator = new MinecraftGenerator();


//======== Player commands ========//
mcGenerator.forBlock['teleport'] =
  function(block, generator) {
    const target = generator.valueToCode(block, 'TARGET', generator.ORDER_NONE) || '';
    const coordinates = generator.valueToCode(block, 'DESTINATION', generator.ORDER_NONE) || '';
    return `tp ${target} ${coordinates}`;
  };
mcGenerator.forBlock['give'] =
  function(block, generator) {
    const target = generator.valueToCode(block, 'ENTITY', generator.ORDER_NONE) || '';
    const item = generator.valueToCode(block, 'ITEM', generator.ORDER_NONE) || '';
    const count = generator.valueToCode(block, 'COUNT', generator.ORDER_NONE) || '';
    return `give ${target} ${item}${count}`;
  };

mcGenerator.forBlock['advancements'] = function(block, generator) {
  const action = block.getFieldValue('TYPE_1');
  const player = generator.valueToCode(block, 'PLAYER', mcGenerator.ORDER_NONE) || '@p';
  const mode = block.getFieldValue('TYPE_2');
  
  // Assembling the core team
  let command = `advancement ${action} ${player} ${mode}`;

  // If something other than "everything" is selected, we add the achievement name.
  if (mode !== 'everything') {
    const advancement = block.getFieldValue('ADVANCEMENT');
    if (advancement) {
      command += ` ${advancement}`;
    }
  }

  // Add a space at the very end.
  return command + ' ';
};



//======== Entity commands ========//
mcGenerator.forBlock['summon'] =
  function(block, generator) {
    const summon = generator.valueToCode(block, 'ENTITY', generator.ORDER_NONE) || '';
    const coordinates = generator.valueToCode(block, 'COORDINATES', generator.ORDER_NONE) || '';
    return `summon ${summon}${coordinates}`;
  };

//======== Chat commands ========//
mcGenerator.forBlock['say'] =
  function(block, generator) {
    const message = generator.valueToCode(block, 'MESSAGE', generator.ORDER_NONE) || '';
    return `say ${message}`;
  };

//======== Values ========//
mcGenerator.forBlock['tilde_three_coords'] = function(block, generator) {
  const cx = block.getFieldValue('x');
  const cy = block.getFieldValue('y');
  const cz = block.getFieldValue('z');
  return [`~${cx} ~${cy} ~${cz} `, generator.ORDER_ATOMIC];
};

mcGenerator.forBlock['three_coords'] = function(block, generator) {
  const cx = block.getFieldValue('x');
  const cy = block.getFieldValue('y');
  const cz = block.getFieldValue('z');
  return [`${cx} ${cy} ${cz} `, generator.ORDER_ATOMIC];
};

mcGenerator.forBlock['minecraft_text'] = function(block, generator) {
  const text = block.getFieldValue('TEXT');
  return [text+' ',generator.ORDER_ATOMIC];
};

mcGenerator.forBlock['target_selector'] = function(block, generator) {
  const targets = {
    allPlayers: '@a',
    allEntity: '@e',
    nearestEntity: '@n',
    nearestPlayer: '@p',
    randomPlayer: '@r',
    entityExecCom: '@s'
  };
  const selected = block.getFieldValue('SELECTOR');
  const selector = targets[selected];
  return [selector, generator.ORDER_ATOMIC];
};

//======== Grid pickers ========//
mcGenerator.forBlock['item_grid_picker'] = function(block, generator) {
  const item = block.getFieldValue('ITEM');
  return [item, mcGenerator.ORDER_ATOMIC];
};

mcGenerator.forBlock['block_grid_picker'] = function(block, generator) {
  const blocks = block.getFieldValue('BLOCK');
  return [blocks, mcGenerator.ORDER_ATOMIC];
};

mcGenerator.forBlock['entity_grid_picker'] = function(block, generator) {
  const entity = block.getFieldValue('ENTITY');
  return [entity+' ', mcGenerator.ORDER_ATOMIC];
};

mcGenerator.forBlock['effect_grid_picker'] = function(block, generator) {
  const effect = block.getFieldValue('EFFECT');
  return [effect, mcGenerator.ORDER_ATOMIC];
};
///////////////////////////////////

mcGenerator.forBlock['connector'] =
  function(block, generator) {
    const value_1 = generator.valueToCode(block, 'INPUT_1', generator.ORDER_NONE) || '';
    const value_2 = generator.valueToCode(block, 'INPUT_2', generator.ORDER_NONE) || '';
    return [value_1+value_2,generator.ORDER_ATOMIC];
  };

