const elementIds = ["empty-setup-push-repo-echo", "empty-setup-new-repo-echo"]

try {
    const defaultBranch = document.getElementById(elementIds[0]).innerText.split("\n")[1].split(" -M ")[1]
    console.log(browser.runtime.id + ": default branch is", defaultBranch)
    for(var i = 0; i < elementIds.length; i++) {
        let element = document.getElementById(elementIds[i])
        element.innerHTML = element.innerHTML.replace("<span class=\"user-select-contain\">git branch -M " + defaultBranch + "</span>\n", "").replace(" " + defaultBranch, " $(git branch --show-current)")
        console.log(browser.runtime.id + ": replaced branch instructions for " + elementIds[i] + " ID")
    }
} catch(error) {
    console.log(browser.runtime.id + ": ran but failed to find branch instructions")
}
