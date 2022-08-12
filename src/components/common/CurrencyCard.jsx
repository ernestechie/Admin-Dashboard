import { useState } from 'react';

const CurrencyCard = (props) => {
  const [showAmount, toggleShowAmount] = useState(true);

  const toggleEyeIcon = () => {
    toggleShowAmount(
      showAmount ? () => toggleShowAmount(false) : () => toggleShowAmount(true)
    );
  };

  return (
    <div
      className={`p-4 ${props.colSpan} bg-white p-4 rounded-lg flex justify-between flex-col gap-2`}
    >
      <span className='__header flex justify-start items-center gap-4 py-2'>
        <span className={`mt-2 ${props.iconClass}`}>
          <ion-icon name={props.icon}></ion-icon>
        </span>
        <span className='font-bold text-xl uppercase'>{props.name}</span>
        {props.eye && (
          <span
            className='mt-2 text-2xl cursor-pointer'
            onClick={toggleEyeIcon}
          >
            {showAmount ? (
              <ion-icon name='eye-off-outline'></ion-icon>
            ) : (
              <ion-icon name='eye-outline'></ion-icon>
            )}
          </span>
        )}
      </span>
      <span className='__amount font-medium text-2xl text-gray-800'>
        {showAmount ? `N${props.amount}` : '********'}
      </span>
      <span className='__footer flex items-center justify-between text-sm'>
        <p className='text-gray-500'>{props.payout}</p>
        <p
          className={`font-bold ${
            props.gain ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {props.gain ? '+' : '-'} N{props.profit}
        </p>
        <p
          className={`font-bold rounded-full p-1 ${
            props.gain
              ? 'bg-green-100 text-green-500'
              : 'bg-red-100 text-red-500 '
          }`}
        >
          {props.gain ? '+' : '-'}
          {props.gains} %
        </p>
      </span>
    </div>
  );
};

export default CurrencyCard;
