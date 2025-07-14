import BurgermenuIcon from '@/app/public/menue-icon.svg';
import LogoIcon from '@/app/public/logo.svg';
import CardIcon from '@/app/public/logo.svg';

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
                <CardIcon />
            </div>
        </div>
    )
}