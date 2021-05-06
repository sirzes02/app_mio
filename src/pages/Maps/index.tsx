import React, { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import Stations, { stationData } from '../../data/Stations';
import styles from './styles';

const Map = () => {
  const [currentLatitude, setCurrentLatitude] = useState<number>(0);
  const [currentLongitude, setCurrentLongitude] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const stations: stationData[] = Stations;

  const checkPermissions = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Mio APP Camera Permission',
        message: 'Mio App needs access to your location so you can check.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;

          setCurrentLatitude(latitude);
          setCurrentLongitude(longitude);
          setLoading(false);
        },
        error => {
          console.log(error.code, error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 10000,
        },
      );
    } else {
      Alert.alert('Permissions Denied');
    }
  };

  useEffect(() => {
    checkPermissions();
  }, []);

  return (
    <View style={styles.MainContainer}>
      {!loading && (
        <MapView
          style={styles.mapStyle}
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
          {stations.map(({ latitude, longitude, name, description }, index) => (
            <Marker
              key={index}
              title={name}
              description={description}
              coordinate={{ latitude, longitude }}
            />
          ))}
        </MapView>
      )}
    </View>
  );
};

export default Map;
