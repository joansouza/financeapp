import React, { useState } from 'react';

import { MdDelete, MdEdit } from 'react-icons/md';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase-config';
import * as S from './styles';
import UpdateIncomeModal from '../../pages/Income/components/UpdateModal';

function AppList({ arrayItems, user, type }) {
  const [idData, setIdData] = useState();

  async function deleteItem(idDoc) {
    const IntemDoc = doc(db, `${user}${type}`, idDoc);
    await deleteDoc(IntemDoc);
  }

  return (
    <S.Appdiv>
      {idData ? (
        <UpdateIncomeModal
          onClose={() => setIdData(null)}
          user={user}
          idIncome={idData}
        />
      ) : null}
      {arrayItems.map((data) => (
        <S.DescriptionBar key={data.id}>
          <h1>{data.createdAt.toDate().toLocaleDateString()}</h1>
          <h1>{data.descripton}</h1>
          <h1>{data.category}</h1>
          <h1>R$ {data.amount}</h1>

          <button type="button" onClick={() => setIdData(data.id)}>
            <MdEdit color="#672BEB" size="30px" />
          </button>

          <button type="button" onClick={() => deleteItem(data.id)}>
            <MdDelete color="#672BEB" size="30px" />
          </button>
        </S.DescriptionBar>
      ))}
    </S.Appdiv>
  );
}

export default AppList;
