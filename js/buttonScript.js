// JavaScript Document
"use strict";
//派别标记
var PaiBei = "Taiji";
//选择派别0 & 选择属性1 按钮激活标记
var XZbottom = 0;



function ChangechoiceBG(ZhaoShi) {
	var Ditu = document.getElementById("choicePaiBei");
	var shi01 = document.getElementById("shi_01");
	var shi02 = document.getElementById("shi_02");
	var shiTimu = document.getElementById("shi_Timu");
	var hrhr = document.getElementById("cssStyle");
	switch (ZhaoShi) {
		case "Taiji":
			Ditu.setAttribute("class", "choicePaiBei cPBTaiji");
			shiTimu.innerHTML = "太极";
			shi01.innerHTML = "攻击具有渗透性，高消削。";
			shi02.innerHTML = "借力打力，化解冲击力。";
			hrhr.setAttribute("href", "./css/cssTaiji.css");
			break;
		case "Taiquan":
			Ditu.setAttribute("class", "choicePaiBei cPBTaiquan");
			shiTimu.innerHTML = "泰拳";
			shi01.innerHTML = "攻击猛锐迅捷，杀伤力大。";
			shi02.innerHTML = "并具有高抗打能力。";
			hrhr.setAttribute("href", "./css/cssTaiquan.css");
			break;
	}
}

/*window.onload = function(){
	var aaa = document.getElementById("choiceJinDuLan_XZshuxin");
	aaa.onclick = function(){
		aaa.innerHTML="aaa";
	};
};*/


//选择派别后的动作
function choicePB_h() {
	switch (PaiBei) {
		case "Taiji":
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiji").style.backgroundColor = "#8ec4ec";
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiquan").style.backgroundColor = "#fff";
			document.getElementById("ZhaoshiMinXiao").setAttribute("class", "ZhaoshiMinXiao Kuang10 ZsMX_Taiji");
			$("#ZhaoshiMinXiao").html("太<br />极");
			break;
		case "Taiquan":
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiji").style.backgroundColor = "#fff";
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiquan").style.backgroundColor = "#eb8d8d";
			document.getElementById("ZhaoshiMinXiao").setAttribute("class", "ZhaoshiMinXiao Kuang10 ZsMX_Taiquan");
			$("#ZhaoshiMinXiao").html("泰<br />拳");
			break;
	}
	document.getElementById("choiceJinDuLan_XZpaibei").setAttribute("class", "choiceJinDuLanButtom gray");
	document.getElementById("choiceJinDuLan_XZshuxin").setAttribute("class", "choiceJinDuLanButtom red");
	XZbottom = 1;
	ChangechoiceBG(PaiBei);
}


//选择派别大按钮
function choicePB(pbpb) {
	//var XZpaibei = document.getElementById("choiceJinDuLan_XZpaibei");
	//var XZshuxin = document.getElementById("choiceJinDuLan_XZshuxin");
	PaiBei = pbpb;
	choicePB_h();
	//document.getElementById("choiceZhaoshiDaKuang").style.display = "none";
	$("#choiceZhaoshiDaKuang").hide("fade", 300, DaKuangHtS_ps);
	//document.getElementById("choiceShuxinDaKuang").style.display = "inline";
}

function DaKuangHtS_ps() {
	$("#choiceShuxinDaKuang").show("fade", 300);
}

function DaKuangHtS_sp() {
	$("#choiceZhaoshiDaKuang").show("fade", 300);
}

//直接选择顶栏
function XZbottomFF(Bu) {
	if (Bu === 1) {
		if (XZbottom === 0) {
			choicePB_h();
			//document.getElementById("choiceZhaoshiDaKuang").style.display = "none";
			//document.getElementById("choiceShuxinDaKuang").style.display = "inline";
			$("#choiceZhaoshiDaKuang").hide("fade", 300, DaKuangHtS_ps);
			if (PaiBei === "Taiji") {
				document.getElementById("choicePaiBei").setAttribute("class", "choicePaiBei cPBTaiji");
			}
			if (PaiBei === "Taiquan") {
				document.getElementById("choicePaiBei").setAttribute("class", "choicePaiBei cPBTaiquan");
			}
		}
	} else {
		if (XZbottom === 1) {
			//document.getElementById("choiceZhaoshiDaKuang").style.display = "inline";
			//document.getElementById("choiceShuxinDaKuang").style.display = "none";
			$("#choiceShuxinDaKuang").hide("fade", 300, DaKuangHtS_sp);
			document.getElementById("choiceJinDuLan_XZpaibei").setAttribute("class", "choiceJinDuLanButtom red");
			document.getElementById("choiceJinDuLan_XZshuxin").setAttribute("class", "choiceJinDuLanButtom gray");
			XZbottom = 0;
		}
	}
}
//加"+"号
function Add_zh(a) {
	var b;
	if (a >= 0) {
		b = "+" + a;
	} else {
		b = a;
	}
	return b;
}

// “+-”号 点击
function SXtiaozheng(shuxin, a) {
	/*	var mSX_LiLiang = ShuX_LiLiang.createNew();
		//var mSX_Minjie = ShuX_Minjie.createNew();
		var mSX_ZhiLi = ShuX_ZhiLi.createNew();
		var mSX_Tizhi = ShuX_Tizhi.createNew();
		var mSX_Pinheng = ShuX_PinHeng.createNew();*/
	if (a === 0) {
		switch (shuxin) {
			case "Liliang":
				if (SX_Liliang > 0) {
					SX_Liliang--;
					SX_Sum++;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Liliang").html(SX_Liliang);
					$("#DianshuguanlianXiaoKuang_s_gongjiJC").html(Add_zh(Math.round((mSX_LiLiang.gongjiJC(SX_Liliang) - 1) * 100)) + "%");
					$("#DianshuguanlianXiaoKuang_s_baojishanghai").html(Add_zh(Math.round((mSX_LiLiang.baojishanghai(SX_Liliang) - 1) * 100)) + "%");
				}
				break;
			case "Minjie":
				if (SX_Minjie > 0) {
					SX_Minjie--;
					SX_Sum++;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Minjie").html(SX_Minjie);
					$("#DianshuguanlianXiaoKuang_s_shudu").html(SX_Minjie);
					$("#DianshuguanlianXiaoKuang_s_shanbi").html(SX_Minjie);
				}
				break;
			case "Zhili":
				if (SX_Zhili > 0) {
					SX_Zhili--;
					SX_Sum++;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Zhili").html(SX_Zhili);
					$("#DianshuguanlianXiaoKuang_s_baojijilv").html(mSX_ZhiLi.baojijilv(SX_Zhili) * 100 + "%");
					$("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").html(mSX_ZhiLi.gongjifudongjilv(SX_Zhili) * 100 + "%");
					$("#DianshuguanlianXiaoKuang_s_minzhongxz").html(Add_zh(mSX_ZhiLi.minzhongxz(SX_Zhili) * 100) + "%");
					$("#DianshuguanlianXiaoKuang_s_qinbao").html(mSX_ZhiLi.qinbao(SX_Zhili));
				}
				break;
			case "Tizhi":
				if (SX_Tizhi > 0) {
					SX_Tizhi--;
					SX_Sum++;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Tizhi").html(SX_Tizhi);
					$("#DianshuguanlianXiaoKuang_s_fangyujilv").html(SX_Tizhi);
					$("#DianshuguanlianXiaoKuang_s_yibanfanshuang").html(mSX_Tizhi.yibanfanshuang(SX_Tizhi) * 100 + "%");
					$("#DianshuguanlianXiaoKuang_s_fangyufanshuang").html(mSX_Tizhi.fangyufanshuang(SX_Tizhi) * 100 + "%");
					$("#DianshuguanlianXiaoKuang_s_wendinfantan").html(mSX_Tizhi.wendinfantan(SX_Tizhi) * 100 + "%");
				}
				break;
			case "Pinheng":
				if (SX_Pinheng > 0) {
					SX_Pinheng--;
					SX_Sum++;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Pinheng").html(SX_Pinheng);
					$("#DianshuguanlianXiaoKuang_s_wendinzhi").html(mSX_Pinheng.wendinzhi(SX_Pinheng));
					$("#DianshuguanlianXiaoKuang_s_wendinhuifu").html(mSX_Pinheng.wendinhuifu(SX_Pinheng));
				}
				break;
		}
	} else {
		switch (shuxin) {
			case "Liliang":
				if (SX_Sum > 0 && SX_Liliang < 5) {
					SX_Liliang++;
					SX_Sum--;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Liliang").html(SX_Liliang);
					$("#DianshuguanlianXiaoKuang_s_gongjiJC").html(Add_zh(Math.round((mSX_LiLiang.gongjiJC(SX_Liliang) - 1) * 100)) + "%");
					$("#DianshuguanlianXiaoKuang_s_baojishanghai").html(Add_zh(Math.round((mSX_LiLiang.baojishanghai(SX_Liliang) - 1) * 100)) + "%");
				}
				break;
			case "Minjie":
				if (SX_Minjie < 5 && SX_Sum > 0) {
					SX_Minjie++;
					SX_Sum--;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Minjie").html(SX_Minjie);
					$("#DianshuguanlianXiaoKuang_s_shudu").html(SX_Minjie);
					$("#DianshuguanlianXiaoKuang_s_shanbi").html(SX_Minjie);
				}
				break;
			case "Zhili":
				if (SX_Zhili < 5 && SX_Sum > 0) {
					SX_Zhili++;
					SX_Sum--;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Zhili").html(SX_Zhili);
					$("#DianshuguanlianXiaoKuang_s_baojijilv").html(mSX_ZhiLi.baojijilv(SX_Zhili) * 100 + "%");
					$("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").html(mSX_ZhiLi.gongjifudongjilv(SX_Zhili) * 100 + "%");
					$("#DianshuguanlianXiaoKuang_s_minzhongxz").html(Add_zh(mSX_ZhiLi.minzhongxz(SX_Zhili) * 100) + "%");
					$("#DianshuguanlianXiaoKuang_s_qinbao").html(mSX_ZhiLi.qinbao(SX_Zhili));
				}
				break;
			case "Tizhi":
				if (SX_Tizhi < 5 && SX_Sum > 0) {
					SX_Tizhi++;
					SX_Sum--;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Tizhi").html(SX_Tizhi);
					$("#DianshuguanlianXiaoKuang_s_fangyujilv").html(SX_Tizhi);
					$("#DianshuguanlianXiaoKuang_s_yibanfanshuang").html(mSX_Tizhi.yibanfanshuang(SX_Tizhi) * 100 + "%");
					$("#DianshuguanlianXiaoKuang_s_fangyufanshuang").html(mSX_Tizhi.fangyufanshuang(SX_Tizhi) * 100 + "%");
					$("#DianshuguanlianXiaoKuang_s_wendinfantan").html(mSX_Tizhi.wendinfantan(SX_Tizhi) * 100 + "%");
				}
				break;
			case "Pinheng":
				if (SX_Pinheng < 3 && SX_Sum > 0) {
					SX_Pinheng++;
					SX_Sum--;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Pinheng").html(SX_Pinheng);
					$("#DianshuguanlianXiaoKuang_s_wendinzhi").html(mSX_Pinheng.wendinzhi(SX_Pinheng));
					$("#DianshuguanlianXiaoKuang_s_wendinhuifu").html(mSX_Pinheng.wendinhuifu(SX_Pinheng));
				}
				break;
		}
	}
	if (SX_Sum === 0) {
		$(".DianshuDaKuang_TR3.DDK_T_jj").removeClass("DDK_T_jj");
	} else {
		$(".DianshuDaKuang_TR3").addClass("DDK_T_jj");
		if (SX_Liliang === 5) {
			$("#DianshuDaKuang_TR3_Liliang").removeClass("DDK_T_jj");
		}
		if (SX_Minjie === 5) {
			$("#DianshuDaKuang_TR3_Minjie").removeClass("DDK_T_jj");
		}
		if (SX_Zhili === 5) {
			$("#DianshuDaKuang_TR3_Zhili").removeClass("DDK_T_jj");
		}
		if (SX_Tizhi === 5) {
			$("#DianshuDaKuang_TR3_Tizhi").removeClass("DDK_T_jj");
		}
		if (SX_Pinheng === 3) {
			$("#DianshuDaKuang_TR3_Pinheng").removeClass("DDK_T_jj");
		}
	}
	if (SX_Liliang === 0) {
		$("#DianshuDaKuang_TR1_Liliang").removeClass("DDK_T_jj");
	} else {
		$("#DianshuDaKuang_TR1_Liliang").addClass("DDK_T_jj");
	}
	if (SX_Minjie === 0) {
		$("#DianshuDaKuang_TR1_Minjie").removeClass("DDK_T_jj");
	} else {
		$("#DianshuDaKuang_TR1_Minjie").addClass("DDK_T_jj");
	}
	if (SX_Zhili === 0) {
		$("#DianshuDaKuang_TR1_Zhili").removeClass("DDK_T_jj");
	} else {
		$("#DianshuDaKuang_TR1_Zhili").addClass("DDK_T_jj");
	}
	if (SX_Tizhi === 0) {
		$("#DianshuDaKuang_TR1_Tizhi").removeClass("DDK_T_jj");
	} else {
		$("#DianshuDaKuang_TR1_Tizhi").addClass("DDK_T_jj");
	}
	if (SX_Pinheng === 0) {
		$("#DianshuDaKuang_TR1_Pinheng").removeClass("DDK_T_jj");
	} else {
		$("#DianshuDaKuang_TR1_Pinheng").addClass("DDK_T_jj");
	}
}


//情报解释 文字输出tooltip
function qinbaotooltip(a){
	switch(a){
		case 5:
			return "清楚彼此损伤细节，知晓对方能力强弱点。";
		case 4:
			return "清楚自身损伤细节及对方伤恙，知晓对方能力强弱点。";
		case 3:
			return "清楚自身损伤细节及对方伤恙。";
		case 2:
			return "清楚自身损伤细节";
		default:
			return "老子只需知道打！";
	}
}




$(document).ready(function () {


	window.mSX_LiLiang = ShuX_LiLiang.createNew();
	window.mSX_Minjie = ShuX_MinJie.createNew();
	window.mSX_ZhiLi = ShuX_ZhiLi.createNew();
	window.mSX_Tizhi = ShuX_Tizhi.createNew();
	window.mSX_Pinheng = ShuX_PinHeng.createNew();


	//开启tooltip ui;
	$(function () {
		$(document).tooltip({
			items: "[title],[title_gongjiJC],[title_fangyujilv],[title_baojishanghai],[title_yibanfanshuang],[title_shudu],[title_fangyufanshuang],[title_shanbi],[title_wendinfantan],[title_baojijilv],[title_wendinzhi],[title_gongjifudongjilv],[title_wendinhuifu],[title_minzhongxz],[title_qinbao]",
			position: {
				my: "left+170 top-26"
			},
			content: function () {
				var element = $(this);

				/*if (element.is("[title_shudu]")) {
					//var text = element.text();
					return "<div style='color:#a50000'>" + element.attr("id") +  "</div>";
				}
				if (element.is("[title]")) {
					return element.attr("title");
				}*/
				if (element.is("[title]")) {
					return element.attr("title");
				} else if (element.is("[title_gongjiJC]")) {
					return "攻击招式的攻击力 " + "<strong style='color:#a50000'>" + Add_zh(Math.round((mSX_LiLiang.gongjiJC(SX_Liliang) - 1) * 100)) + "%" + "</strong>";
				} else if (element.is("[title_fangyujilv]")) {
					return "<div style='margin-bottom:5px'>各部位防御几率：</div><div class='tooltip-fffmydiv3L'>头部：</div><div class='tooltip-fffmydiv3R'>" + mSX_Tizhi.FY_tou(SX_Tizhi) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>胸部：</div><div class='tooltip-fffmydiv3R'>" + mSX_Tizhi.FY_xiong(SX_Tizhi) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>腹部：</div><div class='tooltip-fffmydiv3R'>" + mSX_Tizhi.FY_fu(SX_Tizhi) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>腰部：</div><div class='tooltip-fffmydiv3R'>" + mSX_Tizhi.FY_yao(SX_Tizhi) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>肩关节：</div><div class='tooltip-fffmydiv3R'>" + mSX_Tizhi.FY_jian(SX_Tizhi) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>上臂：</div><div class='tooltip-fffmydiv3R'>" + mSX_Tizhi.FY_shangbi(SX_Tizhi) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>前臂：</div><div class='tooltip-fffmydiv3R'>" + mSX_Tizhi.FY_qianbi(SX_Tizhi) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>手肘：</div><div class='tooltip-fffmydiv3R'>" + mSX_Tizhi.FY_zhou(SX_Tizhi) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>手腕：</div><div class='tooltip-fffmydiv3R'>" + mSX_Tizhi.FY_shouwan(SX_Tizhi) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>大腿：</div><div class='tooltip-fffmydiv3R'>" + mSX_Tizhi.FY_datui(SX_Tizhi) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>小腿：</div><div class='tooltip-fffmydiv3R'>" + mSX_Tizhi.FY_xiaotui(SX_Tizhi) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>膝关节：</div><div class='tooltip-fffmydiv3R'>" + mSX_Tizhi.FY_xi(SX_Tizhi) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>踝关节：</div><div class='tooltip-fffmydiv3R'>" + mSX_Tizhi.FY_kuai(SX_Tizhi) * 100 + "%" + "</div>";
				} else if (element.is("[title_baojishanghai]")) {
					return "攻击招式的暴击伤害 " + "<strong style='color:#a50000'>" + Add_zh(Math.round((mSX_LiLiang.baojishanghai(SX_Liliang) - 1) * 100)) + "%" + "</strong>";
				} else if (element.is("[title_yibanfanshuang]")) {
					return "攻击招式命中目标且未被防御时，招式伤害的 " + "<strong style='color:#a50000'>" + mSX_Tizhi.yibanfanshuang(SX_Tizhi) * 100 + "%" + "</strong>" + " 会无视防御反弹给攻击者。<p>反弹的伤害由攻击者招式发出的部位及上级连带部位平均分摊。</p><p style='color:#7d7d7d; line-height:0px; text-align:right'>*杀敌一万，自损三千。 —— 孙子</p>";
				} else if (element.is("[title_shudu]")) {
					return "<div style='width:130px'><div class='tooltip-fffmydiv2L'>攻击前摇：</div><div class='tooltip-fffmydiv2R'>" + Add_zh(mSX_Minjie.shuduJC_Q(SX_Minjie)) + "s</div><div class='tooltip-fffmydiv2L'>招式时长：</div><div class='tooltip-fffmydiv2R'>" + Add_zh(mSX_Minjie.shuduJC_Z(SX_Minjie)) + "s</div><div class='tooltip-fffmydiv2L'>攻击后摇：</div><div class='tooltip-fffmydiv2R'>" + Add_zh(mSX_Minjie.shuduJC_H(SX_Minjie)) + "s</div></div>";
				} else if (element.is("[title_fangyufanshuang]")) {
					return "攻击招式命中目标且被防御时，招式伤害的 " + "<strong style='color:#a50000'>" + mSX_Tizhi.fangyufanshuang(SX_Tizhi) * 100 + "%" + "</strong>" + " 会无视防御反弹给攻击者。<p>反弹的伤害由攻击者招式发出的部位及上级连带部位平均分摊。</p><p style='color:#7d7d7d; line-height:0px; text-align:right'>*杀敌一万，自损三千。 —— 孙子</p>";
				} else if (element.is("[title_shanbi]")) {
					return "<div style='margin-bottom:5px'>各部位闪避几率：</div><div class='tooltip-fffmydiv3L'>头部：</div><div class='tooltip-fffmydiv3R'>" + mSX_Minjie.SB_tou(SX_Minjie) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>胸部：</div><div class='tooltip-fffmydiv3R'>" + mSX_Minjie.SB_xiong(SX_Minjie) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>腹部：</div><div class='tooltip-fffmydiv3R'>" + mSX_Minjie.SB_fu(SX_Minjie) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>腰部：</div><div class='tooltip-fffmydiv3R'>" + mSX_Minjie.SB_yao(SX_Minjie) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>肩关节：</div><div class='tooltip-fffmydiv3R'>" + mSX_Minjie.SB_jian(SX_Minjie) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>上臂：</div><div class='tooltip-fffmydiv3R'>" + mSX_Minjie.SB_shangbi(SX_Minjie) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>前臂：</div><div class='tooltip-fffmydiv3R'>" + mSX_Minjie.SB_qianbi(SX_Minjie) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>手肘：</div><div class='tooltip-fffmydiv3R'>" + mSX_Minjie.SB_zhou(SX_Minjie) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>手腕：</div><div class='tooltip-fffmydiv3R'>" + mSX_Minjie.SB_shouwan(SX_Minjie) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>大腿：</div><div class='tooltip-fffmydiv3R'>" + mSX_Minjie.SB_datui(SX_Minjie) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>小腿：</div><div class='tooltip-fffmydiv3R'>" + mSX_Minjie.SB_xiaotui(SX_Minjie) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>膝关节：</div><div class='tooltip-fffmydiv3R'>" + mSX_Minjie.SB_xi(SX_Minjie) * 100 + "%" + "</div><div class='tooltip-fffmydiv3L'>踝关节：</div><div class='tooltip-fffmydiv3R'>" + mSX_Minjie.SB_kuai(SX_Minjie) * 100 + "%" + "</div>";
				} else if (element.is("[title_wendinfantan]")) {
					return "攻击招式命中目标且被防御时，招式的稳定度消削 " + "<strong style='color:#a50000'>" + mSX_Tizhi.wendinfantan(SX_Tizhi) * 100 + "%" + "</strong>" + " 会无视防御反弹给攻击者。<p style='color:#7d7d7d; line-height:0px; text-align:right'>*杀敌一万，自损三千。 —— 孙子</p>";
				} else if (element.is("[title_baojijilv]")) {
					return "攻击招式有 " + "<strong style='color:#a50000'>" + mSX_ZhiLi.baojijilv(SX_Zhili) * 100 + "%" + "</strong>" + " 几率暴击";
				} else if (element.is("[title_wendinzhi]")) {
					return "最大稳定值为 " + "<strong style='color:#a50000'>" + mSX_Pinheng.wendinzhi(SX_Pinheng) + "</strong>" + "<p>所有招式均消耗稳定值，稳定值不足则不能行动，待恢复够所需稳定值为止。</p>";
				} else if (element.is("[title_gongjifudongjilv]")) {
					return "攻击招式攻击力会在 ±10% 间浮动，<br />" + "现有" + "<strong style='color:#a50000'>" + mSX_ZhiLi.gongjifudongjilv(SX_Zhili) * 100 + "%" + "</strong>" + " 几率为正浮动。";
				} else if (element.is("[title_wendinhuifu]")) {
					return "每 0.1s 恢复 " + "<strong style='color:#a50000'>" + mSX_Pinheng.wendinhuifu(SX_Pinheng) + "</strong>" + " 稳定度 <p>稳定度只在无动作时恢复。</p>";
				} else if (element.is("[title_minzhongxz]")) {
					return "攻击招式的命中率 " + "<strong style='color:#a50000'>" + Add_zh(mSX_ZhiLi.minzhongxz(SX_Zhili) * 100) + "%" + "</strong>";
				} else if (element.is("[title_qinbao]")) {
					return qinbaotooltip(SX_Zhili);
				}



			}
		});
	});



	/*点数-关联数值变红*/
	$("#DianshuDaKuang_T_Liliang").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_gongjiJC").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_gongjiJC").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_baojishanghai").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_baojishanghai").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_gongjiJC").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_gongjiJC").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_baojishanghai").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_baojishanghai").removeClass("redfont");
		}
	);
	$("#DianshuDaKuang_T_Minjie").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_shudu").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_shudu").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_shanbi").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_shanbi").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_shudu").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_shudu").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_shanbi").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_shanbi").removeClass("redfont");
		}
	);
	$("#DianshuDaKuang_T_Zhili").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_baojijilv").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_baojijilv").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_gongjifudongjilv").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_minzhongxz").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_minzhongxz").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_qinbao").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_qinbao").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_baojijilv").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_baojijilv").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_gongjifudongjilv").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_minzhongxz").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_minzhongxz").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_qinbao").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_qinbao").removeClass("redfont");
		}
	);
	$("#DianshuDaKuang_T_Tizhi").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_fangyujilv").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_fangyujilv").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_yibanfanshuang").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_yibanfanshuang").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_fangyufanshuang").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_fangyufanshuang").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_wendinfantan").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinfantan").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_fangyujilv").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_fangyujilv").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_yibanfanshuang").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_yibanfanshuang").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_fangyufanshuang").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_fangyufanshuang").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_wendinfantan").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinfantan").removeClass("redfont");
		}
	);
	$("#DianshuDaKuang_T_Pinheng").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_wendinzhi").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinzhi").addClass("redfont");
			$("#DianshuguanlianXiaoKuang_wendinhuifu").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinhuifu").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_wendinzhi").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinzhi").removeClass("redfont");
			$("#DianshuguanlianXiaoKuang_wendinhuifu").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinhuifu").removeClass("redfont");
		}
	);


	/*关联显示信息*/
	$("#DianshuguanlianXiaoKuang_gongjiJC").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_gongjiJC").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_gongjiJC").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_gongjiJC").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_gongjiJC").removeClass("redfont");
		}
	);
	$("#DianshuguanlianXiaoKuang_baojishanghai").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_baojishanghai").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_baojishanghai").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_baojishanghai").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_baojishanghai").removeClass("redfont");
		}
	);
	$("#DianshuguanlianXiaoKuang_shudu").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_shudu").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_shudu").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_shudu").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_shudu").removeClass("redfont");
		}
	);
	$("#DianshuguanlianXiaoKuang_shanbi").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_shanbi").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_shanbi").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_shanbi").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_shanbi").removeClass("redfont");
		}
	);
	$("#DianshuguanlianXiaoKuang_baojijilv").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_baojijilv").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_baojijilv").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_baojijilv").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_baojijilv").removeClass("redfont");
		}
	);
	$("#DianshuguanlianXiaoKuang_gongjifudongjilv").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_gongjifudongjilv").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_gongjifudongjilv").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").removeClass("redfont");
		}
	);
	$("#DianshuguanlianXiaoKuang_minzhongxz").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_minzhongxz").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_minzhongxz").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_minzhongxz").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_minzhongxz").removeClass("redfont");
		}
	);
	$("#DianshuguanlianXiaoKuang_qinbao").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_qinbao").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_qinbao").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_qinbao").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_qinbao").removeClass("redfont");
		}
	);
	$("#DianshuguanlianXiaoKuang_fangyujilv").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_fangyujilv").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_fangyujilv").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_fangyujilv").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_fangyujilv").removeClass("redfont");
		}
	);
	$("#DianshuguanlianXiaoKuang_yibanfanshuang").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_yibanfanshuang").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_yibanfanshuang").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_yibanfanshuang").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_yibanfanshuang").removeClass("redfont");
		}
	);
	$("#DianshuguanlianXiaoKuang_fangyufanshuang").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_fangyufanshuang").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_fangyufanshuang").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_fangyufanshuang").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_fangyufanshuang").removeClass("redfont");
		}
	);
	$("#DianshuguanlianXiaoKuang_wendinfantan").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_wendinfantan").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinfantan").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_wendinfantan").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinfantan").removeClass("redfont");
		}
	);
	$("#DianshuguanlianXiaoKuang_wendinzhi").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_wendinzhi").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinzhi").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_wendinzhi").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinzhi").removeClass("redfont");
		}
	);
	$("#DianshuguanlianXiaoKuang_wendinhuifu").hover(
		function () {
			$("#DianshuguanlianXiaoKuang_wendinhuifu").addClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinhuifu").addClass("redfont");
		},
		function () {
			$("#DianshuguanlianXiaoKuang_wendinhuifu").removeClass("DianshuguanlianXiaoKuangS");
			$("#DianshuguanlianXiaoKuang_s_wendinhuifu").removeClass("redfont");
		}
	);

	//点数栏变派别说明
	$("#ZhaoshiMinXiao").hover(
		function () {
			if (PaiBei === "Taiji"){
				$("#DianshuDaKuang_jx").html("太极，<br />以慢打快，以静制动，借力打力。有内伤伤害打击高防御的对手，也有高消削平衡的招式牵制对手。<br />防御方面也有直接化减直接所受伤害的技能。");
			}else{
				$("#DianshuDaKuang_jx").html("泰拳，<br />攻击猛锐迅捷，杀伤力大。<br />并具有高抗打能力。");
			}
			$("#DianshuDaKuang_jx").show("fade", 300);
		},
		function () {
			$("#DianshuDaKuang_jx").hide("fade", 300);
		}
	);
	
	
	
	
	
	
	
	
});
