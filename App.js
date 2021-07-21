/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.View`
  margin-top: 100px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: blue;
`;

const App = () => {
  return (
    <Wrapper>
      <Title>Welcome {'\n'}</Title>
      <Title>JUUIN Project !</Title>
    </Wrapper>
  );
};

export default App;
