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
            result = false;
        $.each( arrVal, function( key, value ) {
            if ( 0 > value.indexOf('+') ) {
                result = isToggle( value );
            } else {
                result = checkCombine( value );
            };
            if ( result ) return false;
        });
        return result;
    }
    // combine data check.
    function checkCombine(v){
        var arrVal = v.split('+'),
            result = false;
        $.each( arrVal, function( key, value ) {
            result = isToggle( value );
            // if has element not checked return false
            if ( !result ) return false;
        });
        return result;
    }
    // has checked?
    function isToggle(e){
        return $('#'+e).is(":checked");
    }
    // ciaoToggle DATA-API
    toggleScan();
    $('.ciao-toggle').each(function() {
        $(this).ciaoToggle();
    });
})(jQuery);
