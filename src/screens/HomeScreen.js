import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';

const Wrapper = styled.View`
  margin-top: 100px;
`;

const HomeScreen = () => {
  return (
    <Wrapper>
      <Text>Hello</Text>
    </Wrapper>
  );
};

export default HomeScreen;
