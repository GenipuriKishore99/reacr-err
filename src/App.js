import React from 'react'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { ErrorBoundary } from "react-error-boundary";

import ErrorBoundaries from './components/ErrorBoundary';
const App = () => {
  const data={name:"kishore",role:"reactjs Developer"}

  return (
    <div>
      <ErrorBoundary fallback={<ErrorBoundaries></ErrorBoundaries>}>
      <Navbar/>
      <Products data={data}/>
      </ErrorBoundary>
    </div>
  )
}

export default App