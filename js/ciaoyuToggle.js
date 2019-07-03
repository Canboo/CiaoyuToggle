/*
 Version: 1.2.1
  Author: Tsai. Cheng Peng (Canboo)
 Website: https://github.com/Canboo/CiaoyuToggle
 */
(function($){
    "use strict";
    $.fn.ciaoyuToggle = function(settings){
        var def = {
            callback:function(){
                toggleScan();
            }
        };
        var _settings = $.extend(def,settings);

        return this.each(function(){
            // bind event
            $(this).on('change', _settings.callback);
        });
    };
    // scan data-ciaoyu-toggle element
    function toggleScan(){
        $('[data-ciaoyu-toggle]').each(function() {
            $(this).toggle( checkValue($(this)) );
        });
    }
    // element data-value check.
    function checkValue(e){
        var arrVal = e.data('ciaoyu-toggle').split(','),
            PickVal = e.data('ciaoyu-val'),
            result = false;
        $.each( arrVal, function( key, value ) {
            if ( 0 > value.indexOf('+') ) {
                result = isToggle( value, PickVal );
            } else {
                result = checkCombine( value, PickVal );
            };
            if ( result ) return false;
        });
        return result;
    }
    // combine data check.
    function checkCombine(v,pick){
        var arrVal = v.split('+'),
            result = false;
        $.each( arrVal, function( key, value ) {
            result = isToggle( value, pick );
            // if has element not checked return false
            if ( !result ) return false;
        });
        return result;
    }
    // select value check
    function checkSelect(e,pick){
        if ( 0 !== pick.length ) {
            pick = pick.toString();
            var v = e.find(":selected").val();
            // val list
            if ( 0 > pick.indexOf('!') ) {
                var arr = pick.split(',');
                if ( 0 <= jQuery.inArray( v, arr ) ) {
                    return true;
                };
            // exclude value
            } else {
                if ( '!'+v != pick ) {
                    return true;
                };
            };
        };
        return false;
    }
    // has checked?
    function isToggle(e,pick){
        var element = $('#'+e),
            tag = element.prop("tagName").toLowerCase();
        if ( 'select' == tag ) {
            return checkSelect( $('#'+e), pick );
        };
        return $('#'+e).is(":checked");
    }
    // ciaoyuToggle DATA-API
    $(function () {
        toggleScan();
        $('[data-ciaoyu="toggle"]').each(function() {
            $(this).ciaoyuToggle();
        });
    });
})(jQuery);
