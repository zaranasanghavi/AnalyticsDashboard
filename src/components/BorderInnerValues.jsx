import PropTypes from "prop-types";
import "./BorderInnerValues.css";

const BorderInnerValues = ({
  className = "",
  totaRevenue,
  revenueValue,
  usd,
  icKeyboardArrowDown24px,
  prop,
}) => {
  return (
    <div className={`border-inner-values ${className}`}>
      <div className="border-inner-values-child" />
      <div className="title-value-parent">
        <div className="title-value">
          <div className="title-button">
            <div className="title">
              <div className="tota-revenue">{totaRevenue}</div>
            </div>
            <div className="action-panel">
              <div className="button-basic-icon">
                <img
                  className="ic-info-24px-icon"
                  alt=""
                  src="/ic-info-24px@2x.png"
                />
              </div>
              <div className="button-basic-icon1">
                <img
                  className="ic-call-made-24px-icon"
                  alt=""
                  src="/ic-call-made-24px-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="value">
            <div className="revenue-value">{revenueValue}</div>
            <div className="usd">{usd}</div>
          </div>
        </div>
        <div className="divider-parent">
          <div className="divider" />
          <div className="tag-parent">
            <div className="tag">
              <img
                className="ic-keyboard-arrow-down-24px-icon"
                loading="lazy"
                alt=""
                src={icKeyboardArrowDown24px}
              />
              <div className="wrapper">
                <div className="div">{prop}</div>
              </div>
            </div>
            <div className="month-tag">
              <div className="than-previous-month">than previous month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BorderInnerValues.propTypes = {
  className: PropTypes.string,
  totaRevenue: PropTypes.string,
  revenueValue: PropTypes.string,
  usd: PropTypes.string,
  icKeyboardArrowDown24px: PropTypes.string,
  prop: PropTypes.string,
};

export default BorderInnerValues;