// background.js

let url = ""
chrome.action.onClicked.addListener((tab) => {

    chrome.tabs.query({active: true}, tabs => {
        url = tabs[0].url;

        // console.log("HI, LOGGING 1")
        // console.log(tab)
        // console.log(tabs)
        // console.log(url)

        if(url !== "https://www.powerlanguage.co.uk/wordle/"){
            chrome.action.setPopup(
                {
                    tabId:tabs[0].id,
                    popup:"wrong_website.html"
                }
            )
        } else {
            chrome.scripting.executeScript({
                target: {tabId:tabs[0].id},
                files: ['content.js']
            })
            chrome.action.setPopup(
                {
                    tabId:tabs[0].id,
                    popup:"score_calc_popup/score_calc.html"
                }
            )

        }

    });
});