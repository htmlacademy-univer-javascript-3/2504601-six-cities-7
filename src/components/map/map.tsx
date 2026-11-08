import {useEffect, useRef, type JSX} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import {URL_MARKER_DEFAULT} from '../../const';
import {City, Offer} from '../../types/offer';

type MapProps = {
  className: string;
  city: City;
  offers: Offer[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({className, city, offers}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLElement | null>(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: defaultCustomIcon,
        }).addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers]);

  return <section className={`${className} map`} ref={mapRef}></section>;
}

export default Map;
