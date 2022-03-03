# react-smartmultiparts

smartmultiparts are file input components for React that return a form with specified values. Upon submission the form will pass the multipart form data into a callback function provided by you. FormOne will return a single set of input fields for a group of file types. FormTwo will return a specified set of fields for each individual file type.

```
npm i react-smartmultiparts
```

## Usage:

The FormOne component accepts a list of filetypes as a "fileTypes" prop and form fields as "fields" prop.  

The FormTwo component allows you to specify an object containing the supported file types as keys and their correspending fields as an array using the "fileTypes" prop.

Both Forms must be passed a callback function to handle the multipart data using the "cb" prop. 


#### FormOne Example:
```
import {FormOne} from 'react-smartmultiparts';

const fields = ["Title", "Submitee", "Name", "Comments"];

const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];

const printData = (data) => { 
    console.log(data);
};

<FormOne fields={fields} fileTypes={fileTypes} cb={printData}/>
```

#### FormTwo Example:
```
import {FormTwo} from 'react-smartmultiparts';

const printData = (data) => { 
    console.log(data);
};

const formObj = {
    wav: ["Title", "Artist", "Comments"],
    mp3: ["Title", "Artist"],
    jpg: ["Title", "Subject", "Source"]
};

<FormTwo fileTypes={formObj} cb={printData}/>
```

## Input Types Supported:
#### Input Type - (Field Name) - Info

Text Inputs - (*DEFAULT*) - Any field value supplied will generate a text input.

Text Area - (*comments*) - Providing a "comments" field will generate a Text Area Input.

Filename - (*filename*) - Using "filename" as a field will generate the filename inside of the form and include it in the multipart data.

Date - (*date*) - Using "date" as a field will generate a date input.

Select - You can generate a single select field by providing a select object as a prop to either Form component using the name "select". The select object requires 2 key-values to work. "query", which refers to your question/prompt. "select", which refers to the options you want to display. If you're using Form Two, you can provide a "types" key-value which specifies the file types you would like to generate a select input for.

See Below:
```
const selectObj = {
        query: "Whats your name?",
        select: ["Chris", "Emeka", "Maya", "Pat", "Arthur"],
        types: ["wav","jpeg","mp3"] //meant for use with FormTwo
    };

<FormOne ... select={selectObj}/>
<FormTwo ... select={selectObj}/>
```

Coverage for more input types will be available in future versions. 

## Styling:

### Logo -
You can provide a "logo" prop using a path to an image of your choice.
That element can be styled using the "form-logo-img" class selector.

You can style the various aspects of the form using CSS Class selectors.

Body/Container - .form-body

Labels - .form-label

File Input - .form-fileinput

Filename - .form-filename

Comments - .form-textarea

Text Inputs - .form-textinput

Submit Button - .form-button

Logo - .form-logo-img
