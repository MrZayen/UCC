const getAvatar = ["S", "M", "T", "W", "T", "F", "S"];
const getAvatarColor = ["#FCC834", "#AF5CF6", "#ED675C", "#4DCDE6", "#FF63B7", "#FA8F3D", "#5CB973", "#ED675C"];
const getColor = [];
const getDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const getImages = {
  system: "./images/ic_default.jpg",
  extortion: "./images/ic_default.jpg",
  road: "",
  village: "./images/ic_default.jpg",
  institute: ""
};
const getTitle = {
  extortion: "Cow Collection",
  road: "",
  village: "Village Collection",
  institute: ""
};
const getBtnClasses = {
  system: "#",
  extortion: "#",
  road: "#",
  village: "#",
  institute: "#",
  //Button Active Status 
  systemIsShow: "#",
  extortionIsShow: "#",
  roadIsShow: "#",
  villageIsShow: "#",
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
    getInformation: {getTitle: "Remaining Amount", getAmount: 3500}
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
    getInformation: {getTitle: "Water Tank", getAmount: 5000}
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
    getImage: getImages.system,
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
  getAmount: 1100
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
  getAmount: 2170
},

{
  getId: "23092024",
  getAvatar: getAvatar[1],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[5]},
  getInformation: {getDay: getDay[1], getDate: "23 Sep, 2024"},
  getCollections: [{
    getClasses: [getBtnClasses.village, getBtnClasses.villageIsShow, "remove"],
    getImage: getImages.village,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle.village, getAmount: 1432}
  }],
  getAmount: 1432
}];


export default collections;