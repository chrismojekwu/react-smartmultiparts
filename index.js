'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var TextArea = function TextArea(props) {
  var renderDefault = function renderDefault() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("label", {
      htmlFor: "comments",
      className: "form-label"
    }, "Comments:"), /*#__PURE__*/React__default["default"].createElement("textarea", {
      name: "textarea-".concat(props.index),
      className: "comments form-text-area",
      placeholder: "Comments",
      id: "smartparts-comments-".concat(props.index),
      "data-testid": "smartparts-comments-".concat(props.index)
    }));
  };

  var renderReq = function renderReq() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("label", {
      htmlFor: "comments",
      className: "form-label"
    }, "Comments:"), /*#__PURE__*/React__default["default"].createElement("textarea", {
      name: "textarea-".concat(props.index),
      className: "comments form-text-area",
      placeholder: "Comments",
      id: "smartparts-comments-".concat(props.index),
      "data-testid": "smartparts-comments-".concat(props.index),
      required: true
    }));
  };

  return props.required ? renderReq() : renderDefault();
};

var TextInput = function TextInput(props) {
  var label = props.field.replace("!", "");

  var renderDefault = function renderDefault() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("label", {
      htmlFor: label,
      className: "form-label"
    }, label, ":"), /*#__PURE__*/React__default["default"].createElement("input", {
      type: "text",
      className: "form-text-input",
      name: "".concat(label.toLowerCase(), "-").concat(props.index),
      id: "smartparts-text-input-".concat(props.index),
      "data-testid": "smartparts-text-input-".concat(props.index)
    }));
  };

  var renderReq = function renderReq() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("label", {
      htmlFor: label,
      className: "form-label"
    }, label, ":"), /*#__PURE__*/React__default["default"].createElement("input", {
      type: "text",
      className: "form-text-input",
      name: "".concat(label.toLowerCase(), "-").concat(props.index),
      id: "smartparts-text-input-".concat(props.index),
      "data-testid": "smartparts-text-input-".concat(props.index),
      required: true
    }));
  };

  return props.required ? renderReq() : renderDefault();
};

var Date = function Date(props) {
  var _useState = React.useState("2099-01-01"),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var renderDefault = function renderDefault() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("label", {
      htmlFor: "date",
      className: "form-label"
    }, "Date:"), /*#__PURE__*/React__default["default"].createElement("input", {
      type: "date",
      name: "date-".concat(props.index),
      id: "smartparts-date-input-".concat(props.index),
      "data-testid": "smartparts-date-input-".concat(props.index),
      value: date,
      onChange: function onChange(e) {
        return setDate(e.target.value);
      },
      className: "form-date-input"
    }));
  };

  var renderReq = function renderReq() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("label", {
      htmlFor: "date",
      className: "form-label"
    }, "Date:"), /*#__PURE__*/React__default["default"].createElement("input", {
      type: "date",
      name: "date-".concat(props.index),
      id: "smartparts-date-input-".concat(props.index),
      "data-testid": "smartparts-date-input-".concat(props.index),
      value: date,
      onChange: function onChange(e) {
        return setDate(e.target.value);
      },
      className: "form-date-input",
      required: true
    }));
  };

  return props.required ? renderReq() : renderDefault();
};

var Select = function Select(props) {
  var _useState = React.useState(props.obj.placeholder),
      _useState2 = _slicedToArray(_useState, 2);
      _useState2[0];
      var setValue = _useState2[1];

  var generateOptions = function generateOptions() {
    return props.obj.select.map(function (option, index) {
      return /*#__PURE__*/React__default["default"].createElement("option", {
        value: option,
        id: "smartparts-select-option-".concat(props.index, "-").concat(index),
        className: "form-select-option",
        key: "select-option-".concat(index)
      }, option);
    });
  };

  var handleChange = function handleChange(e) {
    setValue(e.target.value);
  };

  var renderDefault = function renderDefault() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("label", {
      htmlFor: "select-".concat(props.index),
      className: "form-label"
    }, props.obj.query), /*#__PURE__*/React__default["default"].createElement("select", {
      "data-testid": "smartparts-select-input-".concat(props.index),
      id: "smartparts-select-input-".concat(props.index),
      name: "select-".concat(props.index),
      className: "form-select",
      onChange: handleChange
    }, /*#__PURE__*/React__default["default"].createElement("option", {
      className: "form-select-option",
      key: "select-option-default",
      defaultValue: true,
      value: ""
    }, props.obj.placeholder), generateOptions()));
  };

  var renderReq = function renderReq() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("label", {
      htmlFor: "select-".concat(props.index),
      className: "form-label"
    }, props.obj.query), /*#__PURE__*/React__default["default"].createElement("select", {
      "data-testid": "smartparts-select-input-".concat(props.index),
      id: "smartparts-select-input-".concat(props.index),
      name: "select-".concat(props.index),
      className: "form-select",
      onChange: handleChange,
      required: true
    }, /*#__PURE__*/React__default["default"].createElement("option", {
      defaultValue: true,
      value: ""
    }, props.obj.placeholder), generateOptions()));
  };

  return props.required ? renderReq() : renderDefault();
};

var Range = function Range(props) {
  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleLabelSide = function handleLabelSide() {
    if (props.rangeLeftSide) {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("label", {
        name: "range-".concat(props.index),
        className: "form-label",
        id: "smartparts-range-label"
      }, props.label), /*#__PURE__*/React__default["default"].createElement("span", {
        className: "form-range-value"
      }, value), /*#__PURE__*/React__default["default"].createElement("input", {
        type: "range",
        className: "form-range-input",
        name: "range-".concat(props.index),
        id: "smartparts-range-input-".concat(props.index),
        min: props.min,
        max: props.max,
        step: props.step,
        value: value,
        onChange: function onChange(e) {
          return setValue(e.target.value);
        },
        "data-testid": "smartparts-date-input-".concat(props.index)
      }));
    } else {
      return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("input", {
        type: "range",
        className: "form-range-input",
        name: "range-".concat(props.index),
        id: "smartparts-range-input-".concat(props.index),
        min: props.min,
        max: props.max,
        step: props.step,
        value: value,
        onChange: function onChange(e) {
          return setValue(e.target.value);
        },
        "data-testid": "smartparts-date-input-".concat(props.index)
      }), /*#__PURE__*/React__default["default"].createElement("label", {
        name: "range-".concat(props.index),
        className: "form-label",
        id: "smartparts-range-label"
      }, props.label), /*#__PURE__*/React__default["default"].createElement("span", {
        className: "form-range-value"
      }, value));
    }
  };

  return handleLabelSide();
};

var CheckBox = function CheckBox(props) {
  var inputValue = props.value;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var _useState3 = React.useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var handleCheck = function handleCheck() {
    if (checked === false) {
      setChecked(true);
      setValue(inputValue);
    } else {
      setChecked(false);
      setValue("");
    }
  };

  var renderReq = function renderReq(req) {
    return req ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("input", {
      type: "checkbox",
      className: "form-checkbox",
      id: "smartparts-checkbox-".concat(props.index),
      "data-testid": "smartparts-checkbox-".concat(props.index),
      name: "checkbox-".concat(props.index),
      value: value,
      checked: checked,
      onChange: function onChange() {
        return handleCheck();
      },
      required: true
    }), /*#__PURE__*/React__default["default"].createElement("label", {
      className: "form-checkbox-label",
      htmlFor: "checkbox-".concat(props.index)
    }, props.value)) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("input", {
      type: "checkbox",
      className: "form-checkbox",
      id: "smartparts-checkbox-".concat(props.index),
      "data-testid": "smartparts-checkbox-".concat(props.index),
      name: "checkbox-".concat(props.index),
      value: value,
      checked: checked,
      onChange: function onChange() {
        return handleCheck();
      }
    }), /*#__PURE__*/React__default["default"].createElement("label", {
      className: "form-checkbox-label",
      htmlFor: "checkbox-".concat(props.index)
    }, props.value));
  };

  return renderReq(props.req);
};

var ObjectCheckbox = function ObjectCheckbox(props) {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      checked = _useState2[0],
      setChecked = _useState2[1];

  var handleCheck = function handleCheck(e) {
    if (checked === false) {
      setChecked(true);
      handleString(e.target.value, true);
    } else {
      setChecked(false);
      handleString(e.target.value, false);
    }
  };

  var handleString = function handleString(string, checked) {
    var arr = props.data.split("&=");

    if (checked) {
      arr.push(string);
    } else {
      arr.splice(arr.lastIndexOf(string), 1);
    }
    var newData = arr.join("&=");
    props.setData(newData);
  };

  return /*#__PURE__*/React__default["default"].createElement("div", null, /*#__PURE__*/React__default["default"].createElement("input", {
    type: "checkbox",
    className: "form-checkbox-object-checkbox",
    id: "smartparts-object-checkbox",
    "data-testid": "smartparts-object-checkbox",
    value: props.value,
    checked: checked,
    onChange: function onChange(e) {
      return handleCheck(e);
    }
  }), /*#__PURE__*/React__default["default"].createElement("label", {
    className: "form-checkbox-object-label",
    htmlFor: "smartparts-object-checkbox-".concat(props.index)
  }, props.value));
};

var CheckboxObject = function CheckboxObject(props) {
  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("span", {
    "data-testid": "smartparts-checkbox-object-query",
    id: "smartparts-checkbox-object-query",
    className: "form-checkbox-object-query",
    style: {
      fontWeight: "bold"
    }
  }, props.checks.query), /*#__PURE__*/React__default["default"].createElement("input", {
    "data-testid": "smartparts-checkbox-object-input",
    id: "smartparts-checkbox-object-input",
    type: "hidden",
    value: data === "" ? "" : data,
    name: "checkbox-object-".concat(props.index)
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "form-checkbox-object-input-div"
  }, props.checks.boxes.map(function (x, i) {
    return /*#__PURE__*/React__default["default"].createElement(ObjectCheckbox, {
      value: x,
      index: i,
      data: data,
      key: "object-checkbox-".concat(i),
      setData: setData
    });
  })));
};

var Radios = function Radios(props) {
  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleChecked = function handleChecked(e, index) {
    var radioInputs = document.getElementsByClassName("smartparts-radio-query-radio-".concat(props.index));

    for (var i = 0; i < radioInputs.length; i++) {
      if (i === index) {
        radioInputs[i].checked = true;
      } else {
        radioInputs[i].checked = false;
      }
    }
    setValue(e.target.value);
  };

  var renderRadios = function renderRadios() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("input", {
      "data-testid": "smartparts-radio-query-input",
      id: "smartparts-radio-query-input",
      type: "hidden",
      value: value,
      name: "radio-query-".concat(props.index)
    }), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "form-radio-query"
    }, props.obj.query), /*#__PURE__*/React__default["default"].createElement("div", {
      className: "form-radio-input-div"
    }, props.obj.options.map(function (x, i) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        key: "radio-query-radio-".concat(props.index, "-").concat(i)
      }, /*#__PURE__*/React__default["default"].createElement("input", {
        "data-testid": "smartparts-radio-query-radio",
        id: "smartparts-radio-query-radio-".concat(props.index),
        className: "smartparts-radio-query-radio-".concat(props.index, " form-radio-radio"),
        type: "radio",
        name: "radios-".concat(props.index),
        value: x,
        onClick: function onClick(e) {
          return handleChecked(e, i);
        },
        tabIndex: "0"
      }), /*#__PURE__*/React__default["default"].createElement("label", null, x));
    })));
  };

  return renderRadios();
};

function FormFields(props) {
  var selectObjs = props.select;
  var selectCount = 0;
  var checkboxObjs = props.checkboxes;
  var checkboxObjCount = 0;
  var radioObjs = props.radios;
  var radioCount = 0;

  var generateSelect = function generateSelect(selectObj, index, field) {
    var req = field.includes("!") ? true : false;
    if (props.formTwo === undefined) selectCount++;
    return /*#__PURE__*/React__default["default"].createElement(Select, {
      obj: selectObj,
      index: index,
      required: req,
      key: "select-input-".concat(index)
    });
  };

  var generateRadios = function generateRadios(radioObj, index) {
    if (props.formTwo === undefined) radioCount++;
    return /*#__PURE__*/React__default["default"].createElement(Radios, {
      obj: radioObj,
      index: index,
      key: "radio-input-".concat(index)
    });
  };

  var generateCheckbox = function generateCheckbox(checkboxObj, index, field, objBool) {
    if (field.length === 8 || props.formTwo && objBool) {
      if (props.formTwo === undefined) {
        checkboxObjCount++;
      }

      return /*#__PURE__*/React__default["default"].createElement(CheckboxObject, {
        index: index,
        checks: checkboxObj,
        key: "checkbox-object-".concat(index)
      });
    } else {
      var value;
      var req = false;

      if (field[8] === "!") {
        value = field.slice(10, -1);
        req = true;
      } else {
        value = field.slice(9, -1);
      }
      return /*#__PURE__*/React__default["default"].createElement(CheckBox, {
        index: index,
        value: value,
        key: "checkbox-input-".concat(index),
        req: req
      });
    }
  };

  var generateRange = function generateRange(index, field) {
    var values = field.slice(6, -1).split("_");
    var side = values[4] !== undefined && values[4] === "<" ? true : false;
    return /*#__PURE__*/React__default["default"].createElement(Range, {
      index: index,
      min: values[0],
      max: values[1],
      step: values[2],
      label: values[3],
      rangeLeftSide: side,
      key: "range-input-".concat(index)
    });
  };

  var renderFields = function renderFields() {
    return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, props.fields.map(function (field, index) {
      var req = "";

      if (field.trim().match(/comments/gi)) {
        req = field.trim().includes("!");
        return /*#__PURE__*/React__default["default"].createElement(TextArea, {
          index: index,
          required: req,
          key: "text-area-".concat(index)
        });
      } else if (field.trim().match(/date/gi) && field.trim().length <= 5) {
        req = field.trim().includes("!");
        return /*#__PURE__*/React__default["default"].createElement(Date, {
          required: req,
          index: index,
          key: "date-input-".concat(index)
        });
      } else if (field.trim().match(/range/gi)) {
        return generateRange(index, field.trim());
      } else if (field.trim().match(/radios/gi) && field.trim().length <= 9) {
        if (props.formTwo !== undefined && props.formTwo) radioCount = parseInt(field.trim().slice(7, -1));
        return radioObjs[radioCount] === undefined ? "" : generateRadios(radioObjs[radioCount], index, field.trim());
      } else if (field.trim().match(/select/gi)) {
        if (props.formTwo !== undefined && props.formTwo) selectCount = parseInt(field.trim().slice(7, -1));
        return selectObjs[selectCount] === undefined ? "" : generateSelect(selectObjs[selectCount], index, field.trim());
      } else if (field.trim().match(/checkbox/gi)) {
        var chkbxObj = false;

        if (props.formTwo && Number.isInteger(parseInt(field[9])) && field.slice(-1) === "]") {
          chkbxObj = true;
          checkboxObjCount = parseInt(field.split("").filter(function (x) {
            return /[0-9]/.test(x);
          }).join(""));
        }

        var activeCheckboxObj = checkboxObjs === undefined ? null : checkboxObjs[checkboxObjCount];
        return generateCheckbox(activeCheckboxObj, index, field.trim(), chkbxObj);
      } else if (field.trim().match(/filename/gi)) {
        return /*#__PURE__*/React__default["default"].createElement("span", {
          id: "smartparts-filename-span-".concat(index),
          className: "form-filename",
          key: "filename-".concat(index)
        }, "Filename: ", props.filename);
      } else if (field === "") {
        return "";
      } else {
        req = field.trim().includes("!");
        return /*#__PURE__*/React__default["default"].createElement(TextInput, {
          field: field,
          index: index,
          required: req,
          key: "text-input-".concat(index)
        });
      }
    }));
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, renderFields());
}

var fileTypes = function fileTypes(arr) {
  var list = arr.map(function (x, i) {
    if (x === "") return "";else return ".".concat(x);
  });
  return list.join(" ");
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".smartparts-container {\n    text-align: left;\n    width: fit-content;\n}\ninput[type^=\"text\"].form-fileinput, textarea#smartparts-comments {\n  width: 75%;\n}\n.smartparts-logo-container {\n  text-align: center;\n}\n.smartparts-logo-container .form-logo-img {\n  margin: auto;\n  height: 30vh;\n  width: auto;\n  text-align: center;\n}\n.smartparts-error {\n  display: block;\n}\n.smartparts-entry-form > * {\n  display: block;\n  font-size: 16px;\n}\n#smartparts-file {\n  font-weight: bold;\n  width: 100%;\n}\n#smartparts-submit {\n  margin-top: 10px;\n}";
styleInject(css_248z);

var FormOne = function FormOne(props) {
  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      fileType = _useState2[0],
      setFileType = _useState2[1];

  var _useState3 = React.useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      fileName = _useState4[0],
      setFileName = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      disabled = _useState6[0],
      setDisabled = _useState6[1]; //function to render correct form component for file type


  var detectFile = function detectFile() {
    if (fileType === "") return "";

    if (Object.keys(props.fileTypes).length === 0 || props.fields === []) {
      if (props.textConfig === undefined || props.textConfig.errorMessage === "") {
        return /*#__PURE__*/React__default["default"].createElement("span", {
          id: "smartparts-error"
        }, "Internal Error");
      } else {
        return /*#__PURE__*/React__default["default"].createElement("span", {
          id: "smartparts-error"
        }, props.textConfig.errorMessage);
      }
    }

    var ext = fileType[0].name ? fileType[0].name.split(".")[1] : "";
    var re = new RegExp(props.fileTypes.join("|"), "gi");
    if (!ext) return props.textConfig !== undefined ? props.textConfig.invalidExt : "Invalid Extension";

    if (re.test(ext)) {
      return /*#__PURE__*/React__default["default"].createElement(FormFields, {
        fields: props.fields,
        filename: fileName,
        select: props.select,
        checkboxes: props.checkboxes,
        radios: props.radios
      });
    } else {
      setFileType("INVALID");
      return "File type not supported.";
    }
  };

  var dataReturn = function dataReturn(e) {
    e.preventDefault();
    if (props.fileTypes.length === 0 || props.fileTypes === undefined || props.fileTypes === null) return false;
    var data = new FormData();
    data.append('file', fileType[0]);

    for (var i = 0; i < props.fields.length; i++) {
      var fieldNameCleaned = props.fields[i].replace("!", "");

      if (props.fields[i] === "") {
        continue;
      } else if (new RegExp('filename', 'gi').test(fieldNameCleaned) === true) {
        data.append('filename', fileName);
      } else if (new RegExp('comments', 'gi').test(fieldNameCleaned) === true) {
        data.append('comments', e.target["textarea-".concat(i)].value);
      } else if (new RegExp('date', 'gi').test(fieldNameCleaned) === true && fieldNameCleaned.length === 4) {
        data.append('date', e.target["date-".concat(i)].value);
      } else if (new RegExp('radios', 'gi').test(fieldNameCleaned) === true) {
        var val = e.target["radio-query-".concat(i)] === undefined ? "" : e.target["radio-query-".concat(i)].value;

        if (val !== "") {
          data.append("radio_query_".concat(i), e.target["radio-query-".concat(i)].value);
        }
      } else if (new RegExp('select', 'gi').test(fieldNameCleaned) === true) {
        var _val = e.target["select-".concat(i)] === undefined ? "" : e.target["select-".concat(i)].value;

        if (_val !== "") {
          data.append("select_".concat(i), e.target["select-".concat(i)].value);
        }
      } else if (new RegExp('range', 'gi').test(fieldNameCleaned) === true) {
        data.append("range_".concat(i), e.target["range-".concat(i)].value);
      } else if (new RegExp('checkbox', 'gi').test(fieldNameCleaned) === true) {
        var _val2 = e.target["checkbox-object-".concat(i)] !== undefined ? e.target["checkbox-object-".concat(i)].value : e.target["checkbox-".concat(i)] !== undefined ? e.target["checkbox-".concat(i)].value : "";

        if (fieldNameCleaned.length === 8 && _val2 !== "") {
          if (_val2 === "&=" || _val2 === "") {
            continue;
          } else {
            data.append("checkboxObject_".concat(i), _val2);
          }
        } else if (_val2 !== "") {
          data.append("checkbox_".concat(i), _val2);
        }
      } else {
        data.append(fieldNameCleaned.toLowerCase(), e.target["".concat(fieldNameCleaned.toLowerCase(), "-").concat(i)].value);
      }
    }
    props.cb(data);
    setDisabled(true);
  };

  var handleFile = function handleFile(file) {
    if (file[0] === undefined || file[0] === null) {
      return null;
    } else return file;
  };

  var handleDisabled = function handleDisabled() {
    var message = props.textConfig !== undefined ? props.textConfig.disabled : "Thanks";
    return /*#__PURE__*/React__default["default"].createElement("span", {
      className: "smartparts-disabled-message"
    }, message);
  };

  var renderLogo = function renderLogo(path) {
    return /*#__PURE__*/React__default["default"].createElement("img", {
      src: path,
      className: "form-logo-img",
      alt: props.textConfig === undefined ? "Company Logo" : props.textConfig.logoAlt
    });
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "smartparts-container form-body"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "smartparts-logo-container"
  }, props.logo ? renderLogo(props.logo) : ""), /*#__PURE__*/React__default["default"].createElement("p", null, props.textConfig !== undefined ? props.textConfig.typeLabel : "Supported File Types: ", fileTypes(props.fileTypes)), /*#__PURE__*/React__default["default"].createElement("form", {
    onSubmit: function onSubmit(e) {
      return dataReturn(e);
    },
    className: "smartparts-entry-form",
    encType: "multipart/form-data",
    method: "post",
    name: "upload",
    disabled: disabled
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: "file form-label"
  }, props.textConfig !== undefined ? props.textConfig.inputLabel : "File:"), /*#__PURE__*/React__default["default"].createElement("input", {
    id: "smartparts-file",
    "data-testid": "smartparts-file",
    type: "file",
    name: "upload",
    className: "form-fileinput",
    onChange: function onChange(e) {
      var file = handleFile(e.target.files);

      if (file === null) {
        return false;
      } else {
        setFileType(file);
        setFileName(file[0].name);
      }
    }
  }), /*#__PURE__*/React__default["default"].createElement("br", null), !disabled ? detectFile() : handleDisabled(), /*#__PURE__*/React__default["default"].createElement("input", {
    id: "smartparts-submit",
    type: "submit",
    value: props.textConfig === undefined ? "Submit" : props.textConfig.submitLabel,
    className: "button form-button",
    disabled: disabled
  }))));
};

var FormTwo = function FormTwo(props) {
  var _useState = React.useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      fileType = _useState2[0],
      setFileType = _useState2[1];

  var _useState3 = React.useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      fileName = _useState4[0],
      setFileName = _useState4[1];

  var _useState5 = React.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      disabled = _useState6[0],
      setDisabled = _useState6[1]; //function to render correct form component for file type


  var detectFile = function detectFile() {
    if (fileType === "") return "";

    if (Object.keys(props.fileTypes).length === 0) {
      if (props.textConfig === undefined || props.textConfig.errorMessage === "") {
        return /*#__PURE__*/React__default["default"].createElement("span", {
          id: "smartparts-error"
        }, "Internal Error");
      } else {
        return /*#__PURE__*/React__default["default"].createElement("span", {
          id: "smartparts-error"
        }, props.textConfig.errorMessage);
      }
    }

    var ext = fileType[0].name ? fileType[0].name.split(".")[1].toLowerCase() : "";
    var re = new RegExp(Object.keys(props.fileTypes).join("|"), "gi");
    if (!ext) return props.textConfig !== undefined ? props.textConfig.invalidExt : "Invalid Extension";

    if (re.test(ext)) {
      return /*#__PURE__*/React__default["default"].createElement(FormFields, {
        fields: props.fileTypes[ext],
        filename: fileName,
        select: props.select,
        checkboxes: props.checkboxes,
        radios: props.radios,
        formTwo: true
      });
    } else {
      setFileType("INVALID");
      return "File type not supported.";
    }
  };

  var upload = function upload(e) {
    e.preventDefault();
    if (Object.keys(props.fileTypes).length === 0 || props.fileTypes === undefined || props.fileTypes === null) return false;
    var ext = fileType[0].name ? fileType[0].name.split(".")[1].toLowerCase() : "";
    var data = new FormData();
    data.append('file', fileType[0]);
    var fieldArr = props.fileTypes[ext];

    for (var i = 0; i < fieldArr.length; i++) {
      var fieldNameCleaned = fieldArr[i].replace("!", "");

      if (fieldArr[i] === "") {
        continue;
      } else if (new RegExp('filename', 'gi').test(fieldNameCleaned) === true) {
        data.append('filename', fileName);
      } else if (new RegExp('comments', 'gi').test(fieldNameCleaned) === true) {
        data.append('comments', e.target["textarea-".concat(i)].value);
      } else if (new RegExp('date', 'gi').test(fieldNameCleaned) === true) {
        data.append('date', e.target["date-".concat(i)].value);
      } else if (new RegExp('radios', 'gi').test(fieldNameCleaned) === true) {
        var val = e.target["radio-query-".concat(i)] === undefined ? "" : e.target["radio-query-".concat(i)].value;

        if (val !== "") {
          data.append("radio_query_".concat(i), e.target["radio-query-".concat(i)].value);
        }
      } else if (new RegExp('select', 'gi').test(fieldNameCleaned) === true) {
        var _val = e.target["select-".concat(i)] === undefined ? "" : e.target["select-".concat(i)].value;

        if (_val !== "") {
          data.append("select_".concat(i), e.target["select-".concat(i)].value);
        }
      } else if (new RegExp('range', 'gi').test(fieldNameCleaned) === true) {
        data.append("range_".concat(i), e.target["range-".concat(i)].value);
      } else if (new RegExp('checkbox', 'gi').test(fieldNameCleaned) === true) {
        var _val2 = e.target["checkbox-object-".concat(i)] !== undefined ? e.target["checkbox-object-".concat(i)].value : e.target["checkbox-".concat(i)] !== undefined ? e.target["checkbox-".concat(i)].value : "";

        if (Number.isInteger(parseInt(fieldNameCleaned[9])) && fieldNameCleaned.slice(-1) === "]" && _val2 !== "") {
          if (_val2 === "&=" || _val2 === "") {
            continue;
          } else {
            data.append("checkboxObject_".concat(i), _val2);
          }
        } else if (_val2 !== "") {
          data.append("checkbox_".concat(i), _val2);
        }
      } else data.append(fieldNameCleaned.toLowerCase(), e.target["".concat(fieldNameCleaned.toLowerCase(), "-").concat(i)].value);
    }
    props.cb(data);
    setDisabled(true);
  };

  var handleFile = function handleFile(file) {
    if (file[0] === undefined || file[0] === null) {
      return null;
    } else return file;
  };

  var handleDisabled = function handleDisabled() {
    var message = props.textConfig !== undefined ? props.textConfig.disabled : "Thanks";
    return /*#__PURE__*/React__default["default"].createElement("span", {
      className: "smartparts-disabled-message"
    }, message);
  };

  var renderLogo = function renderLogo(path) {
    return /*#__PURE__*/React__default["default"].createElement("img", {
      src: path,
      className: "form-logo-img",
      alt: props.textConfig === undefined ? "Company Logo" : props.textConfig.logoAlt
    });
  };

  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "smartparts-container form-body"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "smartparts-logo-container"
  }, props.logo ? renderLogo(props.logo) : ""), /*#__PURE__*/React__default["default"].createElement("p", null, props.textConfig !== undefined ? props.textConfig.typeLabel : "Supported File Types: ", Object.keys(props.fileTypes) !== undefined ? fileTypes(Object.keys(props.fileTypes)) : ""), /*#__PURE__*/React__default["default"].createElement("form", {
    onSubmit: function onSubmit(e) {
      return upload(e);
    },
    className: "smartparts-entry-form",
    encType: "multipart/form-data",
    method: "post",
    name: "upload",
    disabled: disabled
  }, /*#__PURE__*/React__default["default"].createElement("label", {
    htmlFor: "file form-label"
  }, props.textConfig !== undefined ? props.textConfig.inputLabel : "File:"), /*#__PURE__*/React__default["default"].createElement("input", {
    id: "smartparts-file",
    "data-testid": "smartparts-file",
    type: "file",
    name: "upload",
    className: "form-fileinput",
    onChange: function onChange(e) {
      var file = handleFile(e.target.files);

      if (file === null) {
        return false;
      } else {
        setFileType(file);
        setFileName(file[0].name);
      }
    }
  }), /*#__PURE__*/React__default["default"].createElement("br", null), !disabled ? detectFile() : handleDisabled(), /*#__PURE__*/React__default["default"].createElement("input", {
    id: "smartparts-submit",
    type: "submit",
    className: "button form-button",
    disabled: disabled,
    value: props.textConfig === undefined ? "Submit" : props.textConfig.submitLabel
  }))));
};

exports.FormOne = FormOne;
exports.FormTwo = FormTwo;
