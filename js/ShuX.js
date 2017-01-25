// JavaScript Document
//http://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html
"use strict";

//力量
var ShuX_LiLiang = {
	createNew: function(){
		var shuX_LiLiang = {};
		//攻击力加成
		shuX_LiLiang.gongjiJC = function(a){
			switch(a){
				case 5:
					return 1.75;
					break;
				case 4:
					return 1.5;
					break;
				case 3:
					return 1.25;
					break;
				case 2:
					return 1;
					break;
				case 1:
					return 0.75;
					break;
				case 0:
					return 0.5;
					break;
			}
		};
		//暴击伤害
		shuX_LiLiang.baojishanghai = function(a){
			switch(a){
				case 5:
					return 2;
					break;
				case 4:
					return 1.65;
					break;
				case 3:
					return 1.55;
					break;
				case 2:
					return 1.45;
					break;
				case 1:
					return 1.25;
					break;
				case 0:
					return 1;
					break;
			}
		};
		return shuX_LiLiang;
	}
};


function abcde(a){
	var aaa = ShuX_LiLiang.createNew();
	alert(aaa.gongjiJC(a));
};