import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFoundPage() {
  return (
    <div className="page page--gray page--main">
      <main className="page__main">
        <div className="container" style={{textAlign: 'center', padding: '100px 0'}}>
          <h1>404 Not Found</h1>
          <p>Page you are looking for does not exist.</p>
          <Link to={AppRoute.Main}>Go to main page</Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
