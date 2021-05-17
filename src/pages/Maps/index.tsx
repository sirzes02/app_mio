import React, { useEffect, useState } from 'react';
import { themes } from '../../data/MapStyle';
import MapView, { Marker } from 'react-native-maps';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import { useTheme } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';

import Callout from '../../components/Callout';
import Loader from '../../components/Loader';

import { Container } from './styles';

const Map: React.FC = () => {
  const [currentLatitude, setCurrentLatitude] = useState<number>(0);
  const [currentLongitude, setCurrentLongitude] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [stations, setStations] = useState<
    FirebaseFirestoreTypes.DocumentData[]
  >([]);

  const theme: 'dark' | 'light' = useTheme().dark ? 'dark' : 'light';

  const fetchData = async () => {
    const stationsCollections: FirebaseFirestoreTypes.QueryDocumentSnapshot[] = (
      await firestore().collection('estaciones').get()
    ).docs;

    setStations([...stationsCollections.map(station => station.data())]);
    setLoading(false);
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setCurrentLatitude(latitude);
      setCurrentLongitude(longitude);

      fetchData();
    });
  }, []);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <MapView
          style={{ width: '100%', height: '100%' }}
          customMapStyle={themes[theme]}
          showsUserLocation={true}
          zoomEnabled={true}
          provider="google"
          maxZoomLevel={17}
          minZoomLevel={12}
          initialRegion={{
            latitude: currentLatitude,
            longitude: currentLongitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {stations.map(
            ({ latitude, longitude, name, description, id, votes }, index) => (
              <Marker
                key={index}
                title={name}
                description={description}
                coordinate={{ latitude, longitude }}>
                <Callout name={name} id={id} votes={votes} />
              </Marker>
            ),
          )}
        </MapView>
      )}
    </Container>
  );
};

export default Map;
