import BurgermenuIcon from '@/app/public/menue-icon.svg';
import LogoIcon from '@/app/public/logo.svg';
import CardIcon from '@/app/public/icon_card.svg';

export default function Main() {
  return (
    <div className="bg-red-300 max-w-md w-full">
      <h1>main</h1>
      <div>
        <BurgermenuIcon />
        <div>
          <div>Luminae</div>
          <LogoIcon />
        </div>
        <div>
          <CardIcon />
          <div className="rounded-[50%] w-6 h-6 bg-[#3DC47E] grid place-items-center">3</div>
        </div>
      </div>
    </div>
  );
}
