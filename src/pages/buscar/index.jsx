import Banner from '@/components/Providers/Banner';
import SupplierText from '@/components/Providers/SupplierText';
import Search from '@/components/Providers/Search';

export default function Providers() {
  return (
    <div className='flex-col items-center text-center'>
      <Banner />
      <SupplierText />
      <Search />
    </div>
  );
}