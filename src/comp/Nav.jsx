import mypic from '@/assets/logo.svg';
import { dataSearched, search } from '@/redux/slice';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Map, Xmark } from './Icons';

function Nav() {
  const locationRef = useRef(null);
  const guestsRef = useRef(null);
  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const locationFound = useSelector((state) => state.app.locationFound);
  const InputHandler = () => {
    dispatch(
      search({
        location: locationRef.current.value,
        guest: guestsRef.current.value,
      })
    );
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      dataSearched({
        location: locationRef.current.value,
        guest: guestsRef.current.value,
      })
    );
    setClick(false);
  };

  const MenuHandler = (element) => {
    if (element === 'input' && click === false) {
      setClick(true);
    } else if (element === 'input' && click === true) {
      setClick(true);
    } else if (element === 'xmark') {
      setClick(false);
    }
  };

  useEffect(() => {
    if (click) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [click]);

  return (
    <nav className="nav">
      <div className="nav__header">
        <Image
          src={mypic}
          alt="Vercel Logo"
          className="nav__logo"
          style={click ? { display: 'none' } : null}
          width={100}
          height={24}
          priority
        />
        {click ? (
          <div className="phone__nav__header">
            <p className="phone__nav__header__text">Edit your search</p>
            <button
              className="phone__nav__header__xmark"
              onClick={() => MenuHandler('xmark')}
            >
              <Xmark />{' '}
            </button>
          </div>
        ) : null}
      </div>
      <div className={`${click ? 'form__absolute' : 'search__form'}`}>
        <label className={`${click ? 'location__label' : 'no__label'}`}>
          Location
        </label>
        <input
          ref={locationRef}
          type="text"
          name="location"
          autoCorrect="false"
          placeholder="Add Location"
          onChange={() => InputHandler()}
          onFocus={() => MenuHandler('input')}
          autoComplete="off"
          className={`${
            click ? 'search__location__input__focus' : 'search__location__input'
          }`}
        />
        <label className={`${click ? 'member__label' : 'no__label'}`}>
          Guests
        </label>
        <input
          ref={guestsRef}
          type="text"
          name="guest"
          autoCorrect="false"
          placeholder="Add guests"
          onChange={() => InputHandler()}
          onFocus={() => MenuHandler('input')}
          className={`${
            click ? 'search__member__input__focus' : 'search__member__input'
          }`}
        />
        <div className="result__container">
          {locationFound.map((e, i) => (
            <span
              key={i}
              className={`${
                click ? 'display__result__found' : 'no__display__result__found'
              }`}
            >
              <Map />
              <p className="location__found">{e}</p>
            </span>
          ))}
        </div>
        <button
          onClick={HandleSubmit}
          className={`${!click ? 'search__button' : 'search__button__focus'}`}
        >
          <BsSearch className="search__icon" /> {click ? 'Search' : null}
        </button>
      </div>
      <div className={`${click ? 'blur' : 'no__blur'}`}></div>
    </nav>
  );
}

export default Nav;
