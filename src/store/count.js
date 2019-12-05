// 这里可以看作 将原始redux中的action reducer都放入了同一个文件，
// reducers和effects都可作为方法给组件调用，区别在于effects中可以写较为复杂逻辑和异步方法，reducers中为纯函数

const count = {
  state: 0,
  reducers: {
    add(state, payload) {
      return state + payload;
    },
    double(state) {
      return state * 2;
    }
  },
  effects: {
    async addAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.add(payload);
    },
    async doubleAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      this.double();
    },
    async addThenDoubleAsync(payload, rootState) {
      await this.addAsync(payload);
      await this.doubleAsync();
    }
  }
};

export default count;
