'use strict';
export const data_const = {
    'hpSubHart': {//hp伤害衰减关系曲线
        'a': -0.8,
        'b': 1.8,
        'c': 0,
    },
    'hpSubZqVal': {//hp真气量衰减关系曲线
        'a': -0.6,
        'b': 1.2,
        'c': 0.4,
    },
    'hpSubZqPerSec': {//hp真气回复衰减关系曲线
        'a': -0.4375,
        'b': 0.8375,
        'c': 0.6,
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