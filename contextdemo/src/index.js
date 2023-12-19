import React from 'react';
import ReactDom from 'react-dom'
import App from './App'

import UserProvider  from './Context/UserProvider'
import CricketProvider from './Context/CricketProvider';
//step1
ReactDom.render(

<UserProvider>
<App/>

</UserProvider>,

document.getElementById("root"));

{/* <CricketProvider>
   <App/>
</CricketProvider> */}