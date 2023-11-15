// Libs
import { Suspense } from 'react';

// Components
import CheckoutLayout from '@layouts/CheckoutLayout/CheckoutLayout';
import ShippingForm from './components/ShippingFormContainer';
import ProductCheckoutContainer from './components/ProductCheckoutContainer';
import Loading from '@components/Loading/Loading';

const CheckoutPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CheckoutLayout rightAside={<ProductCheckoutContainer />}>
        <ShippingForm />
      </CheckoutLayout>
    </Suspense>
  );
};

export default CheckoutPage;
