// JavaScript Document
//http://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html
"use strict";


/*function abcde(a){
	var aaa = ShuX_LiLiang.createNew();
	alert(aaa.gongjiJC(a));
};
*/

//力量
var ShuX_LiLiang = {
	createNew: function () {
		var shuX_LiLiang = {};
		//攻击力加成
		shuX_LiLiang.gongjiJC = function (a) {
			switch (a) {
				case 5:
					return 1.75;
				case 4:
					return 1.5;
				case 3:
					return 1.25;
				case 2:
					return 1;
				case 1:
					return 0.75;
				case 0:
					return 0.5;
			}
		};
		//暴击伤害
		shuX_LiLiang.baojishanghai = function (a) {
			switch (a) {
				case 5:
					return 2;
				case 4:
					return 1.65;
				case 3:
					return 1.55;
				case 2:
					return 1.45;
				case 1:
					return 1.25;
				case 0:
					return 1;
			}
		};
		return shuX_LiLiang;
	}
};

//敏捷
var ShuX_MinJie = {
	createNew: function () {
		var shuX_MinJie = {};
		//速度加成，前摇
		shuX_MinJie.shuduJC_Q = function (a) {
			switch (a) {
				case 5:
					return -0.1;
				case 4:
					return 0;
				case 3:
					return 0;
				case 2:
					return 0;
				case 1:
					return 0;
				case 0:
					return 0.1;
			}
		};
		//速度加成，招式用时
		shuX_MinJie.shuduJC_Z = function (a) {
			switch (a) {
				case 5:
					return -0.1;
				case 4:
					return -0.1;
				case 3:
					return -0.1;
				case 2:
					return 0;
				case 1:
					return 0;
				case 0:
					return 0;
			}
		};
		//速度加成，后摇
		shuX_MinJie.shuduJC_H = function (a) {
			switch (a) {
				case 5:
					return -0.1;
				case 4:
					return -0.1;
				case 3:
					return 0;
				case 2:
					return 0;
				case 1:
					return 0.1;
				case 0:
					return 0.1;
			}
		};
		//【闪避】头
		shuX_MinJie.SB_tou = function (a) {
			switch (a) {
				case 5:
					return 0.8;
				case 4:
					return 0.65;
				case 3:
					return 0.55;
				case 2:
					return 0.45;
				case 1:
					return 0.35;
				case 0:
					return 0.25;
			}
		};
		//【闪避】胸部
		shuX_MinJie.SB_xiong = function (a) {
			switch (a) {
				case 5:
					return 0.5;
				case 4:
					return 0.35;
				case 3:
					return 0.25;
				case 2:
					return 0.20;
				case 1:
					return 0.10;
				case 0:
					return 0;
			}
		};
		//【闪避】腹部
		shuX_MinJie.SB_fu = function (a) {
			switch (a) {
				case 5:
					return 0.6;
				case 4:
					return 0.45;
				case 3:
					return 0.35;
				case 2:
					return 0.25;
				case 1:
					return 0.15;
				case 0:
					return 0.05;
			}
		};
		//【闪避】两腰
		shuX_MinJie.SB_yao = function (a) {
			switch (a) {
				case 5:
					return 0.6;
				case 4:
					return 0.45;
				case 3:
					return 0.35;
				case 2:
					return 0.25;
				case 1:
					return 0.15;
				case 0:
					return 0.05;
			}
		};	
		//【闪避】肩关节
		shuX_MinJie.SB_jian = function (a) {
			switch (a) {
				case 5:
					return 0.7;
				case 4:
					return 0.55;
				case 3:
					return 0.45;
				case 2:
					return 0.35;
				case 1:
					return 0.25;
				case 0:
					return 0.15;
			}
		};
		//【闪避】上臂
		shuX_MinJie.SB_shangbi = function (a) {
			switch (a) {
				case 5:
					return 0.4;
				case 4:
					return 0.25;
				case 3:
					return 0.15;
				case 2:
					return 0.05;
				case 1:
					return 0;
				case 0:
					return 0;
			}
		};
		//【闪避】前臂
		shuX_MinJie.SB_qianbi = function (a) {
			switch (a) {
				case 5:
					return 0.2;
				case 4:
					return 0.1;
				case 3:
					return 0;
				case 2:
					return 0;
				case 1:
					return 0;
				case 0:
					return 0;
			}
		};
		//【闪避】手肘
		shuX_MinJie.SB_zhou = function (a) {
			switch (a) {
				case 5:
					return 0.9;
				case 4:
					return 0.8;
				case 3:
					return 0.75;
				case 2:
					return 0.7;
				case 1:
					return 0.65;
				case 0:
					return 0.6;
			}
		};
		//【闪避】手腕
		shuX_MinJie.SB_shouwan = function (a) {
			switch (a) {
				case 5:
					return 0.9;
				case 4:
					return 0.8;
				case 3:
					return 0.75;
				case 2:
					return 0.7;
				case 1:
					return 0.65;
				case 0:
					return 0.6;
			}
		};
		//【闪避】大腿
		shuX_MinJie.SB_datui = function (a) {
			switch (a) {
				case 5:
					return 0.4;
				case 4:
					return 0.25;
				case 3:
					return 0.15;
				case 2:
					return 0.05;
				case 1:
					return 0;
				case 0:
					return 0;
			}
		};
		//【闪避】小腿
		shuX_MinJie.SB_xiaotui = function (a) {
			switch (a) {
				case 5:
					return 0.5;
				case 4:
					return 0.35;
				case 3:
					return 0.25;
				case 2:
					return 0.2;
				case 1:
					return 0.1;
				case 0:
					return 0;
			}
		};
		//【闪避】膝关节
		shuX_MinJie.SB_xi = function (a) {
			switch (a) {
				case 5:
					return 0.4;
				case 4:
					return 0.25;
				case 3:
					return 0.15;
				case 2:
					return 0.05;
				case 1:
					return 0;
				case 0:
					return 0;
			}
		};
		//【闪避】踝关节
		shuX_MinJie.SB_kuai = function (a) {
			switch (a) {
				case 5:
					return 0.8;
				case 4:
					return 0.65;
				case 3:
					return 0.55;
				case 2:
					return 0.45;
				case 1:
					return 0.35;
				case 0:
					return 0.25;
			}
		};
		return shuX_MinJie;
	}
};

//智力
var ShuX_ZhiLi = {
	createNew: function () {
		var shuX_ZhiLi = {};
		//暴击几率
		shuX_ZhiLi.baojijilv = function (a) {
			switch (a) {
				case 5:
					return 0.25;
				case 4:
					return 0.2;
				case 3:
					return 0.15;
				case 2:
					return 0.1;
				case 1:
					return 0.05;
				case 0:
					return 0;
			}
		};
		//攻击力浮动几率
		shuX_ZhiLi.gongjifudongjilv = function (a) {
			switch (a) {
				case 5:
					return 0.8;
				case 4:
					return 0.7;
				case 3:
					return 0.6;
				case 2:
					return 0.5;
				case 1:
					return 0.3;
				case 0:
					return 0.2;
			}
		};
		//命中率修正
		shuX_ZhiLi.minzhongxz = function (a) {
			switch (a) {
				case 5:
					return 0.1;
				case 4:
					return 0.05;
				case 3:
					return 0.02;
				case 2:
					return 0;
				case 1:
					return -0.05;
				case 0:
					return -0.1;
			}
		};		
		return shuX_ZhiLi;
	}
};

//体质
var ShuX_TiZhi = {
	createNew: function () {
		var shuX_TiZhi = {};
		//防御后反伤
		shuX_TiZhi.fangyufanshuang = function (a) {
			switch (a) {
				case 5:
					return 0.5;
				case 4:
					return 0.4;
				case 3:
					return 0.3;
				case 2:
					return 0.2;
				case 1:
					return 0.1;
				case 0:
					return 0;
			}
		};
		//一般反伤
		shuX_TiZhi.yibanfanshuang = function (a) {
			switch (a) {
				case 5:
					return 0.2;
				case 4:
					return 0.15;
				case 3:
					return 0.1;
				case 2:
					return 0.05;
				case 1:
					return 0;
				case 0:
					return 0;
			}
		};
		//防御后稳定反弹
		shuX_TiZhi.wendinfantan = function (a) {
			switch (a) {
				case 5:
					return 0.8;
				case 4:
					return 0.5;
				case 3:
					return 0.4;
				case 2:
					return 0.3;
				case 1:
					return 0.2;
				case 0:
					return 0;
			}
		};
		
		
		
		
		

		
		

		
		//【防御率】头
		shuX_TiZhi.FY_tou = function (a) {
			switch (a) {
				case 5:
					return 0.8;
				case 4:
					return 0.65;
				case 3:
					return 0.55;
				case 2:
					return 0.45;
				case 1:
					return 0.35;
				case 0:
					return 0.25;
			}
		};
		//【防御率】胸部
		shuX_TiZhi.FY_xiong = function (a) {
			switch (a) {
				case 5:
					return 0.8;
				case 4:
					return 0.65;
				case 3:
					return 0.55;
				case 2:
					return 0.45;
				case 1:
					return 0.35;
				case 0:
					return 0.25;
			}
		};
		//【防御率】腹部
		shuX_TiZhi.FY_fu = function (a) {
			switch (a) {
				case 5:
					return 0.7;
				case 4:
					return 0.55;
				case 3:
					return 0.45;
				case 2:
					return 0.35;
				case 1:
					return 0.25;
				case 0:
					return 0.15;
			}
		};
		//【防御率】两腰
		shuX_TiZhi.FY_yao = function (a) {
			switch (a) {
				case 5:
					return 0.6;
				case 4:
					return 0.45;
				case 3:
					return 0.35;
				case 2:
					return 0.25;
				case 1:
					return 0.15;
				case 0:
					return 0.05;
			}
		};	
		//【防御率】肩关节
		shuX_TiZhi.FY_jian = function (a) {
			switch (a) {
				case 5:
					return 0.7;
				case 4:
					return 0.55;
				case 3:
					return 0.45;
				case 2:
					return 0.35;
				case 1:
					return 0.25;
				case 0:
					return 0.15;
			}
		};
		//【防御率】上臂
		shuX_TiZhi.FY_shangbi = function (a) {
			switch (a) {
				case 5:
					return 0.9;
				case 4:
					return 0.8;
				case 3:
					return 0.75;
				case 2:
					return 0.70;
				case 1:
					return 0.65;
				case 0:
					return 0.6;
			}
		};
		//【防御率】前臂
		shuX_TiZhi.FY_qianbi = function (a) {
			switch (a) {
				case 5:
					return 0.9;
				case 4:
					return 0.8;
				case 3:
					return 0.75;
				case 2:
					return 0.70;
				case 1:
					return 0.65;
				case 0:
					return 0.6;
			}
		};
		//【防御率】手肘
		shuX_TiZhi.FY_zhou = function (a) {
			switch (a) {
				case 5:
					return 0.7;
				case 4:
					return 0.55;
				case 3:
					return 0.45;
				case 2:
					return 0.35;
				case 1:
					return 0.25;
				case 0:
					return 0.15;
			}
		};
		//【防御率】手腕
		shuX_TiZhi.FY_shouwan = function (a) {
			switch (a) {
				case 5:
					return 0.2;
				case 4:
					return 0.1;
				case 3:
					return 0;
				case 2:
					return 0;
				case 1:
					return 0;
				case 0:
					return 0;
			}
		};
		//【防御率】大腿
		shuX_TiZhi.FY_datui = function (a) {
			switch (a) {
				case 5:
					return 0.5;
				case 4:
					return 0.35;
				case 3:
					return 0.25;
				case 2:
					return 0.20;
				case 1:
					return 0.10;
				case 0:
					return 0;
			}
		};
		//【防御率】小腿
		shuX_TiZhi.FY_xiaotui = function (a) {
			switch (a) {
				case 5:
					return 0.8;
				case 4:
					return 0.65;
				case 3:
					return 0.55;
				case 2:
					return 0.45;
				case 1:
					return 0.35;
				case 0:
					return 0.25;
			}
		};
		//【防御率】膝关节
		shuX_TiZhi.FY_xi = function (a) {
			switch (a) {
				case 5:
					return 0.8;
				case 4:
					return 0.65;
				case 3:
					return 0.55;
				case 2:
					return 0.45;
				case 1:
					return 0.35;
				case 0:
					return 0.25;
			}
		};
		//【防御率】踝关节
		shuX_TiZhi.FY_kuai = function (a) {
			switch (a) {
				case 5:
					return 0.1;
				case 4:
					return 0.1;
				case 3:
					return 0;
				case 2:
					return 0;
				case 1:
					return 0;
				case 0:
					return 0;
			}
		};
		return shuX_TiZhi;
	}
};


//平衡
var ShuX_PinHeng = {
	createNew: function () {
		var shuX_PinHeng = {};
		//稳定
		shuX_PinHeng.wendinzhi = function (a) {
			switch (a) {
				case 3:
					return 150;
				case 2:
					return 120;
				case 1:
					return 100;
				case 0:
					return 70;
			}
		};
		//每0.1秒恢复稳定
		shuX_PinHeng.wendinhuifu = function (a) {
			switch (a) {
				case 3:
					return 3;
				case 2:
					return 2;
				case 1:
					return 1;
				case 0:
					return 1;
			}
		};
		return shuX_PinHeng;
	}
};