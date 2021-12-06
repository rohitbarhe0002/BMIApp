import React from 'react'
import App from '../App/App'
import { BrowserRouter ,Link,Route } from 'react-router-dom'

export default function Routing() {
    return (
        <div>
            
            <BrowserRouter>
                <Route path ="/App" component={App}/>
            </BrowserRouter>
            
        </div>
    )
}
