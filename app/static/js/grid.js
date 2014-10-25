$(document).ready(function(){

var createGrid = function(){
    for (var i= 1; i<=10; i++){
        $('#grid').append("<div class='square'></div>")

    }
};

var init = function(){
    createGrid();
};

(function(){
    init();
}())
});