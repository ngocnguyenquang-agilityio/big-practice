// Libs
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Components
import { Button } from '@components/Button/Button';
import { Icon } from '@components/Icon/Icon';
import FormControl from './FormControl';

// Icons
import logoIcon from '@assets/logoIcon.svg';

// Constants
import { APP_ROUTERS, cityRegex, nameRegex, phoneRegex } from '@constants';

export interface IShippingFormSubmit {
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
  apartment?: string | null;
  address: string;
  city: string;
}

const schema = yup
  .object({
    phone: yup.string().matches(phoneRegex, 'Phone number is not valid').required('Phone is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    firstName: yup.string().matches(nameRegex, 'First name is not valid').required('First name is required'),
    lastName: yup.string().matches(nameRegex, 'Last name is not valid').required('Last name is required'),
    apartment: yup.string().nullable(),
    address: yup.string().required('Address is required'),
    city: yup.string().matches(cityRegex, 'City name is not valid').required('City is required'),
  })
  .required();

export const ShippingForm = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<IShippingFormSubmit>({
    mode: 'onSubmit',
    defaultValues: {},
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IShippingFormSubmit) => {
    // TODO: Handle Submit form
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className='flex items-center justify-center border border-neutral-700 bg-black h-[50px] w-[50px] rounded-xl'>
        <Link
          to={APP_ROUTERS.HOMEPAGE}
          reloadDocument
        >
          <Icon
            svg={logoIcon}
            name='logo-icon'
            width={30}
            height={30}
          />
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='mt-6'>
          <legend className='text-lg font-bold mb-2'>Contact</legend>
          <Controller
            control={control}
            name='phone'
            render={({ field: { onChange, value } }) => (
              <FormControl
                id='phone-number'
                onChange={onChange}
                value={value}
                label='Phone'
                variant={errors?.phone ? 'error' : 'secondary'}
                placeholder='Phone number'
                errorMessage={errors?.phone?.message}
              />
            )}
          />
        </fieldset>

        <fieldset className='mt-6'>
          <legend className='text-lg font-bold mb-2'>Shipping address</legend>
          <div className='mb-4'>
            <Controller
              control={control}
              name='email'
              render={({ field: { onChange, value } }) => (
                <FormControl
                  id='email'
                  onChange={onChange}
                  value={value}
                  label='Your email'
                  variant={errors?.phone ? 'error' : 'secondary'}
                  placeholder='name@flowbite.com'
                  errorMessage={errors?.email?.message || ''}
                />
              )}
            />
          </div>
          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='relative z-0 w-full mb-4 group'>
              <Controller
                control={control}
                name='firstName'
                render={({ field: { onChange, value } }) => (
                  <FormControl
                    id='first-name'
                    onChange={onChange}
                    value={value}
                    label='First name'
                    variant={errors?.phone ? 'error' : 'secondary'}
                    placeholder='First name'
                    errorMessage={errors?.firstName?.message}
                  />
                )}
              />
            </div>
            <div className='relative z-0 w-full mb-4 group'>
              <Controller
                control={control}
                name='lastName'
                render={({ field: { onChange, value } }) => (
                  <FormControl
                    id='last-name'
                    onChange={onChange}
                    value={value}
                    label='Last name'
                    variant={errors?.phone ? 'error' : 'secondary'}
                    placeholder='Last name'
                    errorMessage={errors?.lastName?.message}
                  />
                )}
              />
            </div>
          </div>
          <div className='mb-6'>
            <Controller
              control={control}
              name='address'
              render={({ field: { onChange, value } }) => (
                <FormControl
                  id='address'
                  onChange={onChange}
                  value={value}
                  label='Address'
                  variant={errors?.phone ? 'error' : 'secondary'}
                  placeholder='Address'
                  errorMessage={errors?.address?.message}
                />
              )}
            />
          </div>
          <div className='mb-6'>
            <Controller
              control={control}
              name='apartment'
              render={({ field: { onChange, value } }) => (
                <FormControl
                  id='apartment'
                  onChange={onChange}
                  value={value!}
                  label='Apartment'
                  placeholder='Apartment'
                />
              )}
            />
          </div>
          <div className='mb-6'>
            <Controller
              control={control}
              name='city'
              render={({ field: { onChange, value } }) => (
                <FormControl
                  id='city'
                  onChange={onChange}
                  value={value}
                  label='City'
                  variant={errors?.phone ? 'error' : 'secondary'}
                  placeholder='City'
                  errorMessage={errors?.city?.message}
                />
              )}
            />
          </div>
          <div className='flex justify-end'>
            <Button
              type='submit'
              className='px-5 py-8 rounded-md'
              size='lg'
            >
              Continue to shipping
            </Button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ShippingForm;
