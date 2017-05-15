// JavaScript Document
"use strict";

//所选招式容器
var choiceZS = {
    createNew: function () {
        var aaa = {};
        aaa.zs_name = "";
        aaa.zs_frome = "";
        aaa.zs_to = "";
        aaa.zs_torl = "";
        //外伤伤害
        aaa.AttW = 0;
        //内伤伤害
        aaa.AttN = 0;
        //命中修正
        aaa.Mzxz = 0;
        //攻击前摇
        aaa.ATimeQ = 0;
        //攻击时间，默认1s
        aaa.ATime = 0;
        //攻击后摇
        aaa.ATimeH = 0;
        //平衡削减
        aaa.PinHengAtt = 0;
        //消耗稳定度
        aaa.PinHengXH = 0;
        //备注
        aaa.Beizhu = "30%破防";
        //招式中文名
        aaa.zs_CNname = function () {
            switch (String(aaa.zs_name)) {
                case "tj_panda":
                    return "攀打";
                case "tj_tuishou":
                    return "推手";
                case "tj_qingna":
                    return "擒拿";
                case "tj_shuangfong":
                    return "双峰贯耳";
                case "tj_zhoudicui":
                    return "肘底捶";
                case "tj_paocui":
                    return "炮锤";
                case "tj_yuanyangtui":
                    return "鸳鸯腿";
                case "tj_banshuai":
                    return "绊摔";
                case "tq_zhiquan":
                    return "直拳";
                case "tq_lrgouquan":
                    return "左右勾拳";
                case "tq_sgouquan":
                    return "上勾拳";
                case "tq_zhouji":
                    return "肘击";
                case "tq_xizhuang":
                    return "膝撞";
                case "tq_dengtui":
                    return "蹬腿";
                case "tq_shaotui":
                    return "扫腿";
                default:
                    break;
            }
        };
        return aaa;
    }
};
