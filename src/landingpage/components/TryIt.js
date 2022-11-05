import React, {useState, useRef} from 'react';
import {FormOne} from '../../components/FormOne/FormOne';
import {FormTwo} from '../../components/FormTwo/FormTwo';
import FormControls from './FormControls';
import './tryit.css'

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

    // Notifications
    const [message, setMessage] = useState("");
    const notiRef = useRef();
    
    const notificationToggle = (eventMsg) => {
        setMessage(eventMsg);
        document.getElementById('form-notification').classList.add('noti-ani');
        setTimeout(() => {
            document.getElementById('form-notification').classList.remove('noti-ani');
        }, 1500);
    };

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
        for (var value of data.values()) {
            console.log(value);
        };
    };

    const testConfig = {
        typeLabel: "",
        inputLabel: "",
        disabled: "Thanks for the submission!",
        errorMessage: "Something went wrong.",
        invalidExt: "Sorry we dont support that type of file. :("
    };

    return (
        <section className="forms">
                <div className="notification-div">
                    <div 
                        className="form-control-notification" 
                        id="form-notification"
                        ref={notiRef} 
                    >
                        {message}
                    </div>
                </div>
                <div className="form-note">
                    *on submit form values will print to the console
                </div>
                <div className="form-control-grid">

                    <h3 className="landing-title">
                            Form One:
                    </h3>
                    <FormControls 
                        btnTitle={formOneButtonTitle} setBtnTitle={setFormOneButtonTitle}
                        select={formOneSelect} handleSelect={handleFormOneSelect}
                        setLiveTypes={setLiveFormOneTypes} setLiveFields={setLiveFormOneFields} 
                        setSelectObject={setFormOneSelectObj} formNum={1} notification={notificationToggle}
                    />

                    <div className="form-containing-div" ref={formOneOuterRef}>
                        <div className="form-carousel-div" ref={formOneRef}
                            style={{transform: `translateX(${formOneOffset}px)`}}>
                            <FormOne 
                                fields={liveFormOneFields} 
                                fileTypes={liveFormOneTypes} 
                                cb={printData} 
                                textConfig={testConfig}
                            />
                        </div>
                        <div className="form-carousel-div"
                            style={{transform: `translateX(${formOneOffset}px)`}}>
                            <FormOne 
                                fields={liveFormOneFields} 
                                fileTypes={liveFormOneTypes} 
                                cb={printData} 
                                select={[formOneSelectObj]}
                                textConfig={testConfig}
                            />
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
                        setFormTwoData={setFormTwoDataObj} formNum={2} notification={notificationToggle}
                    />

                    <div className="form-containing-div" ref={formTwoOuterRef}>
                        <div className="form-carousel-div" ref={formTwoRef}
                            style={{transform: `translateX(${formTwoOffset}px)`}}>
                            <FormTwo 
                                fileTypes={formTwoDataObj} 
                                cb={printData} 
                                textConfig={testConfig}
                            />
                        </div>
                        <div className="form-carousel-div" ref={formTwoRef}
                            style={{transform: `translateX(${formTwoOffset}px)`}}>
                            <FormTwo 
                                fileTypes={formTwoDataObj} 
                                cb={printData} 
                                select={[formTwoSelectObj]}
                                textConfig={testConfig}
                            />
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default TryIt;