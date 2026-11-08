import {useState, type JSX} from 'react';
import {Offer, PlaceCardType} from '../../types/offer';
import PlaceCard from '../place-card/place-card';

type OfferListProps = {
  offers: Offer[];
  cardType: PlaceCardType;
};

function OfferList({offers, cardType}: OfferListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          cardType={cardType}
          onMouseEnter={setActiveOfferId}
          onMouseLeave={() => setActiveOfferId(null)}
        />
      ))}
    </>
  );
}

export default OfferList;
