import css from './FriendListItem.module.css';

export default function FriendListItem({friend:{ avatar, name, status }})
=> {
  return (
    <div className={css.listItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{status}</p>
    </div>
  );
}
