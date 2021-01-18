elementIds = ["empty-setup-push-repo-echo", "empty-setup-new-repo-echo"]

try {
    for(var i = 0; i < elementIds.length; i++) {
        element = document.getElementById(elementIds[i])
        element.innerHTML = element.innerHTML.replace("<span class=\"user-select-contain\">git branch -M main</span>\n", "").replace(" main", " $(git branch --show-current)")
        console.log(browser.runtime.id + ": replaced branch instructions for " + elementIds[i] + " ID")
    }
} catch(error) {
    console.log(browser.runtime.id + ": ran but failed to find branch instructions")
}
