'use strict'
import $ from 'jquery'
import './css/baseCss.scss'
// import 'webpack-jquery-ui/draggable';
import 'webpack-jquery-ui';


function myHideRemove(e){
    $(e).hide('fade',1000,'easeInOutCubic',function (){
        $(e).remove();
    });
}
function showMyLoadFile() {
    $('.rightContent').append('<div id="loginInTopMu"><span>></span><span>选择角色</span></div><div id="loadFileBigBox"><div class="loFiGd_B loFiGd"><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div></div><div class="loFiGd_F loFiGd"></div></div>');
    $('#loginInTopMu').show('fade', 500);
    $('#loadFileBigBox').show('fade', 500);
    loadFile_count(4);
}
function loadFile_count(n) {
    for (let i = 0; i < 11; i++){
        if(i <= n){
            $('.loFiGd_F').append('<div class="liFiBox_size liFiBox_S"></div>');
        }else {
            $('.loFiGd_F').append('<div class="liFiBox_size liFiBox_A">+</div>');
        }
        // $('.loFiGd_F').find('div').eq(i).show('fade', 500);
    }
    $('.loFiGd_F').append('<div class="liFiBox_size liFiBox_R">×</div>');
    // $('.loFiGd_F').find('div').eq(11).show('fade', 500);
    let j = 0;
    function showLiFiBox(){
        if (j<12){
            $('.loFiGd_F').find('div').eq(j).show('fade', 500);
            j++;
        }else if (j>=12){
            window.clearImmediate(myVarTime);
        }
    }
    let myVarTime  = window.setInterval(function () {showLiFiBox()}, 100);
}
$( ".next_01" ).click(function() {
    myHideRemove('#myVerID');
    myHideRemove('.loginBigBox');
    myHideRemove('.loginCheckBox');
    $('.next_01').switchClass( 'next_01', 'next_02', 1000, 'easeInOutCubic' );
    $('.logoPosition01').switchClass( 'logoPosition01', 'logoPosition02', 1000, 'easeInOutCubic', showMyLoadFile );
});