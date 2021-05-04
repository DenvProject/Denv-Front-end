import React from 'react';
import { useHistory } from 'react-router-dom';

import DefaultLayout from '../../components/DefaultLayout/DefaultLayout';

import './styles.css';

export default function Disease() {
  const history = useHistory();

  return(
    <>
      <DefaultLayout>
        <div>
          A doença selecionada ainda não tem dados. :(

            <button onClick={() => history.push('/diseases')}>Voltar</button>
        </div>
      </DefaultLayout>
    </>
  );
}