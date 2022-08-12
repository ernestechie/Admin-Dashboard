import { walletCardsData } from '../../data/CardsData';
import CurrencyCard from '../common/CurrencyCard';

const DashboardBody = () => {
  return (
    <div className='p-8 grid grid-cols-8 gap-4'>
      {walletCardsData.map((data, index) => (
        <CurrencyCard
          key={index}
          colSpan={'col-span-2'}
          name={data.name}
          icon={data.icon}
          eye={data.eye && data.eye}
          amount={data.amount}
          payout={data.payout}
          profit={data.profit}
          gains={data.gains}
          gain={data.gain}
          iconClass={data.iconClass}
        />
      ))}
    </div>
  );
};

export default DashboardBody;
