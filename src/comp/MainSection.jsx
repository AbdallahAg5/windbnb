import { useSelector } from 'react-redux';
import Card from './Card';

function MainSection() {
  const data = useSelector((state) => state.app.data);
  const dataSearched = useSelector((state) => state.app.dataSearched);

  return (
    <div>
      <div className="search__result">
        <h1 className="searched__location">Stays in Finland </h1>
        <p className="number__places">
          {dataSearched.length > 0 ? dataSearched.length - 1 : data.length - 1}{' '}
          + stays
        </p>
      </div>
      <div className="card__container">
        {dataSearched.length > 0 &&
          dataSearched.map((e, i) => <Card data={e} key={i} />)}
        {dataSearched.length === 0 &&
          data.map((e, i) => <Card data={e} key={i} />)}
      </div>
    </div>
  );
}

export default MainSection;
