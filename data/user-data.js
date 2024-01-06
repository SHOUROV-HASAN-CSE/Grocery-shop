export const userData = {
  image: 'https://i.ibb.co/rbBnRL5/faisal-ahmed.jpg',
  name: 'Faisal Ahmed',
};

//vendor initially false, when becomes vendor {store:string, id:num, verified:bool}, if handled from user collection

/**
 * or  separate collection for stores with a ref to user collection
 * user will be vendor of that store
 *   {
    id: '1',
    store: 'Store 1',
    vendor:user id
    verified: true | false,
    },
 */
export const stores = [
  {
    id: '1',
    store: 'Store 1',
    verified: true,
    user: 'najmulbinnurul@gmail.com',
    logo: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/pro-mp273aw/pro-mp273aw-500x500.webp',
    active: true,
    totalProduct: 100,
    totalSold: 50,
  },
  {
    id: '2',
    store: 'Store 2',
    verified: false,
    user: 'user2@example.com',
    logo: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/pro-mp273aw/pro-mp273aw-500x500.webp',
    active: true,
    totalProduct: 80,
    totalSold: 30,
  },
  {
    id: '3',
    store: 'Store 3',
    verified: true,
    user: 'user3@example.com',
    logo: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/pro-mp273aw/pro-mp273aw-500x500.webp',
    active: false,
    totalProduct: 120,
    totalSold: 80,
  },
  {
    id: '4',
    store: 'Store 4',
    verified: false,
    user: 'user4@example.com',
    logo: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/pro-mp273aw/pro-mp273aw-500x500.webp',
    active: true,
    totalProduct: 60,
    totalSold: 20,
  },
  {
    id: '5',
    store: 'Store 5',
    verified: true,
    user: 'user5@example.com',
    logo: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/pro-mp273aw/pro-mp273aw-500x500.webp',
    active: true,
    totalProduct: 150,
    totalSold: 100,
  },
  {
    id: '6',
    store: 'Store 6',
    verified: false,
    user: 'user6@example.com',
    logo: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/pro-mp273aw/pro-mp273aw-500x500.webp',
    active: false,
    totalProduct: 90,
    totalSold: 40,
  },
  {
    id: '7',
    store: 'Store 7',
    verified: true,
    user: 'user7@example.com',
    logo: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/pro-mp273aw/pro-mp273aw-500x500.webp',
    active: false,
    totalProduct: 110,
    totalSold: 70,
  },
  {
    id: '8',
    store: 'Store 8',
    verified: false,
    user: 'user8@example.com',
    logo: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/pro-mp273aw/pro-mp273aw-500x500.webp',
    active: true,
    totalProduct: 70,
    totalSold: 25,
  },
  {
    id: '9',
    store: 'Store 9',
    verified: true,
    user: 'user9@example.com',
    logo: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/pro-mp273aw/pro-mp273aw-500x500.webp',
    active: true,
    totalProduct: 130,
    totalSold: 90,
  },
  {
    id: '10',
    store: 'Store 10',
    verified: false,
    user: 'user10@example.com',
    logo: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/pro-mp273aw/pro-mp273aw-500x500.webp',
    active: true,
    totalProduct: 75,
    totalSold: 35,
  },
];
