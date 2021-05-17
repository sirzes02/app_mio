import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 90%;
  justify-content: space-between;
`;

export const NameContainer = styled.View<{
  color: string;
}>`
  margin: 30px 0 30px;
  padding: 30px 80px 30px 80px;
  border: 3px solid ${colors.black};
  border-radius: 25px;
  opacity: 0.5;
  background-color: ${props => props.color};
`;

export const TextName = styled.Text<{
  isDark: boolean;
}>`
  font-size: 30px;
  text-align: center;
  color: ${props => (props.isDark ? colors.white : colors.black)};
`;

export const Boton = styled.TouchableHighlight`
  padding: 10px 100px 10px 100px;
  border: 2px solid ${colors.red};
  border-radius: 25px;
  margin-right: 15px;
`;

export const TextButton = styled.Text`
  color: ${colors.red};
`;
