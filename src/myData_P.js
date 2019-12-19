'use strict';
import {data_D} from './myData_D.js';

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


    sixData = [0, 0, 0, 0, 0];
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


}