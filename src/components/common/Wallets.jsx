import { walletCardsData } from '../../data/CardsData';
import CurrencyCard from './CurrencyCard';

const Wallets = () => {
  return (
    <div className='grid grid-cols-4 gap-4 h-48 mb-4'>
      {walletCardsData.map((data, index) => (
        <CurrencyCard
          key={index}
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

export default Wallets;
