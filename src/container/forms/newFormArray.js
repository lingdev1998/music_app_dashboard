import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, FieldArray, reduxForm } from 'redux-form';
import { Input, Select, DatePicker } from 'antd'
// import {validate} from './validate';

class NewFormArray extends Component {
    constructor(props) {
        super(props)

        this.renderField = this.renderField.bind(this);
        this.renderInput = this.renderInput.bind(this);
        this.renderMembers = this.renderMembers.bind(this);
    }
    onSubmit = values => {
        console.log(JSON.stringify(values))

    }
    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <div>
          <label>{label}</label>
          <div>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}kgkhg</span>}
          </div>
        </div>
      )
      renderInput = ({ input, label, type, meta: { touched, error } }) => (
        <div>
          <label>{label}</label>
          <div>
            <Input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}kgkhg</span>}
          </div>
        </div>
      )
       renderMembers = ({ fields, meta: { error, submitFailed } }) => (
        <div>
          <div>
            <button type="button" onClick={() => fields.push({})}>
              Add Member
            </button>
            {submitFailed && error && <span>{error}</span>}
          </div>
          {fields.map((member, index) => (
            <div key={index}>
              <button
                type="button"
                title="Remove Member"
                onClick={() => fields.remove(index)}
              />
              <h4>Member #{index + 1}</h4>
              <Field
                name={`${member}.field1`}
                type="text"
                component={this.renderField}
                label="field1"
              />
              <Field
                name={`${member}.field2`}
                type="text"
                component={this.renderInput}
                label="field2"
              />
            </div>
          ))}
        </div>
      )
       
    render() {
        const { handleSubmit, pristine, reset, submitting  } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                <FieldArray name="members" component={this.renderMembers} />
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
const validate = (values) => {
    console.log(values)
    const errors = {};
    if (!values.members || !values.members.length) {
        errors.members = { _error: 'At least one member must be entered' };
      } else {
        const membersArrayErrors = [];
        values.members.forEach((member, memberIndex) => {
          const memberErrors = {};
          if (!member || !member.field1) {
            memberErrors.field1 = 'Required';
            membersArrayErrors[memberIndex] = memberErrors;
          }
          if (!member || !member.field2) {
            memberErrors.field2 = 'Required';
            membersArrayErrors[memberIndex] = memberErrors;
          }
        });
        if (membersArrayErrors.length) {
          errors.members = membersArrayErrors;
        }
      }
    return errors;
}

NewFormArray = reduxForm({
    form: 'newFormArray',
    validate
})(NewFormArray)

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFormArray)
