<template>
  <div :style="style" class="ball" :id="ballId">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      dafault: "white"
    },
    value: {
      type: Number,
      default: 0
    },
    target: {
      type: Number,
      default: 500
    }
  },
  computed: {
    style() {
      return { background: this.color };
    },
    ballId() {
      return "ball" + this._uid;
    }
  },
  methods:{
      stop(){
         cancelAnimationFrame(this.timer)
    }
  },
  mounted() {
    
    let ball = document.getElementById(this.ballId);
    this.timer;
    let fn = () => {
        let left = this.value;
        if(left>=this.target){
            return cancelAnimationFrame(this.timer);
        };
        this.$emit('change',left+2);
      ball.style.transform = `translate(${this.value}px)`;
      this.timer=requestAnimationFrame(fn)
    };
    this.timer=requestAnimationFrame(fn)
  }
};
</script>
<style <style lang="less" scoped>
.ball {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  border: 1px solid red;
  text-align: center;
}
</style>

