/**
 * Function to get stash images and posisitions
 */
document.getElementById('importStashButton').onclick = function() {
    var responseText = document.getElementById("stashTextArea").value;
    var responseObj = JSON.parse(responseText);

    var items = responseObj.items;

    for(var i = 0; i < items.length; i++) {
        // get item data
        var url = items[i].icon;
        var y = items[i].y;
        var x = items[i].x;
        var h = items[i].h;
        var w = items[i].w;

        //console.log(i, "item: ", items[i]);

        // set image to input on grid
        var inputs = document.getElementsByClassName("cellImage");
        for(var j = 0; j < inputs.length; j++) {
            if(inputs[j].getAttribute('y') === `${y}` && inputs[j].getAttribute('x') === `${x}`) {
                //inputs[j].style.backgroundColor = `none`;
                inputs[j].style.backgroundImage = `url("${url}")`;
            }
        }
    }
}