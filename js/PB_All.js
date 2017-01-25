ZhaoshujuZhaoshujuZhaoshujuZhaoshuju// JavaScript Document
"use strict";

//攻击招式参数类
var Zhaoshuju = {
	createNew: function () {
		var zhaoshuju = {};
		//发出攻击部位
		zhaoshuju.fAttBw_zhou = 0;
		zhaoshuju.fAttBw_quan = 0;
		zhaoshuju.fAttBw_xi = 0;
		zhaoshuju.fAttBw_jiao = 0;
		//发出攻击部位
		zhaoshuju.AttBw_tou = 0;
		zhaoshuju.AttBw_xiong = 0;
		zhaoshuju.AttBw_fu = 0;
		zhaoshuju.AttBw_yaoL = 0;
		zhaoshuju.AttBw_yaoR = 0;
		zhaoshuju.AttBw_jianL = 0;
		zhaoshuju.AttBw_jianR = 0;
		zhaoshuju.AttBw_shangbiL = 0;
		zhaoshuju.AttBw_shangbiR = 0;
		zhaoshuju.AttBw_qianbiL = 0;
		zhaoshuju.AttBw_qianbiR = 0;
		zhaoshuju.AttBw_zhouL = 0;
		zhaoshuju.AttBw_zhouR = 0;
		zhaoshuju.AttBw_shouwanL = 0;
		zhaoshuju.AttBw_shouwanR = 0;
		zhaoshuju.AttBw_datuiL = 0;
		zhaoshuju.AttBw_datuiR = 0;
		zhaoshuju.AttBw_xiaotuiL = 0;
		zhaoshuju.AttBw_xiaotuiR = 0;
		zhaoshuju.AttBw_xiL = 0;
		zhaoshuju.AttBw_xiR = 0;
		zhaoshuju.AttBw_huaiL = 0;
		zhaoshuju.AttBw_huaiR = 0;
		//外伤伤害
		zhaoshuju.AttW = 0;
		//内伤伤害
		zhaoshuju.AttN = 0;
		//命中修正
		zhaoshuju.Mzxz = 0;
		//攻击前摇
		zhaoshuju.ATimeQ = 0;
		//攻击时间，默认1s
		zhaoshuju.ATime = 1;
		//攻击后摇
		zhaoshuju.ATimeH = 0;
		//平衡削减
		zhaoshuju.PinHengAtt = 0;
		//消耗稳定度
		zhaoshuju.PinHengXH = 0;
		//备注
		zhaoshuju.Beizhu = "";
		return zhaoshuju;
	}
};
