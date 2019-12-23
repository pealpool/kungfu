'use strict';
import $ from 'jquery';
import {data_D} from './myData_D.js';
import {data_i} from './myData_i.js';

export class Person {
    // sixData = new Array(4);
    //
    // constructor(sixData = new Array(4)) {
    //     this.sixData[0] = sixData[0];
    //     this.sixData[1] = sixData[1];
    //     this.sixData[2] = sixData[2];
    //     this.sixData[3] = sixData[3];
    //     this.sixData[4] = sixData[4];
    // };


    sixData = [0, 0, 0, 0, 0];//1力量，2敏捷，3智力，4体魄，5真气
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
    zqVal = 0;
    zqPerSec = 0;
    zqHurtAdd = 0;

    flaw = 0;

    photo = {
        head: [],
        handL: [],
        handR: [],
        legL: [],
        legR: [],
        body: [],
        eye: []
    };

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

    calc_ZQ(c) {
        this.sixData[4] = this.sixData[4] + c;
        this.zqVal = data_D.zqVal[this.sixData[4]];
        this.zqPerSec = data_D.zqPerSec[this.sixData[4]];
        this.zqHurtAdd = data_D.zqHurtAdd[this.sixData[4]];

    }

    init() {
        this.hp.head = 800;
        this.hp.body = 2000;
        this.hp.hand = [800, 800];
        this.hp.leg = [1000, 1000];
        this.flaw = 0;

        this.calc_LL(0);
        this.calc_MJ(0);
        this.calc_ZL(0);
        this.calc_TP(0);
        this.calc_ZQ(0);


    }

    init_photo() {
        this.photo.head = $.extend(true, [], data_i.head);
        this.photo.eye = $.extend(true, [], data_i.eye);
        this.photo.body = $.extend(true, [], data_i.body);
        this.photo.handL = $.extend(true, [], data_i.handL);
        this.photo.handR = $.extend(true, [], data_i.handR);
        this.photo.legL = $.extend(true, [], data_i.legL);
        this.photo.legR = $.extend(true, [], data_i.legR);

        this.photo.eye[1] = (this.photo.eye[1] + (0.34 / 5 * this.sixData[2])).toFixed(2);
        this.photo.eye[2] = (this.photo.eye[2] + (-3.52 / 5 * this.sixData[2])).toFixed(2);
        this.photo.eye[3] = (this.photo.eye[3] + (0.6 / 5 * this.sixData[2])).toFixed(2);
        this.photo.eye[4] = (this.photo.eye[4] + (-4.13 / 5 * this.sixData[2])).toFixed(2);
        this.photo.eye[5] = (this.photo.eye[5] + (-1.83 / 5 * this.sixData[2])).toFixed(2);
        this.photo.eye[9] = (this.photo.eye[9] + (0.34 / 5 * this.sixData[2])).toFixed(2);

        this.photo.body[0] =
            (this.photo.body[0] + (5 / 5 * this.sixData[4]) + (-0.32 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[1] =
            (this.photo.body[1] + (5 / 5 * this.sixData[4]) + (-13.39 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[2] =
            (this.photo.body[2] + (3 / 5 * this.sixData[4]) + (3.19 / 5 * this.sixData[3]) + (-0.32 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[3] =
            (this.photo.body[3] + (0.62 / 5 * this.sixData[3]) + (-13.39 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[4] =
            (this.photo.body[4] + (6.49 / 5 * this.sixData[3]) + (-0.43 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[5] =
            (this.photo.body[5] + (-0.79 / 5 * this.sixData[3]) + (-14.07 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[6] =
            (this.photo.body[6] + (5.79 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[7] =
            (this.photo.body[7] + (4.33 / 5 * this.sixData[3]) + (-8.73 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[8] =
            (this.photo.body[8] + (3.78 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[9] =
            (this.photo.body[9] + (4.56 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[10] =
            (this.photo.body[10] + (3.37 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[11] =
            (this.photo.body[11] + (5.69 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[12] =
            (this.photo.body[12] + (1 / 5 * this.sixData[4])).toFixed(2);
        this.photo.body[13] =
            (this.photo.body[13] + (-1 / 5 * this.sixData[4])).toFixed(2);
        this.photo.body[18] =
            (this.photo.body[18] + (-4 / 5 * this.sixData[4])).toFixed(2);
        this.photo.body[20] =
            (this.photo.body[20] + (-2.91 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[21] =
            (this.photo.body[21] + (7.76 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[22] =
            (this.photo.body[22] + (-7.35 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[23] =
            (this.photo.body[23] + (9.3 / 5 * this.sixData[3])).toFixed(2);
        this.photo.body[24] =
            (this.photo.body[24] + (-16.23 / 5 * this.sixData[3]) + (-0.51 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[25] =
            (this.photo.body[25] + (-0.43 / 5 * this.sixData[3]) + (-13.81 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[26] =
            (this.photo.body[26] + (-7.57 / 5 * this.sixData[4]) +(-8.33 / 5 * this.sixData[3]) + (-0.31 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[27] =
            (this.photo.body[27] + (-3.53 / 5 * this.sixData[4]) +(2.38 / 5 * this.sixData[3]) + (-13.39 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[28] =
            (this.photo.body[28] + (-10.29 / 5 * this.sixData[4]) + (-0.31 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[29] =
            (this.photo.body[29] + (-0.72 / 5 * this.sixData[4]) + (-13.63 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[30] =
            (this.photo.body[30] + (-1.36 / 5 * this.sixData[4]) + (-0.82 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[31] =
            (this.photo.body[31] + (-0.13 / 5 * this.sixData[4]) + (-14.42 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[32] =
            (this.photo.body[32] + (-4 / 5 * this.sixData[4]) + (-0.82 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[33] =
            (this.photo.body[33] + (1 / 5 * this.sixData[4]) + (-14.42 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[34] =
            (this.photo.body[34] + (5 / 5 * this.sixData[4]) + (-0.32 / 5 * this.sixData[1])).toFixed(2);
        this.photo.body[35] =
            (this.photo.body[35] + (5 / 5 * this.sixData[4]) + (-13.39 / 5 * this.sixData[1])).toFixed(2);

    }

}