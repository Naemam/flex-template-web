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
      bounds: new LatLngBounds(new LatLng(42.698334, 23.319941), new LatLng(42.698334, 23.319941)),
    },
  },
  {
    id: 'default-plovdiv',
    origin: 'Plovdiv%2C+Bulgaria',
    predictionPlace: {
      address: 'Plovdiv, Bulgaria',
      bounds: new LatLngBounds(new LatLng(42.136097, 24.742168), new LatLng(42.136097, 24.742168)),
    },
  },
  {
    id: 'default-varna',
    origin: 'Varna%2C+Bulgaria',
    predictionPlace: {
      address: 'Varna, Bulgaria',
      bounds: new LatLngBounds(new LatLng(43.204666, 27.910543), new LatLng(43.204666, 27.910543)),
    },
  },
  {
    id: 'default-burgas',
    origin: 'Burgas%2C+Bulgaria',
    predictionPlace: {
      address: 'Burgas, Bulgaria',
      bounds: new LatLngBounds(new LatLng(42.510578, 27.461014), new LatLng(42.510578, 27.461014)),
    },
  },
  {
    id: 'default-russe',
    origin: 'Russe%2C+Bulgaria',
    predictionPlace: {
      address: 'Russe, Bulgaria',
      bounds: new LatLngBounds(new LatLng(43.835571, 25.965654), new LatLng(43.835571, 25.965654)),
    },
  },
];
