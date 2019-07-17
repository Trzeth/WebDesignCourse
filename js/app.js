$(".menu-submenu-item,.menu-item").click(Selected);
$(".menu-submenu-title").click(Expand);
function Selected(e){
    $(".menu-submenu-item.menu-selected,.menu-item.menu-selected").removeClass("menu-selected");

    $(this).addClass("menu-selected");
};
function Expand(e){
    var next = $(this).next();

    //防止动画没进行完就再次执行
    if(next.attr("animated") == "true"){
        return;
    }

    var h = next.outerHeight();
    
    if(next.hasClass("menu-submenu-hidden")){
        next.removeClass("menu-submenu-hidden");
        next.height(0);
        $(this).children(".menu-submenu-arrow").addClass("menu-submenu-arrow-down");

        next.attr("animated","true");
        next.animate({height:h},200,"swing",
            function()
            {
                next.removeAttr("animated");
            });
    }else{
        $(this).children(".menu-submenu-arrow").removeClass("menu-submenu-arrow-down");
        next.attr("animated","true");
        next.animate({height:0},200,"swing",
            function(){
                $(this).addClass("menu-submenu-hidden");
                $(this).height(h);
                $(this).removeAttr("animated");
            }
        );
   }
}
