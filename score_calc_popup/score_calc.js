chrome.storage.sync.get(["wordleScore"], function (item){
    console.log("ITEM")
    console.log(item)
    console.log("IN HERE")
    console.log(document)
    console.log(document.getElementById("wordleScore"))
    document.getElementById("wordleScore").textContent = item.wordleScore
});
