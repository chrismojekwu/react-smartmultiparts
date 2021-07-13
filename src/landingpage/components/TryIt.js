import React, {useState, useRef} from 'react';
import {FormOne} from '../../components/FormOne/FormOne';
import {FormTwo} from '../../components/FormTwo/FormTwo';
import FormControls from './FormControls';

const TryIt = () => {
    // Form One
    const [formOneButtonTitle, setFormOneButtonTitle] = useState("SELECT");
    const [liveFormOneTypes, setLiveFormOneTypes] = useState([]);
    const [liveFormOneFields, setLiveFormOneFields] = useState([]);
    const [formOneSelect, setFormOneSelect] = useState(false);
    const [formOneSelectObj, setFormOneSelectObj] = useState({});
    const formOneRef = useRef();
    const formOneOuterRef= useRef();
    const [formOneOffset, setFormOneOffset] = useState(0);

    // Form Two
    const [formTwoButtonTitle, setFormTwoButtonTitle] = useState("SELECT");
    const [formTwoSelect, setFormTwoSelect] = useState(false);
    const [formTwoSelectObj, setFormTwoSelectObj] = useState({});
    const [formTwoDataObj, setFormTwoDataObj] = useState({});
    const formTwoRef = useRef();
    const formTwoOuterRef= useRef();
    const [formTwoOffset, setFormTwoOffset] = useState(0);

    
    
    
    const handleFormOneSelect = (formNum) => {
        if(formNum === 1){
            if(formOneSelect === false){
                setFormOneSelect(!formOneSelect);
                setFormOneOffset(-formOneOuterRef.current.offsetWidth);
                setFormOneButtonTitle("NO SELECT")
            } else {
                setFormOneSelect(!formOneSelect);
                setFormOneOffset(0);
                setFormOneButtonTitle("SELECT")
            }
        } else if (formNum === 2) {
            if(formTwoSelect === false){
                setFormTwoSelect(!formTwoSelect);
                setFormTwoOffset(-formTwoOuterRef.current.offsetWidth);
                setFormTwoButtonTitle("NO SELECT")
            } else {
                setFormTwoSelect(!formTwoSelect);
                setFormTwoOffset(0);
                setFormTwoButtonTitle("SELECT")
            }
        }
    }

    const printData = (data) => { 
        console.log(data);
    };

    return (
        <section className="forms">
                <div className="form-control-grid">

                    <h3 className="landing-title">
                            Form One:
                    </h3>
                    <FormControls 
                        btnTitle={formOneButtonTitle} setBtnTitle={setFormOneButtonTitle}
                        select={formOneSelect} handleSelect={handleFormOneSelect}
                        setLiveTypes={setLiveFormOneTypes} setLiveFields={setLiveFormOneFields} 
                        setSelectObject={setFormOneSelectObj}
                        formNum={1}
                    />

                    <div className="form-containing-div" ref={formOneOuterRef}>
                        <div className="form-carousel-div" ref={formOneRef}
                            style={{transform: `translateX(${formOneOffset}px)`}}>
                            <FormOne fields={liveFormOneFields} fileTypes={liveFormOneTypes} cb={printData}/>
                        </div>
                        <div className="form-carousel-div"
                            style={{transform: `translateX(${formOneOffset}px)`}}>
                            <FormOne fields={liveFormOneFields} fileTypes={liveFormOneTypes} cb={printData} select={formOneSelectObj}/>
                        </div>
                    </div>
                </div>

                <div className="form-control-grid">
                    <h3 className="landing-title">
                            Form Two:
                    </h3>
                    <FormControls
                        btnTitle={formTwoButtonTitle} setBtnTitle={setFormTwoButtonTitle}
                        select={formTwoSelect} handleSelect={handleFormOneSelect}
                        setSelectObject={setFormTwoSelectObj} formTwoData={formTwoDataObj}
                        setFormTwoData={setFormTwoDataObj}
                        formNum={2}
                    />

                    <div className="form-containing-div" ref={formTwoOuterRef}>
                        <div className="form-carousel-div" ref={formTwoRef}
                            style={{transform: `translateX(${formTwoOffset}px)`}}>
                            <FormTwo fileTypes={formTwoDataObj} cb={printData}/>
                        </div>
                        <div className="form-carousel-div" ref={formTwoRef}
                            style={{transform: `translateX(${formTwoOffset}px)`}}>
                            <FormTwo fileTypes={formTwoDataObj} cb={printData} select={formTwoSelectObj}/>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default TryIt;