import styled from '@emotion/styled';

export const ListButtons = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  min-width: 80px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid ${p => p.theme.colors.dark};
  border-radius: 4px;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  outline: none;
  color: ${p => p.theme.colors.dark};
  box-shadow: ${p => p.theme.colors.shadow};
  background-color: ${p => p.theme.colors.accent};

  transition: box-shadow 250ms ease-in-out, color 250ms ease-in-out,
    border 250ms ease-in-out;

  :hover {
    border: ${`1px solid ${p => p.theme.colors.white}`};
    box-shadow: ${p => p.theme.colors.shadowAccent};
    color: ${p => p.theme.colors.white};
    transform: scale(1.05);
  }
`;

export const WrapButton = styled.li`
  width: auto;
`;
