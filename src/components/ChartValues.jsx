import BorderInnerValues from "./BorderInnerValues";
import PropTypes from "prop-types";
import "./ChartValues.css";

const ChartValues = ({ className = "" }) => {
  return (
    <section className={`chart-values ${className}`}>
      <div className="horizontal-line">
        <div className="value-symbols">
          <div className="placeholder-symbols">125</div>
          <div className="usd1">usd</div>
        </div>
        <div className="value-dividers">
          <div className="divider1" />
        </div>
      </div>
      <div className="horizontal-line1">
        <div className="parent">
          <div className="div1">100</div>
          <div className="usd2">usd</div>
        </div>
        <div className="divider-wrapper">
          <div className="divider2" />
        </div>
      </div>
      <div className="horizontal-line2">
        <div className="group">
          <div className="div2">75</div>
          <div className="usd3">usd</div>
        </div>
        <div className="divider-container">
          <div className="divider3" />
        </div>
      </div>
      <div className="horizontal-line3">
        <div className="container">
          <div className="div3">50</div>
          <div className="usd4">usd</div>
        </div>
        <div className="divider-frame">
          <div className="divider4" />
        </div>
      </div>
      <div className="horizontal-line4">
        <div className="parent1">
          <div className="div4">25</div>
          <div className="usd5">usd</div>
        </div>
        <div className="divider-wrapper1">
          <div className="divider5" />
        </div>
      </div>
      <div className="horizontal-line5">
        <div className="parent2">
          <div className="div5">0</div>
          <div className="usd6">usd</div>
        </div>
        <div className="divider-wrapper2">
          <div className="divider6" />
        </div>
      </div>
      <div className="chart-values-child" />
      <div className="tooltip">
        <div className="separator-wrapper">
          <div className="separator">
            <div className="separator-content">22. 11. 2021</div>
            <div className="separator-label">-</div>
            <div className="separator-content1">15:36</div>
          </div>
        </div>
        <div className="tooltip-child" />
        <div className="tooltip-values-parent">
          <div className="tooltip-values">
            <div className="tooltip-metrics">
              <div className="tooltip-metrics-child" />
            </div>
            <div className="revenue">Revenue</div>
          </div>
          <div className="value-placement">
            <div className="placeholder-values">73</div>
            <div className="usd7">usd</div>
          </div>
        </div>
        <div className="frame-parent3">
          <div className="frame-parent4">
            <div className="line-wrapper">
              <div className="frame-item" />
            </div>
            <div className="sold-products">Sold Products</div>
          </div>
          <div className="parent3">
            <div className="div6">50</div>
            <div className="usd8">usd</div>
          </div>
        </div>
        <div className="frame-parent5">
          <div className="frame-parent6">
            <div className="line-container">
              <div className="frame-inner" />
            </div>
            <div className="average-order-value">Average Order Value</div>
          </div>
          <div className="parent4">
            <div className="div7">14</div>
            <div className="usd9">usd</div>
          </div>
        </div>
        <div className="tooltip-item" />
        <button className="button-basic-icon2">
          <img
            className="ic-call-made-24px-icon1"
            alt=""
            src="/ic-call-made-24px.svg"
          />
          <div className="show-detail-wrapper">
            <div className="show-detail">Show Detail</div>
          </div>
        </button>
      </div>
      <img
        className="chart-values-item"
        loading="lazy"
        alt=""
        src="/polygon-1.svg"
      />
      <div className="frame-parent7">
        <header className="frame-header">
          <div className="overview-parent">
            <a className="overview1">Overview</a>
            <div className="filtres-wrapper">
              <form className="filtres">
                <div className="select">
                  <a className="all-statuses">All Statuses</a>
                  <img
                    className="ic-arrow-drop-down-24px-icon"
                    alt=""
                    src="/ic-arrow-drop-down-24px.svg"
                  />
                </div>
                <div className="date-picker">
                  <div className="this-week-parent">
                    <a className="this-week">{`This week `}</a>
                    <input
                      className="date-placeholder"
                      placeholder="(20. 11. 2021 - 27. 11. 2021)"
                      type="text"
                    />
                  </div>
                  <img
                    className="ic-today-24px-icon"
                    alt=""
                    src="/ic-today-24px@2x.png"
                  />
                </div>
                <button className="select1">
                  <img
                    className="ic-perm-contact-calendar-24px-icon"
                    alt=""
                    src="/ic-perm-contact-calendar-24px@2x.png"
                  />
                  <a className="share-dashboard">Share Dashboard</a>
                </button>
              </form>
            </div>
          </div>
        </header>
        <div className="smart-overview-container">
          <div className="smart-overview">
            <div className="border-inner-values1">
              <div className="title-value1">
                <div className="title-button1">
                  <div className="title1">
                    <a className="products-sold">Products sold</a>
                  </div>
                  <div className="action-panel1">
                    <div className="button-basic-icon3">
                      <img
                        className="ic-info-24px-icon1"
                        loading="lazy"
                        alt=""
                        src="/ic-info-24px@2x.png"
                      />
                    </div>
                    <div className="button-basic-icon4">
                      <img
                        className="ic-call-made-24px-icon2"
                        alt=""
                        src="/ic-call-made-24px-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="value1">
                  <div className="product-placeholder">759</div>
                  <div className="pcs">pcs</div>
                </div>
              </div>
              <div className="metric-containers">
                <div className="divider7" />
                <div className="conversion-rate-value">
                  <div className="tag1">
                    <img
                      className="ic-keyboard-arrow-up-24px-icon"
                      loading="lazy"
                      alt=""
                      src="/ic-keyboard-arrow-up-24px.svg"
                    />
                    <div className="frame">
                      <div className="div8">2.1%</div>
                    </div>
                  </div>
                  <div className="month-tag1">
                    <div className="than-previous-month1">
                      than previous month
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <BorderInnerValues
              totaRevenue="Tota Revenue"
              revenueValue="292 974"
              usd="usd"
              icKeyboardArrowDown24px="/ic-keyboard-arrow-down-24px@2x.png"
              prop="6.2%"
            />
            <BorderInnerValues
              totaRevenue="Average Order Value"
              revenueValue="386"
              usd="usd"
              icKeyboardArrowDown24px="/ic-keyboard-arrow-up-24px.svg"
              prop="8.2%"
            />
            <BorderInnerValues
              totaRevenue="Conversion Rate"
              revenueValue="6.86"
              usd="%"
              icKeyboardArrowDown24px="/ic-keyboard-arrow-up-24px.svg"
              prop="1.6%"
            />
          </div>
          <div className="title-value-wrapper">
            <div className="title-value2">
              <div className="title-button2">
                <div className="title2">
                  <div className="detailed-overview">Detailed Overview</div>
                </div>
                <div className="action-panel2">
                  <div className="button-basic-icon5">
                    <img
                      className="ic-info-24px-icon2"
                      alt=""
                      src="/ic-info-24px@2x.png"
                    />
                  </div>
                  <div className="button-basic-icon6">
                    <img
                      className="ic-call-made-24px-icon3"
                      alt=""
                      src="/ic-call-made-24px-1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chart-container-wrapper">
            <div className="chart-container">
              <div className="chart-header">
                <div className="chart-legends">
                  <div className="filter-data">
                    <div className="filtre-data">Filtre Data:</div>
                  </div>
                  <div className="legend-items">
                    <div className="chart-legend">
                      <div className="chart-legend-inner">
                        <div className="line-div" />
                      </div>
                      <div className="revenue1">Revenue</div>
                    </div>
                  </div>
                  <div className="legend-items1">
                    <div className="chart-legend1">
                      <div className="chart-legend-child">
                        <div className="frame-child1" />
                      </div>
                      <div className="sold-products1">Sold Products</div>
                    </div>
                  </div>
                  <div className="legend-items2">
                    <div className="chart-legend2">
                      <div className="chart-legend-inner1">
                        <div className="frame-child2" />
                      </div>
                      <div className="average-order-value1">
                        Average Order Value
                      </div>
                    </div>
                  </div>
                  <button className="chart-legend3">
                    <img
                      className="ic-add-24px-icon1"
                      alt=""
                      src="/ic-add-24px-1.svg"
                    />
                    <div className="customer-name">
                      <div className="customers1">Customers</div>
                    </div>
                  </button>
                </div>
                <button className="add-metric">
                  <button className="button-basic-icon7">
                    <img
                      className="ic-add-24px-icon2"
                      alt=""
                      src="/ic-add-24px-1.svg"
                    />
                    <div className="metric-name">
                      <div className="add-custom-metric">Add Custom Metric</div>
                    </div>
                  </button>
                </button>
              </div>
              <footer className="chart-values1">
                <div className="horizontal-line6">
                  <div className="horizontal-line-inner">
                    <div className="frame-child3" />
                  </div>
                  <div className="weekday-label">
                    <div className="weekday-placeholder">22. 11. 2021</div>
                    <div className="weekday-container">
                      <div className="monday">Monday</div>
                    </div>
                  </div>
                </div>
                <div className="horizontal-line7">
                  <div className="horizontal-line-child">
                    <div className="frame-child4" />
                  </div>
                  <div className="parent5">
                    <div className="div9">22. 11. 2021</div>
                    <div className="monday-wrapper">
                      <div className="monday1">Monday</div>
                    </div>
                  </div>
                </div>
                <div className="horizontal-line8">
                  <div className="horizontal-line-inner1">
                    <div className="frame-child5" />
                  </div>
                  <div className="parent6">
                    <div className="div10">22. 11. 2021</div>
                    <div className="monday-container">
                      <div className="monday2">Monday</div>
                    </div>
                  </div>
                </div>
                <div className="horizontal-line9">
                  <div className="horizontal-line-inner2">
                    <div className="frame-child6" />
                  </div>
                  <div className="parent7">
                    <div className="div11">22. 11. 2021</div>
                    <div className="monday-frame">
                      <div className="monday3">Monday</div>
                    </div>
                  </div>
                </div>
                <div className="horizontal-line10">
                  <div className="horizontal-line-inner3">
                    <div className="frame-child7" />
                  </div>
                  <div className="parent8">
                    <div className="div12">22. 11. 2021</div>
                    <div className="monday-wrapper1">
                      <div className="monday4">Monday</div>
                    </div>
                  </div>
                </div>
                <div className="horizontal-line11">
                  <div className="horizontal-line-inner4">
                    <div className="frame-child8" />
                  </div>
                  <div className="parent9">
                    <div className="div13">22. 11. 2021</div>
                    <div className="monday-wrapper2">
                      <div className="monday5">Monday</div>
                    </div>
                  </div>
                </div>
                <div className="horizontal-line12">
                  <div className="horizontal-line-inner5">
                    <div className="frame-child9" />
                  </div>
                  <div className="parent10">
                    <div className="div14">22. 11. 2021</div>
                    <div className="monday-wrapper3">
                      <div className="monday6">Monday</div>
                    </div>
                  </div>
                </div>
                <img className="charts-icon" alt="" src="/charts@2x.png" />
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ChartValues.propTypes = {
  className: PropTypes.string,
};

export default ChartValues;
