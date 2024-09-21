const colors = ["#FCC834","#AF5CF6", "#ED675C", "#4DCDE6", "#FF63B7", "#FA8F3D", "#5CB973", "#ED675C"];
const collections = [
  {
    getId: "05092024",
    getLogo: "T",
    getLogoInfo: {getType: "text", getColor: colors[5]},
    getInformation: {getDay: "Thursday", getDate: "5 Sep, 2024"},
    getCollections: [{
      getClasses: ["#","#","remove"],
      getLogo: "./images/ic_default.jpg",
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Remaining Amount", getAmount: "₹3500"}
    }],
    getAmount: "₹3500"
  },
  {
    getId: "07092024",
    getLogo: "S",
    getLogoInfo: {getType: "text", getColor: colors[3]},
    getInformation: {getDay: "Saturday", getDate: "7 Sep, 2024"},
    getCollections: [{
      getClasses: ["#","#","remove"],
      getLogo: "./images/ic_default.jpg",
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Water Tank", getAmount: "₹5000"}
    }],
    getAmount: "₹5000"
  },
  {
    getId: "12092024",
    getLogo: "T",
    getLogoInfo: {getType: "text", getColor: colors[1]},
    getInformation: {getDay: "Thursday", getDate: "12 Sep, 2024"},
    getCollections: [{
      getClasses: ["#","#","remove"],
      getLogo: "./images/ic_default.jpg",
      getLogoInfo: {getType: "image"},
      getInformation: {getTitle: "Gorur Collection", getAmount: "₹50"}
    }],
    getAmount: "₹50"
  }
  
  ];

export default collections;