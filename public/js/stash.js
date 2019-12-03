/**
 * Function to set the stash grid overlay
 */
function setStashUrl() {
    // must be logged into PoE with username
    const userName = `edenmind`;
    // Stash numbers start at 0
    const stashNUmber = 5;
    const myStashUrl = `https://www.pathofexile.com/character-window/get-stash-items?league=Blight&tabs=1&tabIndex=${stashNUmber}&accountName=${userName}`;
    // set href
    document.getElementById('myStashUrl').href = myStashUrl;
}

/**
 * Function to get stash images and posisitions
 * Triggers on Import Stash button confirmation
 */
document.getElementById('importStashButton').onclick = function() {
    // Get stash items from my logged in PoE stash
    var responseText = document.getElementById("stashTextArea").value;
    var responseObj = JSON.parse(responseText);
    var items = responseObj.items;
    
    const cellSize = 49;

    for(var i = 0; i < items.length; i++) {
        // get item data
        var url = items[i].icon;
        var y = items[i].y;
        var x = items[i].x;
        var h = items[i].h;
        var w = items[i].w;

        // set image to input on grid
        var inputs = document.getElementsByClassName("cellImage");
        for(var j = 0; j < inputs.length; j++) {
            if(inputs[j].getAttribute('y') === `${y}` && inputs[j].getAttribute('x') === `${x}`) {
                inputs[j].style.height = `${cellSize*h}px`;
                inputs[j].style.width = `${cellSize*w}px`;
                inputs[j].style.backgroundImage = `url("${url}")`;
            }
        }
    }
}