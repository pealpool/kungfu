// JavaScript Document
"use strict";

//所选招式容器
var choiceZS = {
	createNew: function(){
		var aaa = {};
		aaa.zs_name = "";
		aaa.zs_frome = "";
		aaa.zs_to = "";
		aaa.zs_torl = "";
		//外伤伤害
		aaa.AttW = 0;
		//内伤伤害
		aaa.AttN = 0;
		//命中修正
		aaa.Mzxz = 0;
		//攻击前摇
		aaa.ATimeQ = 0;
		//攻击时间，默认1s
		aaa.ATime = 0;
		//攻击后摇
		aaa.ATimeH = 0;
		//平衡削减
		aaa.PinHengAtt = 0;
		//消耗稳定度
		aaa.PinHengXH = 0;
		//备注
		aaa.Beizhu = "30%破防";
		return aaa;
	}
};
