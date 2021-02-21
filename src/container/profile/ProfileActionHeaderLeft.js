import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Tooltip, Input, Button } from 'antd';
import { setFilterText, setViewType, showAddProfile, setSortKey } from '../../actions/profile_actions';
import SettingPopover from '../../components/popover/settingPopover';
import './profile.css';
const Search = Input.Search;
function ProfileActionHeaderLeft(props) {
    return (
        <div className="view-icons">
            <Tooltip title="Grid View">
                <Icon
                    style={{ fontSize: 25, cursor: 'pointer' }}
                    type="appstore-o"
                    onClick={() => props.setViewType('GRID')}
                />
            </Tooltip>
            <Tooltip title="List View">
                <Icon
                    style={{ fontSize: 25, marginLeft: '0.5rem', marginRight: '1rem', cursor: 'pointer' }}
                    type="profile"
                    onClick={() => props.setViewType('LIST')}

                />
            </Tooltip>

            {props.sortKey === 'DESC'
                ? <Tooltip title="Sort by Ascending">
                    <div onClick={() => props.setSortKey('ASC')}>
                        <i className="fas fa-sort-alpha-up"
                            style={{ fontSize: 25, marginLeft: '0.5rem', marginRight: '1rem', cursor: 'pointer' }}

                        ></i>
                    </div>
                </Tooltip>
                : <Tooltip title="Sort by Descending">
                    <div onClick={() => props.setSortKey('DESC')}>
                        <i className="fas fa-sort-alpha-down"
                            style={{ fontSize: 25, marginLeft: '0.5rem', marginRight: '1rem', cursor: 'pointer' }}
                        ></i>
                    </div>
                </Tooltip>}
            {props.viewType === 'LIST' && <Tooltip title="Add Profile">
                <Button
                    type="primary"
                    icon="plus"
                    onClick={() => props.showAddProfile()}
                >
                    Add Profile</Button>
            </Tooltip>}

        </div>
    )
}

const mapStateToProps = ({ profileReducer }) => ({
    viewType: profileReducer.viewType,
    sortKey: profileReducer.sortKey
})
const mapDispatchProps = dispatch => bindActionCreators({
    setFilterText,
    setViewType,
    showAddProfile,
    setSortKey
}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(ProfileActionHeaderLeft);