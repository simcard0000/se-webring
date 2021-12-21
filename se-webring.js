// Each PR for adding a site needs to list 
const allSites = [
    [
        {
            "name": "Simran Thind",
            "year": 2025,
            "website": "https://www.simranthind.me/"
        },
        {
            "name": "Janakitti Ratana-Rueangsri",
            "year": 2024,
            "website": "https://janakitti.com/"
        },
        {
            "name": "BBC Test",
            "year": 2025,
            "website": "https://bbc.com/"
        }
    ],
    [
        {
            "name": "NYT Test",
            "year": 2026,
            "website": "https://www.nytimes.com/"
        }
    ]
];

function fillSiteTable(type) {
    const searchBar = document.getElementById("searchbarInput");
    const divSiteList = document.getElementById("sitelistSection");
    let siteArray;
    if (type == "fromLoading" || type == "fromSearch" && searchBar.value == false) {
        siteArray = allSites;
    } else if (type == "fromSearch" && searchBar.value != false) {
        let siteResults = [];
        let siteResultsRow = [];
        let siteResultsSlice;
        for (let i = 0; i < allSites.length; i++) {
            for (let j = 0; j < allSites[i].length; j++) {
                if(searchBar.value == allSites[i][j]["year"] || allSites[i][j]["name"].includes(searchBar.value)
                    || allSites[i][j]["website"].includes(searchBar.value)) {
                    siteResultsRow.push(allSites[i][j]);
                }
                if(siteResultsRow.length == 3) {
                    siteResultsSlice = siteResultsRow.slice();
                    siteResults.push(siteResultsSlice);
                    siteResultsRow = [];
                }
            }
        }
        siteResultsSlice = siteResultsRow.slice();
        siteResults.push(siteResultsSlice);
        siteResultsRow = [];
        siteArray = siteResults;
    }
    if (document.getElementById("mainTable")) {
        const oldTable = document.getElementById("mainTable");
        oldTable.remove();
    }
    let htmlContent = [];
    htmlContent.push("<table id=\"mainTable\">");
    for (let i = 0; i < siteArray.length; i++) {
        htmlContent.push("<tr>");
        for (let j = 0; j < siteArray[i].length; j++) {
            let fullSite = siteArray[i][j]["website"];
            let cleanSite = fullSite.slice(8, fullSite.length - 1);
            htmlContent.push("<td><a target=\"_blank\" href=\"" + 
                fullSite + "\">" + cleanSite + "</a></td>");
        }
        htmlContent.push("</tr>");
    }
    htmlContent.push("</table>");
    divSiteList.insertAdjacentHTML(
        "afterbegin",
        htmlContent.join('')
    );
}
