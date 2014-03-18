$(document).ready(function(){
 
    var tabContainers = $('.tabs-container > div');
    tabContainers.hide().filter(':first').show();
 
    $('ul.tabs-navigation li a').click(function(){
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('ul.tabs-navigation a').parent('li').removeClass('selected');
        $(this).parent('li').addClass('selected');
        return false;
        }).filter(':first').click();
     
    });