import React from 'react';
import { connect } from 'react-redux';

const Count = props => (
  <div>
    <div>the count is {props.count}</div>
    <div>
      <div>
        <button onClick={props.add}>add</button>加一
      </div>
      <div>
        <button onClick={props.double}>double</button>加倍
      </div>
      <div>
        <button onClick={props.addAsync}>addAsync</button>一秒钟后加一
      </div>
      <div>
        <button onClick={props.doubleAsync}>doubleAsync</button>一秒钟后加倍
      </div>
      <div>
        <button onClick={props.addThenDoubleAsync}>addThenDoubleAsync</button>异步加一然后异步加倍 各一秒钟
      </div>
    </div>
  </div>
);

const mapState = state => ({
  count: state.count
});
const mapDispatch = ({ count: { add, double, addAsync, doubleAsync, addThenDoubleAsync } }) => ({
  add: () => add(1),
  double,
  addAsync: () => addAsync(1),
  doubleAsync,
  addThenDoubleAsync: () => addThenDoubleAsync(1)
});
export default connect(mapState, mapDispatch)(Count);
