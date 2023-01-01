(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/krisk/!fuse@v6.6.2+incompatible/dist/fuse.js
  var require_fuse = __commonJS({
    "ns-hugo:/tmp/hugo_cache/modules/filecache/modules/pkg/mod/github.com/krisk/!fuse@v6.6.2+incompatible/dist/fuse.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.Fuse = factory());
      })(exports, function() {
        "use strict";
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread2(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
            return typeof obj2;
          } : function(obj2) {
            return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          }, _typeof(obj);
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", {
            writable: false
          });
          return Constructor;
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          Object.defineProperty(subClass, "prototype", {
            value: Object.create(superClass && superClass.prototype, {
              constructor: {
                value: subClass,
                writable: true,
                configurable: true
              }
            }),
            writable: false
          });
          if (superClass)
            _setPrototypeOf(subClass, superClass);
        }
        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
            return o2.__proto__ || Object.getPrototypeOf(o2);
          };
          return _getPrototypeOf(o);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy === "function")
            return true;
          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _assertThisInitialized(self2) {
          if (self2 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self2;
        }
        function _possibleConstructorReturn(self2, call) {
          if (call && (typeof call === "object" || typeof call === "function")) {
            return call;
          } else if (call !== void 0) {
            throw new TypeError("Derived constructors may only return object or undefined");
          }
          return _assertThisInitialized(self2);
        }
        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived), result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr))
            return _arrayLikeToArray(arr);
        }
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
            return Array.from(iter);
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++)
            arr2[i] = arr[i];
          return arr2;
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function isArray(value) {
          return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
        }
        var INFINITY = 1 / 0;
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          var result = value + "";
          return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        function isString(value) {
          return typeof value === "string";
        }
        function isNumber(value) {
          return typeof value === "number";
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
        }
        function isObject(value) {
          return _typeof(value) === "object";
        }
        function isObjectLike(value) {
          return isObject(value) && value !== null;
        }
        function isDefined(value) {
          return value !== void 0 && value !== null;
        }
        function isBlank(value) {
          return !value.trim().length;
        }
        function getTag(value) {
          return value == null ? value === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
        }
        var EXTENDED_SEARCH_UNAVAILABLE = "Extended search is not available";
        var INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
        var LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = function LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY2(key) {
          return "Invalid value for key ".concat(key);
        };
        var PATTERN_LENGTH_TOO_LARGE = function PATTERN_LENGTH_TOO_LARGE2(max) {
          return "Pattern length exceeds max of ".concat(max, ".");
        };
        var MISSING_KEY_PROPERTY = function MISSING_KEY_PROPERTY2(name) {
          return "Missing ".concat(name, " property in key");
        };
        var INVALID_KEY_WEIGHT_VALUE = function INVALID_KEY_WEIGHT_VALUE2(key) {
          return "Property 'weight' in key '".concat(key, "' must be a positive integer");
        };
        var hasOwn = Object.prototype.hasOwnProperty;
        var KeyStore = /* @__PURE__ */ function() {
          function KeyStore2(keys) {
            var _this = this;
            _classCallCheck(this, KeyStore2);
            this._keys = [];
            this._keyMap = {};
            var totalWeight = 0;
            keys.forEach(function(key) {
              var obj = createKey(key);
              totalWeight += obj.weight;
              _this._keys.push(obj);
              _this._keyMap[obj.id] = obj;
              totalWeight += obj.weight;
            });
            this._keys.forEach(function(key) {
              key.weight /= totalWeight;
            });
          }
          _createClass(KeyStore2, [{
            key: "get",
            value: function get2(keyId) {
              return this._keyMap[keyId];
            }
          }, {
            key: "keys",
            value: function keys() {
              return this._keys;
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              return JSON.stringify(this._keys);
            }
          }]);
          return KeyStore2;
        }();
        function createKey(key) {
          var path = null;
          var id = null;
          var src = null;
          var weight = 1;
          var getFn = null;
          if (isString(key) || isArray(key)) {
            src = key;
            path = createKeyPath(key);
            id = createKeyId(key);
          } else {
            if (!hasOwn.call(key, "name")) {
              throw new Error(MISSING_KEY_PROPERTY("name"));
            }
            var name = key.name;
            src = name;
            if (hasOwn.call(key, "weight")) {
              weight = key.weight;
              if (weight <= 0) {
                throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
              }
            }
            path = createKeyPath(name);
            id = createKeyId(name);
            getFn = key.getFn;
          }
          return {
            path,
            id,
            weight,
            src,
            getFn
          };
        }
        function createKeyPath(key) {
          return isArray(key) ? key : key.split(".");
        }
        function createKeyId(key) {
          return isArray(key) ? key.join(".") : key;
        }
        function get(obj, path) {
          var list = [];
          var arr = false;
          var deepGet = function deepGet2(obj2, path2, index) {
            if (!isDefined(obj2)) {
              return;
            }
            if (!path2[index]) {
              list.push(obj2);
            } else {
              var key = path2[index];
              var value = obj2[key];
              if (!isDefined(value)) {
                return;
              }
              if (index === path2.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) {
                list.push(toString(value));
              } else if (isArray(value)) {
                arr = true;
                for (var i = 0, len = value.length; i < len; i += 1) {
                  deepGet2(value[i], path2, index + 1);
                }
              } else if (path2.length) {
                deepGet2(value, path2, index + 1);
              }
            }
          };
          deepGet(obj, isString(path) ? path.split(".") : path, 0);
          return arr ? list : list[0];
        }
        var MatchOptions = {
          includeMatches: false,
          findAllMatches: false,
          minMatchCharLength: 1
        };
        var BasicOptions = {
          isCaseSensitive: false,
          includeScore: false,
          keys: [],
          shouldSort: true,
          sortFn: function sortFn(a, b) {
            return a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1;
          }
        };
        var FuzzyOptions = {
          location: 0,
          threshold: 0.6,
          distance: 100
        };
        var AdvancedOptions = {
          useExtendedSearch: false,
          getFn: get,
          ignoreLocation: false,
          ignoreFieldNorm: false,
          fieldNormWeight: 1
        };
        var Config = _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, BasicOptions), MatchOptions), FuzzyOptions), AdvancedOptions);
        var SPACE = /[^ ]+/g;
        function norm() {
          var weight = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
          var mantissa = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
          var cache = /* @__PURE__ */ new Map();
          var m = Math.pow(10, mantissa);
          return {
            get: function get2(value) {
              var numTokens = value.match(SPACE).length;
              if (cache.has(numTokens)) {
                return cache.get(numTokens);
              }
              var norm2 = 1 / Math.pow(numTokens, 0.5 * weight);
              var n = parseFloat(Math.round(norm2 * m) / m);
              cache.set(numTokens, n);
              return n;
            },
            clear: function clear() {
              cache.clear();
            }
          };
        }
        var FuseIndex = /* @__PURE__ */ function() {
          function FuseIndex2() {
            var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$getFn = _ref.getFn, getFn = _ref$getFn === void 0 ? Config.getFn : _ref$getFn, _ref$fieldNormWeight = _ref.fieldNormWeight, fieldNormWeight = _ref$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref$fieldNormWeight;
            _classCallCheck(this, FuseIndex2);
            this.norm = norm(fieldNormWeight, 3);
            this.getFn = getFn;
            this.isCreated = false;
            this.setIndexRecords();
          }
          _createClass(FuseIndex2, [{
            key: "setSources",
            value: function setSources() {
              var docs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
              this.docs = docs;
            }
          }, {
            key: "setIndexRecords",
            value: function setIndexRecords() {
              var records = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
              this.records = records;
            }
          }, {
            key: "setKeys",
            value: function setKeys() {
              var _this = this;
              var keys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
              this.keys = keys;
              this._keysMap = {};
              keys.forEach(function(key, idx) {
                _this._keysMap[key.id] = idx;
              });
            }
          }, {
            key: "create",
            value: function create() {
              var _this2 = this;
              if (this.isCreated || !this.docs.length) {
                return;
              }
              this.isCreated = true;
              if (isString(this.docs[0])) {
                this.docs.forEach(function(doc, docIndex) {
                  _this2._addString(doc, docIndex);
                });
              } else {
                this.docs.forEach(function(doc, docIndex) {
                  _this2._addObject(doc, docIndex);
                });
              }
              this.norm.clear();
            }
          }, {
            key: "add",
            value: function add(doc) {
              var idx = this.size();
              if (isString(doc)) {
                this._addString(doc, idx);
              } else {
                this._addObject(doc, idx);
              }
            }
          }, {
            key: "removeAt",
            value: function removeAt(idx) {
              this.records.splice(idx, 1);
              for (var i = idx, len = this.size(); i < len; i += 1) {
                this.records[i].i -= 1;
              }
            }
          }, {
            key: "getValueForItemAtKeyId",
            value: function getValueForItemAtKeyId(item, keyId) {
              return item[this._keysMap[keyId]];
            }
          }, {
            key: "size",
            value: function size() {
              return this.records.length;
            }
          }, {
            key: "_addString",
            value: function _addString(doc, docIndex) {
              if (!isDefined(doc) || isBlank(doc)) {
                return;
              }
              var record = {
                v: doc,
                i: docIndex,
                n: this.norm.get(doc)
              };
              this.records.push(record);
            }
          }, {
            key: "_addObject",
            value: function _addObject(doc, docIndex) {
              var _this3 = this;
              var record = {
                i: docIndex,
                $: {}
              };
              this.keys.forEach(function(key, keyIndex) {
                var value = key.getFn ? key.getFn(doc) : _this3.getFn(doc, key.path);
                if (!isDefined(value)) {
                  return;
                }
                if (isArray(value)) {
                  (function() {
                    var subRecords = [];
                    var stack = [{
                      nestedArrIndex: -1,
                      value
                    }];
                    while (stack.length) {
                      var _stack$pop = stack.pop(), nestedArrIndex = _stack$pop.nestedArrIndex, _value = _stack$pop.value;
                      if (!isDefined(_value)) {
                        continue;
                      }
                      if (isString(_value) && !isBlank(_value)) {
                        var subRecord2 = {
                          v: _value,
                          i: nestedArrIndex,
                          n: _this3.norm.get(_value)
                        };
                        subRecords.push(subRecord2);
                      } else if (isArray(_value)) {
                        _value.forEach(function(item, k) {
                          stack.push({
                            nestedArrIndex: k,
                            value: item
                          });
                        });
                      } else
                        ;
                    }
                    record.$[keyIndex] = subRecords;
                  })();
                } else if (isString(value) && !isBlank(value)) {
                  var subRecord = {
                    v: value,
                    n: _this3.norm.get(value)
                  };
                  record.$[keyIndex] = subRecord;
                }
              });
              this.records.push(record);
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              return {
                keys: this.keys,
                records: this.records
              };
            }
          }]);
          return FuseIndex2;
        }();
        function createIndex(keys, docs) {
          var _ref2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref2$getFn = _ref2.getFn, getFn = _ref2$getFn === void 0 ? Config.getFn : _ref2$getFn, _ref2$fieldNormWeight = _ref2.fieldNormWeight, fieldNormWeight = _ref2$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref2$fieldNormWeight;
          var myIndex = new FuseIndex({
            getFn,
            fieldNormWeight
          });
          myIndex.setKeys(keys.map(createKey));
          myIndex.setSources(docs);
          myIndex.create();
          return myIndex;
        }
        function parseIndex(data) {
          var _ref3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref3$getFn = _ref3.getFn, getFn = _ref3$getFn === void 0 ? Config.getFn : _ref3$getFn, _ref3$fieldNormWeight = _ref3.fieldNormWeight, fieldNormWeight = _ref3$fieldNormWeight === void 0 ? Config.fieldNormWeight : _ref3$fieldNormWeight;
          var keys = data.keys, records = data.records;
          var myIndex = new FuseIndex({
            getFn,
            fieldNormWeight
          });
          myIndex.setKeys(keys);
          myIndex.setIndexRecords(records);
          return myIndex;
        }
        function computeScore$1(pattern) {
          var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$errors = _ref.errors, errors = _ref$errors === void 0 ? 0 : _ref$errors, _ref$currentLocation = _ref.currentLocation, currentLocation = _ref$currentLocation === void 0 ? 0 : _ref$currentLocation, _ref$expectedLocation = _ref.expectedLocation, expectedLocation = _ref$expectedLocation === void 0 ? 0 : _ref$expectedLocation, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
          var accuracy = errors / pattern.length;
          if (ignoreLocation) {
            return accuracy;
          }
          var proximity = Math.abs(expectedLocation - currentLocation);
          if (!distance) {
            return proximity ? 1 : accuracy;
          }
          return accuracy + proximity / distance;
        }
        function convertMaskToIndices() {
          var matchmask = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          var minMatchCharLength = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Config.minMatchCharLength;
          var indices = [];
          var start = -1;
          var end = -1;
          var i = 0;
          for (var len = matchmask.length; i < len; i += 1) {
            var match = matchmask[i];
            if (match && start === -1) {
              start = i;
            } else if (!match && start !== -1) {
              end = i - 1;
              if (end - start + 1 >= minMatchCharLength) {
                indices.push([start, end]);
              }
              start = -1;
            }
          }
          if (matchmask[i - 1] && i - start >= minMatchCharLength) {
            indices.push([start, i - 1]);
          }
          return indices;
        }
        var MAX_BITS = 32;
        function search(text, pattern, patternAlphabet) {
          var _ref = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, _ref$location = _ref.location, location = _ref$location === void 0 ? Config.location : _ref$location, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
          if (pattern.length > MAX_BITS) {
            throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
          }
          var patternLen = pattern.length;
          var textLen = text.length;
          var expectedLocation = Math.max(0, Math.min(location, textLen));
          var currentThreshold = threshold;
          var bestLocation = expectedLocation;
          var computeMatches = minMatchCharLength > 1 || includeMatches;
          var matchMask = computeMatches ? Array(textLen) : [];
          var index;
          while ((index = text.indexOf(pattern, bestLocation)) > -1) {
            var score = computeScore$1(pattern, {
              currentLocation: index,
              expectedLocation,
              distance,
              ignoreLocation
            });
            currentThreshold = Math.min(score, currentThreshold);
            bestLocation = index + patternLen;
            if (computeMatches) {
              var i = 0;
              while (i < patternLen) {
                matchMask[index + i] = 1;
                i += 1;
              }
            }
          }
          bestLocation = -1;
          var lastBitArr = [];
          var finalScore = 1;
          var binMax = patternLen + textLen;
          var mask = 1 << patternLen - 1;
          for (var _i = 0; _i < patternLen; _i += 1) {
            var binMin = 0;
            var binMid = binMax;
            while (binMin < binMid) {
              var _score2 = computeScore$1(pattern, {
                errors: _i,
                currentLocation: expectedLocation + binMid,
                expectedLocation,
                distance,
                ignoreLocation
              });
              if (_score2 <= currentThreshold) {
                binMin = binMid;
              } else {
                binMax = binMid;
              }
              binMid = Math.floor((binMax - binMin) / 2 + binMin);
            }
            binMax = binMid;
            var start = Math.max(1, expectedLocation - binMid + 1);
            var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
            var bitArr = Array(finish + 2);
            bitArr[finish + 1] = (1 << _i) - 1;
            for (var j = finish; j >= start; j -= 1) {
              var currentLocation = j - 1;
              var charMatch = patternAlphabet[text.charAt(currentLocation)];
              if (computeMatches) {
                matchMask[currentLocation] = +!!charMatch;
              }
              bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
              if (_i) {
                bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
              }
              if (bitArr[j] & mask) {
                finalScore = computeScore$1(pattern, {
                  errors: _i,
                  currentLocation,
                  expectedLocation,
                  distance,
                  ignoreLocation
                });
                if (finalScore <= currentThreshold) {
                  currentThreshold = finalScore;
                  bestLocation = currentLocation;
                  if (bestLocation <= expectedLocation) {
                    break;
                  }
                  start = Math.max(1, 2 * expectedLocation - bestLocation);
                }
              }
            }
            var _score = computeScore$1(pattern, {
              errors: _i + 1,
              currentLocation: expectedLocation,
              expectedLocation,
              distance,
              ignoreLocation
            });
            if (_score > currentThreshold) {
              break;
            }
            lastBitArr = bitArr;
          }
          var result = {
            isMatch: bestLocation >= 0,
            score: Math.max(1e-3, finalScore)
          };
          if (computeMatches) {
            var indices = convertMaskToIndices(matchMask, minMatchCharLength);
            if (!indices.length) {
              result.isMatch = false;
            } else if (includeMatches) {
              result.indices = indices;
            }
          }
          return result;
        }
        function createPatternAlphabet(pattern) {
          var mask = {};
          for (var i = 0, len = pattern.length; i < len; i += 1) {
            var _char = pattern.charAt(i);
            mask[_char] = (mask[_char] || 0) | 1 << len - i - 1;
          }
          return mask;
        }
        var BitapSearch = /* @__PURE__ */ function() {
          function BitapSearch2(pattern) {
            var _this = this;
            var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$location = _ref.location, location = _ref$location === void 0 ? Config.location : _ref$location, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$isCaseSensitive = _ref.isCaseSensitive, isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
            _classCallCheck(this, BitapSearch2);
            this.options = {
              location,
              threshold,
              distance,
              includeMatches,
              findAllMatches,
              minMatchCharLength,
              isCaseSensitive,
              ignoreLocation
            };
            this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
            this.chunks = [];
            if (!this.pattern.length) {
              return;
            }
            var addChunk = function addChunk2(pattern2, startIndex2) {
              _this.chunks.push({
                pattern: pattern2,
                alphabet: createPatternAlphabet(pattern2),
                startIndex: startIndex2
              });
            };
            var len = this.pattern.length;
            if (len > MAX_BITS) {
              var i = 0;
              var remainder = len % MAX_BITS;
              var end = len - remainder;
              while (i < end) {
                addChunk(this.pattern.substr(i, MAX_BITS), i);
                i += MAX_BITS;
              }
              if (remainder) {
                var startIndex = len - MAX_BITS;
                addChunk(this.pattern.substr(startIndex), startIndex);
              }
            } else {
              addChunk(this.pattern, 0);
            }
          }
          _createClass(BitapSearch2, [{
            key: "searchIn",
            value: function searchIn(text) {
              var _this$options = this.options, isCaseSensitive = _this$options.isCaseSensitive, includeMatches = _this$options.includeMatches;
              if (!isCaseSensitive) {
                text = text.toLowerCase();
              }
              if (this.pattern === text) {
                var _result = {
                  isMatch: true,
                  score: 0
                };
                if (includeMatches) {
                  _result.indices = [[0, text.length - 1]];
                }
                return _result;
              }
              var _this$options2 = this.options, location = _this$options2.location, distance = _this$options2.distance, threshold = _this$options2.threshold, findAllMatches = _this$options2.findAllMatches, minMatchCharLength = _this$options2.minMatchCharLength, ignoreLocation = _this$options2.ignoreLocation;
              var allIndices = [];
              var totalScore = 0;
              var hasMatches = false;
              this.chunks.forEach(function(_ref2) {
                var pattern = _ref2.pattern, alphabet = _ref2.alphabet, startIndex = _ref2.startIndex;
                var _search = search(text, pattern, alphabet, {
                  location: location + startIndex,
                  distance,
                  threshold,
                  findAllMatches,
                  minMatchCharLength,
                  includeMatches,
                  ignoreLocation
                }), isMatch = _search.isMatch, score = _search.score, indices = _search.indices;
                if (isMatch) {
                  hasMatches = true;
                }
                totalScore += score;
                if (isMatch && indices) {
                  allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
                }
              });
              var result = {
                isMatch: hasMatches,
                score: hasMatches ? totalScore / this.chunks.length : 1
              };
              if (hasMatches && includeMatches) {
                result.indices = allIndices;
              }
              return result;
            }
          }]);
          return BitapSearch2;
        }();
        var BaseMatch = /* @__PURE__ */ function() {
          function BaseMatch2(pattern) {
            _classCallCheck(this, BaseMatch2);
            this.pattern = pattern;
          }
          _createClass(BaseMatch2, [{
            key: "search",
            value: function search2() {
            }
          }], [{
            key: "isMultiMatch",
            value: function isMultiMatch(pattern) {
              return getMatch(pattern, this.multiRegex);
            }
          }, {
            key: "isSingleMatch",
            value: function isSingleMatch(pattern) {
              return getMatch(pattern, this.singleRegex);
            }
          }]);
          return BaseMatch2;
        }();
        function getMatch(pattern, exp) {
          var matches = pattern.match(exp);
          return matches ? matches[1] : null;
        }
        var ExactMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(ExactMatch2, _BaseMatch);
          var _super = _createSuper(ExactMatch2);
          function ExactMatch2(pattern) {
            _classCallCheck(this, ExactMatch2);
            return _super.call(this, pattern);
          }
          _createClass(ExactMatch2, [{
            key: "search",
            value: function search2(text) {
              var isMatch = text === this.pattern;
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, this.pattern.length - 1]
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "exact";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^="(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^=(.*)$/;
            }
          }]);
          return ExactMatch2;
        }(BaseMatch);
        var InverseExactMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(InverseExactMatch2, _BaseMatch);
          var _super = _createSuper(InverseExactMatch2);
          function InverseExactMatch2(pattern) {
            _classCallCheck(this, InverseExactMatch2);
            return _super.call(this, pattern);
          }
          _createClass(InverseExactMatch2, [{
            key: "search",
            value: function search2(text) {
              var index = text.indexOf(this.pattern);
              var isMatch = index === -1;
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, text.length - 1]
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "inverse-exact";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^!"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^!(.*)$/;
            }
          }]);
          return InverseExactMatch2;
        }(BaseMatch);
        var PrefixExactMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(PrefixExactMatch2, _BaseMatch);
          var _super = _createSuper(PrefixExactMatch2);
          function PrefixExactMatch2(pattern) {
            _classCallCheck(this, PrefixExactMatch2);
            return _super.call(this, pattern);
          }
          _createClass(PrefixExactMatch2, [{
            key: "search",
            value: function search2(text) {
              var isMatch = text.startsWith(this.pattern);
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, this.pattern.length - 1]
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "prefix-exact";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^\^"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^\^(.*)$/;
            }
          }]);
          return PrefixExactMatch2;
        }(BaseMatch);
        var InversePrefixExactMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(InversePrefixExactMatch2, _BaseMatch);
          var _super = _createSuper(InversePrefixExactMatch2);
          function InversePrefixExactMatch2(pattern) {
            _classCallCheck(this, InversePrefixExactMatch2);
            return _super.call(this, pattern);
          }
          _createClass(InversePrefixExactMatch2, [{
            key: "search",
            value: function search2(text) {
              var isMatch = !text.startsWith(this.pattern);
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, text.length - 1]
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "inverse-prefix-exact";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^!\^"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^!\^(.*)$/;
            }
          }]);
          return InversePrefixExactMatch2;
        }(BaseMatch);
        var SuffixExactMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(SuffixExactMatch2, _BaseMatch);
          var _super = _createSuper(SuffixExactMatch2);
          function SuffixExactMatch2(pattern) {
            _classCallCheck(this, SuffixExactMatch2);
            return _super.call(this, pattern);
          }
          _createClass(SuffixExactMatch2, [{
            key: "search",
            value: function search2(text) {
              var isMatch = text.endsWith(this.pattern);
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [text.length - this.pattern.length, text.length - 1]
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "suffix-exact";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^"(.*)"\$$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^(.*)\$$/;
            }
          }]);
          return SuffixExactMatch2;
        }(BaseMatch);
        var InverseSuffixExactMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(InverseSuffixExactMatch2, _BaseMatch);
          var _super = _createSuper(InverseSuffixExactMatch2);
          function InverseSuffixExactMatch2(pattern) {
            _classCallCheck(this, InverseSuffixExactMatch2);
            return _super.call(this, pattern);
          }
          _createClass(InverseSuffixExactMatch2, [{
            key: "search",
            value: function search2(text) {
              var isMatch = !text.endsWith(this.pattern);
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices: [0, text.length - 1]
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "inverse-suffix-exact";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^!"(.*)"\$$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^!(.*)\$$/;
            }
          }]);
          return InverseSuffixExactMatch2;
        }(BaseMatch);
        var FuzzyMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(FuzzyMatch2, _BaseMatch);
          var _super = _createSuper(FuzzyMatch2);
          function FuzzyMatch2(pattern) {
            var _this;
            var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$location = _ref.location, location = _ref$location === void 0 ? Config.location : _ref$location, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$isCaseSensitive = _ref.isCaseSensitive, isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation;
            _classCallCheck(this, FuzzyMatch2);
            _this = _super.call(this, pattern);
            _this._bitapSearch = new BitapSearch(pattern, {
              location,
              threshold,
              distance,
              includeMatches,
              findAllMatches,
              minMatchCharLength,
              isCaseSensitive,
              ignoreLocation
            });
            return _this;
          }
          _createClass(FuzzyMatch2, [{
            key: "search",
            value: function search2(text) {
              return this._bitapSearch.searchIn(text);
            }
          }], [{
            key: "type",
            get: function get2() {
              return "fuzzy";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^(.*)$/;
            }
          }]);
          return FuzzyMatch2;
        }(BaseMatch);
        var IncludeMatch = /* @__PURE__ */ function(_BaseMatch) {
          _inherits(IncludeMatch2, _BaseMatch);
          var _super = _createSuper(IncludeMatch2);
          function IncludeMatch2(pattern) {
            _classCallCheck(this, IncludeMatch2);
            return _super.call(this, pattern);
          }
          _createClass(IncludeMatch2, [{
            key: "search",
            value: function search2(text) {
              var location = 0;
              var index;
              var indices = [];
              var patternLen = this.pattern.length;
              while ((index = text.indexOf(this.pattern, location)) > -1) {
                location = index + patternLen;
                indices.push([index, location - 1]);
              }
              var isMatch = !!indices.length;
              return {
                isMatch,
                score: isMatch ? 0 : 1,
                indices
              };
            }
          }], [{
            key: "type",
            get: function get2() {
              return "include";
            }
          }, {
            key: "multiRegex",
            get: function get2() {
              return /^'"(.*)"$/;
            }
          }, {
            key: "singleRegex",
            get: function get2() {
              return /^'(.*)$/;
            }
          }]);
          return IncludeMatch2;
        }(BaseMatch);
        var searchers = [ExactMatch, IncludeMatch, PrefixExactMatch, InversePrefixExactMatch, InverseSuffixExactMatch, SuffixExactMatch, InverseExactMatch, FuzzyMatch];
        var searchersLen = searchers.length;
        var SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
        var OR_TOKEN = "|";
        function parseQuery(pattern) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return pattern.split(OR_TOKEN).map(function(item) {
            var query = item.trim().split(SPACE_RE).filter(function(item2) {
              return item2 && !!item2.trim();
            });
            var results = [];
            for (var i = 0, len = query.length; i < len; i += 1) {
              var queryItem = query[i];
              var found = false;
              var idx = -1;
              while (!found && ++idx < searchersLen) {
                var searcher = searchers[idx];
                var token = searcher.isMultiMatch(queryItem);
                if (token) {
                  results.push(new searcher(token, options));
                  found = true;
                }
              }
              if (found) {
                continue;
              }
              idx = -1;
              while (++idx < searchersLen) {
                var _searcher = searchers[idx];
                var _token = _searcher.isSingleMatch(queryItem);
                if (_token) {
                  results.push(new _searcher(_token, options));
                  break;
                }
              }
            }
            return results;
          });
        }
        var MultiMatchSet = /* @__PURE__ */ new Set([FuzzyMatch.type, IncludeMatch.type]);
        var ExtendedSearch = /* @__PURE__ */ function() {
          function ExtendedSearch2(pattern) {
            var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$isCaseSensitive = _ref.isCaseSensitive, isCaseSensitive = _ref$isCaseSensitive === void 0 ? Config.isCaseSensitive : _ref$isCaseSensitive, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === void 0 ? Config.minMatchCharLength : _ref$minMatchCharLeng, _ref$ignoreLocation = _ref.ignoreLocation, ignoreLocation = _ref$ignoreLocation === void 0 ? Config.ignoreLocation : _ref$ignoreLocation, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === void 0 ? Config.findAllMatches : _ref$findAllMatches, _ref$location = _ref.location, location = _ref$location === void 0 ? Config.location : _ref$location, _ref$threshold = _ref.threshold, threshold = _ref$threshold === void 0 ? Config.threshold : _ref$threshold, _ref$distance = _ref.distance, distance = _ref$distance === void 0 ? Config.distance : _ref$distance;
            _classCallCheck(this, ExtendedSearch2);
            this.query = null;
            this.options = {
              isCaseSensitive,
              includeMatches,
              minMatchCharLength,
              findAllMatches,
              ignoreLocation,
              location,
              threshold,
              distance
            };
            this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
            this.query = parseQuery(this.pattern, this.options);
          }
          _createClass(ExtendedSearch2, [{
            key: "searchIn",
            value: function searchIn(text) {
              var query = this.query;
              if (!query) {
                return {
                  isMatch: false,
                  score: 1
                };
              }
              var _this$options = this.options, includeMatches = _this$options.includeMatches, isCaseSensitive = _this$options.isCaseSensitive;
              text = isCaseSensitive ? text : text.toLowerCase();
              var numMatches = 0;
              var allIndices = [];
              var totalScore = 0;
              for (var i = 0, qLen = query.length; i < qLen; i += 1) {
                var searchers2 = query[i];
                allIndices.length = 0;
                numMatches = 0;
                for (var j = 0, pLen = searchers2.length; j < pLen; j += 1) {
                  var searcher = searchers2[j];
                  var _searcher$search = searcher.search(text), isMatch = _searcher$search.isMatch, indices = _searcher$search.indices, score = _searcher$search.score;
                  if (isMatch) {
                    numMatches += 1;
                    totalScore += score;
                    if (includeMatches) {
                      var type = searcher.constructor.type;
                      if (MultiMatchSet.has(type)) {
                        allIndices = [].concat(_toConsumableArray(allIndices), _toConsumableArray(indices));
                      } else {
                        allIndices.push(indices);
                      }
                    }
                  } else {
                    totalScore = 0;
                    numMatches = 0;
                    allIndices.length = 0;
                    break;
                  }
                }
                if (numMatches) {
                  var result = {
                    isMatch: true,
                    score: totalScore / numMatches
                  };
                  if (includeMatches) {
                    result.indices = allIndices;
                  }
                  return result;
                }
              }
              return {
                isMatch: false,
                score: 1
              };
            }
          }], [{
            key: "condition",
            value: function condition(_, options) {
              return options.useExtendedSearch;
            }
          }]);
          return ExtendedSearch2;
        }();
        var registeredSearchers = [];
        function register() {
          registeredSearchers.push.apply(registeredSearchers, arguments);
        }
        function createSearcher(pattern, options) {
          for (var i = 0, len = registeredSearchers.length; i < len; i += 1) {
            var searcherClass = registeredSearchers[i];
            if (searcherClass.condition(pattern, options)) {
              return new searcherClass(pattern, options);
            }
          }
          return new BitapSearch(pattern, options);
        }
        var LogicalOperator = {
          AND: "$and",
          OR: "$or"
        };
        var KeyType = {
          PATH: "$path",
          PATTERN: "$val"
        };
        var isExpression = function isExpression2(query) {
          return !!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
        };
        var isPath = function isPath2(query) {
          return !!query[KeyType.PATH];
        };
        var isLeaf = function isLeaf2(query) {
          return !isArray(query) && isObject(query) && !isExpression(query);
        };
        var convertToExplicit = function convertToExplicit2(query) {
          return _defineProperty({}, LogicalOperator.AND, Object.keys(query).map(function(key) {
            return _defineProperty({}, key, query[key]);
          }));
        };
        function parse(query, options) {
          var _ref3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref3$auto = _ref3.auto, auto = _ref3$auto === void 0 ? true : _ref3$auto;
          var next = function next2(query2) {
            var keys = Object.keys(query2);
            var isQueryPath = isPath(query2);
            if (!isQueryPath && keys.length > 1 && !isExpression(query2)) {
              return next2(convertToExplicit(query2));
            }
            if (isLeaf(query2)) {
              var key = isQueryPath ? query2[KeyType.PATH] : keys[0];
              var pattern = isQueryPath ? query2[KeyType.PATTERN] : query2[key];
              if (!isString(pattern)) {
                throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
              }
              var obj = {
                keyId: createKeyId(key),
                pattern
              };
              if (auto) {
                obj.searcher = createSearcher(pattern, options);
              }
              return obj;
            }
            var node = {
              children: [],
              operator: keys[0]
            };
            keys.forEach(function(key2) {
              var value = query2[key2];
              if (isArray(value)) {
                value.forEach(function(item) {
                  node.children.push(next2(item));
                });
              }
            });
            return node;
          };
          if (!isExpression(query)) {
            query = convertToExplicit(query);
          }
          return next(query);
        }
        function computeScore(results, _ref) {
          var _ref$ignoreFieldNorm = _ref.ignoreFieldNorm, ignoreFieldNorm = _ref$ignoreFieldNorm === void 0 ? Config.ignoreFieldNorm : _ref$ignoreFieldNorm;
          results.forEach(function(result) {
            var totalScore = 1;
            result.matches.forEach(function(_ref2) {
              var key = _ref2.key, norm2 = _ref2.norm, score = _ref2.score;
              var weight = key ? key.weight : null;
              totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm2));
            });
            result.score = totalScore;
          });
        }
        function transformMatches(result, data) {
          var matches = result.matches;
          data.matches = [];
          if (!isDefined(matches)) {
            return;
          }
          matches.forEach(function(match) {
            if (!isDefined(match.indices) || !match.indices.length) {
              return;
            }
            var indices = match.indices, value = match.value;
            var obj = {
              indices,
              value
            };
            if (match.key) {
              obj.key = match.key.src;
            }
            if (match.idx > -1) {
              obj.refIndex = match.idx;
            }
            data.matches.push(obj);
          });
        }
        function transformScore(result, data) {
          data.score = result.score;
        }
        function format(results, docs) {
          var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === void 0 ? Config.includeMatches : _ref$includeMatches, _ref$includeScore = _ref.includeScore, includeScore = _ref$includeScore === void 0 ? Config.includeScore : _ref$includeScore;
          var transformers = [];
          if (includeMatches)
            transformers.push(transformMatches);
          if (includeScore)
            transformers.push(transformScore);
          return results.map(function(result) {
            var idx = result.idx;
            var data = {
              item: docs[idx],
              refIndex: idx
            };
            if (transformers.length) {
              transformers.forEach(function(transformer) {
                transformer(result, data);
              });
            }
            return data;
          });
        }
        var Fuse$1 = /* @__PURE__ */ function() {
          function Fuse3(docs) {
            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            var index = arguments.length > 2 ? arguments[2] : void 0;
            _classCallCheck(this, Fuse3);
            this.options = _objectSpread2(_objectSpread2({}, Config), options);
            if (this.options.useExtendedSearch && false) {
              throw new Error(EXTENDED_SEARCH_UNAVAILABLE);
            }
            this._keyStore = new KeyStore(this.options.keys);
            this.setCollection(docs, index);
          }
          _createClass(Fuse3, [{
            key: "setCollection",
            value: function setCollection(docs, index) {
              this._docs = docs;
              if (index && !(index instanceof FuseIndex)) {
                throw new Error(INCORRECT_INDEX_TYPE);
              }
              this._myIndex = index || createIndex(this.options.keys, this._docs, {
                getFn: this.options.getFn,
                fieldNormWeight: this.options.fieldNormWeight
              });
            }
          }, {
            key: "add",
            value: function add(doc) {
              if (!isDefined(doc)) {
                return;
              }
              this._docs.push(doc);
              this._myIndex.add(doc);
            }
          }, {
            key: "remove",
            value: function remove() {
              var predicate = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
                return false;
              };
              var results = [];
              for (var i = 0, len = this._docs.length; i < len; i += 1) {
                var doc = this._docs[i];
                if (predicate(doc, i)) {
                  this.removeAt(i);
                  i -= 1;
                  len -= 1;
                  results.push(doc);
                }
              }
              return results;
            }
          }, {
            key: "removeAt",
            value: function removeAt(idx) {
              this._docs.splice(idx, 1);
              this._myIndex.removeAt(idx);
            }
          }, {
            key: "getIndex",
            value: function getIndex() {
              return this._myIndex;
            }
          }, {
            key: "search",
            value: function search2(query) {
              var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? -1 : _ref$limit;
              var _this$options = this.options, includeMatches = _this$options.includeMatches, includeScore = _this$options.includeScore, shouldSort = _this$options.shouldSort, sortFn = _this$options.sortFn, ignoreFieldNorm = _this$options.ignoreFieldNorm;
              var results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
              computeScore(results, {
                ignoreFieldNorm
              });
              if (shouldSort) {
                results.sort(sortFn);
              }
              if (isNumber(limit) && limit > -1) {
                results = results.slice(0, limit);
              }
              return format(results, this._docs, {
                includeMatches,
                includeScore
              });
            }
          }, {
            key: "_searchStringList",
            value: function _searchStringList(query) {
              var searcher = createSearcher(query, this.options);
              var records = this._myIndex.records;
              var results = [];
              records.forEach(function(_ref2) {
                var text = _ref2.v, idx = _ref2.i, norm2 = _ref2.n;
                if (!isDefined(text)) {
                  return;
                }
                var _searcher$searchIn = searcher.searchIn(text), isMatch = _searcher$searchIn.isMatch, score = _searcher$searchIn.score, indices = _searcher$searchIn.indices;
                if (isMatch) {
                  results.push({
                    item: text,
                    idx,
                    matches: [{
                      score,
                      value: text,
                      norm: norm2,
                      indices
                    }]
                  });
                }
              });
              return results;
            }
          }, {
            key: "_searchLogical",
            value: function _searchLogical(query) {
              var _this = this;
              var expression = parse(query, this.options);
              var evaluate = function evaluate2(node, item, idx) {
                if (!node.children) {
                  var keyId = node.keyId, searcher = node.searcher;
                  var matches = _this._findMatches({
                    key: _this._keyStore.get(keyId),
                    value: _this._myIndex.getValueForItemAtKeyId(item, keyId),
                    searcher
                  });
                  if (matches && matches.length) {
                    return [{
                      idx,
                      item,
                      matches
                    }];
                  }
                  return [];
                }
                var res = [];
                for (var i = 0, len = node.children.length; i < len; i += 1) {
                  var child = node.children[i];
                  var result = evaluate2(child, item, idx);
                  if (result.length) {
                    res.push.apply(res, _toConsumableArray(result));
                  } else if (node.operator === LogicalOperator.AND) {
                    return [];
                  }
                }
                return res;
              };
              var records = this._myIndex.records;
              var resultMap = {};
              var results = [];
              records.forEach(function(_ref3) {
                var item = _ref3.$, idx = _ref3.i;
                if (isDefined(item)) {
                  var expResults = evaluate(expression, item, idx);
                  if (expResults.length) {
                    if (!resultMap[idx]) {
                      resultMap[idx] = {
                        idx,
                        item,
                        matches: []
                      };
                      results.push(resultMap[idx]);
                    }
                    expResults.forEach(function(_ref4) {
                      var _resultMap$idx$matche;
                      var matches = _ref4.matches;
                      (_resultMap$idx$matche = resultMap[idx].matches).push.apply(_resultMap$idx$matche, _toConsumableArray(matches));
                    });
                  }
                }
              });
              return results;
            }
          }, {
            key: "_searchObjectList",
            value: function _searchObjectList(query) {
              var _this2 = this;
              var searcher = createSearcher(query, this.options);
              var _this$_myIndex = this._myIndex, keys = _this$_myIndex.keys, records = _this$_myIndex.records;
              var results = [];
              records.forEach(function(_ref5) {
                var item = _ref5.$, idx = _ref5.i;
                if (!isDefined(item)) {
                  return;
                }
                var matches = [];
                keys.forEach(function(key, keyIndex) {
                  matches.push.apply(matches, _toConsumableArray(_this2._findMatches({
                    key,
                    value: item[keyIndex],
                    searcher
                  })));
                });
                if (matches.length) {
                  results.push({
                    idx,
                    item,
                    matches
                  });
                }
              });
              return results;
            }
          }, {
            key: "_findMatches",
            value: function _findMatches(_ref6) {
              var key = _ref6.key, value = _ref6.value, searcher = _ref6.searcher;
              if (!isDefined(value)) {
                return [];
              }
              var matches = [];
              if (isArray(value)) {
                value.forEach(function(_ref7) {
                  var text2 = _ref7.v, idx = _ref7.i, norm3 = _ref7.n;
                  if (!isDefined(text2)) {
                    return;
                  }
                  var _searcher$searchIn2 = searcher.searchIn(text2), isMatch2 = _searcher$searchIn2.isMatch, score2 = _searcher$searchIn2.score, indices2 = _searcher$searchIn2.indices;
                  if (isMatch2) {
                    matches.push({
                      score: score2,
                      key,
                      value: text2,
                      idx,
                      norm: norm3,
                      indices: indices2
                    });
                  }
                });
              } else {
                var text = value.v, norm2 = value.n;
                var _searcher$searchIn3 = searcher.searchIn(text), isMatch = _searcher$searchIn3.isMatch, score = _searcher$searchIn3.score, indices = _searcher$searchIn3.indices;
                if (isMatch) {
                  matches.push({
                    score,
                    key,
                    value: text,
                    norm: norm2,
                    indices
                  });
                }
              }
              return matches;
            }
          }]);
          return Fuse3;
        }();
        Fuse$1.version = "6.6.2";
        Fuse$1.createIndex = createIndex;
        Fuse$1.parseIndex = parseIndex;
        Fuse$1.config = Config;
        {
          Fuse$1.parseQuery = parse;
        }
        {
          register(ExtendedSearch);
        }
        var Fuse2 = Fuse$1;
        return Fuse2;
      });
    }
  });

  // ns-hugo:/home/runner/work/hugo-mod-search/hugo-mod-search/assets/search/js/engine.ts
  var import_fuse = __toESM(require_fuse());
  var Engine = class {
    index;
    constructor(pages) {
      this.index = new import_fuse.default(pages, {
        keys: ["title", "summary"]
      });
    }
    search(query) {
      return this.index.search(query);
    }
  };

  // ns-hugo:/home/runner/work/hugo-mod-search/hugo-mod-search/assets/search/js/modal.ts
  var modals = {};
  var Modal = class {
    element;
    input;
    constructor(ele) {
      this.element = ele instanceof HTMLElement ? ele : document.querySelector(ele);
      console.log(ele);
      this.input = this.element.querySelector(".search-input");
    }
    hide() {
      document.body.classList.remove("search-modal-active");
      this.element.classList.remove("active");
    }
    show() {
      document.body.classList.add("search-modal-active");
      this.element.classList.add("active");
      this.input.focus();
    }
    static getOrCreate(ele) {
      if (!(ele in modals)) {
        modals[ele] = new Modal(ele);
      }
      return modals[ele];
    }
  };

  // ns-params:@params
  var params_default = { icons: { home: '\n  \n  \n  \n    \n  \n    <svg class="bi bi-housebi bi-house hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>\n</svg>', page: '\n  \n  \n  \n    \n  \n    <svg class="bi bi-file-earmark-richtextbi bi-file-earmark-richtext hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>\n  <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/>\n</svg>', section: '\n  \n  \n  \n    \n  \n    <svg class="bi bi-listbi bi-list hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>\n</svg>', taxonomy: '\n  \n  \n  \n    \n  \n    <svg class="bi bi-tagsbi bi-tags hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>\n  <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>\n</svg>', term: '\n  \n  \n  \n    \n  \n    <svg class="bi bi-tagbi bi-tag hi-svg-inline" fill="currentColor" height="1.5rem" viewBox="0 0 16 16" width="1.5rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"/>\n  <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"/>\n</svg>' }, indices: ["/hugo-mod-search/search.json", "/hugo-mod-search/zh-hans/search.json"] };

  // ns-hugo:/home/runner/work/hugo-mod-search/hugo-mod-search/assets/search/js/renderer.ts
  var Renderer = class {
    container;
    constructor(container) {
      this.container = document.querySelector(container);
    }
    clean() {
      this.container.innerHTML = "";
    }
    icon(page) {
      return page.kind in params_default.icons ? params_default.icons[page.kind] : params_default.icons.page;
    }
    taxonomies(page) {
      let v = "";
      for (let i in page.taxonomies) {
        v += `<span class="search-result-taxonomy">${page.taxonomies[i]}</span> `;
      }
      return v;
    }
    date(page) {
      if (page.date <= 0) {
        return "";
      }
      return new Date(page.date * 1e3).toLocaleDateString("en-US");
    }
    desc(page) {
      return page.summary;
    }
    render(results) {
      this.clean();
      let temp = "";
      for (let i in results) {
        const result = results[i];
        temp += `<a href="${result.item.url}" class="search-result">
  <div class="search-result-icon">${this.icon(result.item)}</div>
  <div class="search-result-content">
    <div class="search-result-title">${result.item.title}</div>
    <div class="search-result-desc">${this.desc(result.item)}</div>
  </div>
  <div class="search-result-meta">
    <span class="search-result-date">${this.date(result.item)}</span>
  </div>
</a>`;
      }
      this.container.innerHTML = temp;
    }
  };

  // <stdin>
  (() => {
    "use strict";
    let engine;
    const initEngine = () => {
      const promises = [];
      for (const i in params_default.indices) {
        const promise = fetch(params_default.indices[i]).then((resp) => resp.json());
        promises.push(promise);
      }
      Promise.all(promises).then((resp) => {
        let pages = resp[0];
        for (let i = 1; i < resp.length; i++) {
          pages = pages.concat(resp[i]);
        }
        engine = new Engine(pages);
      });
    };
    initEngine();
    let timeoutId = 0;
    const stallThreshold = 300;
    const renderer = new Renderer(".search-results");
    document.addEventListener("DOMContentLoaded", () => {
      const form = document.querySelector(".search-form");
      form?.addEventListener("submit", (e) => {
        e.preventDefault();
      });
      const input = document.querySelector(".search-input");
      input.addEventListener("keyup", () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          const results = engine.search(input.value);
          renderer.render(results);
        }, stallThreshold);
      });
      document.querySelectorAll(".search-modal-toggle").forEach((toggle) => {
        toggle.addEventListener("click", () => {
          Modal.getOrCreate(toggle.getAttribute("data-target") ?? ".search-modal").show();
        });
      });
      document.querySelectorAll(".search-modal-close").forEach((toggle) => {
        toggle.addEventListener("click", () => {
          Modal.getOrCreate(toggle.closest(".search-modal")).hide();
        });
      });
      document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          document.querySelectorAll(".search-modal.active").forEach((modal) => {
            Modal.getOrCreate(modal).hide();
          });
        }
      });
    });
  })();
})();
