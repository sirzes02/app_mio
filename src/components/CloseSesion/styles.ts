import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Button = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  height: 65%;
  padding: 0 25px 0 25px;
  border: 1px solid ${colors.red};
  margin-right: 15px;
  border-radius: 25px;
`;

export const Text = styled.Text`
  color: ${colors.red};
`;
