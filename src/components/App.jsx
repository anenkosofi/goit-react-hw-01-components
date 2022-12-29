import { GlobalStyle } from './GlobalStyle';
import user from '../data/user.json';
import { Profile } from './Profile';
import data from '../data/data.json';
import { Statistics } from './Statistics';
import friends from '../data/friends.json';
import { FriendList } from './FriendList';
import transactions from '../data/transactions.json';
import { TransactionHistory } from './TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        margin: '0 auto',
        padding: '20px',
        width: '1280px',
      }}
    >
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
