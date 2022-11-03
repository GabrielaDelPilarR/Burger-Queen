import {render, screen} from '@testing-library/react';
import Login from '../pages/Login';
import { BrowserRouter } from 'react-router-dom';

describe('Login component', ()=>{
    test ('testuhhu',()=>{
        render(
            <BrowserRouter>
            <Login/>
            </BrowserRouter>
        )
    })
})