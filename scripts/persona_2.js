/**
 * Created by parland on 12/2/15.
 */

function persona_2_main(){

    function getDivStructure(){
        var tree = $('<div id="tree">');
        for(var l=0;l++<4;){
            tree.append($('<div class="layer">').html(getFiveDivs()));
        }
        return $('<div id="showRoom">').append(tree);
    }
    function getFiveDivs(){
        var res="";
        for(var l=0;l++<5;){res+="<div></div>";}
        return res;
    }

    $(this)
        .parent()
        .append(
            window.ClosableDiv.init(getDivStructure())
                .css({height:"400", backgroundColor:"darkblue"})
            );
}
