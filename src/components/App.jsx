import user from '../user.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { UserProfile } from 'components/UserProfile/UserProfile';
import { MainContainer } from './App.styled';
import { StatsSection } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendsList/FriendsList';
import {TransactionsHistory} from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <MainContainer>
      <UserProfile currentUser={user} />
      <StatsSection />
      <FriendsList allFriends={friends}/>
      <TransactionsHistory transactions={transactions}/>
    </MainContainer>
  );
};

