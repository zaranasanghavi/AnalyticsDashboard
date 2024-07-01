import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`frame-parent ${className}`}>
      <div className="frame-wrapper">
        <div className="frame-group">
          <img
            className="frame-child"
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
          <div className="elytics-wrapper">
            <img
              className="elytics-icon"
              loading="lazy"
              alt=""
              src="/elytics.svg"
            />
          </div>
        </div>
      </div>
      <div className="frame-container">
        <div className="frame-div">
          <div className="dashboards-wrapper">
            <a className="dashboards">Dashboards</a>
          </div>
          <div className="dashboard-menu-items">
            <div className="menu-item">
              <img
                className="ic-dashboard-24px-icon"
                alt=""
                src="/ic-dashboard-24px@2x.png"
              />
              <div className="overview-wrapper">
                <a className="overview">Overview</a>
              </div>
            </div>
            <div className="menu-item1">
              <img
                className="ic-shopping-basket-24px-icon"
                loading="lazy"
                alt=""
                src="/ic-shopping-basket-24px@2x.png"
              />
              <div className="products-wrapper">
                <a className="products">Products</a>
              </div>
            </div>
            <div className="menu-item2">
              <img
                className="ic-supervisor-account-24px-icon"
                loading="lazy"
                alt=""
                src="/ic-supervisor-account-24px@2x.png"
              />
              <div className="customers-wrapper">
                <a className="customers">Customers</a>
              </div>
            </div>
            <div className="menu-item3">
              <img
                className="ic-directions-car-24px-icon"
                loading="lazy"
                alt=""
                src="/ic-directions-car-24px@2x.png"
              />
              <div className="shipping-wrapper">
                <div className="shipping">Shipping</div>
              </div>
            </div>
            <div className="menu-item4">
              <img
                className="ic-label-24px-icon"
                loading="lazy"
                alt=""
                src="/ic-label-24px.svg"
              />
              <div className="discounts-wrapper">
                <div className="discounts">Discounts</div>
              </div>
            </div>
            <div className="menu-item5">
              <img
                className="ic-assignment-24px-icon"
                loading="lazy"
                alt=""
                src="/ic-assignment-24px@2x.png"
              />
              <div className="reports-wrapper">
                <a className="reports">Reports</a>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent1">
          <div className="customize-dashboards-wrapper">
            <div className="customize-dashboards">Customize Dashboards</div>
          </div>
          <div className="setting-menu-items">
            <button className="menu-item6">
              <img
                className="ic-add-24px-icon"
                loading="lazy"
                alt=""
                src="/ic-add-24px.svg"
              />
              <div className="add-dashboard-wrapper">
                <div className="add-dashboard">Add Dashboard</div>
              </div>
            </button>
            <div className="menu-item7">
              <img
                className="ic-touch-app-24px-icon"
                loading="lazy"
                alt=""
                src="/ic-touch-app-24px@2x.png"
              />
              <div className="integrations-wrapper">
                <div className="integrations">Integrations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent2">
        <div className="user-settings-wrapper">
          <div className="user-settings">User Settings</div>
        </div>
        <div className="logout-menu-items">
          <div className="menu-item8">
            <img
              className="ic-settings-24px-icon"
              loading="lazy"
              alt=""
              src="/ic-settings-24px@2x.png"
            />
            <div className="settings-wrapper">
              <div className="settings">Settings</div>
            </div>
          </div>
          <div className="menu-item9">
            <img
              className="ic-power-settings-new-24px-icon"
              loading="lazy"
              alt=""
              src="/ic-power-settings-new-24px@2x.png"
            />
            <div className="log-out-wrapper">
              <div className="log-out">Log out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
