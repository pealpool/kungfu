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
            $(".shi_hr").css("border-bottom", "1px solid #003179");
            //$("#choiceShuxinZhongKuangR").removeClass().addClass("choiceShuxinZhongKuangR Kuang10 cPBTaiji1");
            $("#choiceShuxinZhongKuangR").attr("class", "cPBTaiji1");
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
            $(".shi_hr").css("border-bottom", "1px solid #bb1c33");
            //$("#choiceShuxinZhongKuangR").removeClass().addClass("choiceShuxinZhongKuangR Kuang10 cPBTaiquan1");
            $("#choiceShuxinZhongKuangR").attr("class", "cPBTaiquan1");
            break;
    }
}

//选择派别后的动作
function choicePB_h() {
    switch (PaiBei_A) {
        case "Taiji":
            document.getElementById("choiceZhaoshishiXiaoKuang_Taiji").style.backgroundColor = "#e2eaf7";
            document.getElementById("choiceZhaoshishiXiaoKuang_Taiquan").style.backgroundColor = "#fff";
            document.getElementById("ZhaoshiMinXiao").setAttribute("class", "ZhaoshiMinXiao Kuang10 ZsMX_Taiji");
            $("#ZhaoshiMinXiao").html("太<br />极");
            $("#zhaoshineirong").html("<div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>攀打</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_panda_te=''>特</div></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>推手</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>擒拿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>双峰贯耳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘底捶</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_zhoudicui_te=''>特</div></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>炮锤</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>鸳鸯腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_yuanyangtui_te>特</div></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>绊摔</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW8'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN8'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz8'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ8'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime8'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH8'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt8'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH8'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_banshuai_te>特</div></div></div>");
            $("#PinHengXH1").html(tj_panda.PinHengXH);
            $("#PinHengXH2").html(tj_tuishou.PinHengXH);
            $("#PinHengXH3").html(tj_qingna.PinHengXH);
            $("#PinHengXH4").html(tj_shuangfong.PinHengXH);
            $("#PinHengXH5").html(tj_zhoudicui.PinHengXH);
            $("#PinHengXH6").html(tj_paocui.PinHengXH);
            $("#PinHengXH7").html(tj_yuanyangtui.PinHengXH);
            $("#PinHengXH8").html(tj_banshuai.PinHengXH);

            break;
        case "Taiquan":
            document.getElementById("choiceZhaoshishiXiaoKuang_Taiji").style.backgroundColor = "#fff";
            document.getElementById("choiceZhaoshishiXiaoKuang_Taiquan").style.backgroundColor = "#f7e2e8";
            document.getElementById("ZhaoshiMinXiao").setAttribute("class", "ZhaoshiMinXiao Kuang10 ZsMX_Taiquan");
            $("#ZhaoshiMinXiao").html("泰<br />拳");
            $("#zhaoshineirong").html("<div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>直拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>左右勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>上勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘击</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 肘</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>膝撞</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 膝</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>蹬腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLB'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>扫腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div>");
            $("#PinHengXH1").html(tq_zhiquan.PinHengXH);
            $("#PinHengXH2").html(tq_lrgouquan.PinHengXH);
            $("#PinHengXH3").html(tq_sgouquan.PinHengXH);
            $("#PinHengXH4").html(tq_zhouji.PinHengXH);
            $("#PinHengXH5").html(tq_xizhuang.PinHengXH);
            $("#PinHengXH6").html(tq_dengtui.PinHengXH);
            $("#PinHengXH7").html(tq_shaotui.PinHengXH);

            break;
    }
    document.getElementById("choiceJinDuLan_XZpaibei").setAttribute("class", "choiceJinDuLanButtom grayButtom");
    document.getElementById("choiceJinDuLan_XZshuxin").setAttribute("class", "choiceJinDuLanButtom myblack");
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
            document.getElementById("choiceJinDuLan_XZpaibei").setAttribute("class", "choiceJinDuLanButtom myblack");
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
    $("#DianshuDaKuang_TTR").html(SX_Sum[0]);
    $("#DianshuDaKuang_TR2_Liliang").html(SX_Liliang[0]);
    $("#DianshuguanlianXiaoKuang_s_gongjiJC").html(Add_zh(Math.round((mSX_LiLiang.gongjiJC(SX_Liliang[0]) - 1) * 100)) + "%");
    $("#DianshuguanlianXiaoKuang_s_baojishanghai").html(Add_zh(Math.round((mSX_LiLiang.baojishanghai(SX_Liliang[0]) - 1) * 100)) + "%");
    if (PaiBei_A === "Taiji") {
        BDgl_Liliang_n();
        $("#AttW1").html(Math.round(tj_panda.AttW));
        $("#AttN1").html(Math.round(tj_panda.AttN));
        $("#PinHengAtt1").html(Math.round(tj_panda.PinHengAtt));
        $("#AttW2").html(Math.round(tj_tuishou.AttW));
        $("#AttN2").html(Math.round(tj_tuishou.AttN));
        $("#PinHengAtt2").html(Math.round(tj_tuishou.PinHengAtt));
        $("#AttW3").html(Math.round(tj_qingna.AttW));
        $("#AttN3").html(Math.round(tj_qingna.AttN));
        $("#PinHengAtt3").html(Math.round(tj_qingna.PinHengAtt));
        $("#AttW4").html(Math.round(tj_shuangfong.AttW));
        $("#AttN4").html(Math.round(tj_shuangfong.AttN));
        $("#PinHengAtt4").html(Math.round(tj_shuangfong.PinHengAtt));
        $("#AttW5").html(Math.round(tj_zhoudicui.AttW));
        $("#AttN5").html(Math.round(tj_zhoudicui.AttN));
        $("#PinHengAtt5").html(Math.round(tj_zhoudicui.PinHengAtt));
        $("#AttW6").html(Math.round(tj_paocui.AttW));
        $("#AttN6").html(Math.round(tj_paocui.AttN));
        $("#PinHengAtt6").html(Math.round(tj_paocui.PinHengAtt));
        $("#AttW7").html(Math.round(tj_yuanyangtui.AttW));
        $("#AttN7").html(Math.round(tj_yuanyangtui.AttN));
        $("#PinHengAtt7").html(Math.round(tj_yuanyangtui.PinHengAtt));
        $("#AttW8").html(Math.round(tj_banshuai.AttW));
        $("#AttN8").html(Math.round(tj_banshuai.AttN));
        $("#PinHengAtt8").html(Math.round(tj_banshuai.PinHengAtt));
    } else if (PaiBei_A === "Taiquan") {
        BDgl_Liliang_n();
        $("#AttW1").html(Math.round(tq_zhiquan.AttW));
        $("#AttN1").html(Math.round(tq_zhiquan.AttN));
        $("#PinHengAtt1").html(Math.round(tq_zhiquan.PinHengAtt));
        $("#AttW2").html(Math.round(tq_lrgouquan.AttW));
        $("#AttN2").html(Math.round(tq_lrgouquan.AttN));
        $("#PinHengAtt2").html(Math.round(tq_lrgouquan.PinHengAtt));
        $("#AttW3").html(Math.round(tq_sgouquan.AttW));
        $("#AttN3").html(Math.round(tq_sgouquan.AttN));
        $("#PinHengAtt3").html(Math.round(tq_sgouquan.PinHengAtt));
        $("#AttW4").html(Math.round(tq_zhouji.AttW));
        $("#AttN4").html(Math.round(tq_zhouji.AttN));
        $("#PinHengAtt4").html(Math.round(tq_zhouji.PinHengAtt));
        $("#AttW5").html(Math.round(tq_xizhuang.AttW));
        $("#AttN5").html(Math.round(tq_xizhuang.AttN));
        $("#PinHengAtt5").html(Math.round(tq_xizhuang.PinHengAtt));
        $("#AttW6").html(Math.round(tq_dengtui.AttW));
        $("#AttN6").html(Math.round(tq_dengtui.AttN));
        $("#PinHengAtt6").html(Math.round(tq_dengtui.PinHengAtt));
        $("#AttW7").html(Math.round(tq_shaotui.AttW));
        $("#AttN7").html(Math.round(tq_shaotui.AttN));
        $("#PinHengAtt7").html(Math.round(tq_shaotui.PinHengAtt));
    }
}

function BDgl_Liliang_n() {
    if (PaiBei_A === "Taiji") {
        tj_panda.AttW = ZSglIO.AttW_screen("tj_panda", SX_Liliang[0], SX_Zhili[0]);
        tj_panda.AttN = ZSglIO.AttN_screen("tj_panda", SX_Liliang[0], SX_Zhili[0]);
        tj_panda.PinHengAtt = ZSglIO.PinHengAtt_screen("tj_panda", SX_Liliang[0], SX_Zhili[0]);
        tj_tuishou.AttW = ZSglIO.AttW_screen("tj_tuishou", SX_Liliang[0], SX_Zhili[0]);
        tj_tuishou.AttN = ZSglIO.AttN_screen("tj_tuishou", SX_Liliang[0], SX_Zhili[0]);
        tj_tuishou.PinHengAtt = ZSglIO.PinHengAtt_screen("tj_tuishou", SX_Liliang[0], SX_Zhili[0]);
        tj_qingna.AttW = ZSglIO.AttW_screen("tj_qingna", SX_Liliang[0], SX_Zhili[0]);
        tj_qingna.AttN = ZSglIO.AttN_screen("tj_qingna", SX_Liliang[0], SX_Zhili[0]);
        tj_qingna.PinHengAtt = ZSglIO.PinHengAtt_screen("tj_qingna", SX_Liliang[0], SX_Zhili[0]);
        tj_shuangfong.AttW = ZSglIO.AttW_screen("tj_shuangfong", SX_Liliang[0], SX_Zhili[0]);
        tj_shuangfong.AttN = ZSglIO.AttN_screen("tj_shuangfong", SX_Liliang[0], SX_Zhili[0]);
        tj_shuangfong.PinHengAtt = ZSglIO.PinHengAtt_screen("tj_shuangfong", SX_Liliang[0], SX_Zhili[0]);
        tj_zhoudicui.AttW = ZSglIO.AttW_screen("tj_zhoudicui", SX_Liliang[0], SX_Zhili[0]);
        tj_zhoudicui.AttN = ZSglIO.AttN_screen("tj_zhoudicui", SX_Liliang[0], SX_Zhili[0]);
        tj_zhoudicui.PinHengAtt = ZSglIO.PinHengAtt_screen("tj_zhoudicui", SX_Liliang[0], SX_Zhili[0]);
        tj_paocui.AttW = ZSglIO.AttW_screen("tj_paocui", SX_Liliang[0], SX_Zhili[0]);
        tj_paocui.AttN = ZSglIO.AttN_screen("tj_paocui", SX_Liliang[0], SX_Zhili[0]);
        tj_paocui.PinHengAtt = ZSglIO.PinHengAtt_screen("tj_paocui", SX_Liliang[0], SX_Zhili[0]);
        tj_yuanyangtui.AttW = ZSglIO.AttW_screen("tj_yuanyangtui", SX_Liliang[0], SX_Zhili[0]);
        tj_yuanyangtui.AttN = ZSglIO.AttN_screen("tj_yuanyangtui", SX_Liliang[0], SX_Zhili[0]);
        tj_yuanyangtui.PinHengAtt = ZSglIO.PinHengAtt_screen("tj_yuanyangtui", SX_Liliang[0], SX_Zhili[0]);
        tj_banshuai.AttW = ZSglIO.AttW_screen("tj_banshuai", SX_Liliang[0], SX_Zhili[0]);
        tj_banshuai.AttN = ZSglIO.AttN_screen("tj_banshuai", SX_Liliang[0], SX_Zhili[0]);
        tj_banshuai.PinHengAtt = ZSglIO.PinHengAtt_screen("tj_banshuai", SX_Liliang[0], SX_Zhili[0]);
    } else if (PaiBei_A === "Taiquan") {
        tq_zhiquan.AttW = ZSglIO.AttW_screen("tq_zhiquan", SX_Liliang[0], SX_Zhili[0]);
        tq_zhiquan.AttN = ZSglIO.AttN_screen("tq_zhiquan", SX_Liliang[0], SX_Zhili[0]);
        tq_zhiquan.PinHengAtt = ZSglIO.PinHengAtt_screen("tq_zhiquan", SX_Liliang[0], SX_Zhili[0]);
        tq_lrgouquan.AttW = ZSglIO.AttW_screen("tq_lrgouquan", SX_Liliang[0], SX_Zhili[0]);
        tq_lrgouquan.AttN = ZSglIO.AttN_screen("tq_lrgouquan", SX_Liliang[0], SX_Zhili[0]);
        tq_lrgouquan.PinHengAtt = ZSglIO.PinHengAtt_screen("tq_lrgouquan", SX_Liliang[0], SX_Zhili[0]);
        tq_sgouquan.AttW = ZSglIO.AttW_screen("tq_sgouquan", SX_Liliang[0], SX_Zhili[0]);
        tq_sgouquan.AttN = ZSglIO.AttN_screen("tq_sgouquan", SX_Liliang[0], SX_Zhili[0]);
        tq_sgouquan.PinHengAtt = ZSglIO.PinHengAtt_screen("tq_sgouquan", SX_Liliang[0], SX_Zhili[0]);
        tq_zhouji.AttW = ZSglIO.AttW_screen("tq_zhouji", SX_Liliang[0], SX_Zhili[0]);
        tq_zhouji.AttN = ZSglIO.AttN_screen("tq_zhouji", SX_Liliang[0], SX_Zhili[0]);
        tq_zhouji.PinHengAtt = ZSglIO.PinHengAtt_screen("tq_zhouji", SX_Liliang[0], SX_Zhili[0]);
        tq_xizhuang.AttW = ZSglIO.AttW_screen("tq_xizhuang", SX_Liliang[0], SX_Zhili[0]);
        tq_xizhuang.AttN = ZSglIO.AttN_screen("tq_xizhuang", SX_Liliang[0], SX_Zhili[0]);
        tq_xizhuang.PinHengAtt = ZSglIO.PinHengAtt_screen("tq_xizhuang", SX_Liliang[0], SX_Zhili[0]);
        tq_dengtui.AttW = ZSglIO.AttW_screen("tq_dengtui", SX_Liliang[0], SX_Zhili[0]);
        tq_dengtui.AttN = ZSglIO.AttN_screen("tq_dengtui", SX_Liliang[0], SX_Zhili[0]);
        tq_dengtui.PinHengAtt = ZSglIO.PinHengAtt_screen("tq_dengtui", SX_Liliang[0], SX_Zhili[0]);
        tq_shaotui.AttW = ZSglIO.AttW_screen("tq_shaotui", SX_Liliang[0], SX_Zhili[0]);
        tq_shaotui.AttN = ZSglIO.AttN_screen("tq_shaotui", SX_Liliang[0], SX_Zhili[0]);
        tq_shaotui.PinHengAtt = ZSglIO.PinHengAtt_screen("tq_shaotui", SX_Liliang[0], SX_Zhili[0]);
    }
}


//关联数据变动输出【Minjie】
function BDgl_Minjie() {
    $("#DianshuDaKuang_TTR").html(SX_Sum[0]);
    $("#DianshuDaKuang_TR2_Minjie").html(SX_Minjie[0]);
    $("#DianshuguanlianXiaoKuang_s_shudu").html(SX_Minjie[0]);
    $("#DianshuguanlianXiaoKuang_s_shanbi").html(SX_Minjie[0]);
    if (PaiBei_A === "Taiji") {
        BDgl_Minjie_n();

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
        BDgl_Minjie_n();

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

function BDgl_Minjie_n() {
    if (PaiBei_A === "Taiji") {
        tj_panda.ATimeQ = ZSglIO.ATimeQ("tj_panda", SX_Minjie[0]);
        tj_panda.ATime = ZSglIO.ATime("tj_panda", SX_Minjie[0]);
        tj_panda.ATimeH = ZSglIO.ATimeH("tj_panda", SX_Minjie[0]);

        tj_tuishou.ATimeQ = ZSglIO.ATimeQ("tj_tuishou", SX_Minjie[0]);
        tj_tuishou.ATime = ZSglIO.ATime("tj_tuishou", SX_Minjie[0]);
        tj_tuishou.ATimeH = ZSglIO.ATimeH("tj_tuishou", SX_Minjie[0]);

        tj_qingna.ATimeQ = ZSglIO.ATimeQ("tj_qingna", SX_Minjie[0]);
        tj_qingna.ATime = ZSglIO.ATime("tj_qingna", SX_Minjie[0]);
        tj_qingna.ATimeH = ZSglIO.ATimeH("tj_qingna", SX_Minjie[0]);

        tj_shuangfong.ATimeQ = ZSglIO.ATimeQ("tj_shuangfong", SX_Minjie[0]);
        tj_shuangfong.ATime = ZSglIO.ATime("tj_shuangfong", SX_Minjie[0]);
        tj_shuangfong.ATimeH = ZSglIO.ATimeH("tj_shuangfong", SX_Minjie[0]);

        tj_zhoudicui.ATimeQ = ZSglIO.ATimeQ("tj_zhoudicui", SX_Minjie[0]);
        tj_zhoudicui.ATime = ZSglIO.ATime("tj_zhoudicui", SX_Minjie[0]);
        tj_zhoudicui.ATimeH = ZSglIO.ATimeH("tj_zhoudicui", SX_Minjie[0]);

        tj_paocui.ATimeQ = ZSglIO.ATimeQ("tj_paocui", SX_Minjie[0]);
        tj_paocui.ATime = ZSglIO.ATime("tj_paocui", SX_Minjie[0]);
        tj_paocui.ATimeH = ZSglIO.ATimeH("tj_paocui", SX_Minjie[0]);

        tj_yuanyangtui.ATimeQ = ZSglIO.ATimeQ("tj_yuanyangtui", SX_Minjie[0]);
        tj_yuanyangtui.ATime = ZSglIO.ATime("tj_yuanyangtui", SX_Minjie[0]);
        tj_yuanyangtui.ATimeH = ZSglIO.ATimeH("tj_yuanyangtui", SX_Minjie[0]);

        tj_banshuai.ATimeQ = ZSglIO.ATimeQ("tj_banshuai", SX_Minjie[0]);
        tj_banshuai.ATime = ZSglIO.ATime("tj_banshuai", SX_Minjie[0]);
        tj_banshuai.ATimeH = ZSglIO.ATimeH("tj_banshuai", SX_Minjie[0]);
    } else if (PaiBei_A === "Taiquan") {

        tq_zhiquan.ATimeQ = ZSglIO.ATimeQ("tq_zhiquan", SX_Minjie[0]);
        tq_zhiquan.ATime = ZSglIO.ATime("tq_zhiquan", SX_Minjie[0]);
        tq_zhiquan.ATimeH = ZSglIO.ATimeH("tq_zhiquan", SX_Minjie[0]);

        tq_lrgouquan.ATimeQ = ZSglIO.ATimeQ("tq_lrgouquan", SX_Minjie[0]);
        tq_lrgouquan.ATime = ZSglIO.ATime("tq_lrgouquan", SX_Minjie[0]);
        tq_lrgouquan.ATimeH = ZSglIO.ATimeH("tq_lrgouquan", SX_Minjie[0]);

        tq_sgouquan.ATimeQ = ZSglIO.ATimeQ("tq_sgouquan", SX_Minjie[0]);
        tq_sgouquan.ATime = ZSglIO.ATime("tq_sgouquan", SX_Minjie[0]);
        tq_sgouquan.ATimeH = ZSglIO.ATimeH("tq_sgouquan", SX_Minjie[0]);

        tq_zhouji.ATimeQ = ZSglIO.ATimeQ("tq_zhouji", SX_Minjie[0]);
        tq_zhouji.ATime = ZSglIO.ATime("tq_zhouji", SX_Minjie[0]);
        tq_zhouji.ATimeH = ZSglIO.ATimeH("tq_zhouji", SX_Minjie[0]);

        tq_xizhuang.ATimeQ = ZSglIO.ATimeQ("tq_xizhuang", SX_Minjie[0]);
        tq_xizhuang.ATime = ZSglIO.ATime("tq_xizhuang", SX_Minjie[0]);
        tq_xizhuang.ATimeH = ZSglIO.ATimeH("tq_xizhuang", SX_Minjie[0]);

        tq_dengtui.ATimeQ = ZSglIO.ATimeQ("tq_dengtui", SX_Minjie[0]);
        tq_dengtui.ATime = ZSglIO.ATime("tq_dengtui", SX_Minjie[0]);
        tq_dengtui.ATimeH = ZSglIO.ATimeH("tq_dengtui", SX_Minjie[0]);

        tq_shaotui.ATimeQ = ZSglIO.ATimeQ("tq_shaotui", SX_Minjie[0]);
        tq_shaotui.ATime = ZSglIO.ATime("tq_shaotui", SX_Minjie[0]);
        tq_shaotui.ATimeH = ZSglIO.ATimeH("tq_shaotui", SX_Minjie[0]);
    }
}

//关联数据变动输出【Zhili】
function BDgl_Zhili() {
    $("#DianshuDaKuang_TTR").html(SX_Sum[0]);
    $("#DianshuDaKuang_TR2_Zhili").html(SX_Zhili[0]);
    $("#DianshuguanlianXiaoKuang_s_baojijilv").html(mSX_ZhiLi.baojijilv(SX_Zhili[0]) * 100 + "%");
    $("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").html(mSX_ZhiLi.gongjifudongjilv(SX_Zhili[0]) * 100 + "%");
    $("#DianshuguanlianXiaoKuang_s_minzhongxz").html(Add_zh(mSX_ZhiLi.minzhongxz(SX_Zhili[0]) * 100) + "%");
    $("#DianshuguanlianXiaoKuang_s_qinbao").html(mSX_ZhiLi.qinbao(SX_Zhili[0]));
    BDgl_Liliang();

    if (PaiBei_A === "Taiji") {
        BDgl_Zhili_n();
        $("#Mzxz1").html(Add_zh(Math.round(tj_panda.Mzxz * 100)) + "%");
        $("#Mzxz2").html(Add_zh(Math.round(tj_tuishou.Mzxz * 100)) + "%");
        $("#Mzxz3").html(Add_zh(Math.round(tj_qingna.Mzxz * 100)) + "%");
        $("#Mzxz4").html(Add_zh(Math.round(tj_shuangfong.Mzxz * 100)) + "%");
        $("#Mzxz5").html(Add_zh(Math.round(tj_zhoudicui.Mzxz * 100)) + "%");
        $("#Mzxz6").html(Add_zh(Math.round(tj_paocui.Mzxz * 100)) + "%");
        $("#Mzxz7").html(Add_zh(Math.round(tj_yuanyangtui.Mzxz * 100)) + "%");
        $("#Mzxz8").html(Add_zh(Math.round(tj_banshuai.Mzxz * 100)) + "%");

    } else if (PaiBei_A === "Taiquan") {
        BDgl_Zhili_n();
        $("#Mzxz1").html(Add_zh(Math.round(tq_zhiquan.Mzxz * 100)) + "%");
        $("#Mzxz2").html(Add_zh(Math.round(tq_lrgouquan.Mzxz * 100)) + "%");
        $("#Mzxz3").html(Add_zh(Math.round(tq_sgouquan.Mzxz * 100)) + "%");
        $("#Mzxz4").html(Add_zh(Math.round(tq_zhouji.Mzxz * 100)) + "%");
        $("#Mzxz5").html(Add_zh(Math.round(tq_xizhuang.Mzxz * 100)) + "%");
        $("#Mzxz6").html(Add_zh(Math.round(tq_dengtui.Mzxz * 100)) + "%");
        $("#Mzxz7").html(Add_zh(Math.round(tq_shaotui.Mzxz * 100)) + "%");
    }
}

function BDgl_Zhili_n() {
    if (PaiBei_A === "Taiji") {
        tj_panda.Mzxz = ZSglIO.Mzxz("tj_panda", SX_Zhili[0]);
        tj_tuishou.Mzxz = ZSglIO.Mzxz("tj_tuishou", SX_Zhili[0]);
        tj_qingna.Mzxz = ZSglIO.Mzxz("tj_qingna", SX_Zhili[0]);
        tj_shuangfong.Mzxz = ZSglIO.Mzxz("tj_shuangfong", SX_Zhili[0]);
        tj_zhoudicui.Mzxz = ZSglIO.Mzxz("tj_zhoudicui", SX_Zhili[0]);
        tj_paocui.Mzxz = ZSglIO.Mzxz("tj_paocui", SX_Zhili[0]);
        tj_yuanyangtui.Mzxz = ZSglIO.Mzxz("tj_yuanyangtui", SX_Zhili[0]);
        tj_banshuai.Mzxz = ZSglIO.Mzxz("tj_banshuai", SX_Zhili[0]);
    } else if (PaiBei_A === "Taiquan") {
        tq_zhiquan.Mzxz = ZSglIO.Mzxz("tq_zhiquan", SX_Zhili[0]);
        tq_lrgouquan.Mzxz = ZSglIO.Mzxz("tq_lrgouquan", SX_Zhili[0]);
        tq_sgouquan.Mzxz = ZSglIO.Mzxz("tq_sgouquan", SX_Zhili[0]);
        tq_zhouji.Mzxz = ZSglIO.Mzxz("tq_zhouji", SX_Zhili[0]);
        tq_xizhuang.Mzxz = ZSglIO.Mzxz("tq_xizhuang", SX_Zhili[0]);
        tq_dengtui.Mzxz = ZSglIO.Mzxz("tq_dengtui", SX_Zhili[0]);
        tq_shaotui.Mzxz = ZSglIO.Mzxz("tq_shaotui", SX_Zhili[0]);
    }
}

//关联数据变动输出【Tizhi】
function BDgl_Tizhi() {
    $("#DianshuDaKuang_TTR").html(SX_Sum[0]);
    $("#DianshuDaKuang_TR2_Tizhi").html(SX_Tizhi[0]);
    $("#DianshuguanlianXiaoKuang_s_fangyujilv").html(SX_Tizhi[0]);
    $("#DianshuguanlianXiaoKuang_s_yibanfanshuang").html(mSX_Tizhi.yibanfanshuang(SX_Tizhi[0]) * 100 + "%");
    $("#DianshuguanlianXiaoKuang_s_fangyufanshuang").html(mSX_Tizhi.fangyufanshuang(SX_Tizhi[0]) * 100 + "%");
    $("#DianshuguanlianXiaoKuang_s_wendinfantan").html(mSX_Tizhi.wendinfantan(SX_Tizhi[0]) * 100 + "%");
}

//关联数据变动输出【Pinheng】
function BDgl_Pinheng() {
    $("#DianshuDaKuang_TTR").html(SX_Sum[0]);
    $("#DianshuDaKuang_TR2_Pinheng").html(SX_Pinheng[0]);
    $("#DianshuguanlianXiaoKuang_s_wendinzhi").html(mSX_Pinheng.wendinzhi(SX_Pinheng[0]));
    $("#DianshuguanlianXiaoKuang_s_wendinhuifu").html(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]));
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
                if (SX_Liliang[0] > 0) {
                    SX_Liliang[0]--;
                    SX_Sum[0]++;
                    $("#beepone101")[0].play();
                    BDgl_Liliang();
                }
                break;
            case "Minjie":
                if (SX_Minjie[0] > 0) {
                    SX_Minjie[0]--;
                    SX_Sum[0]++;
                    $("#beepone101")[0].play();
                    BDgl_Minjie();
                }
                break;
            case "Zhili":
                if (SX_Zhili[0] > 0) {
                    SX_Zhili[0]--;
                    SX_Sum[0]++;
                    $("#beepone101")[0].play();
                    BDgl_Zhili();
                }
                break;
            case "Tizhi":
                if (SX_Tizhi[0] > 0) {
                    SX_Tizhi[0]--;
                    SX_Sum[0]++;
                    $("#beepone101")[0].play();
                    BDgl_Tizhi();
                }
                break;
            case "Pinheng":
                if (SX_Pinheng[0] > 0) {
                    SX_Pinheng[0]--;
                    SX_Sum[0]++;
                    $("#beepone101")[0].play();
                    BDgl_Pinheng();
                }
                break;
        }
    } else {
        switch (shuxin) {
            case "Liliang":
                if (SX_Sum[0] > 0 && SX_Liliang[0] < 5) {
                    SX_Liliang[0]++;
                    SX_Sum[0]--;
                    $("#beepone101")[0].play();
                    BDgl_Liliang();
                }
                break;
            case "Minjie":
                if (SX_Minjie[0] < 5 && SX_Sum[0] > 0) {
                    SX_Minjie[0]++;
                    SX_Sum[0]--;
                    $("#beepone101")[0].play();
                    BDgl_Minjie();
                }
                break;
            case "Zhili":
                if (SX_Zhili[0] < 5 && SX_Sum[0] > 0) {
                    SX_Zhili[0]++;
                    SX_Sum[0]--;
                    $("#beepone101")[0].play();
                    BDgl_Zhili();
                }
                break;
            case "Tizhi":
                if (SX_Tizhi[0] < 5 && SX_Sum[0] > 0) {
                    SX_Tizhi[0]++;
                    SX_Sum[0]--;
                    $("#beepone101")[0].play();
                    BDgl_Tizhi();
                }
                break;
            case "Pinheng":
                if (SX_Pinheng[0] < 3 && SX_Sum[0] > 0) {
                    SX_Pinheng[0]++;
                    SX_Sum[0]--;
                    $("#beepone101")[0].play();
                    BDgl_Pinheng();
                }
                break;
        }
    }
    if (SX_Sum[0] === 0) {
        $(".DianshuDaKuang_TR3.DDK_T_jj").removeClass("DDK_T_jj");
    } else {
        $(".DianshuDaKuang_TR3").addClass("DDK_T_jj");
        if (SX_Liliang[0] === 5) {
            $("#DianshuDaKuang_TR3_Liliang").removeClass("DDK_T_jj");
        }
        if (SX_Minjie[0] === 5) {
            $("#DianshuDaKuang_TR3_Minjie").removeClass("DDK_T_jj");
        }
        if (SX_Zhili[0] === 5) {
            $("#DianshuDaKuang_TR3_Zhili").removeClass("DDK_T_jj");
        }
        if (SX_Tizhi[0] === 5) {
            $("#DianshuDaKuang_TR3_Tizhi").removeClass("DDK_T_jj");
        }
        if (SX_Pinheng[0] === 3) {
            $("#DianshuDaKuang_TR3_Pinheng").removeClass("DDK_T_jj");
        }
    }
    if (SX_Liliang[0] === 0) {
        $("#DianshuDaKuang_TR1_Liliang").removeClass("DDK_T_jj");
    } else {
        $("#DianshuDaKuang_TR1_Liliang").addClass("DDK_T_jj");
    }
    if (SX_Minjie[0] === 0) {
        $("#DianshuDaKuang_TR1_Minjie").removeClass("DDK_T_jj");
    } else {
        $("#DianshuDaKuang_TR1_Minjie").addClass("DDK_T_jj");
    }
    if (SX_Zhili[0] === 0) {
        $("#DianshuDaKuang_TR1_Zhili").removeClass("DDK_T_jj");
    } else {
        $("#DianshuDaKuang_TR1_Zhili").addClass("DDK_T_jj");
    }
    if (SX_Tizhi[0] === 0) {
        $("#DianshuDaKuang_TR1_Tizhi").removeClass("DDK_T_jj");
    } else {
        $("#DianshuDaKuang_TR1_Tizhi").addClass("DDK_T_jj");
    }
    if (SX_Pinheng[0] === 0) {
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
    if (SX_Sum[0] > 0) {
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
                    action: function () {
                    }
                },
                close: {
                    text: '继续',
                    btnClass: 'btn-red',
                    action: function () {
                        Bshuxingchushihua();
                        $("#choiceBigKuang").hide("fade", 300);
                        $("#aaamask").hide("fade", 300);
                        $("#baseKuang").removeClass("bigblur");
                        Shuxingshuaxin_B();
                        ChuShiHua();
                    }
                }
            }
        });
    } else {
        Bshuxingchushihua();
        $("#choiceBigKuang").hide("fade", 300);
        $("#aaamask").hide("fade", 300);
        $("#baseKuang").removeClass("bigblur");
        Shuxingshuaxin_B();
        ChuShiHua();
    }
}

//todo 选择派别属性完成，初始化第二页
function ChuShiHua() {
    $("#TuKuang_A_Liliang").html("力量：" + SX_Liliang[0]);
    $("#TuKuang_A_Minjie").html("敏捷：" + SX_Minjie[0]);
    $("#TuKuang_A_Zhili").html("智力：" + SX_Zhili[0]);
    $("#TuKuang_A_Tizhi").html("体质：" + SX_Tizhi[0]);
    $("#TuKuang_A_Pinheng").html("平衡：" + SX_Pinheng[0]);
    $("#TuchuKuang_A_gongjiJC").html(Add_zh(Math.round((mSX_LiLiang.gongjiJC(SX_Liliang[0]) - 1) * 100)) + "%");
    $("#TuchuKuang_A_baojishanghai").html(Add_zh(Math.round((mSX_LiLiang.baojishanghai(SX_Liliang[0]) - 1) * 100)) + "%");
    $("#TuchuKuang_A_shudu").html(SX_Minjie[0]);
    $("#TuchuKuang_A_shanbi").html(SX_Minjie[0]);
    $("#TuchuKuang_A_baojijilv").html(mSX_ZhiLi.baojijilv(SX_Zhili[0]) * 100 + "%");
    $("#TuchuKuang_A_gongjifudongjilv").html(mSX_ZhiLi.gongjifudongjilv(SX_Zhili[0]) * 100 + "%");
    $("#TuchuKuang_A_minzhongxz").html(Add_zh(mSX_ZhiLi.minzhongxz(SX_Zhili[0]) * 100) + "%");
    $("#TuchuKuang_A_qinbao").html(mSX_ZhiLi.qinbao(SX_Zhili[0]));
    $("#TuchuKuang_A_fangyujilv").html(SX_Tizhi[0]);
    $("#TuchuKuang_A_yibanfanshuang").html(mSX_Tizhi.yibanfanshuang(SX_Tizhi[0]) * 100 + "%");
    $("#TuchuKuang_A_fangyufanshuang").html(mSX_Tizhi.fangyufanshuang(SX_Tizhi[0]) * 100 + "%");
    $("#TuchuKuang_A_wendinfantan").html(mSX_Tizhi.wendinfantan(SX_Tizhi[0]) * 100 + "%");
    $("#TuchuKuang_A_wendinzhi").html(mSX_Pinheng.wendinzhi(SX_Pinheng[0]));
    $("#TuchuKuang_A_wendinhuifu").html(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]));

    HPchongzhi();
    //属性关联弹出标记
    window.sxTanChu_A = 0;
    window.sxTanChu_B = 0;
    window.i_AyixuanZS = 1; //已选择招式 计数
    window.AyxZStime = 7.5; //已选招式剩余时间
    window.mymyname = $("#My_name").text();
    window.ButtomPinBi = 0; //按钮暂时屏蔽，0可按，1不可按
    //倒计时
    window.DJS = 15;
    window.DJStime = DJS;
    //第几回合
    window.huihe_i = 1;
    //闪避计数
    window.shanbiA_i = 1;
    window.shanbiB_i = 1;
    $("#huiheclass").html(huihe_i);
    switch (PaiBei_A) {
        case "Taiji":
            $("#TuKuangTitle_paibie").html("太极");
            $("#TuKuangTitle_paibie").css("color", "#003179");
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
            $("#TuKuangTitle_paibie").css("color", "#bb1c33");
            window.i_tq_zhiquan = 1;
            window.i_tq_lrgouquan = 1;
            window.i_tq_sgouquan = 1;
            window.i_tq_zhouji = 1;
            window.i_tq_xizhuang = 1;
            window.i_tq_dengtui = 1;
            window.i_tq_shaotui = 1;
            break;
    }
    AchoiceZS[0].zs_name = "";
    AchoiceZS[1].zs_name = "";
    AchoiceZS[2].zs_name = "";
    AchoiceZS[3].zs_name = "";
    AchoiceZS[4].zs_name = "";
    AchoiceZS[5].zs_name = "";
    shanchuZShou();
    AchoiceZS[0].ATimeH = 0;
    BchoiceZS[0].ATimeH = 0;
    fig_a = 1;
    fig_b = 1;
    fig_xix = 0;
    HpA.pinheng = mSX_Pinheng.wendinzhi(SX_Pinheng[0]);
    HpB.pinheng = mSX_Pinheng.wendinzhi(SX_Pinheng[1]);
    yuanhuanBZ();
    yuanhuanPH();
}

//HP刷新
function HPshuaxin() {
    HpA.getall();
    HpB.getall();
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
    $("#Hp_A_all").html(Math.round(HpA.all/HpA.Max_all * 100) + "%");

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
    $("#Hp_B_all").html(Math.round(HpB.all/HpB.Max_all * 100) + "%");

    $("#progressbar_A_all").progressbar({
        value: Math.round(HpA.all / HpA.Max_all * 100)
    });
    $("#progressbar_A_tou").progressbar({
        value: Math.round(HpA.tou / HpA.Max_tou * 100)
    });
    $("#progressbar_A_xiong").progressbar({
        value: Math.round(HpA.xiong / HpA.Max_xiong * 100)
    });
    $("#progressbar_A_fu").progressbar({
        value: Math.round(HpA.fu / HpA.Max_fu * 100)
    });
    $("#progressbar_A_yaoL").progressbar({
        value: Math.round(HpA.yaoL / HpA.Max_yaoL * 100)
    });
    $("#progressbar_A_yaoR").progressbar({
        value: Math.round(HpA.yaoR / HpA.Max_yaoR * 100)
    });
    $("#progressbar_A_jianL").progressbar({
        value: Math.round(HpA.jianL / HpA.Max_jianL * 100)
    });
    $("#progressbar_A_jianR").progressbar({
        value: Math.round(HpA.jianR / HpA.Max_jianR * 100)
    });
    $("#progressbar_A_shangbiL").progressbar({
        value: Math.round(HpA.shangbiL / HpA.Max_shangbiL * 100)
    });
    $("#progressbar_A_shangbiR").progressbar({
        value: Math.round(HpA.shangbiR / HpA.Max_shangbiR * 100)
    });
    $("#progressbar_A_qianbiL").progressbar({
        value: Math.round(HpA.qianbiL / HpA.Max_qianbiL * 100)
    });
    $("#progressbar_A_qianbiR").progressbar({
        value: Math.round(HpA.qianbiR / HpA.Max_qianbiR * 100)
    });
    $("#progressbar_A_zhouL").progressbar({
        value: Math.round(HpA.zhouL / HpA.Max_zhouL * 100)
    });
    $("#progressbar_A_zhouR").progressbar({
        value: Math.round(HpA.zhouR / HpA.Max_zhouR * 100)
    });
    $("#progressbar_A_shouwanL").progressbar({
        value: Math.round(HpA.shouwanL / HpA.Max_shouwanL * 100)
    });
    $("#progressbar_A_shouwanR").progressbar({
        value: Math.round(HpA.shouwanR / HpA.Max_shouwanR * 100)
    });
    $("#progressbar_A_datuiL").progressbar({
        value: Math.round(HpA.datuiL / HpA.Max_datuiL * 100)
    });
    $("#progressbar_A_datuiR").progressbar({
        value: Math.round(HpA.datuiR / HpA.Max_datuiR * 100)
    });
    $("#progressbar_A_xiaotuiL").progressbar({
        value: Math.round(HpA.xiaotuiL / HpA.Max_xiaotuiL * 100)
    });
    $("#progressbar_A_xiaotuiR").progressbar({
        value: Math.round(HpA.xiaotuiR / HpA.Max_xiaotuiR * 100)
    });
    $("#progressbar_A_xiL").progressbar({
        value: Math.round(HpA.xiL / HpA.Max_xiL * 100)
    });
    $("#progressbar_A_xiR").progressbar({
        value: Math.round(HpA.xiR / HpA.Max_xiR * 100)
    });
    $("#progressbar_A_huaiL").progressbar({
        value: Math.round(HpA.huaiL / HpA.Max_huaiL * 100)
    });
    $("#progressbar_A_huaiR").progressbar({
        value: Math.round(HpA.huaiR / HpA.Max_huaiR * 100)
    });

    $("#progressbar_B_all").progressbar({
        value: Math.round(HpB.all / HpB.Max_all * 100)
    });
    $("#progressbar_B_tou").progressbar({
        value: Math.round(HpB.tou / HpB.Max_tou * 100)
    });
    $("#progressbar_B_xiong").progressbar({
        value: Math.round(HpB.xiong / HpB.Max_xiong * 100)
    });
    $("#progressbar_B_fu").progressbar({
        value: Math.round(HpB.fu / HpB.Max_fu * 100)
    });
    $("#progressbar_B_yaoL").progressbar({
        value: Math.round(HpB.yaoL / HpB.Max_yaoL * 100)
    });
    $("#progressbar_B_yaoR").progressbar({
        value: Math.round(HpB.yaoR / HpB.Max_yaoR * 100)
    });
    $("#progressbar_B_jianL").progressbar({
        value: Math.round(HpB.jianL / HpB.Max_jianL * 100)
    });
    $("#progressbar_B_jianR").progressbar({
        value: Math.round(HpB.jianR / HpB.Max_jianR * 100)
    });
    $("#progressbar_B_shangbiL").progressbar({
        value: Math.round(HpB.shangbiL / HpB.Max_shangbiL * 100)
    });
    $("#progressbar_B_shangbiR").progressbar({
        value: Math.round(HpB.shangbiR / HpB.Max_shangbiR * 100)
    });
    $("#progressbar_B_qianbiL").progressbar({
        value: Math.round(HpB.qianbiL / HpB.Max_qianbiL * 100)
    });
    $("#progressbar_B_qianbiR").progressbar({
        value: Math.round(HpB.qianbiR / HpB.Max_qianbiR * 100)
    });
    $("#progressbar_B_zhouL").progressbar({
        value: Math.round(HpB.zhouL / HpB.Max_zhouL * 100)
    });
    $("#progressbar_B_zhouR").progressbar({
        value: Math.round(HpB.zhouR / HpB.Max_zhouR * 100)
    });
    $("#progressbar_B_shouwanL").progressbar({
        value: Math.round(HpB.shouwanL / HpB.Max_shouwanL * 100)
    });
    $("#progressbar_B_shouwanR").progressbar({
        value: Math.round(HpB.shouwanR / HpB.Max_shouwanR * 100)
    });
    $("#progressbar_B_datuiL").progressbar({
        value: Math.round(HpB.datuiL / HpB.Max_datuiL * 100)
    });
    $("#progressbar_B_datuiR").progressbar({
        value: Math.round(HpB.datuiR / HpB.Max_datuiR * 100)
    });
    $("#progressbar_B_xiaotuiL").progressbar({
        value: Math.round(HpB.xiaotuiL / HpB.Max_xiaotuiL * 100)
    });
    $("#progressbar_B_xiaotuiR").progressbar({
        value: Math.round(HpB.xiaotuiR / HpB.Max_xiaotuiR * 100)
    });
    $("#progressbar_B_xiL").progressbar({
        value: Math.round(HpB.xiL / HpB.Max_xiL * 100)
    });
    $("#progressbar_B_xiR").progressbar({
        value: Math.round(HpB.xiR / HpB.Max_xiR * 100)
    });
    $("#progressbar_B_huaiL").progressbar({
        value: Math.round(HpB.huaiL / HpB.Max_huaiL * 100)
    });
    $("#progressbar_B_huaiR").progressbar({
        value: Math.round(HpB.huaiR / HpB.Max_huaiR * 100)
    });
}

//HP重置
function HPchongzhi() {
    var HpX = Hp.createNew();
    HpA.resetHP();
    HpB.resetHP();
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
    $("#Hp_A_all").html("100%");

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
    $("#Hp_B_all").html("100%");

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
    $("#progressbar_A_all").css("width", 97);

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
    $("#progressbar_B_all").css("width", 97);

    $("#progressbar_A_all").progressbar({
        value: 100
    });
    $("#progressbar_A_tou").progressbar({
        value: 100
    });
    $("#progressbar_A_xiong").progressbar({
        value: 100
    });
    $("#progressbar_A_fu").progressbar({
        value: 100
    });
    $("#progressbar_A_yaoL").progressbar({
        value: 100
    });
    $("#progressbar_A_yaoR").progressbar({
        value: 100
    });
    $("#progressbar_A_jianL").progressbar({
        value: 100
    });
    $("#progressbar_A_jianR").progressbar({
        value: 100
    });
    $("#progressbar_A_shangbiL").progressbar({
        value: 100
    });
    $("#progressbar_A_shangbiR").progressbar({
        value: 100
    });
    $("#progressbar_A_qianbiL").progressbar({
        value: 100
    });
    $("#progressbar_A_qianbiR").progressbar({
        value: 100
    });
    $("#progressbar_A_zhouL").progressbar({
        value: 100
    });
    $("#progressbar_A_zhouR").progressbar({
        value: 100
    });
    $("#progressbar_A_shouwanL").progressbar({
        value: 100
    });
    $("#progressbar_A_shouwanR").progressbar({
        value: 100
    });
    $("#progressbar_A_datuiL").progressbar({
        value: 100
    });
    $("#progressbar_A_datuiR").progressbar({
        value: 100
    });
    $("#progressbar_A_xiaotuiL").progressbar({
        value: 100
    });
    $("#progressbar_A_xiaotuiR").progressbar({
        value: 100
    });
    $("#progressbar_A_xiL").progressbar({
        value: 100
    });
    $("#progressbar_A_xiR").progressbar({
        value: 100
    });
    $("#progressbar_A_huaiL").progressbar({
        value: 100
    });
    $("#progressbar_A_huaiR").progressbar({
        value: 100
    });


    $("#progressbar_B_all").progressbar({
        value: 100
    });
    $("#progressbar_B_tou").progressbar({
        value: 100
    });
    $("#progressbar_B_xiong").progressbar({
        value: 100
    });
    $("#progressbar_B_fu").progressbar({
        value: 100
    });
    $("#progressbar_B_yaoL").progressbar({
        value: 100
    });
    $("#progressbar_B_yaoR").progressbar({
        value: 100
    });
    $("#progressbar_B_jianL").progressbar({
        value: 100
    });
    $("#progressbar_B_jianR").progressbar({
        value: 100
    });
    $("#progressbar_B_shangbiL").progressbar({
        value: 100
    });
    $("#progressbar_B_shangbiR").progressbar({
        value: 100
    });
    $("#progressbar_B_qianbiL").progressbar({
        value: 100
    });
    $("#progressbar_B_qianbiR").progressbar({
        value: 100
    });
    $("#progressbar_B_zhouL").progressbar({
        value: 100
    });
    $("#progressbar_B_zhouR").progressbar({
        value: 100
    });
    $("#progressbar_B_shouwanL").progressbar({
        value: 100
    });
    $("#progressbar_B_shouwanR").progressbar({
        value: 100
    });
    $("#progressbar_B_datuiL").progressbar({
        value: 100
    });
    $("#progressbar_B_datuiR").progressbar({
        value: 100
    });
    $("#progressbar_B_xiaotuiL").progressbar({
        value: 100
    });
    $("#progressbar_B_xiaotuiR").progressbar({
        value: 100
    });
    $("#progressbar_B_xiL").progressbar({
        value: 100
    });
    $("#progressbar_B_xiR").progressbar({
        value: 100
    });
    $("#progressbar_B_huaiL").progressbar({
        value: 100
    });
    $("#progressbar_B_huaiR").progressbar({
        value: 100
    });

}


function bianWuXiaoZS() {
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
    i_AyixuanZS++;
    xuanshisyTime();
    if (i_AyixuanZS > 5) {
        bianWuXiaoZS();
    } else {
        switch (PaiBei_A) {
            case "Taiji":
                if ((tj_panda.ATimeQ + tj_panda.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tj_panda").addClass("huise");
                }
                if ((tj_tuishou.ATimeQ + tj_tuishou.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tj_tuishou").addClass("huise");
                }
                if ((tj_qingna.ATimeQ + tj_qingna.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tj_qingna").addClass("huise");
                }
                if ((tj_shuangfong.ATimeQ + tj_shuangfong.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tj_shuangfong").addClass("huise");
                }
                if ((tj_zhoudicui.ATimeQ + tj_zhoudicui.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tj_zhoudicui").addClass("huise");
                }
                if ((tj_paocui.ATimeQ + tj_paocui.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tj_paocui").addClass("huise");
                }
                if ((tj_yuanyangtui.ATimeQ + tj_yuanyangtui.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tj_yuanyangtui").addClass("huise");
                }
                if ((tj_banshuai.ATimeQ + tj_banshuai.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tj_banshuai").addClass("huise");
                }
                break;
            case "Taiquan":
                if ((tq_zhiquan.ATimeQ + tq_zhiquan.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tq_zhiquan").addClass("huise");
                }
                if ((tq_lrgouquan.ATimeQ + tq_lrgouquan.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tj_tq_lrgouquan").addClass("huise");
                }
                if ((tq_sgouquan.ATimeQ + tq_sgouquan.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tq_sgouquan").addClass("huise");
                }
                if ((tq_zhouji.ATimeQ + tq_zhouji.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tq_zhouji").addClass("huise");
                }
                if ((tq_xizhuang.ATimeQ + tq_xizhuang.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tq_xizhuang").addClass("huise");
                }
                if ((tq_dengtui.ATimeQ + tq_dengtui.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
                    $("#ZSdiv_tq_dengtui").addClass("huise");
                }
                if ((tq_shaotui.ATimeQ + tq_shaotui.ATime).toFixed(1) > AyxZStime.toFixed(1)) {
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
            if ((tj_panda.ATimeQ + tj_panda.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tj_panda").removeClass("huise");
            }
            if ((tj_tuishou.ATimeQ + tj_tuishou.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tj_tuishou").removeClass("huise");
            }
            if ((tj_qingna.ATimeQ + tj_qingna.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tj_qingna").removeClass("huise");
            }
            if ((tj_shuangfong.ATimeQ + tj_shuangfong.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tj_shuangfong").removeClass("huise");
            }
            if ((tj_zhoudicui.ATimeQ + tj_zhoudicui.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tj_zhoudicui").removeClass("huise");
            }
            if ((tj_paocui.ATimeQ + tj_paocui.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tj_paocui").removeClass("huise");
            }
            if ((tj_yuanyangtui.ATimeQ + tj_yuanyangtui.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tj_yuanyangtui").removeClass("huise");
            }
            if ((tj_banshuai.ATimeQ + tj_banshuai.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tj_banshuai").removeClass("huise");
            }
            break;
        case "Taiquan":
            if ((tq_zhiquan.ATimeQ + tq_zhiquan.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tq_zhiquan").removeClass("huise");
            }
            if ((tq_lrgouquan.ATimeQ + tq_lrgouquan.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tq_lrgouquan").removeClass("huise");
            }
            if ((tq_sgouquan.ATimeQ + tq_sgouquan.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tq_sgouquan").removeClass("huise");
            }
            if ((tq_zhouji.ATimeQ + tq_zhouji.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tq_zhouji").removeClass("huise");
            }
            if ((tq_xizhuang.ATimeQ + tq_xizhuang.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tq_xizhuang").removeClass("huise");
            }
            if ((tq_dengtui.ATimeQ + tq_dengtui.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tq_dengtui").removeClass("huise");
            }
            if ((tq_shaotui.ATimeQ + tq_shaotui.ATime).toFixed(1) <= AyxZStime.toFixed(1)) {
                $("#ZSdiv_tq_shaotui").removeClass("huise");
            }
            break;
    }
}

//加回删除招式的时间
function jiahuitime(zsName) {
    AyxZStime = AyxZStime + ZSglIO.ATimeQ(String(zsName), SX_Minjie[0]) + ZSglIO.ATime(String(zsName), SX_Minjie[0]);
}

//剩余时间显示
function xuanshisyTime() {
    $("#xuanZSsyTime").html(AyxZStime.toFixed(1));
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
function Bshuxingchushihua() {
    //0-100
    var a = Math.floor(Math.random() * 101);
    if (a <= 11) {
        SX_Pinheng[1] = 0;
    } else if (a <= 44) {
        SX_Pinheng[1] = 1;
    } else if (a <= 78) {
        SX_Pinheng[1] = 2;
    } else {
        SX_Pinheng[1] = 3;
    }


    do {
        var x1 = Math.floor(Math.random() * 6);
        var x2 = Math.floor(Math.random() * 6);
        SX_Sum[1] = 13 - SX_Pinheng[1] - x1 - x2;
        var x3 = Math.floor(Math.random() * (SX_Sum[1] + 1));
        var x4 = SX_Sum[1] - x3;
    }
    while (x1 > 5 || x2 > 5 || x3 > 5 || x4 > 5);

    var tempArray = [1, 2, 3, 4];
    tempArray.shuffle();
    switch (tempArray[0]) {
        case 1:
            SX_Liliang[1] = x1;
            break;
        case 2:
            SX_Liliang[1] = x2;
            break;
        case 3:
            SX_Liliang[1] = x3;
            break;
        case 4:
            SX_Liliang[1] = x4;
            break;
    }
    switch (tempArray[1]) {
        case 1:
            SX_Minjie[1] = x1;
            break;
        case 2:
            SX_Minjie[1] = x2;
            break;
        case 3:
            SX_Minjie[1] = x3;
            break;
        case 4:
            SX_Minjie[1] = x4;
            break;
    }
    switch (tempArray[2]) {
        case 1:
            SX_Zhili[1] = x1;
            break;
        case 2:
            SX_Zhili[1] = x2;
            break;
        case 3:
            SX_Zhili[1] = x3;
            break;
        case 4:
            SX_Zhili[1] = x4;
            break;
    }
    switch (tempArray[3]) {
        case 1:
            SX_Tizhi[1] = x1;
            break;
        case 2:
            SX_Tizhi[1] = x2;
            break;
        case 3:
            SX_Tizhi[1] = x3;
            break;
        case 4:
            SX_Tizhi[1] = x4;
            break;
    }


}

//B属性刷新
function Shuxingshuaxin_B() {
    shuijiPaibei();

    $("#TuKuang_B_Liliang").html("力量：" + SX_Liliang[1]);
    $("#TuKuang_B_Minjie").html("敏捷：" + SX_Minjie[1]);
    $("#TuKuang_B_Zhili").html("智力：" + SX_Zhili[1]);
    $("#TuKuang_B_Tizhi").html("体质：" + SX_Tizhi[1]);
    $("#TuKuang_B_Pinheng").html("平衡：" + SX_Pinheng[1]);

    $("#TuchuKuang_B_gongjiJC").html(Add_zh(Math.round((mSX_LiLiang.gongjiJC(SX_Liliang[1]) - 1) * 100)) + "%");
    $("#TuchuKuang_B_baojishanghai").html(Add_zh(Math.round((mSX_LiLiang.baojishanghai(SX_Liliang[1]) - 1) * 100)) + "%");
    $("#TuchuKuang_B_shudu").html(SX_Minjie[1]);
    $("#TuchuKuang_B_shanbi").html(SX_Minjie[1]);
    $("#TuchuKuang_B_baojijilv").html(mSX_ZhiLi.baojijilv(SX_Zhili[1]) * 100 + "%");
    $("#TuchuKuang_B_gongjifudongjilv").html(mSX_ZhiLi.gongjifudongjilv(SX_Zhili[1]) * 100 + "%");
    $("#TuchuKuang_B_minzhongxz").html(Add_zh(mSX_ZhiLi.minzhongxz(SX_Zhili[1]) * 100) + "%");
    $("#TuchuKuang_B_qinbao").html(mSX_ZhiLi.qinbao(SX_Zhili[1]));
    $("#TuchuKuang_B_fangyujilv").html(SX_Tizhi[1]);
    $("#TuchuKuang_B_yibanfanshuang").html(mSX_Tizhi.yibanfanshuang(SX_Tizhi[1]) * 100 + "%");
    $("#TuchuKuang_B_fangyufanshuang").html(mSX_Tizhi.fangyufanshuang(SX_Tizhi[1]) * 100 + "%");
    $("#TuchuKuang_B_wendinfantan").html(mSX_Tizhi.wendinfantan(SX_Tizhi[1]) * 100 + "%");
    $("#TuchuKuang_B_wendinzhi").html(mSX_Pinheng.wendinzhi(SX_Pinheng[1]));
    $("#TuchuKuang_B_wendinhuifu").html(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]));
}

//[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
function shuijiPaibei() {
    if (Math.floor(Math.random() * 2)) {
        PaiBei_B = "Taiji";
        $("#TuKuangTitle_He_paibie").html("太极");
        $("#TuKuangTitle_He_paibie").css("color", "#003179");
    } else {
        PaiBei_B = "Taiquan";
        $("#TuKuangTitle_He_paibie").html("泰拳");
        $("#TuKuangTitle_He_paibie").css("color", "#bb1c33");
    }
}

//B随机招式
function BshujiZS() {
    var ByxZStime = 7.5;
    //B招式数据边界
    var i_ByixuanZS = 1;
    switch (PaiBei_B) {
        case "Taiji":
            Btj_panda.ATimeQ = ZSglIO.ATimeQ("tj_panda", SX_Minjie[1]);
            Btj_panda.ATime = ZSglIO.ATime("tj_panda", SX_Minjie[1]);
            Btj_panda.ATimeH = ZSglIO.ATimeH("tj_panda", SX_Minjie[1]);

            Btj_tuishou.ATimeQ = ZSglIO.ATimeQ("tj_tuishou", SX_Minjie[1]);
            Btj_tuishou.ATime = ZSglIO.ATime("tj_tuishou", SX_Minjie[1]);
            Btj_tuishou.ATimeH = ZSglIO.ATimeH("tj_tuishou", SX_Minjie[1]);

            Btj_qingna.ATimeQ = ZSglIO.ATimeQ("tj_qingna", SX_Minjie[1]);
            Btj_qingna.ATime = ZSglIO.ATime("tj_qingna", SX_Minjie[1]);
            Btj_qingna.ATimeH = ZSglIO.ATimeH("tj_qingna", SX_Minjie[1]);

            Btj_shuangfong.ATimeQ = ZSglIO.ATimeQ("tj_shuangfong", SX_Minjie[1]);
            Btj_shuangfong.ATime = ZSglIO.ATime("tj_shuangfong", SX_Minjie[1]);
            Btj_shuangfong.ATimeH = ZSglIO.ATimeH("tj_shuangfong", SX_Minjie[1]);

            Btj_zhoudicui.ATimeQ = ZSglIO.ATimeQ("tj_zhoudicui", SX_Minjie[1]);
            Btj_zhoudicui.ATime = ZSglIO.ATime("tj_zhoudicui", SX_Minjie[1]);
            Btj_zhoudicui.ATimeH = ZSglIO.ATimeH("tj_zhoudicui", SX_Minjie[1]);

            Btj_paocui.ATimeQ = ZSglIO.ATimeQ("tj_paocui", SX_Minjie[1]);
            Btj_paocui.ATime = ZSglIO.ATime("tj_paocui", SX_Minjie[1]);
            Btj_paocui.ATimeH = ZSglIO.ATimeH("tj_paocui", SX_Minjie[1]);

            Btj_yuanyangtui.ATimeQ = ZSglIO.ATimeQ("tj_yuanyangtui", SX_Minjie[1]);
            Btj_yuanyangtui.ATime = ZSglIO.ATime("tj_yuanyangtui", SX_Minjie[1]);
            Btj_yuanyangtui.ATimeH = ZSglIO.ATimeH("tj_yuanyangtui", SX_Minjie[1]);

            Btj_banshuai.ATimeQ = ZSglIO.ATimeQ("tj_banshuai", SX_Minjie[1]);
            Btj_banshuai.ATime = ZSglIO.ATime("tj_banshuai", SX_Minjie[1]);
            Btj_banshuai.ATimeH = ZSglIO.ATimeH("tj_banshuai", SX_Minjie[1]);
            break;

        case "Taiquan":
            Btq_zhiquan.ATimeQ = ZSglIO.ATimeQ("tq_zhiquan", SX_Minjie[1]);
            Btq_zhiquan.ATime = ZSglIO.ATime("tq_zhiquan", SX_Minjie[1]);
            Btq_zhiquan.ATimeH = ZSglIO.ATimeH("tq_zhiquan", SX_Minjie[1]);

            Btq_lrgouquan.ATimeQ = ZSglIO.ATimeQ("tq_lrgouquan", SX_Minjie[1]);
            Btq_lrgouquan.ATime = ZSglIO.ATime("tq_lrgouquan", SX_Minjie[1]);
            Btq_lrgouquan.ATimeH = ZSglIO.ATimeH("tq_lrgouquan", SX_Minjie[1]);

            Btq_sgouquan.ATimeQ = ZSglIO.ATimeQ("tq_sgouquan", SX_Minjie[1]);
            Btq_sgouquan.ATime = ZSglIO.ATime("tq_sgouquan", SX_Minjie[1]);
            Btq_sgouquan.ATimeH = ZSglIO.ATimeH("tq_sgouquan", SX_Minjie[1]);

            Btq_zhouji.ATimeQ = ZSglIO.ATimeQ("tq_zhouji", SX_Minjie[1]);
            Btq_zhouji.ATime = ZSglIO.ATime("tq_zhouji", SX_Minjie[1]);
            Btq_zhouji.ATimeH = ZSglIO.ATimeH("tq_zhouji", SX_Minjie[1]);

            Btq_xizhuang.ATimeQ = ZSglIO.ATimeQ("tq_xizhBuang", SX_Minjie[1]);
            Btq_xizhuang.ATime = ZSglIO.ATime("tq_xizhuang", SX_Minjie[1]);
            Btq_xizhuang.ATimeH = ZSglIO.ATimeH("tq_xizhuang", SX_Minjie[1]);

            Btq_dengtui.ATimeQ = ZSglIO.ATimeQ("tq_dengtui", SX_Minjie[1]);
            Btq_dengtui.ATime = ZSglIO.ATime("tq_dengtui", SX_Minjie[1]);
            Btq_dengtui.ATimeH = ZSglIO.ATimeH("tq_dengtui", SX_Minjie[1]);

            Btq_shaotui.ATimeQ = ZSglIO.ATimeQ("tq_shaotui", SX_Minjie[1]);
            Btq_shaotui.ATime = ZSglIO.ATime("tq_shaotui", SX_Minjie[1]);
            Btq_shaotui.ATimeH = ZSglIO.ATimeH("tq_shaotui", SX_Minjie[1]);

            break;
    }
    do {
        var a = 0; //可选招式数
        var ZSjihe = Array(); //招式集合
        var x = 0; //随机数
        switch (PaiBei_B) {
            case "Taiji":
                if ((Btj_panda.ATimeQ + Btj_panda.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tj_panda";
                    a++;
                }
                if ((Btj_tuishou.ATimeQ + Btj_tuishou.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tj_tuishou";
                    a++;
                }
                if ((Btj_qingna.ATimeQ + Btj_qingna.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tj_qingna";
                    a++;
                }
                if ((Btj_shuangfong.ATimeQ + Btj_shuangfong.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tj_shuangfong";
                    a++;
                }
                if ((Btj_zhoudicui.ATimeQ + Btj_zhoudicui.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tj_zhoudicui";
                    a++;
                }
                if ((Btj_paocui.ATimeQ + Btj_paocui.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tj_paocui";
                    a++;
                }
                if ((Btj_yuanyangtui.ATimeQ + Btj_yuanyangtui.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tj_yuanyangtui";
                    a++;
                }
                if ((Btj_banshuai.ATimeQ + Btj_banshuai.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tj_banshuai";
                    a++;
                }
                break;
            case "Taiquan":
                if ((Btq_zhiquan.ATimeQ + Btq_zhiquan.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tq_zhiquan";
                    a++;
                }
                if ((Btq_lrgouquan.ATimeQ + Btq_lrgouquan.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tq_lrgouquan";
                    a++;
                }
                if ((Btq_sgouquan.ATimeQ + Btq_sgouquan.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tq_sgouquan";
                    a++;
                }
                if ((Btq_zhouji.ATimeQ + Btq_zhouji.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tq_zhouji";
                    a++;
                }
                if ((Btq_xizhuang.ATimeQ + Btq_xizhuang.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tq_xizhuang";
                    a++;
                }
                if ((Btq_dengtui.ATimeQ + Btq_dengtui.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tq_dengtui";
                    a++;
                }
                if ((Btq_shaotui.ATimeQ + Btq_shaotui.ATime).toFixed(1) <= ByxZStime) {
                    ZSjihe[a] = "tq_shaotui";
                    a++;
                }
                break;
        }
        if (a === 0) {
            BchoiceZS[i_ByixuanZS].zs_name = "";
            //BchoiceZS_bj = i_ByixuanZS - 1;
            i_ByixuanZS = 6; //大于循环条件，跳出循环
        } else {
            //[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
            //共8个，数组后序为0-7，a++后a为8，
            x = Math.floor(Math.random() * a);
            BchoiceZS[i_ByixuanZS].zs_name = ZSjihe[x];
            BzsHouxuanBuwei(BchoiceZS[i_ByixuanZS].zs_name, i_ByixuanZS);
        }
        //alert("a=" + a + "，" + "选第[" + x + "]招" + "\n" + BchoiceZS[0].zs_name + "\n" + BchoiceZS[1].zs_name + "\n" + BchoiceZS[2].zs_name + "\n" + BchoiceZS[3].zs_name + "\n" + BchoiceZS[4].zs_name);
        i_ByixuanZS++;
    }
    while (i_ByixuanZS < 6);
    BchoiceZS_bj = i_ByixuanZS - 1;
    //alert(BchoiceZS[0].zs_name + "\n" + BchoiceZS[1].zs_name + "\n" + BchoiceZS[2].zs_name + "\n" + BchoiceZS[3].zs_name + "\n" + BchoiceZS[4].zs_name);
}

//todo B随机左右手与进攻部位
function BzsHouxuanBuwei(zsname, a) {
    var sjs = 0;
    switch (zsname) {
        case "tj_panda":
            //[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
            sjs = Math.floor(Math.random() * 2);
            if (sjs) {
                BchoiceZS[a].zs_frome = "shoul";
            } else {
                BchoiceZS[a].zs_frome = "shour";
            }
            sjs = Math.floor(Math.random() * 4);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "tou";
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "xiong";
            } else if (sjs <= 2) {
                BchoiceZS[a].zs_to = "fu";
            } else if (sjs <= 3) {
                BchoiceZS[a].zs_to = "jian";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            }
            break;
        case "tj_tuishou":
            BchoiceZS[a].zs_frome = "shou";
            sjs = Math.floor(Math.random() * 2);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "xiong";
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "fu";
            }
            break;
        case "tj_qingna":
            sjs = Math.floor(Math.random() * 2);
            if (sjs) {
                BchoiceZS[a].zs_frome = "shoul";
            } else {
                BchoiceZS[a].zs_frome = "shour";
            }
            sjs = Math.floor(Math.random() * 3);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "jian";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "zhou";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 2) {
                BchoiceZS[a].zs_to = "shouwan";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            }
            break;
        case "tj_shuangfong":
            BchoiceZS[a].zs_frome = "shou";
            BchoiceZS[a].zs_to = "tou";
            break;
        case "tj_zhoudicui":
            sjs = Math.floor(Math.random() * 2);
            if (sjs) {
                BchoiceZS[a].zs_frome = "shoul";
            } else {
                BchoiceZS[a].zs_frome = "shour";
            }
            sjs = Math.floor(Math.random() * 4);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "xiong";
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "fu";
            } else if (sjs <= 2) {
                BchoiceZS[a].zs_to = "yao";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 3) {
                BchoiceZS[a].zs_to = "datui";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            }
            break;
        case "tj_paocui":
            BchoiceZS[a].zs_frome = "shou";
            sjs = Math.floor(Math.random() * 3);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "xiong";
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "fu";
            } else if (sjs <= 2) {
                BchoiceZS[a].zs_to = "jian";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            }
            break;
        case "tj_yuanyangtui":
            sjs = Math.floor(Math.random() * 2);
            if (sjs) {
                BchoiceZS[a].zs_frome = "shoul";
            } else {
                BchoiceZS[a].zs_frome = "shour";
            }
            sjs = Math.floor(Math.random() * 3);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "tou";
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "xiong";
            } else if (sjs <= 2) {
                BchoiceZS[a].zs_to = "fu";
            }
            break;
        case "tj_banshuai":
            sjs = Math.floor(Math.random() * 2);
            if (sjs) {
                BchoiceZS[a].zs_frome = "shoul";
            } else {
                BchoiceZS[a].zs_frome = "shour";
            }
            sjs = Math.floor(Math.random() * 4);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "zhou";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "shouwan";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 2) {
                BchoiceZS[a].zs_to = "xi";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 3) {
                BchoiceZS[a].zs_to = "huai";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            }
            break;
        case "tq_zhiquan":
            sjs = Math.floor(Math.random() * 2);
            if (sjs) {
                BchoiceZS[a].zs_frome = "shoul";
            } else {
                BchoiceZS[a].zs_frome = "shour";
            }
            sjs = Math.floor(Math.random() * 4);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "tou";
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "xiong";
            } else if (sjs <= 2) {
                BchoiceZS[a].zs_to = "fu";
            } else if (sjs <= 3) {
                BchoiceZS[a].zs_to = "jian";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            }
            break;
        case "tq_lrgouquan":
            sjs = Math.floor(Math.random() * 2);
            if (sjs) {
                BchoiceZS[a].zs_frome = "shoul";
            } else {
                BchoiceZS[a].zs_frome = "shour";
            }
            sjs = Math.floor(Math.random() * 4);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "tou";
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "yao";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 2) {
                BchoiceZS[a].zs_to = "jian";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 3) {
                BchoiceZS[a].zs_to = "shangbi";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            }
            break;
        case "tq_sgouquan":
            sjs = Math.floor(Math.random() * 2);
            if (sjs) {
                BchoiceZS[a].zs_frome = "shoul";
            } else {
                BchoiceZS[a].zs_frome = "shour";
            }
            sjs = Math.floor(Math.random() * 4);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "tou";
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "xiong";
            } else if (sjs <= 2) {
                BchoiceZS[a].zs_to = "fu";
            } else if (sjs <= 3) {
                BchoiceZS[a].zs_to = "jian";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            }
            break;
        case "tq_zhouji":
            sjs = Math.floor(Math.random() * 2);
            if (sjs) {
                BchoiceZS[a].zs_frome = "shoul";
            } else {
                BchoiceZS[a].zs_frome = "shour";
            }
            sjs = Math.floor(Math.random() * 4);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "tou";
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "xiong";
            } else if (sjs <= 2) {
                BchoiceZS[a].zs_to = "jian";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 3) {
                BchoiceZS[a].zs_to = "shangbi";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            }
            break;
        case "tq_xizhuang":
            sjs = Math.floor(Math.random() * 2);
            if (sjs) {
                BchoiceZS[a].zs_frome = "shoul";
            } else {
                BchoiceZS[a].zs_frome = "shour";
            }
            sjs = Math.floor(Math.random() * 3);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "tou";
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "xiong";
            } else if (sjs <= 2) {
                BchoiceZS[a].zs_to = "fu";
            }
            break;
        case "tq_dengtui":
            sjs = Math.floor(Math.random() * 2);
            if (sjs) {
                BchoiceZS[a].zs_frome = "shoul";
            } else {
                BchoiceZS[a].zs_frome = "shour";
            }
            sjs = Math.floor(Math.random() * 6);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "tou";
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "xiong";
            } else if (sjs <= 2) {
                BchoiceZS[a].zs_to = "fu";
            } else if (sjs <= 3) {
                BchoiceZS[a].zs_to = "datui";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 4) {
                BchoiceZS[a].zs_to = "xiaotui";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 5) {
                BchoiceZS[a].zs_to = "xi";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            }
            break;
        case "tq_shaotui":
            sjs = Math.floor(Math.random() * 2);
            if (sjs) {
                BchoiceZS[a].zs_frome = "shoul";
            } else {
                BchoiceZS[a].zs_frome = "shour";
            }
            sjs = Math.floor(Math.random() * 10);
            if (sjs <= 0) {
                BchoiceZS[a].zs_to = "tou";
            } else if (sjs <= 1) {
                BchoiceZS[a].zs_to = "yao";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 2) {
                BchoiceZS[a].zs_to = "jian";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 3) {
                BchoiceZS[a].zs_to = "shangbi";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 4) {
                BchoiceZS[a].zs_to = "qianbi";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 5) {
                BchoiceZS[a].zs_to = "zhou";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 6) {
                BchoiceZS[a].zs_to = "shouwan";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 7) {
                BchoiceZS[a].zs_to = "datui";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 8) {
                BchoiceZS[a].zs_to = "xiaotui";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 9) {
                BchoiceZS[a].zs_to = "xi";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            } else if (sjs <= 10) {
                BchoiceZS[a].zs_to = "huai";
                sjs = Math.floor(Math.random() * 2);
                if (sjs) {
                    BchoiceZS[a].zs_torl = "l";
                } else {
                    BchoiceZS[a].zs_torl = "r";
                }
            }
            break;
    }
}


//选谁先发招，发啥招。a为A第几招数组序号,b为B第几招数组序号
//todo 选先手实时计算
function ChoiceFirst(a, b) {
    $("#ZDwenbenWK").append("<div class='XS_huiheS_DK'><div class='XS_Sline'></div><div class='XS_yuan_Kong XS_yuan_Kong_l'></div><div class='XS_time'>回合：" + (huihe_i-1) + "，时间：" + (DJStime).toFixed(1) + "&nbsp;s</div><div class='XS_yuan_Kong XS_yuan_Kong_r'></div><div class='XS_Sline XS_Sline_r'></div></div>");
    switch (HadChoice_Who) {
        case "A":
            if (a <= AchoiceZS_bj && b <= BchoiceZS_bj) {
                //判断平衡值
                if (ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + 5 <= HpA.pinheng) {
                    IO_XS_normal("A之前先手，");
                    if (ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + 5 <= HpB.pinheng) {
                        ChoiceFirstN_A(a, b);
                    } else {
                        HadChoice_Who = "A";
                        HadChoice_Aa = a;
                        HpA.subPingheng(-ZSglIO.PinHengXH(AchoiceZS[a].zs_name));
                        HpB.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10);
                        $("#ZDwenbenWK").append("<div>A平衡消耗:" + ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + ",为" + HpA.pinheng + "</div>");
                        $("#ZDwenbenWK").append("<div>B调整平衡中。</div>");
                        $("#ZDwenbenWK").append("<div>B平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10) + ",为" + HpB.pinheng + "</div>");
                    }
                } else {
                    $("#ZDwenbenWK").append("<div class='XS_huiheS_DK'><div class='XS_Sline'></div><div class='XS_yuan_xiao XS_yuan_xiao_l'></div><div class='XS_text'>A调整平衡中，</div><div class='XS_yuan_xiao XS_yuan_xiao_r'></div><div class='XS_Sline XS_Sline_r'></div></div>");
                    //判断平衡值
                    if (ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + 5 <= HpB.pinheng) {
                        HadChoice_Who = "B";
                        HadChoice_Bb = b;
                        HpB.subPingheng(-ZSglIO.PinHengXH(BchoiceZS[b].zs_name));
                        HpA.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10);
                        $("#ZDwenbenWK").append("<div>B平衡消耗:" + ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + ",为" + HpB.pinheng + "</div>");
                        $("#ZDwenbenWK").append("<div>A平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10) + ",为" + HpA.pinheng + "</div>");
                    } else {
                        $("#ZDwenbenWK").append("<div class='XS_huiheS_DK'><div class='XS_Sline'></div><div class='XS_yuan_xiao XS_yuan_xiao_l'></div><div class='XS_text'>B也调整平衡中。</div><div class='XS_yuan_xiao XS_yuan_xiao_r'></div><div class='XS_Sline XS_Sline_r'></div></div>");
                        HadChoice_Who = "";
                    }
                }
            } else if (a > AchoiceZS_bj && b <= BchoiceZS_bj) {
                IO_XS_normal("A之前先手，A招式已用完，");
                if (ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + 5 <= HpB.pinheng) {
                    HadChoice_Who = "B";
                    HadChoice_Bb = b;
                    HpB.subPingheng(-ZSglIO.PinHengXH(BchoiceZS[b].zs_name));
                    HpA.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10);
                    $("#ZDwenbenWK").append("<div>B平衡消耗:" + ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + ",为" + HpB.pinheng + "</div>");
                    $("#ZDwenbenWK").append("<div>A平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10) + ",为" + HpA.pinheng + "</div>");
                } else {
                    $("#ZDwenbenWK").append("<div class='XS_huiheS_DK'><div class='XS_Sline'></div><div class='XS_yuan_xiao XS_yuan_xiao_l'></div><div class='XS_text'>B调整平衡中。</div><div class='XS_yuan_xiao XS_yuan_xiao_r'></div><div class='XS_Sline XS_Sline_r'></div></div>");
                    HadChoice_Who = "";
                }
            } else if (a <= AchoiceZS_bj && b > BchoiceZS_bj) {
                IO_XS_normal("A之前先手，B招式已用完，");
                if (ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + 5 <= HpA.pinheng) {
                    HadChoice_Who = "A";
                    HadChoice_Aa = a;
                    HpA.subPingheng(-ZSglIO.PinHengXH(AchoiceZS[a].zs_name));
                    HpB.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10);
                    $("#ZDwenbenWK").append("<div>A平衡消耗:" + ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + ",为" + HpA.pinheng + "</div>");
                    $("#ZDwenbenWK").append("<div>B平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10) + ",为" + HpB.pinheng + "</div>");
                } else {
                    $("#ZDwenbenWK").append("<div class='XS_huiheS_DK'><div class='XS_Sline'></div><div class='XS_yuan_xiao XS_yuan_xiao_l'></div><div class='XS_text'>A调整平衡中。</div><div class='XS_yuan_xiao XS_yuan_xiao_r'></div><div class='XS_Sline XS_Sline_r'></div></div>");
                    HadChoice_Who = "";
                }
            }
            break;
        case "B":
            if (a <= AchoiceZS_bj && b <= BchoiceZS_bj) {
                if (ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + 5 <= HpB.pinheng) {
                    IO_XS_normal("B之前先手，");
                    if (ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + 5 <= HpA.pinheng) {
                        ChoiceFirstN_B(a, b);
                    } else {
                        HadChoice_Who = "B";
                        HadChoice_Bb = b;
                        HpB.subPingheng(-ZSglIO.PinHengXH(BchoiceZS[b].zs_name));
                        HpA.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10);
                        $("#ZDwenbenWK").append("<div>B平衡消耗:" + ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + ",为" + HpB.pinheng + "</div>");
                        $("#ZDwenbenWK").append("<div>A调整平衡中。</div>");
                        $("#ZDwenbenWK").append("<div>A平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10) + ",为" + HpA.pinheng + "</div>");
                    }
                } else {
                    $("#ZDwenbenWK").append("<div>B调整平衡中。</div>");
                    //判断平衡值
                    if (ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + 5 <= HpA.pinheng) {
                        HadChoice_Who = "A";
                        HadChoice_Aa = a;
                        HpA.subPingheng(-ZSglIO.PinHengXH(AchoiceZS[a].zs_name));
                        HpB.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10);
                        $("#ZDwenbenWK").append("<div>A平衡消耗:" + ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + ",为" + HpA.pinheng + "</div>");
                        $("#ZDwenbenWK").append("<div>B平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10) + ",为" + HpB.pinheng + "</div>");
                    } else {
                        $("#ZDwenbenWK").append("<div>A也调整平衡中。</div>");
                        HadChoice_Who = "";
                    }
                }
            } else if (a > AchoiceZS_bj && b <= BchoiceZS_bj) {
                IO_XS_normal("B之前先手，A招式已用完，");
                if (ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + 5 <= HpB.pinheng) {
                    HadChoice_Who = "B";
                    HadChoice_Bb = b;
                    HpB.subPingheng(-ZSglIO.PinHengXH(BchoiceZS[b].zs_name));
                    HpA.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10);
                    $("#ZDwenbenWK").append("<div>B平衡消耗:" + ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + ",为" + HpB.pinheng + "</div>");
                    $("#ZDwenbenWK").append("<div>A平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10) + ",为" + HpA.pinheng + "</div>");
                } else {
                    $("#ZDwenbenWK").append("<div>B调整平衡中。</div>");
                    HadChoice_Who = "";
                }
            } else if (a <= AchoiceZS_bj && b > BchoiceZS_bj) {
                IO_XS_normal("B之前先手，B招式已用完，");
                if (ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + 5 <= HpA.pinheng) {
                    HadChoice_Who = "A";
                    HadChoice_Aa = a;
                    HpA.subPingheng(-ZSglIO.PinHengXH(AchoiceZS[a].zs_name));
                    HpB.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10);
                    $("#ZDwenbenWK").append("<div>A平衡消耗:" + ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + ",为" + HpA.pinheng + "</div>");
                    $("#ZDwenbenWK").append("<div>B平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10) + ",为" + HpB.pinheng + "</div>");
                } else {
                    $("#ZDwenbenWK").append("<div>A调整平衡中。</div>");
                    HadChoice_Who = "";
                }
            }
            break;
        case "":
            if (a <= AchoiceZS_bj && b <= BchoiceZS_bj) {
                IO_XS_normal("之前无先手，");
                if (ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + 5 <= HpA.pinheng && ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + 5 <= HpB.pinheng) {
                    // $("#ZDwenbenWK").append("<div>" + "A前摇为" + ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]).toFixed(1) + "。B前摇为" + ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1]).toFixed(1) + "</div>");
                    $("#ZDwenbenWK").append("<div class='XS_huiheS_DK'><div class='XS_Sline'></div><div class='XS_yuan_xiao XS_yuan_xiao_l'></div><div class='XS_qiamhouyao_DK'><div class='XS_qiamhouyao_XK0 XS_qiamhouyao_XK01'>后摇:</div><div class='XS_qiamhouyao_XK1 XS_qiamhouyao_XK02'></div><div class='XS_qiamhouyao_XK0 XS_qiamhouyao_XK03'>前摇:</div><div class='XS_qiamhouyao_XK1 XS_qiamhouyao_XK04'>" + ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]).toFixed(1) + "</div><div class='XS_qiamhouyao_XK00'>=</div><div class='XS_qiamhouyao_XK00'>" + ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]).toFixed(1) + "</div><div class='XS_qiamhouyao_XK00'>:</div><div class='XS_qiamhouyao_XK00'>" + ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1]).toFixed(1) + "</div><div class='XS_qiamhouyao_XK00'>=</div><div class='XS_qiamhouyao_XK0 XS_qiamhouyao_XK01'>后摇:</div><div class='XS_qiamhouyao_XK1 XS_qiamhouyao_XK02'></div><div class='XS_qiamhouyao_XK0 XS_qiamhouyao_XK03'>前摇:</div><div class='XS_qiamhouyao_XK1 XS_qiamhouyao_XK04'>" + ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1]).toFixed(1) + "</div></div><div class='XS_yuan_xiao XS_yuan_xiao_r'></div><div class='XS_Sline XS_Sline_r'></div></div>");
                    if (ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]) > ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1])) {
                        HadChoice_Who = "B";
                        HadChoice_Bb = b;
                        HpB.subPingheng(-ZSglIO.PinHengXH(BchoiceZS[b].zs_name));
                        HpA.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10);
                        $("#ZDwenbenWK").append("<div>B平衡消耗:" + ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + ",为" + HpB.pinheng + "</div>");
                        $("#ZDwenbenWK").append("<div>A平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10) + ",为" + HpA.pinheng + "</div>");
                    } else if (ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]) < ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1])) {
                        HadChoice_Who = "A";
                        HadChoice_Aa = a;
                        HpA.subPingheng(-ZSglIO.PinHengXH(AchoiceZS[a].zs_name));
                        HpB.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10);
                        $("#ZDwenbenWK").append("<div>A平衡消耗:" + ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + ",为" + HpA.pinheng + "</div>");
                        $("#ZDwenbenWK").append("<div>B平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10) + ",为" + HpB.pinheng + "</div>");
                    } else {
                        if (HadChoice_Who === "A") {
                            HadChoice_Who = "B";
                            HadChoice_Bb = b;
                            HpB.subPingheng(-ZSglIO.PinHengXH(BchoiceZS[b].zs_name));
                            HpA.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10);
                            $("#ZDwenbenWK").append("<div>B平衡消耗:" + ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + ",为" + HpB.pinheng + "</div>");
                            $("#ZDwenbenWK").append("<div>A平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10) + ",为" + HpA.pinheng + "</div>");
                        } else {
                            HadChoice_Who = "A";
                            HadChoice_Aa = a;
                            HpA.subPingheng(-ZSglIO.PinHengXH(AchoiceZS[a].zs_name));
                            HpB.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10);
                            $("#ZDwenbenWK").append("<div>A平衡消耗:" + ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + ",为" + HpA.pinheng + "</div>");
                            $("#ZDwenbenWK").append("<div>B平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10) + ",为" + HpB.pinheng + "</div>");
                        }
                    }
                } else if (ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + 5 > HpA.pinheng && ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + 5 <= HpB.pinheng) {
                    HadChoice_Who = "B";
                    HadChoice_Bb = b;
                    HpB.subPingheng(-ZSglIO.PinHengXH(BchoiceZS[b].zs_name));
                    HpA.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10);
                    $("#ZDwenbenWK").append("<div>B平衡消耗:" + ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + ",为" + HpB.pinheng + "</div>");
                    $("#ZDwenbenWK").append("<div>A平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10) + ",为" + HpA.pinheng + "</div>");
                } else if (ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + 5 <= HpA.pinheng && ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + 5 > HpB.pinheng) {
                    HadChoice_Who = "A";
                    HadChoice_Aa = a;
                    HpA.subPingheng(-ZSglIO.PinHengXH(AchoiceZS[a].zs_name));
                    HpB.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10);
                    $("#ZDwenbenWK").append("<div>A平衡消耗:" + ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + ",为" + HpA.pinheng + "</div>");
                    $("#ZDwenbenWK").append("<div>B平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10) + ",为" + HpB.pinheng + "</div>");
                } else {
                    IO_XS_normal("双方调整平衡中。");
                }
            } else if (a > AchoiceZS_bj && b <= BchoiceZS_bj) {
                IO_XS_normal("之前无先手，A不出招，");
                if (ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + 5 <= HpB.pinheng) {
                    HadChoice_Who = "B";
                    HadChoice_Bb = b;
                    HpB.subPingheng(-ZSglIO.PinHengXH(BchoiceZS[b].zs_name));
                    HpA.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10);
                    $("#ZDwenbenWK").append("<div>B平衡消耗:" + ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + ",为" + HpB.pinheng + "</div>");
                    $("#ZDwenbenWK").append("<div>A平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10) + ",为" + HpA.pinheng + "</div>");
                } else {
                    $("#ZDwenbenWK").append("<div>B调整平衡中。</div>");
                }
            } else if (a <= AchoiceZS_bj && b > BchoiceZS_bj) {
                IO_XS_normal("之前无先手，B不出招，");
                if (ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + 5 <= HpA.pinheng) {
                    HadChoice_Who = "A";
                    HadChoice_Aa = a;
                    HpA.subPingheng(-ZSglIO.PinHengXH(AchoiceZS[a].zs_name));
                    HpB.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10);
                    $("#ZDwenbenWK").append("<div>A平衡消耗:" + ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + ",为" + HpA.pinheng + "</div>");
                    $("#ZDwenbenWK").append("<div>B平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10) + ",为" + HpB.pinheng + "</div>");
                } else {
                    $("#ZDwenbenWK").append("<div>A调整平衡中。</div>");
                }
            }
            break;
    }
}

//重复模块
function ChoiceFirstN_A(a, b) {
    $("#ZDwenbenWK").append("<div class='XS_huiheS_DK'><div class='XS_Sline'></div><div class='XS_yuan_xiao XS_yuan_xiao_l'></div><div class='XS_qiamhouyao_DK'><div class='XS_qiamhouyao_XK0 XS_qiamhouyao_XK01'>后摇:</div><div class='XS_qiamhouyao_XK1 XS_qiamhouyao_XK02'>" + ZSglIO.ATimeH(String(AchoiceZS[a - 1].zs_name), SX_Minjie[0]).toFixed(1) + "</div><div class='XS_qiamhouyao_XK0 XS_qiamhouyao_XK03'>前摇:</div><div class='XS_qiamhouyao_XK1 XS_qiamhouyao_XK04'>" + ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]).toFixed(1) + "</div><div class='XS_qiamhouyao_XK00'>=</div><div class='XS_qiamhouyao_XK00'>" + (ZSglIO.ATimeH(String(AchoiceZS[a - 1].zs_name), SX_Minjie[0]) + ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0])).toFixed(1) + "</div><div class='XS_qiamhouyao_XK00'>:</div><div class='XS_qiamhouyao_XK00'>" + ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1]).toFixed(1) + "</div><div class='XS_qiamhouyao_XK00'>=</div><div class='XS_qiamhouyao_XK0 XS_qiamhouyao_XK01'>后摇:</div><div class='XS_qiamhouyao_XK1 XS_qiamhouyao_XK02'></div><div class='XS_qiamhouyao_XK0 XS_qiamhouyao_XK03'>前摇:</div><div class='XS_qiamhouyao_XK1 XS_qiamhouyao_XK04'>" + ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1]).toFixed(1) + "</div></div><div class='XS_yuan_xiao XS_yuan_xiao_r'></div><div class='XS_Sline XS_Sline_r'></div></div>");
    //$("#ZDwenbenWK").append("<div>" + "A后摇前摇分别为" + ZSglIO.ATimeH(String(AchoiceZS[a - 1].zs_name), SX_Minjie[0]).toFixed(1) + "，" + ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]).toFixed(1) + "。B前摇为" + ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1]).toFixed(1) + "</div>");
    if (ZSglIO.ATimeH(String(AchoiceZS[a - 1].zs_name), SX_Minjie[0]) + ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]) > ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1])) {
        HadChoice_Who = "B";
        HadChoice_Bb = b;
        HpB.subPingheng(-ZSglIO.PinHengXH(BchoiceZS[b].zs_name));
        HpA.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10);
        $("#ZDwenbenWK").append("<div>B平衡消耗:" + ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + ",为" + HpB.pinheng + "</div>");
        $("#ZDwenbenWK").append("<div>A平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10) + ",为" + HpA.pinheng + "</div>");
    } else if (ZSglIO.ATimeH(String(AchoiceZS[a - 1].zs_name), SX_Minjie[0]) + ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]) < ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1])) {
        HadChoice_Who = "A";
        HadChoice_Aa = a;
        HpA.subPingheng(-ZSglIO.PinHengXH(AchoiceZS[a].zs_name));
        HpB.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10);
        $("#ZDwenbenWK").append("<div>A平衡消耗:" + ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + ",为" + HpA.pinheng + "</div>");
        $("#ZDwenbenWK").append("<div>B平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10) + ",为" + HpB.pinheng + "</div>");
    } else {
        if (HadChoice_Who === "A") {
            HadChoice_Who = "B";
            HadChoice_Bb = b;
            HpB.subPingheng(-ZSglIO.PinHengXH(BchoiceZS[b].zs_name));
            HpA.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10);
            $("#ZDwenbenWK").append("<div>B平衡消耗:" + ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + ",为" + HpB.pinheng + "</div>");
            $("#ZDwenbenWK").append("<div>A平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10) + ",为" + HpA.pinheng + "</div>");
        } else {
            HadChoice_Who = "A";
            HadChoice_Aa = a;
            HpA.subPingheng(-ZSglIO.PinHengXH(AchoiceZS[a].zs_name));
            HpB.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10);
            $("#ZDwenbenWK").append("<div>A平衡消耗:" + ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + ",为" + HpA.pinheng + "</div>");
            $("#ZDwenbenWK").append("<div>B平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10) + ",为" + HpB.pinheng + "</div>");
        }
    }
}

function ChoiceFirstN_B(a, b) {
    $("#ZDwenbenWK").append("<div class='XS_huiheS_DK'><div class='XS_Sline'></div><div class='XS_yuan_xiao XS_yuan_xiao_l'></div><div class='XS_qiamhouyao_DK'><div class='XS_qiamhouyao_XK0 XS_qiamhouyao_XK01'>后摇:</div><div class='XS_qiamhouyao_XK1 XS_qiamhouyao_XK02'></div><div class='XS_qiamhouyao_XK0 XS_qiamhouyao_XK03'>前摇:</div><div class='XS_qiamhouyao_XK1 XS_qiamhouyao_XK04'>" + ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]).toFixed(1) + "</div><div class='XS_qiamhouyao_XK00'>=</div><div class='XS_qiamhouyao_XK00'>" + (ZSglIO.ATimeH(String(BchoiceZS[b - 1].zs_name), SX_Minjie[1]) + ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1])).toFixed(1) + "</div><div class='XS_qiamhouyao_XK00'>:</div><div class='XS_qiamhouyao_XK00'>" + ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]).toFixed(1) + "</div><div class='XS_qiamhouyao_XK00'>=</div><div class='XS_qiamhouyao_XK0 XS_qiamhouyao_XK01'>后摇:</div><div class='XS_qiamhouyao_XK1 XS_qiamhouyao_XK02'>" + ZSglIO.ATimeH(String(BchoiceZS[b - 1].zs_name), SX_Minjie[1]).toFixed(1) + "</div><div class='XS_qiamhouyao_XK0 XS_qiamhouyao_XK03'>前摇:</div><div class='XS_qiamhouyao_XK1 XS_qiamhouyao_XK04'>" + ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1]).toFixed(1) + "</div></div><div class='XS_yuan_xiao XS_yuan_xiao_r'></div><div class='XS_Sline XS_Sline_r'></div></div>");
    //$("#ZDwenbenWK").append("<div>" + "B后摇前摇分别为" + ZSglIO.ATimeH(String(BchoiceZS[b - 1].zs_name), SX_Minjie[1]).toFixed(1) + "，" + ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1]).toFixed(1) + "。A前摇为" + ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]).toFixed(1) + "</div>");
    if (ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]) > ZSglIO.ATimeH(String(BchoiceZS[b - 1].zs_name), SX_Minjie[1]) + ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1])) {
        HadChoice_Who = "B";
        HadChoice_Bb = b;
        HpB.subPingheng(-ZSglIO.PinHengXH(BchoiceZS[b].zs_name));
        HpA.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10);
        $("#ZDwenbenWK").append("<div>B平衡消耗:" + ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + ",为" + HpB.pinheng + "</div>");
        $("#ZDwenbenWK").append("<div>A平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10) + ",为" + HpA.pinheng + "</div>");
    } else if (ZSglIO.ATimeQ(String(AchoiceZS[a].zs_name), SX_Minjie[0]) < ZSglIO.ATimeH(String(BchoiceZS[b - 1].zs_name), SX_Minjie[1]) + ZSglIO.ATimeQ(String(BchoiceZS[b].zs_name), SX_Minjie[1])) {
        HadChoice_Who = "A";
        HadChoice_Aa = a;
        HpA.subPingheng(-ZSglIO.PinHengXH(AchoiceZS[a].zs_name));
        HpB.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10);
        $("#ZDwenbenWK").append("<div>A平衡消耗:" + ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + ",为" + HpA.pinheng + "</div>");
        $("#ZDwenbenWK").append("<div>B平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10) + ",为" + HpB.pinheng + "</div>");
    } else {
        if (HadChoice_Who === "A") {
            HadChoice_Who = "B";
            HadChoice_Bb = b;
            HpB.subPingheng(-ZSglIO.PinHengXH(BchoiceZS[b].zs_name));
            HpA.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10);
            $("#ZDwenbenWK").append("<div>B平衡消耗:" + ZSglIO.PinHengXH(BchoiceZS[b].zs_name) + ",为" + HpB.pinheng + "</div>");
            $("#ZDwenbenWK").append("<div>A平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) * ZSglIO.ATimeQ(BchoiceZS[b].zs_name, SX_Minjie[1]) * 10) + ",为" + HpA.pinheng + "</div>");
        } else {
            HadChoice_Who = "A";
            HadChoice_Aa = a;
            HpA.subPingheng(-ZSglIO.PinHengXH(AchoiceZS[a].zs_name));
            HpB.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10);
            $("#ZDwenbenWK").append("<div>A平衡消耗:" + ZSglIO.PinHengXH(AchoiceZS[a].zs_name) + ",为" + HpA.pinheng + "</div>");
            $("#ZDwenbenWK").append("<div>B平衡回复:" + Math.round(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) * ZSglIO.ATimeQ(AchoiceZS[a].zs_name, SX_Minjie[0]) * 10) + ",为" + HpB.pinheng + "</div>");
        }
    }
}


//战斗总框架
//todo fighting
function fighting() {
    if (DJStime > 0) {
        if (fig_xix < 1) {
            ChoiceFirst(fig_a, fig_b);
            if (HadChoice_Who === "A") {
                if (fig_a <= AchoiceZS_bj) {
                    fig_a++;
                } else {
                    AchoiceZS[HadChoice_Aa].zs_name = "";
                    AchoiceZS[HadChoice_Aa].ATimeH = 99;
                }
                fighting_n();
            } else if (HadChoice_Who === "B") {
                if (fig_b <= BchoiceZS_bj) {
                    fig_b++;
                } else {
                    BchoiceZS[HadChoice_Bb].zs_name = "";
                    BchoiceZS[HadChoice_Bb].ATimeH = 99;
                }
                fighting_n();
            } else {
                DJStime = DJStime - 0.1;
                HpA.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[0]));
                HpB.subPingheng(mSX_Pinheng.wendinhuifu(SX_Pinheng[1]));
                $("#ZDwenbenWK").append("<div>双方对峙中。</div>");
                $("#ZDwenbenWK").append("<div>A平衡回复:" + mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) + ",为" + HpA.pinheng + "</div>");
                $("#ZDwenbenWK").append("<div>B平衡回复:" + mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) + ",为" + HpB.pinheng + "</div>");
            }
            if ((fig_a > AchoiceZS_bj) && (fig_b > BchoiceZS_bj)) {
                fig_xix = 1;
            }
            $("#ZDwenbenWK").append("<div><hr/></div>");
        } else {
            $("#ZDwenbenWK").append("<div>" + "回合结束" + "</div>");
            $("#ZDwenbenWK").append("<div><hr/></div>");
            clearInterval(window.fitXH);
            yuanbuttomCZ();
        }
    } else {
        $("#ZDwenbenWK").append("<div>时间到，回合结束</div><div><hr/></div>");
        clearInterval(window.fitXH);
        yuanbuttomCZ();
    }
    yuanhuanPHsx();
    HPshuaxin();
    $("#ds_time").html((DJStime).toFixed(1));
    $("#ZDwenbenWK").scrollTop($("#ZDwenbenWK")[0].scrollHeight);
    // alert(HpA.pinheng + ","+HpB.pinheng);
}

function fighting_n() {
    gongjishanghai();
    if (shanbijisuan()) {
        //闪避失败
        if (HadChoice_Who === "A") {
            shanbiB_i = 1;
        } else if (HadChoice_Who === "B") {
            shanbiA_i = 1;
        }
        if (fangyujisuan()) {
            //防御失败
            if (HadChoice_Who === "A") {
                switch (AchoiceZS[HadChoice_Aa].zs_to) {
                    case "tou":
                        if (HpB.subHP_tou(attW_Q + attN_Q)) {

                        }
                        break;
                    case "xiong":
                        if (HpB.subHP_xiong(attW_Q + attN_Q)) {

                        }
                        break;
                    case "fu":
                        if (HpB.subHP_fu(attW_Q + attN_Q)) {

                        }
                        break;
                    case "yao":
                        switch (String(AchoiceZS[HadChoice_Aa].zs_torl)) {
                            case "l":
                                if (HpB.subHP_yaoL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpB.subHP_yaoR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd501");
                        }
                        break;
                    case "jian":
                        switch (String(AchoiceZS[HadChoice_Aa].zs_torl)) {
                            case "l":
                                if (HpB.subHP_jianL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpB.subHP_jianR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd502");
                        }
                        break;
                    case "shangbi":
                        switch (String(AchoiceZS[HadChoice_Aa].zs_torl)) {
                            case "l":
                                if (HpB.subHP_shangbiL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpB.subHP_shangbiR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd503");
                        }
                        break;
                    case "zhou":
                        switch (String(AchoiceZS[HadChoice_Aa].zs_torl)) {
                            case "l":
                                if (HpB.subHP_zhouL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpB.subHP_zhouR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd504");
                        }
                        break;
                    case "qianbi":
                        switch (String(AchoiceZS[HadChoice_Aa].zs_torl)) {
                            case "l":
                                if (HpB.subHP_qianbiL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpB.subHP_qianbiR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd505");
                        }
                        break;
                    case "shouwan":
                        switch (String(AchoiceZS[HadChoice_Aa].zs_torl)) {
                            case "l":
                                if (HpB.subHP_shouwanL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpB.subHP_shouwanR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd506");
                        }
                        break;
                    case "datui":
                        switch (String(AchoiceZS[HadChoice_Aa].zs_torl)) {
                            case "l":
                                if (HpB.subHP_datuiL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpB.subHP_datuiR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd507");
                        }
                        break;
                    case "xi":
                        switch (String(AchoiceZS[HadChoice_Aa].zs_torl)) {
                            case "l":
                                if (HpB.subHP_xiL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpB.subHP_xir(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd508");
                        }
                        break;
                    case "xiaotui":
                        switch (String(AchoiceZS[HadChoice_Aa].zs_torl)) {
                            case "l":
                                if (HpB.subHP_xiaotuiL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpB.subHP_xiaotuiR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd509");
                        }
                        break;
                    case "huai":
                        switch (String(AchoiceZS[HadChoice_Aa].zs_torl)) {
                            case "l":
                                if (HpB.subHP_huaiL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpB.subHP_huaiR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd510");
                        }
                        break;
                    default:
                        alert("5858xtgr6");
                }
                HpB.pinheng = HpB.pinheng - PinHengAtt_Q;
            } else if (HadChoice_Who === "B") {
                switch (BchoiceZS[HadChoice_Bb].zs_to) {
                    case "tou":
                        if (HpA.subHP_tou(attW_Q + attN_Q)) {

                        }
                        break;
                    case "xiong":
                        if (HpA.subHP_xiong(attW_Q + attN_Q)) {

                        }
                        break;
                    case "fu":
                        if (HpA.subHP_fu(attW_Q + attN_Q)) {

                        }
                        break;
                    case "yao":
                        switch (String(BchoiceZS[HadChoice_Bb].zs_torl)) {
                            case "l":
                                if (HpA.subHP_yaoL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpA.subHP_yaoR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd601");
                        }
                        break;
                    case "jian":
                        switch (String(BchoiceZS[HadChoice_Bb].zs_torl)) {
                            case "l":
                                if (HpA.subHP_jianL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpA.subHP_jianR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd602");
                        }
                        break;
                    case "shangbi":
                        switch (String(BchoiceZS[HadChoice_Bb].zs_torl)) {
                            case "l":
                                if (HpA.subHP_shangbiL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpA.subHP_shangbiR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd603");
                        }
                        break;
                    case "zhou":
                        switch (String(BchoiceZS[HadChoice_Bb].zs_torl)) {
                            case "l":
                                if (HpA.subHP_zhouL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpA.subHP_zhouR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd604");
                        }
                        break;
                    case "qianbi":
                        switch (String(BchoiceZS[HadChoice_Bb].zs_torl)) {
                            case "l":
                                if (HpA.subHP_qianbiL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpA.subHP_qianbiR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd605");
                        }
                        break;
                    case "shouwan":
                        switch (String(BchoiceZS[HadChoice_Bb].zs_torl)) {
                            case "l":
                                if (HpA.subHP_shouwanL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpA.subHP_shouwanR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd606");
                        }
                        break;
                    case "datui":
                        switch (String(BchoiceZS[HadChoice_Bb].zs_torl)) {
                            case "l":
                                if (HpA.subHP_datuiL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpA.subHP_datuiR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd607");
                        }
                        break;
                    case "xi":
                        switch (String(BchoiceZS[HadChoice_Bb].zs_torl)) {
                            case "l":
                                if (HpA.subHP_xiL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpA.subHP_xiR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd608");
                        }
                        break;
                    case "xiaotui":
                        switch (String(BchoiceZS[HadChoice_Bb].zs_torl)) {
                            case "l":
                                if (HpA.subHP_xiaotuiL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpA.subHP_xiaotuiR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd609");
                        }
                        break;
                    case "huai":
                        switch (String(BchoiceZS[HadChoice_Bb].zs_torl)) {
                            case "l":
                                if (HpA.subHP_huaiL(attW_Q + attN_Q)) {

                                }
                                break;
                            case "r":
                                if (HpA.subHP_huaiR(attW_Q + attN_Q)) {

                                }
                                break;
                            default:
                                alert("357fvd610");
                        }
                        break;
                    default:
                        alert("5858xtgr6");
                }
                HpA.pinheng = HpA.pinheng - PinHengAtt_Q;
            }
        }
    }
}


//todo 攻击方伤害
function gongjishanghai() {
    //输出的伤害
    window.attW_Q = 0;
    window.attN_Q = 0;
    window.PinHengAtt_Q = 0;
    if (HadChoice_Who === "A") {
        $("#ZDwenbenWK").append("<div class='SCd_A'>" + "A用" + AchoiceZS[HadChoice_Aa].zs_frome + "使出了【" + AchoiceZS[HadChoice_Aa].zs_CNname() + "】" + "</div>");
        //判断暴击
        if (Math.floor(Math.random() * 100 + 1) < mSX_ZhiLi.baojijilv(SX_Zhili[0]) * 100) {
            attW_Q = Math.round(ZSglIO.AttW(String(AchoiceZS[HadChoice_Aa].zs_name), SX_Liliang[0], SX_Zhili[0]) * mSX_LiLiang.baojishanghai(SX_Liliang[0]));
            attN_Q = Math.round(ZSglIO.AttN(String(AchoiceZS[HadChoice_Aa].zs_name), SX_Liliang[0], SX_Zhili[0]) * mSX_LiLiang.baojishanghai(SX_Liliang[0]));
            PinHengAtt_Q = Math.round(ZSglIO.PinHengAtt(String(AchoiceZS[HadChoice_Aa].zs_name), SX_Liliang[0], SX_Zhili[0]) * mSX_LiLiang.baojishanghai(SX_Liliang[0]));
            $("#ZDwenbenWK").append("<div class='SCd_A'>造成暴击" + "(AttW:" + attW_Q + ",AttN:" + attN_Q + ",PinHengAtt:" + PinHengAtt_Q + ")" + "，击向B的" + AchoiceZS[HadChoice_Aa].zs_torl + AchoiceZS[HadChoice_Aa].zs_to + "</div>");
        } else {
            attW_Q = Math.round(ZSglIO.AttW(String(AchoiceZS[HadChoice_Aa].zs_name), SX_Liliang[0], SX_Zhili[0]));
            attN_Q = Math.round(ZSglIO.AttN(String(AchoiceZS[HadChoice_Aa].zs_name), SX_Liliang[0], SX_Zhili[0]));
            PinHengAtt_Q = Math.round(ZSglIO.PinHengAtt(String(AchoiceZS[HadChoice_Aa].zs_name), SX_Liliang[0], SX_Zhili[0]));
            $("#ZDwenbenWK").append("<div class='SCd_A'>" + "(AttW:" + attW_Q + ",AttN:" + attN_Q + ",PinHengAtt:" + PinHengAtt_Q + ")" + "，击向B的" + AchoiceZS[HadChoice_Aa].zs_torl + AchoiceZS[HadChoice_Aa].zs_to + "</div>");
        }
        DJStime = DJStime - (ZSglIO.ATimeQ(AchoiceZS[HadChoice_Aa].zs_name, SX_Minjie[0])).toFixed(1) - (ZSglIO.ATime(AchoiceZS[HadChoice_Aa].zs_name, SX_Minjie[0])).toFixed(1);
    } else if (HadChoice_Who === "B") {
        $("#ZDwenbenWK").append("<div class='SCd_B'>" + "B用" + BchoiceZS[HadChoice_Bb].zs_frome + "使出了【" + BchoiceZS[HadChoice_Bb].zs_CNname() + "】" + "</div>");
        //判断暴击
        if (Math.floor(Math.random() * 100 + 1) < mSX_ZhiLi.baojijilv(SX_Zhili[1]) * 100) {
            attW_Q = Math.round(ZSglIO.AttW(String(BchoiceZS[HadChoice_Bb].zs_name), SX_Liliang[1], SX_Zhili[1]) * mSX_LiLiang.baojishanghai(SX_Liliang[1]));
            attN_Q = Math.round(ZSglIO.AttN(String(BchoiceZS[HadChoice_Bb].zs_name), SX_Liliang[1], SX_Zhili[1]) * mSX_LiLiang.baojishanghai(SX_Liliang[1]));
            PinHengAtt_Q = Math.round(ZSglIO.PinHengAtt(String(BchoiceZS[HadChoice_Bb].zs_name), SX_Liliang[1], SX_Zhili[1]) * mSX_LiLiang.baojishanghai(SX_Liliang[1]));
            $("#ZDwenbenWK").append("<div class='SCd_B'>造成暴击" + "(AttW:" + attW_Q + ",AttN:" + attN_Q + ",PinHengAtt:" + PinHengAtt_Q + ")" + "，击向A的" + BchoiceZS[HadChoice_Bb].zs_torl + BchoiceZS[HadChoice_Bb].zs_to + "</div>");
        } else {
            attW_Q = Math.round(ZSglIO.AttW(String(BchoiceZS[HadChoice_Bb].zs_name), SX_Liliang[1], SX_Zhili[1]));
            attN_Q = Math.round(ZSglIO.AttN(String(BchoiceZS[HadChoice_Bb].zs_name), SX_Liliang[1], SX_Zhili[1]));
            PinHengAtt_Q = Math.round(ZSglIO.PinHengAtt(String(BchoiceZS[HadChoice_Bb].zs_name), SX_Liliang[1], SX_Zhili[1]));
            $("#ZDwenbenWK").append("<div class='SCd_B'>" + "(AttW:" + attW_Q + ",AttN:" + attN_Q + ",PinHengAtt:" + PinHengAtt_Q + ")" + "，击向A的" + BchoiceZS[HadChoice_Bb].zs_torl + BchoiceZS[HadChoice_Bb].zs_to + "</div>");
        }
        DJStime = DJStime - (ZSglIO.ATimeQ(BchoiceZS[HadChoice_Bb].zs_name, SX_Minjie[1])).toFixed(1) - (ZSglIO.ATime(BchoiceZS[HadChoice_Bb].zs_name, SX_Minjie[1])).toFixed(1);
    } else {
        alert("X98fg4fg");
    }
}

//todo 闪避计算
function shanbijisuan() {
    var a = 1;//0为闪避
    if (HadChoice_Who === "A") {
        if (HpB.pinheng >= 5 * shanbiB_i) {
            // $("#ZDwenbenWK").append("<div>B闪避率：" + mSX_Minjie.SanBi(AchoiceZS[HadChoice_Aa].zs_to, SX_Minjie[1]) + "</div>");
            // $("#ZDwenbenWK").append("<div>B闪避率：" + ZSglIO.Mzxz(AchoiceZS[HadChoice_Aa].zs_name, SX_Zhili[0]) + "</div>");
            $("#ZDwenbenWK").append("<div>B闪避率：" + Math.round((mSX_Minjie.SanBi(AchoiceZS[HadChoice_Aa].zs_to, SX_Minjie[1]) - ZSglIO.Mzxz(AchoiceZS[HadChoice_Aa].zs_name, SX_Zhili[0]) + mSX_Minjie.SanBi(AchoiceZS[HadChoice_Aa].zs_to, SX_Minjie[1]) * ZSglIO.Mzxz(AchoiceZS[HadChoice_Aa].zs_name, SX_Zhili[0])) * 100) + "%。</div>");
            //[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
            if (Math.floor(Math.random() * 101) <= Math.round((mSX_Minjie.SanBi(AchoiceZS[HadChoice_Aa].zs_to, SX_Minjie[1]) - ZSglIO.Mzxz(AchoiceZS[HadChoice_Aa].zs_name, SX_Zhili[0]) + mSX_Minjie.SanBi(AchoiceZS[HadChoice_Aa].zs_to, SX_Minjie[1]) * ZSglIO.Mzxz(AchoiceZS[HadChoice_Aa].zs_name, SX_Zhili[0])) * 100)) {
                $("#ZDwenbenWK").append("<div class='SCd_B'>B闪避了</div>");
                a = 0;
                HpB.pinheng = HpB.pinheng - 5 * shanbiB_i;
                shanbiB_i++;
            }
        } else {
            $("#ZDwenbenWK").append("<div class='SCd_B'>B不够平衡值(" + 5 * shanbiB_i + ")，不能闪避</div>");
        }
    } else if (HadChoice_Who === "B") {
        if (HpA.pinheng >= 5 * shanbiA_i) {
            $("#ZDwenbenWK").append("<div>A闪避率：" + Math.round((mSX_Minjie.SanBi(BchoiceZS[HadChoice_Bb].zs_to, SX_Minjie[0]) - ZSglIO.Mzxz(BchoiceZS[HadChoice_Bb].zs_name, SX_Zhili[1]) + mSX_Minjie.SanBi(BchoiceZS[HadChoice_Bb].zs_to, SX_Minjie[0]) * ZSglIO.Mzxz(BchoiceZS[HadChoice_Bb].zs_name, SX_Zhili[1])) * 100) + "%。</div>");
            //[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
            if (Math.floor(Math.random() * 101) <= Math.round((mSX_Minjie.SanBi(BchoiceZS[HadChoice_Bb].zs_to, SX_Minjie[0]) - ZSglIO.Mzxz(BchoiceZS[HadChoice_Bb].zs_name, SX_Zhili[1]) + mSX_Minjie.SanBi(BchoiceZS[HadChoice_Bb].zs_to, SX_Minjie[0]) * ZSglIO.Mzxz(BchoiceZS[HadChoice_Bb].zs_name, SX_Zhili[1])) * 100)) {
                $("#ZDwenbenWK").append("<div class='SCd_A'>A闪避了</div>");
                a = 0;
                HpA.pinheng = HpA.pinheng - 5 * shanbiA_i;
                shanbiA_i++;
            }
        } else {
            $("#ZDwenbenWK").append("<div class='SCd_B'>A不够平衡值(" + 5 * shanbiA_i + ")，不能闪避</div>");
        }
    }
    return a;
}

//todo 防御计算
//双手防御头，平分伤害
function fangyujisuan() {
    var a = 1;//0为防御
    if (HadChoice_Who === "A") {
        //[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
        if (Math.floor(Math.random() * 101) <= Math.round(mSX_Tizhi.FangYuJiLv(AchoiceZS[HadChoice_Aa].zs_to, SX_Tizhi[1]) * 100)) {
            $("#ZDwenbenWK").append("<div class='SCd_B'>B防御了</div>");
            a = 0;
        }
    } else if (HadChoice_Who === "B") {
        //[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
        if (Math.floor(Math.random() * 101) <= Math.round(mSX_Tizhi.FangYuJiLv(BchoiceZS[HadChoice_Bb].zs_to, SX_Tizhi[0]) * 100)) {
            $("#ZDwenbenWK").append("<div class='SCd_A'>A防御了</div>");
            a = 0;
        }
    }
    return a;
}

//圆环值重置
function yuanhuanPH() {
    $("#Banyuan_ZD_l").find("span").html(Math.round(HpA.pinheng));
    $("#Banyuan_ZD_r").find("span").html(Math.round(HpB.pinheng));
    if (mSX_Pinheng.wendinzhi(SX_Pinheng[0]) > mSX_Pinheng.wendinzhi(SX_Pinheng[1])) {
        $("#Banyuan_KX_xl").css("transform", "rotate(-80deg)");
        $("#Banyuan_KX_xr").css("transform", "rotate(" + Math.round(179 - (179 - 80) / mSX_Pinheng.wendinzhi(SX_Pinheng[0]) * HpB.pinheng) + "deg)");
    } else {
        $("#Banyuan_KX_xr").css("transform", "rotate(80deg)");
        $("#Banyuan_KX_xl").css("transform", "rotate(" + Math.round(-179 + (179 - 80) / mSX_Pinheng.wendinzhi(SX_Pinheng[1]) * HpA.pinheng) + "deg)");
    }
}

//圆环值刷新
function yuanhuanPHsx() {
    // HpA.pinheng = HpA.pinheng + mSX_Pinheng.wendinhuifu(SX_Pinheng[0]);
    // HpB.pinheng = HpB.pinheng + mSX_Pinheng.wendinhuifu(SX_Pinheng[1]);
    if (HpA.pinheng > mSX_Pinheng.wendinzhi(SX_Pinheng[0])) {
        HpA.pinheng = mSX_Pinheng.wendinzhi(SX_Pinheng[0]);
    }
    if (HpB.pinheng > mSX_Pinheng.wendinzhi(SX_Pinheng[1])) {
        HpB.pinheng = mSX_Pinheng.wendinzhi(SX_Pinheng[1]);
    }
    if (HpA.pinheng < 0) {
        HpA.pinheng = 0;
    }
    if (HpB.pinheng < 0) {
        HpB.pinheng = 0;
    }
    $("#Banyuan_ZD_l").find("span").html(HpA.pinheng);
    $("#Banyuan_ZD_r").find("span").html(HpB.pinheng);
    if (mSX_Pinheng.wendinzhi(SX_Pinheng[0]) > mSX_Pinheng.wendinzhi(SX_Pinheng[1])) {
        $("#Banyuan_KX_xl").css("transform", "rotate(" + Math.round(-179 + (179 - 80) / mSX_Pinheng.wendinzhi(SX_Pinheng[0]) * HpA.pinheng) + "deg)");
        $("#Banyuan_KX_xr").css("transform", "rotate(" + Math.round(179 - (179 - 80) / mSX_Pinheng.wendinzhi(SX_Pinheng[0]) * HpB.pinheng) + "deg)");
    } else {
        $("#Banyuan_KX_xr").css("transform", "rotate(" + Math.round(179 - (179 - 80) / mSX_Pinheng.wendinzhi(SX_Pinheng[1]) * HpB.pinheng) + "deg)");
        $("#Banyuan_KX_xl").css("transform", "rotate(" + Math.round(-179 + (179 - 80) / mSX_Pinheng.wendinzhi(SX_Pinheng[1]) * HpA.pinheng) + "deg)");
    }
}

//圆环标志重置
function yuanhuanBZ() {
    HpA.Max_pinheng = mSX_Pinheng.wendinzhi(SX_Pinheng[0]);
    HpB.Max_pinheng = mSX_Pinheng.wendinzhi(SX_Pinheng[1]);
    if (HpA.Max_pinheng > HpB.Max_pinheng) {
        $("#Banyuan_line_l").css("transform", "rotate(50deg)");
        $("#Banyuan_line_r").css("transform", "rotate(" + Math.round(50 - 100 / HpA.Max_pinheng * HpB.Max_pinheng) + "deg)");
    } else {
        $("#Banyuan_line_r").css("transform", "rotate(-50deg)");
        $("#Banyuan_line_l").css("transform", "rotate(" + Math.round(-50 + 100 / HpB.Max_pinheng * HpA.Max_pinheng) + "deg)");
    }
}

//选择圆框重置
function yuanbuttomCZ() {
    DJStime = DJS;
    $("#StartButtomYuanKuang").html("<div class='huiheclass'><div class='huiheclass01'>第</div><div class='huiheclass02' id='huiheclass'>" + huihe_i + "</div><div class='huiheclass01'>回</div></div><div id='StartButtom_Nxzzs'>选择招式</div>");
    buttomLockoff();
    $("#chicoZhaoShiTianjiaK").empty();
    i_AyixuanZS = 1; //已选择招式 计数
    AyxZStime = 7.5; //已选招式剩余时间
    switch (PaiBei_A) {
        case "Taiji":
            $("#TuKuangTitle_paibie").html("太极");
            $("#TuKuangTitle_paibie").css("color", "#003179");
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
            $("#TuKuangTitle_paibie").css("color", "#bb1c33");
            window.i_tq_zhiquan = 1;
            window.i_tq_lrgouquan = 1;
            window.i_tq_sgouquan = 1;
            window.i_tq_zhouji = 1;
            window.i_tq_xizhuang = 1;
            window.i_tq_dengtui = 1;
            window.i_tq_shaotui = 1;
            break;
    }
    AchoiceZS[0].zs_name = "";
    AchoiceZS[1].zs_name = "";
    AchoiceZS[2].zs_name = "";
    AchoiceZS[3].zs_name = "";
    AchoiceZS[4].zs_name = "";
    AchoiceZS[5].zs_name = "";
    shanchuZShou();
    AchoiceZS[0].ATimeH = 0;
    BchoiceZS[0].ATimeH = 0;
    fig_a = 1;
    fig_b = 1;
    fig_xix = 0;
    HpA.pinheng = mSX_Pinheng.wendinzhi(SX_Pinheng[0]);
    HpB.pinheng = mSX_Pinheng.wendinzhi(SX_Pinheng[1]);
    yuanhuanPH();
}


//显示招式数据
function xianshiZSshuju() {
    var w = "A";
    if (PaiBei_A === "Taiji") {
        $("#xianshiZS_lK_A").html("<div class='zhaoshiLBqqs' id='ZSdiv_tj_panda_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>攀打</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_panda_te=''>特</div></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_tuishou_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>推手</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_qingna_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>擒拿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_shuangfong_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>双峰贯耳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_zhoudicui_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘底捶</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_zhoudicui_te=''>特</div></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_paocui_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>炮锤</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_yuanyangtui_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>鸳鸯腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_yuanyangtui_te>特</div></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_banshuai_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>绊摔</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW8qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN8qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz8qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ8qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime8qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH8qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt8qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH8qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_banshuai_te>特</div></div></div>");
        BDgl_Liliang_n();

        $("#AttW1qq_A").html(Math.round(tj_panda.AttW));
        $("#AttN1qq_A").html(Math.round(tj_panda.AttN));
        $("#AttW2qq_A").html(Math.round(tj_tuishou.AttW));
        $("#AttN2qq_A").html(Math.round(tj_tuishou.AttN));
        $("#AttW3qq_A").html(Math.round(tj_qingna.AttW));
        $("#AttN3qq_A").html(Math.round(tj_qingna.AttN));
        $("#AttW4qq_A").html(Math.round(tj_shuangfong.AttW));
        $("#AttN4qq_A").html(Math.round(tj_shuangfong.AttN));
        $("#AttW5qq_A").html(Math.round(tj_zhoudicui.AttW));
        $("#AttN5qq_A").html(Math.round(tj_zhoudicui.AttN));
        $("#AttW6qq_A").html(Math.round(tj_paocui.AttW));
        $("#AttN6qq_A").html(Math.round(tj_paocui.AttN));
        $("#AttW7qq_A").html(Math.round(tj_yuanyangtui.AttW));
        $("#AttN7qq_A").html(Math.round(tj_yuanyangtui.AttN));
        $("#AttW8qq_A").html(Math.round(tj_banshuai.AttW));
        $("#AttN8qq_A").html(Math.round(tj_banshuai.AttN));

        $("#PinHengAtt1qq_A").html(Math.round(tj_panda.PinHengAtt));
        $("#PinHengAtt2qq_A").html(Math.round(tj_tuishou.PinHengAtt));
        $("#PinHengAtt3qq_A").html(Math.round(tj_qingna.PinHengAtt));
        $("#PinHengAtt4qq_A").html(Math.round(tj_shuangfong.PinHengAtt));
        $("#PinHengAtt5qq_A").html(Math.round(tj_zhoudicui.PinHengAtt));
        $("#PinHengAtt6qq_A").html(Math.round(tj_paocui.PinHengAtt));
        $("#PinHengAtt7qq_A").html(Math.round(tj_yuanyangtui.PinHengAtt));
        $("#PinHengAtt8qq_A").html(Math.round(tj_banshuai.PinHengAtt));

        BDgl_Minjie_n();

        $("#ATimeQ1qq_A").html(tj_panda.ATimeQ.toFixed(1));
        $("#ATime1qq_A").html(tj_panda.ATime.toFixed(1));
        $("#ATimeH1qq_A").html(tj_panda.ATimeH.toFixed(1));

        $("#ATimeQ2qq_A").html(tj_tuishou.ATimeQ.toFixed(1));
        $("#ATime2qq_A").html(tj_tuishou.ATime.toFixed(1));
        $("#ATimeH2qq_A").html(tj_tuishou.ATimeH.toFixed(1));

        $("#ATimeQ3qq_A").html(tj_qingna.ATimeQ.toFixed(1));
        $("#ATime3qq_A").html(tj_qingna.ATime.toFixed(1));
        $("#ATimeH3qq_A").html(tj_qingna.ATimeH.toFixed(1));

        $("#ATimeQ4qq_A").html(tj_shuangfong.ATimeQ.toFixed(1));
        $("#ATime4qq_A").html(tj_shuangfong.ATime.toFixed(1));
        $("#ATimeH4qq_A").html(tj_shuangfong.ATimeH.toFixed(1));

        $("#ATimeQ5qq_A").html(tj_zhoudicui.ATimeQ.toFixed(1));
        $("#ATime5qq_A").html(tj_zhoudicui.ATime.toFixed(1));
        $("#ATimeH5qq_A").html(tj_zhoudicui.ATimeH.toFixed(1));

        $("#ATimeQ6qq_A").html(tj_paocui.ATimeQ.toFixed(1));
        $("#ATime6qq_A").html(tj_paocui.ATime.toFixed(1));
        $("#ATimeH6qq_A").html(tj_paocui.ATimeH.toFixed(1));

        $("#ATimeQ7qq_A").html(tj_yuanyangtui.ATimeQ.toFixed(1));
        $("#ATime7qq_A").html(tj_yuanyangtui.ATime.toFixed(1));
        $("#ATimeH7qq_A").html(tj_yuanyangtui.ATimeH.toFixed(1));

        $("#ATimeQ8qq_A").html(tj_banshuai.ATimeQ.toFixed(1));
        $("#ATime8qq_A").html(tj_banshuai.ATime.toFixed(1));
        $("#ATimeH8qq_A").html(tj_banshuai.ATimeH.toFixed(1));

        BDgl_Zhili_n();

        $("#Mzxz1qq_A").html(Add_zh(Math.round(tj_panda.Mzxz * 100)) + "%");
        $("#Mzxz2qq_A").html(Add_zh(Math.round(tj_tuishou.Mzxz * 100)) + "%");
        $("#Mzxz3qq_A").html(Add_zh(Math.round(tj_qingna.Mzxz * 100)) + "%");
        $("#Mzxz4qq_A").html(Add_zh(Math.round(tj_shuangfong.Mzxz * 100)) + "%");
        $("#Mzxz5qq_A").html(Add_zh(Math.round(tj_zhoudicui.Mzxz * 100)) + "%");
        $("#Mzxz6qq_A").html(Add_zh(Math.round(tj_paocui.Mzxz * 100)) + "%");
        $("#Mzxz7qq_A").html(Add_zh(Math.round(tj_yuanyangtui.Mzxz * 100)) + "%");
        $("#Mzxz8qq_A").html(Add_zh(Math.round(tj_banshuai.Mzxz * 100)) + "%");

        $("#PinHengXH1qq_A").html(tj_panda.PinHengXH);
        $("#PinHengXH2qq_A").html(tj_tuishou.PinHengXH);
        $("#PinHengXH3qq_A").html(tj_qingna.PinHengXH);
        $("#PinHengXH4qq_A").html(tj_shuangfong.PinHengXH);
        $("#PinHengXH5qq_A").html(tj_zhoudicui.PinHengXH);
        $("#PinHengXH6qq_A").html(tj_paocui.PinHengXH);
        $("#PinHengXH7qq_A").html(tj_yuanyangtui.PinHengXH);
        $("#PinHengXH8qq_A").html(tj_banshuai.PinHengXH);

    } else if (PaiBei_A === "Taiquan") {
        $("#xianshiZS_lK_A").html("<div class='zhaoshiLBqqs' id='ZSdiv_tq_zhiquan_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>直拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tq_lrgouquan_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>左右勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tq_sgouquan_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>上勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tq_zhouji_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘击</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tq_xizhuang_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>膝撞</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tq_dengtui_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>蹬腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tq_shaotui_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>扫腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div>");

        BDgl_Liliang_n();

        $("#AttW1qq_A").html(Math.round(tq_zhiquan.AttW));
        $("#AttN1qq_A").html(Math.round(tq_zhiquan.AttN));
        $("#AttW2qq_A").html(Math.round(tq_lrgouquan.AttW));
        $("#AttN2qq_A").html(Math.round(tq_lrgouquan.AttN));
        $("#AttW3qq_A").html(Math.round(tq_sgouquan.AttW));
        $("#AttN3qq_A").html(Math.round(tq_sgouquan.AttN));
        $("#AttW4qq_A").html(Math.round(tq_zhouji.AttW));
        $("#AttN4qq_A").html(Math.round(tq_zhouji.AttN));
        $("#AttW5qq_A").html(Math.round(tq_xizhuang.AttW));
        $("#AttN5qq_A").html(Math.round(tq_xizhuang.AttN));
        $("#AttW6qq_A").html(Math.round(tq_dengtui.AttW));
        $("#AttN6qq_A").html(Math.round(tq_dengtui.AttN));
        $("#AttW7qq_A").html(Math.round(tq_shaotui.AttW));
        $("#AttN7qq_A").html(Math.round(tq_shaotui.AttN));

        $("#PinHengAtt1qq_A").html(Math.round(tq_zhiquan.PinHengAtt));
        $("#PinHengAtt2qq_A").html(Math.round(tq_lrgouquan.PinHengAtt));
        $("#PinHengAtt3qq_A").html(Math.round(tq_sgouquan.PinHengAtt));
        $("#PinHengAtt4qq_A").html(Math.round(tq_zhouji.PinHengAtt));
        $("#PinHengAtt5qq_A").html(Math.round(tq_xizhuang.PinHengAtt));
        $("#PinHengAtt6qq_A").html(Math.round(tq_dengtui.PinHengAtt));
        $("#PinHengAtt7qq_A").html(Math.round(tq_shaotui.PinHengAtt));

        BDgl_Minjie_n();

        $("#ATimeQ1qq_A").html(tq_zhiquan.ATimeQ.toFixed(1));
        $("#ATime1qq_A").html(tq_zhiquan.ATime.toFixed(1));
        $("#ATimeH1qq_A").html(tq_zhiquan.ATimeH.toFixed(1));

        $("#ATimeQ2qq_A").html(tq_lrgouquan.ATimeQ.toFixed(1));
        $("#ATime2qq_A").html(tq_lrgouquan.ATime.toFixed(1));
        $("#ATimeH2qq_A").html(tq_lrgouquan.ATimeH.toFixed(1));

        $("#ATimeQ3qq_A").html(tq_sgouquan.ATimeQ.toFixed(1));
        $("#ATime3qq_A").html(tq_sgouquan.ATime.toFixed(1));
        $("#ATimeH3qq_A").html(tq_sgouquan.ATimeH.toFixed(1));

        $("#ATimeQ4qq_A").html(tq_zhouji.ATimeQ.toFixed(1));
        $("#ATime4qq_A").html(tq_zhouji.ATime.toFixed(1));
        $("#ATimeH4qq_A").html(tq_zhouji.ATimeH.toFixed(1));

        $("#ATimeQ5qq_A").html(tq_xizhuang.ATimeQ.toFixed(1));
        $("#ATime5qq_A").html(tq_xizhuang.ATime.toFixed(1));
        $("#ATimeH5qq_A").html(tq_xizhuang.ATimeH.toFixed(1));

        $("#ATimeQ6qq_A").html(tq_dengtui.ATimeQ.toFixed(1));
        $("#ATime6qq_A").html(tq_dengtui.ATime.toFixed(1));
        $("#ATimeH6qq_A").html(tq_dengtui.ATimeH.toFixed(1));

        $("#ATimeQ7qq_A").html(tq_shaotui.ATimeQ.toFixed(1));
        $("#ATime7qq_A").html(tq_shaotui.ATime.toFixed(1));
        $("#ATimeH7qq_A").html(tq_shaotui.ATimeH.toFixed(1));

        BDgl_Zhili_n();

        $("#Mzxz1qq_A").html(Add_zh(Math.round(tq_zhiquan.Mzxz * 100)) + "%");
        $("#Mzxz2qq_A").html(Add_zh(Math.round(tq_lrgouquan.Mzxz * 100)) + "%");
        $("#Mzxz3qq_A").html(Add_zh(Math.round(tq_sgouquan.Mzxz * 100)) + "%");
        $("#Mzxz4qq_A").html(Add_zh(Math.round(tq_zhouji.Mzxz * 100)) + "%");
        $("#Mzxz5qq_A").html(Add_zh(Math.round(tq_xizhuang.Mzxz * 100)) + "%");
        $("#Mzxz6qq_A").html(Add_zh(Math.round(tq_dengtui.Mzxz * 100)) + "%");
        $("#Mzxz7qq_A").html(Add_zh(Math.round(tq_shaotui.Mzxz * 100)) + "%");
        $("#PinHengXH1qq_A").html(tq_zhiquan.PinHengXH);
        $("#PinHengXH2qq_A").html(tq_lrgouquan.PinHengXH);
        $("#PinHengXH3qq_A").html(tq_sgouquan.PinHengXH);
        $("#PinHengXH4qq_A").html(tq_zhouji.PinHengXH);
        $("#PinHengXH5qq_A").html(tq_xizhuang.PinHengXH);
        $("#PinHengXH6qq_A").html(tq_dengtui.PinHengXH);
        $("#PinHengXH7qq_A").html(tq_shaotui.PinHengXH);
    }
    w = "B";
    if (PaiBei_B === "Taiji") {
        $("#xianshiZS_lK_B").html("<div class='zhaoshiLBqqs' id='ZSdiv_tj_panda_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>攀打</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_panda_te=''>特</div></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_tuishou_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>推手</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_qingna_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>擒拿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_shuangfong_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>双峰贯耳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_zhoudicui_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘底捶</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_zhoudicui_te=''>特</div></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_paocui_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>炮锤</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_yuanyangtui_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>鸳鸯腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_yuanyangtui_te>特</div></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tj_banshuai_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>绊摔</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW8qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN8qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz8qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ8qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime8qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH8qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt8qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH8qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_banshuai_te>特</div></div></div>");

        $("#AttW1qq_B").html(Math.round(ZSglIO.AttW_screen("tj_panda", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN1qq_B").html(Math.round(ZSglIO.AttN_screen("tj_panda", SX_Liliang[1], SX_Zhili[1])));
        $("#AttW2qq_B").html(Math.round(ZSglIO.AttW_screen("tj_tuishou", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN2qq_B").html(Math.round(ZSglIO.AttN_screen("tj_tuishou", SX_Liliang[1], SX_Zhili[1])));
        $("#AttW3qq_B").html(Math.round(ZSglIO.AttW_screen("tj_qingna", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN3qq_B").html(Math.round(ZSglIO.AttN_screen("tj_qingna", SX_Liliang[1], SX_Zhili[1])));
        $("#AttW4qq_B").html(Math.round(ZSglIO.AttW_screen("tj_shuangfong", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN4qq_B").html(Math.round(ZSglIO.AttN_screen("tj_shuangfong", SX_Liliang[1], SX_Zhili[1])));
        $("#AttW5qq_B").html(Math.round(ZSglIO.AttW_screen("tj_zhoudicui", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN5qq_B").html(Math.round(ZSglIO.AttN_screen("tj_zhoudicui", SX_Liliang[1], SX_Zhili[1])));
        $("#AttW6qq_B").html(Math.round(ZSglIO.AttW_screen("tj_paocui", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN6qq_B").html(Math.round(ZSglIO.AttN_screen("tj_paocui", SX_Liliang[1], SX_Zhili[1])));
        $("#AttW7qq_B").html(Math.round(ZSglIO.AttW_screen("tj_yuanyangtui", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN7qq_B").html(Math.round(ZSglIO.AttN_screen("tj_yuanyangtui", SX_Liliang[1], SX_Zhili[1])));
        $("#AttW8qq_B").html(Math.round(ZSglIO.AttW_screen("tj_banshuai", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN8qq_B").html(Math.round(ZSglIO.AttN_screen("tj_banshuai", SX_Liliang[1], SX_Zhili[1])));


        $("#ATimeQ1qq_B").html((ZSglIO.ATimeQ("tj_panda", SX_Minjie[1])).toFixed(1));
        $("#ATime1qq_B").html((ZSglIO.ATime("tj_panda", SX_Minjie[1])).toFixed(1));
        $("#ATimeH1qq_B").html((ZSglIO.ATimeH("tj_panda", SX_Minjie[1])).toFixed(1));
        $("#ATimeQ2qq_B").html((ZSglIO.ATimeQ("tj_tuishou", SX_Minjie[1])).toFixed(1));
        $("#ATime2qq_B").html((ZSglIO.ATime("tj_tuishou", SX_Minjie[1])).toFixed(1));
        $("#ATimeH2qq_B").html((ZSglIO.ATimeH("tj_tuishou", SX_Minjie[1])).toFixed(1));
        $("#ATimeQ3qq_B").html((ZSglIO.ATimeQ("tj_qingna", SX_Minjie[1])).toFixed(1));
        $("#ATime3qq_B").html((ZSglIO.ATime("tj_qingna", SX_Minjie[1])).toFixed(1));
        $("#ATimeH3qq_B").html((ZSglIO.ATimeH("tj_qingna", SX_Minjie[1])).toFixed(1));
        $("#ATimeQ4qq_B").html((ZSglIO.ATimeQ("tj_shuangfong", SX_Minjie[1])).toFixed(1));
        $("#ATime4qq_B").html((ZSglIO.ATime("tj_shuangfong", SX_Minjie[1])).toFixed(1));
        $("#ATimeH4qq_B").html((ZSglIO.ATimeH("tj_shuangfong", SX_Minjie[1])).toFixed(1));
        $("#ATimeQ5qq_B").html((ZSglIO.ATimeQ("tj_zhoudicui", SX_Minjie[1])).toFixed(1));
        $("#ATime5qq_B").html((ZSglIO.ATime("tj_zhoudicui", SX_Minjie[1])).toFixed(1));
        $("#ATimeH5qq_B").html((ZSglIO.ATimeH("tj_zhoudicui", SX_Minjie[1])).toFixed(1));
        $("#ATimeQ6qq_B").html((ZSglIO.ATimeQ("tj_paocui", SX_Minjie[1])).toFixed(1));
        $("#ATime6qq_B").html((ZSglIO.ATime("tj_paocui", SX_Minjie[1])).toFixed(1));
        $("#ATimeH6qq_B").html((ZSglIO.ATimeH("tj_paocui", SX_Minjie[1])).toFixed(1));
        $("#ATimeQ7qq_B").html((ZSglIO.ATimeQ("tj_yuanyangtui", SX_Minjie[1])).toFixed(1));
        $("#ATime7qq_B").html((ZSglIO.ATime("tj_yuanyangtui", SX_Minjie[1])).toFixed(1));
        $("#ATimeH7qq_B").html((ZSglIO.ATimeH("tj_yuanyangtui", SX_Minjie[1])).toFixed(1));
        $("#ATimeQ8qq_B").html((ZSglIO.ATimeQ("tj_banshuai", SX_Minjie[1])).toFixed(1));
        $("#ATime8qq_B").html((ZSglIO.ATime("tj_banshuai", SX_Minjie[1])).toFixed(1));
        $("#ATimeH8qq_B").html((ZSglIO.ATimeH("tj_banshuai", SX_Minjie[1])).toFixed(1));

        $("#Mzxz1qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tj_panda", SX_Zhili[1]) * 100)) + "%");
        $("#Mzxz2qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tj_tuishou", SX_Zhili[1]) * 100)) + "%");
        $("#Mzxz3qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tj_qingna", SX_Zhili[1]) * 100)) + "%");
        $("#Mzxz4qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tj_shuangfong", SX_Zhili[1]) * 100)) + "%");
        $("#Mzxz5qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tj_zhoudicui", SX_Zhili[1]) * 100)) + "%");
        $("#Mzxz6qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tj_paocui", SX_Zhili[1]) * 100)) + "%");
        $("#Mzxz7qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tj_yuanyangtui", SX_Zhili[1]) * 100)) + "%");
        $("#Mzxz8qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tj_banshuai", SX_Zhili[1]) * 100)) + "%");

        $("#PinHengAtt1qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tj_panda", SX_Liliang[1], SX_Zhili[1])));
        $("#PinHengAtt2qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tj_tuishou", SX_Liliang[1], SX_Zhili[1])));
        $("#PinHengAtt3qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tj_qingna", SX_Liliang[1], SX_Zhili[1])));
        $("#PinHengAtt4qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tj_shuangfong", SX_Liliang[1], SX_Zhili[1])));
        $("#PinHengAtt5qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tj_zhoudicui", SX_Liliang[1], SX_Zhili[1])));
        $("#PinHengAtt6qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tj_paocui", SX_Liliang[1], SX_Zhili[1])));
        $("#PinHengAtt7qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tj_yuanyangtui", SX_Liliang[1], SX_Zhili[1])));
        $("#PinHengAtt8qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tj_banshuai", SX_Liliang[1], SX_Zhili[1])));

        $("#PinHengXH1qq_B").html(tj_panda.PinHengXH);
        $("#PinHengXH2qq_B").html(tj_tuishou.PinHengXH);
        $("#PinHengXH3qq_B").html(tj_qingna.PinHengXH);
        $("#PinHengXH4qq_B").html(tj_shuangfong.PinHengXH);
        $("#PinHengXH5qq_B").html(tj_zhoudicui.PinHengXH);
        $("#PinHengXH6qq_B").html(tj_paocui.PinHengXH);
        $("#PinHengXH7qq_B").html(tj_yuanyangtui.PinHengXH);
        $("#PinHengXH8qq_B").html(tj_banshuai.PinHengXH);
    } else if (PaiBei_B === "Taiquan") {
        $("#xianshiZS_lK_B").html("<div class='zhaoshiLBqqs' id='ZSdiv_tq_zhiquan_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>直拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tq_lrgouquan_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>左右勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tq_sgouquan_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>上勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tq_zhouji_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘击</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tq_xizhuang_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>膝撞</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tq_dengtui_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>蹬腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs' id='ZSdiv_tq_shaotui_" + w + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>扫腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7qq_" + w + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7qq_" + w + "'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7qq_" + w + "'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7qq_" + w + "'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7qq_" + w + "'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7qq_" + w + "'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7qq_" + w + "'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7qq_" + w + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div>");
        $("#AttW1qq_B").html(Math.round(ZSglIO.AttW_screen("tq_zhiquan", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN1qq_B").html(Math.round(ZSglIO.AttN_screen("tq_zhiquan", SX_Liliang[1], SX_Zhili[1])));
        $("#AttW2qq_B").html(Math.round(ZSglIO.AttW_screen("tq_lrgouquan", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN2qq_B").html(Math.round(ZSglIO.AttN_screen("tq_lrgouquan", SX_Liliang[1], SX_Zhili[1])));
        $("#AttW3qq_B").html(Math.round(ZSglIO.AttW_screen("tq_sgouquan", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN3qq_B").html(Math.round(ZSglIO.AttN_screen("tq_sgouquan", SX_Liliang[1], SX_Zhili[1])));
        $("#AttW4qq_B").html(Math.round(ZSglIO.AttW_screen("tq_zhouji", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN4qq_B").html(Math.round(ZSglIO.AttN_screen("tq_zhouji", SX_Liliang[1], SX_Zhili[1])));
        $("#AttW5qq_B").html(Math.round(ZSglIO.AttW_screen("tq_xizhuang", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN5qq_B").html(Math.round(ZSglIO.AttN_screen("tq_xizhuang", SX_Liliang[1], SX_Zhili[1])));
        $("#AttW6qq_B").html(Math.round(ZSglIO.AttW_screen("tq_dengtui", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN6qq_B").html(Math.round(ZSglIO.AttN_screen("tq_dengtui", SX_Liliang[1], SX_Zhili[1])));
        $("#AttW7qq_B").html(Math.round(ZSglIO.AttW_screen("tq_shaotui", SX_Liliang[1], SX_Zhili[1])));
        $("#AttN7qq_B").html(Math.round(ZSglIO.AttN_screen("tq_shaotui", SX_Liliang[1], SX_Zhili[1])));


        $("#ATimeQ1qq_B").html((ZSglIO.ATimeQ("tq_zhiquan", SX_Minjie[1])).toFixed(1));
        $("#ATime1qq_B").html((ZSglIO.ATime("tq_zhiquan", SX_Minjie[1])).toFixed(1));
        $("#ATimeH1qq_B").html((ZSglIO.ATimeH("tq_zhiquan", SX_Minjie[1])).toFixed(1));
        $("#ATimeQ2qq_B").html((ZSglIO.ATimeQ("tq_lrgouquan", SX_Minjie[1])).toFixed(1));
        $("#ATime2qq_B").html((ZSglIO.ATime("tq_lrgouquan", SX_Minjie[1])).toFixed(1));
        $("#ATimeH2qq_B").html((ZSglIO.ATimeH("tq_lrgouquan", SX_Minjie[1])).toFixed(1));
        $("#ATimeQ3qq_B").html((ZSglIO.ATimeQ("tq_sgouquan", SX_Minjie[1])).toFixed(1));
        $("#ATime3qq_B").html((ZSglIO.ATime("tq_sgouquan", SX_Minjie[1])).toFixed(1));
        $("#ATimeH3qq_B").html((ZSglIO.ATimeH("tq_sgouquan", SX_Minjie[1])).toFixed(1));
        $("#ATimeQ4qq_B").html((ZSglIO.ATimeQ("tq_zhouji", SX_Minjie[1])).toFixed(1));
        $("#ATime4qq_B").html((ZSglIO.ATime("tq_zhouji", SX_Minjie[1])).toFixed(1));
        $("#ATimeH4qq_B").html((ZSglIO.ATimeH("tq_zhouji", SX_Minjie[1])).toFixed(1));
        $("#ATimeQ5qq_B").html((ZSglIO.ATimeQ("tq_xizhuang", SX_Minjie[1])).toFixed(1));
        $("#ATime5qq_B").html((ZSglIO.ATime("tq_xizhuang", SX_Minjie[1])).toFixed(1));
        $("#ATimeH5qq_B").html((ZSglIO.ATimeH("tq_xizhuang", SX_Minjie[1])).toFixed(1));
        $("#ATimeQ6qq_B").html((ZSglIO.ATimeQ("tq_dengtui", SX_Minjie[1])).toFixed(1));
        $("#ATime6qq_B").html((ZSglIO.ATime("tq_dengtui", SX_Minjie[1])).toFixed(1));
        $("#ATimeH6qq_B").html((ZSglIO.ATimeH("tq_dengtui", SX_Minjie[1])).toFixed(1));
        $("#ATimeQ7qq_B").html((ZSglIO.ATimeQ("tq_shaotui", SX_Minjie[1])).toFixed(1));
        $("#ATime7qq_B").html((ZSglIO.ATime("tq_shaotui", SX_Minjie[1])).toFixed(1));
        $("#ATimeH7qq_B").html((ZSglIO.ATimeH("tq_shaotui", SX_Minjie[1])).toFixed(1));

        $("#Mzxz1qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tq_zhiquan", SX_Zhili[1]) * 100)) + "%");
        $("#Mzxz2qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tq_lrgouquan", SX_Zhili[1]) * 100)) + "%");
        $("#Mzxz3qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tq_sgouquan", SX_Zhili[1]) * 100)) + "%");
        $("#Mzxz4qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tq_zhouji", SX_Zhili[1]) * 100)) + "%");
        $("#Mzxz5qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tq_xizhuang", SX_Zhili[1]) * 100)) + "%");
        $("#Mzxz6qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tq_dengtui", SX_Zhili[1]) * 100)) + "%");
        $("#Mzxz7qq_B").html(Add_zh(Math.round(ZSglIO.Mzxz("tq_shaotui", SX_Zhili[1]) * 100)) + "%");

        $("#PinHengAtt1qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tq_zhiquan", SX_Liliang[1], SX_Zhili[1])));
        $("#PinHengAtt2qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tq_lrgouquan", SX_Liliang[1], SX_Zhili[1])));
        $("#PinHengAtt3qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tq_sgouquan", SX_Liliang[1], SX_Zhili[1])));
        $("#PinHengAtt4qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tq_zhouji", SX_Liliang[1], SX_Zhili[1])));
        $("#PinHengAtt5qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tq_xizhuang", SX_Liliang[1], SX_Zhili[1])));
        $("#PinHengAtt6qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tq_dengtui", SX_Liliang[1], SX_Zhili[1])));
        $("#PinHengAtt7qq_B").html(Math.round(ZSglIO.PinHengAtt_screen("tq_shaotui", SX_Liliang[1], SX_Zhili[1])));

        $("#PinHengXH1qq_B").html(tq_zhiquan.PinHengXH);
        $("#PinHengXH2qq_B").html(tq_lrgouquan.PinHengXH);
        $("#PinHengXH3qq_B").html(tq_sgouquan.PinHengXH);
        $("#PinHengXH4qq_B").html(tq_zhouji.PinHengXH);
        $("#PinHengXH5qq_B").html(tq_xizhuang.PinHengXH);
        $("#PinHengXH6qq_B").html(tq_dengtui.PinHengXH);
        $("#PinHengXH7qq_B").html(tq_shaotui.PinHengXH);

    }
}

//战斗时锁定按钮
function buttomLock() {
    ButtomPinBi = 1;
    $("#StartButtomYuanKuang").removeClass("yuan_01").addClass("yuan_02");
    $("#BiaoTi_Logo_cxbp").attr("class", "BiaoTi_Logo_cxbpX");
    $("#rengshuButtom").attr("class", "xiaoButtom redButtomX");
    $("#huanrenButtom").attr("class", "xiaoButtom redButtomX");
    $("#ckZhaoShiButtom_A").attr("class", "ckZhaoShiButtom grayButtomX");
    $("#ckZhaoShiButtom_B").attr("class", "ckZhaoShiButtom grayButtomX");
}

//战斗后解除锁定按钮
function buttomLockoff() {
    ButtomPinBi = 0;
    $("#StartButtomYuanKuang").removeClass("yuan_02").addClass("yuan_01");
    $("#BiaoTi_Logo_cxbp").attr("class", "BiaoTi_Logo_cxbp");
    $("#rengshuButtom").attr("class", "xiaoButtom redButtom");
    $("#huanrenButtom").attr("class", "xiaoButtom redButtom");
    $("#ckZhaoShiButtom_A").attr("class", "ckZhaoShiButtom grayButtom");
    $("#ckZhaoShiButtom_B").attr("class", "ckZhaoShiButtom grayButtom");
}

//部位，英汉转换
function CNtoEN_BW(a) {
    switch (String(a)) {
        case "头部":
            return "tou";
        case "胸部":
            return "xiong";
        case "腹部":
            return "fu";
        case "腰部":
            return "yao";
        case "肩关节":
            return "jian";
        case "上臂":
            return "shangbi";
        case "手肘":
            return "zhou";
        case "前臂":
            return "qianbi";
        case "手腕":
            return "shouwan";
        case "大腿":
            return "datui";
        case "膝关节":
            return "xi";
        case "小腿":
            return "xiaotui";
        case "踝关节":
            return "huai";
        default:
            alert("X52455223f");
    }
}

//输出AB招式、攻击部位等等，测试用
function shuchusuoxuan() {
    for (var i = 1; i < 6; i++) {
        $("#ZDwenbenWK").append("<div>A" + AchoiceZS[i].zs_CNname() + ",frome:" + AchoiceZS[i].zs_frome + ",to:" + AchoiceZS[i].zs_to + ",torl:" + AchoiceZS[i].zs_torl + "</div>");

        $("#ZDwenbenWK").append("<div>B" + BchoiceZS[i].zs_CNname() + ",frome:" + BchoiceZS[i].zs_frome + ",to:" + BchoiceZS[i].zs_to + ",torl:" + BchoiceZS[i].zs_torl + "</div>");
    }

}

//打印通用文字
function IO_XS_normal(a) {
    $("#ZDwenbenWK").append("<div class='XS_huiheS_DK'><div class='XS_Sline'></div><div class='XS_yuan_xiao XS_yuan_xiao_l'></div><div class='XS_text'>" + a + "</div><div class='XS_yuan_xiao XS_yuan_xiao_r'></div><div class='XS_Sline XS_Sline_r'></div></div>");
}