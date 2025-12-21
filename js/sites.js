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
        "website": "https://zonahu.github.io/"
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
        "website": "https://www.yangsteven.ca/"
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
        "website": "https://aurorashi.com/"
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
        "website": "https://aarjav.xyz/"
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
        "website": "https://jiaqi.ch"
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
    },
    {
        "name": "Honzik Schenk",
        "year": 2029,
        "website": "https://honzikschenk.me/"
    },
    {
        "name": "Finn Cullen",
        "year": 2029,
        "website": "https://fatcullen.me/"
    },
    {
        "name": "Adeel Akhani",
        "year": 2029,
        "website": "https://www.adeelakhani.com/"
    },
    {
        "name": "Mohan Dong",
        "year": 2030,
        "website": "https://www.powerium.io/"
    },
    {
        "name": "Siddh Patel",
        "year": 2029,
        "website": "https://www.siddhp.com/"
    },
    {
        "name": "Julia Ilioukhina",
        "year": 2028,
        "website": "https://www.juliailio.com/"
    },
    {
        "name": "Alex Starosta",
        "year": 2028,
        "website": "https://alexstarosta.dev"
    },
    {
        "name": "Jasmehar Kaur",
        "year": 2029,
        "website": "https://jasmehar-k.github.io/"
    },
    {
        "name": "Rawsab Said",
        "year": 2027,
        "website": "https://rawsab.com" 
    },
    {
        "name": "Qinkai Li",
        "year": 2030,
        "website": "https://batteryspecial.vercel.app/" 
    },
    {
        "name": "Hwiseong Ahn",
        "year": 2030,
        "website": "https://www.hwiseong.com/en"
    },
    {
        "name": "Sean Yang",
        "year": 2030,
        "website": "https://seanyang.me/"
    },
    {
        "name": "Koral Kulacoglu",
        "year": 2028,
        "website": "https://koralkulacoglu.com"
    },
    {
        "name": "Ekanshh Praveen",
        "year": 2026,
        "website": "https://www.ekpraveen.ca/"
    },
    {
        "name": "Sarah Yoo",
        "year": 2030,
        "website": "https://sarahyoo.vercel.app"
    },
    {
        "name": "Geoffrey Lee",
        "year": 2028,
        "website": "https://www.geoffreylee.me/"
    },
    {
        "name": "Lucas Liao",
        "year": 2029,
        "website": "https://liaolucas.com/"
    },
    {
        "name": "Justin Abuyuan",
        "year": 2029,
        "website": "https://justin-abuyuan.xyz/"
    },
    {
        "name": "William Yang",
        "year": 2030,
        "website": "https://williamyang.ca/"
    },
    {
        "name": "Harley Zhang",
        "year": 2029,
        "website": "https://www.harleyzhang.me/"
    },
    {
      "name": "Tobias Livadariu",
      "year": 2029,
      "website": "https://www.tobias-livadariu.online/portfolio/"
    },
    {
        "name": "Louie Yin",
        "year": 2029,
        "website": "https://www.louiefatooey.space/"
    },
    {
        "name": "Angelina Wang",
        "year": 2029,
        "website": "https://archangelinux.vercel.app/"
    },
    {
        "name": "Ricky Tang",
        "year": 2030,
        "website": "https://www.rickytang.dev/"
    },
    {
        "name": "David Hua",
        "year": 2025,
        "website": "https://davidhua.ca/"
    },
    {
        "name": "Hamza Ammar",
        "year": 2030,
        "website": "https://hamzaammar.ca/"
    },
    {
        "name": "Aayush Patel",
        "year": 2028,
        "website": "https://aayushpatel.me/"
    }
    {
        "name": "Liron Katsif",
        "year": 2030,
        "website": "https://lironkatsif.com/"
    }
];

export default allSites;
