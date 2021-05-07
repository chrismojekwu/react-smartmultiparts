import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';

import { FormOne } from '../components/FormOne/FormOne';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
    const [data, setData] = useState();

    const fields = ["Title", "Submitee", "Name", "Comments", "fILEName"];

    const fileTypes = ["wav","jpg","jpeg","mp3","mp4","png", "pdf"];
      
    return (<FormOne fields={fields} fileTypes={fileTypes} cb={setData}/>);
});
