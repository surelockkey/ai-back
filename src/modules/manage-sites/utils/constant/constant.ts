import { TableName } from '../type/table-name.type';

export const utils_constant = {
  [TableName.LOCATION]: {
    get_repository: {
      //in Location
      About_us: 'H2Text',
      Prices: 'LocationPrices',
      Testimonials: 'LocationTestimonials',
      About_city: 'H2Text',
      Our_services: 'LocationServices',
      Hour_24_services: 'LocationServices',
      Thumbnail: 'LocationThumbnail',
      Photo: 'LocationThumbnail',
      //in Prices
      list: 'LocationPricesList',
      Reviews: 'TestimonialsReviews',
      //in Thumbnail
      formats: 'LocationFormats',
      //in formats
      thumbnail: 'LocationFormatsThumbnail',
    },
    properties_as_object: [
      'About_us',
      'Prices',
      'Testimonials',
      'About_city',
      'Our_services',
      'Hour_24_services',
      'Thumbnail',
      'Photo',
    ],
  },
};
