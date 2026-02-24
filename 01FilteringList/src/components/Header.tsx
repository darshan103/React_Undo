type Props = {
  name: string;
}

const Header = (props: Props) => {
  const { name } = props;
  return (
    <div className="header">
      <p className="header-logo">{name}</p>
      <div className="header-search">
          <input type="text" placeholder="Search for products, brands and more" className="header-search-input"/>
          <button className="header-search-button">Search</button>
      </div>
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