'use strict';
import $ from 'jquery';
import {data_S} from './myData_S.js';
import {data_const} from './myData_const.js';
import {Person, zsAttSort, zsDefSort, buffer} from './myData_P.js';
import './css/baseCss.scss';
import 'webpack-jquery-ui';
import anime from 'animejs/lib/anime.es.js';

//一般不需要jq ui 的默认样式，就不用其css
// require('webpack-jquery-ui/css');

let eChart = require('echarts');
let personA = new Person();
let personB = new Person();
let zsAttSortA = [new zsAttSort(), new zsAttSort(), new zsAttSort(), new zsAttSort(), new zsAttSort()];
let zsAttSortB = [new zsAttSort(), new zsAttSort(), new zsAttSort(), new zsAttSort(), new zsAttSort()];
let zsDefSortA = [new zsDefSort(), new zsDefSort(), new zsDefSort(), new zsDefSort(), new zsDefSort()];
let zsDefSortB = [new zsDefSort(), new zsDefSort(), new zsDefSort(), new zsDefSort(), new zsDefSort()];
let selectBoxHtml_A = ['', '', '<div class="selectBbox" style="display: none"></div>'];
let selectBoxHtml_B = ['', '', '<div class="selectBbox" style="display: none"></div>'];
let whoFirst = '';

let mySaveFile = [2, 2, 2, 2, 2];


loadSchoolBoxStar();


function myHideRemove(e) {
    $(e).hide('fade', 300, function () {
        $(e).remove();
    });
}

function showMyLoadFile() {
    $('#loginInTopMu').show('fade', 200);
    $('#loadFileBigBox').show('fade', 200);
    loadFile_count(4);
    $('#liFiBox_R').show('fade', 200, function () {
        $('#loadFileBigBox .loFiGd_F .liFiBox_S').eq(0).trigger('click');
    });
}

function loadFile_count(n) {
    for (let i = 0; i < 11; i++) {
        if (i <= n) {
            $('.loFiGd_F').append('<li class="liFiBox_size liFiBox_S"><div class=liFiBox_Sss><div class=liFiBox_left><div class="liFiBox_logo logo_DL"></div><span>大<br>理<br>段<br>氏</span></div><div class=liFiBox_name>段誉</div></div>');
        } else {
            $('.loFiGd_F').append('<li class="liFiBox_size liFiBox_A">+</li>');
        }
    }

    let j = 0;

    function showLiFiBox() {
        if (j < 11) {
            $('.loFiGd_F').find('li').eq(j).show('fade', 200);
            j++;
        } else {
            window.clearInterval(myVarTime);
        }
    }

    let myVarTime = window.setInterval(function () {
        showLiFiBox()
    }, 30);
}

$(".next_01").click(function () {
    myHideRemove('#myVerID');
    myHideRemove('.loginBigBox');
    myHideRemove('.loginCheckBox');
    $('.next_01').switchClass('next_01', 'next_02 next_off', 500, 'easeInOutCubic');
    $('.logoPosition01').switchClass('logoPosition01', 'logoPosition02', 500, 'easeInOutCubic', showMyLoadFile);
});

$('body').on('click', '.liFiBox_A', function () {
    $(this).html('').removeClass('liFiBox_A').addClass('liFiBox_S');
});

//手动排序移动
$('.loFiGd_F').sortable({
    placeholder: "liFiBox_size",
    cursor: "move",
    // containment: "ul",
    distance: 10, //多少像素激活移动
    cancel: ".liFiBox_A",
    revert: true,
}).disableSelection();

$(document).on('mouseenter', '.liFiBox_S', function () {//绑定鼠标进入事件
    $(this).find('.liFiBox_left').eq(0).addClass('liFiBox_left_hover');
    $('#liFiBox_R').css('z-index', 2);
});
$(document).on('mouseleave', '.liFiBox_S', function () {//绑定鼠标划出事件
    $(this).find('.liFiBox_left').eq(0).removeClass('liFiBox_left_hover');
    $('#liFiBox_R').css('z-index', 10);
});
$(document).on('click', '.liFiBox_S', function () {
    $('#liFiBox_S_select').attr('id', '');
    $(this).attr('id', 'liFiBox_S_select');
    if ($('#liFiBox_S_select').length > 0) {
        $('.next_off').removeClass('next_off');
    }
});

let tDataA;
let tDataB = data_S.SL;
$(document).on('click', '.schoolBox', function () {
    $('#schoolBox_select').attr('id', '');
    $(this).attr('id', 'schoolBox_select');
    if ($('#schoolBox_select').length > 0) {
        $('.next_off').removeClass('next_off');
    }
    let mySchool = $(this).find('.schoolBox_logo').attr('class').toString().substr(-2, 2);
    let mySchoolClass = 'bigSLogo_size logo_' + mySchool;
    $('.bigSLogo_size').attr('class', mySchoolClass);


    tDataA = data_S['' + mySchool + ''];
    $('#schoolName').text(tDataA.name);
    let myContent = '';
    for (let i = 0; i < tDataA.level.length; i++) {
        myContent = myContent + tDataA.level[i] + ' - ';
    }
    myContent = myContent.substring(0, myContent.length - 3);
    $('#schoolLevel').text(myContent);
    $('#schoolRank').text('派别排名：' + tDataA.rank);
    $('#schoolPerson').text('人数：' + tDataA.person);
    myContent = '';
    for (let i = 0; i < tDataA.star.length; i++) {
        myContent = myContent + '<div>' + tDataA.star[i] + '</div>';
    }
    $('#schoolStar').html(myContent);
    $('#schoolInf').text(tDataA.inf);
    setMyChat(changeSixDtoChart(tDataA.sixData, personA.sixData), data_S.sixDataSum, 'myBigChart', 1);

    $('.tableContentBox_A').html('');
    if ($('#showTabs_A').find('.tableT_TBo').length > 0) {
        showTableContentBox_Att_TBo($('#showTabs_A'), tDataA, personA);
    } else if ($('#showTabs_A').find('.tableT_Txo').length > 0) {
        showTableContentBox_Att_Txo($('#showTabs_A'), tDataA, personA);
    } else if ($('#showTabs_A').find('.tableT_Lzo').length > 0) {
        showTableContentBox_Att_Lzo($('#showTabs_A'), tDataA, personA);
    }

    $('.tableContentBox_D1').html('');
    $('.tableContentBox_D2').html('');
    showTableContentBox_Def($('#showTabs_D'), tDataA);
    showTableContentBox_Dod($('#showTabs_D'), tDataA);
    $('.tableContentBox_B').html('');
    showTableContentBox_Pas($('#showTabs_B'), tDataA);

});

function showTableContentBox_Def($mySelectID, tData) {
    let myContent = '';
    for (let key in tData.zDef) {
        myContent = '<div class="tableContent"><div class="table_Name">' + key +
            '</div><div class="table_Number_Db">' + toPercentAdd(tData.zDef[key].block) +
            '</div><div class="table_Tx_D">' + tData.zDef[key].TX_inf +
            '</div><div class="table_Lz_D">' + tData.zDef[key].LZ_inf +
            '</div></div>';
        $mySelectID.find('.tableContentBox_D1').append(myContent);
    }
}

function showTableContentBox_Dod(mySelectID, tData) {
    let myContent = '';
    for (let key in tData.zDod) {
        myContent = '<div class="tableContent"><div class="table_Name">' + key +
            '</div><div class="table_Number_Db">' + toPercentAdd(tData.zDod[key].dod) +
            '</div><div class="table_Number_Ds">' + toZero(tData.zDod[key].zqConst) +
            '</div><div class="table_Tx_S">' + tData.zDod[key].TX_inf +
            '</div><div class="table_Lz_D">' + tData.zDod[key].LZ_inf +
            '</div></div>';
        mySelectID.find('.tableContentBox_D2').append(myContent);
    }
}

function showTableContentBox_Pas(mySelectID, tData) {
    let myContent = '';
    for (let key in tData.zPas) {
        myContent = '<div class="tableContent"><div class="table_Name">' + key +
            '</div><div class="table_Tx_B">' + tData.zPas[key].TX_inf +
            '</div></div>';
        mySelectID.find('.tableContentBox_B').append(myContent);
    }
}


function showTableContentBox_Att_TBo($mySelectID, tData, person) {
    let myContent = '';
    for (let key in tData.zAtt) {
        myContent = '<div class="tableContent"><div class="table_Name">' + key +
            '</div><div class="table_TBo"><div class="table_NumberN">' +
            toZero(Math.round(tData.zAtt[key].hurt_o * (1 + person.attAdd))) + '</div><div class="table_NumberN">' +
            toZero(Math.round(tData.zAtt[key].hurt_i * (1 + person.attAdd))) + '</div><div class="table_NumberN">' +
            toPercentAdd(tData.zAtt[key].hit + person.hitRateAdd) + '</div><div class="table_NumberN">' +
            toPercentAdd(tData.zAtt[key].block) + '</div><div class="table_NumberN">' +
            (tData.zAtt[key].time_q + person.timeAdd_q).toFixed(1) + 's</div><div class="table_NumberN">' +
            (tData.zAtt[key].time_z + person.timeAdd_z).toFixed(1) + 's</div><div class="table_NumberN">' +
            (tData.zAtt[key].time_h + person.timeAdd_h).toFixed(1) + 's</div><div class="table_NumberN">' +
            toZero(tData.zAtt[key].zqConst) + '</div><div class="table_NumberN">' +
            toZero(Math.round(tData.zAtt[key].hurt_q * (1 + person.zqHurtAdd))) + '</div><div class="table_NumberN">' +
            toPerS(Math.round(tData.zAtt[key].hurt_b * (1 + person.bleedAdd))) + '</div><div class="table_NumberN">' +
            toZero(Math.round(tData.zAtt[key].hurt_p * (1 + person.poisonAdd))) + '</div></div><div class="table_ot table_Tx">';
        if (tData.zAtt[key].TX_inf != '') {
            myContent = myContent +
                '<div class="content_TxSup">特</div><div class="content_Tx">' +
                tData.zAtt[key].TX_inf + '</div>';
        }
        myContent = myContent + '</div>';

        myContent = myContent + '<div class="table_ot table_Lz"><div class="content_LzLine">-</div><div class="content_Lz">' +
            tData.zAtt[key].LZ_inf + '</div></div>';

        myContent = myContent + '</div></div>';
        $mySelectID.find('.tableContentBox_A').append(myContent);
    }
}

function showTableContentBox_Att_Txo($mySelectID, tData, person) {
    let myContent = '';
    for (let key in tData.zAtt) {
        myContent = '<div class="tableContent"><div class="table_Name">' + key +
            '</div><div class="grayBox-color table_ot table_TB" style=""><div class="table_NumberN" style="display: none;">' +
            toZero(Math.round(tData.zAtt[key].hurt_o * (1 + person.attAdd))) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toZero(Math.round(tData.zAtt[key].hurt_i * (1 + person.attAdd))) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toPercentAdd(tData.zAtt[key].hit + person.hitRateAdd) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toPercentAdd(tData.zAtt[key].block) +
            '</div><div class="table_NumberN" style="display: none;">' +
            (tData.zAtt[key].time_q + person.timeAdd_q).toFixed(1) +
            's</div><div class="table_NumberN" style="display: none;">' +
            (tData.zAtt[key].time_z + person.timeAdd_z).toFixed(1) +
            's</div><div class="table_NumberN" style="display: none;">' +
            (tData.zAtt[key].time_h + person.timeAdd_h).toFixed(1) +
            's</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].zqConst) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toZero(Math.round(tData.zAtt[key].hurt_q * (1 + person.zqHurtAdd))) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toPerS(Math.round(tData.zAtt[key].hurt_b * (1 + person.bleedAdd))) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toZero(Math.round(tData.zAtt[key].hurt_p * (1 + person.poisonAdd))) +
            '</div></div><div class="table_Txo">';
        if (tData.zAtt[key].TX_inf != '') {
            myContent = myContent +
                '<div class="content_TxSup" style="display: none;">特</div><div class="content_Tx" style="display: inline;">' +
                tData.zAtt[key].TX_inf + '</div>';
        }
        myContent = myContent + '</div>';

        myContent = myContent + '<div class="table_ot table_Lz"><div class="content_LzLine">-</div><div class="content_Lz">' +
            tData.zAtt[key].LZ_inf + '</div></div>';

        myContent = myContent + '</div></div>';
        $mySelectID.find('.tableContentBox_A').append(myContent);
    }
}

function showTableContentBox_Att_Lzo($mySelectID, tData, person) {
    let myContent = '';
    for (let key in tData.zAtt) {
        myContent = '<div class="tableContent"><div class="table_Name">' + key +
            '</div><div class="grayBox-color table_ot table_TB" style=""><div class="table_NumberN" style="display: none;">' +
            toZero(Math.round(tData.zAtt[key].hurt_o * (1 + person.attAdd))) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toZero(Math.round(tData.zAtt[key].hurt_i * (1 + person.attAdd))) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toPercentAdd(tData.zAtt[key].hit + person.hitRateAdd) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toPercentAdd(tData.zAtt[key].block) +
            '</div><div class="table_NumberN" style="display: none;">' +
            (tData.zAtt[key].time_q + person.timeAdd_q).toFixed(1) +
            's</div><div class="table_NumberN" style="display: none;">' +
            (tData.zAtt[key].time_z + person.timeAdd_z).toFixed(1) +
            's</div><div class="table_NumberN" style="display: none;">' +
            (tData.zAtt[key].time_h + person.timeAdd_h).toFixed(1) +
            's</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].zqConst) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toZero(Math.round(tData.zAtt[key].hurt_q * (1 + person.zqHurtAdd))) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toPerS(Math.round(tData.zAtt[key].hurt_b * (1 + person.bleedAdd))) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toZero(Math.round(tData.zAtt[key].hurt_p * (1 + person.poisonAdd))) +
            '</div></div><div class="table_ot table_Tx">';
        if (tData.zAtt[key].TX_inf != '') {
            myContent = myContent +
                '<div class="content_TxSup">特</div><div class="content_Tx">' +
                tData.zAtt[key].TX_inf + '</div>';
        }
        myContent = myContent + '</div>';

        myContent = myContent + '<div class="table_Lzo" style=""><div class="content_LzLine" style="display: none;">-</div><div class="content_Lz" style="display: inline;">' +
            tData.zAtt[key].LZ_inf + '</div></div>';

        myContent = myContent + '</div></div>';
        $mySelectID.find('.tableContentBox_A').append(myContent);
    }
}

$(document).on('click', '#liFiBox_R', function () {
    if ($(this).hasClass('liFiBox_R')) {
        $('.liFiBox_Sss').removeClass('myBlur');
        $('.liFiBox_S').removeClass('shake shake-slow');
        $('.liFiBox_Sxx').remove();
        $('.liFiBox_AL').addClass('liFiBox_A').removeClass('liFiBox_AL');
        $(this).removeClass('liFiBox_R');
    } else {
        $('.liFiBox_Sss').addClass('myBlur');
        $('.liFiBox_S').addClass('shake shake-slow').append('<div class=liFiBox_Sxx>×</div>');
        $('.liFiBox_A').addClass('liFiBox_AL').removeClass('liFiBox_A');
        $(this).addClass('liFiBox_R');
    }
});
$(document).on('click', '.liFiBox_Sxx', function () {
    $(this).parent().html('+').attr('class', 'liFiBox_size liFiBox_AL').attr('id', '');
    $('#liFiBox_R').css('z-index', 10);
    if ($('#liFiBox_S_select').length <= 0) {
        $('.loginNext').addClass('next_off');
    }
    return false;
});
$(document).on('click', '.next_02', function () {
    loadGameFile(mySaveFile);
    if (!$(this).hasClass('next_off')) {
        $(this).addClass('next_off');
        $(this).switchClass('next_02', 'next_03', 800, 'easeInOutCubic');
        $('.loFiGd_F, #liFiBox_R').hide('fade', 300, function () {
            $(this).remove();
        });
        $('#loginInTopMu span').show('fade', 200);
        $('#selectSpan').text('选择派别');
        $('.loFiGd_C').show();

        $('.logoPosition02').hide('blind', {direction: 'left'}, 200, function () {
            let s = $('.logoPosition02');
            $('.leftContent').switchClass('leftContent_padding', '', 200, 'easeInOutCubic');
            $('.smallBaseBox').switchClass('smallBaseBox', 'bigBaseBox', 500, 'easeInOutCubic', function () {
                s.removeClass('logoPosition02').addClass('logoPosition03');
                s.show('blind', {direction: 'left'}, 200);
                let j = 0;

                function showLiFiBox() {
                    if (j < 11) {
                        $('.loFiGd_C').find('li').eq(j).show('fade', 200);
                        j++;
                    } else {
                        window.clearInterval(myVarTime);
                    }
                }

                let myVarTime = window.setInterval(function () {
                    showLiFiBox()
                }, 30);
                $('.rightContent').show('fade', 200);
                $('.schoolBox').eq(0).trigger("click");
            });
        });
    }
});

$(".schoolBox").hover(function () {
    $(this).find('.schoolBox_top').eq(0).addClass('schoolBox_top_hover');
}, function () {
    $(this).find('.schoolBox_top').eq(0).removeClass('schoolBox_top_hover');
});


$(document).on('click', '.next_03', function () {
    $('#giveName').text(personA.myName);
    if (!$(this).hasClass('next_off')) {
        $(this).addClass('next_04').removeClass('next_03');
        $('.loFiGd_B,.loFiGd_C').hide('fade', 200, function () {
            $('.setBox_left,.setBox_right').show('fade', 200);
        });
        $('#loginInTopMu').find('span').eq(1).addClass('garyFont canClick');
        $('#loginInTopMu').find('span').eq(3).removeClass('garyFont');
    }
});

$(document).on('click', '.canClick', function () {
    $('#loginInTopMu').find('span').eq(1).removeClass('garyFont canClick');
    $('#loginInTopMu').find('span').eq(3).addClass('garyFont');
    $('.next_04').removeClass('next_04').addClass('next_03');
    $('.setBox_left').hide('fade', 200);
    $('.setBox_right').hide('fade', 200);
    $('.loFiGd_B,.loFiGd_C').show('fade', 200);
});

let myChart;
let option = {};

function setMyChat(six = new Array(5), sixSum = new Array(5), getID, onOff) {
    let ti = ['', '', '', '', ''];
    if (onOff == 1) {
        ti[0] = '直攻';
        ti[1] = '闪避';
        ti[2] = '防御';
        ti[3] = '妨碍';
        ti[4] = '消耗';
    }
    myChart = eChart.init(document.getElementById(getID));
    // 指定图表的配置项和数据
    option = {
        renderer: 'svg',
        // title: {
        //     text: '基础雷达图'
        // },
        // tooltip: {
        //     show: false,
        // },
        // legend: {
        //     data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        // },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#1A1E26',
                    // fontSize: '12px',
                    // backgroundColor: '#999',
                    // borderRadius: 3,
                    // padding: [3, 5]
                }
            },
            nameGap: 5,
            indicator: [
                {name: ti[0], max: sixSum[0]},
                {name: ti[1], max: sixSum[1]},
                {name: ti[2], max: sixSum[2]},
                {name: ti[3], max: sixSum[3]},
                {name: ti[4], max: sixSum[4]}
            ],
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            areaStyle: {
                normal: {
                    color: 'rgba(156, 169, 194, 0.5)'
                }
            },
            data: [
                {
                    // value: [30, 10, 20, 5, 15]
                    value: [six[0], six[1], six[2], six[3], six[4]]
                }
            ],
        }],
        color: [
            '#707070',
        ],
    };
// 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


$('.showTabs').tabs();


$(document).on('mouseenter', '.tableContent', function () {
    $(this).addClass('tableContent_hover');
    let zName = $(this).find('div').eq(0).text();
    let $this = $(this).parent().parent().parent();
    let tData;
    $this.find('.tableBox_Button_Rt').text(zName);
    switch ($(this).parent().prev().find('.table_Name').text()) {
        case '攻击招式':
            $this.find('.tableBox_Button_Rb').text('攻击招式');
            if (('' + zName + '') in tDataA.zAtt) {
                tData = tDataA;
            } else {
                tData = tDataB;
            }
            $this.find('.tableBox_Button_C').text(tData.zAtt['' + zName + ''].remark);
            break;
        case '格挡招式':
            $this.find('.tableBox_Button_Rb').text('格挡招式');
            if (('' + zName + '') in tDataA.zDef) {
                tData = tDataA;
            } else {
                tData = tDataB;
            }
            $this.find('.tableBox_Button_C').text(tData.zDef['' + zName + ''].remark);
            break;
        case '闪避招式':
            $this.find('.tableBox_Button_Rb').text('闪避招式');
            if (('' + zName + '') in tDataA.zDod) {
                tData = tDataA;
            } else {
                tData = tDataB;
            }
            $this.find('.tableBox_Button_C').text(tData.zDod['' + zName + ''].remark);
            break;
        case '被动功法':
            $this.find('.tableBox_Button_Rb').text('被动功法');
            if (('' + zName + '') in tDataA.zPas) {
                tData = tDataA;
            } else {
                tData = tDataB;
            }
            $this.find('.tableBox_Button_C').text(tData.zPas['' + zName + ''].remark);
            break;
    }
});
$(document).on('mouseleave', '.tableContent', function () {
    $(this).removeClass('tableContent_hover');
});

$(document).on('click', '.tableT_Tx', function () {
    let pa = $(this).parent().parent();
    pa.find('.tableT_TBo').addClass('tableTitle-color');
    pa.find('.tableT_NumberT, .tableT_NumberB').hide('fade', 100, function () {
        pa.find('.tableT_TBo').switchClass('tableT_TBo', 'table_ot tableT_TB', 200, function () {
            pa.find('.tableT_NumberS').show();
        });
        pa.find('.tableT_Lzo').html('<span>连<br/>招</span>').switchClass('tableT_Lzo', 'table_ot tableT_Lz', 200);
        pa.find('.tableT_Tx').switchClass('table_ot tableT_Tx', 'tableT_Txo', 200).html('命中后特效');
    });

    pa.find('.table_TBo').addClass('grayBox-color');
    pa.find('.table_NumberN').hide('fade', 100);
    pa.find('.table_TBo').switchClass('table_TBo', 'table_ot table_TB', 200);
    pa.find('.table_Lzo').switchClass('table_Lzo', 'table_ot table_Lz', 200);
    pa.find('.content_Lz').hide();
    pa.find('.content_LzLine').show();
    pa.find('.table_Tx').switchClass('table_ot table_Tx', 'table_Txo', 201);
    pa.find('.content_TxSup').hide();
    pa.find('.content_Tx').show();
});
$(document).on('click', '.tableT_Lz', function () {
    let pa = $(this).parent().parent();
    pa.find('.tableT_TBo').addClass('tableTitle-color');
    pa.find('.tableT_NumberT, .tableT_NumberB').hide('fade', 100, function () {
        pa.find('.tableT_TBo').switchClass('tableT_TBo', 'table_ot tableT_TB', 200, function () {
            pa.find('.tableT_NumberS').show();
        });
        pa.find('.tableT_Txo').html('<span>特<br/>效</span>').switchClass('tableT_Txo', 'table_ot tableT_Tx', 200);
        pa.find('.tableT_Lz').html('连招').switchClass('table_ot tableT_Lz', 'tableT_Lzo', 200);
    });

    pa.find('.table_TBo').addClass('grayBox-color');
    pa.find('.table_NumberN').hide('fade', 100);
    pa.find('.table_TBo').switchClass('table_TBo', 'table_ot table_TB', 200);
    pa.find('.table_Txo').switchClass('table_Txo', 'table_ot table_Tx', 200);
    pa.find('.content_Tx').hide();
    pa.find('.content_TxSup').show();
    pa.find('.table_Lz').switchClass('table_ot table_Lz', 'table_Lzo', 201);
    pa.find('.content_LzLine').hide();
    pa.find('.content_Lz').show();
});
$(document).on('click', '.tableT_TB', function () {
    let pa = $(this).parent().parent();
    pa.find('.tableT_NumberS').hide();
    pa.find('.tableT_Txo').html('<span>特<br/>效</span>').switchClass('tableT_Txo', 'table_ot tableT_Tx', 200);
    pa.find('.tableT_Lzo').html('<span>连<br/>招</span>').switchClass('tableT_Lzo', 'table_ot tableT_Lz', 200);
    pa.find('.tableT_TB').switchClass('table_ot tableT_TB', 'tableT_TBo', 200, function () {
        pa.find('.tableT_NumberT, .tableT_NumberB, .table_NumberN').show();
        pa.find('.tableT_TBo').removeClass('tableTitle-color');
    });

    pa.find('.table_Lzo').switchClass('table_Lzo', 'table_ot table_Lz', 200);
    pa.find('.content_Lz').hide();
    pa.find('.content_LzLine').show();
    pa.find('.table_Txo').switchClass('table_Txo', 'table_ot table_Tx', 200);
    pa.find('.content_Tx').hide();
    pa.find('.content_TxSup').show();
    pa.find('.table_TB').switchClass('table_ot table_TB', 'table_ot table_TBo', 201);
    pa.find('.table_TB').removeClass('grayBox-color');
});

//---------------------------------------------------------------------------------

function loadSchoolBoxStar() {
    $('.schoolBox_logo').each(function () {
        let mySchool = $(this).attr('class').toString().substr(-2, 2);
        let myContent = '';
        for (let i = 0; i < data_S['' + mySchool + ''].star.length; i++) {
            myContent = myContent + '<div>' + data_S['' + mySchool + ''].star[i] + '</div>';
        }
        $(this).parent().parent().children('.schoolBox_bottom').html(myContent);
    });
}

function toPercentAdd(c) {
    if (c > 0) {
        return '+' + Math.round(c * 100) + '%';
    } else if (c < 0) {
        return Math.round(c * 100) + '%';
    } else {
        return '-';
    }
}

function toPercent(c) {
    return Math.round(c * 100) + '%';
}

function toZero(c) {
    if (c == 0) {
        return '-';
    }
    return c;
}

function toPerS(c) {
    if (c == 0) {
        return '-';
    } else {
        return c + "/s";
    }
}

function toSpeed(c) {
    if (c > 0) {
        return '+' + c + 's';
    } else {
        return c + 's';
    }
}


$(".setSixBoxList:nth-child(2)").hover(function () {
    $('.setBoxCon:nth-child(1),.setBoxCon:nth-child(2),.tableT_NumberB .table_NumberN:nth-child(1),.tableT_NumberB .table_NumberN:nth-child(2),.table_TBo .table_NumberN:nth-child(1),.table_TBo .table_NumberN:nth-child(2)').addClass('myFocusDark');
}, function () {
    $('.setBoxCon:nth-child(1),.setBoxCon:nth-child(2),.tableT_NumberB .table_NumberN:nth-child(1),.tableT_NumberB .table_NumberN:nth-child(2),.table_TBo .table_NumberN:nth-child(1),.table_TBo .table_NumberN:nth-child(2)').removeClass('myFocusDark');
});
$(".setSixBoxList:nth-child(3)").hover(function () {
    $('.setBoxCon:nth-child(3),.setBoxCon:nth-child(4),.tableT_NumberB .table_NumberN:nth-child(5),.tableT_NumberB .table_NumberN:nth-child(6),.tableT_NumberB .table_NumberN:nth-child(7),.table_TBo .table_NumberN:nth-child(5),.table_TBo .table_NumberN:nth-child(6),.table_TBo .table_NumberN:nth-child(7)').addClass('myFocusDark');
}, function () {
    $('.setBoxCon:nth-child(3),.setBoxCon:nth-child(4),.tableT_NumberB .table_NumberN:nth-child(5),.tableT_NumberB .table_NumberN:nth-child(6),.tableT_NumberB .table_NumberN:nth-child(7),.table_TBo .table_NumberN:nth-child(5),.table_TBo .table_NumberN:nth-child(6),.table_TBo .table_NumberN:nth-child(7)').removeClass('myFocusDark');
});
$(".setSixBoxList:nth-child(4)").hover(function () {
    $('.setBoxCon:nth-child(5),.setBoxCon:nth-child(6),.setBoxCon:nth-child(7),.setBoxCon:nth-child(8),.setBoxCon:nth-child(9),.tableT_NumberB .table_NumberN:nth-child(3),.tableT_NumberB .table_NumberN:nth-child(10),.tableT_NumberB .table_NumberN:nth-child(11),.table_TBo .table_NumberN:nth-child(3),.table_TBo .table_NumberN:nth-child(10),.table_TBo .table_NumberN:nth-child(11)').addClass('myFocusDark');
}, function () {
    $('.setBoxCon:nth-child(5),.setBoxCon:nth-child(6),.setBoxCon:nth-child(7),.setBoxCon:nth-child(8),.setBoxCon:nth-child(9),.tableT_NumberB .table_NumberN:nth-child(3),.tableT_NumberB .table_NumberN:nth-child(10),.tableT_NumberB .table_NumberN:nth-child(11),.table_TBo .table_NumberN:nth-child(3),.table_TBo .table_NumberN:nth-child(10),.table_TBo .table_NumberN:nth-child(11)').removeClass('myFocusDark');
});
$(".setSixBoxList:nth-child(5)").hover(function () {
    $('.setBoxCon:nth-child(10),.setBoxCon:nth-child(11)').addClass('myFocusDark');
}, function () {
    $('.setBoxCon:nth-child(10),.setBoxCon:nth-child(11)').removeClass('myFocusDark');
});
$(".setSixBoxList:nth-child(6)").hover(function () {
    $('.setBoxCon:nth-child(12),.setBoxCon:nth-child(13),.setBoxCon:nth-child(14),.tableT_NumberB .table_NumberN:nth-child(9),.table_TBo .table_NumberN:nth-child(9)').addClass('myFocusDark');
}, function () {
    $('.setBoxCon:nth-child(12),.setBoxCon:nth-child(13),.setBoxCon:nth-child(14),.tableT_NumberB .table_NumberN:nth-child(9),.table_TBo .table_NumberN:nth-child(9)').removeClass('myFocusDark');
});


function getByteLength(str) {
    return str.replace(/[^\u0000-\u00ff]/g, 'aa').length;
}

$(document).on('mouseenter', '.content_Tx', function () {
    let maxWidth = 64;
    if (getByteLength($(this).text()) > maxWidth) {
        $(this).addClass('heightTip');
    }
});
$(document).on('mouseleave ', '.content_Tx', function () {
    $(this).removeClass('heightTip');
});


$(document).on('mouseenter', '.table_Tx_D', function () {
    let maxWidth = 42;
    if (getByteLength($(this).text()) > maxWidth) {
        $(this).addClass('heightTip');
    }
});
$(document).on('mouseenter', '.table_Tx_S', function () {
    let maxWidth = 36;
    if (getByteLength($(this).text()) > maxWidth) {
        $(this).addClass('heightTip');
    }
});
$(document).on('mouseleave ', '.table_Tx_D,.table_Tx_S', function () {
    $(this).removeClass('heightTip');
});

function loadGameFile(a) {
    let mySchool = 'SL';
    tDataA = data_S['' + mySchool + ''];
    $('#sixDataSet_all_A').text(13 - a[0] - a[1] - a[2] - a[3] - a[4]);
    $('#set_SX_LL_A').text(a[0]);
    $('#set_SX_MJ_A').text(a[1]);
    $('#set_SX_ZL_A').text(a[2]);
    $('#set_SX_TP_A').text(a[3]);
    $('#set_SX_NG_A').text(a[4]);
    onOrOff(a, 0);
    personA.myName = '段誉';
    personB.myName = '晓月';
    personA.sixData[0] = a[0];
    personA.sixData[1] = a[1];
    personA.sixData[2] = a[2];
    personA.sixData[3] = a[3];
    personA.sixData[4] = a[4];
    personA.init();
    setSX_LL();
    setSX_MJ();
    setSX_ZL();
    setSX_TP();
    setSX_NG();
    initHP(personA.hp.head, personA.hp.body, personA.hp.hand, personA.hp.leg, 0);
    personA.init_photo();
    changePhoto(0);
}

function initHP(head, body, hand, leg, who) {
    let w = $('.setBox_lB').css('width');
    w = w.substring(0, w.length - 2) - 20;
    if (who) {
        $('#bodyDP_B_body').parent().css('width', w + 'px');
        w = w / body;
        $('#bodyDP_B_head').parent().css('width', Math.round(w * head) + 'px');
        $('#bodyDP_B_handL').parent().css('width', Math.round(w * hand[0]) + 'px');
        $('#bodyDP_B_handR').parent().css('width', Math.round(w * hand[1]) + 'px');
        $('#bodyDP_B_legL').parent().css('width', Math.round(w * leg[0]) + 'px');
        $('#bodyDP_B_legR').parent().css('width', Math.round(w * leg[1]) + 'px');
        $('#dateB_head_hp').text(head);
        $('#dataB_body_hp').text(body);
        $('#dataB_handL_hp').text(hand[0]);
        $('#dataB_handR_hp').text(hand[1]);
        $('#dataB_legL_hp').text(leg[0]);
        $('#dataB_legR_hp').text(leg[1]);
    } else {
        $('#bodyDP_A_body').parent().css('width', w + 'px');
        w = w / body;
        $('#bodyDP_A_head').parent().css('width', Math.round(w * head) + 'px');
        $('#bodyDP_A_handL').parent().css('width', Math.round(w * hand[0]) + 'px');
        $('#bodyDP_A_handR').parent().css('width', Math.round(w * hand[1]) + 'px');
        $('#bodyDP_A_legL').parent().css('width', Math.round(w * leg[0]) + 'px');
        $('#bodyDP_A_legR').parent().css('width', Math.round(w * leg[1]) + 'px');
        $('#dateA_head_hp').text(head);
        $('#dataA_body_hp').text(body);
        $('#dataA_handL_hp').text(hand[0]);
        $('#dataA_handR_hp').text(hand[1]);
        $('#dataA_legL_hp').text(leg[0]);
        $('#dataA_legR_hp').text(leg[1]);
    }
}


$(document).on('click', '.bt_sub', function () {
    let t = $(this).next();
    let e = t.attr('id');

    if ($(this).parent().parent().parent().parent().attr('class') == 'setBox_right') {
        let A = $('#sixDataSet_all_A');
        switch (e) {
            case 'set_SX_LL_A':
                if (personA.sixData[0] >= 1) {
                    personA.calc_LL(-1);
                    t.text(personA.sixData[0]);
                    A.text(Number(A.text()) + 1);
                    setSX_LL();
                }
                break;
            case 'set_SX_MJ_A':
                if (personA.sixData[1] >= 1) {
                    personA.calc_MJ(-1);
                    t.text(personA.sixData[1]);
                    A.text(Number(A.text()) + 1);
                    setSX_MJ();
                }
                break;
            case 'set_SX_ZL_A':
                if (personA.sixData[2] >= 1) {
                    personA.calc_ZL(-1);
                    t.text(personA.sixData[2]);
                    A.text(Number(A.text()) + 1);
                    setSX_ZL();
                }
                break;
            case 'set_SX_TP_A':
                if (personA.sixData[3] >= 1) {
                    personA.calc_TP(-1);
                    t.text(personA.sixData[3]);
                    A.text(Number(A.text()) + 1);
                    setSX_TP();
                }
                break;
            case 'set_SX_NG_A':
                if (personA.sixData[4] >= 1) {
                    personA.calc_NL(-1);
                    t.text(personA.sixData[4]);
                    A.text(Number(A.text()) + 1);
                    setSX_NG();
                }
                break;
        }
        onOrOff(personA.sixData, 0);
        setMyChat(changeSixDtoChart(tDataA.sixData, personA.sixData), data_S.sixDataSum, 'myBigChart', 1);
        personA.init_photo();
        changePhoto(0);
    } else {
        let B = $('#sixDataSet_all_B');
        let s = $('.statusBoxR').find('.sixDataFont').eq(0).find('.sdsBox');
        switch (e) {
            case 'set_SX_LL_B':
                if (personB.sixData[0] >= 1) {
                    personB.calc_LL(-1);
                    t.text(personB.sixData[0]);
                    B.text(Number(B.text()) + 1);
                    setSX_LL();
                    s.eq(0).text(t.text());
                }
                break;
            case 'set_SX_MJ_B':
                if (personB.sixData[1] >= 1) {
                    personB.calc_MJ(-1);
                    t.text(personB.sixData[1]);
                    B.text(Number(B.text()) + 1);
                    setSX_MJ();
                    s.eq(1).text(t.text());
                }
                break;
            case 'set_SX_ZL_B':
                if (personB.sixData[2] >= 1) {
                    personB.calc_ZL(-1);
                    t.text(personB.sixData[2]);
                    B.text(Number(B.text()) + 1);
                    setSX_ZL();
                    s.eq(2).text(t.text());
                }
                break;
            case 'set_SX_TP_B':
                if (personB.sixData[3] >= 1) {
                    personB.calc_TP(-1);
                    t.text(personB.sixData[3]);
                    B.text(Number(B.text()) + 1);
                    setSX_TP();
                    s.eq(3).text(t.text());
                }
                break;
            case 'set_SX_NG_B':
                if (personB.sixData[4] >= 1) {
                    personB.calc_NL(-1);
                    t.text(personB.sixData[4]);
                    B.text(Number(B.text()) + 1);
                    setSX_NG();
                    s.eq(4).text(t.text());
                }
                break;
        }
        onOrOff(personB.sixData, 1);
        setMyChat(changeSixDtoChart(tDataB.sixData, personB.sixData), data_S.sixDataSum, 'myLittleChartB', 0);
        personB.init_photo();
        changePhoto(1);
    }

});

$(document).on('click', '.bt_add', function () {
    if ($(this).parent().parent().parent().parent().attr('class') == 'setBox_right') {
        let A = $('#sixDataSet_all_A');
        if (A.text() > 0) {
            let t = $(this).prev();
            let e = t.attr('id');
            switch (e) {
                case 'set_SX_LL_A':
                    if (personA.sixData[0] <= 4) {
                        personA.calc_LL(1);
                        t.text(personA.sixData[0]);
                        A.text(A.text() - 1);
                        setSX_LL();
                    }
                    break;
                case 'set_SX_MJ_A':
                    if (personA.sixData[1] <= 4) {
                        personA.calc_MJ(1);
                        t.text(personA.sixData[1]);
                        A.text(A.text() - 1);
                        setSX_MJ();
                    }
                    break;
                case 'set_SX_ZL_A':
                    if (personA.sixData[2] <= 4) {
                        personA.calc_ZL(1);
                        t.text(personA.sixData[2]);
                        A.text(A.text() - 1);
                        setSX_ZL();
                    }
                    break;
                case 'set_SX_TP_A':
                    if (personA.sixData[3] <= 4) {
                        personA.calc_TP(1);
                        t.text(personA.sixData[3]);
                        A.text(A.text() - 1);
                        setSX_TP();
                    }
                    break;
                case 'set_SX_NG_A':
                    if (personA.sixData[4] <= 2) {
                        personA.calc_NL(1);
                        t.text(personA.sixData[4]);
                        A.text(A.text() - 1);
                        setSX_NG();
                    }
                    break;
            }
            onOrOff(personA.sixData, 0);
            setMyChat(changeSixDtoChart(tDataA.sixData, personA.sixData), data_S.sixDataSum, 'myBigChart', 1);
            personA.init_photo();
            changePhoto(0);
        }
    } else {
        let s = $('.statusBoxR').find('.sixDataFont').eq(0).find('.sdsBox');
        let B = $('#sixDataSet_all_B');
        if (B.text() > 0) {
            let t = $(this).prev();
            let e = t.attr('id');
            switch (e) {
                case 'set_SX_LL_B':
                    if (personB.sixData[0] <= 4) {
                        personB.calc_LL(1);
                        t.text(personB.sixData[0]);
                        B.text(B.text() - 1);
                        setSX_LL();
                        s.eq(0).text(t.text());
                    }
                    break;
                case 'set_SX_MJ_B':
                    if (personB.sixData[1] <= 4) {
                        personB.calc_MJ(1);
                        t.text(personB.sixData[1]);
                        B.text(B.text() - 1);
                        setSX_MJ();
                        s.eq(1).text(t.text());
                    }
                    break;
                case 'set_SX_ZL_B':
                    if (personB.sixData[2] <= 4) {
                        personB.calc_ZL(1);
                        t.text(personB.sixData[2]);
                        B.text(B.text() - 1);
                        setSX_ZL();
                        s.eq(2).text(t.text());
                    }
                    break;
                case 'set_SX_TP_B':
                    if (personB.sixData[3] <= 4) {
                        personB.calc_TP(1);
                        t.text(personB.sixData[3]);
                        B.text(B.text() - 1);
                        setSX_TP();
                        s.eq(3).text(t.text());
                    }
                    break;
                case 'set_SX_NG_B':
                    if (personB.sixData[4] <= 2) {
                        personB.calc_NL(1);
                        t.text(personB.sixData[4]);
                        B.text(B.text() - 1);
                        setSX_NG();
                        s.eq(4).text(t.text());
                    }
                    break;
            }
            onOrOff(personB.sixData, 1);
            setMyChat(changeSixDtoChart(tDataB.sixData, personB.sixData), data_S.sixDataSum, 'myLittleChartB', 0);
            personB.init_photo();
            changePhoto(1);
        }
    }

});

function changePhoto(who) {
    if (who) {
        $('#pB_body').attr('points', '' + toSpace(personB.photo.body) + '');
        $('#pB_head').attr('points', '' + toSpace(personB.photo.head) + '');
        $('#pB_legL').attr('points', '' + toSpace(personB.photo.legL) + '');
        $('#pB_legR').attr('points', '' + toSpace(personB.photo.legR) + '');
        $('#pB_handL').attr('points', '' + toSpace(personB.photo.handL) + '');
        $('#pB_handR').attr('points', '' + toSpace(personB.photo.handR) + '');
        $('#pB_eye').attr('points', '' + toSpace(personB.photo.eye) + '');
    } else {
        $('#pA_body').attr('points', '' + toSpace(personA.photo.body) + '');
        $('#pA_head').attr('points', '' + toSpace(personA.photo.head) + '');
        $('#pA_legL').attr('points', '' + toSpace(personA.photo.legL) + '');
        $('#pA_legR').attr('points', '' + toSpace(personA.photo.legR) + '');
        $('#pA_handL').attr('points', '' + toSpace(personA.photo.handL) + '');
        $('#pA_handR').attr('points', '' + toSpace(personA.photo.handR) + '');
        $('#pA_eye').attr('points', '' + toSpace(personA.photo.eye) + '');
    }
}

function onOrOff(a, who) {
    let sum = 13 - a[0] - a[1] - a[2] - a[3] - a[4];
    if (who) {
        if (sum <= 0) {
            $('#set_SX_LL_B,#set_SX_MJ_B,#set_SX_ZL_B,#set_SX_TP_B,#set_SX_NG_B').next().addClass('bt_off');
        } else {
            $('#set_SX_LL_B,#set_SX_MJ_B,#set_SX_ZL_B,#set_SX_TP_B,#set_SX_NG_B').next().removeClass('bt_off');
        }
        if (a[0] >= 5) {
            $('#set_SX_LL_B').next().addClass('bt_off');
        } else if (a[0] <= 0) {
            $('#set_SX_LL_B').prev().addClass('bt_off');
        } else {
            $('#set_SX_LL_B').prev().removeClass('bt_off');
        }
        if (a[1] >= 5) {
            $('#set_SX_MJ_B').next().addClass('bt_off');
        } else if (a[1] <= 0) {
            $('#set_SX_MJ_B').prev().addClass('bt_off');
        } else {
            $('#set_SX_MJ_B').prev().removeClass('bt_off');
        }
        if (a[2] >= 5) {
            $('#set_SX_ZL_B').next().addClass('bt_off');
        } else if (a[2] <= 0) {
            $('#set_SX_ZL_B').prev().addClass('bt_off');
        } else {
            $('#set_SX_ZL_B').prev().removeClass('bt_off');
        }
        if (a[3] >= 5) {
            $('#set_SX_TP_B').next().addClass('bt_off');
        } else if (a[3] <= 0) {
            $('#set_SX_TP_B').prev().addClass('bt_off');
        } else {
            $('#set_SX_TP_B').prev().removeClass('bt_off');
        }
        if (a[4] >= 3) {
            $('#set_SX_NG_B').next().addClass('bt_off');
        } else if (a[4] <= 0) {
            $('#set_SX_NG_B').prev().addClass('bt_off');
        } else {
            $('#set_SX_NG_B').prev().removeClass('bt_off');
        }
    } else {
        if (sum <= 0) {
            $('#set_SX_LL_A,#set_SX_MJ_A,#set_SX_ZL_A,#set_SX_TP_A,#set_SX_NG_A').next().addClass('bt_off');
        } else {
            $('#set_SX_LL_A,#set_SX_MJ_A,#set_SX_ZL_A,#set_SX_TP_A,#set_SX_NG_A').next().removeClass('bt_off');
        }
        if (a[0] >= 5) {
            $('#set_SX_LL_A').next().addClass('bt_off');
        } else if (a[0] <= 0) {
            $('#set_SX_LL_A').prev().addClass('bt_off');
        } else {
            $('#set_SX_LL_A').prev().removeClass('bt_off');
        }
        if (a[1] >= 5) {
            $('#set_SX_MJ_A').next().addClass('bt_off');
        } else if (a[1] <= 0) {
            $('#set_SX_MJ_A').prev().addClass('bt_off');
        } else {
            $('#set_SX_MJ_A').prev().removeClass('bt_off');
        }
        if (a[2] >= 5) {
            $('#set_SX_ZL_A').next().addClass('bt_off');
        } else if (a[2] <= 0) {
            $('#set_SX_ZL_A').prev().addClass('bt_off');
        } else {
            $('#set_SX_ZL_A').prev().removeClass('bt_off');
        }
        if (a[3] >= 5) {
            $('#set_SX_TP_A').next().addClass('bt_off');
        } else if (a[3] <= 0) {
            $('#set_SX_TP_A').prev().addClass('bt_off');
        } else {
            $('#set_SX_TP_A').prev().removeClass('bt_off');
        }
        if (a[4] >= 3) {
            $('#set_SX_NG_A').next().addClass('bt_off');
        } else if (a[4] <= 0) {
            $('#set_SX_NG_A').prev().addClass('bt_off');
        } else {
            $('#set_SX_NG_A').prev().removeClass('bt_off');
        }
    }
}

function setSX_LL() {
    $('#attAdd').text(toPercentAdd(personA.attAdd));
    $('#flawDam').text(toPercent(personA.flawDam));
    let i = 0;
    for (let key in tDataA.zAtt) {
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(0).text(toZero(Math.round(tDataA.zAtt[key].hurt_o * (1 + personA.attAdd))));
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(1).text(toZero(Math.round(tDataA.zAtt[key].hurt_i * (1 + personA.attAdd))));
        i++;
    }
}

function setSX_MJ() {
    $('#timeAdd_q').text(toSpeed(personA.timeAdd_q));
    $('#timeAdd_z').text(toSpeed(personA.timeAdd_z));
    $('#timeAdd_h').text(toSpeed(personA.timeAdd_h));
    $('#dod_head').text(toPercent(personA.dod_head));
    $('#dod_body').text(toPercent(personA.dod_body));
    $('#dod_hand').text(toPercent(personA.dod_hand));
    $('#dod_leg').text(toPercent(personA.dod_leg));
    let i = 0;
    for (let key in tDataA.zAtt) {
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(4).text((tDataA.zAtt[key].time_q + personA.timeAdd_q).toFixed(1) + 's');
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(5).text((tDataA.zAtt[key].time_z + personA.timeAdd_z).toFixed(1) + 's');
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(6).text((tDataA.zAtt[key].time_h + personA.timeAdd_h).toFixed(1) + 's');
        i++;
    }

}

function setSX_ZL() {
    $('#flawFind').text(toPercentAdd(personA.flawFind));
    $('#bleedAdd').text(toPercentAdd(personA.bleedAdd));
    $('#poisonAdd').text(toPercentAdd(personA.poisonAdd));
    $('#hitRateAdd').text(toPercentAdd(personA.hitRateAdd));
    $('#getInf').text(personA.getInf);
    let i = 0;
    for (let key in tDataA.zAtt) {
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(2).text(toPercentAdd(tDataA.zAtt[key].hit + personA.hitRateAdd));
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(9).text(toPerS(Math.round(tDataA.zAtt[key].hurt_b * (1 + personA.bleedAdd))));
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(10).text(toZero(Math.round(tDataA.zAtt[key].hurt_p * (1 + personA.poisonAdd))));
        i++;
    }
}

function setSX_TP() {
    $('#def_o').text(toPercent(personA.def_o));
    $('#block_head').text(toPercent(personA.block_head));
    $('#block_body').text(toPercent(personA.block_body));
    $('#block_hand').text(toPercent(personA.block_hand));
    $('#block_leg').text(toPercent(personA.block_leg));
}

function setSX_NG() {
    $('#zqHurtAdd').text(toPercentAdd(personA.zqHurtAdd));
    $('#zqVal').text(personA.zqVal);
    $('#zqPerSec').text(personA.zqPerSec + '/0.1s');
    let i = 0;
    for (let key in tDataA.zAtt) {
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(8).text(toZero(Math.round(tDataA.zAtt[key].hurt_q * (1 + personA.zqHurtAdd))));
        i++;
    }
}

function changeSixDtoChart(school, six) {
    let c = new Array(4);
    c[0] = Math.round(school[0] + six[0] * 3 + six[2] + six[4]);
    c[1] = Math.round(school[1] + six[1] * 3 + six[4]);
    c[2] = Math.round(school[2] + six[3] * 3);
    c[3] = Math.round(school[3] + six[1] + six[2] + six[3]);
    c[4] = Math.round(school[4] + six[0] * 2 + six[2] * 2 + six[4] * 3);
    return c;
}

function toSpace(a) {
    let c = '';
    for (let i = 0; i < a.length; i++) {
        c += a[i] + ' ';
    }
    return c;
}

// let myWidth = 100;
// $('.blue').click(function () {
//     myWidth = myWidth + 100;
//     let myAnimation = anime({
//         targets: ['.blue'],
//         width: myWidth,
//         easing: 'linear',
//         direction: 'normal',
//         autoplay: false,
//         duration: 200,
//     });
//     myAnimation.play();
//     console.log(myWidth);
// });

//
// anime({
//     targets: '.aaa',
//     points: [
//         {
//             value: [
//                 '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
//                 '70 34 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
//                 '70 24 100 60.369 100.145 117.631 50.855 101.631 3.426 54.369',]
//         },
//         // { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
//         {value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'},
//         {value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'},
//         {value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'},
//         {value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'},
//         {value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'},
//         {value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'},
//         {value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369'},
//         {value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369'}
//     ],
//     easing: 'linear',
//     duration: 5000,
//     loop: true
// });
//
//
// anime({
//     targets: '.cls-233',
//     points: [
//         {value: '61.5 67.5 57.5 71.5 54.5 82.5 45.29 90.14 47.83 106.66 47.83 116.82 57.5 121.5 57.5 128.5 49.5 131.5 43.5 118.5 39.5 95.5 40.2 88.87 37.5 72.5 42.5 58.5 50.5 51.5 58.5 52.5 61.5 67.5 '},
//         {value: '58.59 75.26 57.5 71.5 54.5 82.5 45.29 90.14 47.83 106.66 47.83 116.82 57.5 121.5 57.5 128.5 49.5 131.5 43.5 118.5 39.5 95.5 40.2 88.87 37.5 72.5 42.5 58.5 50.5 51.5 58.5 52.5 58.59 75.26 '},
//     ],
//     easing: 'linear',
//     duration: 2000,
//     loop: true
// });


$(document).on('mouseenter', '.bodyDataList', function () {//绑定鼠标进入事件
    let e = $(this).find('span').eq(0).text();
    let y = $(this).find('span').eq(1).attr('id').substring(4, 5) == 'B';
    switch (e) {
        case '头部':
            if (y) {
                $('#pB_head').addClass('mySvgLight');
            } else {
                $('#pA_head').addClass('mySvgLight');
            }
            break;
        case '躯干':
            if (y) {
                $('#pB_body').addClass('mySvgLight');
            } else {
                $('#pA_body').addClass('mySvgLight');
            }
            break;
        case '左手':
            if (y) {
                $('#pB_handL').addClass('mySvgLight');
            } else {
                $('#pA_handL').addClass('mySvgLight');
            }
            break;
        case '右手':
            if (y) {
                $('#pB_handR').addClass('mySvgLight');
            } else {
                $('#pA_handR').addClass('mySvgLight');
            }
            break;
        case '左脚':
            if (y) {
                $('#pB_legL').addClass('mySvgLight');
            } else {
                $('#pA_legL').addClass('mySvgLight');
            }
            break;
        case '右脚':
            if (y) {
                $('#pB_legR').addClass('mySvgLight');
            } else {
                $('#pA_legR').addClass('mySvgLight');
            }
            break;
    }
});
$(document).on('mouseleave', '.bodyDataList', function () {//绑定鼠标划出事件
    $('.mySvgLight').removeClass('mySvgLight');
});

$(document).on('click', '.next_04', function () {
    if ($('#sixDataSet_all_A').text() != 0) {
        $('#dialogConfirm').html('<p>属性点还有剩余，是否完成设置？</p>');
        $('#dialogConfirm').dialog({
            resizable: false,
            height: "auto",
            width: 400,
            modal: true,
            buttons: {
                "完成设置": function () {
                    $(this).dialog("close");
                    next_04_GoOn();
                },
                "取消": function () {
                    $(this).dialog("close");
                }
            }
        });
    } else {
        next_04_GoOn();
    }
});


function next_04_GoOn() {
    personB.sixData[0] = 2;
    personB.sixData[1] = 2;
    personB.sixData[2] = 2;
    personB.sixData[3] = 2;
    personB.sixData[4] = 2;
    personB.init();
    initHP(personB.hp.head, personB.hp.body, personB.hp.hand, personB.hp.leg, 1);
    personB.init_photo();
    changePhoto(1);

    let html_P = $('.setBox_lM').html();
    let html_D = $('.setBox_lB').html();
    let sltL = $('.statusBoxL');
    let sltR = $('.statusBoxR').find('.sixDataFont').eq(0);
    sltL.find('.statusBox_1').append(html_P);
    sltL.find('.statusBox_2').html(html_D);
    sltL = sltL.find('.sixDataFont').eq(0);
    $('#sNameA').text(personA.myName);
    $('#sNameB').text(personB.myName);
    $('#sSchoolA').text(tDataA.name);
    $('#sLevelA').text(tDataA.level[0]);

    let ij = 0;
    sltL.find('.sdsBox').each(function () {
        $(this).text(personA.sixData[ij]);
        ij++;
    });
    ij = 0;
    sltR.find('.sdsBox').each(function () {
        $(this).text(personB.sixData[ij]);
        ij++;
    });

    $('.rightContent').hide('fade', 200);
    $('.leftContent').hide('fade', 200, function () {
        $('.setBox_lM').html('');
        $('.setBox_lB').html('');
        $('.bigBaseBox').switchClass('bigBaseBox', 'bigBaseBox_changeHeight', 200, 'easeInOutCubic');
        $('.leftLine').switchClass('leftLine', 'leftLine_changeHeight', 200, 'easeInOutCubic', function () {
            $('.leftLine_changeHeight').switchClass('leftLine_changeHeight', 'leftLine_changeWidth', 400, 'easeInOutCubic', function () {
                $('.BaseBox').show('fade', 1, function () {
                    $('.title').show('fade', 1, function () {
                        $('.logoPosition06').show('blind', {direction: 'left'}, 200);
                        $('.bigBaseBox_changeHeight').hide('fade', 200, function () {
                            $('.BaseBox').removeClass('BaseBox_position');
                        });
                        let j = 0;
                        let x = $('.titleTBack');
                        let y = $('.titleTFront');
                        let sum = x.children().length;

                        let myVarTime = window.setInterval(function () {
                            showLiFiBox()
                        }, 100);

                        function showLiFiBox() {
                            if (j < sum) {
                                x.find('div').eq(j).show('fade', 200);
                                y.find('div').eq(j).show('fade', 200);
                                j++;
                            } else {
                                window.clearInterval(myVarTime);
                                $('.contentBigBox').show('fade', 200, function () {
                                    setMyChat(changeSixDtoChart(tDataA.sixData, personA.sixData), data_S.sixDataSum, 'myLittleChartA', 0);
                                    setMyChat(changeSixDtoChart(tDataB.sixData, personB.sixData), data_S.sixDataSum, 'myLittleChartB', 0);
                                });
                            }
                        }
                    });
                });
            });
        });
    });
}

$(document).on('click', '.moSSBox', function () {
    $('.moSSelect').removeClass('moSSelect');
    $(this).addClass('moSSelect');
    let mySchool = $(this).find('.moSLogo').attr('class').toString().substr(-2, 2);
    tDataB = data_S['' + mySchool + ''];
    $('#sSchoolB').text(tDataB.name);
    $('#sLevelB').text(tDataB.level[0]);
    setMyChat(changeSixDtoChart(tDataB.sixData, personB.sixData), data_S.sixDataSum, 'myLittleChartB', 0);
});

$(document).on('click', '.next_05', function () {
    $('#zqSpan_A').text(personA.zqVal);
    $('#zqSpan_B').text(personB.zqVal);
    $('.moDiv,.next_05,.moSetBigBox').hide('fade', 200, function () {
        $('.fightSelectButtonBox').show(function () {
            $('.fightTimeBigBox').show('slide', {direction: 'up'}, 200, function () {
                $('.littleButton').show('slide', {direction: 'left'}, 200);
                $('.speedSetBox,.fightButtonBoxB').show('slide', {direction: 'right'}, 200, function () {
                    $('.fightStart').show('drop', {direction: 'up'}, 200);
                });
            });
        });
    });
});

$(document).on('click', '.changePeople', function () {
    $('.fightStart,.speedSetBox,.fightButtonBoxB,.littleButton,.fightTimeBigBox,.fightSelectButtonBox').hide('fade', 100, function () {
        $('.moDiv,.next_05,.moSetBigBox').show('fade', 200);
    });
});

$(document).on('click', '.table_attFromT >div', function () {
    $(this).parent().find('.tableSelect').removeClass('tableSelect');
    $(this).addClass('tableSelect');
    attCountSub($(this));
});

$(document).on('click', '.table_attToT >div', function () {
    if ($(this).attr('class') != 'tableSelect_disable') {
        $(this).parent().find('.tableSelect').removeClass('tableSelect');
        $(this).addClass('tableSelect');
    }
});

$(document).on('click', '.table_closeIcoA', function () {
    $(this).parent().parent().parent().find('.selectTableContent_A').html('');
    countFlawSum();
    countZQSum();
});

$(document).on('click', '.table_closeIcoB', function () {
    let $selectTC_Box = $(this).parent().parent().parent().parent();
    $(this).parent().parent().parent().remove();
    $selectTC_Box.find('.table_Combo_T').attr('class', 'table_Combo_F');
    $selectTC_Box.find('.table_Combo_F').prev().hide();
    $selectTC_Box.find('.table_Combo_F').show();
    $selectTC_Box.find('.table_Combo_F').last().hide();
    attCountNum($selectTC_Box);
    comboCostCount($selectTC_Box);
    countFlawSum();
    countZQSum();
});

$('.selectTableContent_A').sortable({
    placeholder: "selectTC_Box",
    cursor: "move",
    revert: true,
    containment: ".kfBox",
    start: function () {
        $(this).find('.table_Combo_T').attr('class', 'table_Combo_F');
        $(this).find('.table_Combo_F').prev().hide();
    },
    update: function () {
        $(this).find('.table_Combo_F').show();
        $(this).find('.table_Combo_F').last().hide();
        attCountNum($(this));
        comboCostCount($(this));
        countFlawSum();
        countZQSum();
    }
}).disableSelection();


$(document).on('click', '.table_Combo_T', function () {
    if ($(this).parent().parent().prev().find('.table_Combo >div:nth-child(2)').attr('class') == 'table_Combo_T') {
        $(this).prev().attr('class', 'table_ComboLink_B');
    } else {
        $(this).prev().hide();
    }
    let $next = $(this).parent().parent().next().find('.table_Combo >div:nth-child(2)');
    if ($next.attr('class') == 'table_Combo_F' || $next.css('display') == 'none') {
        $next.prev().hide();
    } else {
        $next.prev().attr('class', 'table_ComboLink_T');
    }
    $(this).attr('class', 'table_Combo_F');

    let zName, attCost, tData;
    if ($('.selectKf_A_Click').length > 0) {
        tData = tDataA;
    } else {
        tData = tDataB;
    }
    $next = $(this).parent().parent().next();
    zName = $next.find('.table_Name').text();
    if ($next.parent().parent().parent().parent().attr('id') == 'showTabs_sA') {
        attCost = -tData.zAtt['' + zName + ''].zqConst;
        $next.find('.table_attCostT').text(attCost);
    }
    countZQSum();
});

$(document).on('click', '.table_Combo_F', function () {
    if ($(this).parent().parent().prev().find('.table_Combo >div:nth-child(2)').attr('class') == 'table_Combo_T') {
        $(this).prev().attr('class', 'table_ComboLink_L');
    } else {
        $(this).prev().show();
        $(this).prev().attr('class', 'table_ComboLink_T');
    }
    let $next = $(this).parent().parent().next().find('.table_Combo >div:nth-child(2)');
    if ($next.attr('class') == 'table_Combo_F' || $next.css('display') == 'none') {
        $next.prev().show();
        $next.prev().attr('class', 'table_ComboLink_B');
    } else {
        $next.prev().attr('class', 'table_ComboLink_L');
    }
    $(this).attr('class', 'table_Combo_T');

    let zName, attCost, tData;
    if ($('.selectKf_A_Click').length > 0) {
        tData = tDataA;
    } else {
        tData = tDataB;
    }
    $next = $(this).parent().parent().next();
    zName = $next.find('.table_Name').text();
    if ($next.parent().parent().parent().parent().attr('id') == 'showTabs_sA') {
        attCost = -Math.round(tData.zAtt['' + zName + ''].zqConst * data_const.comboCost);
        $next.find('.table_attCostT').text(attCost);
    }
    countZQSum();
});

$(document).on('click', '.selectBbox', function () {
    $(this).hide();
});

$(document).on('click', '.selectKf_A', function () {
    if ($('.kfSelectBox').css('display') != 'none') {
        $('.kfSelectBox').hide('blind', {direction: 'right'}, 100, function () {
            $('.selectKf_B_Click').switchClass('selectKf_B_Click', 'selectKf_B', 200, 'easeInOutCubic', function () {
                f();
            });
        });
    } else {
        f();
    }

    function f() {
        $('.tableContentBox_A').html('');
        $('#showTabs_sA .selectTableContent_A').html(selectBoxHtml_A[0]);
        $('#showTabs_sD .selectTableContent_A').html(selectBoxHtml_A[1]);
        $('#showTabs_sB .selectDotted').html(selectBoxHtml_A[2]);
        if ($('#showTabs_sA').find('.tableT_TBo').length > 0) {
            showTableContentBox_Att_TBo($('#showTabs_sA'), tDataA, personA);
        } else if ($('#showTabs_sA').find('.tableT_Txo').length > 0) {
            showTableContentBox_Att_Txo($('#showTabs_sA'), tDataA, personA);
        } else if ($('#showTabs_sA').find('.tableT_Lzo').length > 0) {
            showTableContentBox_Att_Lzo($('#showTabs_sA'), tDataA, personA);
        }
        $('.tableContentBox_D1').html('');
        $('.tableContentBox_D2').html('');
        $('.tableContentBox_B').html('');
        showTableContentBox_Def($('#showTabs_sD'), tDataA);
        showTableContentBox_Dod($('#showTabs_sD'), tDataA);
        showTableContentBox_Pas($('#showTabs_sB'), tDataA);
        $('.selectKf_A').switchClass('selectKf_A', 'selectKf_A_Click', 100, 'easeInOutCubic', function () {
            $('.kfSelectBox').show('blind', {direction: 'left'}, 200);
            countFlawSum();
            countZQSum();
            zqBaoDiSetVal();
        });
    }
});
$(document).on('click', '.selectKf_A_Click', function () {
    $('.kfSelectBox').hide('blind', {direction: 'left'}, 100, function () {
        $('.selectKf_A_Click').switchClass('selectKf_A_Click', 'selectKf_A', 200, 'easeInOutCubic');
    });
});

//todo
$(document).on('click', '.selectKf_B', function () {
    if ($('.kfSelectBox').css('display') != 'none') {
        $('.kfSelectBox').hide('blind', {direction: 'left'}, 100, function () {
            $('.selectKf_A_Click').switchClass('selectKf_A_Click', 'selectKf_A', 200, 'easeInOutCubic', function () {
                f();
            });
        });
    } else {
        f();
    }

    function f() {
        $('.tableContentBox_A').html('');
        $('#showTabs_sA .selectTableContent_A').html(selectBoxHtml_B[0]);
        $('#showTabs_sD .selectTableContent_A').html(selectBoxHtml_B[1]);
        $('#showTabs_sB .selectDotted').html(selectBoxHtml_B[2]);
        if ($('#showTabs_sA').find('.tableT_TBo').length > 0) {
            showTableContentBox_Att_TBo($('#showTabs_sA'), tDataB, personB);
        } else if ($('#showTabs_sA').find('.tableT_Txo').length > 0) {
            showTableContentBox_Att_Txo($('#showTabs_sA'), tDataB, personB);
        } else if ($('#showTabs_sA').find('.tableT_Lzo').length > 0) {
            showTableContentBox_Att_Lzo($('#showTabs_sA'), tDataB, personB);
        }
        $('.tableContentBox_D1').html('');
        $('.tableContentBox_D2').html('');
        $('.tableContentBox_B').html('');
        showTableContentBox_Def($('#showTabs_sD'), tDataB);
        showTableContentBox_Dod($('#showTabs_sD'), tDataB);
        showTableContentBox_Pas($('#showTabs_sB'), tDataB);
        $('.selectKf_B').switchClass('selectKf_B', 'selectKf_B_Click', 100, 'easeInOutCubic', function () {
            $('.kfSelectBox').show('blind', {direction: 'right'}, 200);
            countFlawSum();
            countZQSum();
            zqBaoDiSetVal();
        });
    }
});


$(document).on('click', '.selectKf_B_Click', function () {
    $('.kfSelectBox').hide('blind', {direction: 'right'}, 100, function () {
        $('.selectKf_B_Click').switchClass('selectKf_B_Click', 'selectKf_B', 200, 'easeInOutCubic');
    });
});

$(document).on('click', '#showTabs_sA .tableContent', function () {
    if ($('#showTabs_sA .selectTC_Box').length < 5) {
        let zName, attFr, attTo, attCost, attFlaw, tData, hp;
        zName = $(this).find('.table_Name').text();
        if ($('.selectKf_A_Click').length > 0) {
            tData = tDataA;
            hp = personA.hp;
        } else {
            tData = tDataB;
            hp = personB.hp;
        }
        let atF = tData.zAtt['' + zName + ''].attFr_body;
        switch (atF) {
            case 'head':
                attFr = '<div class="tableSelect">头部</div>';
                break;
            case 'hand':
                attFr = '<div class="tableSelect">左手</div><div>右手</div>';
                break;
            case 'leg':
                attFr = '<div class="tableSelect">左脚</div><div>右脚</div>';
                break;
            case 'all':
                attFr = '跟随对方';
                break;
        }
        if (tData.zAtt['' + zName + ''].attTo_body[0] == 'head') {
            attTo = '<div>头部</div>';
        } else {
            attTo = '<div class="tableSelect_disable">头部</div>';
        }
        if (tData.zAtt['' + zName + ''].attTo_body[1] == 'body') {
            attTo = attTo + '<div>躯干</div>';
        } else {
            attTo = attTo + '<div class="tableSelect_disable">躯干</div>';
        }
        if (tData.zAtt['' + zName + ''].attTo_body[2] == 'hand') {
            attTo = attTo + '<div>左手</div><div>右手</div>';
        } else {
            attTo = attTo + '<div class="tableSelect_disable">左手</div><div class="tableSelect_disable">右手</div>';
        }
        if (tData.zAtt['' + zName + ''].attTo_body[3] == 'leg') {
            attTo = attTo + '<div>左脚</div><div>右脚</div>';
        } else {
            attTo = attTo + '<div class="tableSelect_disable">左脚</div><div class="tableSelect_disable">右脚</div>';
        }
        attCost = tData.zAtt['' + zName + ''].zqConst;
        let addHtml = '<div class="selectTC_Box"><div class="selectTC"><div class="table_Name">' + zName + '</div><div class="table_attFromT">' + attFr + '</div><div class="table_attSubT"></div><div class="table_attToT">' + attTo + '</div><div class="table_attCostT">-' + attCost + '</div><div class="table_attNumY"></div><div class="table_attFlawY"></div><div class="table_closeT"><div class="table_closeIcoB"></div></div></div><div class="table_Combo"><div class="table_ComboLink_T" style="display: none"></div><div class="table_Combo_F" style="display: none"></div></div></div>';

        $('#showTabs_sA .table_Combo_F').eq(-1).show();
        $('#showTabs_sA .selectTableContent_A').append(addHtml);
        $('#showTabs_sA .selectTC_Box:last .table_attToT >div').each(function () {
            if ($(this).attr('class') == undefined) {
                $(this).addClass('tableSelect');
                return false;//跳出所有循环
            }
        });
        attCountSub($('#showTabs_sA .selectTC_Box:last .table_attFromT .tableSelect'));
        attCountNum($('#showTabs_sA .selectTableContent_A'));
        countFlawSum();
        countZQSum();
    }
});

function hpToHart(hp) {
    return (data_const.hpSubHart.a * Math.pow(hp, 2) + data_const.hpSubHart.b * hp + data_const.hpSubHart.c);
}

//招式选择栏，计算[hp伤害削减]
function attCountSub($this) {
    let hp;
    if ($('.selectKf_A_Click').length > 0) {
        hp = personA.hp;
    } else {
        hp = personB.hp;
    }
    switch ($this.text()) {
        case '左手':
            hp = hp.hand[0] / data_const.hp.hand;
            break;
        case '右手':
            hp = hp.hand[1] / data_const.hp.hand;
            break;
        case '左脚':
            hp = hp.leg[0] / data_const.hp.leg;
            break;
        case '右脚':
            hp = hp.leg[1] / data_const.hp.leg;
            break;
        case '头部':
            hp = hp.head / data_const.hp.head;
            break;
    }
    let attSub = toPercent(hpToHart(hp));
    $this.parent().next().text(attSub);
}

//招式选择栏，计算[已用数]
function attCountNum($this) {
    let tData, c;
    if ($('.selectKf_A_Click').length > 0) {
        tData = tDataA;
    } else {
        tData = tDataB;
    }
    let i = 0;
    $this.find('.selectTC_Box .table_Name').each(function () {
        let $that = $(this);
        let zName = $that.text();
        let j = 0, k = 0, l = 0;
        $this.find('.selectTC_Box .table_Name').each(function () {
            if ($(this).text() == zName) {
                j++;
                if (k == (i - 1)) {
                    l++;
                }
            }
            if (k >= i) {
                return false;
            }
            k++;
        });
        if ($this.parent().parent().parent().attr('id') == 'showTabs_sA') {
            $that.parent().find('.table_attNumY').text(tData.zAtt['' + zName + ''].count_all + j);
            c = (tData.zAtt['' + zName + ''].count_all + j - 1) * data_const.flaw.z + (j - 1) * data_const.flaw.h + data_const.flaw.l * l;
        } else {
            if (('' + zName + '') in tData.zDef) {
                $that.parent().find('.table_attNumY').text(tData.zDef['' + zName + ''].count_all + j);
                c = (tData.zDef['' + zName + ''].count_all + j - 1) * data_const.flaw.z + (j - 1) * data_const.flaw.h + data_const.flaw.l * l;
            } else {
                $that.parent().find('.table_attNumY').text(tData.zDod['' + zName + ''].count_all + j);
                c = (tData.zDod['' + zName + ''].count_all + j - 1) * data_const.flaw.z + (j - 1) * data_const.flaw.h + data_const.flaw.l * l;
            }
        }
        $that.parent().find('.table_attFlawY').text(toPercentAdd(c));
        i++;
    });
}

$(document).on('click', '#showTabs_sD .tableContentBox_D1 .tableContent', function () {
    if ($('#showTabs_sD .selectTC_Box').length < 5) {
        let zName, def, attFlaw, tData;
        zName = $(this).find('.table_Name').text();
        if ($('.selectKf_A_Click').length > 0) {
            tData = tDataA;
        } else {
            tData = tDataB;
        }
        def = $(this).find('.table_Number_Db').text();
        let addHtml = '<div class="selectTC_Box"><div class="selectTC"><div class="table_Name">' + zName + '</div><div class="table_Dod"></div><div class="table_Block">' + def + '</div><div class="table_attToT"><div  class="tableSelect">头部</div><div>躯干</div><div>左手</div><div>右手</div><div>左脚</div><div>右脚</div></div><div class="table_attCostT"></div><div class="table_attNumY"></div><div class="table_attFlawY"></div><div class="table_closeT"><div class="table_closeIcoB"></div></div></div><div class="table_Combo"><div class="table_ComboLink_T" style="display: none"></div><div class="table_Combo_F" style="display: none"></div></div></div>';

        $('#showTabs_sD .table_Combo_F').eq(-1).show();
        $('#showTabs_sD .selectTableContent_A').append(addHtml);
        attCountNum($('#showTabs_sD .selectTableContent_A'));
        countFlawSum();
    }
});

$(document).on('click', '#showTabs_sD .tableContentBox_D2 .tableContent', function () {
    if ($('#showTabs_sD .selectTC_Box').length < 5) {
        let zName, dod, attCost, attFlaw, tData;
        zName = $(this).find('.table_Name').text();
        if ($('.selectKf_A_Click').length > 0) {
            tData = tDataA;
        } else {
            tData = tDataB;
        }
        dod = $(this).find('.table_Number_Db').text();
        attCost = tData.zDod['' + zName + ''].zqConst;
        let addHtml = '<div class="selectTC_Box"><div class="selectTC"><div class="table_Name">' + zName + '</div><div class="table_Dod">' + dod + '</div><div class="table_Block"></div><div class="table_attToT"><div  class="tableSelect">头部</div><div>躯干</div><div>左手</div><div>右手</div><div>左脚</div><div>右脚</div></div><div class="table_attCostT">-' + attCost + '</div><div class="table_attNumY"></div><div class="table_attFlawY"></div><div class="table_closeT"><div class="table_closeIcoB"></div></div></div><div class="table_Combo"><div class="table_ComboLink_T" style="display: none"></div><div class="table_Combo_F" style="display: none"></div></div></div>';

        $('#showTabs_sD .table_Combo_F').eq(-1).show();
        $('#showTabs_sD .selectTableContent_A').append(addHtml);
        attCountNum($('#showTabs_sD .selectTableContent_A'));
        countFlawSum();
        countZQSum();
    }
});

$(document).on('click', '#showTabs_sB .tableContentBox_B .tableContent', function () {
    $('.selectBbox').text($(this).find('.table_Name').text()).show();
});

function comboCostCount($this) { //连招耗气还原
    let zName, attCost, tData;
    if ($('.selectKf_A_Click').length > 0) {
        tData = tDataA;
    } else {
        tData = tDataB;
    }
    $this.find('.selectTC_Box .table_Name').each(function () {
        zName = $(this).text();
        if ($this.parent().parent().parent().attr('id') == 'showTabs_sA') {
            attCost = -tData.zAtt['' + zName + ''].zqConst;
            $(this).parent().find('.table_attCostT').text(attCost);
        }
    });
}

function countFlawSum() {
    let f, s, person;
    if ($('.selectKf_A_Click').length > 0) {
        person = personA;
    } else {
        person = personB;
    }
    f = person.flaw;
    $('.selectTableContent_A .table_attFlawY').each(function () {
        s = $(this).text().replace(/[^0-9]/ig, "");
        f = f + parseInt(0 + s);
    });
    $('.sumBox_flaw').html('<span>' + f + '</span>%');
}

function countZQSum() {
    let zName, a, s, cost, r, sum, tData, person, t, timeB;
    if ($('.selectKf_A_Click').length > 0) {
        tData = tDataA;
        person = personA;
    } else {
        tData = tDataB;
        person = personB;
    }
    a = person.zqValSub();
    cost = 0;
    $('.selectTableContent_A .table_attCostT').each(function () {
        s = $(this).text().replace(/[^0-9]/ig, "");
        cost = cost + parseInt(0 + s);
    });
    t = 0;
    $('#showTabs_sA .selectTC_Box .table_Name').each(function () {
        zName = $(this).text();
        t = t + (tData.zAtt['' + zName + ''].time_q + person.timeAdd_q) + (tData.zAtt['' + zName + ''].time_z + person.timeAdd_z);
    });
    timeB = 1.4;
    $('#showTabs_sD .selectTC_Box .table_Name').each(function () {
        zName = $(this).text();
        if (('' + zName + '') in tData.zDod) {
            t = t + timeB;
        }
    });
    t = (data_const.roundTime - t).toFixed(1);
    r = Math.round(person.zqPerSecSub() * t * 10);
    sum = a - cost + r;
    if (sum > a) {
        sum = a;
    }
    $('.sumBox_zq').html(a + ' - ' + cost + ' + ' + r + ' = <span>' + sum + '</span>');
}

function zqBaoDiSetVal() {
    let a, t, $this;
    $('.baoDiSetTextF').removeClass('baoDiSetTextF');
    if ($('.selectKf_A_Click').length > 0) {
        a = personA.zqBaoDiVal;
    } else {
        a = personB.zqBaoDiVal;
    }
    switch (a) {
        case 5:
            t = 'baoDiSetOn_01';
            $this = $('.baoDiSetText >div').eq(0);
            break;
        case 10:
            t = 'baoDiSetOn_02';
            $this = $('.baoDiSetText >div').eq(1);
            break;
        case 20:
            t = 'baoDiSetOn_03';
            $this = $('.baoDiSetText >div').eq(2);
            break;
        case 30:
            t = 'baoDiSetOn_04';
            $this = $('.baoDiSetText >div').eq(3);
            break;
        case 40:
            t = 'baoDiSetOn_05';
            $this = $('.baoDiSetText >div').eq(4);
            break;
    }
    $('#baoDiSetOn').attr('class', t);
    $this.addClass('baoDiSetTextF');
}

$(document).on('click', '.selectOver', function () {
    let i = 0;
    if ($('.selectKf_A_Click').length > 0) {
        aa(selectBoxHtml_A, zsAttSortA, zsDefSortA);
        $('.selectKf_A_Click').trigger('click');
        personA.zqBaoDiVal = Number($('.baoDiSetTextF').text());
    } else {
        aa(selectBoxHtml_B, zsAttSortB, zsDefSortB);
        $('.selectKf_B_Click').trigger('click');
        personB.zqBaoDiVal = Number($('.baoDiSetTextF').text());
    }

    function aa(ssHtml, ssAttSort, ssDefSort) {
        ssHtml[0] = $('#showTabs_sA .selectTableContent_A').html();
        ssHtml[1] = $('#showTabs_sD .selectTableContent_A').html();
        ssHtml[2] = $('#showTabs_sB .selectDotted').html();
        let i = 0;
        $('#showTabs_sA .selectTC_Box').each(function () {
            ssAttSort[i].zName = $(this).find('.table_Name').text();
            switch ($(this).find('.table_attFromT .tableSelect').text()) {
                case '头部':
                    ssAttSort[i].attFrom = 'head';
                    break;
                case '左手':
                    ssAttSort[i].attFrom = 'handL';
                    break;
                case '右手':
                    ssAttSort[i].attFrom = 'handR';
                    break;
                case '左脚':
                    ssAttSort[i].attFrom = 'legL';
                    break;
                case '右脚':
                    ssAttSort[i].attFrom = 'legR';
                    break;
            }
            switch ($(this).find('.table_attToT .tableSelect').text()) {
                case '头部':
                    ssAttSort[i].attTo = 'head';
                    break;
                case '躯干':
                    ssAttSort[i].attTo = 'body';
                    break;
                case '左手':
                    ssAttSort[i].attTo = 'handL';
                    break;
                case '右手':
                    ssAttSort[i].attTo = 'handR';
                    break;
                case '左脚':
                    ssAttSort[i].attTo = 'legL';
                    break;
                case '右脚':
                    ssAttSort[i].attTo = 'legR';
                    break;
            }
            if ($(this).find('.table_Combo_T').length > 0) {
                ssAttSort[i].comBo = true;
            }
            i++;
        });
        i = 0;
        $('#showTabs_sD .selectTC_Box').each(function () {
            ssDefSort[i].zName = $(this).find('.table_Name').text();
            switch ($(this).find('.table_attToT .tableSelect').text()) {
                case '头部':
                    ssDefSort[i].DefBody = 'head';
                    break;
                case '躯干':
                    ssDefSort[i].DefBody = 'body';
                    break;
                case '左手':
                    ssDefSort[i].DefBody = 'handL';
                    break;
                case '右手':
                    ssDefSort[i].DefBody = 'handR';
                    break;
                case '左脚':
                    ssDefSort[i].DefBody = 'legL';
                    break;
                case '右脚':
                    ssDefSort[i].DefBody = 'legR';
                    break;
            }
            if ($(this).find('.table_Combo_T').length > 0) {
                ssDefSort[i].comBo = true;
            }
            i++;
        });
    }

});

$(document).on('click', '.fightStart', function () {
    if (zsAttSortA[0].zName == '' && zsDefSortA[0].zName == '') {
        $('.selectKf_A').trigger('click');
    } else if (zsAttSortB[0].zName == '' && zsDefSortB[0].zName == '') {
        $('.selectKf_B').trigger('click');
    } else {
        $('.fightStart').hide('drop', {direction: 'up'}, 100);
    }
});

$(document).on('click', '.baoDiSetText >div', function () {
    $('.baoDiSetTextF').removeClass('baoDiSetTextF');
    $(this).attr('class', 'baoDiSetTextF');
    let c = $('#baoDiSetOn').attr('class');
    let t;
    switch ($(this).text()) {
        case "5":
            t = 'baoDiSetOn_01';
            break;
        case "10":
            t = 'baoDiSetOn_02';
            break;
        case "20":
            t = 'baoDiSetOn_03';
            break;
        case "30":
            t = 'baoDiSetOn_04';
            break;
        case "40":
            t = 'baoDiSetOn_05';
            break;
    }
    if (c != t) {
        $('#baoDiSetOn').switchClass(c, t, 100, 'easeInOutCubic');
    }
});

//todo 测试用
$(document).on('click', '.fightPause', function () {
    let t = 0.25;
    printDiv(t);
});

function printDiv(t) {
    let myDiv = '<div class="printBox"><div class="pBoxTime">' + t + 's</div><div class="pBigBoxDiv"><div></div></div></div>';
    $('.printBigBox').append(myDiv);
}

function findWhoFirst() {
    switch (whoFirst) {
        case "A":
            break;
        case "B":
            break;
        case "":
            break;
    }
}

//todo 回合开始
//

let abcde = new buffer();
abcde.int();
console.log(abcde.def_p);