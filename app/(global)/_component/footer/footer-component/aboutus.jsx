import Link from 'next/link';

const Aboutus = () => {
  const navLinks = [
    { pathname: '/emi-terms', title: 'EMI Terms' },
    { pathname: '/about-us', title: 'About Us' },
    { pathname: '/online-delivery', title: 'Online Delivery' },
    { pathname: '/privacy-policy', title: 'Privacy Policy' },
    { pathname: '/terms-and-conditions', title: 'Terms and Conditions' },
    {
      pathname: '/refund-and-return-policy',
      title: 'Refund and Return Policy',
    },
    { pathname: '/star-point-policy', title: 'Star Point Policy' },
    { pathname: '/blog', title: 'Blog' },
    { pathname: '/contact-us', title: 'Contact Us' },
    { pathname: '/brands', title: 'Brands' },
  ];
  return (
    <div className='md:col-span-2'>
      <h3 className='text-white text-center sm:text-left text-lg py-6 tracking-wider'>ABOUT US</h3>
      <div className='flex flex-wrap justify-center sm:grid gap-5 sm:grid-cols-2 md:grid-cols-3'>
        {navLinks?.map((element, i) => (
          <div className='text-gray-300' key={i}>
            <Link  href={element.pathname}>
              {element.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutus;
