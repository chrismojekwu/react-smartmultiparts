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
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

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

function FormFields(props) {
  var renderFields = function renderFields() {
    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, props.fields.map(function (field, index) {
      if (field.match(/comments/gi)) {
        return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, {
          key: "textarea-" + index.toString()
        }, /*#__PURE__*/React__default['default'].createElement("label", {
          htmlFor: "comments form-label"
        }, "Comments:"), /*#__PURE__*/React__default['default'].createElement("textarea", {
          name: "comments",
          className: "comments form-textarea",
          placeholder: "Additional Comments",
          id: "comments"
        }));
      } else if (field.match(/filename/gi)) {
        return /*#__PURE__*/React__default['default'].createElement("span", {
          id: "filename-span form-filename",
          key: index
        }, "Filename: ", props.filename);
      } else {
        return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, {
          key: index
        }, /*#__PURE__*/React__default['default'].createElement("label", {
          htmlFor: field,
          className: "form-label"
        }, field, ":"), /*#__PURE__*/React__default['default'].createElement("input", {
          type: "text form-textinput",
          name: field,
          id: field
        }));
      }
    }));
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, renderFields());
}

var Select = function Select(props) {
  var generateOptions = function generateOptions() {
    return props.obj.select.map(function (options, index) {
      return /*#__PURE__*/React__default['default'].createElement("option", {
        value: options,
        id: options,
        key: index
      }, options);
    });
  };

  var handleChange = function handleChange(e) {
    props.setValue(e.target.value);
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("label", {
    htmlFor: "select form-label"
  }, props.obj.query), /*#__PURE__*/React__default['default'].createElement("select", {
    name: "select form-select",
    onChange: handleChange
  }, /*#__PURE__*/React__default['default'].createElement("option", {
    defaultValue: true
  }, props.obj.placeholder), generateOptions()));
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

var css_248z = ".container {\n    text-align: left;\n    width: fit-content;\n}\ninput[type^=\"text\"], textarea#comments {\n  width: 75%;\n}\n.logo {\n  height: 250px;\n  width: auto;\n  filter: invert(1) hue-rotate(210deg);\n  margin: auto;\n}\n.loader {\n  margin: auto;\n  transition: 0.8s;\n  height: 50px;\n}\n.error {\n  display: block;\n}\n.entry-form > * {\n  display: block;\n  font-size: 16px;\n}\n#file {\n  color: red;\n  font-weight: bolder;\n}\n.comments {\n  height: 100px;\n  width: 50%;\n}\n#submit {\n  margin-top: 10px;\n}\n";
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

  var _useState5 = React.useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      select = _useState6[0],
      setSelect = _useState6[1];

  var _useState7 = React.useState(""),
      _useState8 = _slicedToArray(_useState7, 2),
      selectValue = _useState8[0],
      setSelectValue = _useState8[1]; //function to render correct form component for file type


  var detectFile = function detectFile() {
    if (fileType === "") return "";
    var ext = fileType[0].name ? fileType[0].name.split(".")[1] : "";
    var re = new RegExp(props.fileTypes.join("|"), "gi");
    if (!ext) return "Invalid Extention";

    if (re.test(ext) === true) {
      return /*#__PURE__*/React__default['default'].createElement(FormFields, {
        fields: props.fields,
        filename: fileName
      });
    } else setFileType("INVALID");

    return "File type not supported.";
  };

  var dataReturn = function dataReturn(e) {
    e.preventDefault();
    var data = new FormData();
    data.append('file', fileType[0]); //check for select prop and add value

    if (props.select && select === true) {
      data.append(props.select.query, selectValue);
    }

    for (var i = 0; i < props.fields.length; i++) {
      if (new RegExp('filename', 'gi').test(props.fields[i]) === true) {
        data.append('filename', fileName);
      } else data.append(props.fields[i], e.target[props.fields[i]].value);
    }
    props.cb(data);
  };

  var handleFile = function handleFile(file) {
    if (file[0] === undefined || file[0] === null) {
      return null;
    } else return file;
  };

  var generateSelect = function generateSelect(selectObj) {
    return /*#__PURE__*/React__default['default'].createElement(Select, {
      obj: selectObj,
      setValue: setSelectValue
    });
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "container form-body"
  }, /*#__PURE__*/React__default['default'].createElement("p", null, "Supported File Types: ", props.fileTypes.map(function (x) {
    return ".".concat(x);
  }).join(" ")), /*#__PURE__*/React__default['default'].createElement("form", {
    onSubmit: function onSubmit(e) {
      return dataReturn(e);
    },
    className: "entry-form",
    encType: "multipart/form-data",
    method: "post",
    name: "upload"
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    htmlFor: "file form-label"
  }, "File:"), /*#__PURE__*/React__default['default'].createElement("input", {
    id: "file",
    type: "file",
    name: "upload",
    className: "form-fileinput",
    onChange: function onChange(e) {
      var file = handleFile(e.target.files);

      if (file === null) {
        return false;
      } else {
        setFileType(file);
        setFileName(file[0].name); //checks for Select prop

        if (props.select) setSelect(true);
      }
    }
  }), /*#__PURE__*/React__default['default'].createElement("br", null), select === true ? generateSelect(props.select) : "", detectFile(), /*#__PURE__*/React__default['default'].createElement("input", {
    id: "submit",
    type: "submit",
    className: "button form-button"
  })), /*#__PURE__*/React__default['default'].createElement("br", null)));
};

var stringInArr = function stringInArr(arr, ext) {
  var x;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === ext) {
      x = true;
      break;
    } else x = false;
  }
  return x;
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

  var _useState5 = React.useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      select = _useState6[0],
      setSelect = _useState6[1];

  var _useState7 = React.useState(""),
      _useState8 = _slicedToArray(_useState7, 2),
      selectValue = _useState8[0],
      setSelectValue = _useState8[1]; //function to render correct form component for file type


  var detectFile = function detectFile() {
    if (fileType === "") return "";
    var ext = fileType[0].name ? fileType[0].name.split(".")[1].toLowerCase() : "";
    var re = new RegExp(Object.keys(props.fileTypes).join("|"), "gi");
    if (!ext) return "Invalid Extention";

    if (re.test(ext) === true) {
      return /*#__PURE__*/React__default['default'].createElement(FormFields, {
        fields: props.fileTypes[ext],
        filename: fileName
      });
    } else setFileType("INVALID");

    return "File type not supported.";
  };

  var upload = function upload(e) {
    e.preventDefault();
    var ext = fileType[0].name ? fileType[0].name.split(".")[1].toLowerCase() : "";
    var data = new FormData();
    data.append('file', fileType[0]);
    var fieldArr = props.fileTypes[ext]; //check for select prop and add value

    if (props.select && select === true) {
      data.append(props.select.query, selectValue);
    }

    for (var i = 0; i < fieldArr.length; i++) {
      if (new RegExp('filename', 'gi').test(fieldArr[i]) === true) {
        data.append('filename', fileName);
      } else data.append(fieldArr[i], e.target[fieldArr[i]].value);
    }
    props.cb(data);
  };

  var handleFile = function handleFile(file) {
    if (file[0] === undefined || file[0] === null) {
      return null;
    } else return file;
  };

  var generateSelect = function generateSelect(selectObj) {
    return /*#__PURE__*/React__default['default'].createElement(Select, {
      obj: selectObj,
      setValue: setSelectValue
    });
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "container form-body"
  }, /*#__PURE__*/React__default['default'].createElement("p", null, "Supported File Types: ", Object.keys(props.fileTypes).map(function (x) {
    return ".".concat(x);
  }).join(" ")), /*#__PURE__*/React__default['default'].createElement("form", {
    onSubmit: function onSubmit(e) {
      return upload(e);
    },
    className: "entry-form",
    encType: "multipart/form-data",
    method: "post",
    name: "upload"
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    htmlFor: "file form-label"
  }, "File:"), /*#__PURE__*/React__default['default'].createElement("input", {
    id: "file",
    type: "file",
    name: "upload",
    className: "form-fileinput",
    onChange: function onChange(e) {
      var file = handleFile(e.target.files);

      if (file === null) {
        return false;
      } else {
        setFileType(file);
        setFileName(file[0].name); //checks for Select prop

        if (props.select) setSelect(true);
      }
    }
  }), /*#__PURE__*/React__default['default'].createElement("br", null), select === true && stringInArr(props.select.types, fileType[0].name ? fileType[0].name.split(".")[1].toLowerCase() : "") === true ? generateSelect(props.select) : "", detectFile(), /*#__PURE__*/React__default['default'].createElement("input", {
    id: "submit",
    type: "submit",
    className: "button form-button"
  })), /*#__PURE__*/React__default['default'].createElement("br", null)));
};

exports.FormOne = FormOne;
exports.FormTwo = FormTwo;
