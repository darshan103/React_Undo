import { useState, useEffect } from 'react';
type Props = {
  name: string;
}

const Header = (props: Props) => {
  const { name } = props;
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    function handleShow() {
      const scroll = window.scrollY;
      if (scroll > 300) {
        console.log("scroll if", scroll);
        setShowHeader(true);
      } else {
        console.log("scroll else", scroll);
        setShowHeader(false);
      }
    }
    window.addEventListener('scroll', handleShow);

    return () => {
      window.removeEventListener("scroll", handleShow);
    };

  }, []);

  return (
    <div className={`header ${showHeader ? "active" : ""}`}>
      <p className="header-logo">{name}</p>
      {/* <div className="header-search">
          <input type="text" placeholder="Search for products, brands and more" className="header-search-input"/>
          <button className="header-search-button">Search</button>
      </div> */}
      <div>
        <ul className="header-links">
          <li>Home</li>
          <li>Products</li>
          <li>Cart:(0)</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;