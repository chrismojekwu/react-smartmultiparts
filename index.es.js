import React, { useState } from 'react';

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
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "comments",
      className: "form-label"
    }, "Comments:"), /*#__PURE__*/React.createElement("textarea", {
      name: "textarea-".concat(props.index),
      className: "comments form-text-area",
      placeholder: "Additional Comments",
      id: "smartparts-comments"
    }));
  };

  var renderReq = function renderReq() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "comments",
      className: "form-label"
    }, "Comments:"), /*#__PURE__*/React.createElement("textarea", {
      name: "textarea-".concat(props.index),
      className: "comments form-text-area",
      placeholder: "Additional Comments",
      id: "smartparts-comments",
      required: true
    }));
  };

  return props.required ? renderReq() : renderDefault();
};

var TextInput = function TextInput(props) {
  var label = props.field.replace("!", "");
  var idString = label.split(" ").join("-").toLowerCase();

  var renderDefault = function renderDefault() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
      htmlFor: label,
      className: "form-label"
    }, label, ":"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-text-input",
      name: "".concat(label.toLowerCase(), "-").concat(props.index),
      id: idString
    }));
  };

  var renderReq = function renderReq() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
      htmlFor: label,
      className: "form-label"
    }, label, ":"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-text-input",
      name: "".concat(label.toLowerCase(), "-").concat(props.index),
      id: idString,
      required: true
    }));
  };

  return props.required ? renderReq() : renderDefault();
};

var Date = function Date(props) {
  var _useState = useState("2099-01-01"),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var renderDefault = function renderDefault() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "date",
      className: "form-label"
    }, "Date:"), /*#__PURE__*/React.createElement("input", {
      type: "date",
      name: "date-".concat(props.index),
      id: "smartparts-date-input",
      value: date,
      onChange: function onChange(e) {
        return setDate(e.target.value);
      },
      className: "form-date-input"
    }));
  };

  var renderReq = function renderReq() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "date",
      className: "form-label"
    }, "Date:"), /*#__PURE__*/React.createElement("input", {
      type: "date",
      name: "date-".concat(props.index),
      id: "smartparts-date-input",
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
  var _useState = useState(props.obj.placeholder),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var generateOptions = function generateOptions() {
    return props.obj.select.map(function (options, index) {
      return /*#__PURE__*/React.createElement("option", {
        value: options,
        id: options,
        className: "form-select-option",
        key: "select-option-".concat(index)
      }, options);
    });
  };

  var handleChange = function handleChange(e) {
    setValue(e.target.value);
  };

  var renderDefault = function renderDefault() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "select-".concat(props.index, " form-label")
    }, props.obj.query), /*#__PURE__*/React.createElement("select", {
      name: "select-".concat(props.index),
      className: "form-select",
      onChange: handleChange
    }, /*#__PURE__*/React.createElement("option", {
      className: "form-select-option",
      key: "select-option-default",
      defaultValue: true
    }, value), generateOptions()));
  };

  var renderReq = function renderReq() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
      htmlFor: "select-".concat(props.index, " form-label")
    }, props.obj.query), /*#__PURE__*/React.createElement("select", {
      name: "select-".concat(props.index),
      className: "form-select",
      onChange: handleChange,
      required: true
    }, /*#__PURE__*/React.createElement("option", {
      defaultValue: true
    }, value), generateOptions()));
  };

  return props.required ? renderReq() : renderDefault();
};

var Range = function Range(props) {
  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleLabelSide = function handleLabelSide() {
    if (props.rangeLeftSide) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
        name: "range-".concat(props.index),
        className: "form-label",
        id: "smartparts-range-label"
      }, props.label), /*#__PURE__*/React.createElement("span", {
        className: "form-range-value"
      }, value), /*#__PURE__*/React.createElement("input", {
        type: "range",
        className: "form-range-input",
        name: "range-".concat(props.index),
        id: "smartparts-range-input",
        min: props.min,
        max: props.max,
        step: props.step,
        value: value,
        onChange: function onChange(e) {
          return setValue(e.target.value);
        }
      }));
    } else {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
        type: "range",
        className: "form-range-input",
        name: "range-".concat(props.index),
        id: "smartparts-range-input",
        min: props.min,
        max: props.max,
        step: props.step,
        value: value,
        onChange: function onChange(e) {
          return setValue(e.target.value);
        }
      }), /*#__PURE__*/React.createElement("label", {
        name: "range-".concat(props.index),
        className: "form-label",
        id: "smartparts-range-label"
      }, props.label), /*#__PURE__*/React.createElement("span", {
        className: "form-range-value"
      }, value));
    }
  };

  return handleLabelSide();
};

function FormFields(props) {
  var selectObjs = props.select;
  var selectCount = 0;

  var generateSelect = function generateSelect(selectObj, index, field) {
    selectCount++;

    if (field.trim().includes("!")) {
      return /*#__PURE__*/React.createElement(Select, {
        obj: selectObj,
        index: index,
        required: true,
        key: "select-input-".concat(index)
      });
    } else {
      return /*#__PURE__*/React.createElement(Select, {
        obj: selectObj,
        index: index,
        required: false,
        key: "select-input-".concat(index)
      });
    }
  };

  var generateRange = function generateRange(index, field) {
    var values = field.slice(6, -1).split("_");

    if (values[4] !== undefined && values[4] === "<") {
      return /*#__PURE__*/React.createElement(Range, {
        index: index,
        min: values[0],
        max: values[1],
        step: values[2],
        label: values[3],
        rangeLeftSide: true,
        key: "range-input-".concat(index)
      });
    } else {
      return /*#__PURE__*/React.createElement(Range, {
        index: index,
        min: values[0],
        max: values[1],
        step: values[2],
        label: values[3],
        rangeLeftSide: false,
        key: "range-input-".concat(index)
      });
    }
  };

  var renderFields = function renderFields() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, props.fields.map(function (field, index) {
      if (field.trim().match(/comments/gi)) {
        if (field.trim().includes("!")) {
          return /*#__PURE__*/React.createElement(TextArea, {
            index: index,
            required: true,
            key: "text-area-".concat(index)
          });
        } else {
          return /*#__PURE__*/React.createElement(TextArea, {
            index: index,
            required: false,
            key: "text-area-".concat(index)
          });
        }
      } else if (field.trim().match(/date/gi)) {
        if (field.trim().includes("!")) {
          return /*#__PURE__*/React.createElement(Date, {
            required: true,
            index: index,
            key: "date-input-".concat(index)
          });
        } else {
          return /*#__PURE__*/React.createElement(Date, {
            required: false,
            index: index,
            key: "date-input-".concat(index)
          });
        }
      } else if (field.trim().match(/range/gi)) {
        return generateRange(index, field.trim());
      } else if (field.trim().match(/select/gi)) {
        return selectObjs[selectCount] === undefined ? "" : generateSelect(selectObjs[selectCount], index, field.trim());
      } else if (field.trim().match(/filename/gi)) {
        return /*#__PURE__*/React.createElement("span", {
          id: "filename-span",
          className: "form-filename",
          key: "filename-".concat(index)
        }, "Filename: ", props.filename);
      } else if (field === "") {
        return "";
      } else {
        if (field.trim().includes("!")) {
          return /*#__PURE__*/React.createElement(TextInput, {
            field: field,
            index: index,
            required: true,
            key: "text-input-".concat(index)
          });
        } else {
          return /*#__PURE__*/React.createElement(TextInput, {
            field: field,
            index: index,
            required: false,
            key: "text-input-".concat(index)
          });
        }
      }
    }));
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, renderFields());
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
  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      fileType = _useState2[0],
      setFileType = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      fileName = _useState4[0],
      setFileName = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      disabled = _useState6[0],
      setDisabled = _useState6[1]; //function to render correct form component for file type


  var detectFile = function detectFile() {
    if (fileType === "") return "";

    if (Object.keys(props.fileTypes).length === 0 || props.fields === []) {
      if (props.errorMessage === undefined || props.errorMessage === "") {
        return /*#__PURE__*/React.createElement("span", {
          id: "smartparts-error"
        }, "Internal Error");
      } else {
        return /*#__PURE__*/React.createElement("span", {
          id: "smartparts-error"
        }, props.errorMessage);
      }
    }

    var ext = fileType[0].name ? fileType[0].name.split(".")[1] : "";
    var re = new RegExp(props.fileTypes.join("|"), "gi");
    if (!ext) return "Invalid Extension";

    if (re.test(ext)) {
      return /*#__PURE__*/React.createElement(FormFields, {
        fields: props.fields,
        filename: fileName,
        select: props.select
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
      } else if (new RegExp('date', 'gi').test(fieldNameCleaned) === true) {
        data.append('date', e.target["date-".concat(i)].value);
      } else if (new RegExp('select', 'gi').test(fieldNameCleaned) === true) {
        data.append("select_".concat(i), e.target["select-".concat(i)].value);
      } else if (new RegExp('range', 'gi').test(fieldNameCleaned) === true) {
        data.append("range_".concat(i), e.target["range-".concat(i)].value);
      } else data.append(fieldNameCleaned.toLowerCase(), e.target[fieldNameCleaned.toLowerCase()].value);
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
    var message = props.disabled !== undefined ? props.disabled.message : "Thanks";
    return /*#__PURE__*/React.createElement("span", {
      className: "smartparts-disabled-message"
    }, message);
  };

  var renderLogo = function renderLogo(path) {
    return /*#__PURE__*/React.createElement("img", {
      src: path,
      className: "form-logo-img"
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "smartparts-container form-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "smartparts-logo-container"
  }, props.logo ? renderLogo(props.logo) : ""), /*#__PURE__*/React.createElement("p", null, "Supported File Types: ", fileTypes(props.fileTypes)), /*#__PURE__*/React.createElement("form", {
    onSubmit: function onSubmit(e) {
      return dataReturn(e);
    },
    className: "smartparts-entry-form",
    encType: "multipart/form-data",
    method: "post",
    name: "upload",
    disabled: disabled
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "file form-label"
  }, "File:"), /*#__PURE__*/React.createElement("input", {
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
  }), /*#__PURE__*/React.createElement("br", null), !disabled ? detectFile() : handleDisabled(), /*#__PURE__*/React.createElement("input", {
    id: "smartparts-submit",
    type: "submit",
    className: "button form-button",
    disabled: disabled
  }))));
};

var FormTwo = function FormTwo(props) {
  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      fileType = _useState2[0],
      setFileType = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      fileName = _useState4[0],
      setFileName = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      disabled = _useState6[0],
      setDisabled = _useState6[1]; //function to render correct form component for file type


  var detectFile = function detectFile() {
    if (fileType === "") return "";

    if (Object.keys(props.fileTypes).length === 0) {
      if (props.errorMessage === undefined || props.errorMessage === "") {
        return /*#__PURE__*/React.createElement("span", {
          id: "smartparts-error"
        }, "Internal Error");
      } else {
        return /*#__PURE__*/React.createElement("span", {
          id: "smartparts-error"
        }, props.errorMessage);
      }
    }

    var ext = fileType[0].name ? fileType[0].name.split(".")[1].toLowerCase() : "";
    var re = new RegExp(Object.keys(props.fileTypes).join("|"), "gi");
    if (!ext) return "Invalid Extention";

    if (re.test(ext)) {
      return /*#__PURE__*/React.createElement(FormFields, {
        fields: props.fileTypes[ext],
        filename: fileName,
        select: props.select
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
      } else if (new RegExp('select', 'gi').test(fieldNameCleaned) === true) {
        data.append("select_".concat(i), e.target["select-".concat(i)].value);
      } else if (new RegExp('range', 'gi').test(fieldNameCleaned) === true) {
        data.append("range_".concat(i), e.target["range-".concat(i)].value);
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
    var message = props.disabled !== undefined ? props.disabled.message : "Thanks";
    return /*#__PURE__*/React.createElement("span", {
      className: "smartparts-disabled-message"
    }, message);
  };

  var renderLogo = function renderLogo(path) {
    return /*#__PURE__*/React.createElement("img", {
      src: path,
      className: "form-logo-img"
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "smartparts-container form-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "smartparts-logo-container"
  }, props.logo ? renderLogo(props.logo) : ""), /*#__PURE__*/React.createElement("p", null, "Supported File Types: ", Object.keys(props.fileTypes) !== undefined ? fileTypes(Object.keys(props.fileTypes)) : ""), /*#__PURE__*/React.createElement("form", {
    onSubmit: function onSubmit(e) {
      return upload(e);
    },
    className: "smartparts-entry-form",
    encType: "multipart/form-data",
    method: "post",
    name: "upload",
    disabled: disabled
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "file form-label"
  }, "File:"), /*#__PURE__*/React.createElement("input", {
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
  }), /*#__PURE__*/React.createElement("br", null), !disabled ? detectFile() : handleDisabled(), /*#__PURE__*/React.createElement("input", {
    id: "smartparts-submit",
    type: "submit",
    className: "button form-button",
    disabled: disabled
  }))));
};

export { FormOne, FormTwo };
