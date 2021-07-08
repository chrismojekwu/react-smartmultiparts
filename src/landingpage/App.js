import React, {useState, useRef} from 'react';
import {FormOne} from '../components/FormOne/FormOne';
import {FormTwo} from '../components/FormTwo/FormTwo';
import FormControls from './FormControls';
import './app.css'

const App = () => {
    // Form One
    const [formOneButtonTitle, setFormOneButtonTitle] = useState("SELECT");
    const [liveFormOneTypes, setLiveFormOneTypes] = useState([]);
    const [liveFormOneFields, setLiveFormOneFields] = useState([]);
    const [formOneSelect, setFormOneSelect] = useState(false);
    const [formOneSelectObj, setFormOneSelectObj] = useState({});
    const formOneRef = useRef();
    const formOneOuterRef= useRef();

    // Form Two
    const [formTwoButtonTitle, setFormTwoButtonTitle] = useState("SELECT");
    const [liveFormTwoTypes, setLiveFormTwoTypes] = useState([]);
    const [liveFormTwoFields, setLiveFormTwoFields] = useState([]);
    const [formTwoSelect, setFormTwoSelect] = useState(false);
    const [formTwoSelectObj, setFormTwoSelectObj] = useState({});
    const [formTwoDataObj, setFormTwoDataObj] = useState({});
    const formTwoRef = useRef();
    const formTwoOuterRef= useRef();
    
    
    const handleFormOneSelect = (formNum) => {
        if(formNum === 1){
            if(formOneSelect === false){
                setFormOneSelect(!formOneSelect);

                if (formOneOuterRef.current) {
                    formOneOuterRef.current.scrollTo({
                    top: 0,
                    left: formOneOuterRef.current.offsetWidth,
                    behavior: "smooth",
                  });
                }
                setFormOneButtonTitle("NO SELECT")
            } else {
                setFormOneSelect(!formOneSelect);

                if (formOneOuterRef.current) {
                    formOneOuterRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }
                setFormOneButtonTitle("SELECT")
            }
        } else if (formNum === 2) {
            if(formTwoSelect === false){
                setFormTwoSelect(!formTwoSelect);

                if (formTwoOuterRef.current) {
                    formTwoOuterRef.current.scrollTo({
                    top: 0,
                    left: formTwoOuterRef.current.offsetWidth,
                    behavior: "smooth",
                  });
                }
                setFormTwoButtonTitle("NO SELECT")
            } else {
                setFormTwoSelect(!formTwoSelect);

                if (formTwoOuterRef.current) {
                    formTwoOuterRef.current.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }
                setFormTwoButtonTitle("SELECT")
            }
        }
    }

    const printData = (data) => { 
        console.log(data);
    };


    return (
        <div className="landing-container">
            <div className="landing-page">
                <h1 className="landing-title">react-smart-<span className="hover-color">multiparts</span></h1>
                <h5 className="landing-subtitle">a file detecting multipart form library...for react!</h5>
            </div>
            <section className="forms">
                <div className="form-control-grid">

                    <h3 className="landing-title">
                        <div className="landing-title">
                            Form One:
                        </div>
                    </h3>
                    <FormControls 
                        btnTitle={formOneButtonTitle} setBtnTitle={setFormOneButtonTitle}
                        select={formOneSelect} handleSelect={handleFormOneSelect}
                        setLiveTypes={setLiveFormOneTypes} setLiveFields={setLiveFormOneFields} 
                        setSelectObject={setFormOneSelectObj}
                        formNum={1}
                    />

                    <div className="form-containing-div" ref={formOneOuterRef}>
                        <div className="form-carousel-div" ref={formOneRef}>
                            <FormOne fields={liveFormOneFields} fileTypes={liveFormOneTypes} cb={printData}/>
                        </div>
                        <div className="form-carousel-div">
                            <FormOne fields={liveFormOneFields} fileTypes={liveFormOneTypes} cb={printData} select={formOneSelectObj}/>
                        </div>
                    </div>
                </div>

                <div className="form-control-grid">
                    <h3 className="landing-title">
                        <div className="landing-title">
                            Form Two:
                        </div>
                    </h3>
                    <FormControls
                        btnTitle={formTwoButtonTitle} setBtnTitle={setFormTwoButtonTitle}
                        select={formTwoSelect} handleSelect={handleFormOneSelect}
                        setLiveTypes={setLiveFormTwoTypes} setLiveFields={setLiveFormTwoFields} 
                        setSelectObject={setFormTwoSelectObj} formTwoData={formTwoDataObj}
                        setFormTwoData={setFormTwoDataObj}
                        formNum={2}
                    />

                    <div className="form-containing-div" ref={formTwoOuterRef}>
                        <div className="form-carousel-div" ref={formTwoRef}>
                            <FormTwo fileTypes={formTwoDataObj} cb={printData}/>
                        </div>
                        <div className="form-carousel-div" ref={formTwoRef}>
                            <FormTwo fileTypes={formTwoDataObj} cb={printData} select={formTwoSelectObj}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default App;