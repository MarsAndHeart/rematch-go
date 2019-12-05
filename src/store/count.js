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
