import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignUp from './SignUp'
import { AuthProvider } from './Auth';
import { HaikuProvider } from './HaikuList'
import PrivateRoute from './PrivateRoute'
import Home from './Home'
import StoryField from './StoryField'
import Header from './Header'

function App() {
  return (
    <AuthProvider>
      <HaikuProvider>
        <Router>
          <Header />
          <div>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/storyfield" component={StoryField} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignUp} />
          </div>
        </Router>
      </HaikuProvider>
    </AuthProvider>
  );
}

export default App;
