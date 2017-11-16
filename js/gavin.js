Vue.component ('home-page', {
  template: '#home'
})

new Vue ({
  el: '#gavin',
  // components: {
  //    index
  //  },

  // mounted(){
  //   this.registerColourChanger();
  // },
  // data() {
  //   return {
  //     colours: [
  //       'blue',
  //       'black',
  //       'green',
  //       'yellow',
  //       'orange'
  //     ],
  //     colourIndex: 0,
  //     colorChangeInterval: 2000,
  //   }
  // },
  // methods: {
  //   registerColourChanger() {
  //     var that = this;
  //     setInterval(function() {
  //       $('.wrapper').css('background-color', that.colours[that.colourIndex]);
  //       that.colourIndex++;
  //
  //       if (that.colourIndex >= that.colours.length) {
  //         that.colourIndex = 0;
  //       }
  //     }, that.colorChangeInterval);
  //   }
  // }
});
