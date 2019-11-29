'use strict'
import $ from 'jquery'
import './css/baseCss.scss'
// import 'webpack-jquery-ui/draggable';
import 'webpack-jquery-ui';


function myHideRemove(e) {
    $(e).hide('fade', 300, 'easeInOutCubic', function () {
        $(e).remove();
    });
}

function showMyLoadFile() {
    // $('.rightContent').append('<div id=loginInTopMu><span>></span><span>选择角色</span></div><div id=loadFileBigBox><ul class="loFiGd loFiGd_B"><li class="liFiBox_size liFiBox_B"><li class="liFiBox_size liFiBox_B"><li class="liFiBox_size liFiBox_B"><li class="liFiBox_size liFiBox_B"><li class="liFiBox_size liFiBox_B"><li class="liFiBox_size liFiBox_B"><li class="liFiBox_size liFiBox_B"><li class="liFiBox_size liFiBox_B"><li class="liFiBox_size liFiBox_B"><li class="liFiBox_size liFiBox_B"><li class="liFiBox_size liFiBox_B"><li class="liFiBox_size liFiBox_B"></ul><ul class="loFiGd loFiGd_F" id=sortable></ul></div>');
    $('#loginInTopMu').show('fade', 200);
    $('#loadFileBigBox').show('fade', 200);
    loadFile_count(4);
    $('.removeFiBox').show('fade', 200);
}

function loadFile_count(n) {
    for (let i = 0; i < 11; i++) {
        if (i <= n) {
            $('.loFiGd_F').append('<li class="liFiBox_size liFiBox_S"></li>');
        } else {
            $('.loFiGd_F').append('<li class="liFiBox_size liFiBox_A">+</li>');
        }
        // $('.loFiGd_F').find('div').eq(i).show('fade', 500);
    }
    // $('.loFiGd_F').append('<div class="liFiBox_size liFiBox_R">×</div>');
    // $('.liFiBox_R').show('fade', 200);
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
    distance: 30,
    cancel: ".liFiBox_A",
    revert: true,
    connectWith: ".removeFiBox",
    // dropOnEmpty: true,
});
$('.loFiGd_F').disableSelection();

//todo 如何触发删除
$('.removeFiBox').sortable();
$('.removeFiBox').disableSelection();