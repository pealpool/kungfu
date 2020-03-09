'use strict';
import $ from 'jquery';
import {data_D} from './myData_D.js';
import {data_i} from './myData_i.js';
import {data_const} from './myData_const.js';

export class Person {

    sixData = [0, 0, 0, 0, 0];//1力量，2敏捷，3智力，4体魄，5内力
    myName = '';
    sex = 0;
    background = '落第书生';
    hp = {
        head: 0,
        body: 0,
        hand: [0, 0],
        leg: [0, 0]
    };
    attAdd = 0;
    flawDam = 0;
    timeAdd_q = 0;
    timeAdd_z = 0;
    timeAdd_h = 0;
    dod_head = 0;
    dod_body = 0;
    dod_hand = 0;
    dod_leg = 0;
    flawFind = 0;
    hitRateAdd = 0;
    getInf = '';
    bleedAdd = 0;
    poisonAdd = 0;
    block_head = 0;
    block_body = 0;
    block_hand = 0;
    block_leg = 0;
    def_o = 0;
    def_i = 0;
    // def_p = 0;
    // def_b = 0;
    zqVal = 0;
    zqPerSec = 0;
    zqHurtAdd = 0;

    flaw = 0;
    zqBaoDiVal = 0;

    mark_blood = {
        head: [0, 0],
        body: [0, 0],
        handL: [0, 0],
        handR: [0, 0],
        legL: [0, 0],
        legR: [0, 0]
    };
    mark_poison = {
        WJ_LL: 0,
        WJ_MJ: 0,
        WJ_ZL: 0,
        WJ_TP: 0,
        WJ_NL: 0,
        TM: 0,
        XH: 0
    };

    photo = {
        head: [],
        handL: [],
        handR: [],
        legL: [],
        legR: [],
        body: [],
        eye: []
    };

    zqValSub() {
        let x = this.hp.body / data_const.hp.body;
        return this.zqVal * (data_const.hpSubZqVal.a * Math.pow(x, 2) + data_const.hpSubZqVal.b * x + data_const.hpSubZqVal.c);
    }

    zqPerSecSub() {
        let x = this.hp.body / data_const.hp.body;
        return this.zqPerSec * (data_const.hpSubZqPerSec.a * Math.pow(x, 2) + data_const.hpSubZqPerSec.b * x + data_const.hpSubZqPerSec.c);
    }


    calc_LL(c) {
        this.sixData[0] = this.sixData[0] + c;
        this.attAdd = data_D.attAdd[this.sixData[0]];
        this.flawDam = data_D.flawDam[this.sixData[0]];
    }

    calc_MJ(c) {
        this.sixData[1] = this.sixData[1] + c;
        this.timeAdd_q = data_D.timeAdd_q[this.sixData[1]];
        this.timeAdd_z = data_D.timeAdd_z[this.sixData[1]];
        this.timeAdd_h = data_D.timeAdd_h[this.sixData[1]];
        this.dod_head = data_D.dod_head[this.sixData[1]];
        this.dod_body = data_D.dod_body[this.sixData[1]];
        this.dod_hand = data_D.dod_hand[this.sixData[1]];
        this.dod_leg = data_D.dod_leg[this.sixData[1]];
    }

    calc_ZL(c) {
        this.sixData[2] = this.sixData[2] + c;
        this.flawFind = data_D.flawFind[this.sixData[2]];
        this.hitRateAdd = data_D.hitRateAdd[this.sixData[2]];
        this.getInf = data_D.getInf[this.sixData[2]];
        this.bleedAdd = data_D.bleedAdd[this.sixData[2]];
        this.poisonAdd = data_D.poisonAdd[this.sixData[2]];

    }

    calc_TP(c) {
        this.sixData[3] = this.sixData[3] + c;
        this.block_head = data_D.block_head[this.sixData[3]];
        this.block_body = data_D.block_body[this.sixData[3]];
        this.block_hand = data_D.block_hand[this.sixData[3]];
        this.block_leg = data_D.block_leg[this.sixData[3]];
        this.def_o = data_D.def_o[this.sixData[3]];
        this.def_i = data_D.def_i[this.sixData[3]];
    }

    calc_NL(c) {
        this.sixData[4] = this.sixData[4] + c;
        this.zqVal = data_D.zqVal[this.sixData[4]];
        this.zqPerSec = data_D.zqPerSec[this.sixData[4]];
        this.zqHurtAdd = data_D.zqHurtAdd[this.sixData[4]];

    }

    init_blood() {
        this.mark_blood.head = [0, 0];
        this.mark_blood.body = [0, 0];
        this.mark_blood.handL = [0, 0];
        this.mark_blood.handR = [0, 0];
        this.mark_blood.legL = [0, 0];
        this.mark_blood.legR = [0, 0];
    }

    init_poison() {
        this.mark_poison.WJ_LL = 0;
        this.mark_poison.WJ_MJ = 0;
        this.mark_poison.WJ_ZL = 0;
        this.mark_poison.WJ_TP = 0;
        this.mark_poison.WJ_NL = 0;
        this.mark_poison.TM = 0;
        this.mark_poison.XH = 0;
    }

    init() {
        this.hp.head = data_const.hp.head;
        this.hp.body = data_const.hp.body;
        this.hp.hand = [data_const.hp.hand, data_const.hp.hand];
        this.hp.leg = [data_const.hp.leg, data_const.hp.leg];
        this.flaw = 0;
        this.zqBaoDiVal = 5;

        this.calc_LL(0);
        this.calc_MJ(0);
        this.calc_ZL(0);
        this.calc_TP(0);
        this.calc_NL(0);

        this.init_blood();
        this.init_poison();
    }

    init_photo() {
        this.photo.head = $.extend(true, [], data_i.head);
        this.photo.eye = $.extend(true, [], data_i.eye);
        this.photo.body = $.extend(true, [], data_i.body);
        this.photo.handL = $.extend(true, [], data_i.handL);
        this.photo.handR = $.extend(true, [], data_i.handR);
        this.photo.legL = $.extend(true, [], data_i.legL);
        this.photo.legR = $.extend(true, [], data_i.legR);

        this.photo.eye[0] = (this.photo.eye[0] + (2.14 / 5 * this.sixData[2])).toFixed(2);
        this.photo.eye[2] = (this.photo.eye[2] + (-4.22 / 5 * this.sixData[2])).toFixed(2);
        this.photo.eye[3] = (this.photo.eye[3] + (1.93 / 5 * this.sixData[2])).toFixed(2);
        this.photo.eye[4] = (this.photo.eye[4] + (-4.33 / 5 * this.sixData[2])).toFixed(2);
        this.photo.eye[5] = (this.photo.eye[5] + (-3.06 / 5 * this.sixData[2])).toFixed(2);
        this.photo.eye[6] = (this.photo.eye[6] + (2.75 / 5 * this.sixData[2])).toFixed(2);
        this.photo.eye[7] = (this.photo.eye[7] + (-0.68 / 5 * this.sixData[2])).toFixed(2);
        this.photo.eye[8] = (this.photo.eye[8] + (2.14 / 5 * this.sixData[2])).toFixed(2);

        this.photo.body[0] = (this.photo.body[0] + (5 / 5 * this.sixData[4]) + (-0.32 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[1] = (this.photo.body[1] + (5 / 5 * this.sixData[4]) + (-13.39 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[2] = (this.photo.body[2] + (3 / 5 * this.sixData[4]) + (3.19 / 5 * this.sixData[3]) + (-0.32 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[3] = (this.photo.body[3] + (0.62 / 5 * this.sixData[3]) + (-13.39 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[4] = (this.photo.body[4] + (6.49 / 5 * this.sixData[3]) + (-0.43 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[5] = (this.photo.body[5] + (-0.79 / 5 * this.sixData[3]) + (-14.07 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[6] = (this.photo.body[6] + (5.79 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[7] = (this.photo.body[7] + (4.33 / 5 * this.sixData[3]) + (-8.73 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[8] = (this.photo.body[8] + (3.78 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[9] = (this.photo.body[9] + (4.56 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[10] = (this.photo.body[10] + (3.37 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[11] = (this.photo.body[11] + (5.69 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[12] = (this.photo.body[12] + (1 / 5 * this.sixData[4])).toFixed(2);
        this.photo.body[13] = (this.photo.body[13] + (-1 / 5 * this.sixData[4])).toFixed(2);
        this.photo.body[18] = (this.photo.body[18] + (-4 / 5 * this.sixData[4])).toFixed(2);
        this.photo.body[20] = (this.photo.body[20] + (-2.91 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[21] = (this.photo.body[21] + (7.76 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[22] = (this.photo.body[22] + (-7.35 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[23] = (this.photo.body[23] + (9.3 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[24] = (this.photo.body[24] + (-16.23 / 5 * this.sixData[3]) + (-0.51 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[25] = (this.photo.body[25] + (-0.43 / 5 * this.sixData[3]) + (-13.81 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[26] = (this.photo.body[26] + (-7.57 / 5 * this.sixData[4]) + (-8.33 / 5 * this.sixData[3]) + (-0.31 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[27] = (this.photo.body[27] + (-3.53 / 5 * this.sixData[4]) + (2.38 / 5 * this.sixData[3]) + (-13.39 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[28] = (this.photo.body[28] + (-10.29 / 5 * this.sixData[4]) + (-0.31 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[29] = (this.photo.body[29] + (-0.72 / 5 * this.sixData[4]) + (-13.63 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[30] = (this.photo.body[30] + (-1.36 / 5 * this.sixData[4]) + (-0.82 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[31] = (this.photo.body[31] + (-0.13 / 5 * this.sixData[4]) + (-14.42 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[32] = (this.photo.body[32] + (-4 / 5 * this.sixData[4]) + (-0.82 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[33] = (this.photo.body[33] + (1 / 5 * this.sixData[4]) + (-14.42 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[34] = (this.photo.body[34] + (5 / 5 * this.sixData[4]) + (-0.32 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[35] = (this.photo.body[35] + (5 / 5 * this.sixData[4]) + (-13.39 / 5 * this.sixData[1])).toFixed(2);

        this.photo.handR[0] = (this.photo.handR[0] + (-2.91 / 5 * this.sixData[3])).toFixed(2);
        this.photo.handR[1] = (this.photo.handR[1] + (7.76 / 5 * this.sixData[3])).toFixed(2);
        this.photo.handR[2] = (this.photo.handR[2] + (0.24 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handR[3] = (this.photo.handR[3] + (2.32 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handR[4] = (this.photo.handR[4] + (3.6 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handR[5] = (this.photo.handR[5] + (1.89 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handR[8] = (this.photo.handR[8] + (4.67 / 5 * this.sixData[0])).toFixed(2);
        this.photo.handR[9] = (this.photo.handR[9] + (-8.16 / 5 * this.sixData[0])).toFixed(2);
        this.photo.handR[20] = (this.photo.handR[20] + (-4 / 5 * this.sixData[0])).toFixed(2);
        this.photo.handR[21] = (this.photo.handR[21] + (3 / 5 * this.sixData[0])).toFixed(2);
        this.photo.handR[24] = (this.photo.handR[24] + (-6 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handR[25] = (this.photo.handR[25] + (-5 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handR[26] = (this.photo.handR[26] + (-4.58 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handR[27] = (this.photo.handR[27] + (-7.45 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handR[28] = (this.photo.handR[28] + (-1 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handR[29] = (this.photo.handR[29] + (-5 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handR[30] = (this.photo.handR[30] + (-4 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handR[32] = (this.photo.handR[32] + (-2.91 / 5 * this.sixData[3])).toFixed(2);
        this.photo.handR[33] = (this.photo.handR[33] + (7.76 / 5 * this.sixData[3])).toFixed(2);

        this.photo.handL[0] = (this.photo.handL[0] + (3.37 / 5 * this.sixData[3])).toFixed(2);
        this.photo.handL[1] = (this.photo.handL[1] + (5.69 / 5 * this.sixData[3])).toFixed(2);
        this.photo.handL[2] = (this.photo.handL[2] + (-3.5 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handL[3] = (this.photo.handL[3] + (1.12 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handL[8] = (this.photo.handL[8] + (9 / 5 * this.sixData[0])).toFixed(2);
        this.photo.handL[9] = (this.photo.handL[9] + (-2 / 5 * this.sixData[0])).toFixed(2);
        this.photo.handL[22] = (this.photo.handL[22] + (-2 / 5 * this.sixData[0])).toFixed(2);
        this.photo.handL[26] = (this.photo.handL[26] + (5 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handL[27] = (this.photo.handL[27] + (-3 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handL[28] = (this.photo.handL[28] + (1.7 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handL[29] = (this.photo.handL[29] + (-3.65 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handL[30] = (this.photo.handL[30] + (1 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handL[31] = (this.photo.handL[31] + (-1 / 5 * this.sixData[4])).toFixed(2);
        this.photo.handL[32] = (this.photo.handL[32] + (3.37 / 5 * this.sixData[3])).toFixed(2);
        this.photo.handL[33] = (this.photo.handL[33] + (5.69 / 5 * this.sixData[3])).toFixed(2);

        this.photo.legR[0] = (this.photo.legR[0] + (-1.36 / 5 * this.sixData[4]) + (-0.82 / 5 * this.sixData[1])).toFixed(2);
        this.photo.legR[1] = (this.photo.legR[1] + (-0.13 / 5 * this.sixData[4]) + (-14.4 / 5 * this.sixData[1])).toFixed(2);
        this.photo.legR[4] = (this.photo.legR[4] + (2.06 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legR[5] = (this.photo.legR[5] + (-0.32 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legR[6] = (this.photo.legR[6] + (2.32 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legR[7] = (this.photo.legR[7] + (1.08 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legR[20] = (this.photo.legR[20] + (-6.06 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legR[21] = (this.photo.legR[21] + (2.51 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legR[22] = (this.photo.legR[22] + (-4.9 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legR[23] = (this.photo.legR[23] + (-8.11 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legR[26] = (this.photo.legR[26] + (-11 / 5 * this.sixData[4])).toFixed(2);
        this.photo.legR[28] = (this.photo.legR[28] + (-10.3 / 5 * this.sixData[4]) + (-0.31 / 5 * this.sixData[1])).toFixed(2);
        this.photo.legR[29] = (this.photo.legR[29] + (-0.72 / 5 * this.sixData[4]) + (-13.6 / 5 * this.sixData[1])).toFixed(2);
        this.photo.legR[30] = (this.photo.legR[30] + (-1.36 / 5 * this.sixData[4]) + (-0.82 / 5 * this.sixData[1])).toFixed(2);
        this.photo.legR[31] = (this.photo.legR[31] + (-0.13 / 5 * this.sixData[4]) + (-14.4 / 5 * this.sixData[1])).toFixed(2);

        this.photo.legL[0] = (this.photo.legL[0] + (5 / 5 * this.sixData[4]) + (-0.32 / 5 * this.sixData[1])).toFixed(2);
        this.photo.legL[1] = (this.photo.legL[1] + (5 / 5 * this.sixData[4]) + (-13.4 / 5 * this.sixData[1])).toFixed(2);
        this.photo.legL[2] = (this.photo.legL[2] + (2 / 5 * this.sixData[4])).toFixed(2);
        this.photo.legL[3] = (this.photo.legL[3] + (-1 / 5 * this.sixData[4])).toFixed(2);
        this.photo.legL[4] = (this.photo.legL[4] + (1.48 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legL[5] = (this.photo.legL[5] + (1.4 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legL[22] = (this.photo.legL[22] + (-2 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legL[23] = (this.photo.legL[23] + (3 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legL[26] = (this.photo.legL[26] + (-7 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legL[27] = (this.photo.legL[27] + (-2 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legL[28] = (this.photo.legL[28] + (-6 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legL[29] = (this.photo.legL[29] + (-7 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legL[30] = (this.photo.legL[30] + (-1 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legL[31] = (this.photo.legL[31] + (-4 / 5 * this.sixData[0])).toFixed(2);
        this.photo.legL[32] = (this.photo.legL[32] + (-4 / 5 * this.sixData[4]) + (-0.82 / 5 * this.sixData[1])).toFixed(2);
        this.photo.legL[33] = (this.photo.legL[33] + (1 / 5 * this.sixData[4]) + (-14.4 / 5 * this.sixData[1])).toFixed(2);
        this.photo.legL[34] = (this.photo.legL[34] + (5 / 5 * this.sixData[4]) + (-0.32 / 5 * this.sixData[1])).toFixed(2);
        this.photo.legL[35] = (this.photo.legL[35] + (5 / 5 * this.sixData[4]) + (-13.4 / 5 * this.sixData[1])).toFixed(2);
    }

}

//所选攻击招式
export class zsAttSort {
    zName = '';
    attFrom = '';
    attTo = '';
    comBo = false;
}

//所选防御招式
export class zsDefSort {
    zName = '';
    DefBody = '';
    comBo = false;
}

export class buffer {
    //二维数组 hurt_o = [[0.05,5],[0.1,2]]，代表两个buffer在身，一个5%，5s；另一个10%，2s。
    int(){
        this.hurt_o = [];
        this.hurt_i = [];
        this.hurt_p = [];
        this.hurt_b = [];
        this.hurt_q = [];
        this.hit = [];
        this.deBlock = [];
        this.block = [];
        this.dod = [];
        this.flaw = [];
        this.flaw_to = [];
        this.def_o = [];
        this.def_i = [];
        this.def_b = 0;
        this.def_p = 0;
        this.lock_zq = 0;
        this.time_q = 0;
        this.zqPerSec = 0;
        this.attBack_cp=0;
        this.attBack_po_normal = 0;
        this.attBack_po_block = 0;
        this.attBack_pi_normal = 0;
        this.attBack_pi_block = 0;
    }
}