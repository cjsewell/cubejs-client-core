import 'core-js/modules/es.object.keys.js';
import 'core-js/modules/es.symbol.js';
import 'core-js/modules/es.array.filter.js';
import 'core-js/modules/es.object.get-own-property-descriptor.js';
import 'core-js/modules/es.array.for-each.js';
import 'core-js/modules/web.dom-collections.for-each.js';
import 'core-js/modules/es.object.get-own-property-descriptors.js';
import 'core-js/modules/es.object.define-properties.js';
import 'core-js/modules/es.object.define-property.js';
import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _typeof from '@babel/runtime/helpers/typeof';
import _classCallCheck from '@babel/runtime/helpers/classCallCheck';
import _createClass from '@babel/runtime/helpers/createClass';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import 'core-js/modules/es.object.to-string.js';
import 'core-js/modules/es.promise.js';
import 'core-js/modules/web.timers.js';
import 'core-js/modules/es.array.is-array.js';
import 'core-js/modules/es.array.map.js';
import { v4 } from 'uuid';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import 'core-js/modules/es.array.iterator.js';
import 'core-js/modules/es.map.js';
import 'core-js/modules/es.string.iterator.js';
import 'core-js/modules/web.dom-collections.iterator.js';
import 'core-js/modules/es.array.from.js';
import 'core-js/modules/es.array.includes.js';
import 'core-js/modules/es.string.includes.js';
import 'core-js/modules/es.object.values.js';
import 'core-js/modules/es.array.find.js';
import 'core-js/modules/es.array.concat.js';
import 'core-js/modules/es.regexp.exec.js';
import 'core-js/modules/es.string.split.js';
import 'core-js/modules/es.array.join.js';
import 'core-js/modules/es.date.to-string.js';
import 'core-js/modules/es.regexp.to-string.js';
import 'core-js/modules/es.string.match.js';
import 'core-js/modules/es.array.reduce.js';
import 'core-js/modules/es.number.is-nan.js';
import 'core-js/modules/es.number.constructor.js';
import 'core-js/modules/es.number.parse-float.js';
import 'core-js/modules/es.set.js';
import 'core-js/modules/es.array.index-of.js';
import 'core-js/modules/es.string.trim.js';
import dayjs from 'dayjs';
import en from 'dayjs/locale/en';
import { pipe, map, filter, reduce, minBy, maxBy, flatten, fromPairs, pluck, mergeDeepLeft, mergeAll, uniq, dropLast, clone, equals, groupBy, unnest as unnest$1, indexBy, prop } from 'ramda';
import 'core-js/modules/es.function.name.js';
import 'core-js/modules/es.array.sort.js';
import 'core-js/modules/web.url.js';
import fetch from 'cross-fetch';
import 'url-search-params-polyfill';
import 'core-js/modules/es.reflect.construct.js';
import _inherits from '@babel/runtime/helpers/inherits';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/getPrototypeOf';
import _wrapNativeSuper from '@babel/runtime/helpers/wrapNativeSuper';
import 'core-js/modules/es.object.entries.js';
import 'core-js/modules/es.array.every.js';
import 'core-js/modules/es.array.splice.js';

var _excluded$2 = ["x"],
    _excluded2 = ["key"],
    _excluded3 = ["title", "shortTitle"];

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
dayjs.locale(_objectSpread$3(_objectSpread$3({}, en), {}, {
  weekStart: 1
}));
var TIME_SERIES = {
  day: function day(range) {
    return range.by('d').map(function (d) {
      return d.format('YYYY-MM-DDT00:00:00.000');
    });
  },
  month: function month(range) {
    return range.snapTo('month').by('M').map(function (d) {
      return d.format('YYYY-MM-01T00:00:00.000');
    });
  },
  year: function year(range) {
    return range.snapTo('year').by('y').map(function (d) {
      return d.format('YYYY-01-01T00:00:00.000');
    });
  },
  hour: function hour(range) {
    return range.by('h').map(function (d) {
      return d.format('YYYY-MM-DDTHH:00:00.000');
    });
  },
  minute: function minute(range) {
    return range.by('m').map(function (d) {
      return d.format('YYYY-MM-DDTHH:mm:00.000');
    });
  },
  second: function second(range) {
    return range.by('s').map(function (d) {
      return d.format('YYYY-MM-DDTHH:mm:ss.000');
    });
  },
  week: function week(range) {
    return range.snapTo('week').by('w').map(function (d) {
      return d.startOf('week').format('YYYY-MM-DDT00:00:00.000');
    });
  }
};
var DateRegex = /^\d\d\d\d-\d\d-\d\d$/;
var LocalDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z?$/;

var groupByToPairs = function groupByToPairs(keyFn) {
  var acc = new Map();
  return function (data) {
    data.forEach(function (row) {
      var key = keyFn(row);

      if (!acc.has(key)) {
        acc.set(key, []);
      }

      acc.get(key).push(row);
    });
    return Array.from(acc.entries());
  };
};

var unnest = function unnest(arr) {
  var res = [];
  arr.forEach(function (subArr) {
    subArr.forEach(function (element) {
      return res.push(element);
    });
  });
  return res;
};

var dayRange = function dayRange(from, to) {
  return {
    by: function by(value) {
      var results = [];
      var start = dayjs(from);
      var end = dayjs(to);

      while (start.isBefore(end) || start.isSame(end)) {
        results.push(start);
        start = start.add(1, value);
      }

      return results;
    },
    snapTo: function snapTo(value) {
      return dayRange(dayjs(from).startOf(value), dayjs(to).endOf(value));
    },
    start: dayjs(from),
    end: dayjs(to)
  };
};
var QUERY_TYPE = {
  REGULAR_QUERY: 'regularQuery',
  COMPARE_DATE_RANGE_QUERY: 'compareDateRangeQuery',
  BLENDING_QUERY: 'blendingQuery'
};

var ResultSet = /*#__PURE__*/function () {
  function ResultSet(loadResponse) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ResultSet);

    this.loadResponse = loadResponse;

    if (this.loadResponse.queryType != null) {
      this.queryType = loadResponse.queryType;
      this.loadResponses = loadResponse.results;
    } else {
      this.queryType = QUERY_TYPE.REGULAR_QUERY;
      this.loadResponse.pivotQuery = _objectSpread$3(_objectSpread$3({}, loadResponse.query), {}, {
        queryType: this.queryType
      });
      this.loadResponses = [loadResponse];
    }

    if (!Object.values(QUERY_TYPE).includes(this.queryType)) {
      throw new Error('Unknown query type');
    }

    this.parseDateMeasures = options.parseDateMeasures;
    this.options = options;
    this.backwardCompatibleData = [];
  }

  _createClass(ResultSet, [{
    key: "drillDown",
    value: function drillDown(drillDownLocator, pivotConfig) {
      if (this.queryType === QUERY_TYPE.COMPARE_DATE_RANGE_QUERY) {
        throw new Error('compareDateRange drillDown query is not currently supported');
      }

      if (this.queryType === QUERY_TYPE.BLENDING_QUERY) {
        throw new Error('Data blending drillDown query is not currently supported');
      }

      var _drillDownLocator$xVa = drillDownLocator.xValues,
          xValues = _drillDownLocator$xVa === void 0 ? [] : _drillDownLocator$xVa,
          _drillDownLocator$yVa = drillDownLocator.yValues,
          yValues = _drillDownLocator$yVa === void 0 ? [] : _drillDownLocator$yVa;
      var normalizedPivotConfig = this.normalizePivotConfig(pivotConfig);
      var values = [];
      normalizedPivotConfig.x.forEach(function (member, currentIndex) {
        return values.push([member, xValues[currentIndex]]);
      });
      normalizedPivotConfig.y.forEach(function (member, currentIndex) {
        return values.push([member, yValues[currentIndex]]);
      });

      var _this$query = this.query(),
          _this$query$filters = _this$query.filters,
          parentFilters = _this$query$filters === void 0 ? [] : _this$query$filters,
          _this$query$segments = _this$query.segments,
          segments = _this$query$segments === void 0 ? [] : _this$query$segments;

      var measures = this.loadResponses[0].annotation.measures;

      var _ref = values.find(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            member = _ref4[0];

        return member === 'measures';
      }) || [],
          _ref2 = _slicedToArray(_ref, 2),
          measureName = _ref2[1];

      if (measureName === undefined) {
        var _Object$keys = Object.keys(measures);

        var _Object$keys2 = _slicedToArray(_Object$keys, 1);

        measureName = _Object$keys2[0];
      }

      if (!(measures[measureName] && measures[measureName].drillMembers || []).length) {
        return null;
      }

      var filters = [{
        member: measureName,
        operator: 'measureFilter'
      }].concat(_toConsumableArray(parentFilters));
      var timeDimensions = [];
      values.filter(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 1),
            member = _ref6[0];

        return member !== 'measures';
      }).forEach(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            member = _ref8[0],
            value = _ref8[1];

        var _member$split = member.split('.'),
            _member$split2 = _slicedToArray(_member$split, 3),
            cubeName = _member$split2[0],
            dimension = _member$split2[1],
            granularity = _member$split2[2];

        if (granularity !== undefined) {
          var range = dayRange(value, value).snapTo(granularity);
          timeDimensions.push({
            dimension: [cubeName, dimension].join('.'),
            dateRange: [range.start, range.end].map(function (dt) {
              return dt.format('YYYY-MM-DDTHH:mm:ss.SSS');
            })
          });
        } else if (value == null) {
          filters.push({
            member: member,
            operator: 'notSet'
          });
        } else {
          filters.push({
            member: member,
            operator: 'equals',
            values: [value.toString()]
          });
        }
      });
      var query = this.loadResponses[0].query;

      if (timeDimensions.length === 0 && query.timeDimensions.length > 0 && query.timeDimensions[0].granularity == null) {
        timeDimensions.push(query.timeDimensions[0]);
      }

      return _objectSpread$3(_objectSpread$3(_objectSpread$3({}, measures[measureName].drillMembersGrouped), {}, {
        filters: filters
      }, segments.length > 0 ? {
        segments: segments
      } : {}), {}, {
        timeDimensions: timeDimensions,
        segments: segments,
        timezone: query.timezone
      });
    }
  }, {
    key: "series",
    value: function series(pivotConfig) {
      var _this = this;

      return this.seriesNames(pivotConfig).map(function (_ref9) {
        var title = _ref9.title,
            key = _ref9.key;
        return {
          title: title,
          key: key,
          series: _this.chartPivot(pivotConfig).map(function (_ref10) {
            var x = _ref10.x,
                obj = _objectWithoutProperties(_ref10, _excluded$2);

            return {
              value: obj[key],
              x: x
            };
          })
        };
      });
    }
  }, {
    key: "axisValues",
    value: function axisValues(axis) {
      var resultIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var query = this.loadResponses[resultIndex].query;
      return function (row) {
        var value = function value(measure) {
          return axis.filter(function (d) {
            return d !== 'measures';
          }).map(function (d) {
            return row[d] != null ? row[d] : null;
          }).concat(measure ? [measure] : []);
        };

        if (axis.find(function (d) {
          return d === 'measures';
        }) && (query.measures || []).length) {
          return query.measures.map(value);
        }

        return [value()];
      };
    }
  }, {
    key: "axisValuesString",
    value: function axisValuesString(axisValues, delimiter) {
      var formatValue = function formatValue(v) {
        if (v == null) {
          return '???';
        } else if (v === '') {
          return '[Empty string]';
        } else {
          return v;
        }
      };

      return axisValues.map(formatValue).join(delimiter || ', ');
    }
  }, {
    key: "normalizePivotConfig",
    value: function normalizePivotConfig(pivotConfig) {
      return ResultSet.getNormalizedPivotConfig(this.loadResponse.pivotQuery, pivotConfig);
    }
  }, {
    key: "timeSeries",
    value: function timeSeries(timeDimension) {
      if (!timeDimension.granularity) {
        return null;
      }

      var dateRange = timeDimension.dateRange;

      if (!dateRange) {
        var member = ResultSet.timeDimensionMember(timeDimension);
        var dates = pipe(map(function (row) {
          return row[member] && dayjs(row[member]);
        }), filter(Boolean))(this.timeDimensionBackwardCompatibleData());
        dateRange = dates.length && [reduce(minBy(function (d) {
          return d.toDate();
        }), dates[0], dates), reduce(maxBy(function (d) {
          return d.toDate();
        }), dates[0], dates)] || null;
      }

      if (!dateRange) {
        return null;
      }

      var padToDay = timeDimension.dateRange ? timeDimension.dateRange.find(function (d) {
        return d.match(DateRegex);
      }) : !['hour', 'minute', 'second'].includes(timeDimension.granularity);

      var _dateRange = dateRange,
          _dateRange2 = _slicedToArray(_dateRange, 2),
          start = _dateRange2[0],
          end = _dateRange2[1];

      var range = dayRange(start, end);

      if (!TIME_SERIES[timeDimension.granularity]) {
        throw new Error("Unsupported time granularity: ".concat(timeDimension.granularity));
      }

      return TIME_SERIES[timeDimension.granularity](padToDay ? range.snapTo('d') : range);
    }
  }, {
    key: "pivot",
    value: function pivot(pivotConfig) {
      var _this2 = this;

      pivotConfig = this.normalizePivotConfig(pivotConfig);
      var query = this.loadResponse.pivotQuery;

      var pivotImpl = function pivotImpl() {
        var resultIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var groupByXAxis = groupByToPairs(function (_ref11) {
          var xValues = _ref11.xValues;
          return _this2.axisValuesString(xValues);
        });

        var measureValue = function measureValue(row, measure) {
          return row[measure];
        };

        if (pivotConfig.fillMissingDates && pivotConfig.x.length === 1 && equals(pivotConfig.x, (query.timeDimensions || []).filter(function (td) {
          return Boolean(td.granularity);
        }).map(function (td) {
          return ResultSet.timeDimensionMember(td);
        }))) {
          var series = _this2.loadResponses.map(function (loadResponse) {
            return _this2.timeSeries(loadResponse.query.timeDimensions[0]);
          });

          if (series[0]) {
            groupByXAxis = function groupByXAxis(rows) {
              var byXValues = groupBy(function (_ref12) {
                var xValues = _ref12.xValues;
                return xValues[0];
              }, rows);
              return series[resultIndex].map(function (d) {
                return [d, byXValues[d] || [{
                  xValues: [d],
                  row: {}
                }]];
              });
            };

            measureValue = function measureValue(row, measure) {
              return row[measure] || 0;
            };
          }
        }

        var xGrouped = pipe(map(function (row) {
          return _this2.axisValues(pivotConfig.x, resultIndex)(row).map(function (xValues) {
            return {
              xValues: xValues,
              row: row
            };
          });
        }), unnest, groupByXAxis)(_this2.timeDimensionBackwardCompatibleData(resultIndex));
        var yValuesMap = {};
        xGrouped.forEach(function (_ref13) {
          var _ref14 = _slicedToArray(_ref13, 2),
              rows = _ref14[1];

          rows.forEach(function (_ref15) {
            var row = _ref15.row;

            _this2.axisValues(pivotConfig.y, resultIndex)(row).forEach(function (values) {
              if (Object.keys(row).length > 0) {
                yValuesMap[values.join()] = values;
              }
            });
          });
        });
        var allYValues = Object.values(yValuesMap);
        var measureOnX = Boolean(pivotConfig.x.find(function (d) {
          return d === 'measures';
        }));
        return xGrouped.map(function (_ref16) {
          var _ref17 = _slicedToArray(_ref16, 2),
              rows = _ref17[1];

          var xValues = rows[0].xValues;
          var yGrouped = {};
          rows.forEach(function (_ref18) {
            var row = _ref18.row;

            var arr = _this2.axisValues(pivotConfig.y, resultIndex)(row).map(function (yValues) {
              return {
                yValues: yValues,
                row: row
              };
            });

            arr.forEach(function (res) {
              yGrouped[_this2.axisValuesString(res.yValues)] = res;
            });
          });
          return {
            xValues: xValues,
            yValuesArray: unnest(allYValues.map(function (yValues) {
              var measure = measureOnX ? ResultSet.measureFromAxis(xValues) : ResultSet.measureFromAxis(yValues);
              return [[yValues, measureValue((yGrouped[_this2.axisValuesString(yValues)] || {
                row: {}
              }).row, measure)]];
            }))
          };
        });
      };

      var pivots = this.loadResponses.length > 1 ? this.loadResponses.map(function (_, index) {
        return pivotImpl(index);
      }) : [];
      return pivots.length ? this.mergePivots(pivots, pivotConfig.joinDateRange) : pivotImpl();
    }
  }, {
    key: "mergePivots",
    value: function mergePivots(pivots, joinDateRange) {
      var minLengthPivot = pivots.reduce(function (memo, current) {
        return memo != null && current.length >= memo.length ? memo : current;
      }, null);
      return minLengthPivot.map(function (_, index) {
        var xValues = joinDateRange ? [pivots.map(function (pivot) {
          return pivot[index] && pivot[index].xValues || [];
        }).join(', ')] : minLengthPivot[index].xValues;
        return {
          xValues: xValues,
          yValuesArray: unnest(pivots.map(function (pivot) {
            return pivot[index].yValuesArray;
          }))
        };
      });
    }
  }, {
    key: "pivotedRows",
    value: function pivotedRows(pivotConfig) {
      // TODO
      return this.chartPivot(pivotConfig);
    }
  }, {
    key: "chartPivot",
    value: function chartPivot(pivotConfig) {
      var _this3 = this;

      var validate = function validate(value) {
        if (_this3.parseDateMeasures && LocalDateRegex.test(value)) {
          return new Date(value);
        } else if (!Number.isNaN(Number.parseFloat(value))) {
          return Number.parseFloat(value);
        }

        return value;
      };

      var duplicateMeasures = new Set();

      if (this.queryType === QUERY_TYPE.BLENDING_QUERY) {
        var allMeasures = flatten(this.loadResponses.map(function (_ref19) {
          var query = _ref19.query;
          return query.measures;
        }));
        allMeasures.filter(function (e, i, a) {
          return a.indexOf(e) !== i;
        }).forEach(function (m) {
          return duplicateMeasures.add(m);
        });
      }

      var aliasSeries = function aliasSeries(yValues, i) {
        // manual alias
        if (pivotConfig && pivotConfig.aliasSeries && pivotConfig.aliasSeries[i]) {
          return [pivotConfig.aliasSeries[i]].concat(_toConsumableArray(yValues));
        } else if (duplicateMeasures.has(yValues[0])) {
          return [i].concat(_toConsumableArray(yValues));
        }

        return [yValues];
      };

      return this.pivot(pivotConfig).map(function (_ref20) {
        var xValues = _ref20.xValues,
            yValuesArray = _ref20.yValuesArray;
        var yValuesMap = {};
        yValuesArray.forEach(function (_ref21, i) {
          var _ref22 = _slicedToArray(_ref21, 2),
              yValues = _ref22[0],
              m = _ref22[1];

          yValuesMap[_this3.axisValuesString(aliasSeries(yValues, i), ',')] = m && validate(m);
        });
        return _objectSpread$3({
          x: _this3.axisValuesString(xValues, ','),
          xValues: xValues
        }, yValuesMap);
      });
    }
  }, {
    key: "tablePivot",
    value: function tablePivot(pivotConfig) {
      var normalizedPivotConfig = this.normalizePivotConfig(pivotConfig || {});
      var isMeasuresPresent = normalizedPivotConfig.x.concat(normalizedPivotConfig.y).includes('measures');
      return this.pivot(normalizedPivotConfig).map(function (_ref23) {
        var xValues = _ref23.xValues,
            yValuesArray = _ref23.yValuesArray;
        return fromPairs(normalizedPivotConfig.x.map(function (key, index) {
          return [key, xValues[index]];
        }).concat(isMeasuresPresent ? yValuesArray.map(function (_ref24) {
          var _ref25 = _slicedToArray(_ref24, 2),
              yValues = _ref25[0],
              measure = _ref25[1];

          return [yValues.length ? yValues.join() : 'value', measure];
        }) : []));
      });
    }
  }, {
    key: "tableColumns",
    value: function tableColumns(pivotConfig) {
      var normalizedPivotConfig = this.normalizePivotConfig(pivotConfig || {});
      var annotations = pipe(pluck('annotation'), reduce(mergeDeepLeft(), {}))(this.loadResponses);
      var flatMeta = Object.values(annotations).reduce(function (a, b) {
        return _objectSpread$3(_objectSpread$3({}, a), b);
      }, {});
      var schema = {};

      var extractFields = function extractFields(key) {
        var _ref26 = flatMeta[key] || {},
            title = _ref26.title,
            shortTitle = _ref26.shortTitle,
            type = _ref26.type,
            format = _ref26.format,
            meta = _ref26.meta;

        return {
          key: key,
          title: title,
          shortTitle: shortTitle,
          type: type,
          format: format,
          meta: meta
        };
      };

      var pivot = this.pivot(normalizedPivotConfig);
      (pivot[0] && pivot[0].yValuesArray || []).forEach(function (_ref27) {
        var _ref28 = _slicedToArray(_ref27, 1),
            yValues = _ref28[0];

        if (yValues.length > 0) {
          var currentItem = schema;
          yValues.forEach(function (value, index) {
            currentItem[value] = {
              key: value,
              memberId: normalizedPivotConfig.y[index] === 'measures' ? value : normalizedPivotConfig.y[index],
              children: currentItem[value] && currentItem[value].children || {}
            };
            currentItem = currentItem[value].children;
          });
        }
      });

      var toColumns = function toColumns() {
        var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        if (Object.keys(item).length === 0) {
          return [];
        }

        return Object.values(item).map(function (_ref29) {
          var key = _ref29.key,
              currentItem = _objectWithoutProperties(_ref29, _excluded2);

          var children = toColumns(currentItem.children, [].concat(_toConsumableArray(path), [key]));

          var _extractFields = extractFields(currentItem.memberId),
              title = _extractFields.title,
              shortTitle = _extractFields.shortTitle,
              fields = _objectWithoutProperties(_extractFields, _excluded3);

          var dimensionValue = key !== currentItem.memberId || title == null ? key : '';

          if (!children.length) {
            return _objectSpread$3(_objectSpread$3({}, fields), {}, {
              key: key,
              dataIndex: [].concat(_toConsumableArray(path), [key]).join(),
              title: [title, dimensionValue].join(' ').trim(),
              shortTitle: dimensionValue || shortTitle
            });
          }

          return _objectSpread$3(_objectSpread$3({}, fields), {}, {
            key: key,
            title: [title, dimensionValue].join(' ').trim(),
            shortTitle: dimensionValue || shortTitle,
            children: children
          });
        });
      };

      var otherColumns = [];

      if (!pivot.length && normalizedPivotConfig.y.includes('measures')) {
        otherColumns = (this.loadResponses[0].query.measures || []).map(function (key) {
          return _objectSpread$3(_objectSpread$3({}, extractFields(key)), {}, {
            dataIndex: key
          });
        });
      } // Syntatic column to display the measure value


      if (!normalizedPivotConfig.y.length && normalizedPivotConfig.x.includes('measures')) {
        otherColumns.push({
          key: 'value',
          dataIndex: 'value',
          title: 'Value',
          shortTitle: 'Value',
          type: 'string'
        });
      }

      return normalizedPivotConfig.x.map(function (key) {
        if (key === 'measures') {
          return {
            key: 'measures',
            dataIndex: 'measures',
            title: 'Measures',
            shortTitle: 'Measures',
            type: 'string'
          };
        }

        return _objectSpread$3(_objectSpread$3({}, extractFields(key)), {}, {
          dataIndex: key
        });
      }).concat(toColumns(schema)).concat(otherColumns);
    }
  }, {
    key: "totalRow",
    value: function totalRow(pivotConfig) {
      return this.chartPivot(pivotConfig)[0];
    }
  }, {
    key: "categories",
    value: function categories(pivotConfig) {
      // TODO
      return this.chartPivot(pivotConfig);
    }
  }, {
    key: "seriesNames",
    value: function seriesNames(pivotConfig) {
      var _this4 = this;

      pivotConfig = this.normalizePivotConfig(pivotConfig);
      var measures = pipe(pluck('annotation'), pluck('measures'), mergeAll)(this.loadResponses);
      var seriesNames = unnest(this.loadResponses.map(function (_, index) {
        return pipe(map(_this4.axisValues(pivotConfig.y, index)), unnest, uniq)(_this4.timeDimensionBackwardCompatibleData(index));
      }));
      var duplicateMeasures = new Set();

      if (this.queryType === QUERY_TYPE.BLENDING_QUERY) {
        var allMeasures = flatten(this.loadResponses.map(function (_ref30) {
          var query = _ref30.query;
          return query.measures;
        }));
        allMeasures.filter(function (e, i, a) {
          return a.indexOf(e) !== i;
        }).forEach(function (m) {
          return duplicateMeasures.add(m);
        });
      }

      var aliasSeries = function aliasSeries(yValues, i) {
        if (pivotConfig && pivotConfig.aliasSeries && pivotConfig.aliasSeries[i]) {
          return [pivotConfig.aliasSeries[i]].concat(_toConsumableArray(yValues));
        } else if (duplicateMeasures.has(yValues[0])) {
          return [i].concat(_toConsumableArray(yValues));
        }

        return yValues;
      };

      return seriesNames.map(function (axisValues, i) {
        var aliasedAxis = aliasSeries(axisValues, i);
        return {
          title: _this4.axisValuesString(pivotConfig.y.find(function (d) {
            return d === 'measures';
          }) ? dropLast(1, aliasedAxis).concat(measures[ResultSet.measureFromAxis(axisValues)].title) : aliasedAxis, ', '),
          key: _this4.axisValuesString(aliasedAxis, ','),
          yValues: axisValues
        };
      });
    }
  }, {
    key: "query",
    value: function query() {
      if (this.queryType !== QUERY_TYPE.REGULAR_QUERY) {
        throw new Error("Method is not supported for a '".concat(this.queryType, "' query type. Please use decompose"));
      }

      return this.loadResponses[0].query;
    }
  }, {
    key: "pivotQuery",
    value: function pivotQuery() {
      return this.loadResponse.pivotQuery || null;
    }
  }, {
    key: "rawData",
    value: function rawData() {
      if (this.queryType !== QUERY_TYPE.REGULAR_QUERY) {
        throw new Error("Method is not supported for a '".concat(this.queryType, "' query type. Please use decompose"));
      }

      return this.loadResponses[0].data;
    }
  }, {
    key: "annotation",
    value: function annotation() {
      if (this.queryType !== QUERY_TYPE.REGULAR_QUERY) {
        throw new Error("Method is not supported for a '".concat(this.queryType, "' query type. Please use decompose"));
      }

      return this.loadResponses[0].annotation;
    }
  }, {
    key: "timeDimensionBackwardCompatibleData",
    value: function timeDimensionBackwardCompatibleData() {
      var resultIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (!this.backwardCompatibleData[resultIndex]) {
        var _this$loadResponses$r = this.loadResponses[resultIndex],
            data = _this$loadResponses$r.data,
            query = _this$loadResponses$r.query;
        var timeDimensions = (query.timeDimensions || []).filter(function (td) {
          return Boolean(td.granularity);
        });
        this.backwardCompatibleData[resultIndex] = data.map(function (row) {
          return _objectSpread$3(_objectSpread$3({}, row), fromPairs(Object.keys(row).filter(function (field) {
            return timeDimensions.find(function (d) {
              return d.dimension === field;
            }) && !row[ResultSet.timeDimensionMember(timeDimensions.find(function (d) {
              return d.dimension === field;
            }))];
          }).map(function (field) {
            return [ResultSet.timeDimensionMember(timeDimensions.find(function (d) {
              return d.dimension === field;
            })), row[field]];
          })));
        });
      }

      return this.backwardCompatibleData[resultIndex];
    }
  }, {
    key: "decompose",
    value: function decompose() {
      var _this5 = this;

      return this.loadResponses.map(function (result) {
        return new ResultSet({
          queryType: QUERY_TYPE.REGULAR_QUERY,
          pivotQuery: _objectSpread$3(_objectSpread$3({}, result.query), {}, {
            queryType: QUERY_TYPE.REGULAR_QUERY
          }),
          results: [result]
        }, _this5.options);
      });
    }
  }, {
    key: "serialize",
    value: function serialize() {
      return {
        loadResponse: clone(this.loadResponse)
      };
    }
  }], [{
    key: "measureFromAxis",
    value: function measureFromAxis(axisValues) {
      return axisValues[axisValues.length - 1];
    }
  }, {
    key: "timeDimensionMember",
    value: function timeDimensionMember(td) {
      return "".concat(td.dimension, ".").concat(td.granularity);
    }
  }, {
    key: "deserialize",
    value: function deserialize(data) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new ResultSet(data.loadResponse, options);
    }
  }, {
    key: "getNormalizedPivotConfig",
    value: function getNormalizedPivotConfig() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var pivotConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var defaultPivotConfig = {
        x: [],
        y: [],
        fillMissingDates: true,
        joinDateRange: false
      };
      var _query$measures = query.measures,
          measures = _query$measures === void 0 ? [] : _query$measures,
          _query$dimensions = query.dimensions,
          dimensions = _query$dimensions === void 0 ? [] : _query$dimensions;
      var timeDimensions = (query.timeDimensions || []).filter(function (td) {
        return !!td.granularity;
      });
      pivotConfig = pivotConfig || (timeDimensions.length ? {
        x: timeDimensions.map(function (td) {
          return ResultSet.timeDimensionMember(td);
        }),
        y: dimensions
      } : {
        x: dimensions,
        y: []
      });
      pivotConfig = mergeDeepLeft(pivotConfig, defaultPivotConfig);

      var substituteTimeDimensionMembers = function substituteTimeDimensionMembers(axis) {
        return axis.map(function (subDim) {
          return timeDimensions.find(function (td) {
            return td.dimension === subDim;
          }) && !dimensions.find(function (d) {
            return d === subDim;
          }) ? ResultSet.timeDimensionMember(query.timeDimensions.find(function (td) {
            return td.dimension === subDim;
          })) : subDim;
        });
      };

      pivotConfig.x = substituteTimeDimensionMembers(pivotConfig.x);
      pivotConfig.y = substituteTimeDimensionMembers(pivotConfig.y);
      var allIncludedDimensions = pivotConfig.x.concat(pivotConfig.y);
      var allDimensions = timeDimensions.map(function (td) {
        return ResultSet.timeDimensionMember(td);
      }).concat(dimensions);

      var dimensionFilter = function dimensionFilter(key) {
        return allDimensions.includes(key) || key === 'measures';
      };

      pivotConfig.x = pivotConfig.x.concat(allDimensions.filter(function (d) {
        return !allIncludedDimensions.includes(d) && d !== 'compareDateRange';
      })).filter(dimensionFilter);
      pivotConfig.y = pivotConfig.y.filter(dimensionFilter);

      if (!pivotConfig.x.concat(pivotConfig.y).find(function (d) {
        return d === 'measures';
      })) {
        pivotConfig.y.push('measures');
      }

      if (dimensions.includes('compareDateRange') && !pivotConfig.y.concat(pivotConfig.x).includes('compareDateRange')) {
        pivotConfig.y.unshift('compareDateRange');
      }

      if (!measures.length) {
        pivotConfig.x = pivotConfig.x.filter(function (d) {
          return d !== 'measures';
        });
        pivotConfig.y = pivotConfig.y.filter(function (d) {
          return d !== 'measures';
        });
      }

      return pivotConfig;
    }
  }]);

  return ResultSet;
}();

var SqlQuery = /*#__PURE__*/function () {
  function SqlQuery(sqlQuery) {
    _classCallCheck(this, SqlQuery);

    this.sqlQuery = sqlQuery;
  }

  _createClass(SqlQuery, [{
    key: "rawQuery",
    value: function rawQuery() {
      return this.sqlQuery.sql;
    }
  }, {
    key: "sql",
    value: function sql() {
      return this.rawQuery().sql[0];
    }
  }]);

  return SqlQuery;
}();

var memberMap = function memberMap(memberArray) {
  return fromPairs(memberArray.map(function (m) {
    return [m.name, m];
  }));
};

var operators = {
  string: [{
    name: 'contains',
    title: 'contains'
  }, {
    name: 'notContains',
    title: 'does not contain'
  }, {
    name: 'equals',
    title: 'equals'
  }, {
    name: 'notEquals',
    title: 'does not equal'
  }, {
    name: 'set',
    title: 'is set'
  }, {
    name: 'notSet',
    title: 'is not set'
  }],
  number: [{
    name: 'equals',
    title: 'equals'
  }, {
    name: 'notEquals',
    title: 'does not equal'
  }, {
    name: 'set',
    title: 'is set'
  }, {
    name: 'notSet',
    title: 'is not set'
  }, {
    name: 'gt',
    title: '>'
  }, {
    name: 'gte',
    title: '>='
  }, {
    name: 'lt',
    title: '<'
  }, {
    name: 'lte',
    title: '<='
  }],
  time: [{
    name: 'equals',
    title: 'equals'
  }, {
    name: 'notEquals',
    title: 'does not equal'
  }, {
    name: 'inDateRange',
    title: 'in date range'
  }, {
    name: 'notInDateRange',
    title: 'not in date range'
  }, {
    name: 'afterDate',
    title: 'after date'
  }, {
    name: 'beforeDate',
    title: 'before date'
  }]
};
/**
 * Contains information about available cubes and it's members.
 */

var Meta = /*#__PURE__*/function () {
  function Meta(metaResponse) {
    _classCallCheck(this, Meta);

    this.meta = metaResponse;
    var cubes = this.meta.cubes;
    this.cubes = cubes;
    this.cubesMap = fromPairs(cubes.map(function (c) {
      return [c.name, {
        measures: memberMap(c.measures),
        dimensions: memberMap(c.dimensions),
        segments: memberMap(c.segments)
      }];
    }));
  }

  _createClass(Meta, [{
    key: "membersForQuery",
    value: function membersForQuery(query, memberType) {
      return unnest$1(this.cubes.map(function (c) {
        return c[memberType];
      })).sort(function (a, b) {
        return a.title > b.title ? 1 : -1;
      });
    }
  }, {
    key: "membersGroupedByCube",
    value: function membersGroupedByCube() {
      var memberKeys = ['measures', 'dimensions', 'segments', 'timeDimensions'];
      return this.cubes.reduce(function (memo, cube) {
        memberKeys.forEach(function (key) {
          var members = cube[key];

          if (key === 'timeDimensions') {
            members = cube.dimensions.filter(function (m) {
              return m.type === 'time';
            });
          } else if (key === 'dimensions') {
            members = cube.dimensions.filter(function (m) {
              return m.type !== 'time';
            });
          }

          memo[key] = [].concat(_toConsumableArray(memo[key]), [{
            cubeName: cube.name,
            cubeTitle: cube.title,
            members: members
          }]);
        });
        return memo;
      }, {
        measures: [],
        dimensions: [],
        segments: [],
        timeDimensions: []
      });
    }
  }, {
    key: "resolveMember",
    value: function resolveMember(memberName, memberType) {
      var _this = this;

      var _memberName$split = memberName.split('.'),
          _memberName$split2 = _slicedToArray(_memberName$split, 1),
          cube = _memberName$split2[0];

      if (!this.cubesMap[cube]) {
        return {
          title: memberName,
          error: "Cube not found ".concat(cube, " for path '").concat(memberName, "'")
        };
      }

      var memberTypes = Array.isArray(memberType) ? memberType : [memberType];
      var member = memberTypes.map(function (type) {
        return _this.cubesMap[cube][type] && _this.cubesMap[cube][type][memberName];
      }).find(function (m) {
        return m;
      });

      if (!member) {
        return {
          title: memberName,
          error: "Path not found '".concat(memberName, "'")
        };
      }

      return member;
    }
  }, {
    key: "defaultTimeDimensionNameFor",
    value: function defaultTimeDimensionNameFor(memberName) {
      var _this2 = this;

      var _memberName$split3 = memberName.split('.'),
          _memberName$split4 = _slicedToArray(_memberName$split3, 1),
          cube = _memberName$split4[0];

      if (!this.cubesMap[cube]) {
        return null;
      }

      return Object.keys(this.cubesMap[cube].dimensions || {}).find(function (d) {
        return _this2.cubesMap[cube].dimensions[d].type === 'time';
      });
    }
  }, {
    key: "filterOperatorsForMember",
    value: function filterOperatorsForMember(memberName, memberType) {
      var member = this.resolveMember(memberName, memberType);
      return operators[member.type] || operators.string;
    }
  }]);

  return Meta;
}();

var ProgressResult = /*#__PURE__*/function () {
  function ProgressResult(progressResponse) {
    _classCallCheck(this, ProgressResult);

    this.progressResponse = progressResponse;
  }

  _createClass(ProgressResult, [{
    key: "stage",
    value: function stage() {
      return this.progressResponse.stage;
    }
  }, {
    key: "timeElapsed",
    value: function timeElapsed() {
      return this.progressResponse.timeElapsed;
    }
  }]);

  return ProgressResult;
}();

var _excluded$1 = ["baseRequestId"];

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var HttpTransport = /*#__PURE__*/function () {
  function HttpTransport(_ref) {
    var authorization = _ref.authorization,
        apiUrl = _ref.apiUrl,
        method = _ref.method,
        _ref$headers = _ref.headers,
        headers = _ref$headers === void 0 ? {} : _ref$headers,
        credentials = _ref.credentials;

    _classCallCheck(this, HttpTransport);

    this.authorization = authorization;
    this.apiUrl = apiUrl;
    this.method = method;
    this.headers = headers;
    this.credentials = credentials;
  }

  _createClass(HttpTransport, [{
    key: "request",
    value: function request(method, _ref2) {
      var _this = this;

      var baseRequestId = _ref2.baseRequestId,
          params = _objectWithoutProperties(_ref2, _excluded$1);

      var spanCounter = 1;
      var searchParams = new URLSearchParams(params && Object.keys(params).map(function (k) {
        return _defineProperty({}, k, _typeof(params[k]) === 'object' ? JSON.stringify(params[k]) : params[k]);
      }).reduce(function (a, b) {
        return _objectSpread$2(_objectSpread$2({}, a), b);
      }, {}));
      var url = "".concat(this.apiUrl, "/").concat(method).concat(searchParams.toString().length ? "?".concat(searchParams) : '');
      var requestMethod = this.method || (url.length < 2000 ? 'GET' : 'POST');

      if (requestMethod === 'POST') {
        url = "".concat(this.apiUrl, "/").concat(method);
        this.headers['Content-Type'] = 'application/json';
      } // Currently, all methods make GET requests. If a method makes a request with a body payload,
      // remember to add {'Content-Type': 'application/json'} to the header.


      var runRequest = function runRequest() {
        return fetch(url, {
          method: requestMethod,
          headers: _objectSpread$2({
            Authorization: _this.authorization,
            'x-request-id': baseRequestId && "".concat(baseRequestId, "-span-").concat(spanCounter++)
          }, _this.headers),
          credentials: _this.credentials,
          body: requestMethod === 'POST' ? JSON.stringify(params) : null
        });
      };

      return {
        subscribe: function subscribe(callback) {
          var _this2 = this;

          return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
            var result;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return runRequest();

                  case 2:
                    result = _context.sent;
                    return _context.abrupt("return", callback(result, function () {
                      return _this2.subscribe(callback);
                    }));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }))();
        }
      };
    }
  }]);

  return HttpTransport;
}();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var RequestError = /*#__PURE__*/function (_Error) {
  _inherits(RequestError, _Error);

  var _super = _createSuper(RequestError);

  function RequestError(message, response) {
    var _this;

    _classCallCheck(this, RequestError);

    _this = _super.call(this, message);
    _this.response = response;
    return _this;
  }

  return RequestError;
}( /*#__PURE__*/_wrapNativeSuper(Error));

var _excluded = ["query"];

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var DEFAULT_GRANULARITY = 'day';
var GRANULARITIES = [{
  name: undefined,
  title: 'w/o grouping'
}, {
  name: 'second',
  title: 'Second'
}, {
  name: 'minute',
  title: 'Minute'
}, {
  name: 'hour',
  title: 'Hour'
}, {
  name: 'day',
  title: 'Day'
}, {
  name: 'week',
  title: 'Week'
}, {
  name: 'month',
  title: 'Month'
}, {
  name: 'year',
  title: 'Year'
}];
function areQueriesEqual() {
  var query1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var query2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return equals(Object.entries(query1 && query1.order || {}), Object.entries(query2 && query2.order || {})) && equals(query1, query2);
}
function defaultOrder(query) {
  var granularity = (query.timeDimensions || []).find(function (d) {
    return d.granularity;
  });

  if (granularity) {
    return _defineProperty({}, granularity.dimension, 'asc');
  } else if ((query.measures || []).length > 0 && (query.dimensions || []).length > 0) {
    return _defineProperty({}, query.measures[0], 'desc');
  } else if ((query.dimensions || []).length > 0) {
    return _defineProperty({}, query.dimensions[0], 'asc');
  }

  return {};
}
function defaultHeuristics(newState) {
  var oldQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 ? arguments[2] : undefined;

  var _clone = clone(newState),
      query = _clone.query,
      props = _objectWithoutProperties(_clone, _excluded);

  var meta = options.meta,
      sessionGranularity = options.sessionGranularity;
  var granularity = sessionGranularity || DEFAULT_GRANULARITY;

  var state = _objectSpread$1({
    query: query
  }, props);

  var newQuery = null;

  if (!areQueriesEqual(query, oldQuery)) {
    newQuery = query;
  }

  if (Array.isArray(newQuery) || Array.isArray(oldQuery)) {
    return newState;
  }

  if (newQuery) {
    if ((oldQuery.timeDimensions || []).length === 1 && (newQuery.timeDimensions || []).length === 1 && newQuery.timeDimensions[0].granularity && oldQuery.timeDimensions[0].granularity !== newQuery.timeDimensions[0].granularity) {
      state = _objectSpread$1(_objectSpread$1({}, state), {}, {
        sessionGranularity: newQuery.timeDimensions[0].granularity
      });
    }

    if ((oldQuery.measures || []).length === 0 && (newQuery.measures || []).length > 0 || (oldQuery.measures || []).length === 1 && (newQuery.measures || []).length === 1 && oldQuery.measures[0] !== newQuery.measures[0]) {
      var _ref4 = newQuery.timeDimensions || [],
          _ref5 = _slicedToArray(_ref4, 1),
          td = _ref5[0];

      var defaultTimeDimension = meta.defaultTimeDimensionNameFor(newQuery.measures[0]);
      newQuery = _objectSpread$1(_objectSpread$1({}, newQuery), {}, {
        timeDimensions: defaultTimeDimension ? [{
          dimension: defaultTimeDimension,
          granularity: td && td.granularity || granularity,
          dateRange: td && td.dateRange
        }] : []
      });
      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        pivotConfig: null,
        shouldApplyHeuristicOrder: true,
        query: newQuery,
        chartType: defaultTimeDimension ? 'line' : 'number'
      });
    }

    if ((oldQuery.dimensions || []).length === 0 && (newQuery.dimensions || []).length > 0) {
      newQuery = _objectSpread$1(_objectSpread$1({}, newQuery), {}, {
        timeDimensions: (newQuery.timeDimensions || []).map(function (td) {
          return _objectSpread$1(_objectSpread$1({}, td), {}, {
            granularity: undefined
          });
        })
      });
      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        pivotConfig: null,
        shouldApplyHeuristicOrder: true,
        query: newQuery,
        chartType: 'table'
      });
    }

    if ((oldQuery.dimensions || []).length > 0 && (newQuery.dimensions || []).length === 0) {
      newQuery = _objectSpread$1(_objectSpread$1({}, newQuery), {}, {
        timeDimensions: (newQuery.timeDimensions || []).map(function (td) {
          return _objectSpread$1(_objectSpread$1({}, td), {}, {
            granularity: td.granularity || granularity
          });
        })
      });
      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        pivotConfig: null,
        shouldApplyHeuristicOrder: true,
        query: newQuery,
        chartType: (newQuery.timeDimensions || []).length ? 'line' : 'number'
      });
    }

    if (((oldQuery.dimensions || []).length > 0 || (oldQuery.measures || []).length > 0) && (newQuery.dimensions || []).length === 0 && (newQuery.measures || []).length === 0) {
      newQuery = _objectSpread$1(_objectSpread$1({}, newQuery), {}, {
        timeDimensions: [],
        filters: []
      });
      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        pivotConfig: null,
        shouldApplyHeuristicOrder: true,
        query: newQuery,
        sessionGranularity: null
      });
    }

    return state;
  }

  if (state.chartType) {
    var newChartType = state.chartType;

    if ((newChartType === 'line' || newChartType === 'area') && (oldQuery.timeDimensions || []).length === 1 && !oldQuery.timeDimensions[0].granularity) {
      var _oldQuery$timeDimensi = _slicedToArray(oldQuery.timeDimensions, 1),
          _td = _oldQuery$timeDimensi[0];

      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        pivotConfig: null,
        query: _objectSpread$1(_objectSpread$1({}, oldQuery), {}, {
          timeDimensions: [_objectSpread$1(_objectSpread$1({}, _td), {}, {
            granularity: granularity
          })]
        })
      });
    }

    if ((newChartType === 'pie' || newChartType === 'table' || newChartType === 'number') && (oldQuery.timeDimensions || []).length === 1 && oldQuery.timeDimensions[0].granularity) {
      var _oldQuery$timeDimensi2 = _slicedToArray(oldQuery.timeDimensions, 1),
          _td2 = _oldQuery$timeDimensi2[0];

      return _objectSpread$1(_objectSpread$1({}, state), {}, {
        pivotConfig: null,
        shouldApplyHeuristicOrder: true,
        query: _objectSpread$1(_objectSpread$1({}, oldQuery), {}, {
          timeDimensions: [_objectSpread$1(_objectSpread$1({}, _td2), {}, {
            granularity: undefined
          })]
        })
      });
    }
  }

  return state;
}
function isQueryPresent(query) {
  if (!query) {
    return false;
  }

  return (Array.isArray(query) ? query : [query]).every(function (q) {
    return q.measures && q.measures.length || q.dimensions && q.dimensions.length || q.timeDimensions && q.timeDimensions.length;
  });
}
function movePivotItem(pivotConfig, sourceIndex, destinationIndex, sourceAxis, destinationAxis) {
  var nextPivotConfig = _objectSpread$1(_objectSpread$1({}, pivotConfig), {}, {
    x: _toConsumableArray(pivotConfig.x),
    y: _toConsumableArray(pivotConfig.y)
  });

  var id = pivotConfig[sourceAxis][sourceIndex];
  var lastIndex = nextPivotConfig[destinationAxis].length - 1;

  if (id === 'measures') {
    destinationIndex = lastIndex + 1;
  } else if (destinationIndex >= lastIndex && nextPivotConfig[destinationAxis][lastIndex] === 'measures') {
    destinationIndex = lastIndex - 1;
  }

  nextPivotConfig[sourceAxis].splice(sourceIndex, 1);
  nextPivotConfig[destinationAxis].splice(destinationIndex, 0, id);
  return nextPivotConfig;
}
function moveItemInArray(list, sourceIndex, destinationIndex) {
  var result = _toConsumableArray(list);

  var _result$splice = result.splice(sourceIndex, 1),
      _result$splice2 = _slicedToArray(_result$splice, 1),
      removed = _result$splice2[0];

  result.splice(destinationIndex, 0, removed);
  return result;
}
function flattenFilters() {
  var filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return filters.reduce(function (memo, filter) {
    if (filter.or || filter.and) {
      return [].concat(_toConsumableArray(memo), _toConsumableArray(flattenFilters(filter.or || filter.and)));
    }

    return [].concat(_toConsumableArray(memo), [filter]);
  }, []);
}
function getQueryMembers() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keys = ['measures', 'dimensions', 'segments'];
  var members = new Set();
  keys.forEach(function (key) {
    return (query[key] || []).forEach(function (member) {
      return members.add(member);
    });
  });
  (query.timeDimensions || []).forEach(function (td) {
    return members.add(td.dimension);
  });
  flattenFilters(query.filters).forEach(function (filter) {
    return members.add(filter.dimension || filter.member);
  });
  return _toConsumableArray(members);
}
function getOrderMembersFromOrder(orderMembers, order) {
  var ids = new Set();
  var indexedOrderMembers = indexBy(prop('id'), orderMembers);
  var entries = Array.isArray(order) ? order : Object.entries(order || {});
  var nextOrderMembers = [];
  entries.forEach(function (_ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        memberId = _ref7[0],
        currentOrder = _ref7[1];

    if (currentOrder !== 'none' && indexedOrderMembers[memberId]) {
      ids.add(memberId);
      nextOrderMembers.push(_objectSpread$1(_objectSpread$1({}, indexedOrderMembers[memberId]), {}, {
        order: currentOrder
      }));
    }
  });
  orderMembers.forEach(function (member) {
    if (!ids.has(member.id)) {
      nextOrderMembers.push(_objectSpread$1(_objectSpread$1({}, member), {}, {
        order: member.order || 'none'
      }));
    }
  });
  return nextOrderMembers;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var mutexCounter = 0;
var MUTEX_ERROR = 'Mutex has been changed';

var mutexPromise = function mutexPromise(promise) {
  return new Promise(function (resolve, reject) {
    promise.then(function (r) {
      return resolve(r);
    }, function (e) {
      return e !== MUTEX_ERROR && reject(e);
    });
  });
};

var CubejsApi = /*#__PURE__*/function () {
  function CubejsApi(apiToken, options) {
    _classCallCheck(this, CubejsApi);

    if (_typeof(apiToken) === 'object') {
      options = apiToken;
      apiToken = undefined;
    }

    options = options || {};

    if (!options.transport && !options.apiUrl) {
      throw new Error('The `apiUrl` option is required');
    }

    this.apiToken = apiToken;
    this.apiUrl = options.apiUrl;
    this.method = options.method;
    this.headers = options.headers || {};
    this.credentials = options.credentials;
    this.transport = options.transport || new HttpTransport({
      authorization: typeof apiToken === 'function' ? undefined : apiToken,
      apiUrl: this.apiUrl,
      method: this.method,
      headers: this.headers,
      credentials: this.credentials
    });
    this.pollInterval = options.pollInterval || 5;
    this.parseDateMeasures = options.parseDateMeasures;
  }

  _createClass(CubejsApi, [{
    key: "request",
    value: function request(method, params) {
      return this.transport.request(method, _objectSpread({
        baseRequestId: v4()
      }, params));
    }
  }, {
    key: "loadMethod",
    value: function loadMethod(request, toResult, options, callback) {
      var _this = this;

      var mutexValue = ++mutexCounter;

      if (typeof options === 'function' && !callback) {
        callback = options;
        options = undefined;
      }

      options = options || {};
      var mutexKey = options.mutexKey || 'default';

      if (options.mutexObj) {
        options.mutexObj[mutexKey] = mutexValue;
      }

      var requestPromise = this.updateTransportAuthorization().then(function () {
        return request();
      });
      var unsubscribed = false;

      var checkMutex = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
          var requestInstance;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return requestPromise;

                case 2:
                  requestInstance = _context.sent;

                  if (!(options.mutexObj && options.mutexObj[mutexKey] !== mutexValue)) {
                    _context.next = 9;
                    break;
                  }

                  unsubscribed = true;

                  if (!requestInstance.unsubscribe) {
                    _context.next = 8;
                    break;
                  }

                  _context.next = 8;
                  return requestInstance.unsubscribe();

                case 8:
                  throw MUTEX_ERROR;

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function checkMutex() {
          return _ref.apply(this, arguments);
        };
      }();

      var loadImpl = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(response, next) {
          var requestInstance, subscribeNext, continueWait, body, error, result;
          return _regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return requestPromise;

                case 2:
                  requestInstance = _context4.sent;

                  subscribeNext = /*#__PURE__*/function () {
                    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
                      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              if (!(options.subscribe && !unsubscribed)) {
                                _context2.next = 8;
                                break;
                              }

                              if (!requestInstance.unsubscribe) {
                                _context2.next = 5;
                                break;
                              }

                              return _context2.abrupt("return", next());

                            case 5:
                              _context2.next = 7;
                              return new Promise(function (resolve) {
                                return setTimeout(function () {
                                  return resolve();
                                }, _this.pollInterval * 1000);
                              });

                            case 7:
                              return _context2.abrupt("return", next());

                            case 8:
                              return _context2.abrupt("return", null);

                            case 9:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    return function subscribeNext() {
                      return _ref3.apply(this, arguments);
                    };
                  }();

                  continueWait = /*#__PURE__*/function () {
                    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(wait) {
                      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              if (unsubscribed) {
                                _context3.next = 5;
                                break;
                              }

                              if (!wait) {
                                _context3.next = 4;
                                break;
                              }

                              _context3.next = 4;
                              return new Promise(function (resolve) {
                                return setTimeout(function () {
                                  return resolve();
                                }, _this.pollInterval * 1000);
                              });

                            case 4:
                              return _context3.abrupt("return", next());

                            case 5:
                              return _context3.abrupt("return", null);

                            case 6:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    return function continueWait(_x3) {
                      return _ref4.apply(this, arguments);
                    };
                  }();

                  _context4.next = 7;
                  return _this.updateTransportAuthorization();

                case 7:
                  if (!(response.status === 502)) {
                    _context4.next = 11;
                    break;
                  }

                  _context4.next = 10;
                  return checkMutex();

                case 10:
                  return _context4.abrupt("return", continueWait(true));

                case 11:
                  body = {};
                  _context4.prev = 12;
                  _context4.next = 15;
                  return response.json();

                case 15:
                  body = _context4.sent;
                  _context4.next = 23;
                  break;

                case 18:
                  _context4.prev = 18;
                  _context4.t0 = _context4["catch"](12);
                  _context4.next = 22;
                  return response.text();

                case 22:
                  body.error = _context4.sent;

                case 23:
                  if (!(body.error === 'Continue wait')) {
                    _context4.next = 28;
                    break;
                  }

                  _context4.next = 26;
                  return checkMutex();

                case 26:
                  if (options.progressCallback) {
                    options.progressCallback(new ProgressResult(body));
                  }

                  return _context4.abrupt("return", continueWait());

                case 28:
                  if (!(response.status !== 200)) {
                    _context4.next = 41;
                    break;
                  }

                  _context4.next = 31;
                  return checkMutex();

                case 31:
                  if (!(!options.subscribe && requestInstance.unsubscribe)) {
                    _context4.next = 34;
                    break;
                  }

                  _context4.next = 34;
                  return requestInstance.unsubscribe();

                case 34:
                  error = new RequestError(body.error, body); // TODO error class

                  if (!callback) {
                    _context4.next = 39;
                    break;
                  }

                  callback(error);
                  _context4.next = 40;
                  break;

                case 39:
                  throw error;

                case 40:
                  return _context4.abrupt("return", subscribeNext());

                case 41:
                  _context4.next = 43;
                  return checkMutex();

                case 43:
                  if (!(!options.subscribe && requestInstance.unsubscribe)) {
                    _context4.next = 46;
                    break;
                  }

                  _context4.next = 46;
                  return requestInstance.unsubscribe();

                case 46:
                  result = toResult(body);

                  if (!callback) {
                    _context4.next = 51;
                    break;
                  }

                  callback(null, result);
                  _context4.next = 52;
                  break;

                case 51:
                  return _context4.abrupt("return", result);

                case 52:
                  return _context4.abrupt("return", subscribeNext());

                case 53:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, null, [[12, 18]]);
        }));

        return function loadImpl(_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }();

      var promise = requestPromise.then(function (requestInstance) {
        return mutexPromise(requestInstance.subscribe(loadImpl));
      });

      if (callback) {
        return {
          unsubscribe: function () {
            var _unsubscribe = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
              var requestInstance;
              return _regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return requestPromise;

                    case 2:
                      requestInstance = _context5.sent;
                      unsubscribed = true;

                      if (!requestInstance.unsubscribe) {
                        _context5.next = 6;
                        break;
                      }

                      return _context5.abrupt("return", requestInstance.unsubscribe());

                    case 6:
                      return _context5.abrupt("return", null);

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));

            function unsubscribe() {
              return _unsubscribe.apply(this, arguments);
            }

            return unsubscribe;
          }()
        };
      } else {
        return promise;
      }
    }
  }, {
    key: "updateTransportAuthorization",
    value: function () {
      var _updateTransportAuthorization = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
        var token;
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(typeof this.apiToken === 'function')) {
                  _context6.next = 5;
                  break;
                }

                _context6.next = 3;
                return this.apiToken();

              case 3:
                token = _context6.sent;

                if (this.transport.authorization !== token) {
                  this.transport.authorization = token;
                }

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateTransportAuthorization() {
        return _updateTransportAuthorization.apply(this, arguments);
      }

      return updateTransportAuthorization;
    }()
  }, {
    key: "load",
    value: function load(query, options, callback) {
      var _this2 = this;

      return this.loadMethod(function () {
        return _this2.request('load', {
          query: query,
          queryType: 'multi'
        });
      }, function (response) {
        return new ResultSet(response, {
          parseDateMeasures: _this2.parseDateMeasures
        });
      }, options, callback);
    }
  }, {
    key: "sql",
    value: function sql(query, options, callback) {
      var _this3 = this;

      return this.loadMethod(function () {
        return _this3.request('sql', {
          query: query
        });
      }, function (response) {
        return Array.isArray(response) ? response.map(function (body) {
          return new SqlQuery(body);
        }) : new SqlQuery(response);
      }, options, callback);
    }
  }, {
    key: "meta",
    value: function meta(options, callback) {
      var _this4 = this;

      return this.loadMethod(function () {
        return _this4.request('meta');
      }, function (body) {
        return new Meta(body);
      }, options, callback);
    }
  }, {
    key: "dryRun",
    value: function dryRun(query, options, callback) {
      var _this5 = this;

      return this.loadMethod(function () {
        return _this5.request('dry-run', {
          query: query
        });
      }, function (response) {
        return response;
      }, options, callback);
    }
  }, {
    key: "subscribe",
    value: function subscribe(query, options, callback) {
      var _this6 = this;

      return this.loadMethod(function () {
        return _this6.request('subscribe', {
          query: query,
          queryType: 'multi'
        });
      }, function (body) {
        return new ResultSet(body, {
          parseDateMeasures: _this6.parseDateMeasures
        });
      }, _objectSpread(_objectSpread({}, options), {}, {
        subscribe: true
      }), callback);
    }
  }]);

  return CubejsApi;
}();

var index = (function (apiToken, options) {
  return new CubejsApi(apiToken, options);
});

export default index;
export { CubejsApi, GRANULARITIES, HttpTransport, ResultSet, areQueriesEqual, defaultHeuristics, defaultOrder, flattenFilters, getOrderMembersFromOrder, getQueryMembers, isQueryPresent, moveItemInArray, movePivotItem };
//# sourceMappingURL=cubejs-client-core.esm.js.map
