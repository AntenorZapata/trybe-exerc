import { getByText, render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ValidEmail from './ValidEmail';

// test('render', () => {
//   render(<App />);
//   const link = screen.getByText(/learn reac/i);
//   expect(link).toBeInTheDocument();
// });

describe('Testa input email', () => {
  it('render input', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email:');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('text'); // match do Jest
  });

  it('verfica email', () => {
    const { getByLabelText } = render(<App />); // define o seletor que será usado na busca pelo elemento
    const inputEmail = getByLabelText('Email:'); // busca um elemento com o labelText 'Email'
    expect(inputEmail).toBeInTheDocument(); // checa se esse elemento tá no documento
    expect(inputEmail.type).toBe('text'); // E se ele é do tipo text // match do Jest
  });

  it('verifica botão', () => {
    const { getByText } = render(<App />);
    const btnSubmit = getByText('Enviar'); // Busca o elemento pelo texto 'Enviar'
    expect(btnSubmit).toBeInTheDocument(); // checa se tá no documento
    expect(btnSubmit.type).toBe('button'); // E se o tipo é 'button' // match do Jest
  });

  it('verifica btn', () => {
    const { getAllByRole } = render(<App />);
    const btnSubmit = getAllByRole('button'); // pega todos os elementos button do documento
    expect(btnSubmit.length).toBe(1); // check o length desse array com os elementos button // match do Jest
  });

  it('verifica existencia btn enviar', () => {
    const { getByTestId } = render(<App />);
    const btnSubmit = getByTestId('btn-value'); // busca o elemento pelo data-testid
    expect(btnSubmit).toHaveValue('Enviar'); // checa o value dele (precisa tá na chave value)
    expect(btnSubmit).toBeInTheDocument(); // checa se tá no documento // match do Jest
  });

  // Acessar elementos da tela
  // Interagir com eles, se houver necessidade
  // Fazer o test

  it('verifica comportamento do input', () => {
    const { getByLabelText, getByTestId } = render(<App />); // define o seletor
    const inputEmail = getByLabelText('Email:'); // busca o input com label 'EMail'
    const btnSubmit = getByTestId('btn-value'); // busca o elemento pelo data-testid
    const h1EMail = getByTestId('display-email'); // busca o elemento pelo data-testid

    fireEvent.change(inputEmail, {
      // dispara um evento onCHange no elemento input email e define o 'e.target.value' = 'antenorzapata@...'
      target: { value: 'antenorzapata@gmail.com' },
    });

    fireEvent.click(btnSubmit); // dispara um evento de click no button submit

    expect(h1EMail.textContent).toBe('Valor: antenorzapata@gmail.com'); // testa se o h1Email recebe o texto 'Valor: antenorzapata@...'
    expect(inputEmail.value).toBe(''); // testa se o value do inputa email, logo após o teste anterior, está com o valor zerado.
  });
});

test('Testando um componente, caso o email seja valido.', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});
