import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'hz7i67eb',
    dataset: 'production',
    apiVersion: '2023-02-10',
    useCdn: true,
    token: 'skgnYwg4zCoUTWDHlycRkfqD9eY7txYyp8lR1KdC8BbHkCTRn3F1gExSUUTk45RCuijkVOOrDy2IQ49DTRWpc9NFxcyuEtFvJ8TZHBaXNT8w1hVaEPfeuzLX10TjZPNO8Rcl2JXJ1PBlI3s6nw3jQzQwUfMOE2CrkBdlyhZabWCUZuvDhKlU',
  });
  
  const builder = imageUrlBuilder(client);
  
  export const urlFor = (source) => builder.image(source);