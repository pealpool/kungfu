'use strict'
import $ from 'jquery';
import {data_S} from './myData.js';
import './css/baseCss.scss';
import 'webpack-jquery-ui';
//一般不需要jq ui 的默认样式，就不用其css
// require('webpack-jquery-ui/css');

var echarts = require('echarts');


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
    setMyChat(tData.sixData, data_S.sixDataSum);


    $('.tableContentBox').html('');
    if ($('#showTabs_A').find('.tableT_TBo').length > 0) {
        showTableContentBox_Att_TBo();
    } else if ($('#showTabs_A').find('.tableT_Txo').length > 0) {
        showTableContentBox_Att_Txo();
    } else if ($('#showTabs_A').find('.tableT_Lzo').length > 0) {
        showTableContentBox_Att_Lzo();
    }


});

function showTableContentBox_Att_TBo() {
    let myContent = '';
    for (let key in tData.zAtt) {
        myContent = '<div class="tableContent"><div class="table_Name">' + key +
            '</div><div class="table_TBo"><div class="table_NumberN">' +
            toZero(tData.zAtt[key].hurt_o) + '</div><div class="table_NumberN">' +
            toZero(tData.zAtt[key].hurt_i) + '</div><div class="table_NumberN">' +
            toPercent(tData.zAtt[key].hit) + '</div><div class="table_NumberN">' +
            toPercent(tData.zAtt[key].block) + '</div><div class="table_NumberN">' +
            tData.zAtt[key].time_q + 's</div><div class="table_NumberN">' +
            tData.zAtt[key].time_z + 's</div><div class="table_NumberN">' +
            tData.zAtt[key].time_h + 's</div><div class="table_NumberN">' +
            toZero(tData.zAtt[key].hurt_n) + '</div><div class="table_NumberN">' +
            toZero(tData.zAtt[key].const) + '</div><div class="table_NumberN">' +
            toPerS(tData.zAtt[key].hurt_l) + '</div><div class="table_NumberN">' +
            toZero(tData.zAtt[key].hurt_d) + '</div></div><div class="table_ot table_Tx">';
        if (tData.zAtt[key].TX_inf != '') {
            myContent = myContent +
                '<span class="content_TxSup">特</span><span class="content_Tx">' +
                tData.zAtt[key].TX_inf + '</span>';
        }
        myContent = myContent + '</div>';

        myContent = myContent + '<div class="table_ot table_Lz"><span class="content_LzLine">-</span><span class="content_Lz">' +
            tData.zAtt[key].LZ_inf + '</span></div>';

        myContent = myContent + '</div></div>';
        $('#showTabs_A').find('.tableContentBox').append(myContent);
    }
}

function showTableContentBox_Att_Txo() {
    let myContent = '';
    for (let key in tData.zAtt) {
        myContent = '<div class="tableContent"><div class="table_Name">' + key +
            '</div><div class="grayBox-color table_ot table_TB" style=""><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_o) + '</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_i) + '</div><div class="table_NumberN" style="display: none;">' +
            toPercent(tData.zAtt[key].hit) + '</div><div class="table_NumberN" style="display: none;">' +
            toPercent(tData.zAtt[key].block) + '</div><div class="table_NumberN" style="display: none;">' +
            tData.zAtt[key].time_q + 's</div><div class="table_NumberN" style="display: none;">' +
            tData.zAtt[key].time_z + 's</div><div class="table_NumberN" style="display: none;">' +
            tData.zAtt[key].time_h + 's</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_n) + '</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].const) + '</div><div class="table_NumberN" style="display: none;">' +
            toPerS(tData.zAtt[key].hurt_l) + '</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_d) + '</div></div><div class="table_Txo">';
        if (tData.zAtt[key].TX_inf != '') {
            myContent = myContent +
                '<span class="content_TxSup" style="display: none;">特</span><span class="content_Tx" style="display: inline;">' +
                tData.zAtt[key].TX_inf + '</span>';
        }
        myContent = myContent + '</div>';

        myContent = myContent + '<div class="table_ot table_Lz"><span class="content_LzLine">-</span><span class="content_Lz">' +
            tData.zAtt[key].LZ_inf + '</span></div>';

        myContent = myContent + '</div></div>';
        $('#showTabs_A').find('.tableContentBox').append(myContent);
    }
}

function showTableContentBox_Att_Lzo() {
    let myContent = '';
    for (let key in tData.zAtt) {
        myContent = '<div class="tableContent"><div class="table_Name">' + key +
            '</div><div class="grayBox-color table_ot table_TB" style=""><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_o) + '</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_i) + '</div><div class="table_NumberN" style="display: none;">' +
            toPercent(tData.zAtt[key].hit) + '</div><div class="table_NumberN" style="display: none;">' +
            toPercent(tData.zAtt[key].block) + '</div><div class="table_NumberN" style="display: none;">' +
            tData.zAtt[key].time_q + 's</div><div class="table_NumberN" style="display: none;">' +
            tData.zAtt[key].time_z + 's</div><div class="table_NumberN" style="display: none;">' +
            tData.zAtt[key].time_h + 's</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_n) + '</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].const) + '</div><div class="table_NumberN" style="display: none;">' +
            toPerS(tData.zAtt[key].hurt_l) + '</div><div class="table_NumberN" style="display: none;">' +
            toZero(tData.zAtt[key].hurt_d) + '</div></div><div class="table_ot table_Tx">';
        if (tData.zAtt[key].TX_inf != '') {
            myContent = myContent +
                '<span class="content_TxSup">特</span><span class="content_Tx">' +
                tData.zAtt[key].TX_inf + '</span>';
        }
        myContent = myContent + '</div>';

        myContent = myContent + '<div class="table_Lzo" style=""><span class="content_LzLine" style="display: none;">-</span><span class="content_Lz" style="display: inline;">' +
            tData.zAtt[key].LZ_inf + '</span></div>';

        myContent = myContent + '</div></div>';
        $('#showTabs_A').find('.tableContentBox').append(myContent);
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

$(document).on('click', '.next_03', function () {
    if (!$(this).hasClass('next_off')) {
        $(this).addClass('next_off next_04').removeClass('next_03');
    }
});

function setMyChat(six = new Array(5), sixsum = new Array(5)) {
    myChart = echarts.init(document.getElementById('myBigChart'));
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
                {name: '速攻', max: sixsum[0]},
                {name: '闪避', max: sixsum[1]},
                {name: '防御', max: sixsum[2]},
                {name: '妨碍', max: sixsum[3]},
                {name: '消耗', max: sixsum[4]}
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


var myChart = echarts.init(document.getElementById('myBigChart'));
// 指定图表的配置项和数据
var option = {
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
            {name: '速攻', max: 50},
            {name: '闪避', max: 50},
            {name: '防御', max: 50},
            {name: '妨碍', max: 50},
            {name: '消耗', max: 50}
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
                value: [0, 0, 0, 0, 0]
                // vvalue: [six[0], six[1], six[2], six[3], six[4]]
            }
        ],
    }],
    color: [
        '#707070',
    ],
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
$("#showTabs").tabs();


$(document).on('mouseenter', '.tableContent', function () {
    $(this).addClass('tableContent_hover');
    let zName = $(this).children('.table_Name').text();
    let z = getValue(tData, $(this).children('.table_Name').text());
    // console.log(tData.zAtt['' + zName + ''].remark);
    $('.tableBox_Button_Rt').text(zName);
    $('.tableBox_Button_C').text(tData.zAtt['' + zName + ''].remark);
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

function toPercent(c) {
    if (c > 0) {
        return '+' + c * 100 + '%';
    } else if (c < 0) {
        return c * 100 + '%';
    } else {
        return '-';
    }
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

function getValue(json, name) {
    for (name in json) {
        return json[name];
    }
}