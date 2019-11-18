// JavaScript Document
"use strict";

/*var TJ_panda = {
	createNew: function(){
		var tj_panda = Zhaoshuju.createNew();
		tj_panda.fAttBw_zhou = 0;
		tj_panda.fAttBw_quan = 1;
		tj_panda.fAttBw_xi = 0;
		tj_panda.fAttBw_jiao = 0;
		tj_panda.abcdefg = function(){
			alert(tj_panda.fAttBw_quan);
			alert(tj_panda.fAttBw_zhou);
			alert("555");
		};
		return tj_panda;
	}
};*/

/*function abcde() {
	var cat1 = TJ_panda.createNew();　　
	cat1.abcdefg();
};*/


//【太极】攀打
var TJ_panda = {
	createNew: function(){
		var tj_panda = {};
		tj_panda.fAttBw = "手";
		//发出攻击部位
		tj_panda.AttBw_tou = 1;
		tj_panda.AttBw_xiong = 1;
		tj_panda.AttBw_fu = 1;
		tj_panda.AttBw_yaoL = 0;
		tj_panda.AttBw_yaoR = 0;
		tj_panda.AttBw_jianL = 1;
		tj_panda.AttBw_jianR = 1;
		tj_panda.AttBw_shangbiL = 0;
		tj_panda.AttBw_shangbiR = 0;
		tj_panda.AttBw_qianbiL = 0;
		tj_panda.AttBw_qianbiR = 0;
		tj_panda.AttBw_zhouL = 0;
		tj_panda.AttBw_zhouR = 0;
		tj_panda.AttBw_shouwanL = 0;
		tj_panda.AttBw_shouwanR = 0;
		tj_panda.AttBw_datuiL = 0;
		tj_panda.AttBw_datuiR = 0;
		tj_panda.AttBw_xiaotuiL = 0;
		tj_panda.AttBw_xiaotuiR = 0;
		tj_panda.AttBw_xiL = 0;
		tj_panda.AttBw_xiR = 0;
		tj_panda.AttBw_huaiL = 0;
		tj_panda.AttBw_huaiR = 0;
		//外伤伤害
		tj_panda.AttW = 80;
		//内伤伤害
		tj_panda.AttN = 0;
		//命中修正
		tj_panda.Mzxz = 0;
		//攻击前摇
		tj_panda.ATimeQ = 0.3;
		//攻击时间，默认1s
		tj_panda.ATime = 1;
		//攻击后摇
		tj_panda.ATimeH = 0.3;
		//平衡削减
		tj_panda.PinHengAtt = 5;
		//消耗稳定度
		tj_panda.PinHengXH = 3;
		//备注
		tj_panda.Beizhu = "30%破防";
		return tj_panda;
	}
};

//【太极】推手
var TJ_tuishou = {
	createNew: function(){
		var tj_tuishou = {};
		tj_tuishou.fAttBw = "手";
		//发出攻击部位
		tj_tuishou.AttBw_tou = 0;
		tj_tuishou.AttBw_xiong = 1;
		tj_tuishou.AttBw_fu = 1;
		tj_tuishou.AttBw_yaoL = 0;
		tj_tuishou.AttBw_yaoR = 0;
		tj_tuishou.AttBw_jianL = 0;
		tj_tuishou.AttBw_jianR = 0;
		tj_tuishou.AttBw_shangbiL = 0;
		tj_tuishou.AttBw_shangbiR = 0;
		tj_tuishou.AttBw_qianbiL = 0;
		tj_tuishou.AttBw_qianbiR = 0;
		tj_tuishou.AttBw_zhouL = 0;
		tj_tuishou.AttBw_zhouR = 0;
		tj_tuishou.AttBw_shouwanL = 0;
		tj_tuishou.AttBw_shouwanR = 0;
		tj_tuishou.AttBw_datuiL = 0;
		tj_tuishou.AttBw_datuiR = 0;
		tj_tuishou.AttBw_xiaotuiL = 0;
		tj_tuishou.AttBw_xiaotuiR = 0;
		tj_tuishou.AttBw_xiL = 0;
		tj_tuishou.AttBw_xiR = 0;
		tj_tuishou.AttBw_huaiL = 0;
		tj_tuishou.AttBw_huaiR = 0;
		//外伤伤害
		tj_tuishou.AttW = 20;
		//内伤伤害
		tj_tuishou.AttN = 30;
		//命中修正
		tj_tuishou.Mzxz = 0;
		//攻击前摇
		tj_tuishou.ATimeQ = 0.3;
		//攻击时间，默认1s
		tj_tuishou.ATime = 1;
		//攻击后摇
		tj_tuishou.ATimeH = 0.3;
		//平衡削减
		tj_tuishou.PinHengAtt = 80;
		//消耗稳定度
		tj_tuishou.PinHengXH = 10;
		//备注
		tj_tuishou.Beizhu = "";
		return tj_tuishou;
	}
};

//【太极】擒拿
var TJ_qingna = {
	createNew: function(){
		var tj_qingna = {};
		tj_qingna.fAttBw = "手";
		//发出攻击部位
		tj_qingna.AttBw_tou = 0;
		tj_qingna.AttBw_xiong = 0;
		tj_qingna.AttBw_fu = 0;
		tj_qingna.AttBw_yaoL = 0;
		tj_qingna.AttBw_yaoR = 0;
		tj_qingna.AttBw_jianL = 1;
		tj_qingna.AttBw_jianR = 1;
		tj_qingna.AttBw_shangbiL = 0;
		tj_qingna.AttBw_shangbiR = 0;
		tj_qingna.AttBw_qianbiL = 0;
		tj_qingna.AttBw_qianbiR = 0;
		tj_qingna.AttBw_zhouL = 1;
		tj_qingna.AttBw_zhouR = 1;
		tj_qingna.AttBw_shouwanL = 1;
		tj_qingna.AttBw_shouwanR = 1;
		tj_qingna.AttBw_datuiL = 0;
		tj_qingna.AttBw_datuiR = 0;
		tj_qingna.AttBw_xiaotuiL = 0;
		tj_qingna.AttBw_xiaotuiR = 0;
		tj_qingna.AttBw_xiL = 0;
		tj_qingna.AttBw_xiR = 0;
		tj_qingna.AttBw_huaiL = 0;
		tj_qingna.AttBw_huaiR = 0;
		//外伤伤害
		tj_qingna.AttW = 0;
		//内伤伤害
		tj_qingna.AttN = 100;
		//命中修正
		tj_qingna.Mzxz = 0;
		//攻击前摇
		tj_qingna.ATimeQ = 0.4;
		//攻击时间，默认1s
		tj_qingna.ATime = 1;
		//攻击后摇
		tj_qingna.ATimeH = 0.3;
		//平衡削减
		tj_qingna.PinHengAtt = 10;
		//消耗稳定度
		tj_qingna.PinHengXH = 5;
		//备注
		tj_qingna.Beizhu = "";
		return tj_qingna;
	}
};


//【太极】双峰贯耳
var TJ_shuangfong = {
	createNew: function(){
		var tj_shuangfong = {};
		tj_shuangfong.fAttBw = "手";
		//发出攻击部位
		tj_shuangfong.AttBw_tou = 1;
		tj_shuangfong.AttBw_xiong = 0;
		tj_shuangfong.AttBw_fu = 0;
		tj_shuangfong.AttBw_yaoL = 0;
		tj_shuangfong.AttBw_yaoR = 0;
		tj_shuangfong.AttBw_jianL = 0;
		tj_shuangfong.AttBw_jianR = 0;
		tj_shuangfong.AttBw_shangbiL = 0;
		tj_shuangfong.AttBw_shangbiR = 0;
		tj_shuangfong.AttBw_qianbiL = 0;
		tj_shuangfong.AttBw_qianbiR = 0;
		tj_shuangfong.AttBw_zhouL = 0;
		tj_shuangfong.AttBw_zhouR = 0;
		tj_shuangfong.AttBw_shouwanL = 0;
		tj_shuangfong.AttBw_shouwanR = 0;
		tj_shuangfong.AttBw_datuiL = 0;
		tj_shuangfong.AttBw_datuiR = 0;
		tj_shuangfong.AttBw_xiaotuiL = 0;
		tj_shuangfong.AttBw_xiaotuiR = 0;
		tj_shuangfong.AttBw_xiL = 0;
		tj_shuangfong.AttBw_xiR = 0;
		tj_shuangfong.AttBw_huaiL = 0;
		tj_shuangfong.AttBw_huaiR = 0;
		//外伤伤害
		tj_shuangfong.AttW = 150;
		//内伤伤害
		tj_shuangfong.AttN = 150;
		//命中修正
		tj_shuangfong.Mzxz = -0.1;
		//攻击前摇
		tj_shuangfong.ATimeQ = 0.5;
		//攻击时间，默认1s
		tj_shuangfong.ATime = 1;
		//攻击后摇
		tj_shuangfong.ATimeH = 0.5;
		//平衡削减
		tj_shuangfong.PinHengAtt = 10;
		//消耗稳定度
		tj_shuangfong.PinHengXH = 5;
		//备注
		tj_shuangfong.Beizhu = "";
		return tj_shuangfong;
	}
};

//【太极】肘底捶
var TJ_zhoudicui = {
	createNew: function(){
		var tj_zhoudicui = {};
		tj_zhoudicui.fAttBw = "手";
		//发出攻击部位
		tj_zhoudicui.AttBw_tou = 0;
		tj_zhoudicui.AttBw_xiong = 1;
		tj_zhoudicui.AttBw_fu = 1;
		tj_zhoudicui.AttBw_yaoL = 1;
		tj_zhoudicui.AttBw_yaoR = 1;
		tj_zhoudicui.AttBw_jianL = 0;
		tj_zhoudicui.AttBw_jianR = 0;
		tj_zhoudicui.AttBw_shangbiL = 0;
		tj_zhoudicui.AttBw_shangbiR = 0;
		tj_zhoudicui.AttBw_qianbiL = 0;
		tj_zhoudicui.AttBw_qianbiR = 0;
		tj_zhoudicui.AttBw_zhouL = 0;
		tj_zhoudicui.AttBw_zhouR = 0;
		tj_zhoudicui.AttBw_shouwanL = 0;
		tj_zhoudicui.AttBw_shouwanR = 0;
		tj_zhoudicui.AttBw_datuiL = 1;
		tj_zhoudicui.AttBw_datuiR = 1;
		tj_zhoudicui.AttBw_xiaotuiL = 0;
		tj_zhoudicui.AttBw_xiaotuiR = 0;
		tj_zhoudicui.AttBw_xiL = 0;
		tj_zhoudicui.AttBw_xiR = 0;
		tj_zhoudicui.AttBw_huaiL = 0;
		tj_zhoudicui.AttBw_huaiR = 0;
		//外伤伤害
		tj_zhoudicui.AttW = 100;
		//内伤伤害
		tj_zhoudicui.AttN = 120;
		//命中修正
		tj_zhoudicui.Mzxz = -0.05;
		//攻击前摇
		tj_zhoudicui.ATimeQ = 0.4;
		//攻击时间，默认1s
		tj_zhoudicui.ATime = 1;
		//攻击后摇
		tj_zhoudicui.ATimeH = 0.4;
		//平衡削减
		tj_zhoudicui.PinHengAtt = 15;
		//消耗稳定度
		tj_zhoudicui.PinHengXH = 5;
		//备注
		tj_zhoudicui.Beizhu = "50%破防";
		return tj_zhoudicui;
	}
};

//【太极】炮锤
var TJ_paocui = {
	createNew: function(){
		var tj_paocui = {};
		tj_paocui.fAttBw = "手";
		//发出攻击部位
		tj_paocui.AttBw_tou = 0;
		tj_paocui.AttBw_xiong = 1;
		tj_paocui.AttBw_fu = 1;
		tj_paocui.AttBw_yaoL = 0;
		tj_paocui.AttBw_yaoR = 0;
		tj_paocui.AttBw_jianL = 1;
		tj_paocui.AttBw_jianR = 1;
		tj_paocui.AttBw_shangbiL = 0;
		tj_paocui.AttBw_shangbiR = 0;
		tj_paocui.AttBw_qianbiL = 0;
		tj_paocui.AttBw_qianbiR = 0;
		tj_paocui.AttBw_zhouL = 0;
		tj_paocui.AttBw_zhouR = 0;
		tj_paocui.AttBw_shouwanL = 0;
		tj_paocui.AttBw_shouwanR = 0;
		tj_paocui.AttBw_datuiL = 0;
		tj_paocui.AttBw_datuiR = 0;
		tj_paocui.AttBw_xiaotuiL = 0;
		tj_paocui.AttBw_xiaotuiR = 0;
		tj_paocui.AttBw_xiL = 0;
		tj_paocui.AttBw_xiR = 0;
		tj_paocui.AttBw_huaiL = 0;
		tj_paocui.AttBw_huaiR = 0;
		//外伤伤害
		tj_paocui.AttW = 100;
		//内伤伤害
		tj_paocui.AttN = 200;
		//命中修正
		tj_paocui.Mzxz = 0;
		//攻击前摇
		tj_paocui.ATimeQ = 0.6;
		//攻击时间，默认1s
		tj_paocui.ATime = 1;
		//攻击后摇
		tj_paocui.ATimeH = 0.5;
		//平衡削减
		tj_paocui.PinHengAtt = 60;
		//消耗稳定度
		tj_paocui.PinHengXH = 15;
		//备注
		tj_paocui.Beizhu = "";
		return tj_paocui;
	}
};

//【太极】鸳鸯腿
var TJ_yuanyangtui = {
	createNew: function(){
		var tj_yuanyangtui = {};
		tj_yuanyangtui.fAttBw = "脚";
		//发出攻击部位
		tj_yuanyangtui.AttBw_tou = 1;
		tj_yuanyangtui.AttBw_xiong = 1;
		tj_yuanyangtui.AttBw_fu = 1;
		tj_yuanyangtui.AttBw_yaoL = 0;
		tj_yuanyangtui.AttBw_yaoR = 0;
		tj_yuanyangtui.AttBw_jianL = 0;
		tj_yuanyangtui.AttBw_jianR = 0;
		tj_yuanyangtui.AttBw_shangbiL = 0;
		tj_yuanyangtui.AttBw_shangbiR = 0;
		tj_yuanyangtui.AttBw_qianbiL = 0;
		tj_yuanyangtui.AttBw_qianbiR = 0;
		tj_yuanyangtui.AttBw_zhouL = 0;
		tj_yuanyangtui.AttBw_zhouR = 0;
		tj_yuanyangtui.AttBw_shouwanL = 0;
		tj_yuanyangtui.AttBw_shouwanR = 0;
		tj_yuanyangtui.AttBw_datuiL = 0;
		tj_yuanyangtui.AttBw_datuiR = 0;
		tj_yuanyangtui.AttBw_xiaotuiL = 0;
		tj_yuanyangtui.AttBw_xiaotuiR = 0;
		tj_yuanyangtui.AttBw_xiL = 0;
		tj_yuanyangtui.AttBw_xiR = 0;
		tj_yuanyangtui.AttBw_huaiL = 0;
		tj_yuanyangtui.AttBw_huaiR = 0;
		//外伤伤害
		tj_yuanyangtui.AttW = 200;
		//内伤伤害
		tj_yuanyangtui.AttN = 0;
		//命中修正
		tj_yuanyangtui.Mzxz = 0;
		//攻击前摇
		tj_yuanyangtui.ATimeQ = 0.5;
		//攻击时间，默认1s
		tj_yuanyangtui.ATime = 1;
		//攻击后摇
		tj_yuanyangtui.ATimeH = 0.5;
		//平衡削减
		tj_yuanyangtui.PinHengAtt = 25;
		//消耗稳定度
		tj_yuanyangtui.PinHengXH = 15;
		//备注
		tj_yuanyangtui.Beizhu = "第二脚70%破防";
		return tj_yuanyangtui;
	}
};


//【太极】绊摔
var TJ_banshuai = {
	createNew: function(){
		var tj_banshuai = {};
		tj_banshuai.fAttBw = "脚";
		//发出攻击部位
		tj_banshuai.AttBw_tou = 0;
		tj_banshuai.AttBw_xiong = 0;
		tj_banshuai.AttBw_fu = 0;
		tj_banshuai.AttBw_yaoL = 0;
		tj_banshuai.AttBw_yaoR = 0;
		tj_banshuai.AttBw_jianL = 0;
		tj_banshuai.AttBw_jianR = 0;
		tj_banshuai.AttBw_shangbiL = 0;
		tj_banshuai.AttBw_shangbiR = 0;
		tj_banshuai.AttBw_qianbiL = 0;
		tj_banshuai.AttBw_qianbiR = 0;
		tj_banshuai.AttBw_zhouL = 1;
		tj_banshuai.AttBw_zhouR = 1;
		tj_banshuai.AttBw_shouwanL = 1;
		tj_banshuai.AttBw_shouwanR = 1;
		tj_banshuai.AttBw_datuiL = 0;
		tj_banshuai.AttBw_datuiR = 0;
		tj_banshuai.AttBw_xiaotuiL = 0;
		tj_banshuai.AttBw_xiaotuiR = 0;
		tj_banshuai.AttBw_xiL = 1;
		tj_banshuai.AttBw_xiR = 1;
		tj_banshuai.AttBw_huaiL = 1;
		tj_banshuai.AttBw_huaiR = 1;
		//外伤伤害
		tj_banshuai.AttW = 0;
		//内伤伤害
		tj_banshuai.AttN = 200;
		//命中修正
		tj_banshuai.Mzxz = -0.1;
		//攻击前摇
		tj_banshuai.ATimeQ = 0.4;
		//攻击时间，默认1s
		tj_banshuai.ATime = 1;
		//攻击后摇
		tj_banshuai.ATimeH = 0.4;
		//平衡削减
		tj_banshuai.PinHengAtt = 200;
		//消耗稳定度
		tj_banshuai.PinHengXH = 15;
		//备注
		tj_banshuai.Beizhu = "防御后不受伤害";
		return tj_banshuai;
	}
};