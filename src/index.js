'use strict'
import $ from 'jquery';
import {data_S} from './myData_S.js';
import {Person} from './myData_P.js';
import './css/baseCss.scss';
import 'webpack-jquery-ui';
//一般不需要jq ui 的默认样式，就不用其css
// require('webpack-jquery-ui/css');

let eChart = require('echarts');


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
    $('#liFiBox_R').show('fade', 200);
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
        } else if (j >= 12) {
            window.clearImmediate(myVarTime);
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

//todo click
let tData;
$(document).on('click', '.schoolBox', function () {
    $('#schoolBox_select').attr('id', '');
    $(this).attr('id', 'schoolBox_select');
    if ($('#schoolBox_select').length > 0) {
        $('.next_off').removeClass('next_off');
    }
    let mySchool = $(this).find('.schoolBox_logo').attr('class').toString().substr(-2, 2);
    let mySchoolClass = 'bigSLogo_size logo_' + mySchool;
    $('.bigSLogo_size').attr('class', mySchoolClass);


    tData = data_S['' + mySchool + ''];
    $('#schoolName').text(tData.name);
    let myContent = '';
    for (let i = 0; i < tData.level.length; i++) {
        myContent = myContent + tData.level[i] + ' - ';
    }
    myContent = myContent.substring(0, myContent.length - 3);
    $('#schoolLevel').text(myContent);
    $('#schoolRank').text('派别排名：' + tData.rank);
    $('#schoolPerson').text('人数：' + tData.person);
    myContent = '';
    for (let i = 0; i < tData.star.length; i++) {
        myContent = myContent + '<div>' + tData.star[i] + '</div>';
    }
    $('#schoolStar').html(myContent);
    $('#schoolInf').text(tData.inf);
    setMyChat(changeSixDtoChart(tData.sixData, mySaveFile), data_S.sixDataSum);

    $('.tableContentBox_A').html('');
    if ($('#showTabs_A').find('.tableT_TBo').length > 0) {
        showTableContentBox_Att_TBo();
    } else if ($('#showTabs_A').find('.tableT_Txo').length > 0) {
        showTableContentBox_Att_Txo();
    } else if ($('#showTabs_A').find('.tableT_Lzo').length > 0) {
        showTableContentBox_Att_Lzo();
    }

    $('.tableContentBox_D1').html('');
    $('.tableContentBox_D2').html('');
    showTableContentBox_Def();
    showTableContentBox_Dod();
    $('.tableContentBox_B').html('');
    showTableContentBox_Pas();

});

function showTableContentBox_Def() {
    let myContent = '';
    for (let key in tData.zDef) {
        myContent = '<div class="tableContent"><div class="table_Name_D">' + key +
            '</div><div class="table_Number_Db">' + toPercentAdd(tData.zDef[key].block) +
            '</div><div class="table_Tx_D">' + tData.zDef[key].TX_inf +
            '</div><div class="table_Lz_D">' + tData.zDef[key].LZ_inf +
            '</div></div>';
        $('#showTabs_D').find('.tableContentBox_D1').append(myContent);
    }
}

function showTableContentBox_Dod() {
    let myContent = '';
    for (let key in tData.zDod) {
        myContent = '<div class="tableContent"><div class="table_Name_D">' + key +
            '</div><div class="table_Number_Db">' + toPercentAdd(tData.zDod[key].dod) +
            '</div><div class="table_Number_Ds">' + toZero(tData.zDod[key].const) +
            '</div><div class="table_Tx_S">' + tData.zDod[key].TX_inf +
            '</div><div class="table_Lz_D">' + tData.zDod[key].LZ_inf +
            '</div></div>';
        $('#showTabs_D').find('.tableContentBox_D2').append(myContent);
    }
}

function showTableContentBox_Pas() {
    let myContent = '';
    for (let key in tData.zPas) {
        myContent = '<div class="tableContent"><div class="table_Name_D">' + key +
            '</div><div class="table_Tx_B">' + tData.zPas[key].TX_inf +
            '</div></div>';
        $('#showTabs_B').find('.tableContentBox_B').append(myContent);
    }
}

//todo  key
function showTableContentBox_Att_TBo() {
    let myContent = '';
    for (let key in tData.zAtt) {
        myContent = '<div class="tableContent"><div class="table_Name">' + key +
            '</div><div class="table_TBo"><div class="table_NumberN">' +
            toZero(tData.zAtt[key].hurt_o) + '</div><div class="table_NumberN">' +
            toZero(tData.zAtt[key].hurt_i) + '</div><div class="table_NumberN">' +
            toPercentAdd(tData.zAtt[key].hit) + '</div><div class="table_NumberN">' +
            toPercentAdd(tData.zAtt[key].block) + '</div><div class="table_NumberN">' +
            tData.zAtt[key].time_q + 's</div><div class="table_NumberN">' +
            tData.zAtt[key].time_z + 's</div><div class="table_NumberN">' +
            tData.zAtt[key].time_h + 's</div><div class="table_NumberN">' +
            toZero(tData.zAtt[key].const) + '</div><div class="table_NumberN">' +
            toZero(tData.zAtt[key].hurt_q) + '</div><div class="table_NumberN">' +
            toPerS(tData.zAtt[key].hurt_b) + '</div><div class="table_NumberN">' +
            toZero(tData.zAtt[key].hurt_p) + '</div></div><div class="table_ot table_Tx">';
        if (tData.zAtt[key].TX_inf != '') {
            myContent = myContent +
                '<div class="content_TxSup">特</div><div class="content_Tx">' +
                tData.zAtt[key].TX_inf + '</div>';
        }
        myContent = myContent + '</div>';

        myContent = myContent + '<div class="table_ot table_Lz"><div class="content_LzLine">-</div><div class="content_Lz">' +
            tData.zAtt[key].LZ_inf + '</div></div>';

        myContent = myContent + '</div></div>';
        $('#showTabs_A').find('.tableContentBox_A').append(myContent);
    }
}

function showTableContentBox_Att_Txo() {
    let myContent = '';
    for (let key in tData.zAtt) {
        myContent = '<div class="tableContent"><div class="table_Name">' + key +
            '</div><div class="grayBox-color table_ot table_TB" style=""><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_o) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_i) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toPercentAdd(tData.zAtt[key].hit) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toPercentAdd(tData.zAtt[key].block) +
            '</div><div class="table_NumberN" style="display: none;">' +
            tData.zAtt[key].time_q +
            's</div><div class="table_NumberN" style="display: none;">' +
            tData.zAtt[key].time_z +
            's</div><div class="table_NumberN" style="display: none;">' +
            tData.zAtt[key].time_h +
            's</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].const) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_q) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toPerS(tData.zAtt[key].hurt_b) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_p) +
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
        $('#showTabs_A').find('.tableContentBox_A').append(myContent);
    }
}

function showTableContentBox_Att_Lzo() {
    let myContent = '';
    for (let key in tData.zAtt) {
        myContent = '<div class="tableContent"><div class="table_Name">' + key +
            '</div><div class="grayBox-color table_ot table_TB" style=""><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_o) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_i) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toPercentAdd(tData.zAtt[key].hit) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toPercentAdd(tData.zAtt[key].block) +
            '</div><div class="table_NumberN" style="display: none;">' +
            tData.zAtt[key].time_q +
            's</div><div class="table_NumberN" style="display: none;">' +
            tData.zAtt[key].time_z +
            's</div><div class="table_NumberN" style="display: none;">' +
            tData.zAtt[key].time_h +
            's</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].const) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_q) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toPerS(tData.zAtt[key].hurt_b) +
            '</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_p) +
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
        $('#showTabs_A').find('.tableContentBox_A').append(myContent);
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
        let j = 0;

        function showLiFiBox() {
            if (j < 11) {
                $('.loFiGd_C').find('li').eq(j).show('fade', 200);
                j++;
            } else if (j >= 12) {
                window.clearImmediate(myVarTime);
            }
        }

        $('#logoBox').hide('blind', {direction: 'left'}, 200, function () {
            $('.leftContent').switchClass('leftContent_padding', '', 200, 'easeInOutCubic');
            $('.smallBaseBox').switchClass('smallBaseBox', 'bigBaseBox', 500, 'easeInOutCubic', function () {
                $('#logoBox').removeClass('logoPosition02').addClass('logoPosition03');
                $('#logoBox').show('blind', {direction: 'left'}, 200);
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


//todo next03
$(document).on('click', '.next_03', function () {
    if (!$(this).hasClass('next_off')) {
        $(this).addClass('next_off next_04').removeClass('next_03');
        $('.loFiGd_B,.loFiGd_C').hide('fade', 200, function () {
            $('.setBox_left,.setBox_right').show('fade', 200);
        });

    }
});

let myChart;
let option = {};

function setMyChat(six = new Array(5), sixSum = new Array(5)) {
    myChart = eChart.init(document.getElementById('myBigChart'));
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
                {name: '直攻', max: sixSum[0]},
                {name: '闪避', max: sixSum[1]},
                {name: '防御', max: sixSum[2]},
                {name: '妨碍', max: sixSum[3]},
                {name: '消耗', max: sixSum[4]}
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


$("#showTabs").tabs();

//todo hover
$(document).on('mouseenter', '.tableContent', function () {
    $(this).addClass('tableContent_hover');
    let zName = $(this).find('div').eq(0).text();
    switch ($('.ui-state-active').children('a').attr('href').toString().substr(-1, 1)) {
        case 'A':
            $('#showTabs_A .tableBox_Button_Rt').text(zName);
            $('#showTabs_A .tableBox_Button_Rb').text('攻击招式');
            $('#showTabs_A .tableBox_Button_C').text(tData.zAtt['' + zName + ''].remark);
            break;
        case 'D':
            $('#showTabs_D .tableBox_Button_Rt').text(zName);
            if ($(this).parent().attr('class').toString().substr(-1, 1) == 1) {
                $('#showTabs_D .tableBox_Button_Rb').text('格挡招式');
                $('#showTabs_D .tableBox_Button_C').text(tData.zDef['' + zName + ''].remark);
            } else {
                $('#showTabs_D .tableBox_Button_Rb').text('闪避招式');
                $('#showTabs_D .tableBox_Button_C').text(tData.zDod['' + zName + ''].remark);
            }
            break;
        case 'B':
            $('#showTabs_B .tableBox_Button_Rt').text(zName);
            $('#showTabs_B .tableBox_Button_Rb').text('被动功法');
            $('#showTabs_B .tableBox_Button_C').text(tData.zPas['' + zName + ''].remark);
            break;
    }
});
$(document).on('mouseleave', '.tableContent', function () {
    $(this).removeClass('tableContent_hover');
});

$(document).on('click', '.tableT_Tx', function () {
    $('.tableT_TBo').addClass('tableTitle-color');
    $('.tableT_NumberT, .tableT_NumberB').hide('fade', 100, function () {
        $('.tableT_TBo').switchClass('tableT_TBo', 'table_ot tableT_TB', 200, function () {
            $('.tableT_NumberS').show();
        });
        $('.tableT_Lzo').html('<span>连<br/>招</span>').switchClass('tableT_Lzo', 'table_ot tableT_Lz', 200);
        $('.tableT_Tx').switchClass('table_ot tableT_Tx', 'tableT_Txo', 200).html('命中后特效');
    });

    $('.table_TBo').addClass('grayBox-color');
    $('.table_NumberN').hide('fade', 100);
    $('.table_TBo').switchClass('table_TBo', 'table_ot table_TB', 200);
    $('.table_Lzo').switchClass('table_Lzo', 'table_ot table_Lz', 200);
    $('.content_Lz').hide();
    $('.content_LzLine').show();
    $('.table_Tx').switchClass('table_ot table_Tx', 'table_Txo', 201);
    $('.content_TxSup').hide();
    $('.content_Tx').show();
});
$(document).on('click', '.tableT_Lz', function () {
    $('.tableT_TBo').addClass('tableTitle-color');
    $('.tableT_NumberT, .tableT_NumberB').hide('fade', 100, function () {
        $('.tableT_TBo').switchClass('tableT_TBo', 'table_ot tableT_TB', 200, function () {
            $('.tableT_NumberS').show();
        });
        $('.tableT_Txo').html('<span>特<br/>效</span>').switchClass('tableT_Txo', 'table_ot tableT_Tx', 200);
        $('.tableT_Lz').html('连招').switchClass('table_ot tableT_Lz', 'tableT_Lzo', 200);
    });

    $('.table_TBo').addClass('grayBox-color');
    $('.table_NumberN').hide('fade', 100);
    $('.table_TBo').switchClass('table_TBo', 'table_ot table_TB', 200);
    $('.table_Txo').switchClass('table_Txo', 'table_ot table_Tx', 200);
    $('.content_Tx').hide();
    $('.content_TxSup').show();
    $('.table_Lz').switchClass('table_ot table_Lz', 'table_Lzo', 201);
    $('.content_LzLine').hide();
    $('.content_Lz').show();
});
$(document).on('click', '.tableT_TB', function () {
    $('.tableT_NumberS').hide();
    $('.tableT_Txo').html('<span>特<br/>效</span>').switchClass('tableT_Txo', 'table_ot tableT_Tx', 200);
    $('.tableT_Lzo').html('<span>连<br/>招</span>').switchClass('tableT_Lzo', 'table_ot tableT_Lz', 200);
    $('.tableT_TB').switchClass('table_ot tableT_TB', 'tableT_TBo', 200, function () {
        $('.tableT_NumberT, .tableT_NumberB, .table_NumberN').show();
        $('.tableT_TBo').removeClass('tableTitle-color');
    });

    $('.table_Lzo').switchClass('table_Lzo', 'table_ot table_Lz', 200);
    $('.content_Lz').hide();
    $('.content_LzLine').show();
    $('.table_Txo').switchClass('table_Txo', 'table_ot table_Tx', 200);
    $('.content_Tx').hide();
    $('.content_TxSup').show();
    $('.table_TB').switchClass('table_ot table_TB', 'table_ot table_TBo', 201);
    $('.table_TB').removeClass('grayBox-color');
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

function getValue(json, name) {
    for (name in json) {
        return json[name];
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

let personA = new Person();
let mySaveFile = [2, 2, 2, 2, 2];

function loadGameFile(a) {
    let mySchool = 'SL';
    tData = data_S['' + mySchool + ''];
    $('#sixDataSet_all').text(13 - a[0] - a[1] - a[2] - a[3] - a[4]);
    $('#set_SX_LL').text(a[0]);
    $('#set_SX_MJ').text(a[1]);
    $('#set_SX_ZL').text(a[2]);
    $('#set_SX_TP').text(a[3]);
    $('#set_SX_ZQ').text(a[4]);

    onOrOff(a);


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
    setSX_ZQ();


}


$(document).on('click', '.bt_sub', function () {
    let t = $(this).next();
    let e = t.attr('id');
    switch (e) {
        case 'set_SX_LL':
            if (personA.sixData[0] >= 1) {
                personA.calc_LL(-1);
                t.text(personA.sixData[0]);
                $('#sixDataSet_all').text(Number($('#sixDataSet_all').text()) + 1);
                setSX_LL();
            }
            break;
        case 'set_SX_MJ':
            if (personA.sixData[1] >= 1) {
                personA.calc_MJ(-1);
                t.text(personA.sixData[1]);
                $('#sixDataSet_all').text(Number($('#sixDataSet_all').text()) + 1);
                setSX_MJ();
            }
            break;
        case 'set_SX_ZL':
            if (personA.sixData[2] >= 1) {
                personA.calc_ZL(-1);
                t.text(personA.sixData[2]);
                $('#sixDataSet_all').text(Number($('#sixDataSet_all').text()) + 1);
                setSX_ZL();
            }
            break;
        case 'set_SX_TP':
            if (personA.sixData[3] >= 1) {
                personA.calc_TP(-1);
                t.text(personA.sixData[3]);
                $('#sixDataSet_all').text(Number($('#sixDataSet_all').text()) + 1);
                setSX_TP();
            }
            break;
        case 'set_SX_ZQ':
            if (personA.sixData[4] >= 1) {
                personA.calc_ZQ(-1);
                t.text(personA.sixData[4]);
                $('#sixDataSet_all').text(Number($('#sixDataSet_all').text()) + 1);
                setSX_ZQ();
            }
            break;
    }
    onOrOff(personA.sixData);
    setMyChat(changeSixDtoChart(tData.sixData, personA.sixData), data_S.sixDataSum);
});

$(document).on('click', '.bt_add', function () {
    if ($('#sixDataSet_all').text() > 0) {
        let t = $(this).prev();
        let e = t.attr('id');
        switch (e) {
            case 'set_SX_LL':
                if (personA.sixData[0] <= 4) {
                    personA.calc_LL(1);
                    t.text(personA.sixData[0]);
                    $('#sixDataSet_all').text($('#sixDataSet_all').text() - 1);
                    setSX_LL();
                }
                break;
            case 'set_SX_MJ':
                if (personA.sixData[1] <= 4) {
                    personA.calc_MJ(1);
                    t.text(personA.sixData[1]);
                    $('#sixDataSet_all').text($('#sixDataSet_all').text() - 1);
                    setSX_MJ();
                }
                break;
            case 'set_SX_ZL':
                if (personA.sixData[2] <= 4) {
                    personA.calc_ZL(1);
                    t.text(personA.sixData[2]);
                    $('#sixDataSet_all').text($('#sixDataSet_all').text() - 1);
                    setSX_ZL();
                }
                break;
            case 'set_SX_TP':
                if (personA.sixData[3] <= 4) {
                    personA.calc_TP(1);
                    t.text(personA.sixData[3]);
                    $('#sixDataSet_all').text($('#sixDataSet_all').text() - 1);
                    setSX_TP();
                }
                break;
            case 'set_SX_ZQ':
                if (personA.sixData[4] <= 2) {
                    personA.calc_ZQ(1);
                    t.text(personA.sixData[4]);
                    $('#sixDataSet_all').text($('#sixDataSet_all').text() - 1);
                    setSX_ZQ();
                }
                break;
        }
        onOrOff(personA.sixData);
        setMyChat(changeSixDtoChart(tData.sixData, personA.sixData), data_S.sixDataSum);
    }
});

function onOrOff(a) {
    if ((13 - a[0] - a[1] - a[2] - a[3] - a[4]) <= 0) {
        $('#set_SX_LL,#set_SX_MJ,#set_SX_ZL,#set_SX_TP,#set_SX_ZQ').next().addClass('bt_off');
    } else {
        $('#set_SX_LL,#set_SX_MJ,#set_SX_ZL,#set_SX_TP,#set_SX_ZQ').next().removeClass('bt_off');
    }
    if (a[0] >= 5) {
        $('#set_SX_LL').next().addClass('bt_off');
    } else if (a[0] <= 0) {
        $('#set_SX_LL').prev().addClass('bt_off');
    } else {
        $('#set_SX_LL').prev().removeClass('bt_off');
    }
    if (a[1] >= 5) {
        $('#set_SX_MJ').next().addClass('bt_off');
    } else if (a[1] <= 0) {
        $('#set_SX_MJ').prev().addClass('bt_off');
    } else {
        $('#set_SX_MJ').prev().removeClass('bt_off');
    }
    if (a[2] >= 5) {
        $('#set_SX_ZL').next().addClass('bt_off');
    } else if (a[2] <= 0) {
        $('#set_SX_ZL').prev().addClass('bt_off');
    } else {
        $('#set_SX_ZL').prev().removeClass('bt_off');
    }
    if (a[3] >= 5) {
        $('#set_SX_TP').next().addClass('bt_off');
    } else if (a[3] <= 0) {
        $('#set_SX_TP').prev().addClass('bt_off');
    } else {
        $('#set_SX_TP').prev().removeClass('bt_off');
    }
    if (a[4] >= 3) {
        $('#set_SX_ZQ').next().addClass('bt_off');
    } else if (a[4] <= 0) {
        $('#set_SX_ZQ').prev().addClass('bt_off');
    } else {
        $('#set_SX_ZQ').prev().removeClass('bt_off');
    }
}

//todo 招式计算
function setSX_LL() {
    $('#attAdd').text(toPercentAdd(personA.attAdd));
    $('#flawDam').text(toPercent(personA.flawDam));
    let i = 0;
    for (let key in tData.zAtt) {
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(0).text(toZero(Math.round(tData.zAtt[key].hurt_o * (1 + personA.attAdd))));
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(1).text(toZero(Math.round(tData.zAtt[key].hurt_i * (1 + personA.attAdd))));
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
    for (let key in tData.zAtt) {
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(4).text((tData.zAtt[key].time_q + personA.timeAdd_q).toFixed(1) + 's');
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(5).text((tData.zAtt[key].time_z + personA.timeAdd_z).toFixed(1) + 's');
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(6).text((tData.zAtt[key].time_h + personA.timeAdd_h).toFixed(1) + 's');
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
    for (let key in tData.zAtt) {
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(2).text(toPercentAdd(tData.zAtt[key].hit + personA.hitRateAdd));
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(9).text(toPerS(Math.round(tData.zAtt[key].hurt_b * (1 + personA.bleedAdd))));
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(10).text(toZero(Math.round(tData.zAtt[key].hurt_p * (1 + personA.poisonAdd))));
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

function setSX_ZQ() {
    $('#zqHurtAdd').text(toPercentAdd(personA.zqHurtAdd));
    $('#zqVal').text(personA.zqVal);
    $('#zqPerSec').text(personA.zqPerSec + '/1s');
    let i = 0;
    for (let key in tData.zAtt) {
        $('.tableContent:eq(' + i + ')').find('.table_NumberN').eq(8).text(toZero(Math.round(tData.zAtt[key].hurt_q * (1 + personA.zqHurtAdd))));
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