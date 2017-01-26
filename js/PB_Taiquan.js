// JavaScript Document
"use strict";

//【泰拳】直拳
var TQ_zhiquan = {
	createNew: function(){
		var tq_zhiquan = {};
		tq_zhiquan.fAttBw = "手";
		//发出攻击部位
		tq_zhiquan.AttBw_tou = 1;
		tq_zhiquan.AttBw_xiong = 1;
		tq_zhiquan.AttBw_fu = 1;
		tq_zhiquan.AttBw_yaoL = 0;
		tq_zhiquan.AttBw_yaoR = 0;
		tq_zhiquan.AttBw_jianL = 1;
		tq_zhiquan.AttBw_jianR = 1;
		tq_zhiquan.AttBw_shangbiL = 0;
		tq_zhiquan.AttBw_shangbiR = 0;
		tq_zhiquan.AttBw_qianbiL = 0;
		tq_zhiquan.AttBw_qianbiR = 0;
		tq_zhiquan.AttBw_zhouL = 0;
		tq_zhiquan.AttBw_zhouR = 0;
		tq_zhiquan.AttBw_shouwanL = 0;
		tq_zhiquan.AttBw_shouwanR = 0;
		tq_zhiquan.AttBw_datuiL = 0;
		tq_zhiquan.AttBw_datuiR = 0;
		tq_zhiquan.AttBw_xiaotuiL = 0;
		tq_zhiquan.AttBw_xiaotuiR = 0;
		tq_zhiquan.AttBw_xiL = 0;
		tq_zhiquan.AttBw_xiR = 0;
		tq_zhiquan.AttBw_huaiL = 0;
		tq_zhiquan.AttBw_huaiR = 0;
		//外伤伤害
		tq_zhiquan.AttW = 100;
		//内伤伤害
		tq_zhiquan.AttN = 0;
		//命中修正
		tq_zhiquan.Mzxz = 0;
		//攻击前摇
		tq_zhiquan.ATimeQ = 0.2;
		//攻击时间，默认1s
		tq_zhiquan.ATime = 1;
		//攻击后摇
		tq_zhiquan.ATimeH = 0.2;
		//平衡削减
		tq_zhiquan.PinHengAtt = 10;
		//消耗稳定度
		tq_zhiquan.PinHengXH = 3;
		//备注
		tq_zhiquan.Beizhu = "";
		return tq_zhiquan;
	}
};

//【泰拳】左右勾拳
var TQ_lrgouquan = {
	createNew: function(){
		var tq_lrgouquan = {};
		tq_lrgouquan.fAttBw = "手";
		//发出攻击部位
		tq_lrgouquan.AttBw_tou = 1;
		tq_lrgouquan.AttBw_xiong = 0;
		tq_lrgouquan.AttBw_fu = 0;
		tq_lrgouquan.AttBw_yaoL = 1;
		tq_lrgouquan.AttBw_yaoR = 1;
		tq_lrgouquan.AttBw_jianL = 1;
		tq_lrgouquan.AttBw_jianR = 1;
		tq_lrgouquan.AttBw_shangbiL = 1;
		tq_lrgouquan.AttBw_shangbiR = 1;
		tq_lrgouquan.AttBw_qianbiL = 0;
		tq_lrgouquan.AttBw_qianbiR = 0;
		tq_lrgouquan.AttBw_zhouL = 0;
		tq_lrgouquan.AttBw_zhouR = 0;
		tq_lrgouquan.AttBw_shouwanL = 0;
		tq_lrgouquan.AttBw_shouwanR = 0;
		tq_lrgouquan.AttBw_datuiL = 0;
		tq_lrgouquan.AttBw_datuiR = 0;
		tq_lrgouquan.AttBw_xiaotuiL = 0;
		tq_lrgouquan.AttBw_xiaotuiR = 0;
		tq_lrgouquan.AttBw_xiL = 0;
		tq_lrgouquan.AttBw_xiR = 0;
		tq_lrgouquan.AttBw_huaiL = 0;
		tq_lrgouquan.AttBw_huaiR = 0;
		//外伤伤害
		tq_lrgouquan.AttW = 200;
		//内伤伤害
		tq_lrgouquan.AttN = 0;
		//命中修正
		tq_lrgouquan.Mzxz = 0;
		//攻击前摇
		tq_lrgouquan.ATimeQ = 0.3;
		//攻击时间，默认1s
		tq_lrgouquan.ATime = 1;
		//攻击后摇
		tq_lrgouquan.ATimeH = 0.3;
		//平衡削减
		tq_lrgouquan.PinHengAtt = 20;
		//消耗稳定度
		tq_lrgouquan.PinHengXH = 8;
		//备注
		tq_lrgouquan.Beizhu = "";
		return tq_lrgouquan;
	}
};

//【泰拳】上勾拳
var TQ_sgouquan = {
	createNew: function(){
		var tq_sgouquan = {};
		tq_sgouquan.fAttBw = "手";
		//发出攻击部位
		tq_sgouquan.AttBw_tou = 1;
		tq_sgouquan.AttBw_xiong = 1;
		tq_sgouquan.AttBw_fu = 1;
		tq_sgouquan.AttBw_yaoL = 0;
		tq_sgouquan.AttBw_yaoR = 0;
		tq_sgouquan.AttBw_jianL = 1;
		tq_sgouquan.AttBw_jianR = 1;
		tq_sgouquan.AttBw_shangbiL = 0;
		tq_sgouquan.AttBw_shangbiR = 0;
		tq_sgouquan.AttBw_qianbiL = 0;
		tq_sgouquan.AttBw_qianbiR = 0;
		tq_sgouquan.AttBw_zhouL = 0;
		tq_sgouquan.AttBw_zhouR = 0;
		tq_sgouquan.AttBw_shouwanL = 0;
		tq_sgouquan.AttBw_shouwanR = 0;
		tq_sgouquan.AttBw_datuiL = 0;
		tq_sgouquan.AttBw_datuiR = 0;
		tq_sgouquan.AttBw_xiaotuiL = 0;
		tq_sgouquan.AttBw_xiaotuiR = 0;
		tq_sgouquan.AttBw_xiL = 0;
		tq_sgouquan.AttBw_xiR = 0;
		tq_sgouquan.AttBw_huaiL = 0;
		tq_sgouquan.AttBw_huaiR = 0;
		//外伤伤害
		tq_sgouquan.AttW = 200;
		//内伤伤害
		tq_sgouquan.AttN = 0;
		//命中修正
		tq_sgouquan.Mzxz = 0;
		//攻击前摇
		tq_sgouquan.ATimeQ = 0.3;
		//攻击时间，默认1s
		tq_sgouquan.ATime = 1;
		//攻击后摇
		tq_sgouquan.ATimeH = 0.3;
		//平衡削减
		tq_sgouquan.PinHengAtt = 25;
		//消耗稳定度
		tq_sgouquan.PinHengXH = 5;
		//备注
		tq_sgouquan.Beizhu = "";
		return tq_sgouquan;
	}
};

//【泰拳】肘击
var TQ_zhouji = {
	createNew: function(){
		var tq_zhouji = {};
		tq_zhouji.fAttBw = "肘";
		//发出攻击部位
		tq_zhouji.AttBw_tou = 1;
		tq_zhouji.AttBw_xiong = 1;
		tq_zhouji.AttBw_fu = 0;
		tq_zhouji.AttBw_yaoL = 0;
		tq_zhouji.AttBw_yaoR = 0;
		tq_zhouji.AttBw_jianL = 1;
		tq_zhouji.AttBw_jianR = 1;
		tq_zhouji.AttBw_shangbiL = 1;
		tq_zhouji.AttBw_shangbiR = 1;
		tq_zhouji.AttBw_qianbiL = 0;
		tq_zhouji.AttBw_qianbiR = 0;
		tq_zhouji.AttBw_zhouL = 0;
		tq_zhouji.AttBw_zhouR = 0;
		tq_zhouji.AttBw_shouwanL = 0;
		tq_zhouji.AttBw_shouwanR = 0;
		tq_zhouji.AttBw_datuiL = 0;
		tq_zhouji.AttBw_datuiR = 0;
		tq_zhouji.AttBw_xiaotuiL = 0;
		tq_zhouji.AttBw_xiaotuiR = 0;
		tq_zhouji.AttBw_xiL = 0;
		tq_zhouji.AttBw_xiR = 0;
		tq_zhouji.AttBw_huaiL = 0;
		tq_zhouji.AttBw_huaiR = 0;
		//外伤伤害
		tq_zhouji.AttW = 300;
		//内伤伤害
		tq_zhouji.AttN = 0;
		//命中修正
		tq_zhouji.Mzxz = -0.05;
		//攻击前摇
		tq_zhouji.ATimeQ = 0.3;
		//攻击时间，默认1s
		tq_zhouji.ATime = 1;
		//攻击后摇
		tq_zhouji.ATimeH = 0.3;
		//平衡削减
		tq_zhouji.PinHengAtt = 18;
		//消耗稳定度
		tq_zhouji.PinHengXH = 8;
		//备注
		tq_zhouji.Beizhu = "";
		return tq_zhouji;
	}
};

//【泰拳】膝撞
var TQ_xizhuang = {
	createNew: function(){
		var tq_xizhuang = {};
		tq_xizhuang.fAttBw = "膝";
		//发出攻击部位
		tq_xizhuang.AttBw_tou = 1;
		tq_xizhuang.AttBw_xiong = 1;
		tq_xizhuang.AttBw_fu = 1;
		tq_xizhuang.AttBw_yaoL = 0;
		tq_xizhuang.AttBw_yaoR = 0;
		tq_xizhuang.AttBw_jianL = 1;
		tq_xizhuang.AttBw_jianR = 1;
		tq_xizhuang.AttBw_shangbiL = 0;
		tq_xizhuang.AttBw_shangbiR = 0;
		tq_xizhuang.AttBw_qianbiL = 0;
		tq_xizhuang.AttBw_qianbiR = 0;
		tq_xizhuang.AttBw_zhouL = 0;
		tq_xizhuang.AttBw_zhouR = 0;
		tq_xizhuang.AttBw_shouwanL = 0;
		tq_xizhuang.AttBw_shouwanR = 0;
		tq_xizhuang.AttBw_datuiL = 0;
		tq_xizhuang.AttBw_datuiR = 0;
		tq_xizhuang.AttBw_xiaotuiL = 0;
		tq_xizhuang.AttBw_xiaotuiR = 0;
		tq_xizhuang.AttBw_xiL = 0;
		tq_xizhuang.AttBw_xiR = 0;
		tq_xizhuang.AttBw_huaiL = 0;
		tq_xizhuang.AttBw_huaiR = 0;
		//外伤伤害
		tq_xizhuang.AttW = 250;
		//内伤伤害
		tq_xizhuang.AttN = 0;
		//命中修正
		tq_xizhuang.Mzxz = -0.05;
		//攻击前摇
		tq_xizhuang.ATimeQ = 0.4;
		//攻击时间，默认1s
		tq_xizhuang.ATime = 1;
		//攻击后摇
		tq_xizhuang.ATimeH = 0.3;
		//平衡削减
		tq_xizhuang.PinHengAtt = 28;
		//消耗稳定度
		tq_xizhuang.PinHengXH = 10;
		//备注
		tq_xizhuang.Beizhu = "";
		return tq_xizhuang;
	}
};

//【泰拳】蹬腿
var TQ_dengtui = {
	createNew: function(){
		var tq_dengtui = {};
		tq_dengtui.fAttBw = "脚";
		//发出攻击部位
		tq_dengtui.AttBw_tou = 1;
		tq_dengtui.AttBw_xiong = 1;
		tq_dengtui.AttBw_fu = 1;
		tq_dengtui.AttBw_yaoL = 0;
		tq_dengtui.AttBw_yaoR = 0;
		tq_dengtui.AttBw_jianL = 1;
		tq_dengtui.AttBw_jianR = 1;
		tq_dengtui.AttBw_shangbiL = 0;
		tq_dengtui.AttBw_shangbiR = 0;
		tq_dengtui.AttBw_qianbiL = 0;
		tq_dengtui.AttBw_qianbiR = 0;
		tq_dengtui.AttBw_zhouL = 0;
		tq_dengtui.AttBw_zhouR = 0;
		tq_dengtui.AttBw_shouwanL = 0;
		tq_dengtui.AttBw_shouwanR = 0;
		tq_dengtui.AttBw_datuiL = 1;
		tq_dengtui.AttBw_datuiR = 1;
		tq_dengtui.AttBw_xiaotuiL = 1;
		tq_dengtui.AttBw_xiaotuiR = 1;
		tq_dengtui.AttBw_xiL = 1;
		tq_dengtui.AttBw_xiR = 1;
		tq_dengtui.AttBw_huaiL = 0;
		tq_dengtui.AttBw_huaiR = 0;
		//外伤伤害
		tq_dengtui.AttW = 280;
		//内伤伤害
		tq_dengtui.AttN = 0;
		//命中修正
		tq_dengtui.Mzxz = -0.05;
		//攻击前摇
		tq_dengtui.ATimeQ = 0.5;
		//攻击时间，默认1s
		tq_dengtui.ATime = 1;
		//攻击后摇
		tq_dengtui.ATimeH = 0.4;
		//平衡削减
		tq_dengtui.PinHengAtt = 35;
		//消耗稳定度
		tq_dengtui.PinHengXH = 15;
		//备注
		tq_dengtui.Beizhu = "";
		return tq_dengtui;
	}
};

//【泰拳】扫腿
var TQ_shaotui = {
	createNew: function(){
		var tq_shaotui = {};
		tq_shaotui.fAttBw = "脚";
		//发出攻击部位
		tq_shaotui.AttBw_tou = 1;
		tq_shaotui.AttBw_xiong = 0;
		tq_shaotui.AttBw_fu = 0;
		tq_shaotui.AttBw_yaoL = 1;
		tq_shaotui.AttBw_yaoR = 1;
		tq_shaotui.AttBw_jianL = 1;
		tq_shaotui.AttBw_jianR = 1;
		tq_shaotui.AttBw_shangbiL = 1;
		tq_shaotui.AttBw_shangbiR = 1;
		tq_shaotui.AttBw_qianbiL = 1;
		tq_shaotui.AttBw_qianbiR = 1;
		tq_shaotui.AttBw_zhouL = 1;
		tq_shaotui.AttBw_zhouR = 1;
		tq_shaotui.AttBw_shouwanL = 1;
		tq_shaotui.AttBw_shouwanR = 1;
		tq_shaotui.AttBw_datuiL = 1;
		tq_shaotui.AttBw_datuiR = 1;
		tq_shaotui.AttBw_xiaotuiL = 1;
		tq_shaotui.AttBw_xiaotuiR = 1;
		tq_shaotui.AttBw_xiL = 1;
		tq_shaotui.AttBw_xiR = 1;
		tq_shaotui.AttBw_huaiL = 1;
		tq_shaotui.AttBw_huaiR = 1;
		//外伤伤害
		tq_shaotui.AttW = 300;
		//内伤伤害
		tq_shaotui.AttN = 0;
		//命中修正
		tq_shaotui.Mzxz = -0.05;
		//攻击前摇
		tq_shaotui.ATimeQ = 0.5;
		//攻击时间，默认1s
		tq_shaotui.ATime = 1;
		//攻击后摇
		tq_shaotui.ATimeH = 0.5;
		//平衡削减
		tq_shaotui.PinHengAtt = 30;
		//消耗稳定度
		tq_shaotui.PinHengXH = 18;
		//备注
		tq_shaotui.Beizhu = "";
		return tq_shaotui;
	}
};