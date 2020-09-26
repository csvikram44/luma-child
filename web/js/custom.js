define([
    "jquery",
    "jquery/ui",
], function ($) {
    'use strict';
    $(document).ready(function(){
        $(".block.newsletter .action.subscribe").click(function(){
            alert("This is just a test.");
            return false;
        });
    });
});
