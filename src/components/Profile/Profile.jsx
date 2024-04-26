import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <img className={css.avatar} src={image} alt="User avatar" />
        <p className={css.title}>{name}</p>
        <p className={css.gray}>@{tag}</p>
        <p className={css.gray}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.status_info}>Followers</span>
          <span className={css.status_data}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.status_info}>Views</span>
          <span className={css.status_data}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.status_info}>Likes</span>
          <span className={css.status_data}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
