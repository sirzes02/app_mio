export interface stationData {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
}

let stations: stationData[];

export default stations = [
  {
    id: 0,
    name: 'Paso del Comercio',
    latitude: 3.4908428849944624,
    longitude: -76.4916272715696,
    description: 'Estacion del mio',
  },
  {
    id: 1,
    name: 'Torre de Cali',
    latitude: 3.457020570645909,
    longitude: -76.53030415218764,
    description: 'Estacion del mio',
  },
  {
    id: 2,
    name: 'Calipso',
    latitude: 3.427086419470222,
    longitude: -76.50034624273432,
    description: 'Estacion del mio',
  },
  {
    id: 3,
    name: 'Universidades',
    latitude: 3.3674736141004695,
    longitude: -76.5294712157474,
    description: 'Estacion del mio',
  },
  {
    id: 4,
    name: 'Unidad Deportiva',
    latitude: 3.4150785149241,
    longitude: -76.54842017526678,
    description: 'Estacion del mio',
  },
];
