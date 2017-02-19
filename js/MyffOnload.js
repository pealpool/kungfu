// JavaScript Document
"use strict";

$(document).ready(function () {



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
				} else if (element.is("[Taiji_panda_te]")) {
					return tj_panda.Beizhu;
				} else if (element.is("[Taiji_zhoudicui_te]")) {
					return tj_zhoudicui.Beizhu;
				} else if (element.is("[Taiji_yuanyangtui_te]")) {
					return tj_yuanyangtui.Beizhu;
				} else if (element.is("[Taiji_banshuai_te]")) {
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
			if (PaiBei === "Taiji") {
				$("#DianshuDaKuang_jx").html("太极，<br />以慢打快，以静制动，借力打力。有内伤伤害打击高防御的对手，也有高消削平衡的招式牵制对手。<br />防御方面也有直接化减直接所受伤害的技能。");
			} else {
				$("#DianshuDaKuang_jx").html("泰拳，<br />攻击猛锐迅捷，杀伤力大。<br />并具有高抗打能力。");
			}
			$("#DianshuDaKuang_jx").show("fade", 300);
		},
		function () {
			$("#DianshuDaKuang_jx").hide("fade", 300);
		}
	);


	$("#BiaoTi_Logo_cxbp").hover(
		function () {
			$("#BiaoTi_Logo_cxbp").html("[  重选派别  ]");
		},
		function () {
			$("#BiaoTi_Logo_cxbp").html("[ 重选派别 ]");
		}
	);
	$("#BiaoTi_Logo_cxbp").click(
		function () {
			$.confirm({
				theme: 'material',
				title: '注意！',
				content: '是否重新选择派别？',
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
						text: '否',
						action: function () {}
					},
					close: {
						text: '是',
						btnClass: 'btn-red',
						action: function () {
							$("#choiceBigKuang").show("fade", 300);
							$("#aaamask").show("fade", 300);
							$("#baseKuang").addClass("blur");
							$("#NeiRongchoiceZSdaK").hide();
						}
					}
				}
			});
		}
	);


	//选择招式按钮  圆
	$("#StartButtomYuanKuang").click(
		function () {
			$("#NeiRongchoiceZSdaK").show("drop", {
				direction: 'up'
			}, 300);
			if (PaiBei === "Taiji") {

				$("#zhaoshineirongqq").html("<div class='zhaoshiLBqq' id='ZSdiv_tj_panda'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>攀打</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tj_panda_flr'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1qq'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_panda_te=''>特</div></div></div><div class='zhaoshiLBqq' id='ZSdiv_tj_tuishou'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>推手</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqq' id='ZSdiv_tj_qingna'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>擒拿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tj_qingna_flr'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqq' id='ZSdiv_tj_shuangfong'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>双峰贯耳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqq' id='ZSdiv_tj_zhoudicui'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘底捶</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tj_zhoudicui_flr'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5qq'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_zhoudicui_te=''>特</div></div></div><div class='zhaoshiLBqq' id='ZSdiv_tj_paocui'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>炮锤</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqq' id='ZSdiv_tj_yuanyangtui'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>鸳鸯腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tj_yuanyangtui_flr'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7qq'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_yuanyangtui_te>特</div></div></div><div class='zhaoshiLBqq' id='ZSdiv_tj_banshuai'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>绊摔</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tj_banshuai_flr'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW8qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN8qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz8qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ8qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime8qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH8qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt8qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH8qq'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_banshuai_te>特</div></div></div>");




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

				$("#AttW1qq").html(Math.round(tj_panda.AttW));
				$("#AttN1qq").html(Math.round(tj_panda.AttN));
				$("#AttW2qq").html(Math.round(tj_tuishou.AttW));
				$("#AttN2qq").html(Math.round(tj_tuishou.AttN));
				$("#AttW3qq").html(Math.round(tj_qingna.AttW));
				$("#AttN3qq").html(Math.round(tj_qingna.AttN));
				$("#AttW4qq").html(Math.round(tj_shuangfong.AttW));
				$("#AttN4qq").html(Math.round(tj_shuangfong.AttN));
				$("#AttW5qq").html(Math.round(tj_zhoudicui.AttW));
				$("#AttN5qq").html(Math.round(tj_zhoudicui.AttN));
				$("#AttW6qq").html(Math.round(tj_paocui.AttW));
				$("#AttN6qq").html(Math.round(tj_paocui.AttN));
				$("#AttW7qq").html(Math.round(tj_yuanyangtui.AttW));
				$("#AttN7qq").html(Math.round(tj_yuanyangtui.AttN));
				$("#AttW8qq").html(Math.round(tj_banshuai.AttW));
				$("#AttN8qq").html(Math.round(tj_banshuai.AttN));

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

				$("#ATimeQ1qq").html(tj_panda.ATimeQ.toFixed(1));
				$("#ATime1qq").html(tj_panda.ATime.toFixed(1));
				$("#ATimeH1qq").html(tj_panda.ATimeH.toFixed(1));

				$("#ATimeQ2qq").html(tj_tuishou.ATimeQ.toFixed(1));
				$("#ATime2qq").html(tj_tuishou.ATime.toFixed(1));
				$("#ATimeH2qq").html(tj_tuishou.ATimeH.toFixed(1));

				$("#ATimeQ3qq").html(tj_qingna.ATimeQ.toFixed(1));
				$("#ATime3qq").html(tj_qingna.ATime.toFixed(1));
				$("#ATimeH3qq").html(tj_qingna.ATimeH.toFixed(1));

				$("#ATimeQ4qq").html(tj_shuangfong.ATimeQ.toFixed(1));
				$("#ATime4qq").html(tj_shuangfong.ATime.toFixed(1));
				$("#ATimeH4qq").html(tj_shuangfong.ATimeH.toFixed(1));

				$("#ATimeQ5qq").html(tj_zhoudicui.ATimeQ.toFixed(1));
				$("#ATime5qq").html(tj_zhoudicui.ATime.toFixed(1));
				$("#ATimeH5qq").html(tj_zhoudicui.ATimeH.toFixed(1));

				$("#ATimeQ6qq").html(tj_paocui.ATimeQ.toFixed(1));
				$("#ATime6qq").html(tj_paocui.ATime.toFixed(1));
				$("#ATimeH6qq").html(tj_paocui.ATimeH.toFixed(1));

				$("#ATimeQ7qq").html(tj_yuanyangtui.ATimeQ.toFixed(1));
				$("#ATime7qq").html(tj_yuanyangtui.ATime.toFixed(1));
				$("#ATimeH7qq").html(tj_yuanyangtui.ATimeH.toFixed(1));

				$("#ATimeQ8qq").html(tj_banshuai.ATimeQ.toFixed(1));
				$("#ATime8qq").html(tj_banshuai.ATime.toFixed(1));
				$("#ATimeH8qq").html(tj_banshuai.ATimeH.toFixed(1));

				tj_panda.Mzxz = true_tj_panda.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
				tj_tuishou.Mzxz = true_tj_tuishou.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
				tj_qingna.Mzxz = true_tj_qingna.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
				tj_shuangfong.Mzxz = true_tj_shuangfong.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
				tj_zhoudicui.Mzxz = true_tj_zhoudicui.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
				tj_paocui.Mzxz = true_tj_paocui.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
				tj_yuanyangtui.Mzxz = true_tj_yuanyangtui.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
				tj_banshuai.Mzxz = true_tj_banshuai.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);

				$("#Mzxz1qq").html(Add_zh(Math.round(tj_panda.Mzxz * 100)) + "%");
				$("#Mzxz2qq").html(Add_zh(Math.round(tj_tuishou.Mzxz * 100)) + "%");
				$("#Mzxz3qq").html(Add_zh(Math.round(tj_qingna.Mzxz * 100)) + "%");
				$("#Mzxz4qq").html(Add_zh(Math.round(tj_shuangfong.Mzxz * 100)) + "%");
				$("#Mzxz5qq").html(Add_zh(Math.round(tj_zhoudicui.Mzxz * 100)) + "%");
				$("#Mzxz6qq").html(Add_zh(Math.round(tj_paocui.Mzxz * 100)) + "%");
				$("#Mzxz7qq").html(Add_zh(Math.round(tj_yuanyangtui.Mzxz * 100)) + "%");
				$("#Mzxz8qq").html(Add_zh(Math.round(tj_banshuai.Mzxz * 100)) + "%");

				$("#PinHengAtt1qq").html(tj_panda.PinHengAtt);
				$("#PinHengXH1qq").html(tj_panda.PinHengXH);

				$("#PinHengAtt2qq").html(tj_tuishou.PinHengAtt);
				$("#PinHengXH2qq").html(tj_tuishou.PinHengXH);

				$("#PinHengAtt3qq").html(tj_qingna.PinHengAtt);
				$("#PinHengXH3qq").html(tj_qingna.PinHengXH);

				$("#PinHengAtt4qq").html(tj_shuangfong.PinHengAtt);
				$("#PinHengXH4qq").html(tj_shuangfong.PinHengXH);

				$("#PinHengAtt5qq").html(tj_zhoudicui.PinHengAtt);
				$("#PinHengXH5qq").html(tj_zhoudicui.PinHengXH);

				$("#PinHengAtt6qq").html(tj_paocui.PinHengAtt);
				$("#PinHengXH6qq").html(tj_paocui.PinHengXH);

				$("#PinHengAtt7qq").html(tj_yuanyangtui.PinHengAtt);
				$("#PinHengXH7qq").html(tj_yuanyangtui.PinHengXH);

				$("#PinHengAtt8qq").html(tj_banshuai.PinHengAtt);
				$("#PinHengXH8qq").html(tj_banshuai.PinHengXH);

			} else if (PaiBei === "Taiquan") {

				$("#zhaoshineirongqq").html("<div class='zhaoshiLBqq' id='ZSdiv_tq_zhiquan'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>直拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tq_zhiquan_flr'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqq' id='ZSdiv_tq_lrgouquan'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>左右勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tq_lrgouquan_flr'><div class='zy_buttomL'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqq' id='ZSdiv_tq_sgouquan'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>上勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tq_sgouquan_flr'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqq' id='ZSdiv_tq_zhouji'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘击</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tq_zhouji_flr'><div class='zy_buttomL'>左</div><div class='zy_buttomR org'>右</div></div> 肘</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqq' id='ZSdiv_tq_xizhuang'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>膝撞</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tq_xizhuang_flr'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 膝</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqq' id='ZSdiv_tq_dengtui'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>蹬腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tq_dengtui_flr'><div class='zy_buttomL'>左</div><div class='zy_buttomR org'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqq' id='ZSdiv_tq_shaotui'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>扫腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tq_shaotui_flr'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div>");

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

				$("#AttW1qq").html(Math.round(tq_zhiquan.AttW));
				$("#AttN1qq").html(Math.round(tq_zhiquan.AttN));
				$("#AttW2qq").html(Math.round(tq_lrgouquan.AttW));
				$("#AttN2qq").html(Math.round(tq_lrgouquan.AttN));
				$("#AttW3qq").html(Math.round(tq_sgouquan.AttW));
				$("#AttN3qq").html(Math.round(tq_sgouquan.AttN));
				$("#AttW4qq").html(Math.round(tq_zhouji.AttW));
				$("#AttN4qq").html(Math.round(tq_zhouji.AttN));
				$("#AttW5qq").html(Math.round(tq_xizhuang.AttW));
				$("#AttN5qq").html(Math.round(tq_xizhuang.AttN));
				$("#AttW6qq").html(Math.round(tq_dengtui.AttW));
				$("#AttN6qq").html(Math.round(tq_dengtui.AttN));
				$("#AttW7qq").html(Math.round(tq_shaotui.AttW));
				$("#AttN7qq").html(Math.round(tq_shaotui.AttN));

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

				$("#ATimeQ1qq").html(tq_zhiquan.ATimeQ.toFixed(1));
				$("#ATime1qq").html(tq_zhiquan.ATime.toFixed(1));
				$("#ATimeH1qq").html(tq_zhiquan.ATimeH.toFixed(1));

				$("#ATimeQ2qq").html(tq_lrgouquan.ATimeQ.toFixed(1));
				$("#ATime2qq").html(tq_lrgouquan.ATime.toFixed(1));
				$("#ATimeH2qq").html(tq_lrgouquan.ATimeH.toFixed(1));

				$("#ATimeQ3qq").html(tq_sgouquan.ATimeQ.toFixed(1));
				$("#ATime3qq").html(tq_sgouquan.ATime.toFixed(1));
				$("#ATimeH3qq").html(tq_sgouquan.ATimeH.toFixed(1));

				$("#ATimeQ4qq").html(tq_zhouji.ATimeQ.toFixed(1));
				$("#ATime4qq").html(tq_zhouji.ATime.toFixed(1));
				$("#ATimeH4qq").html(tq_zhouji.ATimeH.toFixed(1));

				$("#ATimeQ5qq").html(tq_xizhuang.ATimeQ.toFixed(1));
				$("#ATime5qq").html(tq_xizhuang.ATime.toFixed(1));
				$("#ATimeH5qq").html(tq_xizhuang.ATimeH.toFixed(1));

				$("#ATimeQ6qq").html(tq_dengtui.ATimeQ.toFixed(1));
				$("#ATime6qq").html(tq_dengtui.ATime.toFixed(1));
				$("#ATimeH6qq").html(tq_dengtui.ATimeH.toFixed(1));

				$("#ATimeQ7qq").html(tq_shaotui.ATimeQ.toFixed(1));
				$("#ATime7qq").html(tq_shaotui.ATime.toFixed(1));
				$("#ATimeH7qq").html(tq_shaotui.ATimeH.toFixed(1));

				tq_zhiquan.Mzxz = true_tq_zhiquan.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
				tq_lrgouquan.Mzxz = true_tq_lrgouquan.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
				tq_sgouquan.Mzxz = true_tq_sgouquan.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
				tq_zhouji.Mzxz = true_tq_zhouji.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
				tq_xizhuang.Mzxz = true_tq_xizhuang.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
				tq_dengtui.Mzxz = true_tq_dengtui.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);
				tq_shaotui.Mzxz = true_tq_shaotui.Mzxz + mSX_ZhiLi.minzhongxz(SX_Zhili);

				$("#Mzxz1qq").html(Add_zh(Math.round(tq_zhiquan.Mzxz * 100)) + "%");
				$("#Mzxz2qq").html(Add_zh(Math.round(tq_lrgouquan.Mzxz * 100)) + "%");
				$("#Mzxz3qq").html(Add_zh(Math.round(tq_sgouquan.Mzxz * 100)) + "%");
				$("#Mzxz4qq").html(Add_zh(Math.round(tq_zhouji.Mzxz * 100)) + "%");
				$("#Mzxz5qq").html(Add_zh(Math.round(tq_xizhuang.Mzxz * 100)) + "%");
				$("#Mzxz6qq").html(Add_zh(Math.round(tq_dengtui.Mzxz * 100)) + "%");
				$("#Mzxz7qq").html(Add_zh(Math.round(tq_shaotui.Mzxz * 100)) + "%");

				$("#PinHengAtt1qq").html(tq_zhiquan.PinHengAtt);
				$("#PinHengXH1qq").html(tq_zhiquan.PinHengXH);

				$("#PinHengAtt2qq").html(tq_lrgouquan.PinHengAtt);
				$("#PinHengXH2qq").html(tq_lrgouquan.PinHengXH);

				$("#PinHengAtt3qq").html(tq_sgouquan.PinHengAtt);
				$("#PinHengXH3qq").html(tq_sgouquan.PinHengXH);

				$("#PinHengAtt4qq").html(tq_zhouji.PinHengAtt);
				$("#PinHengXH4qq").html(tq_zhouji.PinHengXH);

				$("#PinHengAtt5qq").html(tq_xizhuang.PinHengAtt);
				$("#PinHengXH5qq").html(tq_xizhuang.PinHengXH);

				$("#PinHengAtt6qq").html(tq_dengtui.PinHengAtt);
				$("#PinHengXH6qq").html(tq_dengtui.PinHengXH);

				$("#PinHengAtt7qq").html(tq_shaotui.PinHengAtt);
				$("#PinHengXH7qq").html(tq_shaotui.PinHengXH);

			}
		}
	);







	/*$("#ZSdiv_tj_panda").click(
		function(){
			$("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqq' id='ZSdiv_tj_panda'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>攀打</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tj_panda_flr'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1qq'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_panda_te=''>特</div></div></div>");
		}
	);
	$("#ZSdiv_tj_tuishou").click(
		function(){
			$("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqq' id='ZSdiv_tj_tuishou'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>推手</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div>");
		}
	);
	$("#ZSdiv_tj_qingna").click(
		function(){
			$("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqq' id='ZSdiv_tj_qingna'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>擒拿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tj_qingna_flr'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div>");
		}
	);
	$("#ZSdiv_tj_shuangfong").click(
		function(){
			$("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqq' id='ZSdiv_tj_shuangfong'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>双峰贯耳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div>");
		}
	);
	$("#ZSdiv_tj_zhoudicui").click(
		function(){
			$("#chicoZhaoShiTianjiaK").append("div class='zhaoshiLBqq' id='ZSdiv_tj_zhoudicui'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘底捶</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tj_zhoudicui_flr'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5qq'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_zhoudicui_te=''>特</div></div>");
		}
	);
	$("#ZSdiv_tj_paocui").click(
		function(){
			$("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqq' id='ZSdiv_tj_paocui'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>炮锤</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomL org'>左</div><div class='zy_buttomR org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div>");
		}
	);
	$("#ZSdiv_tj_yuanyangtui").click(
		function(){
			$("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqq' id='ZSdiv_tj_yuanyangtui'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>鸳鸯腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tj_yuanyangtui'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7qq'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_yuanyangtui_te>特</div></div></div>");
		}
	);
	$("#ZSdiv_tj_banshuai").click(
		function(){
			$("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqq' id='ZSdiv_tj_banshuai'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>绊摔</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tj_banshuai'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW8qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN8qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz8qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ8qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime8qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH8qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt8qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH8qq'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_banshuai_te>特</div></div></div>");
		}
	);*/




	//确定 选择招式
	$("#choicezhaoshiButtom").click(
		function () {
			$("#NeiRongchoiceZSdaK").hide("drop", {
				direction: 'up'
			}, 300);
		}
	);


	//去除已选择招式
	$("#choiceRemove00").click(
		function () {
			$("#chicoZhaoShiTianjiaK").empty();
			i_tj_panda = 1;
		}
	);


	$(document).on("click", "#choiceRemove01", function () {
		$("#ZSdiv_tj_panda01").fadeTo("fast", 0.1, function () { //fade
			$(this).slideUp("fast", function () { //slide up
				$(this).remove(); //then remove from the DOM
				i_tj_panda--;
			});
		});

	});
	$(document).on("click", "#choiceRemove02", function () {
		$("#ZSdiv_tj_panda02").fadeTo("fast", 0.1, function () { //fade
			$(this).slideUp("fast", function () { //slide up
				$(this).remove(); //then remove from the DOM
				i_tj_panda--;
			});
		});
	});
	$(document).on("click", "#choiceRemove03", function () {
		$("#ZSdiv_tj_panda03").fadeTo("fast", 0.1, function () { //fade
			$(this).slideUp("fast", function () { //slide up
				$(this).remove(); //then remove from the DOM
				i_tj_panda--;
			});
		});
	});
	$(document).on("click", "#choiceRemove04", function () {
		$("#ZSdiv_tj_panda04").fadeTo("fast", 0.1, function () { //fade
			$(this).slideUp("fast", function () { //slide up
				$(this).remove(); //then remove from the DOM
				i_tj_panda--;
			});
		});
	});
	$(document).on("click", "#choiceRemove05", function () {
		$("#ZSdiv_tj_panda05").fadeTo("fast", 0.1, function () { //fade
			$(this).slideUp("fast", function () { //slide up
				$(this).remove(); //then remove from the DOM
				i_tj_panda--;
			});
		});
	});


	//添加招式
	$(document).on("click", "#ZSdiv_tj_panda", function () {
		if (i_tj_panda <= 5) {
			$("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tj_panda0" + i_tj_panda + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>攀打</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow' id='ZSdiv_tj_panda_flr0" + i_tj_panda + "'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1qq0" + i_tj_panda + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1qq0" + i_tj_panda + "'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_panda_te=''>特</div></div><div class='zhaoshiLB13 zhaoshiLBG'>----></div><div class='zhaoshiLB14 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomL org'>左</div><div class='zy_buttomR'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_tj_panda + "'><option selected>头部</option><option>胸部</option><option>腹部</option><option>腰部</option><option>肩关节</option><option>上臂</option><option>前臂</option><option>手肘</option><option>手腕</option><option>大腿</option><option>小腿</option><option>膝关节</option><option>踝关节</option></select></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_tj_panda + "'>×</div></div></div>");
			tj_panda.AttW = (true_tj_panda.AttW * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
			tj_panda.AttN = (true_tj_panda.AttN * mSX_LiLiang.gongjiJC(SX_Liliang) + mSX_LiLiang.baojishanghai(SX_Liliang) * mSX_ZhiLi.baojijilv(SX_Zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(SX_Zhili) - 0.05);
			$("#AttW1qq0" + i_tj_panda).html(Math.round(tj_panda.AttW));
			$("#AttN1qq0" + i_tj_panda).html(Math.round(tj_panda.AttN));
			i_tj_panda++;
		}

	});






});
