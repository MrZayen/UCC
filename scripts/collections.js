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
  institute: "./images/ic_default.jpg"
};
const getTitle = {
  extortion: "গরু থেকে কালেকশন",
  road: "রাস্তা থেকে কালেকশন",
  village: "পার্শ্ববর্তী এলাকা থেকে",
  relative: "আত্মীয়র বাড়ি থেক",
  institute: "স্কুল থেকে কালেকশন"
};
const getBtnClasses = {
  system: "#",
  extortion: "#",
  road: "#",
  village: "#",
  relative: "#",
  institute: "#",
  //Button Active Status 
  systemIsShow: "#",
  extortionIsShow: "#",
  roadIsShow: "#",
  villageIsShow: "#",
  relativeIsShow: "#",
  instituteIsShow: "#"
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
    getClasses: [getBtnClasses.extortion, getBtnClasses.extortionIsShow, "remove"],
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
    getClasses: [getBtnClasses.extortion, getBtnClasses.extortionIsShow, "#"],
    getImage: getImages.extortion,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.extortion, getAmount: 800}
  },{
    getClasses: [getBtnClasses.village, getBtnClasses.villageIsShow, "remove"],
    getImage: getImages.village,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.village, getAmount: 300}
  }],
  getAmount: 800 + 300
},

{
  getId: "19092024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[0]},
  getInformation: {getDay: getDay[4], getDate: "19 Sep, 2024"},
  getCollections: [{
    getClasses: [getBtnClasses.extortion, getBtnClasses.extortionIsShow, "remove"],
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
    getClasses: [getBtnClasses.village, getBtnClasses.villageIsShow, "remove"],
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
    getClasses: [getBtnClasses.village, getBtnClasses.villageIsShow, "remove"],
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
    getClasses: [getBtnClasses.village, getBtnClasses.villageIsShow, "#"],
    getImage: getImages.village,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.village, getAmount: 1270}
  },{
    getClasses: [getBtnClasses.village, getBtnClasses.villageIsShow, "remove"],
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
    getClasses: [getBtnClasses.village, getBtnClasses.villageIsShow, "#"],
    getImage: getImages.village,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.village, getAmount: 1432}
  },{
    getClasses: [getBtnClasses.village, getBtnClasses.villageIsShow, "remove"],
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
    getClasses: [getBtnClasses.extortion, getBtnClasses.extortionIsShow, "remove"],
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
    getClasses: [getBtnClasses.institute, getBtnClasses.instituteIsShow, "remove"],
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
    getClasses: [getBtnClasses.village, getBtnClasses.villageIsShow, "#"],
    getImage: getImages.village,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.village, getAmount: 800}
  },{
    getClasses: [getBtnClasses.village, getBtnClasses.villageIsShow, "#"],
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
    getClasses: [getBtnClasses.relative, getBtnClasses.relativeIsShow, "#"],
    getImage: getImages.relative,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.relative, getAmount: 1650}
  },{
    getClasses: [getBtnClasses.road, getBtnClasses.road, "remove"],
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
    getClasses: [getBtnClasses.road, getBtnClasses.roadIsShow, "remove"],
    getImage: getImages.road,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.road, getAmount: 1000}
  }],
  getAmount: 1000
}];


export default collections;