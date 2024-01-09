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
    },
    {
        "name": "Anthony Wang",
        "year": 2024,
        "website": "https://anthonywang.dev/"
    },
    {
        "name": "Will Harris",
        "year": 2024,
        "website": "https://willharris.ca/"
    },
    {
        "name": "William Qin",
        "year": 2024,
        "website": "https://williamqin.com/"
    },
    {
        "name": "Kelvin Zhang",
        "year": 2024,
        "website": "https://kelvinzhang.ca/"
    },
    {
        "name": "Zuomiao Hu",
        "year": 2024,
        "website": "https://zonahu.tech/"
    },
    {
        "name": "Yash Arora",
        "year": 2024,
        "website": "https://yasharora.com/"
    },
    {
        "name": "Jessica Lui",
        "year": 2024,
        "website": "https://jessicalui.me/"
    },
    {
        "name": "Damian Reiter",
        "year": 2023,
        "website": "https://damian.bio/"
    },
    {
        "name": "Jonathan Xu",
        "year": 2025,
        "website": "https://jonathanxu.com/"
    },
    {
        "name": "Hannah Guo",
        "year": 2025,
        "website": "https://hannahguo.me/"
    },
    {
        "name": "Alan Ma",
        "year": 2023,
        "website": "https://alan-ma.ca/"
    },
    {
        "name": "Mufeez Amjad",
        "year": 2023,
        "website": "https://mufeez.me"
    },
    {
        "name": "Yifei Zhang",
        "year": 2023,
        "website": "https://yifeiz.com"
    },
    {
        "name": "Elena Pan",
        "year": 2025,
        "website": "https://elena-pan.github.io/"
    },
    {
        "name": "Ryan Deng",
        "year": 2024,
        "website": "https://www.ryandeng.me/"
    },
    {
        "name": "Elliott Song",
        "year": 2024,
        "website": "https://elliottsong.com"
    },
    {
        "name": "Bilal Khan",
        "year": 2025,
        "website": "https://bilal2vec.com"
    },
    {
        "name": "Dylan Snelgrove",
        "year": 2024,
        "website": "https://dylansnelgrove.com"
    },
    {
        "name": "Oren Leung",
        "year": 2025,
        "website": "https://orenleung.com"
    },
    {
        "name": "Jason Zhou",
        "year": 2025,
        "website": "https://zhoujas.github.io/personal/"
    }, 
    {
        "name": "Laura Florea",
        "year": 2024, 
        "website": "https://www.florea.ca"
    }, 
    {
        "name": "Jack Douglas",
        "year": 2024, 
        "website": "https://jackdouglas.tech"
    },
    {
        "name": "Evan Zhang",
        "year": 2025,
        "website": "https://evanzhang.ca"
    },
    {
        "name": "Justin Lin",
        "year": 2027,
        "website": "https://justin-lin.com"
    },
    {
        "name": "Donghwui Kim",
        "year": 2027,
        "website": "https://donghwui.com"
    },
    {
        "name": "Rajan Agarwal",
        "year": 2028,
        "website": "https://rajan.sh"
    },
    {
        "name": "Anthony Chen",
        "year": 2028,
        "website": "https://chenanthony.com"
    },
    {
        "name": "Krish Shah",
        "year": 2026,
        "website": "https://krishkrosh.com"
    },
    {
        "name": "Jasmine Tai",
        "year": 2025,
        "website": "https://www.jtai.ca"
    },
    {
        "name": "Alex Zhu",
        "year": 2027,
        "website": "https://probablyalexzhu.github.io"
    },
    {
        "name": "Ryan Nguyen",
        "year": 2028,
        "website": "https://rynguyen.com/"
    },
    {
        "name": "Patrick Gu",
        "year": 2028,
        "website": "https://patrickgu.ca/"
    },
    {
        "name": "Ian Korovinsky",
        "year": 2028,
        "website": "https://iankorovinsky.github.io/"
    },
    {
        "name": "Rajat Patwari",
        "year": 2025,
        "website": "https://rajatpatwari.com"
    },
    {
        "name": "Jomills Jose Anand",
        "year": 2026,
        "website": "https://jomills.notion.site"
    },
    {
        "name": "Pearl Natalia",
        "year": 2028,
        "website": "https://pearlnatalia.com"
    },
    {
        "name": "Michael Pu",
        "year": 2024,
        "website": "https://mchlp.github.io/"
    },
    {
        "name": "Ishaan Dey",
        "year": 2028,
        "website": "https://www.ishaand.com/"
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
    htmlContent.push("<ul class=\"sticky\" id=\"mainTable\">");
    for (let i = 0; i < siteArray.length; i++) {
        let cleanSite = new URL(siteArray[i]["website"]);
        let host = cleanSite.hostname;
        if (host.substring(0, 4) === "www."){
            host = host.substring(4, host.length);
        }
        htmlContent.push("<li><a target=\"_blank\" href=\"" + cleanSite.toString() + "\">" + host + "</a></li>");
    }
    htmlContent.push("</ul>");
    divSiteList.insertAdjacentHTML(
         "afterend",
         htmlContent.join('')
    );
}
