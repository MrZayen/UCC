const colors = ["#FCC834","#AF5CF6", "#ED675C", "#4DCDE6", "#FF63B7", "#FA8F3D", "#5CB973", "#ED675C"];
const collections = [
  {
    id: 05092024,
    getLogo: "T",
    getLogoInfo: {getType: "text", getColor: colors[5]},
    getInformation: {getDay: "Thursday", getDate: "5 Sep, 2024"},
    getCollections: [{
      getClasses: ["#","#","remove"],
      getLogo: "./images/ic_default.jpg",
      getLigoInfo: {getType: "image"},
      getInformation: {getTitle: "Remaining Amount", getAmount: "₹3500"}
    }],
    getAmount: "₹3500"
  }
  
  ];

export default collections;