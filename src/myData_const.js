'use strict';
export const data_const = {
    'hpSubHart': {//hp伤害衰减关系曲线
        'a': -0.8,
        'b': 1.8,
        'c': -0.0000000000000009,
    },
    'hp':{
      'head':800,
      'body':2000,
      'hand':800,
      'leg':1000
    },
    'flaw':{
        'h':0.02,//回合同招
        'z':0.01,//总计同招
        'l':0.05,//连续同招
    },
    'comboCost':1.5,//攻击连招耗气增加
    'roundTime':18,//每回合时间
};