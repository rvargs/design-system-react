"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _week = require("./week");

var _week2 = _interopRequireDefault(_week);

var _date = require("../../../utilities/date");

var _date2 = _interopRequireDefault(_date);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var DatepickerCalendar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DatepickerCalendar, _React$Component);

  function DatepickerCalendar() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, DatepickerCalendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = DatepickerCalendar.__proto__ || Object.getPrototypeOf(DatepickerCalendar)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        focusedDate: _this.props.initialDateForCalendarRender,
        calendarHasFocus: true,
        todayFocus: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "setCalendarRenderSeedDate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(prevProps) {
        // Set prop that sets focus in child component once it is rendered. This occurs when the month DOM has changed. This will trigger a re-render, but no DOM change will occur, just a DOM focus.
        if (!_date2.default.isEqual(_this.props.initialDateForCalendarRender, prevProps.initialDateForCalendarRender)) {
          _this.setState({
            focusedDate: _this.props.initialDateForCalendarRender
          });

          _this.props.onRequestInternalFocusDate(undefined, {
            date: _this.props.initialDateForCalendarRender,
            triggerCallback: true
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleSelectDate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, _ref2) {
        var date = _ref2.date;

        if (!_this.props.dateDisabled({
          date: date
        })) {
          _this.setState({
            selected: date
          });

          _this.props.onSelectDate(event, {
            date: date
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleRequestClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (_this.props.onRequestClose) {
          _this.props.onRequestClose(event, {});
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleKeyboardNavigateToPreviousDay", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, _ref3) {
        var date = _ref3.date;

        var prevDate = _date2.default.addDays(date, -1);

        if (!_date2.default.isSameMonth(prevDate, date)) {
          _this.props.onChangeMonth(event, prevDate);
        } else {
          _this.setState({
            focusedDate: prevDate
          });

          _this.props.onRequestInternalFocusDate(event, {
            date: prevDate,
            triggerCallback: true
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleKeyboardNavigateToNextDay", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, _ref4) {
        var date = _ref4.date;

        var nextDate = _date2.default.addDays(date, 1);

        if (!_date2.default.isSameMonth(nextDate, date)) {
          _this.props.onChangeMonth(event, nextDate);
        } else {
          _this.setState({
            focusedDate: nextDate
          });

          _this.props.onRequestInternalFocusDate(event, {
            date: nextDate,
            triggerCallback: true
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleKeyboardNavigateToPreviousWeek", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, _ref5) {
        var date = _ref5.date;

        var prevDate = _date2.default.addDays(date, -7);

        if (!_date2.default.isSameMonth(prevDate, date)) {
          _this.props.onChangeMonth(event, prevDate);
        } else {
          _this.setState({
            focusedDate: prevDate
          });

          _this.props.onRequestInternalFocusDate(event, {
            date: prevDate,
            triggerCallback: true
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleKeyboardNavigateToNextWeek", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, _ref6) {
        var date = _ref6.date;

        var nextDate = _date2.default.addDays(date, 7);

        if (!_date2.default.isSameMonth(nextDate, date)) {
          _this.props.onChangeMonth(event, nextDate);
        } else {
          _this.setState({
            focusedDate: nextDate
          });

          _this.props.onRequestInternalFocusDate(event, {
            date: nextDate,
            triggerCallback: true
          });
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "renderWeeks", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var firstDayOfWeekOffset = _this.props.isIsoWeekday ? 1 : 0;

        var firstDayOfMonth = _date2.default.firstDayOfMonth(_this.props.initialDateForCalendarRender);

        var firstDayOfWeek;

        if (firstDayOfMonth.getDay() > firstDayOfWeekOffset) {
          var prevWeek = _date2.default.addWeeks(firstDayOfMonth, -1);

          firstDayOfWeek = _date2.default.nearestWeekDay(prevWeek, firstDayOfWeekOffset);
        } else {
          firstDayOfWeek = firstDayOfMonth;
        }

        var weeks = [];
        var done = false;
        var monthIndex = firstDayOfWeek.getMonth();
        var count = 0;

        while (!done) {
          weeks.push(_react2.default.createElement(_week2.default, {
            calendarHasFocus: _this.state.calendarHasFocus,
            dateDisabled: _this.props.dateDisabled,
            firstDayOfWeek: firstDayOfWeek,
            key: firstDayOfWeek.toString(),
            focusedDate: _this.state.focusedDate,
            initialDateForCalendarRender: _this.props.initialDateForCalendarRender,
            onCalendarBlur: _this.props.onCalendarBlur,
            onKeyboardNavigateToPreviousDay: _this.handleKeyboardNavigateToPreviousDay,
            onKeyboardNavigateToNextDay: _this.handleKeyboardNavigateToNextDay,
            onKeyboardNavigateToPreviousWeek: _this.handleKeyboardNavigateToPreviousWeek,
            onKeyboardNavigateToNextWeek: _this.handleKeyboardNavigateToNextWeek,
            onRequestClose: _this.handleRequestClose,
            onRequestInternalFocusDate: _this.props.onRequestInternalFocusDate,
            onSelectDate: _this.handleSelectDate,
            selectedDate: _this.props.selectedDate,
            selectedDateRef: _this.props.selectedDateRef,
            todayLabel: _this.props.todayLabel
          })); // create new weeks

          firstDayOfWeek = _date2.default.addWeeks(firstDayOfWeek, 1);
          done = count > 2 && monthIndex !== firstDayOfWeek.getMonth();
          count += 1;
          monthIndex = firstDayOfWeek.getMonth();
        }

        var extraWeeks = 0;

        while (weeks.length < 6) {
          extraWeeks += 1;
          weeks.push(_react2.default.createElement("tr", {
            key: "extra_".concat(extraWeeks),
            className: "week"
          }, _react2.default.createElement("td", {
            "aria-disabled": "true",
            "aria-selected": "false",
            className: "slds-disabled-text"
          }, _react2.default.createElement("span", {
            className: "slds-day "
          }, "\xA0"))));
        }

        return weeks;
      }
    }), _temp));
  }

  _createClass(DatepickerCalendar, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.setCalendarRenderSeedDate(prevProps);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var sunday = _react2.default.createElement("th", null, _react2.default.createElement("abbr", {
        title: this.props.weekDayLabels[0]
      }, this.props.abbreviatedWeekDayLabels[0]));

      return _react2.default.createElement("div", {
        className: "calendar"
      }, _react2.default.createElement("table", {
        className: "datepicker__month",
        role: "grid",
        "aria-labelledby": "".concat(this.props.id, "-month")
      }, _react2.default.createElement("thead", null, _react2.default.createElement("tr", null, this.props.isIsoWeekday ? null : sunday, _react2.default.createElement("th", {
        scope: "col"
      }, _react2.default.createElement("abbr", {
        title: this.props.weekDayLabels[1]
      }, this.props.abbreviatedWeekDayLabels[1])), _react2.default.createElement("th", {
        scope: "col"
      }, _react2.default.createElement("abbr", {
        title: this.props.weekDayLabels[2]
      }, this.props.abbreviatedWeekDayLabels[2])), _react2.default.createElement("th", {
        scope: "col"
      }, _react2.default.createElement("abbr", {
        title: this.props.weekDayLabels[3]
      }, this.props.abbreviatedWeekDayLabels[3])), _react2.default.createElement("th", {
        scope: "col"
      }, _react2.default.createElement("abbr", {
        title: this.props.weekDayLabels[4]
      }, this.props.abbreviatedWeekDayLabels[4])), _react2.default.createElement("th", {
        scope: "col"
      }, _react2.default.createElement("abbr", {
        title: this.props.weekDayLabels[5]
      }, this.props.abbreviatedWeekDayLabels[5])), _react2.default.createElement("th", {
        scope: "col"
      }, _react2.default.createElement("abbr", {
        title: this.props.weekDayLabels[6]
      }, this.props.abbreviatedWeekDayLabels[6])), this.props.isIsoWeekday && sunday)), _react2.default.createElement("tbody", null, this.renderWeeks(), _react2.default.createElement("tr", null, _react2.default.createElement("td", {
        colSpan: "7",
        role: "gridcell"
      }, _react2.default.createElement("a", {
        href: "javascript:void(0)" // eslint-disable-line no-script-url
        ,
        tabIndex: "0",
        className: "slds-show_inline-block slds-p-bottom_x-small",
        onClick: function onClick(event) {
          _this2.handleSelectDate(event, {
            date: new Date()
          });
        },
        onKeyDown: this.props.onLastFocusableNodeKeyDown,
        ref: this.props.todayRef
      }, this.props.todayLabel))))));
    }
  }]);

  return DatepickerCalendar;
}(_react2.default.Component);

Object.defineProperty(DatepickerCalendar, "displayName", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: 'SLDSDatepickerCalendar'
});
Object.defineProperty(DatepickerCalendar, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    /**
     * Three letter abbreviations of the days of the week, starting on Sunday.
     */
    abbreviatedWeekDayLabels: _propTypes2.default.array.isRequired,

    /**
     * dateDisabled() takes a date as input argument, returns true if given date should be disabled, otherwise returns false.
     */
    dateDisabled: _propTypes2.default.func,

    /**
     * HTML id for component
     */
    id: _propTypes2.default.string.isRequired,

    /**
     * Date used to create calendar that is displayed. This is typically the initial day focused when using the keyboard navigation. Focus will be set to this date if available.
     */
    initialDateForCalendarRender: _propTypes2.default.instanceOf(Date).isRequired,

    /**
     * Makes Monday the first day of the week
     */
    isIsoWeekday: _propTypes2.default.bool,

    /**
     * Triggered when the keyboard moves focus off the calendar.
     */
    onCalendarBlur: _propTypes2.default.func.isRequired,

    /**
     * Displayed calendar has changed or re-rendered
     */
    onChangeMonth: _propTypes2.default.func.isRequired,

    /**
     * Internal callback that will eventually trigger when the keyboard moves focus on the calendar. `{date: [Date object], formattedDate: [string]}`.
     */
    onRequestInternalFocusDate: _propTypes2.default.func,

    /**
     * Triggered when the calendar is cancelled.
     */
    onRequestClose: _propTypes2.default.func.isRequired,

    /**
     * Triggered when a date on the calendar is clicked.
     */
    onSelectDate: _propTypes2.default.func.isRequired,

    /**
     * Currently selected date. This should be present in the input field.
     */
    selectedDate: _propTypes2.default.instanceOf(Date),

    /**
     * Component reference / DOM node for selected day.
     */
    selectedDateRef: _propTypes2.default.func,

    /**
     * Label of shortcut to jump to today within the calendar. This is also used for assistive text on today's date.
     */
    todayLabel: _propTypes2.default.string.isRequired,

    /**
     * For keyboard navigation. Listens for key presses on the last focusable DOM Node, the "Today" link, so that dialog focus can be trapped.
     */
    onLastFocusableNodeKeyDown: _propTypes2.default.func,

    /**
     * Callback that passes in the DOM reference of the Today `a` DOM node within this component. Primary use is to allow `focus` to be called. You should still test if the node exists, since rendering is asynchronous. `buttonRef={(component) => { if(component) console.log(component); }}`
     */
    todayRef: _propTypes2.default.func,

    /**
     * Names of the seven days of the week, starting on Sunday.
     */
    weekDayLabels: _propTypes2.default.array.isRequired
  }
});
exports.default = DatepickerCalendar;