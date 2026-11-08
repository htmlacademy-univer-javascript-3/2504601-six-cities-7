import type {JSX} from 'react';
import {Link, generatePath} from 'react-router-dom';
import classNames from 'classnames';
import {AppRoute} from '../../const';
import {Offer, PlaceCardType} from '../../types/offer';

type PlaceCardProps = {
  offer: Offer;
  cardType: PlaceCardType;
  onMouseEnter?: (id: string) => void;
  onMouseLeave?: () => void;
};

function PlaceCard({offer, cardType, onMouseEnter, onMouseLeave}: PlaceCardProps): JSX.Element {
  const {id, title, type, price, rating, isPremium, isFavorite, previewImage} = offer;
  const isFavoritesCard = cardType === 'favorites';
  const offerLink = generatePath(AppRoute.Offer, {id});

  return (
    <article
      className={`${cardType}__card place-card`}
      onMouseEnter={() => onMouseEnter?.(id)}
      onMouseLeave={() => onMouseLeave?.()}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={offerLink}>
          <img
            className="place-card__image"
            src={previewImage}
            width={isFavoritesCard ? 150 : 260}
            height={isFavoritesCard ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={classNames({'favorites__card-info': isFavoritesCard}, 'place-card__info')}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classNames(
              'place-card__bookmark-button',
              {'place-card__bookmark-button--active': isFavorite},
              'button'
            )}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={offerLink}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
