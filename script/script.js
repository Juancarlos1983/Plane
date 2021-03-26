// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
// svg path for plane icon
var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

AmCharts.makeChart("chartdiv", {
  type: "map",
  fontSize:30,
  balloon:{horizontalPadding:20, verticalPadding:10},
  creditsPosition:"top-right",
  dataProvider: {
    map: "worldLow",
    zoomLevel: 2,
    zoomLongitude: -20,
    zoomLatitude: 15,

    lines: [{
      id: "line1",
      arc: -0.85,
      alpha: 0.8,
      color: "blue",
      latitudes: [35.5, 37.5, 42, 48.8567, 43.8163, 34.3, 23,-30],
      longitudes: [140, 127, 13, 2.3510, -79.4287, -118.15, -82, -51]
    }, {
      id: "line2",
      alpha: 0,
      color: "#000000",
      latitudes: [35.5, 37.5, 42, 48.8567, 43.8163, 34.3, 23, -30],
      longitudes: [140, 127, 13, 2.3510, -79.4287, -118.15, -82, -51]
    }],
    images: [{
      svgPath: targetSVG,
      title: "Japan",
      latitude: 35.5,
      longitude: 140.0,
    }, {
      svgPath: targetSVG,
      title: "Korea",
      latitude: 37.5,
      longitude: 127.0
    }, {
      svgPath: targetSVG,
      title: "Paris",
      latitude: 48.8567,
      longitude: 2.3510
    }, {
      svgPath: targetSVG,
      title: "Italia",
      latitude: 42.0,
      longitude: 13.0
    }, {
      svgPath: targetSVG,
      title: "Toronto",
      latitude: 43.8163,
      longitude: -79.4287
    }, {
      svgPath: targetSVG,
      title: "Los Angeles",
      latitude: 34.3,
      longitude: -118.15
    }, {
      svgPath: targetSVG,
      title: "Havana",
      latitude: 23,
      longitude: -82
    },{
      svgPath: targetSVG,
      title: "Brasil",
      latitude: -30,
      longitude: -51
    }, {
      svgPath: planeSVG,
      positionOnLine: 0,
      color: "blue",
      alpha: 0.1,
      animateAlongLine: true,
      lineId: "line2",
      flipDirection: true,
      loop: true,
      scale: 0.05,
      positionScale: 1.3
    }, {
      svgPath: planeSVG,
      positionOnLine: 0,
      color: "black",
      animateAlongLine: true,
      lineId: "line1",
      flipDirection: true,
      loop: true,
      scale: 0.05,
      positionScale: 1.8
    }]
  },

  areasSettings: {
    unlistedAreasColor: "green"
  },

  imagesSettings: {
    color: "red",
    rollOverColor: "red",
    selectedColor: "red",
    pauseDuration: 0.5,
    animationDuration: 5.5,
    adjustAnimationSpeed: true
  },
<!--Linha de voo-->
  linesSettings: {
    color: "red",
    alpha: 0.2
  }
});
