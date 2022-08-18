import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormCheck,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle } from '@coreui/icons'

export const CQuestion = (props) => {
  let options = [];

  const handleSelect = (e, index) => {
    options[index] = (e.target.value !== '' && e.target.value === options[index]) ? '' : e.target.value;
    console.log(options);
  }

  return (
    <>
      <CCol md={12}>
        <CCard md={12}>
          <CCardHeader>
            <small><em>Phase {props.phase}</em></small> <strong>Question {props.index}</strong><span className='float-end'><strong>{props.index}/{props.total}</strong></span>

          </CCardHeader>
          <CCardBody>
            <p style={{ fontSize: 'large' }}><em>{props.title}</em></p>
            {props.options.map((option, index) => {
              return (
                <div key={index}>
                  <CButton className='question-card'>
                    <CFormCheck id={option} value={option} key={option} label={option} onChange={(e) => { handleSelect(e, index) }} />
                  </CButton>
                </div>
              )
            })}
          </CCardBody>
          <CCardFooter>

            <CButton
              size="lg"
              style={{ width: '100%' }}
              color='success'
              className='float-end'
              onClick={() => { props.submitAnswer(options) }}
            >Submit <CIcon icon={cilCheckCircle} /></CButton>
          </CCardFooter>
        </CCard >
      </CCol>
    </>
  )
}