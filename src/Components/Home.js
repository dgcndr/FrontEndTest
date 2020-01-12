import React, { Component } from "react";
import AsyncSelect from "react-select/async";
import Profile from "./Content/Profile";
import DeleteAct from "./DeleteAct";

class Home extends Component {
    state = {
        isLoading: true,
        dataPersonalia: [],
        error: null
    };

        //Memasukan data dari random user
        componentDidMount() {
            fetch("https://randomuser.me/api/?results=50")
                .then(response => response.json())
                .then(response => this.setState({
                dataPersonalia : response.results.map(data => (
                    {
                        label: `${data.name.first} ${data.name.last}`,
                        value: `${data.name.first} ${data.name.last}`,
                        photo: data.picture.thumbnail
                    }
                    )
                )
                })
            );
        }

        //Search nama personalia
        searchName = (inputValue)=>{
            return this.state.dataPersonalia.filter(i => 
                i.label.toLowerCase().includes(inputValue.toLowerCase())
                );
        };

        //Mengecek inputan
        promiseOptions = inputValue => 
            new Promise(resolve => {
                setTimeout(() => {
                    resolve(this.searchName(inputValue));
                }, 1000);
            });

        //export default class Home extends Component<*, State> {
        //    state = { dataPersonalia: '' };
        //    handleInputChange = (newValue: string) => {
        //    const inputValue = newValue.replace(/\W/g, '');
        //    this.setState({ inputValue });
        //    return inputValue;
        //};

        render() {
            const {dataPersonalia} = this.state
            return (
                <div className="selProf">
                    <AsyncSelect
                        cacheOptions
                        isClearable
                        placeholder={"Pilih personalia..."}
                        defaultOptions={dataPersonalia}
                        loadOptions={this.promiseOptions}
                        components={{ SingleValue: Profile }}
                        formatOptionLabel={DeleteAct}
                        openMenuOnSelect={this.promiseOptions}
                        onChange={dataPersonalia}
                        menuIsOpen={true}
                    />
                </div>
            );
        }
    }


export default Home;