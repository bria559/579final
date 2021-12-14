import { useState, useRef } from 'react';
import GetCovidData from './GetCovidData';
// import Dropdown from "./components/Dropdown"
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import anime from "animejs";

function DisplayCovidData(){
    const inputEl = useRef("");
    const selectEl = useRef("");
    const [country_facts, SetCountryFacts] = useState('');
    const [data, setData] = useState();
    const [values, setValue] = useState('');
    let jsons;
    let country_input;
    let myAnimation = anime({
        targets: 'div',
        translateX: 250,
        rotate: "1turn",
        duration: 800,
        direction: "alternate"
      });


    const handleSelect=(e)=>{
        console.log(e);
        setValue(e);
    
      }
    


    function retrieve(){
        country_input = inputEl.current.value;

        GetCovidData(country_input, (result)=>{
            console.log(result)
            if (result.message === 'Country not found or doesn\'t have any cases'){

                jsons = 'No results'
                SetCountryFacts(jsons);
            }
            else{
                jsons = result[values];
                console.log(jsons);
                SetCountryFacts(jsons);
            }
        })
    }


    function onKeydown(event){
        country_input = inputEl.current.value;
        if (event.key ==='Enter'){
            retrieve();
        }
        }

    return (
        <div className="container">
          <div className="row">
            <div>
                <h2>Welcome to CovidFacts</h2>
                <p>Stay up to date with Covid rates in different countries.</p>
            </div>
            <div className="row">
              <div className="input-group col">
                <input
                  className="form-control"
                  placeholder="Enter a country"
                  ref={inputEl}
                  type="text"
                  onKeyDown = {onKeydown}
                ></input>
                <div>
                <DropdownButton
                    alignRight
                    title="Statistics"
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                        >
                            <Dropdown.Item eventKey="deaths">Deaths</Dropdown.Item>
                            <Dropdown.Item eventKey="recovered">Recovered</Dropdown.Item>
                            <Dropdown.Item eventKey="cases">Cases</Dropdown.Item>
                            <Dropdown.Item eventKey="tests">Tests</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
                    </DropdownButton>    
                </div>
                
                {<button
                  className="btn btn-primary"
                  onClick={() => {
                    retrieve();
                  }}>
                  Show Covid Data
                </button>
                }

                <div className="output row">
                <output id = "covid_output" className="col"><h2 className="col">{country_facts}</h2></output>
                <h4>{values}</h4>

                </div>

              </div>
            </div>
          </div>
        </div>
      );
    
}

export default DisplayCovidData;