const colors = ["#FCC834","#AF5CF6", "#ED675C", "#4DCDE6", "#FF63B7", "#FA8F3D", "#5CB973", "#ED675C"];
const collections = [
  {
    getId: 20092024,
    getLogo: "./android.png",
    getLogoInfo: {getType: "image"},
    getInformation: {getDay: "Sunday", getDate: "20 Sep, 2024"},
    getCollections: [{
                       getClasses: ["#","#","remove"],
                       getLogo: "./android.png",
                       getLogoInfo: {getType: "image"},
                       getInformation: {getTitle: "Road Collections", getAmount: 500}
                     }],
    getAmount: 700
  },
  {
    getId: 20092024,
    getLogo: "S",
    getLogoInfo: {getType: "text", getColor: colors[1]},
    getInformation: {getDay: "Sunday", getDate: "20 Sep, 2024"},
    getCollections: [{
                       getClasses: ["#","#","#"],
                       getLogo: "./android.png",
                       getLogoInfo: {getType: "image"},
                       getInformation: {getTitle: "Road Collections", getAmount: 500}
                     },{
                       getClasses: ["#","#","remove"],
                       getLogo: "./android.png",
                       getLogoInfo: {getType: "image"},
                       getInformation: {getTitle: "Road Collections", getAmount: 500}
                     }],
    getAmount: 700
  }
  ];

export default collections;