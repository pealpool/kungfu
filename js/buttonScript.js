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
			$("#zhaoshineirong").html("<div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>攀打</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_panda_te=''>特</div></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>推手</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>擒拿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>双峰贯耳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘底捶</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_zhoudicui_te=''>特</div></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>炮锤</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>鸳鸯腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_yuanyangtui_te>特</div></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>绊摔</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW8'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN8'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz8'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ8'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime8'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH8'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt8'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH8'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_banshuai_te>特</div></div></div>");
			$("#AttW1").html(tj_panda.AttW);
			$("#AttN1").html(tj_panda.AttN);
			$("#Mzxz1").html(Add_zh(tj_panda.Mzxz)*100+"%");
			$("#ATimeQ1").html(tj_panda.ATimeQ);
			$("#ATime1").html(tj_panda.ATime);
			$("#ATimeH1").html(tj_panda.ATimeH);
			$("#PinHengAtt1").html(tj_panda.PinHengAtt);
			$("#PinHengXH1").html(tj_panda.PinHengXH);
			
			$("#AttW2").html(tj_tuishou.AttW);
			$("#AttN2").html(tj_tuishou.AttN);
			$("#Mzxz2").html(Add_zh(tj_tuishou.Mzxz)*100+"%");
			$("#ATimeQ2").html(tj_tuishou.ATimeQ);
			$("#ATime2").html(tj_tuishou.ATime);
			$("#ATimeH2").html(tj_tuishou.ATimeH);
			$("#PinHengAtt2").html(tj_tuishou.PinHengAtt);
			$("#PinHengXH2").html(tj_tuishou.PinHengXH);
			
			$("#AttW3").html(tj_qingna.AttW);
			$("#AttN3").html(tj_qingna.AttN);
			$("#Mzxz3").html(Add_zh(tj_qingna.Mzxz)*100+"%");
			$("#ATimeQ3").html(tj_qingna.ATimeQ);
			$("#ATime3").html(tj_qingna.ATime);
			$("#ATimeH3").html(tj_qingna.ATimeH);
			$("#PinHengAtt3").html(tj_qingna.PinHengAtt);
			$("#PinHengXH3").html(tj_qingna.PinHengXH);
			
			$("#AttW4").html(tj_shuangfong.AttW);
			$("#AttN4").html(tj_shuangfong.AttN);
			$("#Mzxz4").html(Add_zh(tj_shuangfong.Mzxz)*100+"%");
			$("#ATimeQ4").html(tj_shuangfong.ATimeQ);
			$("#ATime4").html(tj_shuangfong.ATime);
			$("#ATimeH4").html(tj_shuangfong.ATimeH);
			$("#PinHengAtt4").html(tj_shuangfong.PinHengAtt);
			$("#PinHengXH4").html(tj_shuangfong.PinHengXH);
			
			$("#AttW5").html(tj_zhoudicui.AttW);
			$("#AttN5").html(tj_zhoudicui.AttN);
			$("#Mzxz5").html(Add_zh(tj_zhoudicui.Mzxz)*100+"%");
			$("#ATimeQ5").html(tj_zhoudicui.ATimeQ);
			$("#ATime5").html(tj_zhoudicui.ATime);
			$("#ATimeH5").html(tj_zhoudicui.ATimeH);
			$("#PinHengAtt5").html(tj_zhoudicui.PinHengAtt);
			$("#PinHengXH5").html(tj_zhoudicui.PinHengXH);
			
			$("#AttW6").html(tj_paocui.AttW);
			$("#AttN6").html(tj_paocui.AttN);
			$("#Mzxz6").html(Add_zh(tj_paocui.Mzxz)*100+"%");
			$("#ATimeQ6").html(tj_paocui.ATimeQ);
			$("#ATime6").html(tj_paocui.ATime);
			$("#ATimeH6").html(tj_paocui.ATimeH);
			$("#PinHengAtt6").html(tj_paocui.PinHengAtt);
			$("#PinHengXH6").html(tj_paocui.PinHengXH);
			
			$("#AttW7").html(tj_yuanyangtui.AttW);
			$("#AttN7").html(tj_yuanyangtui.AttN);
			$("#Mzxz7").html(Add_zh(tj_yuanyangtui.Mzxz)*100+"%");
			$("#ATimeQ7").html(tj_yuanyangtui.ATimeQ);
			$("#ATime7").html(tj_yuanyangtui.ATime);
			$("#ATimeH7").html(tj_yuanyangtui.ATimeH);
			$("#PinHengAtt7").html(tj_yuanyangtui.PinHengAtt);
			$("#PinHengXH7").html(tj_yuanyangtui.PinHengXH);
			
			$("#AttW8").html(tj_banshuai.AttW);
			$("#AttN8").html(tj_banshuai.AttN);
			$("#Mzxz8").html(Add_zh(tj_banshuai.Mzxz)*100+"%");
			$("#ATimeQ8").html(tj_banshuai.ATimeQ);
			$("#ATime8").html(tj_banshuai.ATime);
			$("#ATimeH8").html(tj_banshuai.ATimeH);
			$("#PinHengAtt8").html(tj_banshuai.PinHengAtt);
			$("#PinHengXH8").html(tj_banshuai.PinHengXH);
			
			
			
			
			break;
		case "Taiquan":
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiji").style.backgroundColor = "#fff";
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiquan").style.backgroundColor = "#eb8d8d";
			document.getElementById("ZhaoshiMinXiao").setAttribute("class", "ZhaoshiMinXiao Kuang10 ZsMX_Taiquan");
			$("#ZhaoshiMinXiao").html("泰<br />拳");
			$("#zhaoshineirong").html("<div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>直拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>左右勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>上勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘击</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 肘</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>膝撞</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 膝</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>蹬腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>扫腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div>");
			$("#AttW1").html(tq_zhiquan.AttW);
			$("#AttN1").html(tq_zhiquan.AttN);
			$("#Mzxz1").html(Add_zh(tq_zhiquan.Mzxz)*100+"%");
			$("#ATimeQ1").html(tq_zhiquan.ATimeQ);
			$("#ATime1").html(tq_zhiquan.ATime);
			$("#ATimeH1").html(tq_zhiquan.ATimeH);
			$("#PinHengAtt1").html(tq_zhiquan.PinHengAtt);
			$("#PinHengXH1").html(tq_zhiquan.PinHengXH);
			
			$("#AttW2").html(tq_lrgouquan.AttW);
			$("#AttN2").html(tq_lrgouquan.AttN);
			$("#Mzxz2").html(Add_zh(tq_lrgouquan.Mzxz)*100+"%");
			$("#ATimeQ2").html(tq_lrgouquan.ATimeQ);
			$("#ATime2").html(tq_lrgouquan.ATime);
			$("#ATimeH2").html(tq_lrgouquan.ATimeH);
			$("#PinHengAtt2").html(tq_lrgouquan.PinHengAtt);
			$("#PinHengXH2").html(tq_lrgouquan.PinHengXH);
			
			$("#AttW3").html(tq_sgouquan.AttW);
			$("#AttN3").html(tq_sgouquan.AttN);
			$("#Mzxz3").html(Add_zh(tq_sgouquan.Mzxz)*100+"%");
			$("#ATimeQ3").html(tq_sgouquan.ATimeQ);
			$("#ATime3").html(tq_sgouquan.ATime);
			$("#ATimeH3").html(tq_sgouquan.ATimeH);
			$("#PinHengAtt3").html(tq_sgouquan.PinHengAtt);
			$("#PinHengXH3").html(tq_sgouquan.PinHengXH);
			
			$("#AttW4").html(tq_zhouji.AttW);
			$("#AttN4").html(tq_zhouji.AttN);
			$("#Mzxz4").html(Add_zh(tq_zhouji.Mzxz)*100+"%");
			$("#ATimeQ4").html(tq_zhouji.ATimeQ);
			$("#ATime4").html(tq_zhouji.ATime);
			$("#ATimeH4").html(tq_zhouji.ATimeH);
			$("#PinHengAtt4").html(tq_zhouji.PinHengAtt);
			$("#PinHengXH4").html(tq_zhouji.PinHengXH);
			
			$("#AttW5").html(tq_xizhuang.AttW);
			$("#AttN5").html(tq_xizhuang.AttN);
			$("#Mzxz5").html(Add_zh(tq_xizhuang.Mzxz)*100+"%");
			$("#ATimeQ5").html(tq_xizhuang.ATimeQ);
			$("#ATime5").html(tq_xizhuang.ATime);
			$("#ATimeH5").html(tq_xizhuang.ATimeH);
			$("#PinHengAtt5").html(tq_xizhuang.PinHengAtt);
			$("#PinHengXH5").html(tq_xizhuang.PinHengXH);
			
			$("#AttW6").html(tq_dengtui.AttW);
			$("#AttN6").html(tq_dengtui.AttN);
			$("#Mzxz6").html(Add_zh(tq_dengtui.Mzxz)*100+"%");
			$("#ATimeQ6").html(tq_dengtui.ATimeQ);
			$("#ATime6").html(tq_dengtui.ATime);
			$("#ATimeH6").html(tq_dengtui.ATimeH);
			$("#PinHengAtt6").html(tq_dengtui.PinHengAtt);
			$("#PinHengXH6").html(tq_dengtui.PinHengXH);
			
			$("#AttW7").html(tq_shaotui.AttW);
			$("#AttN7").html(tq_shaotui.AttN);
			$("#Mzxz7").html(Add_zh(tq_shaotui.Mzxz)*100+"%");
			$("#ATimeQ7").html(tq_shaotui.ATimeQ);
			$("#ATime7").html(tq_shaotui.ATime);
			$("#ATimeH7").html(tq_shaotui.ATimeH);
			$("#PinHengAtt7").html(tq_shaotui.PinHengAtt);
			$("#PinHengXH7").html(tq_shaotui.PinHengXH);
			
			
			
			
			
			
			
			
			
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
			}else if (PaiBei === "Taiquan") {
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
					if(PaiBei === "Taiji"){
						$("#AttW1").html(Math.round(tq_zhiquan.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN1").html(Math.round(tq_zhiquan.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttW2").html(Math.round(tj_tuishou.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN2").html(Math.round(tj_tuishou.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttW3").html(Math.round(tj_qingna.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN3").html(Math.round(tj_qingna.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttW4").html(Math.round(tj_shuangfong.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN4").html(Math.round(tj_shuangfong.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttW5").html(Math.round(tj_zhoudicui.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN5").html(Math.round(tj_zhoudicui.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttW6").html(Math.round(tj_paocui.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN6").html(Math.round(tj_paocui.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttW7").html(Math.round(tj_yuanyangtui.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN7").html(Math.round(tj_yuanyangtui.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttW8").html(Math.round(tj_banshuai.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN8").html(Math.round(tj_banshuai.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
					}else if(PaiBei === "Taiquan"){
						$("#AttW1").html(Math.round(tq_zhiquan.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN1").html(Math.round(tq_zhiquan.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttW2").html(Math.round(tq_lrgouquan.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN2").html(Math.round(tq_lrgouquan.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttW3").html(Math.round(tq_sgouquan.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN3").html(Math.round(tq_sgouquan.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttW4").html(Math.round(tq_zhouji.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN4").html(Math.round(tq_zhouji.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttW5").html(Math.round(tq_xizhuang.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN5").html(Math.round(tq_xizhuang.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttW6").html(Math.round(tq_dengtui.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN6").html(Math.round(tq_dengtui.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttW7").html(Math.round(tq_shaotui.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
						$("#AttN7").html(Math.round(tq_shaotui.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)));
					}
					
					
					
					
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


/*	window.mSX_LiLiang = ShuX_LiLiang.createNew();
	window.mSX_Minjie = ShuX_MinJie.createNew();
	window.mSX_ZhiLi = ShuX_ZhiLi.createNew();
	window.mSX_Tizhi = ShuX_Tizhi.createNew();
	window.mSX_Pinheng = ShuX_PinHeng.createNew();
	
	window.tj_panda = TJ_panda.createNew();
	window.tj_tuishou = TJ_tuishou.createNew();
	window.tj_qingna = TJ_qingna.createNew();
	window.tj_shuangfong = TJ_shuangfong.createNew();
	window.tj_zhoudicui = TJ_zhoudicui.createNew();
	window.tj_paocui = TJ_paocui.createNew();
	window.tj_yuanyangtui = TJ_yuanyangtui.createNew();
	window.tj_banshuai = TJ_banshuai.createNew();
	
	window.tq_zhiquan = TQ_zhiquan.createNew();
	window.tq_lrgouquan = TQ_lrgouquan.createNew();
	window.tq_sgouquan = TQ_sgouquan.createNew();
	window.tq_zhouji = TQ_zhouji.createNew();
	window.tq_xizhuang = TQ_xizhuang.createNew();
	window.tq_dengtui = TQ_dengtui.createNew();
	window.tq_shaotui = TQ_shaotui.createNew();
*/

	//开启tooltip ui;
	$(function () {
		$(document).tooltip({
			items: "[title],[title_gongjiJC],[title_fangyujilv],[title_baojishanghai],[title_yibanfanshuang],[title_shudu],[title_fangyufanshuang],[title_shanbi],[title_wendinfantan],[title_baojijilv],[title_wendinzhi],[title_gongjifudongjilv],[title_wendinhuifu],[title_minzhongxz],[title_qinbao],[Taiji_panda_te],[Taiji_zhoudicui_te],[Taiji_yuanyangtui_te],[Taiji_banshuai_te]",
			/*position: {
				my: "left+170 top-26"
			},*/
			position: {
				my: "left top+9"
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
				}else if (element.is("[Taiji_panda_te]")) {
					return tj_panda.Beizhu;
				}else if (element.is("[Taiji_zhoudicui_te]")) {
					return tj_zhoudicui.Beizhu;
				}else if (element.is("[Taiji_yuanyangtui_te]")) {
					return tj_yuanyangtui.Beizhu;
				}else if (element.is("[Taiji_banshuai_te]")) {
					return tj_banshuai.Beizhu;
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
