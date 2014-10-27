$(document).ready(function(){

var createGrid = function(){
    for (var i= 1; i<=20; i++){
        for(var j =1; j<=20; j++){
            $('#grid').append("<div class='square' style='background:{{ paletteColor}}' ng-click='squareClick("+j+", "+i+")' data-x='"+j+"' data-y='"+i+"'></div>");

        }
    }
};



var init = function(){
    createGrid();

};

(function(){
    init();
}())
});

//$(document).on('click','.square', function(){
//    var x = $(this).data('x');
//    var y = $(this).data('y');
//    console.log(x);
//});