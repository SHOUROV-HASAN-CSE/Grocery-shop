import { StoreDetails } from './_components/store-details/store-details';
import { StoreInfo } from './_components/store-info';

export default function StorePage() {
  return (
    <main className='pb-6'>
      <StoreInfo />
      <StoreDetails />
    </main>
  );
}
