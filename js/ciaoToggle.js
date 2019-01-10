(function($){
    "use strict";
    $.fn.ciaoToggle = function(settings){
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
    // scan data-ciao-toggle element
    function toggleScan(){
        $('[data-ciao-toggle]').each(function() {
            $(this).toggle( checkValue($(this)) );
        });
    }
    // element data-value check.
    function checkValue(e){
        var arrVal = e.data('ciao-toggle').split(','),
            PickVal = e.data('ciao-val'),
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
        if ( '' != pick ) {
            var arr = pick.toString().split(','),
                v = e.find(":selected").val();
            if ( 0 <= jQuery.inArray( v, arr ) ) {
                return true;
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
    // ciaoToggle DATA-API
    toggleScan();
    $('.ciao-toggle').each(function() {
        $(this).ciaoToggle();
    });
})(jQuery);
