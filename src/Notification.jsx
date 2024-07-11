import React from "react";
const styles = {
  wrapper: {
    margin: 8, padding: 8, display: "flex", flexDirection: "row",
    border: "1px solid grey", borderRadius: 16,
  },
  messageText: { color: "black", fontSize: 16, },
};
class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { // 연결 : Mount
    console.log(`${this.props.id} 컴포넌트 생성 => componentDidMount`);
  }
  componentDidUpdate() {
    console.log(`${this.props.id} 컴포넌트 변경 => componentDidUpdate`);
  }
  componentWillUnmount() {
    console.log(`${this.props.id} 컴포넌트 제거 => componentWillUnmount`);
  }

  render() {
    console.log("컴포넌트 그냥 생성"); // 뭔가가 수행될때마다 "그냥 생성"이 계속 찍혀나옴
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}
export default Notification;