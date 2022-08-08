import React from 'react'
import Card from './Card'
import './../styles/Data.css'

const Repo = ({name, owner, description, stargazers_count,forks, language}) => {
  const username = owner? owner.login : '';

  const nFormatter = (num, digits) => {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
      return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
  }
  
  return (
    <Card>
      <div className='repo__div'>
        <h1>{name}</h1>
        <h3 style={{color:"grey"}}>{username}</h3>
        <p>{description}</p>
        <div className="repo__details">
        <p className="repo__detail"><i class="fa fa-file-code-o" aria-hidden="true"></i>  {language}</p>
        <p className="repo__detail"><span class="fa fa-star"></span> {nFormatter(stargazers_count)}</p>
        <p className="repo__detail"><i class="fa fa-code-fork" aria-hidden="true"></i> {forks}</p>
        </div>
      </div>
        
    </Card>
  )
}

export default Repo