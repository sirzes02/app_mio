import styled from 'styled-components/native';

export const Button = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  height: 65%;
  padding: 0 25px 0 25px;
  border: 1px solid ${'red'};
  margin-right: 15px;
  border-radius: 25px;
`;

export const Text = styled.Text`
  color: ${'red'};
`;
