// JavaScript Document
"use strict";
//派别标记
var PaiBei = "Taiji";
//选择派别0 & 选择属性1 按钮激活标记
var XZbottom = 0;

function ChangechoiceBG(ZhaoShi){
	var Ditu = document.getElementById("choicePaiBei");
	var shi01 = document.getElementById("shi_01");
	var shi02 = document.getElementById("shi_02");
	var shiTimu = document.getElementById("shi_Timu");
	var hrhr = document.getElementById("cssStyle");
	if (ZhaoShi === 'Taiji'){
		Ditu.setAttribute("class", "choicePaiBei cPBTaiji");
		shiTimu.innerHTML="太极";
		shi01.innerHTML="攻击具有渗透性，高消削。";
		shi02.innerHTML="借力打力，化解冲击力。";
		hrhr.setAttribute("href","./css/cssTaiji.css");
	}
	if (ZhaoShi === 'Taiquan'){
		Ditu.setAttribute("class", "choicePaiBei cPBTaiquan");
		shiTimu.innerHTML="泰拳";
		shi01.innerHTML="攻击猛锐迅捷，杀伤力大。";
		shi02.innerHTML="并具有高抗打能力。";
		hrhr.setAttribute("href","./css/cssTaiquan.css");
	}
	//alert('Welcome!');
} 

/*window.onload = function(){
	var aaa = document.getElementById("choiceJinDuLan_XZshuxin");
	aaa.onclick = function(){
		aaa.innerHTML="aaa";
	};
};*/

function choicePB(pbpb){
	//var XZpaibei = document.getElementById("choiceJinDuLan_XZpaibei");
	//var XZshuxin = document.getElementById("choiceJinDuLan_XZshuxin");
	if (pbpb === 'Taiji'){
		PaiBei = "Taiji";
		document.getElementById("choiceZhaoshishiXiaoKuang_Taiji").style.backgroundColor = "#8ec4ec";
		document.getElementById("choiceZhaoshishiXiaoKuang_Taiquan").style.backgroundColor = "#fff";
	}
	if (pbpb === 'Taiquan'){
		PaiBei = "Taiquan";
		document.getElementById("choiceZhaoshishiXiaoKuang_Taiji").style.backgroundColor = "#fff";
		document.getElementById("choiceZhaoshishiXiaoKuang_Taiquan").style.backgroundColor = "#eb8d8d";
	}
	document.getElementById("choiceJinDuLan_XZpaibei").setAttribute("class","choiceJinDuLanButtom gray");
	document.getElementById("choiceJinDuLan_XZshuxin").setAttribute("class","choiceJinDuLanButtom red");
	document.getElementById("choiceZhaoshiDaKuang").style.display = "none";
	XZbottom = 1;
}

function XZbottomFF(Bu){
	if(Bu===1){
		if(XZbottom===0){
			document.getElementById("choiceZhaoshiDaKuang").style.display = "none";
			document.getElementById("choiceJinDuLan_XZpaibei").setAttribute("class","choiceJinDuLanButtom gray");
			document.getElementById("choiceJinDuLan_XZshuxin").setAttribute("class","choiceJinDuLanButtom red");
			XZbottom = 1;
			if(PaiBei === "Taiji"){
				document.getElementById("choicePaiBei").setAttribute("class", "choicePaiBei cPBTaiji");
			}
			if(PaiBei === "Taiquan"){
				document.getElementById("choicePaiBei").setAttribute("class", "choicePaiBei cPBTaiquan");
			}
		}
	}
	else{
		if(XZbottom===1){
			document.getElementById("choiceZhaoshiDaKuang").style.display = "inline";
			document.getElementById("choiceJinDuLan_XZpaibei").setAttribute("class","choiceJinDuLanButtom red");
			document.getElementById("choiceJinDuLan_XZshuxin").setAttribute("class","choiceJinDuLanButtom gray");
			XZbottom = 0;
		}
	}
}