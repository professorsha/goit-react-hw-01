import {userData} from './';
import Profile from '../Profile/Profile';
import './App.css';


export default function App() {
  console.log(userData);
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}