// JavaScript Document
"use strict";

$(document).ready(function () {



    //开启tooltip ui;
    $(function () {
        $(document).tooltip({
            items: "[title],[title_gongjiJC],[title_fangyujilv],[title_baojishanghai],[title_yibanfanshuang],[title_shudu],[title_fangyufanshuang],[title_shanbi],[title_wendinfantan],[title_baojijilv],[title_wendinzhi],[title_gongjifudongjilv],[title_wendinhuifu],[title_minzhongxz],[title_qinbao],[title_B_gongjiJC],[title_B_fangyujilv],[title_B_baojishanghai],[title_B_yibanfanshuang],[title_B_shudu],[title_B_fangyufanshuang],[title_B_shanbi],[title_wendinfantan],[title_B_baojijilv],[title_B_wendinzhi],[title_B_gongjifudongjilv],[title_B_wendinhuifu],[title_B_minzhongxz],[title_B_qinbao],[Taiji_panda_te],[Taiji_zhoudicui_te],[Taiji_yuanyangtui_te],[Taiji_banshuai_te]",
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
                 return "<div class='redbord'>" + element.attr("id") +  "</div>";
                 }
                 if (element.is("[title]")) {
                 return element.attr("title");
                 }*/
                if (element.is("[title]")) {
                    return element.attr("title");
                } else if (element.is("[title_gongjiJC]")) {
                    return "攻击招式的攻击力 " + "<strong class='redbord'>" + Add_zh(Math.round((mSX_LiLiang.gongjiJC(SX_Liliang[0]) - 1) * 100)) + "%" + "</strong>";
                } else if (element.is("[title_fangyujilv]")) {
                    return "<div style='margin-bottom:5px'>各部位防御几率：</div><div class='tooltip-fffmydiv3L'>头部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("tou", SX_Tizhi[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>胸部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("xiong", SX_Tizhi[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>腹部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("fu", SX_Tizhi[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>腰部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("yao", SX_Tizhi[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>肩关节：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("jian", SX_Tizhi[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>上臂：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("shangbi", SX_Tizhi[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>前臂：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("qianbi", SX_Tizhi[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>手肘：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("zhou", SX_Tizhi[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>手腕：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("shouwan", SX_Tizhi[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>大腿：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("datui", SX_Tizhi[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>小腿：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("xiaotui", SX_Tizhi[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>膝关节：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("xi", SX_Tizhi[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>踝关节：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("huai", SX_Tizhi[0]) * 100) + "%" + "</div>";
                } else if (element.is("[title_baojishanghai]")) {
                    return "攻击招式的暴击伤害 " + "<strong class='redbord'>" + Add_zh(Math.round((mSX_LiLiang.baojishanghai(SX_Liliang[0]) - 1) * 100)) + "%" + "</strong>";
                } else if (element.is("[title_yibanfanshuang]")) {
                    return "攻击招式命中目标且未被防御时，招式伤害的 " + "<strong class='redbord'>" + Math.round(mSX_Tizhi.yibanfanshuang(SX_Tizhi[0]) * 100) + "%" + "</strong>" + " 会无视防御反弹给攻击者。<p>反弹的伤害由攻击者招式发出的部位及上级连带部位平均分摊。</p><p style='color:#7d7d7d; line-height:0px; text-align:right'>*杀敌一万，自损三千。 —— 孙子</p>";
                } else if (element.is("[title_shudu]")) {
                    return "<div style='width:130px'><div class='tooltip-fffmydiv2L'>攻击前摇：</div><div class='tooltip-fffmydiv2R'>" + Add_zh(mSX_Minjie.shuduJC_Q(SX_Minjie[0])) + "s</div><div class='tooltip-fffmydiv2L'>招式时长：</div><div class='tooltip-fffmydiv2R'>" + Add_zh(mSX_Minjie.shuduJC_Z(SX_Minjie[0])) + "s</div><div class='tooltip-fffmydiv2L'>攻击后摇：</div><div class='tooltip-fffmydiv2R'>" + Add_zh(mSX_Minjie.shuduJC_H(SX_Minjie[0])) + "s</div></div>";
                } else if (element.is("[title_fangyufanshuang]")) {
                    return "攻击招式命中目标且被防御时，招式伤害的 " + "<strong class='redbord'>" + Math.round(mSX_Tizhi.fangyufanshuang(SX_Tizhi[0]) * 100) + "%" + "</strong>" + " 会无视防御反弹给攻击者。<p>反弹的伤害由攻击者招式发出的部位及上级连带部位平均分摊。</p><p style='color:#7d7d7d; line-height:0px; text-align:right'>*杀敌一万，自损三千。 —— 孙子</p>";
                } else if (element.is("[title_shanbi]")) {
                    return "<div style='margin-bottom:5px'>各部位闪避几率：</div><div class='tooltip-fffmydiv3L'>头部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("tou", SX_Minjie[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>胸部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("xiong", SX_Minjie[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>腹部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("fu", SX_Minjie[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>腰部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("yao", SX_Minjie[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>肩关节：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("jian", SX_Minjie[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>上臂：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("shangbi", SX_Minjie[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>前臂：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("qianbi", SX_Minjie[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>手肘：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("zhou", SX_Minjie[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>手腕：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("shouwan", SX_Minjie[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>大腿：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("datui", SX_Minjie[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>小腿：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("xiaotui", SX_Minjie[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>膝关节：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("xi", SX_Minjie[0]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>踝关节：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("huai", SX_Minjie[0]) * 100) + "%" + "</div>";
                } else if (element.is("[title_wendinfantan]")) {
                    return "攻击招式命中目标且被防御时，招式的稳定度消削 " + "<strong class='redbord'>" + Math.round(mSX_Tizhi.wendinfantan(SX_Tizhi[0]) * 100) + "%" + "</strong>" + " 会无视防御反弹给攻击者。<p style='color:#7d7d7d; line-height:0px; text-align:right'>*杀敌一万，自损三千。 —— 孙子</p>";
                } else if (element.is("[title_baojijilv]")) {
                    return "攻击招式有 " + "<strong class='redbord'>" + Math.round(mSX_ZhiLi.baojijilv(SX_Zhili[0]) * 100) + "%" + "</strong>" + " 几率暴击";
                } else if (element.is("[title_wendinzhi]")) {
                    return "最大稳定值为 " + "<strong class='redbord'>" + mSX_Pinheng.wendinzhi(SX_Pinheng[0]) + "</strong>" + "<p>所有招式均消耗稳定值，稳定值不足则不能行动，待恢复够所需稳定值为止。</p>";
                } else if (element.is("[title_gongjifudongjilv]")) {
                    return "攻击招式攻击力会在 ±10% 间浮动，<br />" + "现有" + "<strong class='redbord'>" + Math.round(mSX_ZhiLi.gongjifudongjilv(SX_Zhili[0]) * 100) + "%" + "</strong>" + " 几率为正浮动。";
                } else if (element.is("[title_wendinhuifu]")) {
                    return "每 0.1s 恢复 " + "<strong class='redbord'>" + mSX_Pinheng.wendinhuifu(SX_Pinheng[0]) + "</strong>" + " 稳定度 <p>稳定度只在无动作时恢复。</p>";
                } else if (element.is("[title_minzhongxz]")) {
                    return "攻击招式的命中率 " + "<strong class='redbord'>" + Add_zh(mSX_ZhiLi.minzhongxz(SX_Zhili[0]) * 100) + "%" + "</strong>";
                } else if (element.is("[title_qinbao]")) {
                    return qinbaotooltip(SX_Zhili[0]);
                } else if (element.is("[title_B_gongjiJC]")) {
                    return "攻击招式的攻击力 " + "<strong class='redbord'>" + Add_zh(Math.round((mSX_LiLiang.gongjiJC(SX_Liliang[1]) - 1) * 100)) + "%" + "</strong>";
                } else if (element.is("[title_B_fangyujilv]")) {
                    return "<div style='margin-bottom:5px'>各部位防御几率：</div><div class='tooltip-fffmydiv3L'>头部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("tou", SX_Tizhi[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>胸部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("xiong", SX_Tizhi[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>腹部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("fu", SX_Tizhi[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>腰部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("yao", SX_Tizhi[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>肩关节：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("jian", SX_Tizhi[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>上臂：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("shangbi", SX_Tizhi[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>前臂：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("qianbi", SX_Tizhi[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>手肘：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("zhou", SX_Tizhi[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>手腕：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("shouwan", SX_Tizhi[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>大腿：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("datui", SX_Tizhi[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>小腿：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("xiaotui", SX_Tizhi[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>膝关节：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("xi", SX_Tizhi[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>踝关节：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Tizhi.FangYuJiLv("huai", SX_Tizhi[1]) * 100) + "%" + "</div>";
                } else if (element.is("[title_B_baojishanghai]")) {
                    return "攻击招式的暴击伤害 " + "<strong class='redbord'>" + Add_zh(Math.round((mSX_LiLiang.baojishanghai(SX_Liliang[1]) - 1) * 100)) + "%" + "</strong>";
                } else if (element.is("[title_B_yibanfanshuang]")) {
                    return "攻击招式命中目标且未被防御时，招式伤害的 " + "<strong class='redbord'>" + Math.round(mSX_Tizhi.yibanfanshuang(SX_Tizhi[1]) * 100) + "%" + "</strong>" + " 会无视防御反弹给攻击者。<p>反弹的伤害由攻击者招式发出的部位及上级连带部位平均分摊。</p><p style='color:#7d7d7d; line-height:0px; text-align:right'>*杀敌一万，自损三千。 —— 孙子</p>";
                } else if (element.is("[title_B_shudu]")) {
                    return "<div style='width:130px'><div class='tooltip-fffmydiv2L'>攻击前摇：</div><div class='tooltip-fffmydiv2R'>" + Add_zh(mSX_Minjie.shuduJC_Q(SX_Minjie[1])) + "s</div><div class='tooltip-fffmydiv2L'>招式时长：</div><div class='tooltip-fffmydiv2R'>" + Add_zh(mSX_Minjie.shuduJC_Z(SX_Minjie[1])) + "s</div><div class='tooltip-fffmydiv2L'>攻击后摇：</div><div class='tooltip-fffmydiv2R'>" + Add_zh(mSX_Minjie.shuduJC_H(SX_Minjie[1])) + "s</div></div>";
                } else if (element.is("[title_B_fangyufanshuang]")) {
                    return "攻击招式命中目标且被防御时，招式伤害的 " + "<strong class='redbord'>" + Math.round(mSX_Tizhi.fangyufanshuang(SX_Tizhi[1]) * 100) + "%" + "</strong>" + " 会无视防御反弹给攻击者。<p>反弹的伤害由攻击者招式发出的部位及上级连带部位平均分摊。</p><p style='color:#7d7d7d; line-height:0px; text-align:right'>*杀敌一万，自损三千。 —— 孙子</p>";
                } else if (element.is("[title_B_shanbi]")) {
                    return "<div style='margin-bottom:5px'>各部位闪避几率：</div><div class='tooltip-fffmydiv3L'>头部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("tou", SX_Minjie[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>胸部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("xiong", SX_Minjie[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>腹部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("fu", SX_Minjie[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>腰部：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("yao", SX_Minjie[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>肩关节：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("jian", SX_Minjie[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>上臂：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("shangbi", SX_Minjie[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>前臂：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("qianbi", SX_Minjie[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>手肘：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("zhou", SX_Minjie[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>手腕：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("shouwan", SX_Minjie[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>大腿：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("datui", SX_Minjie[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>小腿：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("xiaotui", SX_Minjie[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>膝关节：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("xi", SX_Minjie[1]) * 100) + "%" + "</div><div class='tooltip-fffmydiv3L'>踝关节：</div><div class='tooltip-fffmydiv3R'>" + Math.round(mSX_Minjie.SanBi("huai", SX_Minjie[1]) * 100) + "%" + "</div>";
                } else if (element.is("[title_B_wendinfantan]")) {
                    return "攻击招式命中目标且被防御时，招式的稳定度消削 " + "<strong class='redbord'>" + Math.round(mSX_Tizhi.wendinfantan(SX_Tizhi[1]) * 100) + "%" + "</strong>" + " 会无视防御反弹给攻击者。<p style='color:#7d7d7d; line-height:0px; text-align:right'>*杀敌一万，自损三千。 —— 孙子</p>";
                } else if (element.is("[title_B_baojijilv]")) {
                    return "攻击招式有 " + "<strong class='redbord'>" + Math.round(mSX_ZhiLi.baojijilv(SX_Zhili[1]) * 100) + "%" + "</strong>" + " 几率暴击";
                } else if (element.is("[title_B_wendinzhi]")) {
                    return "最大稳定值为 " + "<strong class='redbord'>" + mSX_Pinheng.wendinzhi(SX_Pinheng[1]) + "</strong>" + "<p>所有招式均消耗稳定值，稳定值不足则不能行动，待恢复够所需稳定值为止。</p>";
                } else if (element.is("[title_B_gongjifudongjilv]")) {
                    return "攻击招式攻击力会在 ±10% 间浮动，<br />" + "现有" + "<strong class='redbord'>" + Math.round(mSX_ZhiLi.gongjifudongjilv(SX_Zhili[1]) * 100) + "%" + "</strong>" + " 几率为正浮动。";
                } else if (element.is("[title_B_wendinhuifu]")) {
                    return "每 0.1s 恢复 " + "<strong class='redbord'>" + mSX_Pinheng.wendinhuifu(SX_Pinheng[1]) + "</strong>" + " 稳定度 <p>稳定度只在无动作时恢复。</p>";
                } else if (element.is("[title_B_minzhongxz]")) {
                    return "攻击招式的命中率 " + "<strong class='redbord'>" + Add_zh(mSX_ZhiLi.minzhongxz(SX_Zhili[1]) * 100) + "%" + "</strong>";
                } else if (element.is("[title_B_qinbao]")) {
                    return qinbaotooltip(SX_Zhili[1]);
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


    //分配点数时-关联数值变红
    $("#DianshuDaKuang_T_Liliang").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_gongjiJC").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_gongjiJC").addClass("redbord");
            $("#DianshuguanlianXiaoKuang_baojishanghai").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_baojishanghai").addClass("redbord");
            $("#beepone001")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_gongjiJC").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_gongjiJC").removeClass("redbord");
            $("#DianshuguanlianXiaoKuang_baojishanghai").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_baojishanghai").removeClass("redbord");
        }
    );
    $("#DianshuDaKuang_T_Minjie").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_shudu").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_shudu").addClass("redbord");
            $("#DianshuguanlianXiaoKuang_shanbi").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_shanbi").addClass("redbord");
            $("#beepone002")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_shudu").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_shudu").removeClass("redbord");
            $("#DianshuguanlianXiaoKuang_shanbi").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_shanbi").removeClass("redbord");
        }
    );
    $("#DianshuDaKuang_T_Zhili").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_baojijilv").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_baojijilv").addClass("redbord");
            $("#DianshuguanlianXiaoKuang_gongjifudongjilv").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").addClass("redbord");
            $("#DianshuguanlianXiaoKuang_minzhongxz").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_minzhongxz").addClass("redbord");
            $("#DianshuguanlianXiaoKuang_qinbao").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_qinbao").addClass("redbord");
            $("#beepone003")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_baojijilv").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_baojijilv").removeClass("redbord");
            $("#DianshuguanlianXiaoKuang_gongjifudongjilv").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").removeClass("redbord");
            $("#DianshuguanlianXiaoKuang_minzhongxz").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_minzhongxz").removeClass("redbord");
            $("#DianshuguanlianXiaoKuang_qinbao").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_qinbao").removeClass("redbord");
        }
    );
    $("#DianshuDaKuang_T_Tizhi").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_fangyujilv").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_fangyujilv").addClass("redbord");
            $("#DianshuguanlianXiaoKuang_yibanfanshuang").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_yibanfanshuang").addClass("redbord");
            $("#DianshuguanlianXiaoKuang_fangyufanshuang").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_fangyufanshuang").addClass("redbord");
            $("#DianshuguanlianXiaoKuang_wendinfantan").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_wendinfantan").addClass("redbord");
            $("#beepone004")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_fangyujilv").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_fangyujilv").removeClass("redbord");
            $("#DianshuguanlianXiaoKuang_yibanfanshuang").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_yibanfanshuang").removeClass("redbord");
            $("#DianshuguanlianXiaoKuang_fangyufanshuang").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_fangyufanshuang").removeClass("redbord");
            $("#DianshuguanlianXiaoKuang_wendinfantan").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_wendinfantan").removeClass("redbord");
        }
    );
    $("#DianshuDaKuang_T_Pinheng").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_wendinzhi").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_wendinzhi").addClass("redbord");
            $("#DianshuguanlianXiaoKuang_wendinhuifu").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_wendinhuifu").addClass("redbord");
            $("#beepone005")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_wendinzhi").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_wendinzhi").removeClass("redbord");
            $("#DianshuguanlianXiaoKuang_wendinhuifu").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_wendinhuifu").removeClass("redbord");
        }
    );


    /*关联显示信息*/
    $("#DianshuguanlianXiaoKuang_gongjiJC").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_gongjiJC").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_gongjiJC").addClass("redbord");
            $("#beepone001")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_gongjiJC").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_gongjiJC").removeClass("redbord");
        }
    );
    $("#DianshuguanlianXiaoKuang_baojishanghai").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_baojishanghai").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_baojishanghai").addClass("redbord");
            $("#beepone002")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_baojishanghai").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_baojishanghai").removeClass("redbord");
        }
    );
    $("#DianshuguanlianXiaoKuang_shudu").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_shudu").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_shudu").addClass("redbord");
            $("#beepone003")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_shudu").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_shudu").removeClass("redbord");
        }
    );
    $("#DianshuguanlianXiaoKuang_shanbi").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_shanbi").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_shanbi").addClass("redbord");
            $("#beepone004")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_shanbi").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_shanbi").removeClass("redbord");
        }
    );
    $("#DianshuguanlianXiaoKuang_baojijilv").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_baojijilv").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_baojijilv").addClass("redbord");
            $("#beepone005")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_baojijilv").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_baojijilv").removeClass("redbord");
        }
    );
    $("#DianshuguanlianXiaoKuang_gongjifudongjilv").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_gongjifudongjilv").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").addClass("redbord");
            $("#beepone006")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_gongjifudongjilv").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_gongjifudongjilv").removeClass("redbord");
        }
    );
    $("#DianshuguanlianXiaoKuang_minzhongxz").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_minzhongxz").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_minzhongxz").addClass("redbord");
            $("#beepone007")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_minzhongxz").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_minzhongxz").removeClass("redbord");
        }
    );
    $("#DianshuguanlianXiaoKuang_qinbao").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_qinbao").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_qinbao").addClass("redbord");
            $("#beepone008")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_qinbao").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_qinbao").removeClass("redbord");
        }
    );
    $("#DianshuguanlianXiaoKuang_fangyujilv").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_fangyujilv").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_fangyujilv").addClass("redbord");
            $("#beepone009")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_fangyujilv").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_fangyujilv").removeClass("redbord");
        }
    );
    $("#DianshuguanlianXiaoKuang_yibanfanshuang").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_yibanfanshuang").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_yibanfanshuang").addClass("redbord");
            $("#beepone010")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_yibanfanshuang").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_yibanfanshuang").removeClass("redbord");
        }
    );
    $("#DianshuguanlianXiaoKuang_fangyufanshuang").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_fangyufanshuang").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_fangyufanshuang").addClass("redbord");
            $("#beepone011")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_fangyufanshuang").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_fangyufanshuang").removeClass("redbord");
        }
    );
    $("#DianshuguanlianXiaoKuang_wendinfantan").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_wendinfantan").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_wendinfantan").addClass("redbord");
            $("#beepone012")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_wendinfantan").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_wendinfantan").removeClass("redbord");
        }
    );
    $("#DianshuguanlianXiaoKuang_wendinzhi").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_wendinzhi").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_wendinzhi").addClass("redbord");
            $("#beepone013")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_wendinzhi").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_wendinzhi").removeClass("redbord");
        }
    );
    $("#DianshuguanlianXiaoKuang_wendinhuifu").hover(
        function () {
            $("#DianshuguanlianXiaoKuang_wendinhuifu").addClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_wendinhuifu").addClass("redbord");
            $("#beepone014")[0].play();
        },
        function () {
            $("#DianshuguanlianXiaoKuang_wendinhuifu").removeClass("grayBg");
            $("#DianshuguanlianXiaoKuang_s_wendinhuifu").removeClass("redbord");
        }
    );

    //点数栏变派别说明
    $("#ZhaoshiMinXiao").hover(
        function () {
            if (PaiBei_A === "Taiji") {
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
            if (ButtomPinBi === 0) {
                $("#BiaoTi_Logo_cxbp").html("[  重选派别  ]");
            }
        },
        function () {
            if (ButtomPinBi === 0) {
                $("#BiaoTi_Logo_cxbp").html("[ 重选派别 ]");
            }
        }
    );

    $("#BiaoTi_Logo_cxbp").click(function () {
        if (ButtomPinBi === 0) {
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
                        action: function () {
                        }
                    },
                    close: {
                        text: '是',
                        btnClass: 'btn-red',
                        action: function () {
                            $("#choiceBigKuang").show("fade", 300);
                            $("#aaamask").show("fade", 300);
                            $("#baseKuang").addClass("bigblur");
                            $("#NeiRongchoiceZSdaK").hide();
                            $("#chicoZhaoShiTianjiaK").empty();
                            $("#ZDwenbenWK").empty();
                            //zschushihua();
                            huihe_i = 1;
                            ChuShiHua();
                            $("#StartButtomYuanKuang").removeClass("yuan_02").addClass("yuan_01");
                            $("#xianshiZS_KD").hide();
                        }
                    }
                }
            });
        }
    });


    //todo 选择招式按钮  圆
    $("#StartButtomYuanKuang").click(function () {
        //ButtomPinBi 按钮是否能点击的标记
        if (ButtomPinBi === 0) {
            xuanshisyTime();
            if (PaiBei_A === "Taiji") {
                $("#NeiRongchoiceZSdaK").css("height", "597px");
                $("#zhaoshineirongqq").html("<div class='zhaoshiLBqqs huise' id='ZSdiv_tj_panda'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>攀打</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1qq'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_panda_te=''>特</div></div></div><div class='zhaoshiLBqqs huise' id='ZSdiv_tj_tuishou'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>推手</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs huise' id='ZSdiv_tj_qingna'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>擒拿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs huise' id='ZSdiv_tj_shuangfong'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>双峰贯耳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs huise' id='ZSdiv_tj_zhoudicui'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘底捶</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5qq'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_zhoudicui_te=''>特</div></div></div><div class='zhaoshiLBqqs huise' id='ZSdiv_tj_paocui'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>炮锤</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs huise' id='ZSdiv_tj_yuanyangtui'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>鸳鸯腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7qq'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_yuanyangtui_te>特</div></div></div><div class='zhaoshiLBqqs huise' id='ZSdiv_tj_banshuai'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>绊摔</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW8qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN8qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz8qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ8qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime8qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH8qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt8qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH8qq'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_banshuai_te>特</div></div></div>");

                BDgl_Liliang_n();

                $("#AttW1qq").html(Math.round(tj_panda.AttW));
                $("#AttN1qq").html(Math.round(tj_panda.AttN));
                $("#PinHengAtt1qq").html(Math.round(tj_panda.PinHengAtt));
                $("#AttW2qq").html(Math.round(tj_tuishou.AttW));
                $("#AttN2qq").html(Math.round(tj_tuishou.AttN));
                $("#PinHengAtt2qq").html(Math.round(tj_tuishou.PinHengAtt));
                $("#AttW3qq").html(Math.round(tj_qingna.AttW));
                $("#AttN3qq").html(Math.round(tj_qingna.AttN));
                $("#PinHengAtt3qq").html(Math.round(tj_qingna.PinHengAtt));
                $("#AttW4qq").html(Math.round(tj_shuangfong.AttW));
                $("#AttN4qq").html(Math.round(tj_shuangfong.AttN));
                $("#PinHengAtt4qq").html(Math.round(tj_shuangfong.PinHengAtt));
                $("#AttW5qq").html(Math.round(tj_zhoudicui.AttW));
                $("#AttN5qq").html(Math.round(tj_zhoudicui.AttN));
                $("#PinHengAtt5qq").html(Math.round(tj_zhoudicui.PinHengAtt));
                $("#AttW6qq").html(Math.round(tj_paocui.AttW));
                $("#AttN6qq").html(Math.round(tj_paocui.AttN));
                $("#PinHengAtt6qq").html(Math.round(tj_paocui.PinHengAtt));
                $("#AttW7qq").html(Math.round(tj_yuanyangtui.AttW));
                $("#AttN7qq").html(Math.round(tj_yuanyangtui.AttN));
                $("#PinHengAtt7qq").html(Math.round(tj_yuanyangtui.PinHengAtt));
                $("#AttW8qq").html(Math.round(tj_banshuai.AttW));
                $("#AttN8qq").html(Math.round(tj_banshuai.AttN));
                $("#PinHengAtt8qq").html(Math.round(tj_banshuai.PinHengAtt));

                BDgl_Minjie_n();

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

                BDgl_Zhili_n();

                $("#Mzxz1qq").html(Add_zh(Math.round(tj_panda.Mzxz * 100)) + "%");
                $("#Mzxz2qq").html(Add_zh(Math.round(tj_tuishou.Mzxz * 100)) + "%");
                $("#Mzxz3qq").html(Add_zh(Math.round(tj_qingna.Mzxz * 100)) + "%");
                $("#Mzxz4qq").html(Add_zh(Math.round(tj_shuangfong.Mzxz * 100)) + "%");
                $("#Mzxz5qq").html(Add_zh(Math.round(tj_zhoudicui.Mzxz * 100)) + "%");
                $("#Mzxz6qq").html(Add_zh(Math.round(tj_paocui.Mzxz * 100)) + "%");
                $("#Mzxz7qq").html(Add_zh(Math.round(tj_yuanyangtui.Mzxz * 100)) + "%");
                $("#Mzxz8qq").html(Add_zh(Math.round(tj_banshuai.Mzxz * 100)) + "%");

                $("#PinHengXH1qq").html(tj_panda.PinHengXH);
                $("#PinHengXH2qq").html(tj_tuishou.PinHengXH);
                $("#PinHengXH3qq").html(tj_qingna.PinHengXH);
                $("#PinHengXH4qq").html(tj_shuangfong.PinHengXH);
                $("#PinHengXH5qq").html(tj_zhoudicui.PinHengXH);
                $("#PinHengXH6qq").html(tj_paocui.PinHengXH);
                $("#PinHengXH7qq").html(tj_yuanyangtui.PinHengXH);
                $("#PinHengXH8qq").html(tj_banshuai.PinHengXH);

            } else if (PaiBei_A === "Taiquan") {
                $("#NeiRongchoiceZSdaK").css("height", "567px");
                $("#zhaoshineirongqq").html("<div class='zhaoshiLBqqs huise' id='ZSdiv_tq_zhiquan'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>直拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz1qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ1qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime1qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH1qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt1qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH1qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs huise' id='ZSdiv_tq_hgouquan'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>横勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz2qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ2qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime2qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH2qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt2qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH2qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs huise' id='ZSdiv_tq_sgouquan'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>上勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz3qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ3qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime3qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH3qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt3qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH3qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs huise' id='ZSdiv_tq_zhouji'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘击</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 肘</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz4qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ4qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime4qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH4qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt4qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH4qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs huise' id='ZSdiv_tq_xizhuang'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>膝撞</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 膝</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz5qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ5qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime5qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH5qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt5qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH5qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs huise' id='ZSdiv_tq_dengtui'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>蹬腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz6qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ6qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime6qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH6qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt6qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH6qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div><div class='zhaoshiLBqqs huise' id='ZSdiv_tq_shaotui'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>扫腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7qq'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7qq'></div><div class='zhaoshiLB6 zhaoshiLBG' id='Mzxz7qq'></div><div class='zhaoshiLB7 zhaoshiLBG' id='ATimeQ7qq'></div><div class='zhaoshiLB8 zhaoshiLBG' id='ATime7qq'></div><div class='zhaoshiLB9 zhaoshiLBG' id='ATimeH7qq'></div><div class='zhaoshiLB10 zhaoshiLBG' id='PinHengAtt7qq'></div><div class='zhaoshiLB11 zhaoshiLBG' id='PinHengXH7qq'></div><div class='zhaoshiLB12 zhaoshiLBG'></div></div>");

                BDgl_Liliang_n();

                $("#AttW1qq").html(Math.round(tq_zhiquan.AttW));
                $("#AttN1qq").html(Math.round(tq_zhiquan.AttN));
                $("#PinHengAtt1qq").html(Math.round(tq_zhiquan.PinHengAtt));
                $("#AttW2qq").html(Math.round(tq_hgouquan.AttW));
                $("#AttN2qq").html(Math.round(tq_hgouquan.AttN));
                $("#PinHengAtt2qq").html(Math.round(tq_hgouquan.PinHengAtt));
                $("#AttW3qq").html(Math.round(tq_sgouquan.AttW));
                $("#AttN3qq").html(Math.round(tq_sgouquan.AttN));
                $("#PinHengAtt3qq").html(Math.round(tq_sgouquan.PinHengAtt));
                $("#AttW4qq").html(Math.round(tq_zhouji.AttW));
                $("#AttN4qq").html(Math.round(tq_zhouji.AttN));
                $("#PinHengAtt4qq").html(Math.round(tq_zhouji.PinHengAtt));
                $("#AttW5qq").html(Math.round(tq_xizhuang.AttW));
                $("#AttN5qq").html(Math.round(tq_xizhuang.AttN));
                $("#PinHengAtt5qq").html(Math.round(tq_xizhuang.PinHengAtt));
                $("#AttW6qq").html(Math.round(tq_dengtui.AttW));
                $("#AttN6qq").html(Math.round(tq_dengtui.AttN));
                $("#PinHengAtt6qq").html(Math.round(tq_dengtui.PinHengAtt));
                $("#AttW7qq").html(Math.round(tq_shaotui.AttW));
                $("#AttN7qq").html(Math.round(tq_shaotui.AttN));
                $("#PinHengAtt7qq").html(Math.round(tq_shaotui.PinHengAtt));

                BDgl_Minjie_n();

                $("#ATimeQ1qq").html(tq_zhiquan.ATimeQ.toFixed(1));
                $("#ATime1qq").html(tq_zhiquan.ATime.toFixed(1));
                $("#ATimeH1qq").html(tq_zhiquan.ATimeH.toFixed(1));

                $("#ATimeQ2qq").html(tq_hgouquan.ATimeQ.toFixed(1));
                $("#ATime2qq").html(tq_hgouquan.ATime.toFixed(1));
                $("#ATimeH2qq").html(tq_hgouquan.ATimeH.toFixed(1));

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

                BDgl_Zhili_n();

                $("#Mzxz1qq").html(Add_zh(Math.round(tq_zhiquan.Mzxz * 100)) + "%");
                $("#Mzxz2qq").html(Add_zh(Math.round(tq_hgouquan.Mzxz * 100)) + "%");
                $("#Mzxz3qq").html(Add_zh(Math.round(tq_sgouquan.Mzxz * 100)) + "%");
                $("#Mzxz4qq").html(Add_zh(Math.round(tq_zhouji.Mzxz * 100)) + "%");
                $("#Mzxz5qq").html(Add_zh(Math.round(tq_xizhuang.Mzxz * 100)) + "%");
                $("#Mzxz6qq").html(Add_zh(Math.round(tq_dengtui.Mzxz * 100)) + "%");
                $("#Mzxz7qq").html(Add_zh(Math.round(tq_shaotui.Mzxz * 100)) + "%");
                $("#PinHengXH1qq").html(tq_zhiquan.PinHengXH);
                $("#PinHengXH2qq").html(tq_hgouquan.PinHengXH);
                $("#PinHengXH3qq").html(tq_sgouquan.PinHengXH);
                $("#PinHengXH4qq").html(tq_zhouji.PinHengXH);
                $("#PinHengXH5qq").html(tq_xizhuang.PinHengXH);
                $("#PinHengXH6qq").html(tq_dengtui.PinHengXH);
                $("#PinHengXH7qq").html(tq_shaotui.PinHengXH);

            }


            $("#NeiRongchoiceZSdaK").show("drop", {
                direction: 'up'
            }, 200);
            shanchuZShou();
            if (i_AyixuanZS > 5) {
                bianWuXiaoZS();
            }
        }
    });


    //去除已选择招式
    $("#choiceRemove00").click(function () {
        //$("#chicoZhaoShiTianjiaK").empty();
        $("#chicoZhaoShiTianjiaK").children("div").fadeTo("normal", 0.1, function () { //fade
            $(this).slideUp("normal", function () { //slide up
                $(this).remove(); //then remove from the DOM;
            });
        });
        //zschushihua();
        ChuShiHua();
    });


    $(document).on("click", "#choiceRemove01", function () {
        var xfys = $("#choiceRemove01").parent().parent();
        $(xfys).fadeTo("fast", 0.1, function () { //fade
            $(this).slideUp("fast", function () { //slide up
                $(this).remove(); //then remove from the DOM
                i_AyixuanZS--;
                jiahuitime(AchoiceZS[0].zs_name);
                $("#choiceRemove02").attr("id", "choiceRemove01");
                $("#choiceRemove03").attr("id", "choiceRemove02");
                $("#choiceRemove04").attr("id", "choiceRemove03");
                $("#choiceRemove05").attr("id", "choiceRemove04");
                $("#choiceXiaLa02").attr("id", "choiceXiaLa01");
                $("#choiceXiaLa03").attr("id", "choiceXiaLa02");
                $("#choiceXiaLa04").attr("id", "choiceXiaLa03");
                $("#choiceXiaLa05").attr("id", "choiceXiaLa04");
                AchoiceZS[0].zs_name = AchoiceZS[1].zs_name;
                AchoiceZS[1].zs_name = AchoiceZS[2].zs_name;
                AchoiceZS[2].zs_name = AchoiceZS[3].zs_name;
                AchoiceZS[3].zs_name = AchoiceZS[4].zs_name;
                shanchuZShou();
            });
        });
    });
    $(document).on("click", "#choiceRemove02", function () {
        var xfys = $("#choiceRemove02").parent().parent();
        $(xfys).fadeTo("fast", 0.1, function () { //fade
            $(this).slideUp("fast", function () { //slide up
                $(this).remove(); //then remove from the DOM
                i_AyixuanZS--;
                jiahuitime(AchoiceZS[1].zs_name);
                $("#choiceRemove03").attr("id", "choiceRemove02");
                $("#choiceRemove04").attr("id", "choiceRemove03");
                $("#choiceRemove05").attr("id", "choiceRemove04");
                $("#choiceXiaLa03").attr("id", "choiceXiaLa02");
                $("#choiceXiaLa04").attr("id", "choiceXiaLa03");
                $("#choiceXiaLa05").attr("id", "choiceXiaLa04");
                AchoiceZS[1].zs_name = AchoiceZS[2].zs_name;
                AchoiceZS[2].zs_name = AchoiceZS[3].zs_name;
                AchoiceZS[3].zs_name = AchoiceZS[4].zs_name;
                shanchuZShou();
            });
        });
    });
    $(document).on("click", "#choiceRemove03", function () {
        var xfys = $("#choiceRemove03").parent().parent();
        $(xfys).fadeTo("fast", 0.1, function () { //fade
            $(this).slideUp("fast", function () { //slide up
                $(this).remove(); //then remove from the DOM
                i_AyixuanZS--;
                jiahuitime(AchoiceZS[2].zs_name);
                $("#choiceRemove04").attr("id", "choiceRemove03");
                $("#choiceRemove05").attr("id", "choiceRemove04");
                $("#choiceXiaLa04").attr("id", "choiceXiaLa03");
                $("#choiceXiaLa05").attr("id", "choiceXiaLa04");
                AchoiceZS[2].zs_name = AchoiceZS[3].zs_name;
                AchoiceZS[3].zs_name = AchoiceZS[4].zs_name;
                shanchuZShou();
            });
        });
    });
    $(document).on("click", "#choiceRemove04", function () {
        var xfys = $("#choiceRemove04").parent().parent();
        $(xfys).fadeTo("fast", 0.1, function () { //fade
            $(this).slideUp("fast", function () { //slide up
                $(this).remove(); //then remove from the DOM
                i_AyixuanZS--;
                jiahuitime(AchoiceZS[3].zs_name);
                $("#choiceRemove05").attr("id", "choiceRemove04");
                $("#choiceXiaLa05").attr("id", "choiceXiaLa04");
                AchoiceZS[3].zs_name = AchoiceZS[4].zs_name;
                shanchuZShou();
            });
        });
    });
    $(document).on("click", "#choiceRemove05", function () {
        var xfys = $("#choiceRemove05").parent().parent();
        $(xfys).fadeTo("fast", 0.1, function () { //fade
            $(this).slideUp("fast", function () { //slide up
                $(this).remove(); //then remove from the DOM
                i_AyixuanZS--;
                jiahuitime(AchoiceZS[4].zs_name);
                shanchuZShou();
            });
        });
    });

    //添加招式-太极

    $(document).on("click", "#ZSdiv_tj_panda", function () {
        if ($("#ZSdiv_tj_panda").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tj_panda0" + i_tj_panda + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>攀打</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1qq0" + i_tj_panda + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1qq0" + i_tj_panda + "'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_panda_te=''>特</div></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll1qq0" + i_tj_panda + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>头部</option><option>胸部</option><option>腹部</option><option>肩关节</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW1qq0" + i_tj_panda).html(Math.round(tj_panda.AttW));
            $("#AttN1qq0" + i_tj_panda).html(Math.round(tj_panda.AttN));
            $("#ATimeAll1qq0" + i_tj_panda).html((tj_panda.ATimeQ + tj_panda.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tj_panda";
            i_tj_panda++;
            AyxZStime = AyxZStime - tj_panda.ATimeQ - tj_panda.ATime;
            tianjiaZShou();
        }
    });
    $(document).on("click", "#ZSdiv_tj_tuishou", function () {
        if ($("#ZSdiv_tj_tuishou").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tj_tuishou0" + i_tj_tuishou + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>推手</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2qq0" + i_tj_tuishou + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2qq0" + i_tj_tuishou + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll2qq0" + i_tj_tuishou + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>胸部</option><option>腹部</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW2qq0" + i_tj_tuishou).html(Math.round(tj_tuishou.AttW));
            $("#AttN2qq0" + i_tj_tuishou).html(Math.round(tj_tuishou.AttN));
            $("#ATimeAll2qq0" + i_tj_tuishou).html((tj_tuishou.ATimeQ + tj_tuishou.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tj_tuishou";
            i_tj_tuishou++;
            AyxZStime = AyxZStime - tj_tuishou.ATimeQ - tj_tuishou.ATime;
            tianjiaZShou();
        }
    });
    $(document).on("click", "#ZSdiv_tj_qingna", function () {
        if ($("#ZSdiv_tj_qingna").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tj_qingna0" + i_tj_qingna + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>擒拿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3qq0" + i_tj_qingna + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3qq0" + i_tj_qingna + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll3qq0" + i_tj_qingna + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>肩关节</option><option>上臂</option><option>手肘</option><option>手腕</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW3qq0" + i_tj_qingna).html(Math.round(tj_qingna.AttW));
            $("#AttN3qq0" + i_tj_qingna).html(Math.round(tj_qingna.AttN));
            $("#ATimeAll3qq0" + i_tj_qingna).html((tj_qingna.ATimeQ + tj_qingna.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tj_qingna";
            i_tj_qingna++;
            AyxZStime = AyxZStime - tj_qingna.ATimeQ - tj_qingna.ATime;
            tianjiaZShou();
        }
    });
    $(document).on("click", "#ZSdiv_tj_shuangfong", function () {
        if ($("#ZSdiv_tj_shuangfong").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tj_shuangfong0" + i_tj_shuangfong + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>双峰贯耳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4qq0" + i_tj_shuangfong + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4qq0" + i_tj_shuangfong + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll4qq0" + i_tj_shuangfong + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>头部</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW4qq0" + i_tj_shuangfong).html(Math.round(tj_shuangfong.AttW));
            $("#AttN4qq0" + i_tj_shuangfong).html(Math.round(tj_shuangfong.AttN));
            $("#ATimeAll4qq0" + i_tj_shuangfong).html((tj_shuangfong.ATimeQ + tj_shuangfong.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tj_shuangfong";
            i_tj_shuangfong++;
            AyxZStime = AyxZStime - tj_shuangfong.ATimeQ - tj_shuangfong.ATime;
            tianjiaZShou();
        }
    });
    $(document).on("click", "#ZSdiv_tj_zhoudicui", function () {
        if ($("#ZSdiv_tj_zhoudicui").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tj_zhoudicui0" + i_tj_zhoudicui + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘底捶</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5qq0" + i_tj_zhoudicui + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5qq0" + i_tj_zhoudicui + "'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_zhoudicui_te=''>特</div></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll5qq0" + i_tj_zhoudicui + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>胸部</option><option>腹部</option><option>腰部</option><option>大腿</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW5qq0" + i_tj_zhoudicui).html(Math.round(tj_zhoudicui.AttW));
            $("#AttN5qq0" + i_tj_zhoudicui).html(Math.round(tj_zhoudicui.AttN));
            $("#ATimeAll5qq0" + i_tj_zhoudicui).html((tj_zhoudicui.ATimeQ + tj_zhoudicui.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tj_zhoudicui";
            i_tj_zhoudicui++;
            AyxZStime = AyxZStime - tj_zhoudicui.ATimeQ - tj_zhoudicui.ATime;
            tianjiaZShou();
        }
    });
    $(document).on("click", "#ZSdiv_tj_paocui", function () {
        if ($("#ZSdiv_tj_paocui").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tj_paocui0" + i_tj_paocui + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>炮锤</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6qq0" + i_tj_paocui + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6qq0" + i_tj_paocui + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll6qq0" + i_tj_paocui + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>胸部</option><option>腹部</option><option>肩关节</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW6qq0" + i_tj_paocui).html(Math.round(tj_paocui.AttW));
            $("#AttN6qq0" + i_tj_paocui).html(Math.round(tj_paocui.AttN));
            $("#ATimeAll6qq0" + i_tj_paocui).html((tj_paocui.ATimeQ + tj_paocui.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tj_paocui";
            i_tj_paocui++;
            AyxZStime = AyxZStime - tj_paocui.ATimeQ - tj_paocui.ATime;
            tianjiaZShou();
        }
    });
    $(document).on("click", "#ZSdiv_tj_yuanyangtui", function () {
        if ($("#ZSdiv_tj_yuanyangtui").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tj_yuanyangtui0" + i_tj_yuanyangtui + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>鸳鸯腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7qq0" + i_tj_yuanyangtui + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7qq0" + i_tj_yuanyangtui + "'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_yuanyangtui_te=''>特</div></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll7qq0" + i_tj_yuanyangtui + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>头部</option><option>胸部</option><option>腹部</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW7qq0" + i_tj_yuanyangtui).html(Math.round(tj_yuanyangtui.AttW));
            $("#AttN7qq0" + i_tj_yuanyangtui).html(Math.round(tj_yuanyangtui.AttN));
            $("#ATimeAll7qq0" + i_tj_yuanyangtui).html((tj_yuanyangtui.ATimeQ + tj_yuanyangtui.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tj_yuanyangtui";
            i_tj_yuanyangtui++;
            AyxZStime = AyxZStime - tj_yuanyangtui.ATimeQ - tj_yuanyangtui.ATime;
            tianjiaZShou();
        }
    });
    $(document).on("click", "#ZSdiv_tj_banshuai", function () {
        if ($("#ZSdiv_tj_banshuai").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tj_banshuai0" + i_tj_banshuai + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>绊摔</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW8qq0" + i_tj_banshuai + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN8qq0" + i_tj_banshuai + "'></div><div class='zhaoshiLB12 zhaoshiLBG'><div class='zhaoshite' Taiji_banshuai_te=''>特</div></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll8qq0" + i_tj_banshuai + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>手肘</option><option>手腕</option><option>膝关节</option><option>踝关节</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW8qq0" + i_tj_banshuai).html(Math.round(tj_banshuai.AttW));
            $("#AttN8qq0" + i_tj_banshuai).html(Math.round(tj_banshuai.AttN));
            $("#ATimeAll8qq0" + i_tj_banshuai).html((tj_banshuai.ATimeQ + tj_banshuai.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tj_banshuai";
            i_tj_banshuai++;
            AyxZStime = AyxZStime - tj_banshuai.ATimeQ - tj_banshuai.ATime;
            tianjiaZShou();
        }
    });

    //添加招式-泰拳
    $(document).on("click", "#ZSdiv_tq_zhiquan", function () {
        if ($("#ZSdiv_tq_zhiquan").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tq_zhiquan0" + i_tq_zhiquan + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>直拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW1qq0" + i_tq_zhiquan + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN1qq0" + i_tq_zhiquan + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll1qq0" + i_tq_zhiquan + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>头部</option><option>胸部</option><option>腹部</option><option>肩关节</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW1qq0" + i_tq_zhiquan).html(Math.round(tq_zhiquan.AttW));
            $("#AttN1qq0" + i_tq_zhiquan).html(Math.round(tq_zhiquan.AttN));
            $("#ATimeAll1qq0" + i_tq_zhiquan).html((tq_zhiquan.ATimeQ + tq_zhiquan.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tq_zhiquan";
            i_tq_zhiquan++;
            AyxZStime = AyxZStime - tq_zhiquan.ATimeQ - tq_zhiquan.ATime;
            tianjiaZShou();
        }
    });
    $(document).on("click", "#ZSdiv_tq_hgouquan", function () {
        if ($("#ZSdiv_tq_hgouquan").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tq_hgouquan0" + i_tq_hgouquan + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>横勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW2qq0" + i_tq_hgouquan + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN2qq0" + i_tq_hgouquan + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll2qq0" + i_tq_hgouquan + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>头部</option><option>腰部</option><option>肩关节</option><option>上臂</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW2qq0" + i_tq_hgouquan).html(Math.round(tq_hgouquan.AttW));
            $("#AttN2qq0" + i_tq_hgouquan).html(Math.round(tq_hgouquan.AttN));
            $("#ATimeAll2qq0" + i_tq_hgouquan).html((tq_hgouquan.ATimeQ + tq_hgouquan.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tq_hgouquan";
            i_tq_hgouquan++;
            AyxZStime = AyxZStime - tq_hgouquan.ATimeQ - tq_hgouquan.ATime;
            tianjiaZShou();
        }
    });
    $(document).on("click", "#ZSdiv_tq_sgouquan", function () {
        if ($("#ZSdiv_tq_sgouquan").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tq_sgouquan0" + i_tq_sgouquan + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>上勾拳</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 手</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW3qq0" + i_tq_sgouquan + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN3qq0" + i_tq_sgouquan + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll3qq0" + i_tq_sgouquan + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>头部</option><option>胸部</option><option>腹部</option><option>肩关节</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW3qq0" + i_tq_sgouquan).html(Math.round(tq_sgouquan.AttW));
            $("#AttN3qq0" + i_tq_sgouquan).html(Math.round(tq_sgouquan.AttN));
            $("#ATimeAll3qq0" + i_tq_sgouquan).html((tq_sgouquan.ATimeQ + tq_sgouquan.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tq_sgouquan";
            i_tq_sgouquan++;
            AyxZStime = AyxZStime - tq_sgouquan.ATimeQ - tq_sgouquan.ATime;
            tianjiaZShou();
        }
    });
    $(document).on("click", "#ZSdiv_tq_zhouji", function () {
        if ($("#ZSdiv_tq_zhouji").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tq_zhouji0" + i_tq_zhouji + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>肘击</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 肘</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW4qq0" + i_tq_zhouji + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN4qq0" + i_tq_zhouji + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll4qq0" + i_tq_zhouji + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>头部</option><option>胸部</option><option>肩关节</option><option>上臂</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW4qq0" + i_tq_zhouji).html(Math.round(tq_zhouji.AttW));
            $("#AttN4qq0" + i_tq_zhouji).html(Math.round(tq_zhouji.AttN));
            $("#ATimeAll4qq0" + i_tq_zhouji).html((tq_zhouji.ATimeQ + tq_zhouji.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tq_zhouji";
            i_tq_zhouji++;
            AyxZStime = AyxZStime - tq_zhouji.ATimeQ - tq_zhouji.ATime;
            tianjiaZShou();
        }
    });
    $(document).on("click", "#ZSdiv_tq_xizhuang", function () {
        if ($("#ZSdiv_tq_xizhuang").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tq_xizhuang0" + i_tq_xizhuang + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>膝撞</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 膝</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW5qq0" + i_tq_xizhuang + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN5qq0" + i_tq_xizhuang + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll5qq0" + i_tq_xizhuang + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>头部</option><option>胸部</option><option>腹部</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW5qq0" + i_tq_xizhuang).html(Math.round(tq_xizhuang.AttW));
            $("#AttN5qq0" + i_tq_xizhuang).html(Math.round(tq_xizhuang.AttN));
            $("#ATimeAll5qq0" + i_tq_xizhuang).html((tq_xizhuang.ATimeQ + tq_xizhuang.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tq_xizhuang";
            i_tq_xizhuang++;
            AyxZStime = AyxZStime - tq_xizhuang.ATimeQ - tq_xizhuang.ATime;
            tianjiaZShou();
        }
    });
    $(document).on("click", "#ZSdiv_tq_dengtui", function () {
        if ($("#ZSdiv_tq_dengtui").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tq_dengtui0" + i_tq_dengtui + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>蹬腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW6qq0" + i_tq_dengtui + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN6qq0" + i_tq_dengtui + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll6qq0" + i_tq_dengtui + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>头部</option><option>胸部</option><option>腹部</option><option>肩关节</option><option>大腿</option><option>小腿</option><option>膝关节</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW6qq0" + i_tq_dengtui).html(Math.round(tq_dengtui.AttW));
            $("#AttN6qq0" + i_tq_dengtui).html(Math.round(tq_dengtui.AttN));
            $("#ATimeAll6qq0" + i_tq_dengtui).html((tq_dengtui.ATimeQ + tq_dengtui.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tq_dengtui";
            i_tq_dengtui++;
            AyxZStime = AyxZStime - tq_dengtui.ATimeQ - tq_dengtui.ATime;
            tianjiaZShou();
        }
    });
    $(document).on("click", "#ZSdiv_tq_shaotui", function () {
        if ($("#ZSdiv_tq_shaotui").attr("class") !== "zhaoshiLBqqs huise") {
            //if (i_AyixuanZS <= 5) {
            $("#chicoZhaoShiTianjiaK").append("<div class='zhaoshiLBqqs' id='ZSdiv_tq_shaotui0" + i_tq_shaotui + "'><div class='zhaoshiLB1 zhaoshiLBG'><div class='smallyuanKuang color_gong'>攻</div></div><div class='zhaoshiLB2 zhaoshiLBG'>扫腿</div><div class='zhaoshiLB3 zhaoshiLBG'><div class='zy_buttom handarrow'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr'>右</div></div> 脚</div><div class='zhaoshiLB4 zhaoshiLBG' id='AttW7qq0" + i_tq_shaotui + "'></div><div class='zhaoshiLB5 zhaoshiLBG' id='AttN7qq0" + i_tq_shaotui + "'></div><div class='zhaoshiLB12 zhaoshiLBG'></div><div class='zhaoshiLB13 zhaoshiLBG' id='ATimeAll7qq0" + i_tq_shaotui + "'></div><div class='zhaoshiLB14 zhaoshiLBG'>-></div><div class='zhaoshiLB15 zhaoshiLBG'><div class='zy_buttom'><div class='zy_buttomX bOl org'>左</div><div class='zy_buttomX bOr org'>右</div></div><select class='choiceXiaLa' id='choiceXiaLa0" + i_AyixuanZS + "'><option>头部</option><option>腰部</option><option>肩关节</option><option>上臂</option><option>前臂</option><option>手肘</option><option>手腕</option><option>大腿</option><option>小腿</option><option>膝关节</option><option>踝关节</option></select></div><div class='zhaoshiLB16 zhaoshiLBG'><div class='yuanXXX' id='choiceRemove0" + i_AyixuanZS + "'>×</div></div></div>");

            $("#AttW7qq0" + i_tq_shaotui).html(Math.round(tq_shaotui.AttW));
            $("#AttN7qq0" + i_tq_shaotui).html(Math.round(tq_shaotui.AttN));
            $("#ATimeAll7qq0" + i_tq_shaotui).html((tq_shaotui.ATimeQ + tq_shaotui.ATime).toFixed(1));

            AchoiceZS[i_AyixuanZS - 1].zs_name = "tq_shaotui";
            i_tq_shaotui++;
            AyxZStime = AyxZStime - tq_shaotui.ATimeQ - tq_shaotui.ATime;
            tianjiaZShou();
        }
    });


    //手动排序移动
    $(function () {
        $("#chicoZhaoShiTianjiaK").sortable({
            axis: "y",
            cursor: "move",
            /*update: function (event, ui) {
             var text = "排序为：";
             $("#chicoZhaoShiTianjiaK").children().each(function () {
             //text = text + $(this).attr("px") + " ";
             $(this).attr("px", "1");
             })
             alert(text); //把排序的ID弹出
             }*/
        });
        $("#chicoZhaoShiTianjiaK").disableSelection();
    });


    //取消招式选择
    $("#choicezhaoshiButtomC").click(function () {
        $("#NeiRongchoiceZSdaK").hide("drop", {
            direction: 'up'
        }, 200);
    });


    //todo 完成招式选择按钮
    $("#choicezhaoshiButtom").click(function () {
        //挑选发动的人
        window.HadChoice_Who = "";
        //挑选发动的招式
        window.HadChoice_What = "";
        //已选招式数组序号
        window.HadChoice_Aa = 0;
        window.HadChoice_Bb = 0;

        var i = 1;
        //slice(6, -2)从第6个后截取，到倒数第3个。
        //alert($(this).find(".zhaoshiLB3.zhaoshiLBG").html());
        var gz00 = /\D*/;
        var gz01 = new RegExp("手");
        var gz02 = new RegExp("脚");
        var gz03 = new RegExp("肘");
        var gz04 = new RegExp("膝");
        $("#chicoZhaoShiTianjiaK").children().each(function () {
            AchoiceZS[i].zs_name = gz00.exec(($(this).attr("id")).slice(6, -2));
            if (gz01.test($(this).find(".zhaoshiLB3.zhaoshiLBG").html())) {
                if ($(this).find(".zhaoshiLB3.zhaoshiLBG").find(".zy_buttom").attr("class") === "zy_buttom handarrow") {
                    if ($(this).find(".zhaoshiLB3.zhaoshiLBG").find(".zy_buttomX bOl").attr("class") === "zy_buttomX bOl org") {
                        AchoiceZS[i].zs_frome = "shoul";
                    } else {
                        AchoiceZS[i].zs_frome = "shour";
                    }
                } else {
                    AchoiceZS[i].zs_frome = "shou"; //双手
                }
            } else if (gz02.test($(this).find(".zhaoshiLB3.zhaoshiLBG").html())) {
                if ($(this).find(".zhaoshiLB3.zhaoshiLBG").find(".zy_buttom").attr("class") === "zy_buttom handarrow") {
                    if ($(this).find(".zhaoshiLB3.zhaoshiLBG").find(".zy_buttomX bOl").attr("class") === "zy_buttomX bOl org") {
                        AchoiceZS[i].zs_frome = "jiaol";
                    } else {
                        AchoiceZS[i].zs_frome = "jiaor";
                    }
                } else {
                    AchoiceZS[i].zs_frome = "jiao";
                }
            } else if (gz03.test($(this).find(".zhaoshiLB3.zhaoshiLBG").html())) {
                if ($(this).find(".zhaoshiLB3.zhaoshiLBG").find(".zy_buttom").attr("class") === "zy_buttom handarrow") {
                    if ($(this).find(".zhaoshiLB3.zhaoshiLBG").find(".zy_buttomX bOl").attr("class") === "zy_buttomX bOl org") {
                        AchoiceZS[i].zs_frome = "zhoul";
                    } else {
                        AchoiceZS[i].zs_frome = "zhour";
                    }
                } else {
                    AchoiceZS[i].zs_frome = "zhou";
                }
            } else if (gz04.test($(this).find(".zhaoshiLB3.zhaoshiLBG").html())) {
                if ($(this).find(".zhaoshiLB3.zhaoshiLBG").find(".zy_buttom").attr("class") === "zy_buttom handarrow") {
                    if ($(this).find(".zhaoshiLB3.zhaoshiLBG").find(".zy_buttomX bOl").attr("class") === "zy_buttomX bOl org") {
                        AchoiceZS[i].zs_frome = "xil";
                    } else {
                        AchoiceZS[i].zs_frome = "xir";
                    }
                } else {
                    AchoiceZS[i].zs_frome = "xi";
                }
            }
            AchoiceZS[i].zs_to = CNtoEN_BW($(this).find("select").val());
            if ($(this).find(".zhaoshiLB15.zhaoshiLBG").find(".zy_buttom").attr("class") === "zy_buttom handarrow") {
                if ($(this).find(".zhaoshiLB15.zhaoshiLBG").find(".zy_buttomX bOl").attr("class") === "zy_buttomX bOl org") {
                    AchoiceZS[i].zs_torl = "l";
                } else {
                    AchoiceZS[i].zs_torl = "r";
                }
            } else {
                AchoiceZS[i].zs_torl = "";
            }
            i++;
        });
        AchoiceZS_bj = i - 1;
        buttomLock();
        $("#StartButtomYuanKuang").html("<div class='ds_time_TD'><span>第</span> <span class='ds_time_TX' id='huiheclass'>" + huihe_i + "</span> <span>回</span></div><div class='ds_time'><span id='ds_time'>" + (DJStime).toFixed(1) + "</span> <span class='ds_time_s'>s</span></div>");
        huihe_i++;
        $("#NeiRongchoiceZSdaK").hide("drop", {
            direction: 'up'
        }, 200);
        BshujiZS();
        shuchusuoxuan();
        $("#ZDwenbenWK").append("<div class='XS_huiheS_DK'><div class='XS_Sline'></div><div class='XS_yuan_Fred XS_yuan_Fred_l'></div><div class='XS_huiheS_line'></div><div class='XS_huiheS'>第&nbsp;" + (huihe_i-1) + "&nbsp;回<br><span>开&nbsp;&nbsp;始</span></div><div class='XS_huiheS_line'></div><div class='XS_yuan_Fred XS_yuan_Fred_r'></div><div class='XS_Sline XS_Sline_r'></div></div>");
        window.fitXH = setInterval(fighting, 200);
    });

    //选择攻击部位限制左右按钮
    $(document).on("change", "#choiceXiaLa01, #choiceXiaLa02, #choiceXiaLa03, #choiceXiaLa04, #choiceXiaLa05", function () {
        //alert($(this).val());
        switch ($(this).val()) {
            case "头部":
                $(this).prev("div").removeClass("handarrow");
                $(this).prev("div").children("div").eq(0).addClass("org");
                $(this).prev("div").children("div").eq(1).addClass("org");
                break;
            case "胸部":
                $(this).prev("div").removeClass("handarrow");
                $(this).prev("div").children("div").eq(0).addClass("org");
                $(this).prev("div").children("div").eq(1).addClass("org");
                break;
            case "腹部":
                $(this).prev("div").removeClass("handarrow");
                $(this).prev("div").children("div").eq(0).addClass("org");
                $(this).prev("div").children("div").eq(1).addClass("org");
                break;
            case "腰部":
                $(this).prev("div").addClass("handarrow");
                $(this).prev("div").children("div").eq(0).addClass("org");
                $(this).prev("div").children("div").eq(1).removeClass("org");
                break;
            case "肩关节":
                $(this).prev("div").addClass("handarrow");
                $(this).prev("div").children("div").eq(0).addClass("org");
                $(this).prev("div").children("div").eq(1).removeClass("org");
                break;
            case "上臂":
                $(this).prev("div").addClass("handarrow");
                $(this).prev("div").children("div").eq(0).addClass("org");
                $(this).prev("div").children("div").eq(1).removeClass("org");
                break;
            case "前臂":
                $(this).prev("div").addClass("handarrow");
                $(this).prev("div").children("div").eq(0).addClass("org");
                $(this).prev("div").children("div").eq(1).removeClass("org");
                break;
            case "手肘":
                $(this).prev("div").addClass("handarrow");
                $(this).prev("div").children("div").eq(0).addClass("org");
                $(this).prev("div").children("div").eq(1).removeClass("org");
                break;
            case "手腕":
                $(this).prev("div").addClass("handarrow");
                $(this).prev("div").children("div").eq(0).addClass("org");
                $(this).prev("div").children("div").eq(1).removeClass("org");
                break;
            case "大腿":
                $(this).prev("div").addClass("handarrow");
                $(this).prev("div").children("div").eq(0).addClass("org");
                $(this).prev("div").children("div").eq(1).removeClass("org");
                break;
            case "小腿":
                $(this).prev("div").addClass("handarrow");
                $(this).prev("div").children("div").eq(0).addClass("org");
                $(this).prev("div").children("div").eq(1).removeClass("org");
                break;
            case "膝关节":
                $(this).prev("div").addClass("handarrow");
                $(this).prev("div").children("div").eq(0).addClass("org");
                $(this).prev("div").children("div").eq(1).removeClass("org");
                break;
            case "踝关节":
                $(this).prev("div").addClass("handarrow");
                $(this).prev("div").children("div").eq(0).addClass("org");
                $(this).prev("div").children("div").eq(1).removeClass("org");
                break;
        }
    });

    //左右选择
    $(document).on("click", ".zy_buttom.handarrow", function () {
        if ($(this).children().eq(0).attr("class") === "zy_buttomX bOl org") {
            $(this).children().eq(0).removeClass("org");
            $(this).children().eq(1).addClass("org");
        } else {
            $(this).children().eq(0).addClass("org");
            $(this).children().eq(1).removeClass("org");
        }
    });

    //点击改名
    $(document).on("click", "#My_name", function () {
        $("#TuKuangTitle_name").html("<input class='shuru_name' id='shuru_name' maxlength='6'><div class='xfangButtomw'><div class='xfangButtom backButtom' id='dui_name'>√</div></div><div class='xfangButtomw'><div class='xfangButtom grayButtom' id='cuo_name'>×</div></div>");
        $("#shuru_name").focus();
    });
    $(document).on("click", "#dui_name", function () {
        var qqq = $("#shuru_name").val();
        $("#TuKuangTitle_name").html("<div id='My_name'></div>");
        if (qqq !== "") {
            $("#My_name").text(qqq);
            mymynameA = qqq;
            renshushuaxin();
        } else {
            $("#My_name").text(mymynameA);
        }
    });
    $(document).on("focusout", "#shuru_name", function () {
        setTimeout(function () {
            $("#TuKuangTitle_name").html("<div id='My_name'></div>");
            $("#My_name").text(mymynameA);
        }, 100);
    });


    $("#my_t_tou").hover(
        function () {
            $("#Hphh_tou").addClass("grayBg");
            $("#Hp_A_tou").addClass("shanshan");
            $("#progressbar_A_tou").addClass("shanshan");
        },
        function () {
            $("#Hphh_tou").removeClass("grayBg");
            $("#Hp_A_tou").removeClass("shanshan");
            $("#progressbar_A_tou").removeClass("shanshan");
        }
    );
    $("#my_t_xiong").hover(
        function () {
            $("#Hphh_xiong").addClass("grayBg");
            $("#Hp_A_xiong").addClass("shanshan");
            $("#progressbar_A_xiong").addClass("shanshan");
        },
        function () {
            $("#Hphh_xiong").removeClass("grayBg");
            $("#Hp_A_xiong").removeClass("shanshan");
            $("#progressbar_A_xiong").removeClass("shanshan");
        }
    );
    $("#my_t_fu").hover(
        function () {
            $("#Hphh_fu").addClass("grayBg");
            $("#Hp_A_fu").addClass("shanshan");
            $("#progressbar_A_fu").addClass("shanshan");
        },
        function () {
            $("#Hphh_fu").removeClass("grayBg");
            $("#Hp_A_fu").removeClass("shanshan");
            $("#progressbar_A_fu").removeClass("shanshan");
        }
    );
    $("#my_t_yaoL").hover(
        function () {
            $("#Hphh_yao").addClass("grayBg");
            $("#Hp_A_yaoL").addClass("shanshan");
            $("#progressbar_A_yaoL").addClass("shanshan");
        },
        function () {
            $("#Hphh_yao").removeClass("grayBg");
            $("#Hp_A_yaoL").removeClass("shanshan");
            $("#progressbar_A_yaoL").removeClass("shanshan");
        }
    );
    $("#my_t_yaoR").hover(
        function () {
            $("#Hphh_yao").addClass("grayBg");
            $("#Hp_A_yaoR").addClass("shanshan");
            $("#progressbar_A_yaoR").addClass("shanshan");
        },
        function () {
            $("#Hphh_yao").removeClass("grayBg");
            $("#Hp_A_yaoR").removeClass("shanshan");
            $("#progressbar_A_yaoR").removeClass("shanshan");
        }
    );
    $("#my_t_jianL").hover(
        function () {
            $("#Hphh_jian").addClass("grayBg");
            $("#Hp_A_jianL").addClass("shanshan");
            $("#progressbar_A_jianL").addClass("shanshan");
        },
        function () {
            $("#Hphh_jian").removeClass("grayBg");
            $("#Hp_A_jianL").removeClass("shanshan");
            $("#progressbar_A_jianL").removeClass("shanshan");
        }
    );
    $("#my_t_jianR").hover(
        function () {
            $("#Hphh_jian").addClass("grayBg");
            $("#Hp_A_jianR").addClass("shanshan");
            $("#progressbar_A_jianR").addClass("shanshan");
        },
        function () {
            $("#Hphh_jian").removeClass("grayBg");
            $("#Hp_A_jianR").removeClass("shanshan");
            $("#progressbar_A_jianR").removeClass("shanshan");
        }
    );
    $("#my_t_shangbiL").hover(
        function () {
            $("#Hphh_shangbi").addClass("grayBg");
            $("#Hp_A_shangbiL").addClass("shanshan");
            $("#progressbar_A_shangbiL").addClass("shanshan");
        },
        function () {
            $("#Hphh_shangbi").removeClass("grayBg");
            $("#Hp_A_shangbiL").removeClass("shanshan");
            $("#progressbar_A_shangbiL").removeClass("shanshan");
        }
    );
    $("#my_t_shangbiR").hover(
        function () {
            $("#Hphh_shangbi").addClass("grayBg");
            $("#Hp_A_shangbiR").addClass("shanshan");
            $("#progressbar_A_shangbiR").addClass("shanshan");
        },
        function () {
            $("#Hphh_shangbi").removeClass("grayBg");
            $("#Hp_A_shangbiR").removeClass("shanshan");
            $("#progressbar_A_shangbiR").removeClass("shanshan");
        }
    );
    $("#my_t_zhouL").hover(
        function () {
            $("#Hphh_zhou").addClass("grayBg");
            $("#Hp_A_zhouL").addClass("shanshan");
            $("#progressbar_A_zhouL").addClass("shanshan");
        },
        function () {
            $("#Hphh_zhou").removeClass("grayBg");
            $("#Hp_A_zhouL").removeClass("shanshan");
            $("#progressbar_A_zhouL").removeClass("shanshan");
        }
    );
    $("#my_t_zhouR").hover(
        function () {
            $("#Hphh_zhou").addClass("grayBg");
            $("#Hp_A_zhouR").addClass("shanshan");
            $("#progressbar_A_zhouR").addClass("shanshan");
        },
        function () {
            $("#Hphh_zhou").removeClass("grayBg");
            $("#Hp_A_zhouR").removeClass("shanshan");
            $("#progressbar_A_zhouR").removeClass("shanshan");
        }
    );
    $("#my_t_qianbiL").hover(
        function () {
            $("#Hphh_qianbi").addClass("grayBg");
            $("#Hp_A_qianbiL").addClass("shanshan");
            $("#progressbar_A_qianbiL").addClass("shanshan");
        },
        function () {
            $("#Hphh_qianbi").removeClass("grayBg");
            $("#Hp_A_qianbiL").removeClass("shanshan");
            $("#progressbar_A_qianbiL").removeClass("shanshan");
        }
    );
    $("#my_t_qianbiR").hover(
        function () {
            $("#Hphh_qianbi").addClass("grayBg");
            $("#Hp_A_qianbiR").addClass("shanshan");
            $("#progressbar_A_qianbiR").addClass("shanshan");
        },
        function () {
            $("#Hphh_qianbi").removeClass("grayBg");
            $("#Hp_A_qianbiR").removeClass("shanshan");
            $("#progressbar_A_qianbiR").removeClass("shanshan");
        }
    );
    $("#my_t_shouwanL").hover(
        function () {
            $("#Hphh_shouwan").addClass("grayBg");
            $("#Hp_A_shouwanL").addClass("shanshan");
            $("#progressbar_A_shouwanL").addClass("shanshan");
        },
        function () {
            $("#Hphh_shouwan").removeClass("grayBg");
            $("#Hp_A_shouwanL").removeClass("shanshan");
            $("#progressbar_A_shouwanL").removeClass("shanshan");
        }
    );
    $("#my_t_shouwanR").hover(
        function () {
            $("#Hphh_shouwan").addClass("grayBg");
            $("#Hp_A_shouwanR").addClass("shanshan");
            $("#progressbar_A_shouwanR").addClass("shanshan");
        },
        function () {
            $("#Hphh_shouwan").removeClass("grayBg");
            $("#Hp_A_shouwanR").removeClass("shanshan");
            $("#progressbar_A_shouwanR").removeClass("shanshan");
        }
    );
    $("#my_t_datuiL").hover(
        function () {
            $("#Hphh_datui").addClass("grayBg");
            $("#Hp_A_datuiL").addClass("shanshan");
            $("#progressbar_A_datuiL").addClass("shanshan");
        },
        function () {
            $("#Hphh_datui").removeClass("grayBg");
            $("#Hp_A_datuiL").removeClass("shanshan");
            $("#progressbar_A_datuiL").removeClass("shanshan");
        }
    );
    $("#my_t_datuiR").hover(
        function () {
            $("#Hphh_datui").addClass("grayBg");
            $("#Hp_A_datuiR").addClass("shanshan");
            $("#progressbar_A_datuiR").addClass("shanshan");
        },
        function () {
            $("#Hphh_datui").removeClass("grayBg");
            $("#Hp_A_datuiR").removeClass("shanshan");
            $("#progressbar_A_datuiR").removeClass("shanshan");
        }
    );
    $("#my_t_xiL").hover(
        function () {
            $("#Hphh_xi").addClass("grayBg");
            $("#Hp_A_xiL").addClass("shanshan");
            $("#progressbar_A_xiL").addClass("shanshan");
        },
        function () {
            $("#Hphh_xi").removeClass("grayBg");
            $("#Hp_A_xiL").removeClass("shanshan");
            $("#progressbar_A_xiL").removeClass("shanshan");
        }
    );
    $("#my_t_xiR").hover(
        function () {
            $("#Hphh_xi").addClass("grayBg");
            $("#Hp_A_xiR").addClass("shanshan");
            $("#progressbar_A_xiR").addClass("shanshan");
        },
        function () {
            $("#Hphh_xi").removeClass("grayBg");
            $("#Hp_A_xiR").removeClass("shanshan");
            $("#progressbar_A_xiR").removeClass("shanshan");
        }
    );
    $("#my_t_xiaotuiL").hover(
        function () {
            $("#Hphh_xiaotui").addClass("grayBg");
            $("#Hp_A_xiaotuiL").addClass("shanshan");
            $("#progressbar_A_xiaotuiL").addClass("shanshan");
        },
        function () {
            $("#Hphh_xiaotui").removeClass("grayBg");
            $("#Hp_A_xiaotuiL").removeClass("shanshan");
            $("#progressbar_A_xiaotuiL").removeClass("shanshan");
        }
    );
    $("#my_t_xiaotuiR").hover(
        function () {
            $("#Hphh_xiaotui").addClass("grayBg");
            $("#Hp_A_xiaotuiR").addClass("shanshan");
            $("#progressbar_A_xiaotuiR").addClass("shanshan");
        },
        function () {
            $("#Hphh_xiaotui").removeClass("grayBg");
            $("#Hp_A_xiaotuiR").removeClass("shanshan");
            $("#progressbar_A_xiaotuiR").removeClass("shanshan");
        }
    );
    $("#my_t_huaiL").hover(
        function () {
            $("#Hphh_huai").addClass("grayBg");
            $("#Hp_A_huaiL").addClass("shanshan");
            $("#progressbar_A_huaiL").addClass("shanshan");
        },
        function () {
            $("#Hphh_huai").removeClass("grayBg");
            $("#Hp_A_huaiL").removeClass("shanshan");
            $("#progressbar_A_huaiL").removeClass("shanshan");
        }
    );
    $("#my_t_huaiR").hover(
        function () {
            $("#Hphh_huai").addClass("grayBg");
            $("#Hp_A_huaiR").addClass("shanshan");
            $("#progressbar_A_huaiR").addClass("shanshan");
        },
        function () {
            $("#Hphh_huai").removeClass("grayBg");
            $("#Hp_A_huaiR").removeClass("shanshan");
            $("#progressbar_A_huaiR").removeClass("shanshan");
        }
    );

    $("#he_t_tou").hover(
        function () {
            $("#Hphe_tou").addClass("grayBg");
            $("#Hp_B_tou").addClass("shanshan");
            $("#progressbar_B_tou").addClass("shanshan");
        },
        function () {
            $("#Hphe_tou").removeClass("grayBg");
            $("#Hp_B_tou").removeClass("shanshan");
            $("#progressbar_B_tou").removeClass("shanshan");
        }
    );
    $("#he_t_xiong").hover(
        function () {
            $("#Hphe_xiong").addClass("grayBg");
            $("#Hp_B_xiong").addClass("shanshan");
            $("#progressbar_B_xiong").addClass("shanshan");
        },
        function () {
            $("#Hphe_xiong").removeClass("grayBg");
            $("#Hp_B_xiong").removeClass("shanshan");
            $("#progressbar_B_xiong").removeClass("shanshan");
        }
    );
    $("#he_t_fu").hover(
        function () {
            $("#Hphe_fu").addClass("grayBg");
            $("#Hp_B_fu").addClass("shanshan");
            $("#progressbar_B_fu").addClass("shanshan");
        },
        function () {
            $("#Hphe_fu").removeClass("grayBg");
            $("#Hp_B_fu").removeClass("shanshan");
            $("#progressbar_B_fu").removeClass("shanshan");
        }
    );
    $("#he_t_yaoL").hover(
        function () {
            $("#Hphe_yao").addClass("grayBg");
            $("#Hp_B_yaoL").addClass("shanshan");
            $("#progressbar_B_yaoL").addClass("shanshan");
        },
        function () {
            $("#Hphe_yao").removeClass("grayBg");
            $("#Hp_B_yaoL").removeClass("shanshan");
            $("#progressbar_B_yaoL").removeClass("shanshan");
        }
    );
    $("#he_t_yaoR").hover(
        function () {
            $("#Hphe_yao").addClass("grayBg");
            $("#Hp_B_yaoR").addClass("shanshan");
            $("#progressbar_B_yaoR").addClass("shanshan");
        },
        function () {
            $("#Hphe_yao").removeClass("grayBg");
            $("#Hp_B_yaoR").removeClass("shanshan");
            $("#progressbar_B_yaoR").removeClass("shanshan");
        }
    );
    $("#he_t_jianL").hover(
        function () {
            $("#Hphe_jian").addClass("grayBg");
            $("#Hp_B_jianL").addClass("shanshan");
            $("#progressbar_B_jianL").addClass("shanshan");
        },
        function () {
            $("#Hphe_jian").removeClass("grayBg");
            $("#Hp_B_jianL").removeClass("shanshan");
            $("#progressbar_B_jianL").removeClass("shanshan");
        }
    );
    $("#he_t_jianR").hover(
        function () {
            $("#Hphe_jian").addClass("grayBg");
            $("#Hp_B_jianR").addClass("shanshan");
            $("#progressbar_B_jianR").addClass("shanshan");
        },
        function () {
            $("#Hphe_jian").removeClass("grayBg");
            $("#Hp_B_jianR").removeClass("shanshan");
            $("#progressbar_B_jianR").removeClass("shanshan");
        }
    );
    $("#he_t_shangbiL").hover(
        function () {
            $("#Hphe_shangbi").addClass("grayBg");
            $("#Hp_B_shangbiL").addClass("shanshan");
            $("#progressbar_B_shangbiL").addClass("shanshan");
        },
        function () {
            $("#Hphe_shangbi").removeClass("grayBg");
            $("#Hp_B_shangbiL").removeClass("shanshan");
            $("#progressbar_B_shangbiL").removeClass("shanshan");
        }
    );
    $("#he_t_shangbiR").hover(
        function () {
            $("#Hphe_shangbi").addClass("grayBg");
            $("#Hp_B_shangbiR").addClass("shanshan");
            $("#progressbar_B_shangbiR").addClass("shanshan");
        },
        function () {
            $("#Hphe_shangbi").removeClass("grayBg");
            $("#Hp_B_shangbiR").removeClass("shanshan");
            $("#progressbar_B_shangbiR").removeClass("shanshan");
        }
    );
    $("#he_t_zhouL").hover(
        function () {
            $("#Hphe_zhou").addClass("grayBg");
            $("#Hp_B_zhouL").addClass("shanshan");
            $("#progressbar_B_zhouL").addClass("shanshan");
        },
        function () {
            $("#Hphe_zhou").removeClass("grayBg");
            $("#Hp_B_zhouL").removeClass("shanshan");
            $("#progressbar_B_zhouL").removeClass("shanshan");
        }
    );
    $("#he_t_zhouR").hover(
        function () {
            $("#Hphe_zhou").addClass("grayBg");
            $("#Hp_B_zhouR").addClass("shanshan");
            $("#progressbar_B_zhouR").addClass("shanshan");
        },
        function () {
            $("#Hphe_zhou").removeClass("grayBg");
            $("#Hp_B_zhouR").removeClass("shanshan");
            $("#progressbar_B_zhouR").removeClass("shanshan");
        }
    );
    $("#he_t_qianbiL").hover(
        function () {
            $("#Hphe_qianbi").addClass("grayBg");
            $("#Hp_B_qianbiL").addClass("shanshan");
            $("#progressbar_B_qianbiL").addClass("shanshan");
        },
        function () {
            $("#Hphe_qianbi").removeClass("grayBg");
            $("#Hp_B_qianbiL").removeClass("shanshan");
            $("#progressbar_B_qianbiL").removeClass("shanshan");
        }
    );
    $("#he_t_qianbiR").hover(
        function () {
            $("#Hphe_qianbi").addClass("grayBg");
            $("#Hp_B_qianbiR").addClass("shanshan");
            $("#progressbar_B_qianbiR").addClass("shanshan");
        },
        function () {
            $("#Hphe_qianbi").removeClass("grayBg");
            $("#Hp_B_qianbiR").removeClass("shanshan");
            $("#progressbar_B_qianbiR").removeClass("shanshan");
        }
    );
    $("#he_t_shouwanL").hover(
        function () {
            $("#Hphe_shouwan").addClass("grayBg");
            $("#Hp_B_shouwanL").addClass("shanshan");
            $("#progressbar_B_shouwanL").addClass("shanshan");
        },
        function () {
            $("#Hphe_shouwan").removeClass("grayBg");
            $("#Hp_B_shouwanL").removeClass("shanshan");
            $("#progressbar_B_shouwanL").removeClass("shanshan");
        }
    );
    $("#he_t_shouwanR").hover(
        function () {
            $("#Hphe_shouwan").addClass("grayBg");
            $("#Hp_B_shouwanR").addClass("shanshan");
            $("#progressbar_B_shouwanR").addClass("shanshan");
        },
        function () {
            $("#Hphe_shouwan").removeClass("grayBg");
            $("#Hp_B_shouwanR").removeClass("shanshan");
            $("#progressbar_B_shouwanR").removeClass("shanshan");
        }
    );
    $("#he_t_datuiL").hover(
        function () {
            $("#Hphe_datui").addClass("grayBg");
            $("#Hp_B_datuiL").addClass("shanshan");
            $("#progressbar_B_datuiL").addClass("shanshan");
        },
        function () {
            $("#Hphe_datui").removeClass("grayBg");
            $("#Hp_B_datuiL").removeClass("shanshan");
            $("#progressbar_B_datuiL").removeClass("shanshan");
        }
    );
    $("#he_t_datuiR").hover(
        function () {
            $("#Hphe_datui").addClass("grayBg");
            $("#Hp_B_datuiR").addClass("shanshan");
            $("#progressbar_B_datuiR").addClass("shanshan");
        },
        function () {
            $("#Hphe_datui").removeClass("grayBg");
            $("#Hp_B_datuiR").removeClass("shanshan");
            $("#progressbar_B_datuiR").removeClass("shanshan");
        }
    );
    $("#he_t_xiL").hover(
        function () {
            $("#Hphe_xi").addClass("grayBg");
            $("#Hp_B_xiL").addClass("shanshan");
            $("#progressbar_B_xiL").addClass("shanshan");
        },
        function () {
            $("#Hphe_xi").removeClass("grayBg");
            $("#Hp_B_xiL").removeClass("shanshan");
            $("#progressbar_B_xiL").removeClass("shanshan");
        }
    );
    $("#he_t_xiR").hover(
        function () {
            $("#Hphe_xi").addClass("grayBg");
            $("#Hp_B_xiR").addClass("shanshan");
            $("#progressbar_B_xiR").addClass("shanshan");
        },
        function () {
            $("#Hphe_xi").removeClass("grayBg");
            $("#Hp_B_xiR").removeClass("shanshan");
            $("#progressbar_B_xiR").removeClass("shanshan");
        }
    );
    $("#he_t_xiaotuiL").hover(
        function () {
            $("#Hphe_xiaotui").addClass("grayBg");
            $("#Hp_B_xiaotuiL").addClass("shanshan");
            $("#progressbar_B_xiaotuiL").addClass("shanshan");
        },
        function () {
            $("#Hphe_xiaotui").removeClass("grayBg");
            $("#Hp_B_xiaotuiL").removeClass("shanshan");
            $("#progressbar_B_xiaotuiL").removeClass("shanshan");
        }
    );
    $("#he_t_xiaotuiR").hover(
        function () {
            $("#Hphe_xiaotui").addClass("grayBg");
            $("#Hp_B_xiaotuiR").addClass("shanshan");
            $("#progressbar_B_xiaotuiR").addClass("shanshan");
        },
        function () {
            $("#Hphe_xiaotui").removeClass("grayBg");
            $("#Hp_B_xiaotuiR").removeClass("shanshan");
            $("#progressbar_B_xiaotuiR").removeClass("shanshan");
        }
    );
    $("#he_t_huaiL").hover(
        function () {
            $("#Hphe_huai").addClass("grayBg");
            $("#Hp_B_huaiL").addClass("shanshan");
            $("#progressbar_B_huaiL").addClass("shanshan");
        },
        function () {
            $("#Hphe_huai").removeClass("grayBg");
            $("#Hp_B_huaiL").removeClass("shanshan");
            $("#progressbar_B_huaiL").removeClass("shanshan");
        }
    );
    $("#he_t_huaiR").hover(
        function () {
            $("#Hphe_huai").addClass("grayBg");
            $("#Hp_B_huaiR").addClass("shanshan");
            $("#progressbar_B_huaiR").addClass("shanshan");
        },
        function () {
            $("#Hphe_huai").removeClass("grayBg");
            $("#Hp_B_huaiR").removeClass("shanshan");
            $("#progressbar_B_huaiR").removeClass("shanshan");
        }
    );


    $("#Hp_A_tou").hover(
        function () {
            $("#Hp_A_tou").addClass("shanshan");
            $("#progressbar_A_tou").addClass("shanshan");
            $("#my_t_tou").addClass("shanshan");
        },
        function () {
            $("#Hp_A_tou").removeClass("shanshan");
            $("#progressbar_A_tou").removeClass("shanshan");
            $("#my_t_tou").removeClass("shanshan");
        }
    );
    $("#Hp_A_xiong").hover(
        function () {
            $("#Hp_A_xiong").addClass("shanshan");
            $("#my_t_xiong").addClass("shanshan");
            $("#progressbar_A_xiong").addClass("shanshan");
        },
        function () {
            $("#Hp_A_xiong").removeClass("shanshan");
            $("#my_t_xiong").removeClass("shanshan");
            $("#progressbar_A_xiong").removeClass("shanshan");
        }
    );
    $("#Hp_A_fu").hover(
        function () {
            $("#my_t_fu").addClass("shanshan");
            $("#Hp_A_fu").addClass("shanshan");
            $("#progressbar_A_fu").addClass("shanshan");
        },
        function () {
            $("#my_t_fu").removeClass("shanshan");
            $("#Hp_A_fu").removeClass("shanshan");
            $("#progressbar_A_fu").removeClass("shanshan");
        }
    );
    $("#Hp_A_yaoL").hover(
        function () {
            $("#Hp_A_yaoL").addClass("shanshan");
            $("#my_t_yaoL").addClass("shanshan");
            $("#progressbar_A_yaoL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_yaoL").removeClass("shanshan");
            $("#my_t_yaoL").removeClass("shanshan");
            $("#progressbar_A_yaoL").removeClass("shanshan");
        }
    );
    $("#Hp_A_yaoR").hover(
        function () {
            $("#Hp_A_yaoR").addClass("shanshan");
            $("#my_t_yaoR").addClass("shanshan");
            $("#progressbar_A_yaoR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_yaoR").removeClass("shanshan");
            $("#my_t_yaoR").removeClass("shanshan");
            $("#progressbar_A_yaoR").removeClass("shanshan");
        }
    );
    $("#Hp_A_jianL").hover(
        function () {
            $("#Hp_A_jianL").addClass("shanshan");
            $("#my_t_jianL").addClass("shanshan");
            $("#progressbar_A_jianL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_jianL").removeClass("shanshan");
            $("#my_t_jianL").removeClass("shanshan");
            $("#progressbar_A_jianL").removeClass("shanshan");
        }
    );
    $("#Hp_A_jianR").hover(
        function () {
            $("#Hp_A_jianR").addClass("shanshan");
            $("#my_t_jianR").addClass("shanshan");
            $("#progressbar_A_jianR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_jianR").removeClass("shanshan");
            $("#my_t_jianR").removeClass("shanshan");
            $("#progressbar_A_jianR").removeClass("shanshan");
        }
    );
    $("#Hp_A_shangbiL").hover(
        function () {
            $("#Hp_A_shangbiL").addClass("shanshan");
            $("#my_t_shangbiL").addClass("shanshan");
            $("#progressbar_A_shangbiL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_shangbiL").removeClass("shanshan");
            $("#my_t_shangbiL").removeClass("shanshan");
            $("#progressbar_A_shangbiL").removeClass("shanshan");
        }
    );
    $("#Hp_A_shangbiR").hover(
        function () {
            $("#Hp_A_shangbiR").addClass("shanshan");
            $("#my_t_shangbiR").addClass("shanshan");
            $("#progressbar_A_shangbiR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_shangbiR").removeClass("shanshan");
            $("#my_t_shangbiR").removeClass("shanshan");
            $("#progressbar_A_shangbiR").removeClass("shanshan");
        }
    );
    $("#Hp_A_zhouL").hover(
        function () {
            $("#Hp_A_zhouL").addClass("shanshan");
            $("#my_t_zhouL").addClass("shanshan");
            $("#progressbar_A_zhouL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_zhouL").removeClass("shanshan");
            $("#my_t_zhouL").removeClass("shanshan");
            $("#progressbar_A_zhouL").removeClass("shanshan");
        }
    );
    $("#Hp_A_zhouR").hover(
        function () {
            $("#Hp_A_zhouR").addClass("shanshan");
            $("#my_t_zhouR").addClass("shanshan");
            $("#progressbar_A_zhouR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_zhouR").removeClass("shanshan");
            $("#my_t_zhouR").removeClass("shanshan");
            $("#progressbar_A_zhouR").removeClass("shanshan");
        }
    );
    $("#Hp_A_qianbiL").hover(
        function () {
            $("#Hp_A_qianbiL").addClass("shanshan");
            $("#my_t_qianbiL").addClass("shanshan");
            $("#progressbar_A_qianbiL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_qianbiL").removeClass("shanshan");
            $("#my_t_qianbiL").removeClass("shanshan");
            $("#progressbar_A_qianbiL").removeClass("shanshan");
        }
    );
    $("#Hp_A_qianbiR").hover(
        function () {
            $("#Hp_A_qianbiR").addClass("shanshan");
            $("#my_t_qianbiR").addClass("shanshan");
            $("#progressbar_A_qianbiR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_qianbiR").removeClass("shanshan");
            $("#my_t_qianbiR").removeClass("shanshan");
            $("#progressbar_A_qianbiR").removeClass("shanshan");
        }
    );
    $("#Hp_A_shouwanL").hover(
        function () {
            $("#Hp_A_shouwanL").addClass("shanshan");
            $("#my_t_shouwanL").addClass("shanshan");
            $("#progressbar_A_shouwanL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_shouwanL").removeClass("shanshan");
            $("#my_t_shouwanL").removeClass("shanshan");
            $("#progressbar_A_shouwanL").removeClass("shanshan");
        }
    );
    $("#Hp_A_shouwanR").hover(
        function () {
            $("#Hp_A_shouwanR").addClass("shanshan");
            $("#my_t_shouwanR").addClass("shanshan");
            $("#progressbar_A_shouwanR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_shouwanR").removeClass("shanshan");
            $("#my_t_shouwanR").removeClass("shanshan");
            $("#progressbar_A_shouwanR").removeClass("shanshan");
        }
    );
    $("#Hp_A_datuiL").hover(
        function () {
            $("#Hp_A_datuiL").addClass("shanshan");
            $("#my_t_datuiL").addClass("shanshan");
            $("#progressbar_A_datuiL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_datuiL").removeClass("shanshan");
            $("#my_t_datuiL").removeClass("shanshan");
            $("#progressbar_A_datuiL").removeClass("shanshan");
        }
    );
    $("#Hp_A_datuiR").hover(
        function () {
            $("#Hp_A_datuiR").addClass("shanshan");
            $("#my_t_datuiR").addClass("shanshan");
            $("#progressbar_A_datuiR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_datuiR").removeClass("shanshan");
            $("#my_t_datuiR").removeClass("shanshan");
            $("#progressbar_A_datuiR").removeClass("shanshan");
        }
    );
    $("#Hp_A_xiL").hover(
        function () {
            $("#Hp_A_xiL").addClass("shanshan");
            $("#my_t_xiL").addClass("shanshan");
            $("#progressbar_A_xiL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_xiL").removeClass("shanshan");
            $("#my_t_xiL").removeClass("shanshan");
            $("#progressbar_A_xiL").removeClass("shanshan");
        }
    );
    $("#Hp_A_xiR").hover(
        function () {
            $("#Hp_A_xiR").addClass("shanshan");
            $("#my_t_xiR").addClass("shanshan");
            $("#progressbar_A_xiR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_xiR").removeClass("shanshan");
            $("#my_t_xiR").removeClass("shanshan");
            $("#progressbar_A_xiR").removeClass("shanshan");
        }
    );
    $("#Hp_A_xiaotuiL").hover(
        function () {
            $("#Hp_A_xiaotuiL").addClass("shanshan");
            $("#my_t_xiaotuiL").addClass("shanshan");
            $("#progressbar_A_xiaotuiL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_xiaotuiL").removeClass("shanshan");
            $("#my_t_xiaotuiL").removeClass("shanshan");
            $("#progressbar_A_xiaotuiL").removeClass("shanshan");
        }
    );
    $("#Hp_A_xiaotuiR").hover(
        function () {
            $("#Hp_A_xiaotuiR").addClass("shanshan");
            $("#my_t_xiaotuiR").addClass("shanshan");
            $("#progressbar_A_xiaotuiR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_xiaotuiR").removeClass("shanshan");
            $("#my_t_xiaotuiR").removeClass("shanshan");
            $("#progressbar_A_xiaotuiR").removeClass("shanshan");
        }
    );
    $("#Hp_A_huaiL").hover(
        function () {
            $("#Hp_A_huaiL").addClass("shanshan");
            $("#my_t_huaiL").addClass("shanshan");
            $("#progressbar_A_huaiL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_huaiL").removeClass("shanshan");
            $("#my_t_huaiL").removeClass("shanshan");
            $("#progressbar_A_huaiL").removeClass("shanshan");
        }
    );
    $("#Hp_A_huaiR").hover(
        function () {
            $("#Hp_A_huaiR").addClass("shanshan");
            $("#my_t_huaiR").addClass("shanshan");
            $("#progressbar_A_huaiR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_huaiR").removeClass("shanshan");
            $("#my_t_huaiR").removeClass("shanshan");
            $("#progressbar_A_huaiR").removeClass("shanshan");
        }
    );

    $("#Hp_B_tou").hover(
        function () {
            $("#Hp_B_tou").addClass("shanshan");
            $("#he_t_tou").addClass("shanshan");
            $("#progressbar_B_tou").addClass("shanshan");
        },
        function () {
            $("#Hp_B_tou").removeClass("shanshan");
            $("#he_t_tou").removeClass("shanshan");
            $("#progressbar_B_tou").removeClass("shanshan");
        }
    );
    $("#Hp_B_xiong").hover(
        function () {
            $("#Hp_B_xiong").addClass("shanshan");
            $("#he_t_xiong").addClass("shanshan");
            $("#progressbar_B_xiong").addClass("shanshan");
        },
        function () {
            $("#Hp_B_xiong").removeClass("shanshan");
            $("#he_t_xiong").removeClass("shanshan");
            $("#progressbar_B_xiong").removeClass("shanshan");
        }
    );
    $("#Hp_B_fu").hover(
        function () {
            $("#Hp_B_fu").addClass("shanshan");
            $("#he_t_fu").addClass("shanshan");
            $("#progressbar_B_fu").addClass("shanshan");
        },
        function () {
            $("#Hp_B_fu").removeClass("shanshan");
            $("#he_t_fu").removeClass("shanshan");
            $("#progressbar_B_fu").removeClass("shanshan");
        }
    );
    $("#Hp_B_yaoL").hover(
        function () {
            $("#Hp_B_yaoL").addClass("shanshan");
            $("#he_t_yaoL").addClass("shanshan");
            $("#progressbar_B_yaoL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_yaoL").removeClass("shanshan");
            $("#he_t_yaoL").removeClass("shanshan");
            $("#progressbar_B_yaoL").removeClass("shanshan");
        }
    );
    $("#Hp_B_yaoR").hover(
        function () {
            $("#Hp_B_yaoR").addClass("shanshan");
            $("#he_t_yaoR").addClass("shanshan");
            $("#progressbar_B_yaoR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_yaoR").removeClass("shanshan");
            $("#he_t_yaoR").removeClass("shanshan");
            $("#progressbar_B_yaoR").removeClass("shanshan");
        }
    );
    $("#Hp_B_jianL").hover(
        function () {
            $("#Hp_B_jianL").addClass("shanshan");
            $("#he_t_jianL").addClass("shanshan");
            $("#progressbar_B_jianL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_jianL").removeClass("shanshan");
            $("#he_t_jianL").removeClass("shanshan");
            $("#progressbar_B_jianL").removeClass("shanshan");
        }
    );
    $("#Hp_B_jianR").hover(
        function () {
            $("#Hp_B_jianR").addClass("shanshan");
            $("#he_t_jianR").addClass("shanshan");
            $("#progressbar_B_jianR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_jianR").removeClass("shanshan");
            $("#he_t_jianR").removeClass("shanshan");
            $("#progressbar_B_jianR").removeClass("shanshan");
        }
    );
    $("#Hp_B_shangbiL").hover(
        function () {
            $("#Hp_B_shangbiL").addClass("shanshan");
            $("#he_t_shangbiL").addClass("shanshan");
            $("#progressbar_B_shangbiL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_shangbiL").removeClass("shanshan");
            $("#he_t_shangbiL").removeClass("shanshan");
            $("#progressbar_B_shangbiL").removeClass("shanshan");
        }
    );
    $("#Hp_B_shangbiR").hover(
        function () {
            $("#Hp_B_shangbiR").addClass("shanshan");
            $("#he_t_shangbiR").addClass("shanshan");
            $("#progressbar_B_shangbiR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_shangbiR").removeClass("shanshan");
            $("#he_t_shangbiR").removeClass("shanshan");
            $("#progressbar_B_shangbiR").removeClass("shanshan");
        }
    );
    $("#Hp_B_zhouL").hover(
        function () {
            $("#Hp_B_zhouL").addClass("shanshan");
            $("#he_t_zhouL").addClass("shanshan");
            $("#progressbar_B_zhouL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_zhouL").removeClass("shanshan");
            $("#he_t_zhouL").removeClass("shanshan");
            $("#progressbar_B_zhouL").removeClass("shanshan");
        }
    );
    $("#Hp_B_zhouR").hover(
        function () {
            $("#Hp_B_zhouR").addClass("shanshan");
            $("#he_t_zhouR").addClass("shanshan");
            $("#progressbar_B_zhouR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_zhouR").removeClass("shanshan");
            $("#he_t_zhouR").removeClass("shanshan");
            $("#progressbar_B_zhouR").removeClass("shanshan");
        }
    );
    $("#Hp_B_qianbiL").hover(
        function () {
            $("#Hp_B_qianbiL").addClass("shanshan");
            $("#he_t_qianbiL").addClass("shanshan");
            $("#progressbar_B_qianbiL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_qianbiL").removeClass("shanshan");
            $("#he_t_qianbiL").removeClass("shanshan");
            $("#progressbar_B_qianbiL").removeClass("shanshan");
        }
    );
    $("#Hp_B_qianbiR").hover(
        function () {
            $("#Hp_B_qianbiR").addClass("shanshan");
            $("#he_t_qianbiR").addClass("shanshan");
            $("#progressbar_B_qianbiR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_qianbiR").removeClass("shanshan");
            $("#he_t_qianbiR").removeClass("shanshan");
            $("#progressbar_B_qianbiR").removeClass("shanshan");
        }
    );
    $("#Hp_B_shouwanL").hover(
        function () {
            $("#Hp_B_shouwanL").addClass("shanshan");
            $("#he_t_shouwanL").addClass("shanshan");
            $("#progressbar_B_shouwanL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_shouwanL").removeClass("shanshan");
            $("#he_t_shouwanL").removeClass("shanshan");
            $("#progressbar_B_shouwanL").removeClass("shanshan");
        }
    );
    $("#Hp_B_shouwanR").hover(
        function () {
            $("#Hp_B_shouwanR").addClass("shanshan");
            $("#he_t_shouwanR").addClass("shanshan");
            $("#progressbar_B_shouwanR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_shouwanR").removeClass("shanshan");
            $("#he_t_shouwanR").removeClass("shanshan");
            $("#progressbar_B_shouwanR").removeClass("shanshan");
        }
    );
    $("#Hp_B_datuiL").hover(
        function () {
            $("#Hp_B_datuiL").addClass("shanshan");
            $("#he_t_datuiL").addClass("shanshan");
            $("#progressbar_B_datuiL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_datuiL").removeClass("shanshan");
            $("#he_t_datuiL").removeClass("shanshan");
            $("#progressbar_B_datuiL").removeClass("shanshan");
        }
    );
    $("#Hp_B_datuiR").hover(
        function () {
            $("#Hp_B_datuiR").addClass("shanshan");
            $("#he_t_datuiR").addClass("shanshan");
            $("#progressbar_B_datuiR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_datuiR").removeClass("shanshan");
            $("#he_t_datuiR").removeClass("shanshan");
            $("#progressbar_B_datuiR").removeClass("shanshan");
        }
    );
    $("#Hp_B_xiL").hover(
        function () {
            $("#Hp_B_xiL").addClass("shanshan");
            $("#he_t_xiL").addClass("shanshan");
            $("#progressbar_B_xiL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_xiL").removeClass("shanshan");
            $("#he_t_xiL").removeClass("shanshan");
            $("#progressbar_B_xiL").removeClass("shanshan");
        }
    );
    $("#Hp_B_xiR").hover(
        function () {
            $("#Hp_B_xiR").addClass("shanshan");
            $("#he_t_xiR").addClass("shanshan");
            $("#progressbar_B_xiR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_xiR").removeClass("shanshan");
            $("#he_t_xiR").removeClass("shanshan");
            $("#progressbar_B_xiR").removeClass("shanshan");
        }
    );
    $("#Hp_B_xiaotuiL").hover(
        function () {
            $("#Hp_B_xiaotuiL").addClass("shanshan");
            $("#he_t_xiaotuiL").addClass("shanshan");
            $("#progressbar_B_xiaotuiL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_xiaotuiL").removeClass("shanshan");
            $("#he_t_xiaotuiL").removeClass("shanshan");
            $("#progressbar_B_xiaotuiL").removeClass("shanshan");
        }
    );
    $("#Hp_B_xiaotuiR").hover(
        function () {
            $("#Hp_B_xiaotuiR").addClass("shanshan");
            $("#he_t_xiaotuiR").addClass("shanshan");
            $("#progressbar_B_xiaotuiR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_xiaotuiR").removeClass("shanshan");
            $("#he_t_xiaotuiR").removeClass("shanshan");
            $("#progressbar_B_xiaotuiR").removeClass("shanshan");
        }
    );
    $("#Hp_B_huaiL").hover(
        function () {
            $("#Hp_B_huaiL").addClass("shanshan");
            $("#he_t_huaiL").addClass("shanshan");
            $("#progressbar_B_huaiL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_huaiL").removeClass("shanshan");
            $("#he_t_huaiL").removeClass("shanshan");
            $("#progressbar_B_huaiL").removeClass("shanshan");
        }
    );
    $("#Hp_B_huaiR").hover(
        function () {
            $("#Hp_B_huaiR").addClass("shanshan");
            $("#he_t_huaiR").addClass("shanshan");
            $("#progressbar_B_huaiR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_huaiR").removeClass("shanshan");
            $("#he_t_huaiR").removeClass("shanshan");
            $("#progressbar_B_huaiR").removeClass("shanshan");
        }
    );


    $("#progressbar_A_tou").hover(
        function () {
            $("#Hp_A_tou").addClass("shanshan");
            $("#progressbar_A_tou").addClass("shanshan");
            $("#my_t_tou").addClass("shanshan");
        },
        function () {
            $("#Hp_A_tou").removeClass("shanshan");
            $("#progressbar_A_tou").removeClass("shanshan");
            $("#my_t_tou").removeClass("shanshan");
        }
    );
    $("#progressbar_A_xiong").hover(
        function () {
            $("#Hp_A_xiong").addClass("shanshan");
            $("#my_t_xiong").addClass("shanshan");
            $("#progressbar_A_xiong").addClass("shanshan");
        },
        function () {
            $("#Hp_A_xiong").removeClass("shanshan");
            $("#my_t_xiong").removeClass("shanshan");
            $("#progressbar_A_xiong").removeClass("shanshan");
        }
    );
    $("#progressbar_A_fu").hover(
        function () {
            $("#my_t_fu").addClass("shanshan");
            $("#Hp_A_fu").addClass("shanshan");
            $("#progressbar_A_fu").addClass("shanshan");
        },
        function () {
            $("#my_t_fu").removeClass("shanshan");
            $("#Hp_A_fu").removeClass("shanshan");
            $("#progressbar_A_fu").removeClass("shanshan");
        }
    );
    $("#progressbar_A_yaoL").hover(
        function () {
            $("#Hp_A_yaoL").addClass("shanshan");
            $("#my_t_yaoL").addClass("shanshan");
            $("#progressbar_A_yaoL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_yaoL").removeClass("shanshan");
            $("#my_t_yaoL").removeClass("shanshan");
            $("#progressbar_A_yaoL").removeClass("shanshan");
        }
    );
    $("#progressbar_A_yaoR").hover(
        function () {
            $("#Hp_A_yaoR").addClass("shanshan");
            $("#my_t_yaoR").addClass("shanshan");
            $("#progressbar_A_yaoR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_yaoR").removeClass("shanshan");
            $("#my_t_yaoR").removeClass("shanshan");
            $("#progressbar_A_yaoR").removeClass("shanshan");
        }
    );
    $("#progressbar_A_jianL").hover(
        function () {
            $("#Hp_A_jianL").addClass("shanshan");
            $("#my_t_jianL").addClass("shanshan");
            $("#progressbar_A_jianL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_jianL").removeClass("shanshan");
            $("#my_t_jianL").removeClass("shanshan");
            $("#progressbar_A_jianL").removeClass("shanshan");
        }
    );
    $("#progressbar_A_jianR").hover(
        function () {
            $("#Hp_A_jianR").addClass("shanshan");
            $("#my_t_jianR").addClass("shanshan");
            $("#progressbar_A_jianR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_jianR").removeClass("shanshan");
            $("#my_t_jianR").removeClass("shanshan");
            $("#progressbar_A_jianR").removeClass("shanshan");
        }
    );
    $("#progressbar_A_shangbiL").hover(
        function () {
            $("#Hp_A_shangbiL").addClass("shanshan");
            $("#my_t_shangbiL").addClass("shanshan");
            $("#progressbar_A_shangbiL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_shangbiL").removeClass("shanshan");
            $("#my_t_shangbiL").removeClass("shanshan");
            $("#progressbar_A_shangbiL").removeClass("shanshan");
        }
    );
    $("#progressbar_A_shangbiR").hover(
        function () {
            $("#Hp_A_shangbiR").addClass("shanshan");
            $("#my_t_shangbiR").addClass("shanshan");
            $("#progressbar_A_shangbiR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_shangbiR").removeClass("shanshan");
            $("#my_t_shangbiR").removeClass("shanshan");
            $("#progressbar_A_shangbiR").removeClass("shanshan");
        }
    );
    $("#progressbar_A_zhouL").hover(
        function () {
            $("#Hp_A_zhouL").addClass("shanshan");
            $("#my_t_zhouL").addClass("shanshan");
            $("#progressbar_A_zhouL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_zhouL").removeClass("shanshan");
            $("#my_t_zhouL").removeClass("shanshan");
            $("#progressbar_A_zhouL").removeClass("shanshan");
        }
    );
    $("#progressbar_A_zhouR").hover(
        function () {
            $("#Hp_A_zhouR").addClass("shanshan");
            $("#my_t_zhouR").addClass("shanshan");
            $("#progressbar_A_zhouR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_zhouR").removeClass("shanshan");
            $("#my_t_zhouR").removeClass("shanshan");
            $("#progressbar_A_zhouR").removeClass("shanshan");
        }
    );
    $("#progressbar_A_qianbiL").hover(
        function () {
            $("#Hp_A_qianbiL").addClass("shanshan");
            $("#my_t_qianbiL").addClass("shanshan");
            $("#progressbar_A_qianbiL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_qianbiL").removeClass("shanshan");
            $("#my_t_qianbiL").removeClass("shanshan");
            $("#progressbar_A_qianbiL").removeClass("shanshan");
        }
    );
    $("#progressbar_A_qianbiR").hover(
        function () {
            $("#Hp_A_qianbiR").addClass("shanshan");
            $("#my_t_qianbiR").addClass("shanshan");
            $("#progressbar_A_qianbiR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_qianbiR").removeClass("shanshan");
            $("#my_t_qianbiR").removeClass("shanshan");
            $("#progressbar_A_qianbiR").removeClass("shanshan");
        }
    );
    $("#progressbar_A_shouwanL").hover(
        function () {
            $("#Hp_A_shouwanL").addClass("shanshan");
            $("#my_t_shouwanL").addClass("shanshan");
            $("#progressbar_A_shouwanL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_shouwanL").removeClass("shanshan");
            $("#my_t_shouwanL").removeClass("shanshan");
            $("#progressbar_A_shouwanL").removeClass("shanshan");
        }
    );
    $("#progressbar_A_shouwanR").hover(
        function () {
            $("#Hp_A_shouwanR").addClass("shanshan");
            $("#my_t_shouwanR").addClass("shanshan");
            $("#progressbar_A_shouwanR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_shouwanR").removeClass("shanshan");
            $("#my_t_shouwanR").removeClass("shanshan");
            $("#progressbar_A_shouwanR").removeClass("shanshan");
        }
    );
    $("#progressbar_A_datuiL").hover(
        function () {
            $("#Hp_A_datuiL").addClass("shanshan");
            $("#my_t_datuiL").addClass("shanshan");
            $("#progressbar_A_datuiL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_datuiL").removeClass("shanshan");
            $("#my_t_datuiL").removeClass("shanshan");
            $("#progressbar_A_datuiL").removeClass("shanshan");
        }
    );
    $("#progressbar_A_datuiR").hover(
        function () {
            $("#Hp_A_datuiR").addClass("shanshan");
            $("#my_t_datuiR").addClass("shanshan");
            $("#progressbar_A_datuiR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_datuiR").removeClass("shanshan");
            $("#my_t_datuiR").removeClass("shanshan");
            $("#progressbar_A_datuiR").removeClass("shanshan");
        }
    );
    $("#progressbar_A_xiL").hover(
        function () {
            $("#Hp_A_xiL").addClass("shanshan");
            $("#my_t_xiL").addClass("shanshan");
            $("#progressbar_A_xiL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_xiL").removeClass("shanshan");
            $("#my_t_xiL").removeClass("shanshan");
            $("#progressbar_A_xiL").removeClass("shanshan");
        }
    );
    $("#progressbar_A_xiR").hover(
        function () {
            $("#Hp_A_xiR").addClass("shanshan");
            $("#my_t_xiR").addClass("shanshan");
            $("#progressbar_A_xiR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_xiR").removeClass("shanshan");
            $("#my_t_xiR").removeClass("shanshan");
            $("#progressbar_A_xiR").removeClass("shanshan");
        }
    );
    $("#progressbar_A_xiaotuiL").hover(
        function () {
            $("#Hp_A_xiaotuiL").addClass("shanshan");
            $("#my_t_xiaotuiL").addClass("shanshan");
            $("#progressbar_A_xiaotuiL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_xiaotuiL").removeClass("shanshan");
            $("#my_t_xiaotuiL").removeClass("shanshan");
            $("#progressbar_A_xiaotuiL").removeClass("shanshan");
        }
    );
    $("#progressbar_A_xiaotuiR").hover(
        function () {
            $("#Hp_A_xiaotuiR").addClass("shanshan");
            $("#my_t_xiaotuiR").addClass("shanshan");
            $("#progressbar_A_xiaotuiR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_xiaotuiR").removeClass("shanshan");
            $("#my_t_xiaotuiR").removeClass("shanshan");
            $("#progressbar_A_xiaotuiR").removeClass("shanshan");
        }
    );
    $("#progressbar_A_huaiL").hover(
        function () {
            $("#Hp_A_huaiL").addClass("shanshan");
            $("#my_t_huaiL").addClass("shanshan");
            $("#progressbar_A_huaiL").addClass("shanshan");
        },
        function () {
            $("#Hp_A_huaiL").removeClass("shanshan");
            $("#my_t_huaiL").removeClass("shanshan");
            $("#progressbar_A_huaiL").removeClass("shanshan");
        }
    );
    $("#progressbar_A_huaiR").hover(
        function () {
            $("#Hp_A_huaiR").addClass("shanshan");
            $("#my_t_huaiR").addClass("shanshan");
            $("#progressbar_A_huaiR").addClass("shanshan");
        },
        function () {
            $("#Hp_A_huaiR").removeClass("shanshan");
            $("#my_t_huaiR").removeClass("shanshan");
            $("#progressbar_A_huaiR").removeClass("shanshan");
        }
    );

    $("#progressbar_B_tou").hover(
        function () {
            $("#Hp_B_tou").addClass("shanshan");
            $("#he_t_tou").addClass("shanshan");
            $("#progressbar_B_tou").addClass("shanshan");
        },
        function () {
            $("#Hp_B_tou").removeClass("shanshan");
            $("#he_t_tou").removeClass("shanshan");
            $("#progressbar_B_tou").removeClass("shanshan");
        }
    );
    $("#progressbar_B_xiong").hover(
        function () {
            $("#Hp_B_xiong").addClass("shanshan");
            $("#he_t_xiong").addClass("shanshan");
            $("#progressbar_B_xiong").addClass("shanshan");
        },
        function () {
            $("#Hp_B_xiong").removeClass("shanshan");
            $("#he_t_xiong").removeClass("shanshan");
            $("#progressbar_B_xiong").removeClass("shanshan");
        }
    );
    $("#progressbar_B_fu").hover(
        function () {
            $("#Hp_B_fu").addClass("shanshan");
            $("#he_t_fu").addClass("shanshan");
            $("#progressbar_B_fu").addClass("shanshan");
        },
        function () {
            $("#Hp_B_fu").removeClass("shanshan");
            $("#he_t_fu").removeClass("shanshan");
            $("#progressbar_B_fu").removeClass("shanshan");
        }
    );
    $("#progressbar_B_yaoL").hover(
        function () {
            $("#Hp_B_yaoL").addClass("shanshan");
            $("#he_t_yaoL").addClass("shanshan");
            $("#progressbar_B_yaoL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_yaoL").removeClass("shanshan");
            $("#he_t_yaoL").removeClass("shanshan");
            $("#progressbar_B_yaoL").removeClass("shanshan");
        }
    );
    $("#progressbar_B_yaoR").hover(
        function () {
            $("#Hp_B_yaoR").addClass("shanshan");
            $("#he_t_yaoR").addClass("shanshan");
            $("#progressbar_B_yaoR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_yaoR").removeClass("shanshan");
            $("#he_t_yaoR").removeClass("shanshan");
            $("#progressbar_B_yaoR").removeClass("shanshan");
        }
    );
    $("#progressbar_B_jianL").hover(
        function () {
            $("#Hp_B_jianL").addClass("shanshan");
            $("#he_t_jianL").addClass("shanshan");
            $("#progressbar_B_jianL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_jianL").removeClass("shanshan");
            $("#he_t_jianL").removeClass("shanshan");
            $("#progressbar_B_jianL").removeClass("shanshan");
        }
    );
    $("#progressbar_B_jianR").hover(
        function () {
            $("#Hp_B_jianR").addClass("shanshan");
            $("#he_t_jianR").addClass("shanshan");
            $("#progressbar_B_jianR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_jianR").removeClass("shanshan");
            $("#he_t_jianR").removeClass("shanshan");
            $("#progressbar_B_jianR").removeClass("shanshan");
        }
    );
    $("#progressbar_B_shangbiL").hover(
        function () {
            $("#Hp_B_shangbiL").addClass("shanshan");
            $("#he_t_shangbiL").addClass("shanshan");
            $("#progressbar_B_shangbiL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_shangbiL").removeClass("shanshan");
            $("#he_t_shangbiL").removeClass("shanshan");
            $("#progressbar_B_shangbiL").removeClass("shanshan");
        }
    );
    $("#progressbar_B_shangbiR").hover(
        function () {
            $("#Hp_B_shangbiR").addClass("shanshan");
            $("#he_t_shangbiR").addClass("shanshan");
            $("#progressbar_B_shangbiR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_shangbiR").removeClass("shanshan");
            $("#he_t_shangbiR").removeClass("shanshan");
            $("#progressbar_B_shangbiR").removeClass("shanshan");
        }
    );
    $("#progressbar_B_zhouL").hover(
        function () {
            $("#Hp_B_zhouL").addClass("shanshan");
            $("#he_t_zhouL").addClass("shanshan");
            $("#progressbar_B_zhouL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_zhouL").removeClass("shanshan");
            $("#he_t_zhouL").removeClass("shanshan");
            $("#progressbar_B_zhouL").removeClass("shanshan");
        }
    );
    $("#progressbar_B_zhouR").hover(
        function () {
            $("#Hp_B_zhouR").addClass("shanshan");
            $("#he_t_zhouR").addClass("shanshan");
            $("#progressbar_B_zhouR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_zhouR").removeClass("shanshan");
            $("#he_t_zhouR").removeClass("shanshan");
            $("#progressbar_B_zhouR").removeClass("shanshan");
        }
    );
    $("#progressbar_B_qianbiL").hover(
        function () {
            $("#Hp_B_qianbiL").addClass("shanshan");
            $("#he_t_qianbiL").addClass("shanshan");
            $("#progressbar_B_qianbiL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_qianbiL").removeClass("shanshan");
            $("#he_t_qianbiL").removeClass("shanshan");
            $("#progressbar_B_qianbiL").removeClass("shanshan");
        }
    );
    $("#progressbar_B_qianbiR").hover(
        function () {
            $("#Hp_B_qianbiR").addClass("shanshan");
            $("#he_t_qianbiR").addClass("shanshan");
            $("#progressbar_B_qianbiR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_qianbiR").removeClass("shanshan");
            $("#he_t_qianbiR").removeClass("shanshan");
            $("#progressbar_B_qianbiR").removeClass("shanshan");
        }
    );
    $("#progressbar_B_shouwanL").hover(
        function () {
            $("#Hp_B_shouwanL").addClass("shanshan");
            $("#he_t_shouwanL").addClass("shanshan");
            $("#progressbar_B_shouwanL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_shouwanL").removeClass("shanshan");
            $("#he_t_shouwanL").removeClass("shanshan");
            $("#progressbar_B_shouwanL").removeClass("shanshan");
        }
    );
    $("#progressbar_B_shouwanR").hover(
        function () {
            $("#Hp_B_shouwanR").addClass("shanshan");
            $("#he_t_shouwanR").addClass("shanshan");
            $("#progressbar_B_shouwanR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_shouwanR").removeClass("shanshan");
            $("#he_t_shouwanR").removeClass("shanshan");
            $("#progressbar_B_shouwanR").removeClass("shanshan");
        }
    );
    $("#progressbar_B_datuiL").hover(
        function () {
            $("#Hp_B_datuiL").addClass("shanshan");
            $("#he_t_datuiL").addClass("shanshan");
            $("#progressbar_B_datuiL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_datuiL").removeClass("shanshan");
            $("#he_t_datuiL").removeClass("shanshan");
            $("#progressbar_B_datuiL").removeClass("shanshan");
        }
    );
    $("#progressbar_B_datuiR").hover(
        function () {
            $("#Hp_B_datuiR").addClass("shanshan");
            $("#he_t_datuiR").addClass("shanshan");
            $("#progressbar_B_datuiR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_datuiR").removeClass("shanshan");
            $("#he_t_datuiR").removeClass("shanshan");
            $("#progressbar_B_datuiR").removeClass("shanshan");
        }
    );
    $("#progressbar_B_xiL").hover(
        function () {
            $("#Hp_B_xiL").addClass("shanshan");
            $("#he_t_xiL").addClass("shanshan");
            $("#progressbar_B_xiL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_xiL").removeClass("shanshan");
            $("#he_t_xiL").removeClass("shanshan");
            $("#progressbar_B_xiL").removeClass("shanshan");
        }
    );
    $("#progressbar_B_xiR").hover(
        function () {
            $("#Hp_B_xiR").addClass("shanshan");
            $("#he_t_xiR").addClass("shanshan");
            $("#progressbar_B_xiR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_xiR").removeClass("shanshan");
            $("#he_t_xiR").removeClass("shanshan");
            $("#progressbar_B_xiR").removeClass("shanshan");
        }
    );
    $("#progressbar_B_xiaotuiL").hover(
        function () {
            $("#Hp_B_xiaotuiL").addClass("shanshan");
            $("#he_t_xiaotuiL").addClass("shanshan");
            $("#progressbar_B_xiaotuiL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_xiaotuiL").removeClass("shanshan");
            $("#he_t_xiaotuiL").removeClass("shanshan");
            $("#progressbar_B_xiaotuiL").removeClass("shanshan");
        }
    );
    $("#progressbar_B_xiaotuiR").hover(
        function () {
            $("#Hp_B_xiaotuiR").addClass("shanshan");
            $("#he_t_xiaotuiR").addClass("shanshan");
            $("#progressbar_B_xiaotuiR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_xiaotuiR").removeClass("shanshan");
            $("#he_t_xiaotuiR").removeClass("shanshan");
            $("#progressbar_B_xiaotuiR").removeClass("shanshan");
        }
    );
    $("#progressbar_B_huaiL").hover(
        function () {
            $("#Hp_B_huaiL").addClass("shanshan");
            $("#he_t_huaiL").addClass("shanshan");
            $("#progressbar_B_huaiL").addClass("shanshan");
        },
        function () {
            $("#Hp_B_huaiL").removeClass("shanshan");
            $("#he_t_huaiL").removeClass("shanshan");
            $("#progressbar_B_huaiL").removeClass("shanshan");
        }
    );
    $("#progressbar_B_huaiR").hover(
        function () {
            $("#Hp_B_huaiR").addClass("shanshan");
            $("#he_t_huaiR").addClass("shanshan");
            $("#progressbar_B_huaiR").addClass("shanshan");
        },
        function () {
            $("#Hp_B_huaiR").removeClass("shanshan");
            $("#he_t_huaiR").removeClass("shanshan");
            $("#progressbar_B_huaiR").removeClass("shanshan");
        }
    );


    $("#TuKuangshuxinDaK_A").click(function () {
        if (sxTanChu_A === 0) {
            $("#TuKuangshuxinTanchuDK_A").show("fold", 100);
            $("#TuKuangshuxinDaK_A").addClass("TuKuangshuxinDaKaa");
            $("#TuKuangshuxinDaKd_A").css("line-height", "4px");
            sxTanChu_A = 1;
        } else {
            $("#TuKuangshuxinTanchuDK_A").hide("fold", 100);
            $("#TuKuangshuxinDaK_A").removeClass("TuKuangshuxinDaKaa");
            $("#TuKuangshuxinDaKd_A").css("line-height", "11px");
            sxTanChu_A = 0;
        }
    });
    $("#TuKuangshuxinDaK_B").click(function () {
        if (sxTanChu_B === 0) {
            $("#TuKuangshuxinTanchuDK_B").show("fold", 100);
            $("#TuKuangshuxinDaK_B").addClass("TuKuangshuxinDaKaa");
            $("#TuKuangshuxinDaKd_B").css("line-height", "4px");
            sxTanChu_B = 1;
        } else {
            $("#TuKuangshuxinTanchuDK_B").hide("fold", 100);
            $("#TuKuangshuxinDaK_B").removeClass("TuKuangshuxinDaKaa");
            $("#TuKuangshuxinDaKd_B").css("line-height", "11px");
            sxTanChu_B = 0;
        }
    });

    //换人
    $("#huanrenButtom").click(function () {
        if (ButtomPinBi === 0) {
            Bshuxingchushihua();
            Shuxingshuaxin_B();
            $("#chicoZhaoShiTianjiaK").empty();
            $("#ZDwenbenWK").children("div").fadeTo("normal", 0.1, function () { //fade
                $(this).slideUp("normal", function () { //slide up
                    $(this).remove(); //then remove from the DOM;
                });
            });
            // $("#ZDwenbenWK").empty();
            huihe_i = 1;
            ChuShiHua();
        }
    });


    //A关联数值变红
    $("#TuKuang_A_Liliang").hover(
        function () {
            $("#TuchuKuangX_A_gongjiJC").addClass("grayBg");
            $("#TuchuKuangX_A_baojishanghai").addClass("grayBg");
        },
        function () {
            $("#TuchuKuangX_A_gongjiJC").removeClass("grayBg");
            $("#TuchuKuangX_A_baojishanghai").removeClass("grayBg");
        }
    );
    $("#TuKuang_A_Minjie").hover(
        function () {
            $("#TuchuKuangX_A_shudu").addClass("grayBg");
            $("#TuchuKuangX_A_shanbi").addClass("grayBg");
        },
        function () {
            $("#TuchuKuangX_A_shudu").removeClass("grayBg");
            $("#TuchuKuangX_A_shanbi").removeClass("grayBg");
        }
    );
    $("#TuKuang_A_Zhili").hover(
        function () {
            $("#TuchuKuangX_A_baojijilv").addClass("grayBg");
            $("#TuchuKuangX_A_gongjifudongjilv").addClass("grayBg");
            $("#TuchuKuangX_A_minzhongxz").addClass("grayBg");
            $("#TuchuKuangX_A_qinbao").addClass("grayBg");
        },
        function () {
            $("#TuchuKuangX_A_baojijilv").removeClass("grayBg");
            $("#TuchuKuangX_A_gongjifudongjilv").removeClass("grayBg");
            $("#TuchuKuangX_A_minzhongxz").removeClass("grayBg");
            $("#TuchuKuangX_A_qinbao").removeClass("grayBg");
        }
    );
    $("#TuKuang_A_Tizhi").hover(
        function () {
            $("#TuchuKuangX_A_fangyujilv").addClass("grayBg");
            $("#TuchuKuangX_A_yibanfanshuang").addClass("grayBg");
            $("#TuchuKuangX_A_fangyufanshuang").addClass("grayBg");
            $("#TuchuKuangX_A_wendinfantan").addClass("grayBg");
        },
        function () {
            $("#TuchuKuangX_A_fangyujilv").removeClass("grayBg");
            $("#TuchuKuangX_A_yibanfanshuang").removeClass("grayBg");
            $("#TuchuKuangX_A_fangyufanshuang").removeClass("grayBg");
            $("#TuchuKuangX_A_wendinfantan").removeClass("grayBg");
        }
    );
    $("#TuKuang_A_Pinheng").hover(
        function () {
            $("#TuchuKuangX_A_wendinzhi").addClass("grayBg");
            $("#TuchuKuangX_A_wendinhuifu").addClass("grayBg");
        },
        function () {
            $("#TuchuKuangX_A_wendinzhi").removeClass("grayBg");
            $("#TuchuKuangX_A_wendinhuifu").removeClass("grayBg");
        }
    );
    //B关联数值变红
    $("#TuKuang_B_Liliang").hover(
        function () {
            $("#TuchuKuangX_B_gongjiJC").addClass("grayBg");
            $("#TuchuKuangX_B_baojishanghai").addClass("grayBg");
        },
        function () {
            $("#TuchuKuangX_B_gongjiJC").removeClass("grayBg");
            $("#TuchuKuangX_B_baojishanghai").removeClass("grayBg");
        }
    );
    $("#TuKuang_B_Minjie").hover(
        function () {
            $("#TuchuKuangX_B_shudu").addClass("grayBg");
            $("#TuchuKuangX_B_shanbi").addClass("grayBg");
        },
        function () {
            $("#TuchuKuangX_B_shudu").removeClass("grayBg");
            $("#TuchuKuangX_B_shanbi").removeClass("grayBg");
        }
    );
    $("#TuKuang_B_Zhili").hover(
        function () {
            $("#TuchuKuangX_B_baojijilv").addClass("grayBg");
            $("#TuchuKuangX_B_gongjifudongjilv").addClass("grayBg");
            $("#TuchuKuangX_B_minzhongxz").addClass("grayBg");
            $("#TuchuKuangX_B_qinbao").addClass("grayBg");
        },
        function () {
            $("#TuchuKuangX_B_baojijilv").removeClass("grayBg");
            $("#TuchuKuangX_B_gongjifudongjilv").removeClass("grayBg");
            $("#TuchuKuangX_B_minzhongxz").removeClass("grayBg");
            $("#TuchuKuangX_B_qinbao").removeClass("grayBg");
        }
    );
    $("#TuKuang_B_Tizhi").hover(
        function () {
            $("#TuchuKuangX_B_fangyujilv").addClass("grayBg");
            $("#TuchuKuangX_B_yibanfanshuang").addClass("grayBg");
            $("#TuchuKuangX_B_fangyufanshuang").addClass("grayBg");
            $("#TuchuKuangX_B_wendinfantan").addClass("grayBg");
        },
        function () {
            $("#TuchuKuangX_B_fangyujilv").removeClass("grayBg");
            $("#TuchuKuangX_B_yibanfanshuang").removeClass("grayBg");
            $("#TuchuKuangX_B_fangyufanshuang").removeClass("grayBg");
            $("#TuchuKuangX_B_wendinfantan").removeClass("grayBg");
        }
    );
    $("#TuKuang_B_Pinheng").hover(
        function () {
            $("#TuchuKuangX_B_wendinzhi").addClass("grayBg");
            $("#TuchuKuangX_B_wendinhuifu").addClass("grayBg");
        },
        function () {
            $("#TuchuKuangX_B_wendinzhi").removeClass("grayBg");
            $("#TuchuKuangX_B_wendinhuifu").removeClass("grayBg");
        }
    );

    //todo 认输按钮
    $("#rengshuButtom").click(function () {
        renshushuaxin();
    });

    //初始化滚动条
    $(function ($) {
        $("#ZDwenbenWK").perfectScrollbar();
    });


    //首页-选择派别
    $("#choiceJinDuLan_XZpaibei").click(function () {
        XZbottomFF(0);
    });

    //首页-选择属性
    $("#choiceJinDuLan_XZshuxin").click(function () {
        XZbottomFF(1);
    });

    //首页-完成
    $("#choiceJinDuLan_XZwancheng").click(function () {
        choiceQianqiWanCheng();
    });

    $("#Banyuan_KX_xl").hover(
        function () {
            $("#Banyuan_KX_xl").addClass("bianqian");
        },
        function () {
            $("#Banyuan_KX_xl").removeClass("bianqian");
        }
    );
    $("#Banyuan_KX_xr").hover(
        function () {
            $("#Banyuan_KX_xr").addClass("bianqian");
        },
        function () {
            $("#Banyuan_KX_xr").removeClass("bianqian");
        }
    );
    $("#Banyuan_ZD_l").hover(
        function () {
            $("#Banyuan_KX_xl").addClass("bianqian");
        },
        function () {
            $("#Banyuan_KX_xl").removeClass("bianqian");
        }
    );
    $("#Banyuan_ZD_r").hover(
        function () {
            $("#Banyuan_KX_xr").addClass("bianqian");
        },
        function () {
            $("#Banyuan_KX_xr").removeClass("bianqian");
        }
    );
    $("#lllhand_D").hover(
        function () {
            $(".lllhand_X").css("box-shadow", "0px 0px 5px 0 rgba(0, 0, 0, 0.5)");
        },
        function () {
            $(".lllhand_X").css("box-shadow", "0px 0px 5px 0 rgba(0, 0, 0, 0.2)");
        }
    );

    //显示A招式按钮
    $("#ckZhaoShiButtom_A").click(function () {
        if (ButtomPinBi === 0) {
            $("#xianshiZS_NK_A").css("display", "block");
            $("#xianshiZS_NK_B").css("display", "none");
            $("#xianshiZS_KD").show("drop", {
                direction: 'left'
            }, 200);
            $("#KanZS_KX_A").addClass("KanZS_KX_Black");
            $("#KanZS_KX_B").removeClass("KanZS_KX_Black");
            xianshiZSshuju();
        }
    });
    //显示B招式按钮
    $("#ckZhaoShiButtom_B").click(function () {
        if (ButtomPinBi === 0) {
            $("#xianshiZS_NK_A").css("display", "none");
            $("#xianshiZS_NK_B").css("display", "block");
            $("#xianshiZS_KD").show("drop", {
                direction: 'right'
            }, 200);
            $("#KanZS_KX_B").addClass("KanZS_KX_Black");
            $("#KanZS_KX_A").removeClass("KanZS_KX_Black");
            xianshiZSshuju();
        }
    });
    //隐藏招式
    $("#yuanBack").click(function () {
        $("#xianshiZS_KD").hide("drop", {
            direction: 'up'
        }, 200);
    });
    $("#lllhand_D").click(function () {
        $("#xianshiZS_KD").hide("drop", {
            direction: 'up'
        }, 200);
    });
    //显示A招式
    $("#KanZS_KX_A").hover(
        function () {
            $("#KanZS_KX_A").addClass("KanZS_KX_Black");
            $("#KanZS_KX_B").removeClass("KanZS_KX_Black");
            if ($("#xianshiZS_NK_A").css("display") === "none") {
                $("#xianshiZS_NK_B").hide("slide", {
                    direction: 'right'
                }, 150);
                $("#xianshiZS_NK_A").show("slide", {
                    direction: 'left'
                }, 150);
            }
        }
    );
    //显示B招式
    $("#KanZS_KX_B").hover(
        function () {
            $("#KanZS_KX_B").addClass("KanZS_KX_Black");
            $("#KanZS_KX_A").removeClass("KanZS_KX_Black");
            if ($("#xianshiZS_NK_B").css("display") === "none") {
                $("#xianshiZS_NK_A").hide("slide", {
                    direction: 'left'
                }, 150);
                $("#xianshiZS_NK_B").show("slide", {
                    direction: 'right'
                }, 150);
            }
        }
    );



});
