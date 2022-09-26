// const url = "http://stackoverflow.com/"

function onclickRun(){
    chrome.browserAction.onClicked.addListener(() => {
        // chrome.windows.create({
        //     type: "popup",
        //     width: 600,
        //     height: 800
        // })
        // chrome.tabs.create({'url': url, 'selected': true});
        chrome.tabs.create({url:chrome.extension.getURL("index.html")});
    })
}

onclickRun();