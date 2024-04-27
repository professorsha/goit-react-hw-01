import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  const variant = isOnline ? 'Online' : 'Offline';
  return (
    <div>
      <img className={css.itemImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.itemName}>{name}</p>
      <p className={clsx(css.status,isOnline===true?css.online:css.offline)}>{variant}</p>
    </div>
  );
}
