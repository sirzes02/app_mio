import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
`;

interface PropsDark {
  dark: boolean;
}

export const Bubble = styled.View<PropsDark>`
  background-color: ${'white'};
  padding: 12px 20px 12px 20px;
  border: 1px solid ${'black'};
  border-radius: 6px;
  background-color: ${props => (props.dark ? 'black' : 'white')};
`;

export const Amount = styled.View`
  display: flex;
`;

export const Text = styled.Text<PropsDark>`
  padding-bottom: 5px;
  color: ${props => (!props.dark ? 'black' : 'white')};
`;

export const Circle = styled.View<{ color: string; dark: boolean }>`
  width: 15px;
  height: 15px;
  border: 1px solid ${props => (!props.dark ? 'black' : 'white')};
  border-radius: 7px;
  background-color: ${props => props.color + ''};
  align-self: center;
`;
