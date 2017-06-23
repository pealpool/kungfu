// JavaScript Document
//http://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html
"use strict";


/*function abcde(bw, fw, ftHp) {
 var hhhp = Hp.createNew();
 hhhp.fantan(bw, fw, ftHp);
 alert(hhhp.jianL + "，" + hhhp.shangbiL);
 }*/



//HP
var Hp = {
    createNew: function () {
        var hp = {};
        //Hp最大值
        hp.Max_tou = 500;
        hp.Max_xiong = 900;
        hp.Max_fu = 700;
        hp.Max_yaoL = 610;
        hp.Max_yaoR = 610;
        hp.Max_jianL = 400;
        hp.Max_jianR = 400;
        hp.Max_shangbiL = 900;
        hp.Max_shangbiR = 900;
        hp.Max_zhouL = 310;
        hp.Max_zhouR = 310;
        hp.Max_qianbiL = 610;
        hp.Max_qianbiR = 610;
        hp.Max_shouwanL = 280;
        hp.Max_shouwanR = 280;
        hp.Max_datuiL = 1000;
        hp.Max_datuiR = 1000;
        hp.Max_xiL = 310;
        hp.Max_xiR = 310;
        hp.Max_xiaotuiL = 800;
        hp.Max_xiaotuiR = 800;
        hp.Max_huaiL = 280;
        hp.Max_huaiR = 280;
        hp.Max_pinheng = 0;
        //Hp
        hp.tou = 500;
        hp.xiong = 900;
        hp.fu = 700;
        hp.yaoL = 610;
        hp.yaoR = 610;
        hp.jianL = 400;
        hp.jianR = 400;
        hp.shangbiL = 900;
        hp.shangbiR = 900;
        hp.zhouL = 310;
        hp.zhouR = 310;
        hp.qianbiL = 610;
        hp.qianbiR = 610;
        hp.shouwanL = 280;
        hp.shouwanR = 280;
        hp.datuiL = 1000;
        hp.datuiR = 1000;
        hp.xiL = 310;
        hp.xiR = 310;
        hp.xiaotuiL = 800;
        hp.xiaotuiR = 800;
        hp.huaiL = 280;
        hp.huaiR = 280;
        hp.pinheng = 0;
        //hp重置
        hp.resetHP = function () {
            hp.tou = hp.Max_tou;
            hp.xiong = hp.Max_xiong;
            hp.fu = hp.Max_fu;
            hp.yaoL = hp.Max_yaoL;
            hp.yaoR = hp.Max_yaoR;
            hp.jianL = hp.Max_jianL;
            hp.jianR = hp.Max_jianR;
            hp.shangbiL = hp.Max_shangbiL;
            hp.shangbiR = hp.Max_shangbiR;
            hp.zhouL = hp.Max_zhouL;
            hp.zhouR = hp.Max_zhouR;
            hp.qianbiL = hp.Max_qianbiL;
            hp.qianbiR = hp.Max_qianbiR;
            hp.shouwanL = hp.Max_shouwanL;
            hp.shouwanR = hp.Max_shouwanR;
            hp.datuiL = hp.Max_datuiL;
            hp.datuiR = hp.Max_datuiR;
            hp.xiL = hp.Max_xiL;
            hp.xiR = hp.Max_xiR;
            hp.xiaotuiL = hp.Max_xiaotuiL;
            hp.xiaotuiR = hp.Max_xiaotuiR;
            hp.huaiL = hp.Max_huaiL;
            hp.huaiR = hp.Max_huaiR;
            hp.pinheng = hp.Max_pinheng;
        };
        //判断挂了没。 0：正常； 1：头hp零失去意识； 2：胸或腹hp零或总hp低于一半，重伤。
        hp.dead = function () {
            var sumHp = hp.tou + hp.xiong + hp.fu + hp.yaoL + hp.yaoR + hp.jianL + hp.jianR + hp.shangbiL + hp.shangbiR + hp.qianbiL + hp.qianbiR + hp.zhouL + hp.zhouR + hp.shouwanL + hp.shouwanR + hp.datuiL + hp.datuiR + hp.xiaotuiL + hp.xiaotuiR + hp.xiL + hp.xiR + hp.huaiL + hp.huaiR;
            var sumHp_Max = hp.tou_Max + hp.xiong_Max + hp.fu_Max + hp.yaoL_Max + hp.yaoR_Max + hp.jianL_Max + hp.jianR_Max + hp.shangbiL_Max + hp.shangbiR_Max + hp.qianbiL_Max + hp.qianbiR_Max + hp.zhouL_Max + hp.zhouR_Max + hp.shouwanL_Max + hp.shouwanR_Max + hp.datuiL_Max + hp.datuiR_Max + hp.xiaotuiL_Max + hp.xiaotuiR_Max + hp.xiL_Max + hp.xiR_Max + hp.huaiL_Max + hp.huaiR_Max;
            if (hp.tou === 0) {
                return 1;
            } else if (hp.xiong === 0 || hp.fu === 0 || sumHp < sumHp_Max) {
                return 2;
            } else {
                return 0;
            }
        };
        //防止小于0,并返回值1/0
        hp.subHP_tou = function (sHp) {
            var a=0;
            hp.tou = hp.tou - sHp;
            if (hp.tou < 0) {
                hp.tou = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_xiong = function (sHp) {
            var a=0;
            hp.xiong = hp.xiong - sHp;
            if (hp.xiong < 0) {
                hp.xiong = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_fu = function (sHp) {
            var a=0;
            hp.fu = hp.fu - sHp;
            if (hp.fu < 0) {
                hp.fu = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_yaoL = function (sHp) {
            var a=0;
            hp.yaoL = hp.yaoL - sHp;
            if (hp.yaoL < 0) {
                hp.yaoL = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_yaoR = function (sHp) {
            var a=0;
            hp.yaoR = hp.yaoR - sHp;
            if (hp.yaoR < 0) {
                hp.yaoR = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_jianL = function (sHp) {
            var a=0;
            hp.jianL = hp.jianL - sHp;
            if (hp.jianL < 0) {
                hp.jianL = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_jianR = function (sHp) {
            var a=0;
            hp.jianR = hp.jianR - sHp;
            if (hp.jianR < 0) {
                hp.jianR = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_shangbiL = function (sHp) {
            var a=0;
            hp.shangbiL = hp.shangbiL - sHp;
            if (hp.shangbiL < 0) {
                hp.shangbiL = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_shangbiR = function (sHp) {
            var a=0;
            hp.shangbiR = hp.shangbiR - sHp;
            if (hp.shangbiR < 0) {
                hp.shangbiR = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_qianbiL = function (sHp) {
            var a=0;
            hp.qianbiL = hp.qianbiL - sHp;
            if (hp.qianbiL < 0) {
                hp.qianbiL = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_qianbiR = function (sHp) {
            var a=0;
            hp.qianbiR = hp.qianbiR - sHp;
            if (hp.qianbiR < 0) {
                hp.qianbiR = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_zhouL = function (sHp) {
            var a=0;
            hp.zhouL = hp.zhouL - sHp;
            if (hp.zhouL < 0) {
                hp.zhouL = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_zhouR = function (sHp) {
            var a=0;
            hp.zhouR = hp.zhouR - sHp;
            if (hp.zhouR < 0) {
                hp.zhouR = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_shouwanL = function (sHp) {
            var a=0;
            hp.shouwanL = hp.shouwanL - sHp;
            if (hp.shouwanL < 0) {
                hp.shouwanL = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_shouwanR = function (sHp) {
            var a=0;
            hp.shouwanR = hp.shouwanR - sHp;
            if (hp.shouwanR < 0) {
                hp.shouwanR = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_datuiL = function (sHp) {
            var a=0;
            hp.datuiL = hp.datuiL - sHp;
            if (hp.datuiL < 0) {
                hp.datuiL = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_datuiR = function (sHp) {
            var a=0;
            hp.datuiR = hp.datuiR - sHp;
            if (hp.datuiR < 0) {
                hp.datuiR = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_xiaotuiL = function (sHp) {
            var a=0;
            hp.xiaotuiL = hp.xiaotuiL - sHp;
            if (hp.xiaotuiL < 0) {
                hp.xiaotuiL = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_xiaotuiR = function (sHp) {
            var a=0;
            hp.xiaotuiR = hp.xiaotuiR - sHp;
            if (hp.xiaotuiR < 0) {
                hp.xiaotuiR = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_xiL = function (sHp) {
            var a=0;
            hp.xiL = hp.xiL - sHp;
            if (hp.xiL < 0) {
                hp.xiL = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_xiR = function (sHp) {
            var a=0;
            hp.xiR = hp.xiR - sHp;
            if (hp.xiR < 0) {
                hp.xiR = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_huaiL = function (sHp) {
            var a=0;
            hp.huaiL = hp.huaiL - sHp;
            if (hp.huaiL < 0) {
                hp.huaiL = 0;
                a=1;
            }
            return a;
        };
        hp.subHP_huaiR = function (sHp) {
            var a=0;
            hp.huaiR = hp.huaiR - sHp;
            if (hp.huaiR < 0) {
                hp.huaiR = 0;
                a=1;
            }
            return a;
        };
        hp.subPingheng = function (sHp) {
            hp.pinheng = hp.pinheng + sHp;
            if (hp.pinheng < 0) {
                hp.pinheng = 0;
            }
            if (hp.pinheng > hp.Max_pinheng) {
                hp.pinheng = hp.Max_pinheng;
            }
        };
        //反弹受伤(部位，方位(r/l/b)，反弹伤害)
        hp.fantan = function (bw, fw, ftHp) {
            switch (bw) {
                case "shou":
                    switch (fw) {
                        case "l":
                            hp.subHP_jianL(ftHp / 5);
                            hp.subHP_shangbiL(ftHp / 5);
                            hp.subHP_qianbiL(ftHp / 5);
                            hp.subHP_zhouL(ftHp / 5);
                            hp.subHP_shouwanL(ftHp / 5);
                            break;
                        case "r":
                            hp.subHP_jianR(ftHp / 5);
                            hp.subHP_shangbiR(ftHp / 5);
                            hp.subHP_qianbiR(ftHp / 5);
                            hp.subHP_zhouR(ftHp / 5);
                            hp.subHP_shouwanR(ftHp / 5);
                            break;
                        case "b":
                            hp.subHP_jianL(ftHp / 10);
                            hp.subHP_shangbiL(ftHp / 10);
                            hp.subHP_qianbiL(ftHp / 10);
                            hp.subHP_zhouL(ftHp / 10);
                            hp.subHP_shouwanL(ftHp / 10);
                            hp.subHP_jianR(ftHp / 10);
                            hp.subHP_shangbiR(ftHp / 10);
                            hp.subHP_qianbiR(ftHp / 10);
                            hp.subHP_zhouR(ftHp / 10);
                            hp.subHP_shouwanR(ftHp / 10);
                            break;
                    }
                    break;
                case "zhou":
                    switch (fw) {
                        case "l":
                            hp.subHP_jianL(ftHp / 3);
                            hp.subHP_shangbiL(ftHp / 3);
                            hp.subHP_zhouL(ftHp / 3);
                            break;
                        case "r":
                            hp.subHP_jianR(ftHp / 3);
                            hp.subHP_shangbiR(ftHp / 3);
                            hp.subHP_zhouR(ftHp / 3);
                            break;
                        case "b":
                            hp.subHP_jianL(ftHp / 6);
                            hp.subHP_shangbiL(ftHp / 6);
                            hp.subHP_zhouL(ftHp / 6);
                            hp.subHP_jianR(ftHp / 6);
                            hp.subHP_shangbiR(ftHp / 6);
                            hp.subHP_zhouR(ftHp / 6);
                            break;
                    }
                    break;
                case "jiao":
                    switch (fw) {
                        case "l":
                            hp.subHP_datuiL(ftHp / 4);
                            hp.subHP_xiaotuiL(ftHp / 4);
                            hp.subHP_xiL(ftHp / 4);
                            hp.subHP_huaiL(ftHp / 4);
                            break;
                        case "r":
                            hp.subHP_datuiR(ftHp / 4);
                            hp.subHP_xiaotuiR(ftHp / 4);
                            hp.subHP_xiR(ftHp / 4);
                            hp.subHP_huaiR(ftHp / 4);
                            break;
                        case "b":
                            hp.subHP_datuiL(ftHp / 8);
                            hp.subHP_xiaotuiL(ftHp / 8);
                            hp.subHP_xiL(ftHp / 8);
                            hp.subHP_huaiL(ftHp / 8);
                            hp.subHP_datuiR(ftHp / 8);
                            hp.subHP_xiaotuiR(ftHp / 8);
                            hp.subHP_xiR(ftHp / 8);
                            hp.subHP_huaiR(ftHp / 8);
                            break;
                    }
                    break;
                case "xi":
                    switch (fw) {
                        case "l":
                            hp.subHP_datuiL(ftHp / 2);
                            hp.subHP_xiL(ftHp / 2);
                            break;
                        case "r":
                            hp.subHP_datuiR(ftHp / 2);
                            hp.subHP_xiR(ftHp / 2);
                            break;
                        case "b":
                            hp.subHP_datuiL(ftHp / 4);
                            hp.subHP_xiL(ftHp / 4);
                            hp.subHP_datuiR(ftHp / 4);
                            hp.subHP_xiR(ftHp / 4);
                            break;
                    }
                    break;
            }
        };
        return hp;
    }
};
