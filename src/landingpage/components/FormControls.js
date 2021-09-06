import React, {useState, useRef} from 'react';

const FormControls = (props) => {
    const [formTypes, setFormTypes] = useState("");
    const [formFields, setFormFields] = useState("");
    const [formSelectQuery, setFormSelectQuery] = useState("");
    const [formSelectOptions, setFormSelectOptions] = useState("");
    const [formTypeOptions, setFormTypeOptions] = useState("");
    const [formSelectDefault, setFormSelectDefault] = useState("");

    //Form Two
    const [formTwoTypeToggle, setFormTwoTypeToggle] = useState(false);
    const [formTwoActiveType, setFormTwoActiveType] = useState("");

    const renderSelectOptions = () => {
        if(props.formNum === 1){
            return (
                <form>
                    <label htmlFor="select-query" className="form-control-instructions">
                        Please enter a question for your select input
                    </label>
                    <input type="text" name="select-query" className="form-filename"
                        onChange={(e) => setFormSelectQuery(e.target.value)}/>
                    <label htmlFor="select-options" className="form-control-instructions">
                        Please enter a comma separated list for your select input's options
                    </label>
                    <input type="text" name="select-options" className="form-filename"
                        onChange={(e) => setFormSelectOptions(e.target.value)}/>
                    <label htmlFor="select-options" className="form-control-instructions">
                        Enter a default/placeholder value for your select?
                    </label>
                    <input type="text" name="select-options" className="form-filename"
                        onChange={(e) => setFormSelectDefault(e.target.value)}/>
                    <button className="select-obj-btn" onClick={(e) => handleFormSelects(e,1)}>
                        Set Select Object
                    </button>
                </form>
            )
        } else if(props.formNum === 2){
            return (
                <form>
                    <label htmlFor="select-query" className="form-control-instructions">
                        Please enter a question for your select input
                    </label>
                    <input type="text" name="select-query" className="form-filename"
                        onChange={(e) => setFormSelectQuery(e.target.value)}/>
                    <label htmlFor="select-options" className="form-control-instructions">
                        Please enter a comma separated list or your select input's options
                    </label>
                    <input type="text" name="select-options" className="form-filename"
                        onChange={(e) => setFormSelectOptions(e.target.value)}/>
                    <label htmlFor="select-options" className="form-control-instructions">
                        Please enter a comma separated list to define the file types that require the select input
                    </label>
                    <input type="text" name="select-options" className="form-filename"
                        onChange={(e) => setFormTypeOptions(e.target.value)}/>
                    <label htmlFor="select-options" className="form-control-instructions">
                        Enter a default/placeholder value for your select?
                    </label>
                    <input type="text" name="select-options" className="form-filename"
                        onChange={(e) => setFormSelectDefault(e.target.value)}/>
                    <button className="select-obj-btn" onClick={(e) => handleFormSelects(e,2)}>
                        Set Select Object
                    </button>
                </form>
            )
        }
    };

    const handleFormTypes = (e) => {
        if (props.formNum === 1){
            const types = formTypes.split(",").map(x => x.trim());
            props.setLiveTypes(types);
        } 
        if (props.formNum === 2){
            setFormTwoTypeToggle(!formTwoTypeToggle);
        }
    };  

    const handleFormFields = (e) => {
        const fields = formFields.split(",").map(x => x.trim());
        props.setLiveFields(fields);
    };

    const handleFormSelects = (e,formNum) => {
        e.preventDefault();
        if(formNum === 1) {
            const options = formSelectOptions.split(",").map(x => x.trim());
            const query = formSelectQuery;
            const selectObj = {
                query,
                select: options
            };
            if (formSelectDefault){
                selectObj.placeholder = formSelectDefault;
            }
            props.setSelectObject(selectObj);
        }
        if(formNum === 2) {
            const options = formSelectOptions.split(",").map(x => x.trim());
            const query = formSelectQuery;
            const types = formTypeOptions.split(",").map(x => x.trim());
            const selectObj = {
                query,
                select: options,
                types
            };
            if (formSelectDefault){
                selectObj.placeholder = formSelectDefault;
            }
            props.setSelectObject(selectObj)
        }
    };

    
    const renderFormTwoTypeControls = () => {
        const types = formTypes.split(",").map(x => x.trim()); 

        const handleFormTwoData = () => {
            props.formTwoData[formTwoActiveType] = formFields.split(",").map(x => x.trim());
        };

        return (
            <>
                <label>
                    <span className="form-control-instructions">
                        Select a file type and using a comma separated list provide the input fields you would like to be generated
                    </span>
                    <span className="form-control-instructions">
                        Note: The form's Supported File Types may not update until you attempt to choose a file to "upload" from your system
                    </span>
                </label>    
                <select onChange={(e) => setFormTwoActiveType(e.target.value)}>
                <option selected>Choose File Type</option>
                    {types.map((type, index) => {
                        return <option value={type} key={index}>{type}</option>
                    })}
                </select>
                <input type="text" name="fields-input" className="form-filename"
                    onChange={(e) => setFormFields(e.target.value)}/>
                <button onClick={() => handleFormTwoData()}>
                    Set Type & Fields
                </button>
            </>
        )
    }

    const renderControls = () => {
        if(props.formNum === 1){
            return (
                <div className="form-options-control">
                    <label htmlFor="types-input">
                        <span className="form-control-instructions">
                            Using a comma separated list provide file types you would like to support
                        </span>
                    </label>
                    <input type="text" name="types-input" className="form-filename"
                        onChange={(e) => setFormTypes(e.target.value)}/>
                    <button onClick={() => handleFormTypes()} className="form-control-btn">
                        Set Types
                    </button>   

                    <label htmlFor="fields-input">
                        <span className="form-control-instructions">
                            Using a comma separated list provide the input fields you would like generated
                        </span>
                    </label>
                    <input type="text" name="fields-input" className="form-filename"
                        onChange={(e) => setFormFields(e.target.value)}/>
                    <button onClick={() => handleFormFields()} className="form-control-btn">
                        Set Fields
                    </button>
                    <button onClick={() => props.handleSelect(props.formNum)} className="select-toggle">
                        {props.btnTitle}
                    </button>
                    {props.select ? renderSelectOptions() : ""}
                </div>
            )
        } else {
            return (
                <div className="form-options-control">
                    <label htmlFor="types-input">
                        <span className="form-control-instructions">
                            Using a comma separated list provide file types you would like to support
                        </span>
                    </label>
                    <input type="text" name="types-input" className="form-filename"
                        onChange={(e) => setFormTypes(e.target.value)}/>
                    <button onClick={() => handleFormTypes()} className="form-control-btn">
                        Set Types
                    </button> 

                    {formTwoTypeToggle ? renderFormTwoTypeControls() : ""}  

                    <button onClick={() => props.handleSelect(props.formNum)} className="select-toggle">
                        {props.btnTitle}
                    </button>
                    {props.select ? renderSelectOptions() : ""}
                </div>
            )
        }
    }
    
    return (
        <>
            {renderControls()}
        </>
    )
};

export default FormControls;