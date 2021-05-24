import { 
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
 } from '@heroicons/react/outline';
import Image from 'next/image';
import HeaderItem from './HeaderItem';

function Header() {
  return (
    <header>

      <div>
        <HeaderItem title='HOME' Icon={HomeIcon} />
      </div>
      <Image 
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="Hulu logo"
      />

      <h1 className="text-red-800" >QUalquer coisa</h1>
    </header>
  )
}

export default Header
