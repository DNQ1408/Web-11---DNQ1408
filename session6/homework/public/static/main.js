max = parseInt($("#questionInput").attr("maxlength"));
$(document).ready(function(){
    $("#questionInput").bind('input', function(){
        let d = max - this.value.length;
        $("#character").text(d);
    });
});
