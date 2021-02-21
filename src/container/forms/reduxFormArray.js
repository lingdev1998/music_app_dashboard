import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import store from '../../store';
import { bindActionCreators } from 'redux';
import { Field, FieldArray, reduxForm, change, formValueSelector } from 'redux-form';
import { Input, InputNumber, Select, DatePicker, Upload, Button, Icon, message } from 'antd'
import { validate } from './validation/validate';
import { setCurrency } from '../../actions/formArrayAction';
import './form.css';
const Option = Select.Option;
const uploadProps = {
    name: 'file',
    action: '//jsonplaceholder.typicode.com/posts/',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const selector = formValueSelector('formArray')
class ReduxFormArray extends Component {
    constructor(props) {
        super(props)
        this.state = {
            calculatedValue: 65
        }
        this.renderInput = this.renderInput.bind(this);
        this.renderInputNumber = this.renderInputNumber.bind(this);
        this.renderSelect = this.renderSelect.bind(this);
        this.renderSelect2 = this.renderSelect2.bind(this);
        this.renderSelect3 = this.renderSelect3.bind(this);
        this.renderDatePcker = this.renderDatePcker.bind(this);
        this.renderUpload = this.renderUpload.bind(this);
        this.renderFileUpload = this.renderFileUpload.bind(this);
        this.renderMembers = this.renderMembers.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
        this.handleCurrencyCalculation = this.handleCurrencyCalculation.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }
    componentDidMount() {
        this.props.dispatch({
            type: '@@redux-form/ARRAY_PUSH',
            meta: {
                form: 'formArray',
                field: 'members'
            },
            payload: {
                field1: 'euro'
            }
        })
    }
    handleSelectChange = (value) => {
        console.log(value)
    }
    onSubmit = values => {
        console.log(JSON.stringify(values))

    }
    handleCurrencyChange = (currency) => {
        this.props.setCurrency(currency);
    }
    handleCurrencyCalculation = (value, fieldValues) => {
        console.log(fieldValues)
        if (typeof value === 'number') {
            if (fieldValues.field1 === undefined) {
                return 0
            }
            if (fieldValues.field1 === 'euro') {
                return value * this.props.euro
            }
            if (fieldValues.field1 === 'dollar') {
                return value * this.props.dollar
            }
            if (fieldValues.field1 === 'rupees') {
                return value * this.props.rupees
            }
            if (fieldValues.field1 === 'pound') {
                return value * this.props.pound
            }
        }
        if (typeof value === 'string') {
            if (value === undefined) {
                return 0
            }
            if (fieldValues.field2 === undefined) {
                return 0.10
            }
            if (value === 'euro') {
                return fieldValues.field2 * this.props.euro
            }
            if (value === 'dollar') {
                return fieldValues.field2 * this.props.dollar
            }
            if (value === 'rupees') {
                return fieldValues.field2 * this.props.rupees
            }
            if (value === 'pound') {
                return fieldValues.field2 * this.props.pound
            }
            return 0.0
        }

        return 0.0
    }

    renderInput = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <Input
                    placeholder={label}
                    {...input}
                    {...custom}
                />
                {touched && error && <span>{error}</span>}
            </div>

        </div>
    )
    renderInputNumber = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <input
                    placeholder={label}
                    {...input}
                    {...custom}
                    min={0}
                    max={100}
                    type="number"
                    style={{ border: '1px solid #ccc', width: 150, height: 32, borderRadius: 4 }}
                // defaultValue={this.state.amount}
                // onChange={this.handleCurrencyCalculation}
                />
                {touched && error && <span>{error}</span>}
            </div>

        </div>
    )
    renderSelect = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <Select
                    placeholder={label}
                    {...input}
                    {...custom}
                    // defaultValue={'food'}
                    value={input.value}
                    onChange={(value) => input.onChange(value)}
                    onBlur={() => {
                        input.onBlur(input.value)
                    }}
                //  onSelect = {(value) => input.onChange(value)}
                >
                    <Option value="cellphone">cellphone</Option>
                    <Option value="travell">travell</Option>
                    <Option value="hotel">hotel</Option>
                    <Option value="food">food</Option>
                    <Option value="others">others</Option>
                </Select>
                {touched && error && <span>{error}</span>}
            </div>

        </div>
    )
    renderSelect2 = ({ input, label, type, meta: { touched, error }, ...custom }) => {
        console.log(input)
        return <div>
            <label>{label}</label>
            <div>
                <Select
                    placeholder={label}
                    defaultValue={this.props.currency && 'euro'}
                    {...input}
                    {...custom}
                // defaultValue='euro'
                //  value={this.props.currency !== null ?this.props.currency : 'euro'}
                // onChange={(val)=>this.props.setCurrency(val)}
                >
                    <Option value="dollar" key="dollar">Dollar</Option>
                    <Option value="rupees" key="rupees">Rupees</Option>
                    <Option value="euro" key="euro">Euro</Option>
                    <Option value="pound" key="pound">Pound</Option>
                </Select>
                {touched && error && <span>{error}</span>}
            </div>

        </div>
    }
    renderSelect3 = ({ input, label, amount, type, meta: { touched, error }, ...custom }) => {
        return <div>
            <label>{label}</label>
            <div>
                <select
                    placeholder={label}
                    {...input}
                    {...custom}
                >
                    <option value="dollar">Dollar</option>
                    <option value="rupees">Rupees</option>
                    <option value="euro">Euro</option>
                    <option value="pound">Pound</option>
                </select>
                {touched && error && <span>{error}</span>}
            </div>

        </div>
    }
    renderDatePcker = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <DatePicker
                    defaultValue={null}
                    placeholder={label}
                    // format="yyyy/mm/dd"
                    {...input}
                    {...custom}
                    value={input.value != '' ? moment(moment(input.value).format('DD MMM YYYY')) : null}
                />
                {touched && error && <span>{`${error}`}</span>}
            </div>

        </div>
    )
    renderUpload = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <Upload {...input}>
                    <Button>
                        <Icon type="upload" /> Click to Upload
                    </Button>
                </Upload>

                {touched && error && <span>{`${error}`}</span>}
            </div>

        </div>
    )
    renderFileUpload = ({ input, label, type, meta: { touched, error }, ...custom }) => (
        <div>
            <label>{label}</label>
            <div>
                <input
                    type="file"
                    {...input}
                />
                {touched && error && <span>{`${error}`}</span>}
            </div>

        </div>
    )
    renderMembers = ({ change, fields, meta: { error, submitFailed } }) => (
        <div>
            {fields.map((member, index) => (
                <div key={index} style={{ display: 'flex' }}>
                    <div className="array-field">
                        <Field
                            name={`${member}.date`}
                            component={this.renderDatePcker}
                            label="date"
                        />
                    </div>
                    <div className="array-field">
                        <Field
                            name={`${member}.select1`}
                            component={this.renderSelect}
                            label="select1"
                        />
                    </div>
                    <div className="array-field">
                        <Field
                            name={`${member}.select2`}
                            component={this.renderSelect}
                            label="select2"
                        />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.description`} component={this.renderInput} label="Description" />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.field1`} component={this.renderSelect3} label="field1"
                            value={this.props.currency && 'euro'}

                            onChange={(e, value) => {
                                console.log(value)
                                //  console.log( fields.get(index).description)
                                this.props.setCurrency(value)
                                change(`${member}.field3`, this.handleCurrencyCalculation(value, fields.get(index)))
                            }}
                        />
                    </div>
                    <div className="array-field">
                        <Field name={`${member}.field2`} component={this.renderInputNumber} label="Amount"
                            onChange={(e, value) => {
                                //console.log(selector(this.props.state, `${member}.field2`))
                                change(`${member}.field3`, this.handleCurrencyCalculation(value, fields.get(index)))
                            }} 
                            normalize={(value) => +value}/>
                    </div>

                    <div className="array-field">
                        <Field name={`${member}.field3`} component={this.renderInput} label="field3" />
                    </div>

                    <div className="array-field">
                        <Field name={`${member}.field4`} component={this.renderInput} label="field4" />
                    </div>
                    {/* <div>
                        <Upload {...uploadProps}>
                            <Button>
                                <Icon type="upload" /> Click to Upload
                            </Button>
                        </Upload>
                    </div> */}
                    <button
                        type="button"
                        onClick={() => fields.remove(index)} >
                        delete
                    </button>
                </div>
            ))}
            <div className="">
                <button
                    type="button"
                    onClick={() => fields.push({ field1: this.props.currency || 'rupees' })}
                >add
                </button>
                {submitFailed && error && <span>{error}</span>}
            </div>
        </div>
    );

    render() {
        const { handleSubmit, pristine, reset, submitting, change } = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <FieldArray name="members" component={this.renderMembers} change={change} />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

const required = value => (value ? undefined : 'Required')

ReduxFormArray = reduxForm({
    form: 'formArray',
    validate
})(ReduxFormArray)

const mapStateToProps = (state) => {
    return {
        euro: 2,
        dollar: 3,
        rupees: 4,
        pound: 5,
        initialValues: {},
        currency: state.formArrayReducer.currency,
        firstValue: selector(state, 'field4')
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({setCurrency}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ReduxFormArray)
