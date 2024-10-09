Vue.createApp({
  data() {
    return {
      progressPercent: 0,
      isFirst: true,
      isCenter: false,
      isEnd: false,
    };
  },
  methods: {
    add() {
      if (this.progressPercent === 100) {
        return;
      }
      if (this.progressPercent > 30 && this.progressPercent < 70) {
        this.isFirst = false;
        this.isCenter = true;
        this.isEnd = false;
      } else if (this.progressPercent >= 70) {
        this.isFirst = false;
        this.isCenter = false;
        this.isEnd = true;
      }

      this.progressPercent++;
    },
    rem() {
      if (this.progressPercent === 0) {
        return;
      }
     
      if (this.progressPercent >= 0 && this.progressPercent < 30) {
        this.isFirst = true;
        this.isCenter = false;
        this.isEnd = false;
      }
      else if (this.progressPercent > 30 && this.progressPercent < 70) {
        this.isFirst = false;
        this.isCenter = true;
        this.isEnd = false;
      } else if (this.progressPercent >= 70) {
        this.isFirst = false;
        this.isCenter = false;
        this.isEnd = true;
      }

      this.progressPercent--;
    },
  },
}).mount(".app");
