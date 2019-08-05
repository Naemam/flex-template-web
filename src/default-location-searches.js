import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-sofia',
    origin: 'Sofia%2C+Bulgaria',
    predictionPlace: {
      address: 'Sofia, Bulgaria',
      bounds: new LatLngBounds(new LatLng(42.896425, 23.678672), new LatLng(42.412497, 23.051092)),
    },
  },
  {
    id: 'default-plovdiv',
    origin: 'Plovdiv%2C+Bulgaria',
    predictionPlace: {
      address: 'Plovdiv, Bulgaria',
      bounds: new LatLngBounds(new LatLng(42.200069, 24.843531), new LatLng(42.089342, 24.652632)),
    },
  },
  {
    id: 'default-varna',
    origin: 'Varna%2C+Bulgaria',
    predictionPlace: {
      address: 'Varna, Bulgaria',
      bounds: new LatLngBounds(new LatLng(43.600267, 28.146745), new LatLng(42.815993, 27.065744)),
    },
  },
  {
    id: 'default-burgas',
    origin: 'Burgas%2C+Bulgaria',
    predictionPlace: {
      address: 'Burgas, Bulgaria',
      bounds: new LatLngBounds(new LatLng(42.713905, 27.571386), new LatLng(42.371243, 27.211493)),
    },
  },
  {
    id: 'default-ruse',
    origin: 'Ruse%2C+Bulgaria',
    predictionPlace: {
      address: 'Ruse, Bulgaria',
      bounds: new LatLngBounds(new LatLng(43.981813, 26.359226), new LatLng(43.721878, 25.860395)),
    },
  },
];
