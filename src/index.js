'use strict'
import $ from 'jquery'
import './css/baseCss.scss'
// import './css/csshake.css'
import 'webpack-jquery-ui';


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
            $('.loFiGd_F').append('<li class="liFiBox_size liFiBox_S"><div class=liFiBox_Sss><div class=liFiBox_left><img src=../src/images/mpLogo_JinGangZong.svg  alt=""/><span>大<br>理<br>段<br>氏</span></div><div class=liFiBox_name>段誉</div></div>');
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

$(document).on('mouseenter', '.liFiBox_S', function() {//绑定鼠标进入事件
    $(this).find('.liFiBox_left').eq(0).addClass('liFiBox_left_hover');
    $('#liFiBox_R').css('z-index',2);
});
$(document).on('mouseleave', '.liFiBox_S', function() {//绑定鼠标划出事件
    $(this).find('.liFiBox_left').eq(0).removeClass('liFiBox_left_hover');
    $('#liFiBox_R').css('z-index',10);
});
$(document).on('click', '.liFiBox_S', function() {
    $('#liFiBox_S_select').attr('id','');
    $(this).attr('id','liFiBox_S_select');
    if($('#liFiBox_S_select').length > 0){
        $('.next_off').removeClass('next_off');
    }
});
$(document).on('click', '.schoolBox', function() {
    $('#schoolBox_select').attr('id','');
    $(this).attr('id','schoolBox_select');
    if($('#schoolBox_select').length > 0){
        $('.next_off').removeClass('next_off');
    }
});
$(document).on('click','#liFiBox_R',function () {
    if ($(this).hasClass('liFiBox_R')){
        $('.liFiBox_Sss').removeClass('myBlur');
        $('.liFiBox_S').removeClass('shake shake-slow');
        $('.liFiBox_Sxx').remove();
        $('.liFiBox_AL').addClass('liFiBox_A').removeClass('liFiBox_AL');
        $(this).removeClass('liFiBox_R');
    }else {
        $('.liFiBox_Sss').addClass('myBlur');
        $('.liFiBox_S').addClass('shake shake-slow').append('<div class=liFiBox_Sxx>×</div>');
        $('.liFiBox_A').addClass('liFiBox_AL').removeClass('liFiBox_A');
        $(this).addClass('liFiBox_R');
    }
});
$(document).on('click','.liFiBox_Sxx',function () {
    $(this).parent().html('+').attr('class','liFiBox_size liFiBox_AL').attr('id','');
    $('#liFiBox_R').css('z-index',10);
    if($('#liFiBox_S_select').length <= 0){
        $('.loginNext').addClass('next_off');
    }
    return false;
});
$(document).on('click','.next_02',function () {
    if (!$(this).hasClass('next_off')){
        $(this).addClass('next_off next_03').removeClass('next_02');
        $('.loFiGd_F, #liFiBox_R').hide('fade', 300, function () {
            $(this).remove();
        });
        $('#loginInTopMu span').show('fade', 200);
        $('#selectSpan').text('选择派别');
        $('#logoBox').hide('blind', {direction:'left'}, 200, function () {
            $('.smallBaseBox').switchClass('smallBaseBox', 'bigBaseBox', 500, 'easeInOutCubic',function () {
                $('#logoBox').show('blind', {direction:'left'}, 200);
            });
        });
    }
});
$(document).on('mouseenter', '.schoolBox', function() {//绑定鼠标进入事件
    $(this).find('.schoolBox_top').eq(0).addClass('schoolBox_top_hover');
});
$(document).on('mouseleave', '.schoolBox', function() {//绑定鼠标划出事件
    $(this).find('.schoolBox_top').eq(0).removeClass('schoolBox_top_hover');
});