import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text<{ color: string }>`
  padding-left: 10px;
  font-size: 20px;
  color: ${props => props.color};
`;
