import BurgermenuIcon from '@/app/public/menue-icon.svg';
import LogoIcon from '@/app/public/logo.svg';
import CardIcon from '@/app/public/icon_card.svg';

export default function Main() {
  return (
    <div className="bg-red-300 max-w-md w-full px-5 py-8">
      <div className="flex flex-row justify-between items-center">
        <BurgermenuIcon />

        <div className="flex flex-row">
          <div className="font-bold text-[22px]">Luminae</div>
          <LogoIcon />
        </div>

        <div className="flex flex-row">
          <CardIcon />
          <div className="rounded-[50%] w-6 h-6 bg-mint-green grid place-items-center">3</div>
        </div>
      </div>
    </div>
  );
}
