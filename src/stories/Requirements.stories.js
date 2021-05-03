import React, {useState} from 'react';
import { storiesOf } from '@storybook/react';

import { FormTwo } from '../components/FormTwo/FormTwo';

const stories = storiesOf('App Test', module);

stories.add('App', () => {
    const [data, setData] = useState();

    const form2Obj = {
        wav: ["Title", "Submitee", "comments"],
        mp3: ["Andre300", "test"],
        jpg: ["hello", "hope", "thisworks"]
      }

    return (<FormTwo fileTypes={form2Obj} cb={setData}/>);
});
