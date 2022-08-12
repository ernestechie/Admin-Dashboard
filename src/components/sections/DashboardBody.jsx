import { walletCardsData } from '../../data/CardsData';
import Assets from '../common/Assets';
import Chart from '../common/Chart';
import Wallets from '../common/Wallets';

const DashboardBody = () => {
  return (
    <div className='h-auto p-8 mt-16'>
      <Wallets />
      <Chart />
      <Assets />
    </div>
  );
};

export default DashboardBody;
