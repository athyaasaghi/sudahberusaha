
import React, { useState, Component } from "react";
import './App.css';
import Button, { ButtonProps, ButtonDenganChildrenProps } from "./shared-component/ButtonComponent";
import Paragraph from "./shared-component/Paragraph";
import List from "./shared-component/List";
import Input from "./shared-component/Input";

const dataBaru = [];
for (let i = 0; i < 10; i++) {
  dataBaru.push({
    key: i,
    name: 'One',
    usia: `Usia ke ${i}`
  })

}


export default function App() {
   const data = [{name: "Athya SPT", age: 22}, {name: "Asaghi", age: 23}];

   const [dataList, setdataList] = useState([]);

  function onClickTombolQue(){
    console.log("tombol que diklik");
  }

  //Perubahan fungsi ke funcitional component
  function handleChange() {
    setdataList(dataBaru)
  }

  const [valueInput, setvalueInput] = useState("User belum melakukan Input");

  function onChangeInput(e){
    console.log(e.target.value);
    setvalueInput(e.target.value);
  }

  //fungsi onEnterInput
  function onEnterInput(e) {
    if (e.key == "Enter") {
      let gabunganData = [{
        key: dataList.length +1,
        name: e.target.value,
        usia: `Usia ke ${dataList.length + 1}`
      }].concat(dataList);
      setdataList(gabunganData);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <HelloClass />
        <Button />
        <ButtonProps nama="TombolQue" color="green" onClick={onClickTombolQue} />
        <ButtonDenganChildrenProps>
          <div>Test</div>
        </ButtonDenganChildrenProps>
        <Paragraph nama="AthAsaghi" jabatan="Rebahan!">
          <div>Children dari Paragraph Component</div>
        </Paragraph>

        <ButtonProps nama="Tombol Ubah Data List" onClick={handleChange} />
        <List data={dataList} />

        <Input onChange={onChangeInput} onKeyDown={onEnterInput} />
        <p>{valueInput}</p>
      </header>
    </div>
  )
}

function Hello() {
  const [nama, setNAma] = useState("Lesiong");
  const [jabatan, setJabatna] = useState("Santuy Senior");
  const [usia, setUsia] = useState(41);
  return (
    <div>
      <h1>Hello {nama}</h1>
      <p>jabatan anda: {jabatan}</p>
      <p>usia anda: {usia}</p>
    </div>
  )
}

class HelloClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "Santuy",
      jabatan: "Manusia ",
      usia: 20
    }
  }

  render() {
    const { nama, jabatan, usia } = this.state;
    return (
      <div>
        <h1>Hello {nama}</h1>
        <p>jabatan anda: {jabatan}</p>
        <p>usia anda: {usia}</p>
      </div>
    )
  }
}