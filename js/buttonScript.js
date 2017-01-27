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

// “+-”号 点击
function SXtiaozheng(shuxin, a) {
	if (a === 0) {
		switch (shuxin) {
			case "Liliang":
				if (SX_Liliang > 0) {
					SX_Liliang = SX_Liliang - 1;
					SX_Sum = SX_Sum + 1;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Liliang").html(SX_Liliang);
				}
				break;
			case "Minjie":
				if (SX_Minjie > 0) {
					SX_Minjie = SX_Minjie - 1;
					SX_Sum = SX_Sum + 1;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Minjie").html(SX_Minjie);
				}
				break;
			case "Zhili":
				if (SX_Zhili > 0) {
					SX_Zhili = SX_Zhili - 1;
					SX_Sum = SX_Sum + 1;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Zhili").html(SX_Zhili);
				}
				break;
			case "Tizhi":
				if (SX_Tizhi > 0) {
					SX_Tizhi = SX_Tizhi - 1;
					SX_Sum = SX_Sum + 1;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Tizhi").html(SX_Tizhi);
				}
				break;
			case "Pinheng":
				if (SX_Pinheng > 0) {
					SX_Pinheng = SX_Pinheng - 1;
					SX_Sum = SX_Sum + 1;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Pinheng").html(SX_Pinheng);
				}
				break;
		}
	} else {
		switch (shuxin) {
			case "Liliang":
				if (SX_Sum > 0 && SX_Liliang<5) {
					SX_Liliang ++;
					SX_Sum --;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Liliang").html(SX_Liliang);
				}
				break;
			case "Minjie":
				if (SX_Minjie < 5 && SX_Sum > 0) {
					SX_Minjie ++;
					SX_Sum --;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Minjie").html(SX_Minjie);
				}
				break;
			case "Zhili":
				if (SX_Zhili < 5 && SX_Sum > 0) {
					SX_Zhili ++;
					SX_Sum --;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Zhili").html(SX_Zhili);
				}
				break;
			case "Tizhi":
				if (SX_Tizhi < 5 && SX_Sum > 0) {
					SX_Tizhi ++;
					SX_Sum --;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Tizhi").html(SX_Tizhi);
				}
				break;
			case "Pinheng":
				if (SX_Pinheng < 3 && SX_Sum > 0) {
					SX_Pinheng  ++;
					SX_Sum  --;
					$("#DianshuDaKuang_TTR").html(SX_Sum);
					$("#DianshuDaKuang_TR2_Pinheng").html(SX_Pinheng);
				}
				break;
		}
	}
}
