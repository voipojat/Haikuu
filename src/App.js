import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginForm from './LoginForm'
import SignUp from './SignUp'
import { AuthProvider } from './Auth';
import { HaikuProvider } from './HaikuList'
import { FormProvider } from './FormContext'
import Home from './Home'
import StoryField from './StoryField'
import Header from './Header'

function App() {
  return (
    <AuthProvider>
      <FormProvider>
        <HaikuProvider>
          <Router>
            <Header />
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/storyfield" component={StoryField} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/signup" component={SignUp} />
            </div>
          </Router>
        </HaikuProvider>
      </FormProvider>
    </AuthProvider>
  );
}

export default App;
