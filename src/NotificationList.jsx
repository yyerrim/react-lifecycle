import React from "react";

import Notification from "./Notification";

const reservedNotifications = [
  { id: 1, message: "안녕하세요, 오늘 일정을 알려드립니다." },
  { id: 2, message: "점심식사 시간입니다." },
  { id: 3, message: "이제 곧 미팅이 시작됩니다." }
];

let timer;

class NotificationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    }
  }
  componentDidMount() {
    console.log(`NotificationList 컴포넌트 생성 => componentDidMount`);
    const { notifications } = this.state;
    timer = setInterval(() => {
      if (notifications.length < reservedNotifications.length) {
        const index = notifications.length;
        notifications.push(reservedNotifications[index]);
        this.setState({
          notifications: notifications, // state를 변경해야 렌더링이 됨
        });
      } else {
        this.setState({
          notifications: [], // 생명주기 확인하기 위해 제거
        });
        clearInterval(timer);
      }
    }, 1000); // 1초마다 한번씩 콜백함수 동작
  }
  render() {
    return (
      <div>
        {this.state.notifications.map((notification) => {
          return (
            <Notification message={notification.message} id={notification.id} />
          );
        })}
      </div>
    );
  }
}
export default NotificationList;