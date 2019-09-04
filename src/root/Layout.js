import React from 'react';
import { Header } from '../component';

export default ({ children }) => (
  <div>
    <Header/>
    {children}
  </div>
);