'use strict'

//todo https://blog.csdn.net/weixin_44997252/article/details/89683152

export const data_S = {
    'SixDataSum': [43,33,30,30,44],
    'SL': {
        'name': '少林派',
        'level': ['小僧', '武僧', '堂主','方丈'],
        'rank': '3 ↑',
        'person': '5万',
        'star': [
            '防御　★',
            '外伤　★★★'
        ],
        'inf': '　　无量金刚宗乃传自古象雄王国的一支密教分支。金刚宗弟子众多，护法神功威力无比。以削弱敌方耐力为主。',
        'sixData': [15,5,11,2,0],
        'zAtt': {
            '龙抓手': {
                'attFr_body': ['hand',],
                'attTo_body': ['head', 'body', 'hand', 'leg'],
                'hurt_o': 140,
                'hurt_i': 0,
                'hit': 0.05,
                'block': 0,
                'time_q': 0.3,
                'time_z': 1,
                'time_h': 0.4,
                'hurt_n': 0,
                'const': 15,
                'hurt_l': 0,
                'hurt_d': 0,
                'TX_inf': '',
                'LZ_inf': '外伤伤害+5%，5s',
                'remark': '手到之处刚猛绝伦，抓树留痕，抓肉成洞。',
            },
        },
        'zDef': {
            '达摩十八手': {
                'def_body': 'hand',
                'block': 0.5,
                'TX_inf': '',
                'LZ_inf': '外伤伤害+5%，5s',
                'remark': '禅宗初祖达摩所传之先天罗汉拳元始十八手，其拳禅一体，内外双修，气武兼备。',
            },
        },
        'zDod': {
            '一苇渡江':{
                'const': 20,
                'dod': 0.3,
                'TX_inf': '下次攻击前摇+0.2s',
                'LZ_inf': '外伤伤害+5%，5s',
                'remark': '使出轻身发，奋力后跃，远离敌人。',
            },
        },
        'zPas': {
            '铁布衫': {
                'inf': '外伤防御 +25%，弹反伤害+10%',
            },
        },
    },
};