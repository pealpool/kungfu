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

        //外伤显示，算暴击
        zzz.AttW_screen = function (zs_name, liling, zhili) {
            var abc = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    abc = 80;
                    break;
                case "tj_tuishou":
                    abc = 20;
                    break;
                case "tj_qingna":
                    abc = 0;
                    break;
                case "tj_shuangfong":
                    abc = 150;
                    break;
                case "tj_zhoudicui":
                    abc = 100;
                    break;
                case "tj_paocui":
                    abc = 100;
                    break;
                case "tj_yuanyangtui":
                    abc = 200;
                    break;
                case "tj_banshuai":
                    abc = 0;
                    break;
                case "tq_zhiquan":
                    abc = 100;
                    break;
                case "tq_lrgouquan":
                    abc = 200;
                    break;
                case "tq_sgouquan":
                    abc = 200;
                    break;
                case "tq_zhouji":
                    abc = 300;
                    break;
                case "tq_xizhuang":
                    abc = 250;
                    break;
                case "tq_dengtui":
                    abc = 200;
                    break;
                case "tq_shaotui":
                    abc = 300;
                    break;
                default:
                    break;
            }
            return (abc * mSX_LiLiang.gongjiJC(liling) + mSX_LiLiang.baojishanghai(liling) * mSX_ZhiLi.baojijilv(zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(zhili) - 0.05);
        };

        //内伤显示，算暴击
        zzz.AttN_screen = function (zs_name, liling, zhili) {
            var abc = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    abc = 0;
                    break;
                case "tj_tuishou":
                    abc = 30;
                    break;
                case "tj_qingna":
                    abc = 100;
                    break;
                case "tj_shuangfong":
                    abc = 150;
                    break;
                case "tj_zhoudicui":
                    abc = 120;
                    break;
                case "tj_paocui":
                    abc = 200;
                    break;
                case "tj_yuanyangtui":
                    abc = 0;
                    break;
                case "tj_banshuai":
                    abc = 200;
                    break;
                case "tq_zhiquan":
                    abc = 0;
                    break;
                case "tq_lrgouquan":
                    abc = 0;
                    break;
                case "tq_sgouquan":
                    abc = 0;
                    break;
                case "tq_zhouji":
                    abc = 0;
                    break;
                case "tq_xizhuang":
                    abc = 0;
                    break;
                case "tq_dengtui":
                    abc = 0;
                    break;
                case "tq_shaotui":
                    abc = 0;
                    break;
                default:
                    break;
            }
            return (abc * mSX_LiLiang.gongjiJC(liling) + mSX_LiLiang.baojishanghai(liling) * mSX_ZhiLi.baojijilv(zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(zhili) - 0.05);
        };


        //外伤,不算暴击
        zzz.AttW = function (zs_name, liling, zhili) {
            var abc = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    abc = 80;
                    break;
                case "tj_tuishou":
                    abc = 20;
                    break;
                case "tj_qingna":
                    abc = 0;
                    break;
                case "tj_shuangfong":
                    abc = 150;
                    break;
                case "tj_zhoudicui":
                    abc = 100;
                    break;
                case "tj_paocui":
                    abc = 100;
                    break;
                case "tj_yuanyangtui":
                    abc = 200;
                    break;
                case "tj_banshuai":
                    abc = 0;
                    break;
                case "tq_zhiquan":
                    abc = 100;
                    break;
                case "tq_lrgouquan":
                    abc = 200;
                    break;
                case "tq_sgouquan":
                    abc = 200;
                    break;
                case "tq_zhouji":
                    abc = 300;
                    break;
                case "tq_xizhuang":
                    abc = 250;
                    break;
                case "tq_dengtui":
                    abc = 200;
                    break;
                case "tq_shaotui":
                    abc = 300;
                    break;
                default:
                    break;
            }
            //[min,max]的随机整数Math.floor(Math.random()*(max-min+1)+min)
            if (Math.floor(Math.random() * 11) < mSX_ZhiLi.gongjifudongjilv(zhili) * 10) {
                return (abc * mSX_LiLiang.gongjiJC(liling) * (1 + Math.floor(Math.random() * 11) * 0.01));
            } else {
                return (abc * mSX_LiLiang.gongjiJC(liling) * (1 - Math.floor(Math.random() * 11) * 0.01));
            }
        };

        //内伤，不算暴击
        zzz.AttN = function (zs_name, liling, zhili) {
            var abc = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    abc = 0;
                    break;
                case "tj_tuishou":
                    abc = 30;
                    break;
                case "tj_qingna":
                    abc = 100;
                    break;
                case "tj_shuangfong":
                    abc = 150;
                    break;
                case "tj_zhoudicui":
                    abc = 120;
                    break;
                case "tj_paocui":
                    abc = 200;
                    break;
                case "tj_yuanyangtui":
                    abc = 0;
                    break;
                case "tj_banshuai":
                    abc = 200;
                    break;
                case "tq_zhiquan":
                    abc = 0;
                    break;
                case "tq_lrgouquan":
                    abc = 0;
                    break;
                case "tq_sgouquan":
                    abc = 0;
                    break;
                case "tq_zhouji":
                    abc = 0;
                    break;
                case "tq_xizhuang":
                    abc = 0;
                    break;
                case "tq_dengtui":
                    abc = 0;
                    break;
                case "tq_shaotui":
                    abc = 0;
                    break;
                default:
                    break;
            }
            if (Math.floor(Math.random() * 11) < mSX_ZhiLi.gongjifudongjilv(zhili) * 10) {
                return (abc * mSX_LiLiang.gongjiJC(liling) * (1 + Math.floor(Math.random() * 11) * 0.01));
            } else {
                return (abc * mSX_LiLiang.gongjiJC(liling) * (1 - Math.floor(Math.random() * 11) * 0.01));
            }
        };

        //前摇
        zzz.ATimeQ = function (zs_name, minjie) {
            var abc = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    abc = 0.3;
                    break;
                case "tj_tuishou":
                    abc = 0.3;
                    break;
                case "tj_qingna":
                    abc = 0.3;
                    break;
                case "tj_shuangfong":
                    abc = 0.5;
                    break;
                case "tj_zhoudicui":
                    abc = 0.4;
                    break;
                case "tj_paocui":
                    abc = 0.6;
                    break;
                case "tj_yuanyangtui":
                    abc = 0.5;
                    break;
                case "tj_banshuai":
                    abc = 0.4;
                    break;
                case "tq_zhiquan":
                    abc = 0.2;
                    break;
                case "tq_lrgouquan":
                    abc = 0.3;
                    break;
                case "tq_sgouquan":
                    abc = 0.3;
                    break;
                case "tq_zhouji":
                    abc = 0.3;
                    break;
                case "tq_xizhuang":
                    abc = 0.4;
                    break;
                case "tq_dengtui":
                    abc = 0.5;
                    break;
                case "tq_shaotui":
                    abc = 0.5;
                    break;
                default:
                    return 0;
            }
            return (abc + mSX_Minjie.shuduJC_Q(minjie));
        };


        //招式时长
        zzz.ATime = function (zs_name, minjie) {
            var abc = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    abc = 1;
                    break;
                case "tj_tuishou":
                    abc = 1;
                    break;
                case "tj_qingna":
                    abc = 1;
                    break;
                case "tj_shuangfong":
                    abc = 1;
                    break;
                case "tj_zhoudicui":
                    abc = 1;
                    break;
                case "tj_paocui":
                    abc = 1;
                    break;
                case "tj_yuanyangtui":
                    abc = 1;
                    break;
                case "tj_banshuai":
                    abc = 1;
                    break;
                case "tq_zhiquan":
                    abc = 1;
                    break;
                case "tq_lrgouquan":
                    abc = 1;
                    break;
                case "tq_sgouquan":
                    abc = 1;
                    break;
                case "tq_zhouji":
                    abc = 1;
                    break;
                case "tq_xizhuang":
                    abc = 1;
                    break;
                case "tq_dengtui":
                    abc = 1;
                    break;
                case "tq_shaotui":
                    abc = 1;
                    break;
                default:
                    return 0;
            }
            return (abc + mSX_Minjie.shuduJC_Z(minjie));
        };

        //后摇
        zzz.ATimeH = function (zs_name, minjie) {
            var abc = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    abc = 0.3;
                    break;
                case "tj_tuishou":
                    abc = 0.3;
                    break;
                case "tj_qingna":
                    abc = 0.3;
                    break;
                case "tj_shuangfong":
                    abc = 0.5;
                    break;
                case "tj_zhoudicui":
                    abc = 0.4;
                    break;
                case "tj_paocui":
                    abc = 0.5;
                    break;
                case "tj_yuanyangtui":
                    abc = 0.5;
                    break;
                case "tj_banshuai":
                    abc = 0.4;
                    break;
                case "tq_zhiquan":
                    abc = 0.2;
                    break;
                case "tq_lrgouquan":
                    abc = 0.3;
                    break;
                case "tq_sgouquan":
                    abc = 0.3;
                    break;
                case "tq_zhouji":
                    abc = 0.3;
                    break;
                case "tq_xizhuang":
                    abc = 0.3;
                    break;
                case "tq_dengtui":
                    abc = 0.4;
                    break;
                case "tq_shaotui":
                    abc = 0.5;
                    break;
                default:
                    return 0;
            }
            return (abc + mSX_Minjie.shuduJC_H(minjie));
        };

        //命中率修正
        zzz.Mzxz = function (zs_name, zhili) {
            var abc = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    abc = 0;
                    break;
                case "tj_tuishou":
                    abc = 0;
                    break;
                case "tj_qingna":
                    abc = 0;
                    break;
                case "tj_shuangfong":
                    abc = -0.1;
                    break;
                case "tj_zhoudicui":
                    abc = -0.05;
                    break;
                case "tj_paocui":
                    abc = 0;
                    break;
                case "tj_yuanyangtui":
                    abc = 0;
                    break;
                case "tj_banshuai":
                    abc = -0.1;
                    break;
                case "tq_zhiquan":
                    abc = 0;
                    break;
                case "tq_lrgouquan":
                    abc = 0;
                    break;
                case "tq_sgouquan":
                    abc = 0;
                    break;
                case "tq_zhouji":
                    abc = -0.05;
                    break;
                case "tq_xizhuang":
                    abc = -0.05;
                    break;
                case "tq_dengtui":
                    abc = -0.05;
                    break;
                case "tq_shaotui":
                    abc = -0.05;
                    break;
                default:
                    break;
            }
            return (abc + mSX_ZhiLi.minzhongxz(zhili));
        };


        //削衡，算暴击
        zzz.PinHengAtt_screen = function (zs_name, liling, zhili) {
            var abc = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    abc = 5;
                    break;
                case "tj_tuishou":
                    abc = 80;
                    break;
                case "tj_qingna":
                    abc = 10;
                    break;
                case "tj_shuangfong":
                    abc = 10;
                    break;
                case "tj_zhoudicui":
                    abc = 15;
                    break;
                case "tj_paocui":
                    abc = 60;
                    break;
                case "tj_yuanyangtui":
                    abc = 25;
                    break;
                case "tj_banshuai":
                    abc = 200;
                    break;
                case "tq_zhiquan":
                    abc = 10;
                    break;
                case "tq_lrgouquan":
                    abc = 20;
                    break;
                case "tq_sgouquan":
                    abc = 25;
                    break;
                case "tq_zhouji":
                    abc = 18;
                    break;
                case "tq_xizhuang":
                    abc = 28;
                    break;
                case "tq_dengtui":
                    abc = 35;
                    break;
                case "tq_shaotui":
                    abc = 30;
                    break;
                default:
                    break;
            }
            return (abc * mSX_LiLiang.gongjiJC(liling) + mSX_LiLiang.baojishanghai(liling) * mSX_ZhiLi.baojijilv(zhili)) * (1 + 0.1 * mSX_ZhiLi.gongjifudongjilv(zhili) - 0.05);
        };

        //削衡，不算暴击
        zzz.PinHengAtt = function (zs_name, liling, zhili) {
            var abc = 0;
            switch (String(zs_name)) {
                case "tj_panda":
                    abc = 5;
                    break;
                case "tj_tuishou":
                    abc = 80;
                    break;
                case "tj_qingna":
                    abc = 10;
                    break;
                case "tj_shuangfong":
                    abc = 10;
                    break;
                case "tj_zhoudicui":
                    abc = 15;
                    break;
                case "tj_paocui":
                    abc = 60;
                    break;
                case "tj_yuanyangtui":
                    abc = 25;
                    break;
                case "tj_banshuai":
                    abc = 200;
                    break;
                case "tq_zhiquan":
                    abc = 10;
                    break;
                case "tq_lrgouquan":
                    abc = 20;
                    break;
                case "tq_sgouquan":
                    abc = 25;
                    break;
                case "tq_zhouji":
                    abc = 18;
                    break;
                case "tq_xizhuang":
                    abc = 28;
                    break;
                case "tq_dengtui":
                    abc = 35;
                    break;
                case "tq_shaotui":
                    abc = 30;
                    break;
                default:
                    break;
            }
            if (Math.floor(Math.random() * 11) < mSX_ZhiLi.gongjifudongjilv(zhili) * 10) {
                return (abc * mSX_LiLiang.gongjiJC(liling) * (1 + Math.floor(Math.random() * 11) * 0.01));
            } else {
                return (abc * mSX_LiLiang.gongjiJC(liling) * (1 - Math.floor(Math.random() * 11) * 0.01));
            }
        };

        //平衡消耗
        zzz.PinHengXH = function (zs_name) {
            switch (String(zs_name)) {
                case "tj_panda":
                    return 3;
                    break;
                case "tj_tuishou":
                    return 10;
                    break;
                case "tj_qingna":
                    return 5;
                    break;
                case "tj_shuangfong":
                    return 5;
                    break;
                case "tj_zhoudicui":
                    return 5;
                    break;
                case "tj_paocui":
                    return 15;
                    break;
                case "tj_yuanyangtui":
                    return 15;
                    break;
                case "tj_banshuai":
                    return 15;
                    break;
                case "tq_zhiquan":
                    return 3;
                    break;
                case "tq_lrgouquan":
                    return 8;
                    break;
                case "tq_sgouquan":
                    return 5;
                    break;
                case "tq_zhouji":
                    return 8;
                    break;
                case "tq_xizhuang":
                    return 10;
                    break;
                case "tq_dengtui":
                    return 15;
                    break;
                case "tq_shaotui":
                    return 18;
                    break;
                default:
                    break;
            }
        };


        return zzz;
    }
};