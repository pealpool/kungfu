/**
 * Created by Administrator on 2017/5/15.
 * 招式类，输入招式名称、属性值，输出相应值。
 */
var ZhaoShi = {
    createNew: function () {
        var zzz = {};
        zzz.CNname = function (zs_name) {
            switch (String(zs_name)) {
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

        //外伤显示
        zzz.AttW_screen = function (zs_name, liling, zhili) {
            var att = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    att = 80;
                    break;
                case "tj_tuishou":
                    att = 20;
                    break;
                case "tj_qingna":
                    att = 0;
                    break;
                case "tj_shuangfong":
                    att = 150;
                    break;
                case "tj_zhoudicui":
                    att = 100;
                    break;
                case "tj_paocui":
                    att = 100;
                    break;
                case "tj_yuanyangtui":
                    att = 200;
                    break;
                case "tj_banshuai":
                    att = 0;
                    break;
                case "tq_zhiquan":
                    att = 100;
                    break;
                case "tq_lrgouquan":
                    att = 200;
                    break;
                case "tq_sgouquan":
                    att = 200;
                    break;
                case "tq_zhouji":
                    att = 300;
                    break;
                case "tq_xizhuang":
                    att = 250;
                    break;
                case "tq_dengtui":
                    att = 200;
                    break;
                case "tq_shaotui":
                    att = 300;
                    break;
                default:
                    break;
            }
            return (att * mSX_LiLiang.gongjiJC(liling) + mSX_LiLiang.baojishanghai(liling) * mSX_ZhiLi.baojijilv(zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(zhili) - 0.05);
        };

        //todo 内伤显示
        zzz.AttN_screen = function (zs_name, liling, zhili) {
            var att = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    att = 0;
                    break;
                case "tj_tuishou":
                    att = 30;
                    break;
                case "tj_qingna":
                    att = 100;
                    break;
                case "tj_shuangfong":
                    att = 150;
                    break;
                case "tj_zhoudicui":
                    att = 120;
                    break;
                case "tj_paocui":
                    att = 200;
                    break;
                case "tj_yuanyangtui":
                    att = 0;
                    break;
                case "tj_banshuai":
                    att = 200;
                    break;
                case "tq_zhiquan":
                    att = 0;
                    break;
                case "tq_lrgouquan":
                    att = 0;
                    break;
                case "tq_sgouquan":
                    att = 0;
                    break;
                case "tq_zhouji":
                    att = 0;
                    break;
                case "tq_xizhuang":
                    att = 0;
                    break;
                case "tq_dengtui":
                    att = 0;
                    break;
                case "tq_shaotui":
                    att = 0;
                    break;
                default:
                    break;
            }
            return (att * mSX_LiLiang.gongjiJC(liling) + mSX_LiLiang.baojishanghai(liling) * mSX_ZhiLi.baojijilv(zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(zhili) - 0.05);
        };


        //外伤
        zzz.AttW = function (zs_name, liling) {
            var att = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    att = 80;
                    break;
                case "tj_tuishou":
                    att = 20;
                    break;
                case "tj_qingna":
                    att = 0;
                    break;
                case "tj_shuangfong":
                    att = 150;
                    break;
                case "tj_zhoudicui":
                    att = 100;
                    break;
                case "tj_paocui":
                    att = 100;
                    break;
                case "tj_yuanyangtui":
                    att = 200;
                    break;
                case "tj_banshuai":
                    att = 0;
                    break;
                case "tq_zhiquan":
                    att = 100;
                    break;
                case "tq_lrgouquan":
                    att = 200;
                    break;
                case "tq_sgouquan":
                    att = 200;
                    break;
                case "tq_zhouji":
                    att = 300;
                    break;
                case "tq_xizhuang":
                    att = 250;
                    break;
                case "tq_dengtui":
                    att = 200;
                    break;
                case "tq_shaotui":
                    att = 300;
                    break;
                default:
                    break;
            }
            return (att * mSX_LiLiang.gongjiJC(liling));
        };

        //内伤
        zzz.AttN = function (zs_name, liling) {
            var att = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    att = 0;
                    break;
                case "tj_tuishou":
                    att = 30;
                    break;
                case "tj_qingna":
                    att = 100;
                    break;
                case "tj_shuangfong":
                    att = 150;
                    break;
                case "tj_zhoudicui":
                    att = 120;
                    break;
                case "tj_paocui":
                    att = 200;
                    break;
                case "tj_yuanyangtui":
                    att = 0;
                    break;
                case "tj_banshuai":
                    att = 200;
                    break;
                case "tq_zhiquan":
                    att = 0;
                    break;
                case "tq_lrgouquan":
                    att = 0;
                    break;
                case "tq_sgouquan":
                    att = 0;
                    break;
                case "tq_zhouji":
                    att = 0;
                    break;
                case "tq_xizhuang":
                    att = 0;
                    break;
                case "tq_dengtui":
                    att = 0;
                    break;
                case "tq_shaotui":
                    att = 0;
                    break;
                default:
                    break;
            }
            return (att * mSX_LiLiang.gongjiJC(liling));
        };


















        //前摇
        //todo not
        zzz.ATimeQ = function (zs_name, minjie) {
            var att = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    att = 0;
                    break;
                case "tj_tuishou":
                    att = 30;
                    break;
                case "tj_qingna":
                    att = 100;
                    break;
                case "tj_shuangfong":
                    att = 150;
                    break;
                case "tj_zhoudicui":
                    att = 120;
                    break;
                case "tj_paocui":
                    att = 200;
                    break;
                case "tj_yuanyangtui":
                    att = 0;
                    break;
                case "tj_banshuai":
                    att = 200;
                    break;
                case "tq_zhiquan":
                    att = 0;
                    break;
                case "tq_lrgouquan":
                    att = 0;
                    break;
                case "tq_sgouquan":
                    att = 0;
                    break;
                case "tq_zhouji":
                    att = 0;
                    break;
                case "tq_xizhuang":
                    att = 0;
                    break;
                case "tq_dengtui":
                    att = 0;
                    break;
                case "tq_shaotui":
                    att = 0;
                    break;
                default:
                    break;
            }
            return (att * mSX_LiLiang.gongjiJC(liling) + mSX_LiLiang.baojishanghai(liling) * mSX_ZhiLi.baojijilv(zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(zhili) - 0.05);
        };

        return zzz;
    }
};