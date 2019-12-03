'use strict'
import $ from 'jquery'
import './css/baseCss.scss'
// import './css/csshake.css'
import 'webpack-jquery-ui';


function myHideRemove(e) {
    $(e).hide('fade', 300, 'easeInOutCubic', function () {
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
            $('.loFiGd_F').append('<li class="liFiBox_size liFiBox_S" style="display: block"><div class="liFiBox_Sss"><div class="liFiBox_left"><img src="../src/images/mpLogo_JinGangZong.svg"><span>大<br/>理<br/>段<br/>氏</span></div><div class="liFiBox_name">段誉</div></div></li>');
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
    $('.next_01').switchClass('next_01', 'next_02', 1000, 'easeInOutCubic');
    $('.logoPosition01').switchClass('logoPosition01', 'logoPosition02', 1000, 'easeInOutCubic', showMyLoadFile);
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
});
$('.loFiGd_F').disableSelection();

$(document).on('mouseenter', '.liFiBox_S', function() {//绑定鼠标进入事件
    $(this).find('.liFiBox_left').eq(0).addClass('liFiBox_left_hover');
    $('#liFiBox_R').css('z-index',2);
});
$(document).on('mouseleave', '.liFiBox_S', function() {//绑定鼠标划出事件
    $(this).find('.liFiBox_left').eq(0).removeClass('liFiBox_left_hover');
    $('#liFiBox_R').css('z-index',4);
});
$('#liFiBox_R').click(function () {
    if ($(this).hasClass('liFiBox_R')){
        $('.liFiBox_Sss').removeClass('myBlur');
        $('.liFiBox_S').removeClass('shake shake-slow');
        $('.liFiBox_AL').addClass('liFiBox_A').removeClass('liFiBox_AL');
        $(this).removeClass('liFiBox_R');
    }else {
        $('.liFiBox_Sss').addClass('myBlur');
        $('.liFiBox_S').addClass('shake shake-slow');
        $('.liFiBox_A').addClass('liFiBox_AL').removeClass('liFiBox_A');
        $(this).addClass('liFiBox_R');
    }
});