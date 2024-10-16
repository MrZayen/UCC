const getAvatar = ["S", "M", "T", "W", "T", "F", "S"];
const getAvatarColor = ["#FCC834", "#AF5CF6", "#ED675C", "#4DCDE6", "#FF63B7", "#FA8F3D", "#5CB973", "#ED675C"];
const getColor = [];
const getDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const getImages = {
  system: "./images/ic_default.jpg",
  extortion: "./images/ic_default.jpg",
  road: "./images/ic_default.jpg",
  village: "./images/ic_default.jpg",
  relative: "./images/ic_default.jpg",
  institute: "./images/ic_default.jpg",
  market: "./images/ic_default.jpg"
};
const getTitle = {
  extortion: "গরু থেকে কালেকশন",
  road: "রাস্তা থেকে কালেকশন",
  village: "পার্শ্ববর্তী এলাকা থেকে",
  relative: "আত্মীয়র বাড়ি থেক",
  institute: "স্কুল থেকে কালেকশন",
  market: "হাট / বাজার কালেকশন"
};
const getBtnClasses = {
  system: "#",
  extortion: "#",
  road: "#",
  village: "#",
  relative: "#",
  institute: "#",
  market: "#",
  //Button Active Status 
  systemIsShow: "#",
  extortionIsShow: "#",
  roadIsShow: "#",
  villageIsShow: "#",
  relativeIsShow: "#",
  instituteIsShow: "#",
  marketIsShow: "#"
};

const getSubCardClasses = {
  default: "#",
  clicked: "subCard"
};
const getSubCardBtnClasses = {
  default: "#",
  clicked: "show"
};
const getSubCardId = {
  default: "subCard",
  extortion: "extortion",
  institute: "institute",
  market: "market",
  road: "road",
  village: "village"
};


//Template



//Place Your Code Is Here

const collections = [{
  getId: "05092024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[5]},
  getInformation: {getDay: getDay[4], getDate: "5 Sep, 2024"},
  getCollections: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "অবশিষ্ট টাকা", getAmount: 3500}
  }],
  getAmount: 3500
},

{
  getId: "07092024",
  getAvatar: getAvatar[6],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: getDay[6], getDate: "7 Sep, 2024"},
  getCollections: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "জলের ট্যাংক থেকে", getAmount: 5000}
  }],
  getAmount: 5000
},

{
  getId: "12092024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[1]},
  getInformation: {getDay: getDay[4], getDate: "12 Sep, 2024"},
  getCollections: [{
    getId: getSubCardId.extortion,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.extortion,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.extortion, getAmount: 50}
  }],
  getAmount: 50
},

{
  getId: "15092024",
  getAvatar: getAvatar[0],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[7]},
  getInformation: {getDay: getDay[0], getDate: "15 Sep, 2024"},
  getCollections: [{
    getId: getSubCardId.extortion,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.extortion,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.extortion, getAmount: 800}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "ভোটের বাড়ি থেকে", getAmount: 300}
  }],
  getAmount: 800 + 300
},

{
  getId: "19092024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[0]},
  getInformation: {getDay: getDay[4], getDate: "19 Sep, 2024"},
  getCollections: [{
    getId: getSubCardId.extortion,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.extortion,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.extortion, getAmount: 100}
  }],
  getAmount: 100
},

{
  getId: "20092024",
  getAvatar: getAvatar[5],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[4]},
  getInformation: {getDay: getDay[5], getDate: "20 Sep, 2024"},
  getCollections: [{
    getId: getSubCardId.village,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.village,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.village, getAmount: 240}
  }],
  getAmount: 240
},

{
  getId: "21092024",
  getAvatar: getAvatar[6],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[2]},
  getInformation: {getDay: getDay[6], getDate: "21 Sep, 2024"},
  getCollections: [{
    getId: getSubCardId.village,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.village,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.village, getAmount: 650}
  }],
  getAmount: 650
},

{
  getId: "22092024",
  getAvatar: getAvatar[0],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[1]},
  getInformation: {getDay: getDay[0], getDate: "22 Sep, 2024"},
  getCollections: [{
    getId: getSubCardId.village,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.village,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.village, getAmount: 1270}
  },{
    getId: getSubCardId.village,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.village,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.village, getAmount: 900}
  }],
  getAmount: 1270 + 900
},

{
  getId: "23092024",
  getAvatar: getAvatar[1],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[5]},
  getInformation: {getDay: getDay[1], getDate: "23 Sep, 2024"},
  getCollections: [{
    getId: getSubCardId.village,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked,, "#"],
    getImage: getImages.village,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.village, getAmount: 1432}
  },{
    getId: getSubCardId.village,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.village,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.village, getAmount: 800}
  }],
  getAmount: 1432 + 800
},

{
  getId: "26092024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: getDay[4], getDate: "26 Sep, 2024"},
  getCollections: [{
    getId: getSubCardId.extortion,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.extortion,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.extortion, getAmount: 500}
  }],
  getAmount: 500
},

{
  getId: "27092024",
  getAvatar: getAvatar[5],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[0]},
  getInformation: {getDay: getDay[5], getDate: "27 Sep, 2024"},
  getCollections: [{
    getId: getSubCardId.institute,
    getTitle: "উওর নিজতরফ এ.পি. বিদ্যালয়",
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.institute,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.institute, getAmount: 1500}
  }],
  getAmount: 1500
},

{
  getId: "28092024",
  getAvatar: getAvatar[6],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[1]},
  getInformation: {getDay: getDay[6], getDate: "28 Sep, 2024"},
  getCollections: [{
    getId: getSubCardId.village,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.village,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.village, getAmount: 800}
  },{
    getId: getSubCardId.village,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.village,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.village, getAmount: 300}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "ক্লাব ঘর থেকে ট্যাক্স", getAmount: 200}
  }],
  getAmount: 800 + 300 + 200
},

{
  getId: "29092024",
  getAvatar: getAvatar[0],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[6]},
  getInformation: {getDay: getDay[0], getDate: "29 Sep, 2024"},
  getCollections: [{
    getId: getSubCardId.village,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.relative,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.relative, getAmount: 1650}
  },{
    getId: getSubCardId.road,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.road,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.road, getAmount: 830}
  }],
  getAmount: 1650 + 830
},

{
  getId: "30092024",
  getAvatar: getAvatar[1],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[2]},
  getInformation: {getDay: getDay[1], getDate: "30 Sep, 2024"},
  getCollections: [{
    getId: getSubCardId.road,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.road,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.road, getAmount: 1000}
  }],
  getAmount: 1000
},

{
  getId: "01102024",
  getAvatar: getAvatar[2],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[4]},
  getInformation: {getDay: getDay[2], getDate: "1 Oct, 2024"},
  getCollections: [{
    getId: getSubCardId.institute,
    getTitle: "নিজতরফ জুনিয়ার বালিকা উচ্চ বিদ্যালয়",
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.institute,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.institute, getAmount: 2500}
  },{
    getId: getSubCardId.village,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.relative,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.relative, getAmount: 1590}
  },{
    getId: getSubCardId.road,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.road,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.road, getAmount: 900}
  }],
  getAmount: 2500 + 1590 + 900
},

{
  getId: "02102024",
  getAvatar: getAvatar[3],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: getDay[3], getDate: "2 Oct, 2024"},
  getCollections: [{
    getId: getSubCardId.road,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.road,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.road, getAmount: 2250}
  },{
    getId: getSubCardId.market,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.market,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "চ্যাংড়াবান্ধা বাজার থেকে", getAmount: 1100}
  }],
  getAmount: 2250 + 1100
},

{
  getId: "03102024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[0]},
  getInformation: {getDay: getDay[4], getDate: "3 Oct, 2024"},
  getCollections: [{
    getId: getSubCardId.market,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.market,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "বাজার / মোর কালেকশন", getAmount: 1550}
  },{
    getId: getSubCardId.road,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.road,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.road, getAmount: 700}
  }],
  getAmount: 1550 + 700
},

{
  getId: "04102024",
  getAvatar: getAvatar[5],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[1]},
  getInformation: {getDay: getDay[5], getDate: "4 Oct, 2024"},
  getCollections: [{
    getId: getSubCardId.market,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.market,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "মেখলিগঞ্জ বাজার থেকে", getAmount: 1330}
  },{
    getId: getSubCardId.road,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.road,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.road, getAmount: 150}
  }],
  getAmount: 1330 + 150
},

{
  getId: "05102024",
  getAvatar: getAvatar[6],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[5]},
  getInformation: {getDay: getDay[6], getDate: "5 Oct, 2024"},
  getCollections: [{
    getId: getSubCardId.market,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.market,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "হেলাপাকড়ি বাজার থেকে", getAmount: 1600}
  },{
    getId: getSubCardId.institute,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.institute,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.institute, getAmount: 450}
  },{
    getId: getSubCardId.institute,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.institute,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.institute, getAmount: 250}
  },{
    getId: getSubCardId.road,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.road,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.road, getAmount: 150}
  }],
  getAmount: 1600 + 700 + 150
},

{
  getId: "06102024",
  getAvatar: getAvatar[0],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[6]},
  getInformation: {getDay: getDay[0], getDate: "6 Oct, 2024"},
  getCollections: [{
    getId: getSubCardId.market,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.market,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "হলদিবাড়ি বাজার থেকে", getAmount: 880}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.road,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "ট্রাক (১), টোটো (১) মাঠে", getAmount: 150}
  }],
  getAmount: 880 + 150
},

{
  getId: "07102024",
  getAvatar: getAvatar[1],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[4]},
  getInformation: {getDay: getDay[1], getDate: "7 Oct, 2024"},
  getCollections: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "ভোটের বাড়ি থেকে", getAmount: 200}
  }],
  getAmount: 200
},

{
  getId: "08102024",
  getAvatar: getAvatar[2],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: getDay[2], getDate: "8 Oct, 2024"},
  getCollections: [{
    getId: getSubCardId.road,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "#"],
    getImage: getImages.road,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.road, getAmount: 390}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "মায়ের পূজার চাঁদা", getAmount: 200}
  }],
  getAmount: 390 + 200
},

{
  getId: "09102024",
  getAvatar: getAvatar[3],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[2]},
  getInformation: {getDay: "দুর্গাষষ্ঠী", getDate: "9 Oct, 2024"},
  getCollections: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "মায়ের পূজার চাঁদা", getAmount: 50}
  }],
  getAmount: 50
},

{
  getId: "10102024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[1]},
  getInformation: {getDay: "দুর্গাসপ্তমী", getDate: "10 Oct, 2024"},
  getCollections: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "সপ্তমীর মোট কালেকশন", getAmount: 4500}
  }],
  getAmount: 4500
},

{
  getId: "11102024",
  getAvatar: getAvatar[5],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[6]},
  getInformation: {getDay: "মহানবমী", getDate: "11 Oct, 2024"},
  getCollections: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "নবমীর মোট কালেকশন", getAmount: 11121}
  },{
    getId: getSubCardId.market,
    getClasses: [getSubCardClasses.clicked, getSubCardBtnClasses.clicked, "remove"],
    getImage: getImages.market,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "পাকড়িতলা বাজার থেকে", getAmount: 1100}
  }],
  getAmount: 11121 + 1100
},

{
  getId: "12102024",
  getAvatar: getAvatar[6],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[4]},
  getInformation: {getDay: "বিজয়াদশমী", getDate: "12 Oct, 2024"},
  getCollections: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "দশমীর মোট কালেকশন", getAmount: 7360}
  },{
    getClasses: [getBtnClasses.market, getBtnClasses.marketIsShow, "remove"],
    getImage: getImages.market,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "মেলার দোকান থেকে", getAmount: 6400}
  }],
  getAmount: 7360 + 6400
},

{
  getId: "17102024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: "পিকনিক", getDate: "17 Oct, 2024"},
  getCollections: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "সরকারি অনুদান", getAmount: 85000}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "চাঁদা সংগ্রহ", getAmount: 400}
  }],
  getAmount: 85000 + 400
}];


export default collections;