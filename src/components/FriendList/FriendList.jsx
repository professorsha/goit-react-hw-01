import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList(friends) {
    console.log(friends);
  return (
    <ul className={css.list}>
      {/* Кількість li залежить від кількості об'єктів в масиві */}
      <li>
        <FriendListItem
          avatar={friends.avatar}
          name={friends.name}
          status={friends.status}
        />
      </li>
    </ul>
  );
}
