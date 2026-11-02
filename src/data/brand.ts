// The one place the company's name and contact details live. Change the working name here and every
// page, title, schema block and footer follows. The logo itself is the company's real artwork, in public/brand.
export const brand = {
  name: 'Diamond Shine',
  descriptor: 'Home Preservation & Care',
  workingName: 'DIAMOND SHINE — Home Preservation & Care',
  legalEntity: 'Diamond Shine Professional Cleaning Service',
  city: 'San Antonio',
  founded: '2017',
  phone: '210-982-2312',
  phoneHref: 'tel:2109822312',
  email: 'hello@diamondshinefamily.com',
  hours: {
    text: 'Monday to Friday, 8:30 a.m. to 6:00 p.m. Central',
    short: 'Monday to Friday, 8:30 a.m. to 6:00 p.m.',
    closed: 'Weekends are reserved for rest, family and gratitude.',
  },
  socials: {
    facebook: 'https://www.facebook.com/DiamondShineProfessionalCleaningService',
    google: 'https://maps.app.goo.gl/MrGe3FTAPQW1MBEQ8?g_st=ic',
    instagram: 'https://www.instagram.com/diamondshine.sa',
  },
  // The one call to action on the site.
  cta: 'Request a Home Evaluation',
  // Empty until the company authorizes a recipient. While empty the form says so and sends nothing.
  formEndpoint: import.meta.env.PUBLIC_FORM_ENDPOINT || '',
};

export const areas = [
  {
    name: 'San Antonio and the inner loop',
    towns: ['San Antonio', 'Alamo Heights', 'Terrell Hills', 'Olmos Park', 'Castle Hills', 'Leon Valley'],
  },
  {
    name: 'North, Northwest and Hill Country',
    towns: ['Shavano Park', 'Hollywood Park', 'Helotes', 'Fair Oaks Ranch', 'Boerne', 'Bulverde'],
  },
  {
    name: 'Northeast and the I-35 corridor',
    towns: ['Schertz', 'Cibolo', 'Converse', 'New Braunfels'],
  },
];
