import PropTypes from "prop-types";

export default function ShopItemFunc(props) {
  const { item } = props;

  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="descriptionFull">{item.descriptionFull}</div>
      <div className="highlight-window-mobile">
        <div className="highlight-overlay"></div>
      </div>
      <div className="divider"></div>
      <div className="purchase-info">
        <div className="price">{`${item.currency}${item.price}.00`}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  );
}

ShopItemFunc.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
  }),
};