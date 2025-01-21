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
        "website": "https://j-douglas.github.io"
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
        "website": "https://iankorovinsky.ca"
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
        "name": "Krish Modi",
        "year": 2028,
        "website": "https://krishmodi.com"
    },
    {
        "name": "Ishaan Dey",
        "year": 2028,
        "website": "https://www.ishaand.com/"
    },
    {
        "name": "Anantjyot Grang",
        "year": 2028,
        "website": "https://www.anantjyotgrang.com"
    },
    {
        "name": "Chris Fang",
        "year": 2025,
        "website": "https://www.chrisfang.dev/"
    },
    {
        "name": "Akshar Barot",
        "year": 2028,
        "website": "https://www.aksharbarot.com/"
    },
    {
        "name": "Steven Yang",
        "year": 2028,
        "website": "https://www.yangsteven.com/"
    },
    {
        "name": "Darsh Shah",
        "year": 2028,
        "website": "https://www.darshshah.ca/"
    },
    {
        "name": "Eric Xu",
        "year": 2026,
        "website": "https://ericxu.net/"
    },
    {
        "name": "Wilson Chen",
        "year": 2028,
        "website": "https://wilsonchenn.com/"
    },
    {
        "name": "Aurora Shi",
        "year": 2028,
        "website": "https://aurorashi.live/"
    },
    {
        "name": "Brian Zhang",
        "year": 2028,
        "website": "https://brianwzhang.com/"
    },
    {
        "name": "Carol Xu",
        "year": 2025,
        "website": "https://carolx715.github.io/"
    },
    {
        "name": "Aarjav Patni",
        "year": 2028,
        "website": "https://aarjavpatni.me/"
    },
    {
        "name": "Abhinav Balasubramanian",
        "year": 2027,
        "website": "https://abhinav-bala.github.io/portfolio/"
    },
    {
        "name": "Umar Mustafa",
        "year": 2028,
        "website": "https://umaralimustafa.vercel.app"
    },
    {
        "name": "Elijah Kurien",
        "year": 2028,
        "website": "https://www.elijahkurien.com/"
    },
    {
        "name": "Lucas Kim",
        "year": 2029,
        "website": "https://lucaskamadakim.com/"
    },
    {
        "name": "Alice Zhao",
        "year": 2028,
        "website": "http://aliicezhao.com/"
    },
    {
        "name": "Pavithran Chelliahpillai",
        "year": 2029,
        "website": "https://pchelliahpillai.com/"
    },
    {
        "name": "Paul Lee",
        "year": 2028,
        "website": "https://paullee.dev/",
    },
    {
        "name": "Adam Chen",
        "year": 2028,
        "website": "https://encodeous.ca"
    },
    {
        "name": "George Wang",
        "year": 2027,
        "website": "https://georgewang.dev/"
    },
    {
        "name": "Max Lu",
        "year": 2027,
        "website": "https://redcx.ca/"
    },
    {
        "name": "Naman Biyani",
        "year": 2029,
        "website": "https://www.namanbiyani.com"
    },
    {
        "name": "Steven Gong",
        "year": 2026,
        "website": "https://www.stevengong.co"
    },
    {
        "name": "Balaji Leninrajan",
        "year": 2028,
        "website": "https://balajileninrajan.github.io/homepage/"
    },
    {
        "name": "Patrick Huang",
        "year": 2028,
        "website": "https://www.patrickhuang.co/"
    },
    {
        "name": "Krish Shah",
        "year": 2028,
        "website": "https://shahkrish.ca/"
    },
    {
        "name": "Sumedh Dhanvanthry",
        "year": 2027,
        "website": "https://sumedh.ca/"
    },
    {
        "name": "Adam Selim",
        "year": 2029,
        "website": "https://adamselim.com/"
    },
    {
        "name": "Martin Baldwin",
        "year": 2029,
        "website": "https://marbal.ca"
    },
    {
        "name": "Nuthanan Tharmarajah",
        "year": 2029,
        "website": "https://nuthanan.com/"
    },
    {
        "name": "Lindsay Zhang",
        "year": 2027,
        "website": "https://itslinds.dev/"
    },
    {
        "name": "Amruth Arunkumar",
        "year": 2027,
        "website": "https://amrutharunkumar.github.io/"
    }
];

export default allSites;
