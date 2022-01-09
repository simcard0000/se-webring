// Each PR for adding a site needs to list 
const allSites = [
    {
        "name": "Simran Thind",
        "year": 2025,
        "website": "https://www.simranthind.me/"
    },
    {
        "name": "Janakitti Ratana-Rueangsri",
        "year": 2024,
        "website": "https://janakitti.com/"
    }
];

const options = {
    includeScore: false,
    threshold: 0.3,
    keys: ['name', 'year', 'website']
}

const fuse = new Fuse(allSites, options);

window.addEventListener("scroll", function() {
    if (document.getElementById("mainTable") != null) {
        const nowTable = document.getElementById("mainTable");
        const tableTop = nowTable.getBoundingClientRect().top;
        const searchSection = document.getElementById("searchbarSection");
        const searchBottom = searchSection.getBoundingClientRect().bottom;
        const searchHeight = searchSection.clientHeight;
        nowTable.style.clipPath = "none";
        let difference = 0;
        if (tableTop < 0) {
            difference = tableTop * (-1) + searchHeight + 25;
        } else if (tableTop <= searchBottom) {
            difference = Math.abs(tableTop - searchBottom) + 25;
        } else if (tableTop > searchBottom && Math.abs(tableTop - searchBottom) < 25){
            difference = 25 - Math.abs(tableTop - searchBottom);
        }
        if (tableTop <= 50) {
            nowTable.style.clipPath = `inset(${difference}px 0 0 0)`;
        }
    }
})  

function changeSearchIconColour(flag) {
    const searchIcon = document.getElementById("searchbarIcon");
    if (flag) {
        // filter calculation generated from: https://codepen.io/sosuke/pen/Pjoqqp
        searchIcon.style.filter = "brightness(0) saturate(100%) invert(93%) sepia(93%) saturate(30%) hue-rotate(125deg) brightness(107%) contrast(106%)";
        searchIcon.style.transition = "1s";
    } else {
        searchIcon.style.filter = "none";
        searchIcon.style.transition = "1s";
    }
}

function fillSiteTable(type) {
    const searchBar = document.getElementById("searchbarInput");
    const divSiteList = document.getElementById("searchbarSection");
    let siteArray = [];
    if (type == "fromLoading" || type == "fromSearch" && !searchBar.value) {
        siteArray = allSites;
    } else if (type == "fromSearch" && searchBar.value) {
        let results = [];
        if (Number.parseInt(searchBar.value)) {
            results = fuse.search("=" + searchBar.value);
        } else {
            results = fuse.search(searchBar.value);
        }
        for (let i = 0; i < results.length; i++) {
            siteArray.push(results[i]["item"]);
        }
    }
    if (document.getElementById("mainTable")) {
        const oldTable = document.getElementById("mainTable");
        oldTable.remove();
    }
    let htmlContent = [];
    htmlContent.push("<div class=\"sticky\" id=\"mainTable\">");
    for (let i = 0; i < siteArray.length; i++) {
        let cleanSite = new URL(siteArray[i]["website"]);
        htmlContent.push("<button><a target=\"_blank\" href=\"" + cleanSite.toString() + "\">" + cleanSite.hostname + "</a></button>");
    }
    htmlContent.push("</div>");
    divSiteList.insertAdjacentHTML(
         "afterend",
         htmlContent.join('')
    );
}
