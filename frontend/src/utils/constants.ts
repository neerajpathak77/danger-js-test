import { FilterType } from 'types';

export const HOST = 'https://api.corona-zahlen.org';

export const HTTP_ROUTES = {
  CASES: '/history/cases/',
  CHARACTER: 'character',
  COUNTRY: '/',
  DEATHS: '/history/deaths/',
  RECOVERED: '/history/recovered/',
  STATE: '/states/'
};

// NP RENAME REGIONS
export const REGIONS = [
  {
    id: 'GERMANY',
    text: 'Germany',
    type: FilterType.COUNTRY,
    value: 'germany'
  },
  {
    id: 'BW',
    text: 'Baden-Württemberg',
    type: FilterType.STATE,
    value: 'BW'
  },
  {
    id: 'BY',
    text: 'Bayern',
    type: FilterType.STATE,
    value: 'BY'
  },
  {
    id: 'BE',
    text: 'Berlin',
    type: FilterType.STATE,
    value: 'BE'
  },
  {
    id: 'BB',
    text: 'Brandenburg',
    type: FilterType.STATE,
    value: 'BB'
  },
  {
    id: 'HB',
    text: 'Bremen',
    type: FilterType.STATE,
    value: 'HB'
  },
  {
    id: 'HH',
    text: 'Hamburg',
    type: FilterType.STATE,
    value: 'HH'
  },
  {
    id: 'HE',
    text: 'Hessen',
    type: FilterType.STATE,
    value: 'HE'
  },
  {
    id: 'NI',
    text: 'Niedersachsen',
    type: FilterType.STATE,
    value: 'NI'
  },
  {
    id: 'MV',
    text: 'Mecklenburg-Vorpommern',
    type: FilterType.STATE,
    value: 'MV'
  },
  {
    id: 'NW',
    text: 'Nordrhein-Westfalen',
    type: FilterType.STATE,
    value: 'NW'
  },
  {
    id: 'RP',
    text: 'Rheinland-Pfalz',
    type: FilterType.STATE,
    value: 'RP'
  },
  {
    id: 'SL',
    text: 'Saarland',
    type: FilterType.STATE,
    value: 'SL'
  },
  {
    id: 'SN',
    text: 'Sachsen',
    type: FilterType.STATE,
    value: 'SN'
  },
  {
    id: 'ST',
    text: 'Sachsen-Anhalt',
    type: FilterType.STATE,
    value: 'ST'
  },
  {
    id: 'SH',
    text: 'Schleswig-Holstein',
    type: FilterType.STATE,
    value: 'SH'
  },
  {
    id: 'TH',
    text: 'Thüringen',
    type: FilterType.STATE,
    value: 'TH'
  }
];

export const DATA_RANGE = [
  {
    id: '1',
    text: '1 week',
    type: FilterType.DATE,
    value: '7'
  },
  {
    id: '2',
    text: '2 weeks',
    type: FilterType.DATE,
    value: '14'
  },
  {
    id: '3',
    text: '3 weeks',
    type: FilterType.DATE,
    value: '21'
  },
  {
    id: '4',
    text: '4 weeks',
    type: FilterType.DATE,
    value: '28'
  }
];
