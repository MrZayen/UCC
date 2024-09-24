const getAvatar = ["S", "M", "T", "W", "T", "F", "S"];
const getAvatarColor = ["#FCC834", "#AF5CF6", "#ED675C", "#4DCDE6", "#FF63B7", "#FA8F3D", "#5CB973", "#ED675C"];
const getColor = [];
const getDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const getImages = {
  system: "./images/ic_default.jpg"
};
const getTitle = {};
const getBtnClasses = {
  system: "#",
  //Button Active Status 
  systemIsShow: "#"
};


//Template
/*{
  getId: "",
  getAvatar: getAvatar[],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[]},
  getInformation: {getDay: getDay[], getDate: ""},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: getTitle[], getAmount: }
  }],
  getAmount: 
p}*/


//Place Your Code Is Here

const expenses = [{
  getId: "02092024",
  getAvatar: getAvatar[1],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: getDay[1], getDate: "2 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "Bill Book Earnest", getAmount: 500}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "Transportation Costs", getAmount: 100}
  }],
  getAmount: 600
},

{
  getId: "03092024",
  getAvatar: getAvatar[2],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[7]},
  getInformation: {getDay: getDay[2], getDate: "3 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "Idol Earnest", getAmount: 500}
  }],
  getAmount: 500
},

{
  getId: "05092024",
  getAvatar: getAvatar[4],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[5]},
  getInformation: {getDay: getDay[4], getDate: "5 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "#"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "Bill Book", getAmount: 3970}
  },{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "Transportation Costs", getAmount: 230}
  }],
  getAmount: 4200
},

{
  getId: "06092024",
  getAvatar: getAvatar[5],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[3]},
  getInformation: {getDay: getDay[5], getDate: "6 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "Dhak Earnest", getAmount: 500}
  }],
  getAmount: 500
},

{
  getId: "07092024",
  getAvatar: getAvatar[6],
  getLogoInfo: {getType: "txt", getAvatarColor: getAvatarColor[0]},
  getInformation: {getDay: getDay[6], getDate: "7 Sep, 2024"},
  getExpenses: [{
    getClasses: [getBtnClasses.system, getBtnClasses.systemIsShow, "remove"],
    getImage: getImages.system,
    getLogoInfo: {getType: "img", isPng: false},
    getInformation: {getTitle: "Pandal Earnest", getAmount: 500}
  }],
  getAmount: 500
}];


export default expenses;