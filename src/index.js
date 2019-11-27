'use strict'
import $ from 'jquery'
import './css/baseCss.scss'
// import 'webpack-jquery-ui/draggable';
import 'webpack-jquery-ui';



$( function() {
    function myHideRemove(e){
        $(e).hide('fade',1000,'easeInOutCubic',function (){
            $(e).remove();
        });
    }
    $( ".next_01" ).click(function() {
        myHideRemove('#myVerID');
        myHideRemove('.loginBigBox');
        myHideRemove('.loginCheckBox');
        $('.next_01').switchClass( 'next_01', 'next_02', 1000, 'easeInOutCubic' );
        $('.logoPosition01').switchClass( 'logoPosition01', 'logoPosition02', 1000, 'easeInOutCubic', showMyLoadFile );
    });
    function showMyLoadFile() {
        $('.rightContent').append('<div id="loginInTopMu"><span>></span><span>选择角色</span></div><div id="loadFileBigBox"><div class="loFiGd_B loFiGd"><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div><div class="liFiBox_size liFiBox_B"></div></div></div>');
        $('#loginInTopMu').show('fade', 500);
        $('#loadFileBigBox').show('fade', 500);
    }
} );