'use strict'
import $ from 'jquery';
import {data_S} from './myData.js';
import './css/baseCss.scss';
import 'webpack-jquery-ui';
//一般不需要jq ui 的默认样式，就不用其css
// require('webpack-jquery-ui/css');

var echarts = require('echarts');


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
$(document).on('click', '.schoolBox', function () {
    $('#schoolBox_select').attr('id', '');
    $(this).attr('id', 'schoolBox_select');
    if ($('#schoolBox_select').length > 0) {
        $('.next_off').removeClass('next_off');
    }
});
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
            {name: '速攻', max: 43},
            {name: '闪避', max: 33},
            {name: '防御', max: 30},
            {name: '妨碍', max: 30},
            {name: '消耗', max: 44}
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
                value: [30, 10, 20, 5, 15]
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


$(".tableContent").hover(function () {
    $(this).addClass('tableContent_hover');
}, function () {
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
    $('.table_Lzo').html('-').switchClass('table_Lzo', 'table_ot table_Lz', 200);
    $('.table_Tx').switchClass('table_ot table_Tx', 'table_Txo', 201).html('对方所有破绽率+6%，10s');
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
    $('.table_Txo').html('<span>特</span>').switchClass('table_Txo', 'table_ot table_Tx', 200);
    $('.table_Lz').switchClass('table_ot table_Lz', 'table_Lzo', 201).html('直接命中时，本次耐力伤害变为30');
});
$(document).on('click', '.tableT_TB', function () {
    $('.tableT_NumberS').hide();
    $('.tableT_Txo').html('<span>特<br/>效</span>').switchClass('tableT_Txo', 'table_ot tableT_Tx', 200);
    $('.tableT_Lzo').html('<span>连<br/>招</span>').switchClass('tableT_Lzo', 'table_ot tableT_Lz', 200);
    $('.tableT_TB').switchClass('table_ot tableT_TB', 'tableT_TBo', 200, function () {
        $('.tableT_NumberT, .tableT_NumberB, .table_NumberN').show();
        $('.tableT_TBo').removeClass('tableTitle-color');
    });

    $('.table_Lzo').html('-').switchClass('table_Lzo', 'table_ot table_Lz', 200);
    $('.table_Txo').html('<span>特</span>').switchClass('table_Txo', 'table_ot table_Tx', 200);
    $('.table_TB').switchClass('table_ot table_TB', 'table_ot table_TBo', 201);
    $('.table_TB').removeClass('grayBox-color');
});

console.log(data_S.WJ.zAtt.三阴蜈蚣爪.hurt_d);