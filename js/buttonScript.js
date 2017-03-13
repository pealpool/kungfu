// JavaScript Document
"use strict";
//派别标记
var PaiBei_A = "Taiji";
var PaiBei_B = "Taiji";
//选择派别0 & 选择属性1 按钮激活标记
var XZbottom = 0;



function ChangechoiceBG(ZhaoShi) {
	switch (ZhaoShi) {
		case "Taiji":
			//Ditu.setAttribute("class", "choicePaiBei cPBTaiji0");
			$("#choicePaiBei").attr("class", "choicePaiBei cPBTaiji0");
			//shiTimu.innerHTML = "太极";
			$("#shi_Timu").html("太极");
			//shi01.innerHTML = "攻击具有渗透性，高消削。";
			$("#shi_01").html("攻击具有渗透性，高消削。");
			//shi02.innerHTML = "借力打力，化解冲击力。";
			$("#shi_02").html("借力打力，化解冲击力。");
			//hrhr.setAttribute("href", "./css/cssTaiji.css");
			$(".shi_hr").css("border-bottom", "1px solid #4388bb");
			//$("#choiceShuxinZhongKuangR").removeClass().addClass("choiceShuxinZhongKuangR Kuang10 cPBTaiji1");
			$("#choiceShuxinZhongKuangR").attr("class", "choiceShuxinZhongKuangR Kuang10 cPBTaiji1");
			break;
		case "Taiquan":
			//Ditu.setAttribute("class", "choicePaiBei cPBTaiquan0");
			$("#choicePaiBei").attr("class", "choicePaiBei cPBTaiquan0");
			//shiTimu.innerHTML = "泰拳";
			$("#shi_Timu").html("泰拳");
			//shi01.innerHTML = "攻击猛锐迅捷，杀伤力大。";
			$("#shi_01").html("攻击猛锐迅捷，杀伤力大。");
			//shi02.innerHTML = "并具有高抗打能力。";
			$("#shi_02").html("并具有高抗打能力。");
			//hrhr.setAttribute("href", "./css/cssTaiquan.css");
			$(".shi_hr").css("border-bottom", "1px solid #a50000");
			//$("#choiceShuxinZhongKuangR").removeClass().addClass("choiceShuxinZhongKuangR Kuang10 cPBTaiquan1");
			$("#choiceShuxinZhongKuangR").attr("class", "choiceShuxinZhongKuangR Kuang10 cPBTaiquan1");
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
	switch (PaiBei_A) {
		case "Taiji":
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiji").style.backgroundColor = "#8ec4ec";
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiquan").style.backgroundColor = "#fff";
			document.getElementById("ZhaoshiMinXiao").setAttribute("class", "ZhaoshiMinXiao Kuang10 ZsMX_Taiji");
			$("#ZhaoshiMinXiao").html("太<br />极");
			$("#zhaoshineirong").html("<div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>攀打</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_panda_te=''>特</div></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>推手</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>擒拿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>双峰贯耳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘底捶</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_zhoudicui_te=''>特</div></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>炮锤</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>鸳鸯腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_yuanyangtui_te>特</div></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>绊摔</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW8'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN8'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz8'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ8'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime8'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH8'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt8'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH8'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_banshuai_te>特</div></div></div>");

			/*			
						$("#AttW1").html(Math.round(tj_panda.AttW));
						$("#AttN1").html(Math.round(tj_panda.AttN));
						$("#Mzxz1").html(Add_zh(Math.round(tj_panda.Mzxz * 100)) + "%");
						$("#ATimeQ1").html(tj_panda.ATimeQ.toFixed(1));
						$("#ATime1").html(tj_panda.ATime.toFixed(1));
						$("#ATimeH1").html(tj_panda.ATimeH.toFixed(1));
						$("#PinHengAtt1").html(tj_panda.PinHengAtt);
						$("#PinHengXH1").html(tj_panda.PinHengXH);

						$("#AttW2").html(Math.round(tj_tuishou.AttW));
						$("#AttN2").html(Math.round(tj_tuishou.AttN));
						$("#Mzxz2").html(Add_zh(Math.round(tj_tuishou.Mzxz * 100)) + "%");
						$("#ATimeQ2").html(tj_tuishou.ATimeQ.toFixed(1));
						$("#ATime2").html(tj_tuishou.ATime.toFixed(1));
						$("#ATimeH2").html(tj_tuishou.ATimeH.toFixed(1));
						$("#PinHengAtt2").html(tj_tuishou.PinHengAtt);
						$("#PinHengXH2").html(tj_tuishou.PinHengXH);

						$("#AttW3").html(Math.round(tj_qingna.AttW));
						$("#AttN3").html(Math.round(tj_qingna.AttN));
						$("#Mzxz3").html(Add_zh(Math.round(tj_qingna.Mzxz * 100)) + "%");
						$("#ATimeQ3").html(tj_qingna.ATimeQ.toFixed(1));
						$("#ATime3").html(tj_qingna.ATime.toFixed(1));
						$("#ATimeH3").html(tj_qingna.ATimeH.toFixed(1));
						$("#PinHengAtt3").html(tj_qingna.PinHengAtt);
						$("#PinHengXH3").html(tj_qingna.PinHengXH);

						$("#AttW4").html(Math.round(tj_shuangfong.AttW));
						$("#AttN4").html(Math.round(tj_shuangfong.AttN));
						$("#Mzxz4").html(Add_zh(Math.round(tj_shuangfong.Mzxz * 100)) + "%");
						$("#ATimeQ4").html(tj_shuangfong.ATimeQ.toFixed(1));
						$("#ATime4").html(tj_shuangfong.ATime.toFixed(1));
						$("#ATimeH4").html(tj_shuangfong.ATimeH.toFixed(1));
						$("#PinHengAtt4").html(tj_shuangfong.PinHengAtt);
						$("#PinHengXH4").html(tj_shuangfong.PinHengXH);

						$("#AttW5").html(Math.round(tj_zhoudicui.AttW));
						$("#AttN5").html(Math.round(tj_zhoudicui.AttN));
						$("#Mzxz5").html(Add_zh(Math.round(tj_zhoudicui.Mzxz * 100)) + "%");
						$("#ATimeQ5").html(tj_zhoudicui.ATimeQ.toFixed(1));
						$("#ATime5").html(tj_zhoudicui.ATime.toFixed(1));
						$("#ATimeH5").html(tj_zhoudicui.ATimeH.toFixed(1));
						$("#PinHengAtt5").html(tj_zhoudicui.PinHengAtt);
						$("#PinHengXH5").html(tj_zhoudicui.PinHengXH);

						$("#AttW6").html(Math.round(tj_paocui.AttW));
						$("#AttN6").html(Math.round(tj_paocui.AttN));
						$("#Mzxz6").html(Add_zh(Math.round(tj_paocui.Mzxz * 100)) + "%");
						$("#ATimeQ6").html(tj_paocui.ATimeQ.toFixed(1));
						$("#ATime6").html(tj_paocui.ATime.toFixed(1));
						$("#ATimeH6").html(tj_paocui.ATimeH.toFixed(1));
						$("#PinHengAtt6").html(tj_paocui.PinHengAtt);
						$("#PinHengXH6").html(tj_paocui.PinHengXH);

						$("#AttW7").html(Math.round(tj_yuanyangtui.AttW));
						$("#AttN7").html(Math.round(tj_yuanyangtui.AttN));
						$("#Mzxz7").html(Add_zh(Math.round(tj_yuanyangtui.Mzxz * 100)) + "%");
						$("#ATimeQ7").html(tj_yuanyangtui.ATimeQ.toFixed(1));
						$("#ATime7").html(tj_yuanyangtui.ATime.toFixed(1));
						$("#ATimeH7").html(tj_yuanyangtui.ATimeH.toFixed(1));
						$("#PinHengAtt7").html(tj_yuanyangtui.PinHengAtt);
						$("#PinHengXH7").html(tj_yuanyangtui.PinHengXH);

						$("#AttW8").html(Math.round(tj_banshuai.AttW));
						$("#AttN8").html(Math.round(tj_banshuai.AttN));
						$("#Mzxz8").html(Add_zh(Math.round(tj_banshuai.Mzxz * 100)) + "%");
						$("#ATimeQ8").html(tj_banshuai.ATimeQ.toFixed(1));
						$("#ATime8").html(tj_banshuai.ATime.toFixed(1));
						$("#ATimeH8").html(tj_banshuai.ATimeH.toFixed(1));
						$("#PinHengAtt8").html(tj_banshuai.PinHengAtt);
						$("#PinHengXH8").html(tj_banshuai.PinHengXH);
			*/

			$("#PinHengAtt1").html(tj_panda.PinHengAtt);
			$("#PinHengXH1").html(tj_panda.PinHengXH);

			$("#PinHengAtt2").html(tj_tuishou.PinHengAtt);
			$("#PinHengXH2").html(tj_tuishou.PinHengXH);

			$("#PinHengAtt3").html(tj_qingna.PinHengAtt);
			$("#PinHengXH3").html(tj_qingna.PinHengXH);

			$("#PinHengAtt4").html(tj_shuangfong.PinHengAtt);
			$("#PinHengXH4").html(tj_shuangfong.PinHengXH);

			$("#PinHengAtt5").html(tj_zhoudicui.PinHengAtt);
			$("#PinHengXH5").html(tj_zhoudicui.PinHengXH);

			$("#PinHengAtt6").html(tj_paocui.PinHengAtt);
			$("#PinHengXH6").html(tj_paocui.PinHengXH);

			$("#PinHengAtt7").html(tj_yuanyangtui.PinHengAtt);
			$("#PinHengXH7").html(tj_yuanyangtui.PinHengXH);

			$("#PinHengAtt8").html(tj_banshuai.PinHengAtt);
			$("#PinHengXH8").html(tj_banshuai.PinHengXH);



			break;
		case "Taiquan":
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiji").style.backgroundColor = "#fff";
			document.getElementById("choiceZhaoshishiXiaoKuang_Taiquan").style.backgroundColor = "#eb8d8d";
			document.getElementById("ZhaoshiMinXiao").setAttribute("class", "ZhaoshiMinXiao Kuang10 ZsMX_Taiquan");
			$("#ZhaoshiMinXiao").html("泰<br />拳");
			$("#zhaoshineirong").html("<div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>直拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>左右勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>上勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘击</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 肘</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>膝撞</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 膝</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>蹬腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>扫腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div>");



			/*			
						$("#AttW1").html(Math.round(tq_zhiquan.AttW));
						$("#AttN1").html(Math.round(tq_zhiquan.AttN));
						$("#Mzxz1").html(Add_zh(Math.round(tq_zhiquan.Mzxz * 100)) + "%");
						$("#ATimeQ1").html(tq_zhiquan.ATimeQ.toFixed(1));
						$("#ATime1").html(tq_zhiquan.ATime.toFixed(1));
						$("#ATimeH1").html(tq_zhiquan.ATimeH.toFixed(1));
						$("#PinHengAtt1").html(tq_zhiquan.PinHengAtt);
						$("#PinHengXH1").html(tq_zhiquan.PinHengXH);

						$("#AttW2").html(Math.round(tq_lrgouquan.AttW));
						$("#AttN2").html(Math.round(tq_lrgouquan.AttN));
						$("#Mzxz2").html(Add_zh(Math.round(tq_lrgouquan.Mzxz * 100)) + "%");
						$("#ATimeQ2").html(tq_lrgouquan.ATimeQ.toFixed(1));
						$("#ATime2").html(tq_lrgouquan.ATime.toFixed(1));
						$("#ATimeH2").html(tq_lrgouquan.ATimeH.toFixed(1));
						$("#PinHengAtt2").html(tq_lrgouquan.PinHengAtt);
						$("#PinHengXH2").html(tq_lrgouquan.PinHengXH);

						$("#AttW3").html(Math.round(tq_sgouquan.AttW));
						$("#AttN3").html(Math.round(tq_sgouquan.AttN));
						$("#Mzxz3").html(Add_zh(Math.round(tq_sgouquan.Mzxz * 100)) + "%");
						$("#ATimeQ3").html(tq_sgouquan.ATimeQ.toFixed(1));
						$("#ATime3").html(tq_sgouquan.ATime.toFixed(1));
						$("#ATimeH3").html(tq_sgouquan.ATimeH.toFixed(1));
						$("#PinHengAtt3").html(tq_sgouquan.PinHengAtt);
						$("#PinHengXH3").html(tq_sgouquan.PinHengXH);

						$("#AttW4").html(Math.round(tq_zhouji.AttW));
						$("#AttN4").html(Math.round(tq_zhouji.AttN));
						$("#Mzxz4").html(Add_zh(Math.round(tq_zhouji.Mzxz * 100)) + "%");
						$("#ATimeQ4").html(tq_zhouji.ATimeQ.toFixed(1));
						$("#ATime4").html(tq_zhouji.ATime.toFixed(1));
						$("#ATimeH4").html(tq_zhouji.ATimeH.toFixed(1));
						$("#PinHengAtt4").html(tq_zhouji.PinHengAtt);
						$("#PinHengXH4").html(tq_zhouji.PinHengXH);

						$("#AttW5").html(Math.round(tq_xizhuang.AttW));
						$("#AttN5").html(Math.round(tq_xizhuang.AttN));
						$("#Mzxz5").html(Add_zh(Math.round(tq_xizhuang.Mzxz * 100)) + "%");
						$("#ATimeQ5").html(tq_xizhuang.ATimeQ.toFixed(1));
						$("#ATime5").html(tq_xizhuang.ATime.toFixed(1));
						$("#ATimeH5").html(tq_xizhuang.ATimeH.toFixed(1));
						$("#PinHengAtt5").html(tq_xizhuang.PinHengAtt);
						$("#PinHengXH5").html(tq_xizhuang.PinHengXH);

						$("#AttW6").html(Math.round(tq_dengtui.AttW));
						$("#AttN6").html(Math.round(tq_dengtui.AttN));
						$("#Mzxz6").html(Add_zh(Math.round(tq_dengtui.Mzxz * 100)) + "%");
						$("#ATimeQ6").html(tq_dengtui.ATimeQ.toFixed(1));
						$("#ATime6").html(tq_dengtui.ATime.toFixed(1));
						$("#ATimeH6").html(tq_dengtui.ATimeH.toFixed(1));
						$("#PinHengAtt6").html(tq_dengtui.PinHengAtt);
						$("#PinHengXH6").html(tq_dengtui.PinHengXH);

						$("#AttW7").html(Math.round(tq_shaotui.AttW));
						$("#AttN7").html(Math.round(tq_shaotui.AttN));
						$("#Mzxz7").html(Add_zh(Math.round(tq_shaotui.Mzxz * 100)) + "%");
						$("#ATimeQ7").html(tq_shaotui.ATimeQ.toFixed(1));
						$("#ATime7").html(tq_shaotui.ATime.toFixed(1));
						$("#ATimeH7").html(tq_shaotui.ATimeH.toFixed(1));
						$("#PinHengAtt7").html(tq_shaotui.PinHengAtt);
						$("#PinHengXH7").html(tq_shaotui.PinHengXH);

			*/


			$("#PinHengAtt1").html(tq_zhiquan.PinHengAtt);
			$("#PinHengXH1").html(tq_zhiquan.PinHengXH);

			$("#PinHengAtt2").html(tq_lrgouquan.PinHengAtt);
			$("#PinHengXH2").html(tq_lrgouquan.PinHengXH);

			$("#PinHengAtt3").html(tq_sgouquan.PinHengAtt);
			$("#PinHengXH3").html(tq_sgouquan.PinHengXH);

			$("#PinHengAtt4").html(tq_zhouji.PinHengAtt);
			$("#PinHengXH4").html(tq_zhouji.PinHengXH);

			$("#PinHengAtt5").html(tq_xizhuang.PinHengAtt);
			$("#PinHengXH5").html(tq_xizhuang.PinHengXH);

			$("#PinHengAtt6").html(tq_dengtui.PinHengAtt);
			$("#PinHengXH6").html(tq_dengtui.PinHengXH);

			$("#PinHengAtt7").html(tq_shaotui.PinHengAtt);
			$("#PinHengXH7").html(tq_shaotui.PinHengXH);



			break;
	}
	document.getElementById("choiceJinDuLan_XZpaibei").setAttribute("class", "choiceJinDuLanButtom grayButtom");
	document.getElementById("choiceJinDuLan_XZshuxin").setAttribute("class", "choiceJinDuLanButtom myred");
	XZbottom = 1;
	ChangechoiceBG(PaiBei_A);
	BDgl_Liliang();
	BDgl_Minjie();
	BDgl_Zhili();
	//BDgl_Tizhi();
	//BDgl_Pinheng();
}


//选择派别大按钮
function choicePB(pbpb) {
	//var XZpaibei = document.getElementById("choiceJinDuLan_XZpaibei");
	//var XZshuxin = document.getElementById("choiceJinDuLan_XZshuxin");
	PaiBei_A = pbpb;
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
			if (PaiBei_A === "Taiji") {
				document.getElementById("choicePaiBei").setAttribute("class", "choicePaiBei cPBTaiji0");
			} else if (PaiBei_A === "Taiquan") {
				document.getElementById("choicePaiBei").setAttribute("class", "choicePaiBei cPBTaiquan0");
			}
		}
	} else {
		if (XZbottom === 1) {
			//document.getElementById("choiceZhaoshiDaKuang").style.display = "inline";
			//document.getElementById("choiceShuxinDaKuang").style.display = "none";
			$("#choiceShuxinDaKuang").hide("fade", 300, DaKuangHtS_sp);
			document.getElementById("choiceJinDuLan_XZpaibei").setAttribute("class", "choiceJinDuLanButtom myred");
			document.getElementById("choiceJinDuLan_XZshuxin").setAttribute("class", "choiceJinDuLanButtom grayButtom");
			XZbottom = 0;
		}
	}
}

//随机数浮动伤害计算
//[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
function randomShanghai(a) {
	//正几率
	if (Math.random() < a) {
		//[+0,+10]
		return Math.floor(Math.random() * 11) * 0.01 + 1;
	} else {
		return 1 - Math.floor(Math.random() * 11) * 0.01;
	}
}

//关联数据变动输出【Liliang】
function BDgl_Liliang() {
	$("#DianshuDaKuang_TTR").html(SX_Sum);
	$("#DianshuDaKuang_TR2_Liliang").html(SX_Liliang);
	$("#DianshuguanlianXiaoKuang_s_gongjiJC").html(Add_zh(Math.round((mSX_LiLiang.gongjiJC(SX_Liliang) - 1) * 100)) + "%");
	$("#DianshuguanlianXiaoKuang_s_baojishanghai").html(Add_zh(Math.round((mSX_LiLiang.baojishanghai(SX_Liliang) - 1) * 100)) + "%");
	if (PaiBei_A === "Taiji") {
		tj_panda.AttW = (true_tj_panda.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_panda.AttN = (true_tj_panda.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_tuishou.AttW = (true_tj_tuishou.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_tuishou.AttN = (true_tj_tuishou.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_qingna.AttW = (true_tj_qingna.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_qingna.AttN = (true_tj_qingna.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_shuangfong.AttW = (true_tj_shuangfong.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_shuangfong.AttN = (true_tj_shuangfong.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_zhoudicui.AttW = (true_tj_zhoudicui.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_zhoudicui.AttN = (true_tj_zhoudicui.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_paocui.AttW = (true_tj_paocui.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_paocui.AttN = (true_tj_paocui.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_yuanyangtui.AttW = (true_tj_yuanyangtui.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_yuanyangtui.AttN = (true_tj_yuanyangtui.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_banshuai.AttW = (true_tj_banshuai.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tj_banshuai.AttN = (true_tj_banshuai.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		$("#AttW1").html(Math.round(tj_panda.AttW));
		$("#AttN1").html(Math.round(tj_panda.AttN));
		$("#AttW2").html(Math.round(tj_tuishou.AttW));
		$("#AttN2").html(Math.round(tj_tuishou.AttN));
		$("#AttW3").html(Math.round(tj_qingna.AttW));
		$("#AttN3").html(Math.round(tj_qingna.AttN));
		$("#AttW4").html(Math.round(tj_shuangfong.AttW));
		$("#AttN4").html(Math.round(tj_shuangfong.AttN));
		$("#AttW5").html(Math.round(tj_zhoudicui.AttW));
		$("#AttN5").html(Math.round(tj_zhoudicui.AttN));
		$("#AttW6").html(Math.round(tj_paocui.AttW));
		$("#AttN6").html(Math.round(tj_paocui.AttN));
		$("#AttW7").html(Math.round(tj_yuanyangtui.AttW));
		$("#AttN7").html(Math.round(tj_yuanyangtui.AttN));
		$("#AttW8").html(Math.round(tj_banshuai.AttW));
		$("#AttN8").html(Math.round(tj_banshuai.AttN));

	} else if (PaiBei_A === "Taiquan") {
		tq_zhiquan.AttW = (true_tq_zhiquan.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tq_zhiquan.AttN = (true_tq_zhiquan.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tq_lrgouquan.AttW = (true_tq_lrgouquan.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tq_lrgouquan.AttN = (true_tq_lrgouquan.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tq_sgouquan.AttW = (true_tq_sgouquan.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tq_sgouquan.AttN = (true_tq_sgouquan.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tq_zhouji.AttW = (true_tq_zhouji.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tq_zhouji.AttN = (true_tq_zhouji.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tq_xizhuang.AttW = (true_tq_xizhuang.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tq_xizhuang.AttN = (true_tq_xizhuang.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tq_dengtui.AttW = (true_tq_dengtui.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tq_dengtui.AttN = (true_tq_dengtui.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tq_shaotui.AttW = (true_tq_shaotui.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		tq_shaotui.AttN = (true_tq_shaotui.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
		$("#AttW1").html(Math.round(tq_zhiquan.AttW));
		$("#AttN1").html(Math.round(tq_zhiquan.AttN));
		$("#AttW2").html(Math.round(tq_lrgouquan.AttW));
		$("#AttN2").html(Math.round(tq_lrgouquan.AttN));
		$("#AttW3").html(Math.round(tq_sgouquan.AttW));
		$("#AttN3").html(Math.round(tq_sgouquan.AttN));
		$("#AttW4").html(Math.round(tq_zhouji.AttW));
		$("#AttN4").html(Math.round(tq_zhouji.AttN));
		$("#AttW5").html(Math.round(tq_xizhuang.AttW));
		$("#AttN5").html(Math.round(tq_xizhuang.AttN));
		$("#AttW6").html(Math.round(tq_dengtui.AttW));
		$("#AttN6").html(Math.round(tq_dengtui.AttN));
		$("#AttW7").html(Math.round(tq_shaotui.AttW));
		$("#AttN7").html(Math.round(tq_shaotui.AttN));
	}
}

//关联数据变动输出【Minjie】
function BDgl_Minjie() {
	$("#DianshuDaKuang_TTR").html(SX_Sum);
	$("#DianshuDaKuang_TR2_Minjie").html(SX_Minjie);
	$("#DianshuguanlianXiaoKuang_s_shudu").html(SX_Minjie);
	$("#DianshuguanlianXiaoKuang_s_shanbi").html(SX_Minjie);
	if (PaiBei_A === "Taiji") {
		tj_panda.ATimeQ = true_tj_panda.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tj_panda.ATime = true_tj_panda.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tj_panda.ATimeH = true_tj_panda.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		tj_tuishou.ATimeQ = true_tj_tuishou.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tj_tuishou.ATime = true_tj_tuishou.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tj_tuishou.ATimeH = true_tj_tuishou.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		tj_qingna.ATimeQ = true_tj_qingna.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tj_qingna.ATime = true_tj_qingna.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tj_qingna.ATimeH = true_tj_qingna.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		tj_shuangfong.ATimeQ = true_tj_shuangfong.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tj_shuangfong.ATime = true_tj_shuangfong.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tj_shuangfong.ATimeH = true_tj_shuangfong.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		tj_zhoudicui.ATimeQ = true_tj_zhoudicui.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tj_zhoudicui.ATime = true_tj_zhoudicui.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tj_zhoudicui.ATimeH = true_tj_zhoudicui.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		tj_paocui.ATimeQ = true_tj_paocui.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tj_paocui.ATime = true_tj_paocui.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tj_paocui.ATimeH = true_tj_paocui.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		tj_yuanyangtui.ATimeQ = true_tj_yuanyangtui.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tj_yuanyangtui.ATime = true_tj_yuanyangtui.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tj_yuanyangtui.ATimeH = true_tj_yuanyangtui.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		tj_banshuai.ATimeQ = true_tj_banshuai.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tj_banshuai.ATime = true_tj_banshuai.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tj_banshuai.ATimeH = true_tj_banshuai.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		$("#ATimeQ1").html(tj_panda.ATimeQ.toFixed(1));
		$("#ATime1").html(tj_panda.ATime.toFixed(1));
		$("#ATimeH1").html(tj_panda.ATimeH.toFixed(1));

		$("#ATimeQ2").html(tj_tuishou.ATimeQ.toFixed(1));
		$("#ATime2").html(tj_tuishou.ATime.toFixed(1));
		$("#ATimeH2").html(tj_tuishou.ATimeH.toFixed(1));

		$("#ATimeQ3").html(tj_qingna.ATimeQ.toFixed(1));
		$("#ATime3").html(tj_qingna.ATime.toFixed(1));
		$("#ATimeH3").html(tj_qingna.ATimeH.toFixed(1));

		$("#ATimeQ4").html(tj_shuangfong.ATimeQ.toFixed(1));
		$("#ATime4").html(tj_shuangfong.ATime.toFixed(1));
		$("#ATimeH4").html(tj_shuangfong.ATimeH.toFixed(1));

		$("#ATimeQ5").html(tj_zhoudicui.ATimeQ.toFixed(1));
		$("#ATime5").html(tj_zhoudicui.ATime.toFixed(1));
		$("#ATimeH5").html(tj_zhoudicui.ATimeH.toFixed(1));

		$("#ATimeQ6").html(tj_paocui.ATimeQ.toFixed(1));
		$("#ATime6").html(tj_paocui.ATime.toFixed(1));
		$("#ATimeH6").html(tj_paocui.ATimeH.toFixed(1));

		$("#ATimeQ7").html(tj_yuanyangtui.ATimeQ.toFixed(1));
		$("#ATime7").html(tj_yuanyangtui.ATime.toFixed(1));
		$("#ATimeH7").html(tj_yuanyangtui.ATimeH.toFixed(1));

		$("#ATimeQ8").html(tj_banshuai.ATimeQ.toFixed(1));
		$("#ATime8").html(tj_banshuai.ATime.toFixed(1));
		$("#ATimeH8").html(tj_banshuai.ATimeH.toFixed(1));

	} else if (PaiBei_A === "Taiquan") {

		tq_zhiquan.ATimeQ = true_tq_zhiquan.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tq_zhiquan.ATime = true_tq_zhiquan.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tq_zhiquan.ATimeH = true_tq_zhiquan.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		tq_lrgouquan.ATimeQ = true_tq_lrgouquan.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tq_lrgouquan.ATime = true_tq_lrgouquan.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tq_lrgouquan.ATimeH = true_tq_lrgouquan.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		tq_sgouquan.ATimeQ = true_tq_sgouquan.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tq_sgouquan.ATime = true_tq_sgouquan.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tq_sgouquan.ATimeH = true_tq_sgouquan.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		tq_zhouji.ATimeQ = true_tq_zhouji.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tq_zhouji.ATime = true_tq_zhouji.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tq_zhouji.ATimeH = true_tq_zhouji.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		tq_xizhuang.ATimeQ = true_tq_xizhuang.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tq_xizhuang.ATime = true_tq_xizhuang.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tq_xizhuang.ATimeH = true_tq_xizhuang.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		tq_dengtui.ATimeQ = true_tq_dengtui.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tq_dengtui.ATime = true_tq_dengtui.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tq_dengtui.ATimeH = true_tq_dengtui.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		tq_shaotui.ATimeQ = true_tq_shaotui.ATimeQ + mSX_Minjie.shuduJC_Q(SX_Minjie);
		tq_shaotui.ATime = true_tq_shaotui.ATime + mSX_Minjie.shuduJC_Z(SX_Minjie);
		tq_shaotui.ATimeH = true_tq_shaotui.ATimeH + mSX_Minjie.shuduJC_H(SX_Minjie);

		$("#ATimeQ1").html(tq_zhiquan.ATimeQ.toFixed(1));
		$("#ATime1").html(tq_zhiquan.ATime.toFixed(1));
		$("#ATimeH1").html(tq_zhiquan.ATimeH.toFixed(1));

		$("#ATimeQ2").html(tq_lrgouquan.ATimeQ.toFixed(1));
		$("#ATime2").html(tq_lrgouquan.ATime.toFixed(1));
		$("#ATimeH2").html(tq_lrgouquan.ATimeH.toFixed(1));

		$("#ATimeQ3").html(tq_sgouquan.ATimeQ.toFixed(1));
		$("#ATime3").html(tq_sgouquan.ATime.toFixed(1));
		$("#ATimeH3").html(tq_sgouquan.ATimeH.toFixed(1));

		$("#ATimeQ4").html(tq_zhouji.ATimeQ.toFixed(1));
		$("#ATime4").html(tq_zhouji.ATime.toFixed(1));
		$("#ATimeH4").html(tq_zhouji.ATimeH.toFixed(1));

		$("#ATimeQ5").html(tq_xizhuang.ATimeQ.toFixed(1));
		$("#ATime5").html(tq_xizhuang.ATime.toFixed(1));
		$("#ATimeH5").html(tq_xizhuang.ATimeH.toFixed(1));

		$("#ATimeQ6").html(tq_dengtui.ATimeQ.toFixed(1));
		$("#ATime6").html(tq_dengtui.ATime.toFixed(1));
		$("#ATimeH6").html(tq_dengtui.ATimeH.toFixed(1));

		$("#ATimeQ7").html(tq_shaotui.ATimeQ.toFixed(1));
		$("#ATime7").html(tq_shaotui.ATime.toFixed(1));
		$("#ATimeH7").html(tq_shaotui.ATimeH.toFixed(1));
	}
}

//关联数据变动输出【Zhili】
function BDgl_Zhili() {
	$("#DianshuDaKuang_TTR").html(SX_Sum);
	$("#DianshuDaKuang_TR2_Zhili").html(SX_Zhili);
	$("#DianshuguanlianXiaoKuang_s_baojijilv").html(mSX_ZhiLi.baojijilv(SX_Zhili) * 100 + "%");
	$("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").html(mSX_ZhiLi.gongjifudongjilv(SX_Zhili) * 100 + "%");
	$("#DianshuguanlianXiaoKuang_s_minzhongxz").html(Add_zh(mSX_ZhiLi.minzhongxz(SX_Zhili) * 100) + "%");
	$("#DianshuguanlianXiaoKuang_s_qinbao").html(mSX_ZhiLi.qinbao(SX_Zhili));
	BDgl_Liliang();
	if (PaiBei_A === "Taiji") {
		tj_panda.Mzxz = true_tj_panda.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
		tj_tuishou.Mzxz = true_tj_tuishou.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
		tj_qingna.Mzxz = true_tj_qingna.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
		tj_shuangfong.Mzxz = true_tj_shuangfong.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
		tj_zhoudicui.Mzxz = true_tj_zhoudicui.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
		tj_paocui.Mzxz = true_tj_paocui.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
		tj_yuanyangtui.Mzxz = true_tj_yuanyangtui.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
		tj_banshuai.Mzxz = true_tj_banshuai.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);

		$("#Mzxz1").html(Add_zh(Math.round(tj_panda.Mzxz * 100)) + "%");
		$("#Mzxz2").html(Add_zh(Math.round(tj_tuishou.Mzxz * 100)) + "%");
		$("#Mzxz3").html(Add_zh(Math.round(tj_qingna.Mzxz * 100)) + "%");
		$("#Mzxz4").html(Add_zh(Math.round(tj_shuangfong.Mzxz * 100)) + "%");
		$("#Mzxz5").html(Add_zh(Math.round(tj_zhoudicui.Mzxz * 100)) + "%");
		$("#Mzxz6").html(Add_zh(Math.round(tj_paocui.Mzxz * 100)) + "%");
		$("#Mzxz7").html(Add_zh(Math.round(tj_yuanyangtui.Mzxz * 100)) + "%");
		$("#Mzxz8").html(Add_zh(Math.round(tj_banshuai.Mzxz * 100)) + "%");
	} else if (PaiBei_A === "Taiquan") {
		tq_zhiquan.Mzxz = true_tq_zhiquan.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
		tq_lrgouquan.Mzxz = true_tq_lrgouquan.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
		tq_sgouquan.Mzxz = true_tq_sgouquan.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
		tq_zhouji.Mzxz = true_tq_zhouji.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
		tq_xizhuang.Mzxz = true_tq_xizhuang.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
		tq_dengtui.Mzxz = true_tq_dengtui.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
		tq_shaotui.Mzxz = true_tq_shaotui.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);

		$("#Mzxz1").html(Add_zh(Math.round(tq_zhiquan.Mzxz * 100)) + "%");
		$("#Mzxz2").html(Add_zh(Math.round(tq_lrgouquan.Mzxz * 100)) + "%");
		$("#Mzxz3").html(Add_zh(Math.round(tq_sgouquan.Mzxz * 100)) + "%");
		$("#Mzxz4").html(Add_zh(Math.round(tq_zhouji.Mzxz * 100)) + "%");
		$("#Mzxz5").html(Add_zh(Math.round(tq_xizhuang.Mzxz * 100)) + "%");
		$("#Mzxz6").html(Add_zh(Math.round(tq_dengtui.Mzxz * 100)) + "%");
		$("#Mzxz7").html(Add_zh(Math.round(tq_shaotui.Mzxz * 100)) + "%");
	}
}

//关联数据变动输出【Tizhi】
function BDgl_Tizhi() {
	$("#DianshuDaKuang_TTR").html(SX_Sum);
	$("#DianshuDaKuang_TR2_Tizhi").html(SX_Tizhi);
	$("#DianshuguanlianXiaoKuang_s_fangyujilv").html(SX_Tizhi);
	$("#DianshuguanlianXiaoKuang_s_yibanfanshuang").html(mSX_Tizhi.yibanfanshuang(SX_Tizhi) * 100 + "%");
	$("#DianshuguanlianXiaoKuang_s_fangyufanshuang").html(mSX_Tizhi.fangyufanshuang(SX_Tizhi) * 100 + "%");
	$("#DianshuguanlianXiaoKuang_s_wendinfantan").html(mSX_Tizhi.wendinfantan(SX_Tizhi) * 100 + "%");
}

//关联数据变动输出【Pinheng】
function BDgl_Pinheng() {
	$("#DianshuDaKuang_TTR").html(SX_Sum);
	$("#DianshuDaKuang_TR2_Pinheng").html(SX_Pinheng);
	$("#DianshuguanlianXiaoKuang_s_wendinzhi").html(mSX_Pinheng.wendinzhi(SX_Pinheng));
	$("#DianshuguanlianXiaoKuang_s_wendinhuifu").html(mSX_Pinheng.wendinhuifu(SX_Pinheng));
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
					BDgl_Liliang();
				}
				break;
			case "Minjie":
				if (SX_Minjie > 0) {
					SX_Minjie--;
					SX_Sum++;
					BDgl_Minjie();
				}
				break;
			case "Zhili":
				if (SX_Zhili > 0) {
					SX_Zhili--;
					SX_Sum++;
					BDgl_Zhili();
				}
				break;
			case "Tizhi":
				if (SX_Tizhi > 0) {
					SX_Tizhi--;
					SX_Sum++;
					BDgl_Tizhi();
				}
				break;
			case "Pinheng":
				if (SX_Pinheng > 0) {
					SX_Pinheng--;
					SX_Sum++;
					BDgl_Pinheng();
				}
				break;
		}
	} else {
		switch (shuxin) {
			case "Liliang":
				if (SX_Sum > 0 && SX_Liliang < 5) {
					SX_Liliang++;
					SX_Sum--;
					BDgl_Liliang();
				}
				break;
			case "Minjie":
				if (SX_Minjie < 5 && SX_Sum > 0) {
					SX_Minjie++;
					SX_Sum--;
					BDgl_Minjie();
				}
				break;
			case "Zhili":
				if (SX_Zhili < 5 && SX_Sum > 0) {
					SX_Zhili++;
					SX_Sum--;
					BDgl_Zhili();
				}
				break;
			case "Tizhi":
				if (SX_Tizhi < 5 && SX_Sum > 0) {
					SX_Tizhi++;
					SX_Sum--;
					BDgl_Tizhi();
				}
				break;
			case "Pinheng":
				if (SX_Pinheng < 3 && SX_Sum > 0) {
					SX_Pinheng++;
					SX_Sum--;
					BDgl_Pinheng();
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
function qinbaotooltip(a) {
	switch (a) {
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


//前期完成按钮
function choiceQianqiWanCheng() {
	if (SX_Sum > 0) {
		$.confirm({
			theme: 'material',
			title: '注意！',
			content: '还有剩余点数，是否继续？',
			type: 'red',
			boxWidth: '300px',
			useBootstrap: false,
			typeAnimated: true,
			animation: 'top',
			closeAnimation: 'top',
			animationBounce: 1.5,
			animationSpeed: 300,
			buttons: {
				tryAgain: {
					text: '返回',
					action: function () {}
				},
				close: {
					text: '继续',
					btnClass: 'btn-red',
					action: function () {
						DFshuxingchushihua();
						ChuShiHua();
					}
				}
			}
		});
	} else {
		DFshuxingchushihua();
		ChuShiHua();
	}
}

//选择派别属性完成，初始化第二页
function ChuShiHua() {
	$("#choiceBigKuang").hide("fade", 300);
	$("#aaamask").hide("fade", 300);
	$("#baseKuang").removeClass("blur");

	$("#TuKuang_A_Liliang").html("力量：" + SX_Liliang);
	$("#TuKuang_A_Minjie").html("敏捷：" + SX_Minjie);
	$("#TuKuang_A_Zhili").html("智力：" + SX_Zhili);
	$("#TuKuang_A_Tizhi").html("体质：" + SX_Tizhi);
	$("#TuKuang_A_Pinheng").html("平衡：" + SX_Pinheng);

	$("#TuchuKuang_A_gongjiJC").html(Add_zh(Math.round((mSX_LiLiang.gongjiJC(SX_Liliang) - 1) * 100)) + "%");
	$("#TuchuKuang_A_baojishanghai").html(Add_zh(Math.round((mSX_LiLiang.baojishanghai(SX_Liliang) - 1) * 100)) + "%");
	$("#TuchuKuang_A_shudu").html(SX_Minjie);
	$("#TuchuKuang_A_shanbi").html(SX_Minjie);
	$("#TuchuKuang_A_baojijilv").html(mSX_ZhiLi.baojijilv(SX_Zhili) * 100 + "%");
	$("#TuchuKuang_A_gongjifudongjilv").html(mSX_ZhiLi.gongjifudongjilv(SX_Zhili) * 100 + "%");
	$("#TuchuKuang_A_minzhongxz").html(Add_zh(mSX_ZhiLi.minzhongxz(SX_Zhili) * 100) + "%");
	$("#TuchuKuang_A_qinbao").html(mSX_ZhiLi.qinbao(SX_Zhili));
	$("#TuchuKuang_A_fangyujilv").html(SX_Tizhi);
	$("#TuchuKuang_A_yibanfanshuang").html(mSX_Tizhi.yibanfanshuang(SX_Tizhi) * 100 + "%");
	$("#TuchuKuang_A_fangyufanshuang").html(mSX_Tizhi.fangyufanshuang(SX_Tizhi) * 100 + "%");
	$("#TuchuKuang_A_wendinfantan").html(mSX_Tizhi.wendinfantan(SX_Tizhi) * 100 + "%");
	$("#TuchuKuang_A_wendinzhi").html(mSX_Pinheng.wendinzhi(SX_Pinheng));
	$("#TuchuKuang_A_wendinhuifu").html(mSX_Pinheng.wendinhuifu(SX_Pinheng));

	Shuxingshuaxin_B();

	HPchongzhi();
	//属性关联弹出标记
	window.sxTanChu_A = 0;
	window.sxTanChu_B = 0;

	window.i_yixuanZS = 1; //已选择招式 计数
	window.yxZStime = 7.5; //已选招式剩余时间

	window.mymyname = $("#My_name").text();

	window.izsxx = 0; //大圆按钮标记

	switch (PaiBei_A) {
		case "Taiji":
			$("#TuKuangTitle_paibie").html("太极");
			$("#TuKuangTitle_paibie").css("color", "#4388bb");
			window.i_tj_panda = 1;
			window.i_tj_tuishou = 1;
			window.i_tj_qingna = 1;
			window.i_tj_shuangfong = 1;
			window.i_tj_zhoudicui = 1;
			window.i_tj_paocui = 1;
			window.i_tj_yuanyangtui = 1;
			window.i_tj_banshuai = 1;
			break;
		case "Taiquan":
			$("#TuKuangTitle_paibie").html("泰拳");
			$("#TuKuangTitle_paibie").css("color", "#a50000");
			window.i_tq_zhiquan = 1;
			window.i_tq_lrgouquan = 1;
			window.i_tq_sgouquan = 1;
			window.i_tq_zhouji = 1;
			window.i_tq_xizhuang = 1;
			window.i_tq_dengtui = 1;
			window.i_tq_shaotui = 1;
			break;
	}
}

//HP重置
function HPchongzhi() {
	var HpX = Hp.createNew();

	$("#Hp_A_tou").html(HpA.tou);
	$("#Hp_A_xiong").html(HpA.xiong);
	$("#Hp_A_fu").html(HpA.fu);
	$("#Hp_A_yaoL").html(HpA.yaoL);
	$("#Hp_A_yaoR").html(HpA.yaoR);
	$("#Hp_A_jianL").html(HpA.jianL);
	$("#Hp_A_jianR").html(HpA.jianR);
	$("#Hp_A_shangbiL").html(HpA.shangbiL);
	$("#Hp_A_shangbiR").html(HpA.shangbiR);
	$("#Hp_A_qianbiL").html(HpA.qianbiL);
	$("#Hp_A_qianbiR").html(HpA.qianbiR);
	$("#Hp_A_zhouL").html(HpA.zhouL);
	$("#Hp_A_zhouR").html(HpA.zhouR);
	$("#Hp_A_shouwanL").html(HpA.shouwanL);
	$("#Hp_A_shouwanR").html(HpA.shouwanR);
	$("#Hp_A_datuiL").html(HpA.datuiL);
	$("#Hp_A_datuiR").html(HpA.datuiR);
	$("#Hp_A_xiaotuiL").html(HpA.xiaotuiL);
	$("#Hp_A_xiaotuiR").html(HpA.xiaotuiR);
	$("#Hp_A_xiL").html(HpA.xiL);
	$("#Hp_A_xiR").html(HpA.xiR);
	$("#Hp_A_huaiL").html(HpA.huaiL);
	$("#Hp_A_huaiR").html(HpA.huaiR);

	$("#Hp_B_tou").html(HpB.tou);
	$("#Hp_B_xiong").html(HpB.xiong);
	$("#Hp_B_fu").html(HpB.fu);
	$("#Hp_B_yaoL").html(HpB.yaoL);
	$("#Hp_B_yaoR").html(HpB.yaoR);
	$("#Hp_B_jianL").html(HpB.jianL);
	$("#Hp_B_jianR").html(HpB.jianR);
	$("#Hp_B_shangbiL").html(HpB.shangbiL);
	$("#Hp_B_shangbiR").html(HpB.shangbiR);
	$("#Hp_B_qianbiL").html(HpB.qianbiL);
	$("#Hp_B_qianbiR").html(HpB.qianbiR);
	$("#Hp_B_zhouL").html(HpB.zhouL);
	$("#Hp_B_zhouR").html(HpB.zhouR);
	$("#Hp_B_shouwanL").html(HpB.shouwanL);
	$("#Hp_B_shouwanR").html(HpB.shouwanR);
	$("#Hp_B_datuiL").html(HpB.datuiL);
	$("#Hp_B_datuiR").html(HpB.datuiR);
	$("#Hp_B_xiaotuiL").html(HpB.xiaotuiL);
	$("#Hp_B_xiaotuiR").html(HpB.xiaotuiR);
	$("#Hp_B_xiL").html(HpB.xiL);
	$("#Hp_B_xiR").html(HpB.xiR);
	$("#Hp_B_huaiL").html(HpB.huaiL);
	$("#Hp_B_huaiR").html(HpB.huaiR);

	var m = 97 / Math.max(HpX.tou, HpX.xiong, HpX.fu, HpX.yaoL, HpX.jianL, HpX.shangbiL, HpX.qianbiL, HpX.zhouL, HpX.shouwanL, HpX.datuiL, HpX.xiaotuiL, HpX.xiL, HpX.huaiL);

	//进度条HP
	$("#progressbar_A_tou").css("width", Math.round(HpA.tou * m));
	$("#progressbar_A_xiong").css("width", Math.round(HpA.xiong * m));
	$("#progressbar_A_fu").css("width", Math.round(HpA.fu * m));
	$("#progressbar_A_yaoL").css("width", Math.round(HpA.yaoL * m));
	$("#progressbar_A_yaoR").css("width", Math.round(HpA.yaoR * m));
	$("#progressbar_A_jianL").css("width", Math.round(HpA.jianL * m));
	$("#progressbar_A_jianR").css("width", Math.round(HpA.jianR * m));
	$("#progressbar_A_shangbiL").css("width", Math.round(HpA.shangbiL * m));
	$("#progressbar_A_shangbiR").css("width", Math.round(HpA.shangbiR * m));
	$("#progressbar_A_qianbiL").css("width", Math.round(HpA.qianbiL * m));
	$("#progressbar_A_qianbiR").css("width", Math.round(HpA.qianbiR * m));
	$("#progressbar_A_zhouL").css("width", Math.round(HpA.zhouL * m));
	$("#progressbar_A_zhouR").css("width", Math.round(HpA.zhouR * m));
	$("#progressbar_A_shouwanL").css("width", Math.round(HpA.shouwanL * m));
	$("#progressbar_A_shouwanR").css("width", Math.round(HpA.shouwanR * m));
	$("#progressbar_A_datuiL").css("width", Math.round(HpA.datuiL * m));
	$("#progressbar_A_datuiR").css("width", Math.round(HpA.datuiR * m));
	$("#progressbar_A_xiaotuiL").css("width", Math.round(HpA.xiaotuiL * m));
	$("#progressbar_A_xiaotuiR").css("width", Math.round(HpA.xiaotuiR * m));
	$("#progressbar_A_xiL").css("width", Math.round(HpA.xiL * m));
	$("#progressbar_A_xiR").css("width", Math.round(HpA.xiR * m));
	$("#progressbar_A_huaiL").css("width", Math.round(HpA.huaiL * m));
	$("#progressbar_A_huaiR").css("width", Math.round(HpA.huaiR * m));

	$("#progressbar_B_tou").css("width", Math.round(HpB.tou * m));
	$("#progressbar_B_xiong").css("width", Math.round(HpB.xiong * m));
	$("#progressbar_B_fu").css("width", Math.round(HpB.fu * m));
	$("#progressbar_B_yaoL").css("width", Math.round(HpB.yaoL * m));
	$("#progressbar_B_yaoR").css("width", Math.round(HpB.yaoR * m));
	$("#progressbar_B_jianL").css("width", Math.round(HpB.jianL * m));
	$("#progressbar_B_jianR").css("width", Math.round(HpB.jianR * m));
	$("#progressbar_B_shangbiL").css("width", Math.round(HpB.shangbiL * m));
	$("#progressbar_B_shangbiR").css("width", Math.round(HpB.shangbiR * m));
	$("#progressbar_B_qianbiL").css("width", Math.round(HpB.qianbiL * m));
	$("#progressbar_B_qianbiR").css("width", Math.round(HpB.qianbiR * m));
	$("#progressbar_B_zhouL").css("width", Math.round(HpB.zhouL * m));
	$("#progressbar_B_zhouR").css("width", Math.round(HpB.zhouR * m));
	$("#progressbar_B_shouwanL").css("width", Math.round(HpB.shouwanL * m));
	$("#progressbar_B_shouwanR").css("width", Math.round(HpB.shouwanR * m));
	$("#progressbar_B_datuiL").css("width", Math.round(HpB.datuiL * m));
	$("#progressbar_B_datuiR").css("width", Math.round(HpB.datuiR * m));
	$("#progressbar_B_xiaotuiL").css("width", Math.round(HpB.xiaotuiL * m));
	$("#progressbar_B_xiaotuiR").css("width", Math.round(HpB.xiaotuiR * m));
	$("#progressbar_B_xiL").css("width", Math.round(HpB.xiL * m));
	$("#progressbar_B_xiR").css("width", Math.round(HpB.xiR * m));
	$("#progressbar_B_huaiL").css("width", Math.round(HpB.huaiL * m));
	$("#progressbar_B_huaiR").css("width", Math.round(HpB.huaiR * m));

	$("#progressbar_A_tou").progressbar({
		value: 100,
	});
	$("#progressbar_A_xiong").progressbar({
		value: 100,
	});
	$("#progressbar_A_fu").progressbar({
		value: 100,
	});
	$("#progressbar_A_yaoL").progressbar({
		value: 100,
	});
	$("#progressbar_A_yaoR").progressbar({
		value: 100,
	});
	$("#progressbar_A_jianL").progressbar({
		value: 100,
	});
	$("#progressbar_A_jianR").progressbar({
		value: 100,
	});
	$("#progressbar_A_shangbiL").progressbar({
		value: 100,
	});
	$("#progressbar_A_shangbiR").progressbar({
		value: 100,
	});
	$("#progressbar_A_qianbiL").progressbar({
		value: 100,
	});
	$("#progressbar_A_qianbiR").progressbar({
		value: 100,
	});
	$("#progressbar_A_zhouL").progressbar({
		value: 100,
	});
	$("#progressbar_A_zhouR").progressbar({
		value: 100,
	});
	$("#progressbar_A_shouwanL").progressbar({
		value: 100,
	});
	$("#progressbar_A_shouwanR").progressbar({
		value: 100,
	});
	$("#progressbar_A_datuiL").progressbar({
		value: 100,
	});
	$("#progressbar_A_datuiR").progressbar({
		value: 100,
	});
	$("#progressbar_A_xiaotuiL").progressbar({
		value: 100,
	});
	$("#progressbar_A_xiaotuiR").progressbar({
		value: 100,
	});
	$("#progressbar_A_xiL").progressbar({
		value: 100,
	});
	$("#progressbar_A_xiR").progressbar({
		value: 100,
	});
	$("#progressbar_A_huaiL").progressbar({
		value: 100,
	});
	$("#progressbar_A_huaiR").progressbar({
		value: 100,
	});


	$("#progressbar_B_tou").progressbar({
		value: 100,
	});
	$("#progressbar_B_xiong").progressbar({
		value: 100,
	});
	$("#progressbar_B_fu").progressbar({
		value: 100,
	});
	$("#progressbar_B_yaoL").progressbar({
		value: 100,
	});
	$("#progressbar_B_yaoR").progressbar({
		value: 100,
	});
	$("#progressbar_B_jianL").progressbar({
		value: 100,
	});
	$("#progressbar_B_jianR").progressbar({
		value: 100,
	});
	$("#progressbar_B_shangbiL").progressbar({
		value: 100,
	});
	$("#progressbar_B_shangbiR").progressbar({
		value: 100,
	});
	$("#progressbar_B_qianbiL").progressbar({
		value: 100,
	});
	$("#progressbar_B_qianbiR").progressbar({
		value: 100,
	});
	$("#progressbar_B_zhouL").progressbar({
		value: 100,
	});
	$("#progressbar_B_zhouR").progressbar({
		value: 100,
	});
	$("#progressbar_B_shouwanL").progressbar({
		value: 100,
	});
	$("#progressbar_B_shouwanR").progressbar({
		value: 100,
	});
	$("#progressbar_B_datuiL").progressbar({
		value: 100,
	});
	$("#progressbar_B_datuiR").progressbar({
		value: 100,
	});
	$("#progressbar_B_xiaotuiL").progressbar({
		value: 100,
	});
	$("#progressbar_B_xiaotuiR").progressbar({
		value: 100,
	});
	$("#progressbar_B_xiL").progressbar({
		value: 100,
	});
	$("#progressbar_B_xiR").progressbar({
		value: 100,
	});
	$("#progressbar_B_huaiL").progressbar({
		value: 100,
	});
	$("#progressbar_B_huaiR").progressbar({
		value: 100,
	});

}


function biamWuXiaoZS() {
	switch (PaiBei_A) {
		case "Taiji":
			$("#ZSdiv_tj_panda").addClass("huise");
			$("#ZSdiv_tj_tuishou").addClass("huise");
			$("#ZSdiv_tj_qingna").addClass("huise");
			$("#ZSdiv_tj_shuangfong").addClass("huise");
			$("#ZSdiv_tj_zhoudicui").addClass("huise");
			$("#ZSdiv_tj_paocui").addClass("huise");
			$("#ZSdiv_tj_yuanyangtui").addClass("huise");
			$("#ZSdiv_tj_banshuai").addClass("huise");
			break;
		case "Taiquan":
			$("#ZSdiv_tq_zhiquan").addClass("huise");
			$("#ZSdiv_tq_lrgouquan").addClass("huise");
			$("#ZSdiv_tq_sgouquan").addClass("huise");
			$("#ZSdiv_tq_zhouji").addClass("huise");
			$("#ZSdiv_tq_xizhuang").addClass("huise");
			$("#ZSdiv_tq_dengtui").addClass("huise");
			$("#ZSdiv_tq_shaotui").addClass("huise");
			break;
	}
}


//添加一个招式后共同动作
function tianjiaZShou() {
	i_yixuanZS++;
	xuanshisyTime();
	if (i_yixuanZS > 5) {
		biamWuXiaoZS();
	} else {
		switch (PaiBei_A) {
			case "Taiji":
				if ((tj_panda.ATimeQ + tj_panda.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tj_panda").addClass("huise");
				}
				if ((tj_tuishou.ATimeQ + tj_tuishou.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tj_tuishou").addClass("huise");
				}
				if ((tj_qingna.ATimeQ + tj_qingna.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tj_qingna").addClass("huise");
				}
				if ((tj_shuangfong.ATimeQ + tj_shuangfong.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tj_shuangfong").addClass("huise");
				}
				if ((tj_zhoudicui.ATimeQ + tj_zhoudicui.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tj_zhoudicui").addClass("huise");
				}
				if ((tj_paocui.ATimeQ + tj_paocui.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tj_paocui").addClass("huise");
				}
				if ((tj_yuanyangtui.ATimeQ + tj_yuanyangtui.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tj_yuanyangtui").addClass("huise");
				}
				if ((tj_banshuai.ATimeQ + tj_banshuai.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tj_banshuai").addClass("huise");
				}
				break;
			case "Taiquan":
				if ((tq_zhiquan.ATimeQ + tq_zhiquan.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tq_zhiquan").addClass("huise");
				}
				if ((tq_lrgouquan.ATimeQ + tq_lrgouquan.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tj_tq_lrgouquan").addClass("huise");
				}
				if ((tq_sgouquan.ATimeQ + tq_sgouquan.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tq_sgouquan").addClass("huise");
				}
				if ((tq_zhouji.ATimeQ + tq_zhouji.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tq_zhouji").addClass("huise");
				}
				if ((tq_xizhuang.ATimeQ + tq_xizhuang.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tq_xizhuang").addClass("huise");
				}
				if ((tq_dengtui.ATimeQ + tq_dengtui.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tq_dengtui").addClass("huise");
				}
				if ((tq_shaotui.ATimeQ + tq_shaotui.ATime).toFixed(1) > yxZStime.toFixed(1)) {
					$("#ZSdiv_tq_shaotui").addClass("huise");
				}
				break;
		}
	}
}


//删除一个招式后共同动作
function shanchuZShou() {
	xuanshisyTime();
	switch (PaiBei_A) {
		case "Taiji":
			if ((tj_panda.ATimeQ + tj_panda.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tj_panda").removeClass("huise");
			}
			if ((tj_tuishou.ATimeQ + tj_tuishou.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tj_tuishou").removeClass("huise");
			}
			if ((tj_qingna.ATimeQ + tj_qingna.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tj_qingna").removeClass("huise");
			}
			if ((tj_shuangfong.ATimeQ + tj_shuangfong.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tj_shuangfong").removeClass("huise");
			}
			if ((tj_zhoudicui.ATimeQ + tj_zhoudicui.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tj_zhoudicui").removeClass("huise");
			}
			if ((tj_paocui.ATimeQ + tj_paocui.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tj_paocui").removeClass("huise");
			}
			if ((tj_yuanyangtui.ATimeQ + tj_yuanyangtui.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tj_yuanyangtui").removeClass("huise");
			}
			if ((tj_banshuai.ATimeQ + tj_banshuai.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tj_banshuai").removeClass("huise");
			}
			break;
		case "Taiquan":
			if ((tq_zhiquan.ATimeQ + tq_zhiquan.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tq_zhiquan").removeClass("huise");
			}
			if ((tq_lrgouquan.ATimeQ + tq_lrgouquan.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tq_lrgouquan").removeClass("huise");
			}
			if ((tq_sgouquan.ATimeQ + tq_sgouquan.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tq_sgouquan").removeClass("huise");
			}
			if ((tq_zhouji.ATimeQ + tq_zhouji.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tq_zhouji").removeClass("huise");
			}
			if ((tq_xizhuang.ATimeQ + tq_xizhuang.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tq_xizhuang").removeClass("huise");
			}
			if ((tq_dengtui.ATimeQ + tq_dengtui.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tq_dengtui").removeClass("huise");
			}
			if ((tq_shaotui.ATimeQ + tq_shaotui.ATime).toFixed(1) <= yxZStime.toFixed(1)) {
				$("#ZSdiv_tq_shaotui").removeClass("huise");
			}
			break;
	}
}

//加回删除招式的时间
function jiahuitime(zsName) {
	switch (PaiBei_A) {
		case "Taiji":
			switch (zsName) {
				case "tj_panda":
					yxZStime = yxZStime + tj_panda.ATimeQ + tj_panda.ATime;
					break;
				case "tj_tuishou":
					yxZStime = yxZStime + tj_tuishou.ATimeQ + tj_tuishou.ATime;
					break;
				case "tj_qingna":
					yxZStime = yxZStime + tj_qingna.ATimeQ + tj_qingna.ATime;
					break;
				case "tj_shuangfong":
					yxZStime = yxZStime + tj_shuangfong.ATimeQ + tj_shuangfong.ATime;
					break;
				case "tj_zhoudicui":
					yxZStime = yxZStime + tj_zhoudicui.ATimeQ + tj_zhoudicui.ATime;
					break;
				case "tj_paocui":
					yxZStime = yxZStime + tj_paocui.ATimeQ + tj_paocui.ATime;
					break;
				case "tj_yuanyangtui":
					yxZStime = yxZStime + tj_yuanyangtui.ATimeQ + tj_yuanyangtui.ATime;
					break;
				case "tj_banshuai":
					yxZStime = yxZStime + tj_banshuai.ATimeQ + tj_banshuai.ATime;
					break;
			}
			break;
		case "Taiquan":
			switch (zsName) {
				case "tq_zhiquan":
					yxZStime = yxZStime + tq_zhiquan.ATimeQ + tq_zhiquan.ATime;
					break;
				case "tq_lrgouquan":
					yxZStime = yxZStime + tq_lrgouquan.ATimeQ + tq_lrgouquan.ATime;
					break;
				case "tq_sgouquan":
					yxZStime = yxZStime + tq_sgouquan.ATimeQ + tq_sgouquan.ATime;
					break;
				case "tq_zhouji":
					yxZStime = yxZStime + tq_zhouji.ATimeQ + tq_zhouji.ATime;
					break;
				case "tq_xizhuang":
					yxZStime = yxZStime + tq_xizhuang.ATimeQ + tq_xizhuang.ATime;
					break;
				case "tq_dengtui":
					yxZStime = yxZStime + tq_dengtui.ATimeQ + tq_dengtui.ATime;
					break;
				case "tq_shaotui":
					yxZStime = yxZStime + tq_shaotui.ATimeQ + tq_shaotui.ATime;
					break;
			}
			break;
	}
}

//剩余时间显示
function xuanshisyTime() {
	$("#xuanZSsyTime").html(yxZStime.toFixed(1));
}

//已选招式初始化
function zschushihua() {
	i_yixuanZS = 1;
	switch (PaiBei_A) {
		case "Taiji":
			i_tj_panda = 1;
			i_tj_tuishou = 1;
			i_tj_qingna = 1;
			i_tj_shuangfong = 1;
			i_tj_zhoudicui = 1;
			i_tj_paocui = 1;
			i_tj_yuanyangtui = 1;
			i_tj_banshuai = 1;
			break;
		case "Taiquan":
			i_tq_zhiquan = 1;
			i_tq_lrgouquan = 1;
			i_tq_sgouquan = 1;
			i_tq_zhouji = 1;
			i_tq_xizhuang = 1;
			i_tq_dengtui = 1;
			i_tq_shaotui = 1;
			break;
	}
	AchoiceZS01.zs_name = "";
	AchoiceZS02.zs_name = "";
	AchoiceZS03.zs_name = "";
	AchoiceZS04.zs_name = "";
	AchoiceZS05.zs_name = "";
	yxZStime = 7.5;
	shanchuZShou();
}


//洗牌算法
Array.prototype.shuffle = function () {
	var input = this;
	for (var i = input.length - 1; i >= 0; i--) {
		var randomIndex = Math.floor(Math.random() * (i + 1));
		var itemAtIndex = input[randomIndex];
		input[randomIndex] = input[i];
		input[i] = itemAtIndex;
	}
	return input;
}



//敌方属性随机生成
//[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
function DFshuxingchushihua() {
	//0-100
	var a = Math.floor(Math.random() * 101);
	if (a <= 11) {
		SXB_Pinheng = 0;
	} else if (a <= 44) {
		SXB_Pinheng = 1;
	} else if (a <= 78) {
		SXB_Pinheng = 2;
	} else {
		SXB_Pinheng = 3;
	}


	do {
		var x1 = Math.floor(Math.random() * 6);
		var x2 = Math.floor(Math.random() * 6);
		SXB_Sum = 13 - SXB_Pinheng - x1 - x2;
		var x3 = Math.floor(Math.random() * (SXB_Sum + 1));
		var x4 = SXB_Sum - x3;
	}
	while (x1 > 5 || x2 > 5 || x3 > 5 || x4 > 5);

	var tempArray = [1, 2, 3, 4]
	tempArray.shuffle();
	switch (tempArray[0]) {
		case 1:
			SXB_Liliang = x1;
			break;
		case 2:
			SXB_Liliang = x2;
			break;
		case 3:
			SXB_Liliang = x3;
			break;
		case 4:
			SXB_Liliang = x4;
			break;
	}
	switch (tempArray[1]) {
		case 1:
			SXB_Minjie = x1;
			break;
		case 2:
			SXB_Minjie = x2;
			break;
		case 3:
			SXB_Minjie = x3;
			break;
		case 4:
			SXB_Minjie = x4;
			break;
	}
	switch (tempArray[2]) {
		case 1:
			SXB_Zhili = x1;
			break;
		case 2:
			SXB_Zhili = x2;
			break;
		case 3:
			SXB_Zhili = x3;
			break;
		case 4:
			SXB_Zhili = x4;
			break;
	}
	switch (tempArray[3]) {
		case 1:
			SXB_Tizhi = x1;
			break;
		case 2:
			SXB_Tizhi = x2;
			break;
		case 3:
			SXB_Tizhi = x3;
			break;
		case 4:
			SXB_Tizhi = x4;
			break;
	}


}




function Shuxingshuaxin_B() {
	shuijiPaibei();

	$("#TuKuang_B_Liliang").html("力量：" + SXB_Liliang);
	$("#TuKuang_B_Minjie").html("敏捷：" + SXB_Minjie);
	$("#TuKuang_B_Zhili").html("智力：" + SXB_Zhili);
	$("#TuKuang_B_Tizhi").html("体质：" + SXB_Tizhi);
	$("#TuKuang_B_Pinheng").html("平衡：" + SXB_Pinheng);

	$("#TuchuKuang_B_gongjiJC").html(Add_zh(Math.round((mSX_LiLiang.gongjiJC(SXB_Liliang) - 1) * 100)) + "%");
	$("#TuchuKuang_B_baojishanghai").html(Add_zh(Math.round((mSX_LiLiang.baojishanghai(SXB_Liliang) - 1) * 100)) + "%");
	$("#TuchuKuang_B_shudu").html(SXB_Minjie);
	$("#TuchuKuang_B_shanbi").html(SXB_Minjie);
	$("#TuchuKuang_B_baojijilv").html(mSX_ZhiLi.baojijilv(SXB_Zhili) * 100 + "%");
	$("#TuchuKuang_B_gongjifudongjilv").html(mSX_ZhiLi.gongjifudongjilv(SXB_Zhili) * 100 + "%");
	$("#TuchuKuang_B_minzhongxz").html(Add_zh(mSX_ZhiLi.minzhongxz(SXB_Zhili) * 100) + "%");
	$("#TuchuKuang_B_qinbao").html(mSX_ZhiLi.qinbao(SXB_Zhili));
	$("#TuchuKuang_B_fangyujilv").html(SXB_Tizhi);
	$("#TuchuKuang_B_yibanfanshuang").html(mSX_Tizhi.yibanfanshuang(SXB_Tizhi) * 100 + "%");
	$("#TuchuKuang_B_fangyufanshuang").html(mSX_Tizhi.fangyufanshuang(SXB_Tizhi) * 100 + "%");
	$("#TuchuKuang_B_wendinfantan").html(mSX_Tizhi.wendinfantan(SXB_Tizhi) * 100 + "%");
	$("#TuchuKuang_B_wendinzhi").html(mSX_Pinheng.wendinzhi(SXB_Pinheng));
	$("#TuchuKuang_B_wendinhuifu").html(mSX_Pinheng.wendinhuifu(SXB_Pinheng));
}

//[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
function shuijiPaibei() {
	if (Math.floor(Math.random() * 2)) {
		PaiBei_B = "Taiji";
		$("#TuKuangTitle_He_paibie").html("太极");
		$("#TuKuangTitle_He_paibie").css("color", "#4388bb");
	} else {
		PaiBei_B = "Taiquan";
		$("#TuKuangTitle_He_paibie").html("泰拳");
		$("#TuKuangTitle_He_paibie").css("color", "#a50000");
	}
}

//随机招式
function DifangshujiZS() {
	var DFyxZStime = 7.5;
	var i_DFyixuanZS = 0;
	do {
		var a = 0; //可选招式数
		var ZSjihe = Array(); //招式集合
		var x = 0; //随机数
		switch (PaiBei_B) {
			case "Taiji":
				Btj_panda.ATimeQ = true_tj_panda.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btj_panda.ATime = true_tj_panda.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				Btj_tuishou.ATimeQ = true_tj_tuishou.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btj_tuishou.ATime = true_tj_tuishou.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				Btj_qingna.ATimeQ = true_tj_qingna.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btj_qingna.ATime = true_tj_qingna.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				Btj_shuangfong.ATimeQ = true_tj_shuangfong.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btj_shuangfong.ATime = true_tj_shuangfong.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				Btj_zhoudicui.ATimeQ = true_tj_zhoudicui.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btj_zhoudicui.ATime = true_tj_zhoudicui.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				Btj_paocui.ATimeQ = true_tj_paocui.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btj_paocui.ATime = true_tj_paocui.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				Btj_yuanyangtui.ATimeQ = true_tj_yuanyangtui.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btj_yuanyangtui.ATime = true_tj_yuanyangtui.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				Btj_banshuai.ATimeQ = true_tj_banshuai.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btj_banshuai.ATime = true_tj_banshuai.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				if ((Btj_panda.ATimeQ + Btj_panda.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tj_panda";
					a++;
				}
				if ((Btj_tuishou.ATimeQ + Btj_tuishou.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tj_tuishou";
					a++;
				}
				if ((Btj_qingna.ATimeQ + Btj_qingna.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tj_qingna";
					a++;
				}
				if ((Btj_shuangfong.ATimeQ + Btj_shuangfong.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tj_shuangfong";
					a++;
				}
				if ((Btj_zhoudicui.ATimeQ + Btj_zhoudicui.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tj_zhoudicui";
					a++;
				}
				if ((Btj_paocui.ATimeQ + Btj_paocui.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tj_paocui";
					a++;
				}
				if ((Btj_yuanyangtui.ATimeQ + Btj_yuanyangtui.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tj_yuanyangtui";
					a++;
				}
				if ((Btj_banshuai.ATimeQ + Btj_banshuai.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tj_banshuai";
					a++;
				}
				if (a === 0) {
					switch (i_DFyixuanZS) {
						case 0:
							BchoiceZS01.zs_name = "";
							break;
						case 1:
							BchoiceZS02.zs_name = "";
							break;
						case 2:
							BchoiceZS03.zs_name = "";
							break;
						case 3:
							BchoiceZS04.zs_name = "";
							break;
						case 4:
							BchoiceZS05.zs_name = "";
							break;
					}
				} else {
					//[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
					x = Math.floor(Math.random() * (a + 1) + 1);
					switch (i_DFyixuanZS) {
						case 0:
							BchoiceZS01.zs_name = ZSjihe[x];
							break;
						case 1:
							BchoiceZS02.zs_name = ZSjihe[x];
							break;
						case 2:
							BchoiceZS03.zs_name = ZSjihe[x];
							break;
						case 3:
							BchoiceZS04.zs_name = ZSjihe[x];
							break;
						case 4:
							BchoiceZS05.zs_name = ZSjihe[x];
							break;
					}
				}
				break;
			case "Taiquan":
				Btq_zhiquan.ATimeQ = true_tq_zhiquan.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btq_zhiquan.ATime = true_tq_zhiquan.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				Btq_lrgouquan.ATimeQ = true_tq_lrgouquan.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btq_lrgouquan.ATime = true_tq_lrgouquan.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				Btq_sgouquan.ATimeQ = true_tq_sgouquan.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btq_sgouquan.ATime = true_tq_sgouquan.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				Btq_zhouji.ATimeQ = true_tq_zhouji.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btq_zhouji.ATime = true_tq_zhouji.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				Btq_xizhuang.ATimeQ = true_tq_xizhuang.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btq_xizhuang.ATime = true_tq_xizhuang.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				Btq_dengtui.ATimeQ = true_tq_dengtui.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btq_dengtui.ATime = true_tq_dengtui.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				Btq_shaotui.ATimeQ = true_tq_shaotui.ATimeQ + mSX_Minjie.shuduJC_Q(SXB_Minjie);
				Btq_shaotui.ATime = true_tq_shaotui.ATime + mSX_Minjie.shuduJC_Z(SXB_Minjie);

				if ((Btq_zhiquan.ATimeQ + Btq_zhiquan.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tq_zhiquan";
					a++;
				}
				if ((Btq_lrgouquan.ATimeQ + Btq_lrgouquan.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tq_lrgouquan";
					a++;
				}
				if ((Btq_sgouquan.ATimeQ + Btq_sgouquan.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tq_sgouquan";
					a++;
				}
				if ((Btq_zhouji.ATimeQ + Btq_zhouji.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tq_zhouji";
					a++;
				}
				if ((Btq_xizhuang.ATimeQ + Btq_xizhuang.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tq_xizhuang";
					a++;
				}
				if ((Btq_dengtui.ATimeQ + Btq_dengtui.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tq_dengtui";
					a++;
				}
				if ((Btq_shaotui.ATimeQ + Btq_shaotui.ATime).toFixed(1) <= DFyxZStime) {
					ZSjihe[a] = "tq_shaotui";
					a++;
				}
				if (a === 0) {
					switch (i_DFyixuanZS) {
						case 0:
							BchoiceZS01.zs_name = "";
							break;
						case 1:
							BchoiceZS02.zs_name = "";
							break;
						case 2:
							BchoiceZS03.zs_name = "";
							break;
						case 3:
							BchoiceZS04.zs_name = "";
							break;
						case 4:
							BchoiceZS05.zs_name = "";
							break;
					}
				} else {
					//[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
					x = Math.floor(Math.random() * (a + 1) + 1);
					switch (i_DFyixuanZS) {
						case 0:
							BchoiceZS01.zs_name = ZSjihe[x];
							BzsHouxuanBuwei(BchoiceZS01.zs_name, 1);
							break;
						case 1:
							BchoiceZS02.zs_name = ZSjihe[x];
							break;
						case 2:
							BchoiceZS03.zs_name = ZSjihe[x];
							break;
						case 3:
							BchoiceZS04.zs_name = ZSjihe[x];
							break;
						case 4:
							BchoiceZS05.zs_name = ZSjihe[x];
							break;
					}
				}
				break;
		}
		i_DFyixuanZS++;
	} while (i_DFyixuanZS <= 5);
	alert(BchoiceZS01.zs_name + "," + BchoiceZS02.zs_name + "," + BchoiceZS03.zs_name + "," + BchoiceZS04.zs_name + "," + BchoiceZS05.zs_name);
}

function BzsHouxuanBuwei(zsname, a) {
	var sjs = 0;
	switch (zsname) {
		case "tj_panda":
			switch (a) {
				case 1:
					//[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
					sjs = Math.floor(Math.random() * 2);
					if (sjs) {
						BchoiceZS01.zs_frome = "shoul";
					} else {
						BchoiceZS01.zs_frome = "shour";
					}
					sjs = Math.floor(Math.random() * 5);
					if (sjs <= 0) {
						BchoiceZS01.zs_to = "头部";
					} else if (sjs <= 1) {
						BchoiceZS01.zs_to = "胸部";
					} else if (sjs <= 2) {
						BchoiceZS01.zs_to = "腹部";
					} else if (sjs <= 3) {
						BchoiceZS01.zs_to = "肩关节";
						sjs = Math.floor(Math.random() * 2);
						if (sjs) {
							BchoiceZS01.zs_torl = "l";
						} else {
							BchoiceZS01.zs_torl = "r";
						}
					}
					break;
				case 2:
					break;
				case 3:
					break;
				case 4:
					break;
				case 5:
					break;
			}
			break;
		case "tj_tuishou":
			break;
		case "tj_qingna":
			break;
		case "tj_shuangfong":
			break;
		case "tj_zhoudicui":
			break;
		case "tj_paocui":
			break;
		case "tj_yuanyangtui":
			break;
		case "tj_banshuai":
			break;
		case "tq_zhiquan":
			break;
		case "tq_lrgouquan":
			break;
		case "tq_sgouquan":
			break;
		case "tq_zhouji":
			break;
		case "tq_xizhuang":
			break;
		case "tq_dengtui":
			break;
		case "tq_shaotui":
			break;
	}
}
