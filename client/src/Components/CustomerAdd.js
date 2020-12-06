import React from 'react';
import {post} from 'axios';

class CustomerAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file:null,
            userName:'',
            birthday:'',
            gender:'',
            job:'',
            fileName:''
        }
    }

    handleFormSubmit = (e) => {
        e.proventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.date);
            })
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        })
    }

    handleValueChage = (e) => {
        let nextState ={};
        nextState{e.target.name} = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/api/customers';
        const fromDate = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config);
    }


    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1>고객추가</h1>
                프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChage={this.handleFileChange} /><br/>
                이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValuChange} /><br/>
                생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
                성별: <input type="text" name="gender" value={this.state.gender} onChange={this.hadleValueChage} /><br/>
                직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChage} /><br/>
                <botton type="submit">추가하기</botton>
            </form>
        )
        
    }
}

export default CustomerAdd;