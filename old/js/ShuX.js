// JavaScript Document
//http://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html
"use strict";
/*
var SX_Sum = new Array();
var SX_Liliang = new Array();
var SX_Minjie = new Array();
var SX_Zhili = new Array();
var SX_Tizhi = new Array();
var SX_Pinheng = new Array();

//我方属性
var SX_Sum[0] = 3;
var SX_Liliang[0] = 2;
var SX_Minjie[0] = 2;
var SX_Zhili[0] = 2;
var SX_Tizhi[0] = 2;
var SX_Pinheng[0] = 2;

//敌方属性
var SX_Sum[1] = 3;
var SX_Liliang[1] = 2;
var SX_Minjie[1] = 2;
var SX_Zhili[1] = 2;
var SX_Tizhi[1] = 2;
var SX_Pinheng[1] = 2;
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

        shuX_MinJie.SanBi = function (zs_name , minjie) {
            switch (String(zs_name)) {
                case "tou":
                    switch (minjie) {
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
                        default:
                            alert("属性点溢出错误:Xsjdyc0001");
                    }
                    break;
                case "xiong":
                    switch (minjie) {
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
                        default:
                            alert("属性点溢出错误:Xsjdyc0002");
                    }
                    break;
                case "fu":
                    switch (minjie) {
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
                        default:
                            alert("属性点溢出错误:Xsjdyc0003");
                    }
                    break;
                case "yao":
                    switch (minjie) {
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
                        default:
                            alert("属性点溢出错误:Xsjdyc0004");
                    }
                    break;
                case "jian":
                    switch (minjie) {
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
                        default:
                            alert("属性点溢出错误:Xsjdyc0005");
                    }
                    break;
                case "shangbi":
                    switch (minjie) {
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
                        default:
                            alert("属性点溢出错误:Xsjdyc0006");
                    }
                    break;
                case "zhou":
                    switch (minjie) {
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
                        default:
                            alert("属性点溢出错误:Xsjdyc0007");
                    }
                    break;
                case "qianbi":
                    switch (minjie) {
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
                        default:
                            alert("属性点溢出错误:Xsjdyc0008");
                    }
                    break;
                case "shouwan":
                    switch (minjie) {
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
                        default:
                            alert("属性点溢出错误:Xsjdyc0009");
                    }
                    break;
                case "datui":
                    switch (minjie) {
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
                        default:
                            alert("属性点溢出错误:Xsjdyc0010");
                    }
                    break;
                case "xi":
                    switch (minjie) {
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
                        default:
                            alert("属性点溢出错误:Xsjdyc0011");
                    }
                    break;
                case "xiaotui":
                    switch (minjie) {
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
                        default:
                            alert("属性点溢出错误:Xsjdyc0012");
                    }
                    break;
                case "huai":
                    switch (minjie) {
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
                        default:
                            alert("属性点溢出错误:Xsjdyc0013");
                    }
                    break;
                default:
                    alert("招式名称错误:X056566ert");
            }
        };
 		return shuX_MinJie;
 	}
};












var ShuX_ZhiLi = {
	createNew: function () {
		var wwa = {};
		//暴击几率
		wwa.baojijilv = function (a) {
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
		wwa.gongjifudongjilv = function (a) {
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
		wwa.minzhongxz = function (a) {
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
		//情报
		wwa.qinbao = function (a) {
			switch (a) {
				case 5:
					return "天眼";
				case 4:
					return "明敌";
				case 3:
					return "觉彼";
				case 2:
					return "自知";
				case 1:
					return "无知";
				case 0:
					return "无知";
			}
		};
		return wwa;
	}
};





var ShuX_Tizhi = {
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

        shuX_TiZhi.FangYuJiLv = function (zs_name ,tizhi) {
            switch (String(zs_name)) {
                case "tou":
                    switch (tizhi) {
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
                    break;
                case "xiong":
                    switch (tizhi) {
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
                    break;
                case "fu":
                    switch (tizhi) {
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
                    break;
                case "yao":
                    switch (tizhi) {
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
                    break;
                case "jian":
                    switch (tizhi) {
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
                    break;
                case "shangbi":
                    switch (tizhi) {
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
                    break;
                case "zhou":
                    switch (tizhi) {
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
                    break;
                case "qianbi":
                    switch (tizhi) {
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
                    break;
                case "shouwan":
                    switch (tizhi) {
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
                    break;
                case "datui":
                    switch (tizhi) {
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
                    break;
                case "xi":
                    switch (tizhi) {
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
                    break;
                case "xiaotui":
                    switch (tizhi) {
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
                    break;
                case "huai":
                    switch (tizhi) {
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
                    break;
                default:
                    alert("招式名称错误:X0511006ee");
            }
        };
		return shuX_TiZhi;
	}
};


var ShuX_PinHeng = {
	createNew: function () {
		var oop = {};
		//稳定
		oop.wendinzhi = function (a) {
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
		oop.wendinhuifu = function (a) {
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
		return oop;
	}
};
