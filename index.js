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
          id: "smartparts-comments"
        }));
      } else if (field.match(/filename/gi)) {
        return /*#__PURE__*/React__default['default'].createElement("span", {
          id: "filename-span",
          className: "form-filename",
          key: index
        }, "Filename: ", props.filename);
      } else if (field === "") {
        return "";
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
    name: "select",
    className: "form-select",
    onChange: handleChange
  }, /*#__PURE__*/React__default['default'].createElement("option", {
    defaultValue: true
  }, props.obj.placeholder), generateOptions()));
};

var stringInArr = function stringInArr(arr, ext) {
  var x;
  if (arr === undefined) return false;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].toLowerCase() === ext) {
      x = true;
      break;
    } else x = false;
  }
  return x;
};
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
    if (Object.keys(props.fileTypes).length === 0 || props.fields === []) return /*#__PURE__*/React__default['default'].createElement("span", {
      id: "smartparts-error"
    }, "Internal Error");
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
      if (props.fields[i] === "") {
        continue;
      } else if (new RegExp('filename', 'gi').test(props.fields[i]) === true) {
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

  var renderLogo = function renderLogo(path) {
    return /*#__PURE__*/React__default['default'].createElement("img", {
      src: path,
      className: "form-logo-img"
    });
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "smartparts-container form-body"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "smartparts-logo-container"
  }, props.logo ? renderLogo(props.logo) : ""), /*#__PURE__*/React__default['default'].createElement("p", null, "Supported File Types: ", fileTypes(props.fileTypes)), /*#__PURE__*/React__default['default'].createElement("form", {
    onSubmit: function onSubmit(e) {
      return dataReturn(e);
    },
    className: "smartparts-entry-form",
    encType: "multipart/form-data",
    method: "post",
    name: "upload"
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    htmlFor: "file form-label"
  }, "File:"), /*#__PURE__*/React__default['default'].createElement("input", {
    id: "smartparts-file",
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
  }), /*#__PURE__*/React__default['default'].createElement("br", null), select === true && Object.keys(props.fileTypes).length != 0 ? generateSelect(props.select) : "", detectFile(), /*#__PURE__*/React__default['default'].createElement("input", {
    id: "smartparts-submit",
    type: "submit",
    className: "button form-button"
  })), /*#__PURE__*/React__default['default'].createElement("br", null)));
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
    if (Object.keys(props.fileTypes).length === 0) return /*#__PURE__*/React__default['default'].createElement("span", {
      id: "smartparts-error"
    }, "Internal Error");
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
      if (fieldArr[i] === "") {
        continue;
      } else if (new RegExp('filename', 'gi').test(fieldArr[i]) === true) {
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

  var renderLogo = function renderLogo(path) {
    return /*#__PURE__*/React__default['default'].createElement("img", {
      src: path,
      className: "form-logo-img"
    });
  };

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "smartparts-container form-body"
  }, /*#__PURE__*/React__default['default'].createElement("div", {
    className: "smartparts-logo-container"
  }, props.logo ? renderLogo(props.logo) : ""), /*#__PURE__*/React__default['default'].createElement("p", null, "Supported File Types: ", Object.keys(props.fileTypes) != undefined ? fileTypes(Object.keys(props.fileTypes)) : ""), /*#__PURE__*/React__default['default'].createElement("form", {
    onSubmit: function onSubmit(e) {
      return upload(e);
    },
    className: "smartparts-entry-form",
    encType: "multipart/form-data",
    method: "post",
    name: "upload"
  }, /*#__PURE__*/React__default['default'].createElement("label", {
    htmlFor: "file form-label"
  }, "File:"), /*#__PURE__*/React__default['default'].createElement("input", {
    id: "smartparts-file",
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
    id: "smartparts-submit",
    type: "submit",
    className: "button form-button"
  })), /*#__PURE__*/React__default['default'].createElement("br", null)));
};

exports.FormOne = FormOne;
exports.FormTwo = FormTwo;