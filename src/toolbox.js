export const toolbox = {
  kind: 'categoryToolbox',
  contents: [

    //----PLAYER----
    {
      kind: 'category',
      name: 'Player',
      categorystyle: 'player_category',
      contents: [
      //--- TELEPORT ---
        {
          kind: 'block',
          type: 'teleport',
          inputs:{
            TARGET:{
              shadow:{
                type: 'target_selector'
              }
            },
            DESTINATION:{
              shadow:{
                type: 'tilde_three_coords'
              }
            }
          }
        },
      //--- advancements ---
      {
        kind: 'block',
        type: 'advancements',
        inputs:{
          PLAYER:{
            shadow:{
              type: 'target_selector'
            }
          }
        }
      },
      //--- GIVE ---
        {
          kind: 'block',
          type: 'give',
          inputs:{
            ENTITY:{
              shadow:{
                type: 'target_selector'
              }
            },
            ITEM:{
              shadow:{
                type: 'item_grid_picker'
              }
            },
            COUNT:{
              shadow:{
                type: 'minecraft_text'
              }
            }
          }
        }, 
      ],
    },
    //----------------

    //----ENTITY----
    {
      kind: 'category',
      name: 'Entity',
      categorystyle: 'entity_category',
      contents: [
      //--- SUMMON ---
        {
          kind: 'block',
          type: 'summon',
          inputs:{
            ENTITY:{
              shadow:{
                type: 'entity_grid_picker'
              }
            },
            COORDINATES:{
              shadow:{
                type: 'tilde_three_coords'
              }
            }
          }
        }, 
      //--- Entity picker ---
      {
        kind: 'block',
        type: 'entity_grid_picker',
      },
      //--- Effect picker ---
      {
        kind: 'block',
        type: 'effect_grid_picker',
      },
      ],
    },
    //----------------

    //------WORLD-----
    {
      kind: 'category',
      name: 'World',
      categorystyle: 'world_category',
      contents: [
      ],
    },
    //----------------

    //------CHAT-----
    {
      kind: 'category',
      name: 'Chat',
      categorystyle: 'chat_category',
      contents: [
      //---SAY---
        {
          kind: 'block',
          type: 'say',
          inputs:{
            MESSAGE:{
              shadow:{
                type: 'minecraft_text'
              }
            }
          }
        },     
      ],
    },
    //----------------

    //------ITEM-----
    {
      kind: 'category',
      name: 'Item',
      categorystyle: 'item_category',
      contents: [
      //--- Item and block pickers ---
      {
        kind: 'block',
        type: 'item_grid_picker',
      },
      {
        kind: 'block',
        type: 'block_grid_picker',
      },
      ],
    },
    //----------------

    //------FUNCTION-----
    {
      kind: 'category',
      name: 'Function',
      categorystyle: 'function_category',
      contents: [
      ],
    },
    //----------------

    //------VALUES-----
    {
      kind: 'category',
      name: 'Values',
      categorystyle: 'value_category',
      contents: [
      //--- ~ ~ ~ ---
        {
          kind: 'block',
          type: 'tilde_three_coords',
        },
      //--- XYZ ---
        {
          kind: 'block',
          type: 'three_coords',
        },
      //--- TEXT ---
        {
        kind: 'block',
        type: 'minecraft_text',
        },
      //--- Target selector ---
        {
          kind: 'block',
          type: 'target_selector',
        },
      //--- CONNECTOR ---
        {
          kind: 'block',
          type: 'connector',
        },
      ],
    },
    //----------------
    //------NBT-----
    {
      kind: 'category',
      name: 'NBT',
      categorystyle: 'nbt_category',
      contents: [
      ],
    },
    //----------------
  ],
};
