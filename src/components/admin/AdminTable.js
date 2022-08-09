import React from 'react'
import { CButton, CCard, CCardBody, CCardFooter, CCardHeader, CCol, CRow, CSmartTable } from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilNoteAdd, cilSend, cilTrash } from '@coreui/icons'
import { DeleteApi } from '../../services/Axios'
import { api_server_url } from 'src/config/urls'

export const AdminTable = (props) => {

  return (
    <>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong>{props.table_title}</strong>
            </CCardHeader>
            <CCardBody>
              <CSmartTable
                sorterValue={{ column: 'id', state: 'asc' }}
                tableProps={{ striped: true, responsive: true }}
                clickableRows
                items={props.data}
                columns={props.columns}
                tableFilter
                cleaner
                loading={props.loading}
                itemsPerPageSelect
                itemsPerPage={5}
                columnSorter
                pagination
                scopedColumns={{}}
              />
            </CCardBody>
            <CCardFooter>

              <CButton
                style={{ display: (props.resetData) ? 'block' : 'none' }}
                size="sm"
                color='danger'
                className='float-end'
                onClick={() => DeleteApi(api_server_url + props.delete_all_url)
                  .then(function () {
                    props.resetData();
                  })}
              >Clear All <CIcon icon={cilTrash} /></CButton>

              <CButton
                style={{ display: (props.postQuestion) ? 'block' : 'none' }}
                size="sm"
                color='success'
                className='float-end'
                onClick={() => props.postQuestion()}>Create Question <CIcon icon={cilNoteAdd} /></CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}