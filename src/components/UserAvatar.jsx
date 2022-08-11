import userAvatar from '../assets/user-avatar-icon.png';

const UserAvatar = () => {
  return (
    <div className='w-1/4 flex justify-around items-center gap-4'>
      <span className='relative text-blue-500 text-3xl block cursor-pointer'>
        <div className='absolute text-red w-3 h-3 bg-red-500 text-white text-sm rounded-full top-0 left-0 z-10'></div>
        <ion-icon name='notifications-sharp'></ion-icon>
      </span>
      <div className='p-2 bg-blue-100 h-full rounded-full w-full flex gap-2 cursor-pointer'>
        <img
          src={userAvatar}
          alt='User avatar with orange hair, wearing purple shirt'
          className='h-full rounded-full'
        />
        <p className='flex flex-col'>
          <span className='text-[1rem] font-bold'>Isaiah Ernest</span>
          <span className='text-[0.8rem]'>ernestechie@web.dev</span>
        </p>
      </div>
    </div>
  );
};

export default UserAvatar;
