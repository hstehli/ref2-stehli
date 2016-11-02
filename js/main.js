$( document).ready(function() {
    
    $('#zx-oui').click(function() {
        if($('#zx-oui').attr("checked", "checked")){
            $('.choix-modele').toggle();
        };
    });
     $('#zx-non').click(function() {
        if($('#zx-non').attr("checked", "checked")){
            $('.choix-modele').hide();
        };
    });
});   