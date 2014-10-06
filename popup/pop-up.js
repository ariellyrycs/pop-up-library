var PopUp = (function () {
    var backgroundDim = (function () {
        var dimDiv = document.createElement("div");
        dimDiv.id = "dim";
        dimDiv.className = "dim";
        return dimDiv;
    }()),
    popUp = (function () {
        var popDiv = document.createElement("div");
            popDiv.id = "pop-up";
            popDiv.className = "pop-up";
        return popDiv;
    }()),
    closeIcon = (function () {
        var icon = document.createElement("img");
        icon.setAttribute("src", "http://icons.iconarchive.com/icons/hopstarter/sleek-xp-software/256/Windows-Close-Program-icon.png");
        icon.id = "img-close";
        icon.className = "img-close";
        return icon;
    }()),
    iconClick = function (e) {
        var currentDim = e.target.parentNode.parentNode;
        currentDim.parentNode.removeChild(currentDim);
    };
    return function (custom) {
        var background = backgroundDim.cloneNode(true),
            newWindow = popUp.cloneNode(true),
            icon = closeIcon.cloneNode(true);
        window.innerHTML = custom.html;
        icon.onclick = iconClick;
        newWindow.appendChild(icon);
        background.appendChild(newWindow);
        document.body.appendChild(background);
    };
}());
